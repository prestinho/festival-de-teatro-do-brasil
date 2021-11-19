import { Play } from "../models/Play/Play";

export const mockPlay: Play = {
  id: "id",
  name: "name",
  group: "group",
  state: "state",
  year: "year",
  about: "about",
  teaser: "teaser",
  crew: "crew",
  poster: { image: "poster-image", caption: "poster-caption" },
  sessions: [
    {
      place: { id: "place-id", name: "place-name", address: "place-address" },
      time: { day: "2020-03-25", hour: "20:00" },
    },
  ],
  phone: "(81) 9 9560.3769",
};
