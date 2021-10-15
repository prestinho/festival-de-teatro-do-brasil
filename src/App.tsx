import GlobalStyles from "./styles/GlobalStyles";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar/>
      <Home />
    </>
  );
}

export default App;
