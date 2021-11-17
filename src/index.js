import React from 'react';
import { render } from 'react-dom';

export const Context = React.createContext('');

const App = () => {
    return (
    <Context.Provider value="Hello World!">
        <Child1 />
        <Child2 />
    </Context.Provider>
    );
}

const Child1 = () => {
    return (
        <Context.Consumer>
            {
                value => <div>{value}</div>
            }
        </Context.Consumer>
    )
};

const Child2 = () => {
    const context = React.useContext(Context);

    return (
        <div>{context}</div>
    )
}

render(<App />, document.getElementById('root'));