import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '@/App.scss';
import Homepage from '@/pages/home';
import Farm from '@/pages/farm';
import RouteConfig from '@/constants/route';
import Hedge from '@/pages/hedge';
import './global.scss';
function App() {
    const { i18n } = useTranslation();

    useEffect(() => {
        if (i18n.language === 'ru') {
            document.getElementsByTagName('html')[0].className = 'ru';
        }
    }, []);

    return (
        <Router>
            <Switch>
                <Route exact path={RouteConfig.home}>
                    <Homepage />
                </Route>
                <Route exact path={RouteConfig.farm}>
                    <Farm />
                </Route>
                <Route exact path={RouteConfig.hedge}>
                    <Hedge />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
