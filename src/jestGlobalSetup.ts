import { configure } from '@testing-library/vue';
import '@testing-library/jest-dom';

jest.mock('./_utils/env', () => {
  return {
    getApiBaseUrl: jest.fn(() => '/api'),
  };
});

configure({
  testIdAttribute: 'data-test-id',
});
