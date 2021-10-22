import React, { useEffect, useState } from "react";
import PlayCard from "../PlayCard/PlayCard";
import { db } from "../../apis/configs/firebase";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

import { Play, Image, Session, Place, Time, TicketFeesEntity } from "../../models/Play";

import { Container } from "./styles";

export interface Props {}

//const plays = require("../../assets/jsons/plays.json");
const p = require("../../assets/jsons/plays.json");

const PlaysGrid: React.FC<Props> = ({}) => {
  const [plays, setPlays] = useState<Play[]>([]);
  const playsCollectionRef = collection(db, "plays");

  useEffect(() => {
    const getPlays = async () => {
      const data = await getDocs(playsCollectionRef);

      const allPlays : Play[] = [];

      data.forEach((document: any) => {
        const playData = document.data();
        console.log('play atual : ', playData)

        const poster : Image = {
          image: playData.poster.image,
          caption: playData.poster.caption
        }

        const sessions : Session[] = [];
        playData.sessions.forEach((session: any) => {
          const place : Place = { 
            name: session.place.name,
            address: session.place.address,
            state: session.place.state
          }
          const time : Time = {
            day: session.day,
            hour: session.hour,
          }
          sessions.push({
            time: time,
            place: place
          })
        });

        const play : Play = {
          id: document.id,
          name: playData.name,
          group: playData.group,
          poster: poster,
          sessions: sessions,
          state: playData.state
        }

        allPlays.push(play);
      });

      setPlays(allPlays);
    };
    getPlays();
    return () => {};
  }, []);

  return (
    <Container>
      {plays.map((play: Play) => (
        <PlayCard key={play.id} play={play} />
      ))}
    </Container>
  );
};

export default PlaysGrid;
