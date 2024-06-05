function getCroppedImageUrl(url: string | null) {
  if (url === null) return null;
  let target = "media/";
  let index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}

export default getCroppedImageUrl;
