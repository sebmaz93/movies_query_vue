// services
import { apiInstance } from '@services/api/index';

//  types
import { MoviesRes, MovieReqParams } from './types';

export const fetchMovies = (query?: MovieReqParams) =>
  apiInstance.post<MoviesRes>('/movies', query || {});

export default { fetchMovies };
