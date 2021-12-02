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
  status: string;
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
export const emptyPlay = (userId = ""): Play => ({
  id: "",
  name: "",
  group: "",
  state: "AL",
  year: "",
  about: "",
  teaser: "",
  crew: "",
  phone: "",
  status: "P",
  userId: userId,
  poster: emptyImage(),
  sessions: [emptySession()],
});

// export const emptyTime = (): Time => ({
//   day: "2022-03-26",
//   hour: "12:00",
// });
// export const emptyPlace = (): Place => ({
//   id: "",
//   name: "LUGAR",
//   address: "ENDEREÇO",
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
//   caption: "CAPTION",
// });
// export const emptyPlay = (): Play => ({
//   id: "",
//   name: "PEÇA",
//   group: "GRUPO",
//   state: "AL",
//   year: "2010",
//   about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius morbi enim nunc faucibus a pellentesque sit. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Sodales ut etiam sit amet nisl purus in mollis. Luctus venenatis lectus magna fringilla urna porttitor. Urna nunc id cursus metus aliquam eleifend mi in. Velit dignissim sodales ut eu sem. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Pellentesque nec nam aliquam sem et tortor consequat id. Aliquet enim tortor at auctor urna nunc id cursus metus. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Euismod in pellentesque massa placerat.
// In hendrerit gravida rutrum quisque non tellus orci ac auctor. Est ultricies integer quis auctor elit sed vulputate mi. Proin gravida hendrerit lectus a. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Lacus luctus accumsan tortor posuere ac ut. Auctor elit sed vulputate mi sit amet. Et pharetra pharetra massa massa ultricies mi quis. Sit amet mauris commodo quis imperdiet massa. Diam quam nulla porttitor massa id neque aliquam. Ut porttitor leo a diam. Lorem donec massa sapien faucibus et molestie. Feugiat vivamus at augue eget arcu dictum varius duis at. Tempor orci dapibus ultrices in iaculis nunc. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Nisi lacus sed viverra tellus. Egestas egestas fringilla phasellus faucibus scelerisque. Tristique nulla aliquet enim tortor at auctor urna nunc. Quis vel eros donec ac. Senectus et netus et malesuada fames ac turpis egestas maecenas. Fringilla est ullamcorper eget nulla facilisi.
// In hendrerit gravida rutrum quisque non tellus orci ac. Vel orci porta non pulvinar neque laoreet suspendisse. Elementum integer enim neque volutpat ac. Pulvinar etiam non quam lacus suspendisse faucibus. Massa massa ultricies mi quis hendrerit. Placerat vestibulum lectus mauris ultrices. Ipsum dolor sit amet consectetur adipiscing elit. Eget arcu dictum varius duis at consectetur lorem. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Et malesuada fames ac turpis. Purus in mollis nunc sed id semper risus. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna.`,
//   teaser: "",
//   crew: `DIREÇÃO: DIRETORA
// ELENCO: PESSOA 1, PESSOA 2, PESSOA 3
// ILUMINAÇÃO: ILUMINADORA
// SONOPLASTIA: SONOPLASTA
// FIGURINO: FIGURINISTA
// MAQUIAGEM: MAQUIADORA
// PRODUÇÃO: PRODUTORA

// AGRADECIMENTOS: PESSOA 4, PESSOA 5
//   `,
//   phone: "(81) 9 9999.9999",
//   userId: "",
//   status: "P",
//   poster: emptyImage(),
//   sessions: [emptySession()],
// });

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
