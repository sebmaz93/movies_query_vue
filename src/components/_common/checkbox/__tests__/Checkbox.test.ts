import { render, fireEvent } from '@testing-library/vue';
import Checkbox from '../Checkbox.vue';

const renderCheckbox = (label: string, modelValue: boolean) =>
  render(Checkbox, {
    props: {
      label,
      modelValue,
    },
  });

describe('Render Checkbox', () => {
  it('should have label "is checked" and be checked', () => {
    const { getByTestId } = renderCheckbox('is checked', true);

    expect(getByTestId('checkbox-label')).toHaveTextContent('is checked');
    expect(getByTestId('checkbox')).toBeChecked();
  });

  it('should have label "is not checked" and be unchecked', () => {
    const { getByTestId } = renderCheckbox('is not checked', false);

    expect(getByTestId('checkbox-label')).toHaveTextContent('is not checked');
    expect(getByTestId('checkbox')).not.toBeChecked();
  });

  it('should change checkbox value on click', () => {
    const { getByTestId } = renderCheckbox('checkbox', false);

    fireEvent.click(getByTestId('checkbox'));

    expect(getByTestId('checkbox')).toBeChecked();
  });
});
