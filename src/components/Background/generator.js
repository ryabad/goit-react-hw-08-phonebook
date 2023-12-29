export const generateRandomValues = () => {
  return {
    left: Math.random() * 100 + '%',
    animationDuration: Math.random() * 10 + 5 + 's',
  };
};
