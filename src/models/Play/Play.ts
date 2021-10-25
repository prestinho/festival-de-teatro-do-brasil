export interface Play {
    id: string,
    name: string;
    group?: string;
    state: string;
    year?: string;
    summary?: string;
    about?: string;
    teaser?: string;
    crew?: (CrewPerson)[] | null;
    poster: Image;
    images?: (Image)[] | null;
    sessions: Session[];
  }
  export interface CrewPerson {
    title: string;
    name: string;
  }
  export interface Image {
    image: string;
    caption: string;
  }
  export interface Session {
    place: Place;
    time: Time;
    ticketFees?: (TicketFeesEntity)[] | null;
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
    id: string,
    name: string;
  }