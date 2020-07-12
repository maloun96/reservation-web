import React, { useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

//un-comment this auth by using firebase only
// import app from './data/base';
// import {useState} from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import * as serviceWorker from './serviceWorker';

// ** Import custom components for redux**
import { Provider } from 'react-redux';
import store from './store/index';
import App from "./components/app";

// Import custom Components

import PubList from "./pages/Pub/PubList";
import PubAdd from "./pages/Pub/PubAdd";

//config data
import configDB from './data/customizer/config'

//firebase Auth only then un-comment this current User code
function Root() {
    const abortController = new AbortController();
    // const [currentUser, setCurrentUser] = useState(false);

    useEffect(() => {
        const layout = localStorage.getItem('layout_version') || configDB.data.color.layout_version
        // app.auth().onAuthStateChanged(setCurrentUser);

        document.body.classList.add(layout);

        console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
        console.disableYellowBox = true;

        return function cleanup() {
            abortController.abort();
        }

    }, [abortController]);

    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter basename={`/`}>
                    <ScrollContext>
                        <Switch>
                            {/* NOTE :- If u want login with firebase only then uncomment this currentUser condition*/}
                            {/* {currentUser !== null ? */}
                            <Fragment>
                                <App>
                                    <Route exact path={`${process.env.PUBLIC_URL}/pubs`} component={PubList}/>
                                    <Route exact path={`${process.env.PUBLIC_URL}/pubs/add`} component={PubAdd}/>
                                </App>
                            </Fragment>
                            {/* :
                                <Redirect to={`${process.env.PUBLIC_URL}/login`} />
                            } */}
                        </Switch>
                    </ScrollContext>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
