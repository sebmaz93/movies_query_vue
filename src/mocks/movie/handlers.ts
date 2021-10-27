import { rest } from 'msw';

import { getAllMoviesResolver } from './resolvers';

// types
import { MoviesRes } from '@services/api/movie/types';

// serving as a mock handler for the api
export const moviesHandlers = [
  rest.post<MoviesRes>('/api/movies', getAllMoviesResolver),
];
