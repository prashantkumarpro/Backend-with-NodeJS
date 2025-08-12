// console.log(process.argv.slice(2))
const fs = require('fs');
const path = require('path');

process.chdir("./tmp")
const currentDir = process.cwd();

fs.readdir(currentDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    const filePath = path.join(currentDir, file);

    fs.stat(filePath, (err, stats) => {
      if (err) {
        console.error('Error getting file stats:', err);
        return;
      }

      if (stats.isFile()) {
        console.log(file);
      }
    });
  });
});
