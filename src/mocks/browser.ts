import { setupWorker } from 'msw';

import { moviesHandlers } from '@services/api/movie/handlers';

const handlers = [...moviesHandlers];

export const worker = setupWorker(...handlers);
