import { rest } from 'msw';

import { getAllMoviesResolver } from './resolvers';

import { MoviesRes } from './types';

// serving as a mock handler for the api
export const moviesHandlers = [
  rest.get<MoviesRes>('/movies', getAllMoviesResolver),
];
