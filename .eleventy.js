module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("recipes/image");
  // eleventyConfig.setFrontMatterParsingOptions({
  //   excerpt: true,
  //   excerpt_separator: "\n"
  // })
};
