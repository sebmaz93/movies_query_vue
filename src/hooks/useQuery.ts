import { ref } from 'vue';

// types
import type { AxiosResponse } from 'axios';

export const useQuery = <T, F>(
  key: string,
  fn: (q?: F) => Promise<AxiosResponse<T>>,
) => {
  const data = ref<T>();
  const error = ref<string>();
  const isLoading = ref(false);

  const handleError = (error: any) => {
    isLoading.value = false;
    error.value = error.message;
    console.log(`[NETWORK:${key}:ERR]:`, error);
  };

  const fetch = async (query?: F) => {
    isLoading.value = true;
    console.log(`[NETWORK:${key}:REQ]:`, query);
    try {
      const response = await fn(query);
      data.value = response.data;
      console.log(`[NETWORK:${key}:RES]:`, response.data);
      isLoading.value = false;
      console.log('data', data);
    } catch (error) {
      handleError(error);
    }
  };

  return {
    data,
    error,
    isLoading,
    fetch,
  };
};
