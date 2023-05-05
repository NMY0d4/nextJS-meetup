import React, { Fragment } from 'react';
import { DUMMY_MEETUPS } from '../../data';

const { image, title, indexOf, address, description } = DUMMY_MEETUPS[0];

function MeetupDetails() {
  return (
    <Fragment>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </Fragment>
  );
}

export default MeetupDetails;
