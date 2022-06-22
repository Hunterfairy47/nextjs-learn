import MeetUpItem, { MeetUpItemPageProps } from './MeetUpItem';
import classes from './MeetupList.module.css';


export interface MeetupListPageProps {
    meetUps: MeetUpItemPageProps[]
}

function MeetupListPage(props:MeetupListPageProps) {
  return (
    <ul className={classes.list}>
      {props.meetUps.map((meetUp) => (
        <MeetUpItem
          key={meetUp.id}
          id={meetUp.id}
          image={meetUp.image}
          title={meetUp.title}
        />
      ))}
    </ul>
  );
}

export default MeetupListPage;