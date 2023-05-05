import React from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { DUMMY_MEETUPS } from '../data';

const meetupsData = DUMMY_MEETUPS;

function HomePage() {
  return <MeetupList meetups={meetupsData} />;
}

export default HomePage;
