export interface Play {
  id: string;
  name: string;
  group?: string;
  state: string;
  year?: string;
  about?: string;
  teaser?: string;
  crew?: string;
  poster: Image;
  images?: Image[] | null;
  sessions: Session[];
  timestamp?: string;
  phone?: string;
  userId?: string;
  status?: string;
}
export interface Image {
  image: string;
  caption: string;
}
export interface Session {
  place: Place;
  time: Time;
  ticketFees?: TicketFeesEntity[] | null;
}
export interface Time {
  day: string;
  hour: string;
}
export interface TicketFeesEntity {
  type: string;
  value: string;
}
export interface Place {
  id: string;
  name: string;
  address: string;
}

// export const emptyTime = (): Time => ({
//   day: "",
//   hour: "",
// });
// export const emptyPlace = (): Place => ({
//   id: "",
//   name: "",
//   address: "",
// });
// export const emptyTicketFeesEntity = (): TicketFeesEntity => ({
//   type: "",
//   value: "",
// });
// export const emptySession = (): Session => ({
//   place: emptyPlace(),
//   time: emptyTime(),
//   ticketFees: [emptyTicketFeesEntity()],
// });
// export const emptyImage = (): Image => ({
//   image: "",
//   caption: "",
// });
// export const emptyPlay = (userId = ""): Play => ({
//   id: "",
//   name: "",
//   group: "",
//   state: "AL",
//   year: "",
//   about: "",
//   teaser: "",
//   crew: "",
//   phone: "",
//   userId: userId,
//   poster: emptyImage(),
//   sessions: [emptySession()],
// });

export const emptyTime = (): Time => ({
  day: "2022-03-26",
  hour: "12:00",
});
export const emptyPlace = (): Place => ({
  id: "",
  name: "LUGAR",
  address: "ENDEREÇO",
});
export const emptyTicketFeesEntity = (): TicketFeesEntity => ({
  type: "",
  value: "",
});
export const emptySession = (): Session => ({
  place: emptyPlace(),
  time: emptyTime(),
  ticketFees: [emptyTicketFeesEntity()],
});
export const emptyImage = (): Image => ({
  image: "",
  caption: "CAPTION",
});
export const emptyPlay = (): Play => ({
  id: "",
  name: "PEÇA",
  group: "GRUPO",
  state: "AL",
  year: "1999",
  about: "SOBRE",
  teaser: "",
  crew: "FICHA",
  phone: "1234",
  userId: "",
  poster: emptyImage(),
  sessions: [emptySession()],
});

export const comparator = (a: Play, b: Play) => {
  try {
    const timeA = a.sessions?.[0]?.time;
    const timeB = b.sessions?.[0]?.time;
    if (parseInt(timeA.day.split("-")[2]) - parseInt(timeB.day.split("-")[2]))
      return parseInt(timeA.day.split("-")[2]) - parseInt(timeB.day.split("-")[2]);
    else
      return (
        parseInt(timeA.hour.split(":").join("")) -
        parseInt(timeB.hour.split(":").join(""))
      );
  } catch (e) {
    return 0;
  }
};

export const getStatusName = (letter: string | undefined) => {
  return letter === "R"
    ? "Houve um problema"
    : letter === "A"
    ? "Validada"
    : "Em análise";
};
