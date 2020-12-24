import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalStyles from './components/GlobalStyles'; 
import Nav from './components/Nav';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';


const App = () => {
    return (
        <>
            <GlobalStyles />
            <Nav/>
        <Switch>
            <Route path="/" exact component={AboutPage} />
            <Route path="/my-work" exact component={WorkPage} />
            <Route path="/contact" exact component={ContactPage} />
        </Switch>
        </>
      )
}

export default App;
