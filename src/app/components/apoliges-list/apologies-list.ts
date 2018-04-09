import { Component } from "racquetjs";

export class ApologiesList extends Component {
    constructor(
        private apologies: string[] = [],
    ) { super() }

    public createTemplate() {
        return `
            <ul>
                ${this.apologies.map(apology => `<li>${apology}</li>`).join('')}
            </ul>
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