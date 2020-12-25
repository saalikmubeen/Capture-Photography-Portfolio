import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import GlobalStyles from './components/GlobalStyles'; 
import Nav from './components/Nav';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
import WorkDetailsPage from './pages/WorkDetailsPage';


const App = () => {
    const location = useLocation();
    console.log(location)
    return (
        <>
            <GlobalStyles />
            <Nav />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route path="/" exact component={AboutPage} />
                    <Route path="/work" exact component={WorkPage} />
                    <Route path="/contact" exact component={ContactPage} />
                    <Route path="/work/:id" exact component={WorkDetailsPage} />
                </Switch>
            </AnimatePresence>
        </>
      )
}

export default App;
