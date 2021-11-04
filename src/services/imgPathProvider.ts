export const imgPathProvider = {
  getBase: () =>
    process.env.REACT_APP_USE_IMAGEKIT
      ? process.env.REACT_APP_IMAGEKIT_BASE_URL
      : process.env.REACT_APP_GOOGLE_BASE_URL,

  getPath: (
    src: string,
    width?: number | string | undefined,
    height?: number | string | undefined
  ): string => {
    if (!process.env.REACT_APP_USE_IMAGEKIT) return src;

    const transform =
      width || height
        ? `tr:${width ? `w-${width},` : ""}${height ? `h-${height}` : ""}`
        : "";

    return `${imgPathProvider.getBase()}/${transform}/${src}`;
  },

  cleanBasePath: (url: string) =>
    url.replace(`${process.env.REACT_APP_GOOGLE_BASE_URL}/`, ""),
};
