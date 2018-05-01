import { Component } from "racquetjs";
import './content.scss';
import { Clipboard } from 'ts-clipboard';

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
                    ${this.apologies.length > 0
                        ? `<button class="generate-button" ${this.addControlByName('generate-button')}>REROLL</button>`
                        : `<button class="generate-button" ${this.addControlByName('generate-button')}>GENERATE</button>`
                    }               
                    ${this.apologies.length > 0
                        ? `<button class="generate-button" ${this.addControlByName('copy-button')}>COPY</button>`
                        : `<button class="generate-button" disabled ${this.addControlByName('copy-button')}>COPY</button>`
                    }
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
                this.apologies = [];
                this.render();

                this.apologiesService
                    .generateApologies()
                    .then(apologies => this.apologies = apologies)
                    .then(_ => this.isLoading = false)
                    .then(_ => this.render());
            });

        const copyButtonListener = document.querySelector(`[${this.getControlHashByName('copy-button')}]`)
            .addEventListener('click', this.clickCopyHandler);
    }

    public clickCopyHandler = (event: Event) => Clipboard.copy(this.apologies.join(' '));
}