import { Component } from "racquetjs";
import './content.scss';

import { ApologiesList } from "../apoliges-list/apologies-list";
import { ApologiesService } from "../../services/apologies.service";
import { Loader } from "../loader/loader";

export class Content extends Component {
    private apologies: string[] = [];
    private apologiesService: ApologiesService = new ApologiesService();
    private isLoading = false;

    constructor(){
        super();
    }

    public createTemplate() {
        return `
            <main class="content">
                <div class="container">
                    <button class="generate-button" ${this.addControlByName('generate-button')}>GENERATE</button>
                    ${this.createChild(new ApologiesList(this.apologies))}
                    ${this.isLoading
                        ? this.createChild(new Loader())
                        : ''
                    }
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
                this.isLoading = true;
                this.render();

                setTimeout(() => {
                    this.apologies = this.apologiesService.generateApologies();
                    this.isLoading = false;
                    this.render();
                });
            });
    }
}