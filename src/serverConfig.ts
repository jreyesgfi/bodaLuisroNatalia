let PUBLIC_BASE_PATH:string = 'E:/Programacion/React/boda_luisro/public';
if (process.env.NODE_ENV === 'production') {
    PUBLIC_BASE_PATH = '/'; // Production base path
  }
  
  export { PUBLIC_BASE_PATH };