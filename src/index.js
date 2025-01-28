import fs from 'fs';

const arquivo = './arquivos/texto-web.txt';

fs.readFile(arquivo, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
