const path = require('path');

module.exports = {
    entry: 'src/newMemberMemory.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname),
        filename: 'lib/bundle.js',
    },
};
