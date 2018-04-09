import { Component } from 'racquetjs';
import './app.scss';

import { Header } from "../components/header/header";
import { Content } from "../components/content/content";

export class App extends Component{
    constructor() {
        super();
    };

    /**
     * Invoke component method in template 'this.createChild(new ChildComponent())' to create new child component
     *
     * @Override
     * @returns {string}
     */
    public createTemplate() {
        return `
             ${this.createChild(new Header())}
             ${this.createChild(new Content())}
        `;
    }

    /**
     * @Override
     */
    public afterViewInit(): void {
        //...
    }

    public setHandlers(): void {
        //..
    }
}