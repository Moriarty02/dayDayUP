import React from 'React';
import ReactDOM from 'react-dom';
import Counter from './components/counter';
import { createStore } from 'redux';
import counter from './reducers'

const store = createStore(counter);
const render = () => ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={store.dispatch({ type: "INRCEMENT" })}
        onDecrement={store.dispatch({ type: "DECREMENT" })}
    ></Counter>, document.getElementById("root")
)
render();
store.subscribe(render)