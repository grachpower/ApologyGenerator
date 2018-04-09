import { Component } from "racquetjs";
import './content.scss';

import { ApologiesList } from "../apoliges-list/apologies-list";

export class Content extends Component {
    private apologies: string[] = [];

    constructor() {
        super();
    }

    public createTemplate() {
        return `
            <main class="content">
                <div class="container">
                    <button class="generate-button" ${this.addControlByName('generate-button')}>GENERATE</button>
                    ${this.createChild(new ApologiesList(this.apologies))}
                </div>
            </main>
        `;
    }

    /**
     * @Override
     */
    public afterViewInit(): void {
        //...
    }

    public setHandlers(): void {
        const buttonListener = document.querySelector(`[${this.getControlHashByName('generate-button')}]`)
            .addEventListener('click', () => {
                console.log('button clicked');
                this.render();
            });
    }
}