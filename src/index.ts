import { createApp } from 'racquetjs';

import { App } from './app/pages/app';
import './sw';

createApp(
    document.querySelector('div[app]') as HTMLElement,
    App,
);