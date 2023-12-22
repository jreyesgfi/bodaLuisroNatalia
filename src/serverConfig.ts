export const adjustUrlForEnvironment = (url: string): string =>
  process.env.NODE_ENV === 'production' ? '/' : url;