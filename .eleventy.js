const fetch = require("node-fetch");

async function getPosts() {
  return await fetch(
    "https://api.dropinblog.com/v1/json/?b=MU9HVOP48VXAY2ITW4FZ&includecontent=1"
  )
    .then((res) => res.json())
    .then((json) => {
      return json.data.posts;
    });
}

module.exports = function (eleventyConfig) {
  // Copy `assets/` to `_site/assets`
  eleventyConfig.addPassthroughCopy("assets");

  // Create Collection from DropInBlog posts
  eleventyConfig.addCollection("posts", async function (collection) {
    collection = await getPosts();
    return collection;
  });
};
