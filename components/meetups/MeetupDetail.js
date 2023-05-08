import styles from './MeetupDetail.module.scss';

function MeetupDetail({ meetup }) {
  console.log(meetup);
  const { image, title, address, description } = meetup[0];

  return (
    <section className={styles.meetupDetail}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}

export default MeetupDetail;
