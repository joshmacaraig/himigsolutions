const fs = require('fs');
try {
  const content = fs.readFileSync('CNAME', 'utf8');
  fs.writeFileSync('build/CNAME', content);
  console.log('CNAME file copied successfully to build folder');
} catch (err) {
  console.error('Error copying CNAME file:', err);
}