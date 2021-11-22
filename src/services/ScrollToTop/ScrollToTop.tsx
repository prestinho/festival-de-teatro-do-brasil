import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { History } from "history";

export interface Props {
  history: History;
}

function ScrollToTop({ history }: Props) {
  useEffect(() => {
    return history.listen(() => {
      window.scrollTo(0, 0);
    });
  }, []);

  return null;
}

export default withRouter(ScrollToTop);
