import { Component } from "racquetjs";
import './content.scss';

import { ApologiesList } from "../apoliges-list/apologies-list";
import { ApologiesService } from "../../services/apologies.service";

export class Content extends Component {
    private apologies: string[] = [];
    private apologiesService: ApologiesService = new ApologiesService();

    constructor(){
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
                this.apologies = this.apologiesService.generateApologies();
                this.render();
            });
    }
}