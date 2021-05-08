import { BrowserRouter as Router, Route } from "react-router-dom";
//components
import Bid from "./components/Bid";
//styles
import "./styles/App.scss";
const App = () => {
  return (
    <Router>
      <Route exact path="/bid/:id" component={Bid} />
    </Router>
  );
};

export default App;
