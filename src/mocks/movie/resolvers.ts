// mock data
import { movies } from './db';

// types
import type { RestRequest, ResponseComposition, RestContext } from 'msw';
import { MovieReqParams } from '@services/api/movie/types';

export const getAllMoviesResolver = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext
) => {
  const { filters, page = 1, per_page = 8 } = req.body as MovieReqParams;
  let filteredMovies = movies;

  if (filters) {
    filteredMovies = movies.filter((movie) => {
      if (filters.year && movie.release_date !== filters.year) return false;
      if (filters.genre && movie.genre.every(({ id }) => id !== filters.genre)) return false;
      if (
        filters.searchTerm &&
        movie.title.toLowerCase().indexOf(filters.searchTerm.toLowerCase()) === -1
      )
        return false;
      if (filters.isSeries && movie.is_series !== filters.isSeries) return false;
      return true;
    });
  }

  const slicedMovies = filteredMovies.slice((page - 1) * per_page, page * per_page);
  const total_pages = Math.ceil(filteredMovies.length / per_page);
  const has_next_page = page < total_pages;

  const structuredRes = {
    page,
    total_pages,
    has_next_page,
    results: slicedMovies,
    total_results: filteredMovies.length,
  };

  return res(ctx.delay(1000), ctx.status(200), ctx.json(structuredRes));
};
