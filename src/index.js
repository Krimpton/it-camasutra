import * as serviceWorker from './serviceWorker';
import {rerenderEntireTree} from './render';
import state from "./Redux/state";

rerenderEntireTree(state);

serviceWorker.unregister();