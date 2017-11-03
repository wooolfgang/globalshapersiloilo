import * as path from 'path';
import * as fs from 'fs';

const seed = (file, index = 0, lastIndex = 0) => {
  const fullPath = path.join(process.cwd(), `src/backend/seeds/${file}.js`);
  const fileExists = fs.existsSync(fullPath);

  if (fileExists) {
    const seedFunc = require(`./${file}`).default;
    seedFunc()
      .then(() => {
        console.log(`Seeds for ${file} successful`);
        if (index === lastIndex) {
          process.exit(0);
        }
      })
      .catch((error) => {
        console.log('Error: ', error);
        if (index === lastIndex) {
          process.exit(0);
        }
      });
  } else {
    console.log(`File ${file} doesnt exist`);
  }
};

const runSeeds = () => {
  const arg = process.argv[2];

  if (arg === 'all') {
    const seedPath = path.join(process.cwd(), 'src/backend/seeds/');
    const excludedFile = 'runSeeds.js';
    const lastIndex = fs.readdirSync(seedPath).length - 2;

    fs.readdirSync(seedPath).map((file, index) => {
      if (file !== excludedFile) {
        const fileName = file.split('.')[0];
        seed(fileName, index, lastIndex);
      }
    });
  } else {
    seed(arg);
  }
};

runSeeds();
