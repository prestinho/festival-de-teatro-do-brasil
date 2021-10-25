import React, { useEffect, useState } from "react";
import FiltersContainer from "../../components/Filters/FiltersContainer/FiltersContainer";
import PlaysGrid from "../../components/PlaysGrid/PlaysGrid";
import Banner from "./components/Banner/Banner";
import { PageContainer } from "./styles";

import { db } from "../../apis/configs/firebase";
import { collection, onSnapshot } from "firebase/firestore";

import { Play, Image, Session, Place, Time } from "../../models/Play/Play";
import playConverter from "../../models/Play/firestoreConverter";

const Home: React.FC = () => {
  const [plays, setPlays] = useState<Play[]>([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "plays"), (snapshot) =>
        setPlays(
          snapshot.docs.map((document) => {
            const playData = document.data();
            console.log(playData);


            // var playsRef = collection(db, 'plays');
            
            // console.log(playData.sessions[0].placeByRef);

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
              id: document.id,
              name: playData.name,
              group: playData.group,
              poster: poster,
              sessions: sessions,
              state: playData.state,
            };

            return play;
          })
        )
      ),
    []
  );

  // useEffect(() => {
  //   const playsCollectionRef = collection(db, "plays");
  //   const getPlays = async () => {
  //     const data = await getDocs(playsCollectionRef);

  //     const allPlays : Play[] = [];

  //     data.forEach((document: any) => {
  //       const playData = document.data();
  //       console.log('play atual : ', playData)

  //       const poster : Image = {
  //         image: playData.poster.image,
  //         caption: playData.poster.caption
  //       }

  //       const sessions : Session[] = [];
  //       playData.sessions.forEach((session: any) => {
  //         const place : Place = {
  //           name: session.place.name,
  //           id: session.place.id
  //         }
  //         const time : Time = {
  //           day: session.day,
  //           hour: session.hour,
  //         }
  //         sessions.push({
  //           time: time,
  //           place: place
  //         })
  //       });

  //       const play : Play = {
  //         id: document.id,
  //         name: playData.name,
  //         group: playData.group,
  //         poster: poster,
  //         sessions: sessions,
  //         state: playData.state
  //       }

  //       allPlays.push(play);
  //     });

  //     setPlays(allPlays);
  //   };
  //   getPlays();
  //   return () => {};
  // }, []);

  return (
    <PageContainer>
      <Banner />
      <FiltersContainer></FiltersContainer>
      <PlaysGrid plays={plays} />
    </PageContainer>
  );
};

export default Home;
