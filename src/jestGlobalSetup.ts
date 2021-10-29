import { configure } from '@testing-library/vue';
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { moviesHandlers } from '@mocks/movie/handlers';

const server = setupServer(...moviesHandlers);

jest.mock('./_utils/env', () => {
  return {
    getApiBaseUrl: jest.fn(() => '/api'),
  };
});

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

configure({
  testIdAttribute: 'data-test-id',
});
