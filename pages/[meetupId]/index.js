import { DUMMY_MEETUPS } from '../../data';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails({ meetups }) {
  return <MeetupDetail meetup={DUMMY_MEETUPS} />;
}

export default MeetupDetails;
