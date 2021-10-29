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

export const emptyTime = (): Time => ({
  day: "",
  hour: "",
});
export const emptyPlace = (): Place => ({
  id: "",
  name: "",
  address: "",
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
  caption: "",
});
export const emptyPlay = (): Play => ({
  id: "",
  name: "",
  group: "",
  state: "",
  year: "",
  about: "",
  teaser: "",
  crew: "",
  poster: emptyImage(),
  sessions: [emptySession()],
});
