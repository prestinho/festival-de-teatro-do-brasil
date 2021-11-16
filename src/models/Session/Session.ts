export type Session = {
  isAuthenticated?: boolean;
  redirectPath: string;
  auth?: any;
};

export const initialSession: Session = {
  redirectPath: "",
};
