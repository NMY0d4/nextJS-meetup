import { DUMMY_MEETUPS } from '../../data';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails({ meetupData }) {
  
  return <MeetupDetail meetupData={meetupData} />;
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const { meetupId } = context.params;
  console.log(meetupId);

  return {
    props: {
      meetupData: { ...DUMMY_MEETUPS[0], id: meetupId },
    },
  };
}

export default MeetupDetails;
