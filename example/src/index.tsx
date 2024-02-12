import * as React from 'react';
import {FC, Fragment} from 'react';
import ReactDOM from 'react-dom/client'
import BasicExample from "./basic";
import './index.scss';

const App: FC = () => {
    return <Fragment>
        <BasicExample/>
    </Fragment>
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);