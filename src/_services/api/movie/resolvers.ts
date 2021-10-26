// data
import { movies } from './db';

export const getAllMoviesResolver = (req, res, ctx) => {
  // Check user authentication
  const isAuth = sessionStorage.getItem('is-auth');

  if (!isAuth) {
    return res(
      ctx.status(403),
      ctx.json({
        errorMessage: 'unauthorized',
      }),
    );
  }

  return res(ctx.delay(500), ctx.status(200), ctx.json(movies));
};
