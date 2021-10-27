import { setupWorker } from 'msw';

import { moviesHandlers } from './movie/handlers';

const handlers = [...moviesHandlers];

export const worker = setupWorker(...handlers);
