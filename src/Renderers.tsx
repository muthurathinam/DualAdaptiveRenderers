import React from 'react';
import './App.css';
import { AdaptiveCard, HostConfig } from "adaptivecards";
import { AdaptiveCard as V2_AdaptiveCard, HostConfig as V2_HostConfig } from "adaptivecardsv2";
import Payload from './Payload';

export class OldRenderer extends React.Component {
    private OldCard: HTMLDivElement | null = null;

    componentDidMount() {
        const adaptiveCard = new AdaptiveCard();
        adaptiveCard.hostConfig = new HostConfig({
            fontFamily: "Segoe UI, Helvetica Neue, sans-serif"
        });
        adaptiveCard.onExecuteAction = function () { alert("@1.3.0 Submitted Successfully!"); }
        adaptiveCard.parse(Payload);
        if(this.OldCard) {
            this.OldCard.appendChild(adaptiveCard.render());
        }
    }

    render() {
        return (
            <div id="OldRenderer" className="OldRenderer">
                <div className="Heading">AdaptiveCards@1.3.0</div>
                <div id="OldCard" className="CardWrapper" ref={div => (this.OldCard = div)}></div>
            </div>
        )
    }
}

export class NewRenderer extends React.Component {

    private NewCard: HTMLDivElement | null = null;

    componentDidMount() {
        const adaptiveCard = new V2_AdaptiveCard();
        adaptiveCard.hostConfig = new V2_HostConfig({
            fontFamily: "Segoe UI, Helvetica Neue, sans-serif"
        });
        adaptiveCard.onExecuteAction = function () { alert("@2.1.0 Submitted Successfully!"); }
        adaptiveCard.parse(Payload);
        const renderedCard = adaptiveCard.render();
        if (this.NewCard && renderedCard) {
            this.NewCard.appendChild(renderedCard);
        }
    }

    render() {
        return (
            <div id="NewRenderer" className="NewRenderer">
                <div className="Heading">AdaptiveCards@2.1.0</div>
                <div id="NewCard" className="CardWrapper" ref={div => (this.NewCard = div)}></div>
            </div>
        )
    }
}