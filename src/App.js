import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalStyles from './components/GlobalStyles'; 
import Nav from './components/Nav';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
import WorkDetailsPage from './pages/WorkDetailsPage';


const App = () => {
    return (
        <>
            <GlobalStyles />
            <Nav/>
        <Switch>
            <Route path="/" exact component={AboutPage} />
            <Route path="/work" exact component={WorkPage} />
            <Route path="/contact" exact component={ContactPage} />
            <Route path="/work/:id" exact component={WorkDetailsPage} />
        </Switch>
        </>
      )
}

export default App;
