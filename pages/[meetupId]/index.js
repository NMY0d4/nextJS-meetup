import React, { Fragment } from 'react';
import { DUMMY_MEETUPS } from '../../data';
import MeetupDetail from '../../components/meetups/MeetupDetail';


function MeetupDetails() {
  return (
    <MeetupDetail meetup={DUMMY_MEETUPS} />
  );
}

export default MeetupDetails;
