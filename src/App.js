import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Search from './pages/Search';

export default function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/about">
                    <About />
                </Route>

                <Route path="/search">
                    <Search />
                </Route>

                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}
