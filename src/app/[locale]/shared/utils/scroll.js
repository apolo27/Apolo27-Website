export const scrollUpOnPage = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};

export const scrollDownOnPage = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    left: 0,
    behavior: 'smooth',
  });
};
