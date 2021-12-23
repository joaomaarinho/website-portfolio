import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Navbar/Header";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router className="body">
      <Header />
      <Switch>
        <Route path="/" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/work" component={Work} exact />
      </Switch>
    </Router>
  );
}

export default App;
