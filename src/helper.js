export const { PORT, NODE_ENV } = process.env;
export const dev = NODE_ENV === 'development';
export const baseUrl = dev ? '/' : '/covid';

export const parentUrl = baseUrl.split('').reverse()[0] === '/' ? baseUrl : `${baseUrl}/`;