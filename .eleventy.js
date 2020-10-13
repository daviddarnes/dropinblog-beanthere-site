// Bring in node-fetch dependency from installed packages
const fetch = require("node-fetch");

// Create an asynchronous function that will retrieve the DropInBlog content
async function getPosts() {
  // The content will eventually arrive, so we'll have to wait for it
  return await fetch(
    // DropInBlog API endpoint
    "https://api.dropinblog.com/v1/json/?b=MU9HVOP48VXAY2ITW4FZ&includecontent=1"
  )
    // Clean up the response and return just the posts
    .then((res) => res.json())
    .then((json) => {
      return json.data.posts;
    });
}

// Start of configuring Eleventy for the project
module.exports = function (eleventyConfig) {
  // Copy `assets/` to `_site/assets`
  eleventyConfig.addPassthroughCopy("assets");

  // Create an Eleventy collection from DropInBlog posts
  eleventyConfig.addCollection("posts", async function (collection) {
    collection = await getPosts();
    return collection;
  });
};
