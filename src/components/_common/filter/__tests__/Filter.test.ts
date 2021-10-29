import { render, fireEvent } from '@testing-library/vue';
import Filter from '../Filter.vue';

const renderFilter = (
  label: string,
  modelValue: number | null,
  filters: { value: number; text: string }[] = [
    { value: 1, text: 'one' },
    { value: 2, text: 'two' },
  ]
) =>
  render(Filter, {
    props: {
      label,
      modelValue,
      filters,
    },
  });

describe('Render FilterSelect', () => {
  it('should have 2 options', () => {
    const { getByTestId } = renderFilter('genre', null);

    expect(getByTestId('filter-select').firstChild).toHaveTextContent('genre');
    expect(getByTestId('filter-select')).toHaveValue('');
  });

  it('should select the desired option', async () => {
    const { getByTestId, emitted } = renderFilter('genre', null);

    expect(getByTestId('filter-select').firstChild).toHaveTextContent('genre');

    fireEvent.change(getByTestId('filter-select'), { target: { value: 2 } });

    expect(emitted()['update:modelValue']).toEqual([[2]]);
    expect(getByTestId('filter-select')).toHaveValue('2');
  });
});
