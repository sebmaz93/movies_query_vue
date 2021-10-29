import { render, fireEvent } from '@testing-library/vue';
import Search from '../Search.vue';

const renderSearch = (modelValue: string) =>
  render(Search, {
    props: {
      modelValue,
    },
  });

describe('Render Search', () => {
  it('should change and emit the value while user type', () => {
    const { getByTestId, emitted } = renderSearch('');

    fireEvent.update(getByTestId('search-input'), 'my movie');

    expect(emitted()['update:modelValue']).toEqual([['my movie']]);
    expect(getByTestId('search-input')).toHaveValue('my movie');
  });
});
