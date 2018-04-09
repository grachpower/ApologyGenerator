import { Component } from "racquetjs";
import './loader.scss';

export class Loader extends Component {
    constructor(
    ) { super() }

    public createTemplate() {
        return `
            <div class="page-preloader" id="page-preloader">
                <span class="preloader__item preloader__item1"></span>
                <span class="preloader__item preloader__item2"></span>
                <span class="preloader__item preloader__item3"></span>
                <span class="preloader__item preloader__item4"></span>
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