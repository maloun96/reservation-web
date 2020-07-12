import { combineReducers } from 'redux';

import Customizer from './customizer.reducer';
import Pub from './pub.reducer';

const reducers = combineReducers({
    Customizer,
    Pub
});

export default reducers;
