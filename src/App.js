import React from "react";
import { Cards, Map, Chart, News, Nav, Footer } from "./components";
import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { fetchData } from "./api";

import Covid19Logo from "./images/Covid19.svg";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  homePage = () => {
    return (
      <React.Fragment>
        <Cards data={this.state.data} />
        <Map />
      </React.Fragment>
    );
  };

  render() {
    return (
      <Router>
        <div className={styles.container}>
          <img className={styles.logo} src={Covid19Logo} alt="Covid-19" />
          <Nav />
          <Switch>
            <Route exact path="/covid19" component={this.homePage} />
            <Route path="/news" component={News} />
            <Route path="/charts" component={Chart} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
