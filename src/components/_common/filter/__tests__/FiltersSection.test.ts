import { render, fireEvent } from '@testing-library/vue';
import FiltersSection from '../FiltersSection.vue';
import { nextTick } from 'vue';

describe('Render FiltersSection', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should disable next button when no next page', async () => {
    const { getByTestId } = render(FiltersSection, {
      props: { hasNext: false, getMovies: jest.fn() },
    });

    expect(getByTestId('next-btn')).toBeDisabled();
  });

  it('should call the fn on click search', async () => {
    const mockFn = jest
      .fn()
      .mockImplementation(() => new Promise((resolve) => resolve({ data: {} })));

    const { getByTestId } = render(FiltersSection, {
      props: { hasNext: true, getMovies: mockFn },
    });

    fireEvent.click(getByTestId('search-btn'));
    await nextTick();

    expect(mockFn).toHaveBeenCalled();
  });

  it('should call the fn on page change', async () => {
    const mockFn = jest
      .fn()
      .mockImplementation(() => new Promise((resolve) => resolve({ data: {} })));

    const { getByTestId } = render(FiltersSection, {
      props: { hasNext: true, getMovies: mockFn },
    });

    fireEvent.click(getByTestId('next-btn'));
    await nextTick();

    expect(mockFn).toHaveBeenCalled();
  });
});
