import { Component } from "racquetjs";
import './header.scss';

export class Header extends Component {
    constructor() {
        super();
    }

    public createTemplate() {
        return `
            <header class="main-header">
                <div class="container">
                    <h1 class="title">Apoligiser 5000</h1>
                </div>
            </header>
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