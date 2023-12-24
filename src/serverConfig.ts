export const adjustUrlForEnvironment = (url: string): string => {
    if (process.env.NODE_ENV === 'production') {
      const assetsIndex = url.indexOf('/assets/');
      if (assetsIndex !== -1) {
        return url.substring(assetsIndex); // Retrieve the path after '/assets/'
      }
      // If '/assets/' is not found, return the original URL
      return url;
    } else {
      return url; // For non-production environment, return the original URL
    }
  };