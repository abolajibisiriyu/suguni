import { BrowserRouter, Route } from "react-router-dom";

import GlobalStyle from "./styles";
import Home from "./pages/Home";
import Output from "./pages/Output";

export const Routes = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/output" exact component={Output} />
  </>
);

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
