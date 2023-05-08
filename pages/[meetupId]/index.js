import MeetupDetail from '../../components/meetups/MeetupDetail';
import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../../utils/dbConnect';

function MeetupDetails({ meetupData }) {
  return <MeetupDetail meetupData={meetupData} />;
}

export async function getStaticPaths() {
  const { client, db } = await connectToDatabase();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.distinct('_id');
  client.close();

  const paths = meetups.map((meetup) => ({
    params: { meetupId: meetup.toString() },
  }));

  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;
  const { client, db } = await connectToDatabase();
  const meetupsCollection = db.collection('meetups');
  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetupData: { ...selectedMeetup, _id: meetupId },
    },
  };
}

export default MeetupDetails;
