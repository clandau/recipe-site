module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("recipes/image");
  eleventyConfig.addPassthroughCopy("css");
};
