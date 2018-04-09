import { Component } from "racquetjs";
import './apologies-list.scss';

export class ApologiesList extends Component {
    constructor(
        private apologies: string[] = [],
    ) { super() }

    public createTemplate() {
        return `
            <div class="apology-block">
                ${this.apologies.length > 0
                    ? `<h2 class="result-size-title">Получено результатов: ${this.apologies.length}</h2>`
                    : ``
                }
                <div class="apology-container">
                    ${this.apologies.length === 0
                        ? `<h2>Тут будут ваши извинения</h2>`
                        : this.apologies.map(apology => `<div class="apology">${apology}</div>`).join('')
                    }
                </div>
                ${this.apologies.length > 0
                    ? `<h3>НУ ТЫ И МУДАК РАЗ СТОЛЬКО ИЗВИНЯЕШЬСЯ</h3>`
                    : ``
                }
            </div>
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