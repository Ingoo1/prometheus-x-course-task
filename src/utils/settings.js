export const urlPages = {
  singInPath: '/sign-in',
  catalogPath: '/catalog',
  bookPath: '/book',
  purchasePath: '/purchase',
  errorPath: '*',
  mainPath: '/',
};

export const urlCheck = () => {
  const isLocal = window.location.href.includes('localhost');

  const url = isLocal ? '/prometheus-x-course-task/' : './';

  return url;
};
