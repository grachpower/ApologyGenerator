import { Component } from 'racquetjs';

export class App extends Component {
    constructor() {
        super();
    };

    /**
     * Invoke component method in template 'this.createChild(new ChildComponent())' to create new child component
     *
     * @Override
     * @returns {string}
     */
    createTemplate() {
        return `
            <div class="header">
                <div class="main-container">
                    <h1 class="header__title">Get it done</h1>
                </div>
                <main class="content">
                    <div class="main-container">
                        
                    </div>
                </main>
            </div>
        `;
    }

    /**
     * @Override
     */
    afterViewInit() {
        //...
    }
}