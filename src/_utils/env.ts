// TODO : investigate for a workaround (not working https://vitejs.dev/guide/env-and-mode.html#env-variables)
// export const getEnvVar = (key: string) => import.meta.env[key];

export const getApiBaseUrl = (): string => import.meta.env.VITE_API_BASE_URL as string;
