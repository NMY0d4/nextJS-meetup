import React from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';

function HomePage({ meetups }) {
  return <MeetupList meetups={meetups} />;
}

// export async function getServerSideProps(context) {
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data from api
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(({ _id, ...meetup }) => ({
        ...meetup,
        id: _id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
