import { Fragment } from "preact";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import "./style";
import "preact-material-components/style.css";

const App = () => (
  <Fragment>
    <Header />
    <Container />
  </Fragment>
);

export default App;
