import { createApp } from 'racquetjs';

import { App } from "./app/pages/app";

createApp(
    document.querySelector('div[app]'),
    App,
);