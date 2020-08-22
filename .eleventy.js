module.exports = function(eleventyConfig) {
  // Copy `assets/` to `_site/assets`
  eleventyConfig.addPassthroughCopy("assets");
};
