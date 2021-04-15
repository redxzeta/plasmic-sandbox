
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['ifYAMm7AAVu6pKkCHcJtN5'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  