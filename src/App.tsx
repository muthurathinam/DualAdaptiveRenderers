import React from 'react';
import { OldRenderer, NewRenderer} from "./Renderers";
import './App.css';

export default class App extends React.Component {
    render() {
        return (
            <div id="app">
                <div className="Layouts">
                    <OldRenderer />
                    <NewRenderer />
                </div>
            </div>
        )
    }
}