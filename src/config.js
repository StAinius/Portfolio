// Nuotraukų path'ai pagal aplinką
const isDevelopment = import.meta.env.DEV;

export const getImagePath = (path) => {
  if (isDevelopment) {
    return path; // Lokaliai naudojame /img/im.png
  } else {
    // GitHub Pages naudojame GitHub raw nuorodas
    return `https://raw.githubusercontent.com/StAinius/Portfolio/main/public${path}`;
  }
};