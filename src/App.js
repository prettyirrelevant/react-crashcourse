import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";
import About from "./views/About";
import Product from "./views/Product";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header />

        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/products/:id">
              <Product />
            </Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
