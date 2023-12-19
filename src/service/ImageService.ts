export const cloudinaryToImage = (cloudinary: string) => {
  let images: string[] = [];

  if (cloudinary) {
    images = cloudinary
      .split(',')
      .map((image) => {
        if (image.trim() !== '') {
          return image.trim();
        }
        return '';
      })
      .filter((image) => image !== '');
  }

  return images;
};
