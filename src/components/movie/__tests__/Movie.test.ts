import { Movie } from '@services/api/movie/types';
import { render } from '@testing-library/vue';
import MovieComponent from '../Movie.vue';

const renderMovie = (movie: Movie) =>
  render(MovieComponent, {
    props: {
      movie,
    },
  });

describe('Render Movie', () => {
  it('should show correct movie info', () => {
    const { getByTestId } = renderMovie({
      id: 1,
      title: 'mymovie',
      release_date: 2020,
      img: 'poster',
      genre: [{ id: 1, title: 'sci-fi' }],
      actors: [
        { id: 1, name: 'seb' },
        { id: 2, name: 'maz' },
      ],
      is_series: false,
    });

    expect(getByTestId('movie-title')).toHaveTextContent('mymovie');
    expect(getByTestId('movie-year')).toHaveTextContent('2020');
    expect(getByTestId('movie-poster')).toHaveAttribute('src', 'poster');
    expect(getByTestId('movie-genres').childElementCount).toBe(1);
    expect(getByTestId('movie-actors').childElementCount).toBe(2);
  });
});
