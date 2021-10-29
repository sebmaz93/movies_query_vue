import { getApiBaseUrl } from '../env';

describe('getApiBaseUrl', () => {
  it('should return the correct API base url', () => {
    expect(getApiBaseUrl()).toBe('/api');
  });
});
