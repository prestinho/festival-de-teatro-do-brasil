export interface Play {
    name: string;
    group?: string;
    state: string;
    year?: string;
    summary: string;
    about: string;
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
    place: string;
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
  