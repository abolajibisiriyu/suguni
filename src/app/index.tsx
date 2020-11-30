import { BrowserRouter, Route } from "react-router-dom";

import GlobalStyle from "./styles";
import Home from "./pages/Home";
import Output from "./pages/Output";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/output" exact component={Output} />
      </BrowserRouter>
    </>
  );
}

export default App;
