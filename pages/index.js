import React from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { DUMMY_MEETUPS } from '../data';

function HomePage({ meetups }) {
  return <MeetupList meetups={meetups} />;
}

export async function getStaticProps() {
  return {
    props: { meetups: DUMMY_MEETUPS },
    revalidate: 10,
  };
}

export default HomePage;
