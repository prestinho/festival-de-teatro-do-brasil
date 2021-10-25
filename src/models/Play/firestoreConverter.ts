import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "@firebase/firestore";
import { Image, Place, Play, Time, Session } from "./Play";

const playConverter = {
  toFirestore(play: Play): DocumentData {
    return {};
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Play {
    const playData = snapshot.data(options)!;

    const poster: Image = {
      image: playData.poster.image,
      caption: playData.poster.caption,
    };

    const sessions: Session[] = [];
    playData.sessions.forEach((session: any) => {
      const place: Place = {
        name: session.place.name,
        id: session.place.id,
      };
      const time: Time = {
        day: session.day,
        hour: session.hour,
      };
      sessions.push({
        time: time,
        place: place,
      });
    });

    const play: Play = {
      id: snapshot.id,
      name: playData.name,
      group: playData.group,
      poster: poster,
      sessions: sessions,
      state: playData.state,
    };

    return play;
  },
};

export default playConverter;