import { render, fireEvent } from '@testing-library/vue';
import MovieSection from '../MovieSection.vue';
import { nextTick } from 'vue';
import moviesApi from '@services/api/movie';

describe('Render MoviesSection', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should not have movie in the list', async () => {
    const { queryByTestId } = render(MovieSection);
    const api = jest.spyOn(moviesApi, 'fetchMovies').mockImplementation(
      () =>
        new Promise((resolve) =>
          resolve({
            data: {
              page: 1,
              total_pages: 2,
              has_next_page: true,
              results: [
                {
                  id: 1,
                  title: 'mymovie',
                  img: 'poster',
                  genre: [
                    {
                      id: 2,
                      title: 'sci-fi',
                    },
                  ],
                  actors: [
                    {
                      id: 3,
                      name: 'seb',
                    },
                  ],
                  is_series: false,
                  release_date: 2021,
                },
              ],
              total_results: 14,
            },
          } as any)
        )
    );

    expect(queryByTestId('movies-container')).not.toBeInTheDocument();
    expect(api.mock.calls).toMatchSnapshot();
  });

  it('should show loader then have movies in list', async () => {
    const api = jest.spyOn(moviesApi, 'fetchMovies').mockImplementation(
      () =>
        new Promise((resolve) =>
          resolve({
            data: {
              page: 1,
              total_pages: 2,
              has_next_page: true,
              results: [
                {
                  id: 1,
                  title: 'mymovie',
                  img: 'poster',
                  genre: [
                    {
                      id: 2,
                      title: 'sci-fi',
                    },
                  ],
                  actors: [
                    {
                      id: 3,
                      name: 'seb',
                    },
                  ],
                  is_series: false,
                  release_date: 2021,
                },
              ],
              total_results: 14,
            },
          } as any)
        )
    );
    const { getByTestId } = render(MovieSection);

    fireEvent.click(getByTestId('search-btn'));
    await nextTick();

    expect(getByTestId('loader')).toBeInTheDocument();

    await new Promise((resolve) => setTimeout(resolve, 1500));
    await nextTick();

    expect(getByTestId('movies-container')).toBeInTheDocument();
    expect(getByTestId('movies-container').childElementCount).toBe(8);
    expect(api.mock.calls).toMatchSnapshot();
  });
});
