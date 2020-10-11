module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("recipes/image");
  eleventyConfig.addPassthroughCopy("css");
  // eleventyConfig.setFrontMatterParsingOptions({
  //   excerpt: true,
  //   excerpt_separator: "\n"
  // })
};
