import { Component } from "racquetjs";

export class ApologiesList extends Component {
    constructor(
        private apologies: string[] = [],
    ) { super() }

    public createTemplate() {
        return `
            <ul>
                ${this.apologies.length === 0
                    ? `<h2>Тут будут ваши извинения</h2>`
                    : this.apologies.map(apology => `<li>${apology}</li>`).join('')
                }
            </ul>
        `;
    }

    /**
     * @Override
     */
    public afterViewInit(): void {}

    /**
     * @Override
     */
    public setHandlers(): void {}
}