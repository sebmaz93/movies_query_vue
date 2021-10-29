import { AxiosResponse } from 'axios';

import { useQuery } from '../useQuery';
import moviesApi from '@services/api/movie';

jest.mock('vue', () => {
  return {
    ...jest.requireActual('vue'),
    onMounted: jest.fn((cb) => cb()),
  };
});

describe('useQuery', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('should invoke the passed function when calling fetch', () => {
    const mockFn = jest
      .fn()
      .mockImplementation(
        () => new Promise<Partial<AxiosResponse>>((resolve) => resolve({ data: {} }))
      );

    const { fetch } = useQuery('fn', mockFn);

    fetch();

    expect(mockFn.mock.calls).toMatchSnapshot();
  });

  it('should fetch movies', () => {
    const spy = jest.spyOn(moviesApi, 'fetchMovies').mockImplementation(
      () =>
        new Promise((resolve) =>
          resolve({
            data: {
              page: 2,
              total_pages: 3,
              has_next_page: true,
              results: [],
              total_results: 14,
            },
          } as any)
        )
    );

    const { fetch } = useQuery('GET MOVIES', moviesApi.fetchMovies);

    fetch({ page: 2, per_page: 6 });

    expect(spy.mock.calls).toMatchSnapshot();
  });
});
