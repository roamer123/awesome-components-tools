const ghPages = require('gh-pages');
const path = require('path');

ghPages.publish(path.join(process.cwd(), 'dist'), {
  depth: 1,
  logger(message) {
    console.log(message);
  },
}, (err) => {
  if (err) {
    throw err;
  }
  console.log('Site has been published.');
});
