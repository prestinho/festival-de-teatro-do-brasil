import {
  DocumentData,
  QueryDocumentSnapshot,
  serverTimestamp,
  SnapshotOptions,
} from "@firebase/firestore";
import { Image, Place, Play, Time, Session } from "./Play";

const playConverter = {
  toFirestore(play: Play): DocumentData {
    return {
      ...play,
      timestamp: serverTimestamp(),
    };
  },
  fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Play {
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
        address: session.place.address,
      };
      const time: Time = {
        day: session.time.day,
        hour: session.time.hour,
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
      state: playData.state,
      year: playData.year,
      phone: playData.phone,
      userId: playData.userId,
      about: playData.about,
      crew: playData.crew,
      teaser: playData.teaser,
      poster: poster,
      sessions: sessions,
      status: playData.status ?? "P",
    };

    return play;
  },
};

export default playConverter;
