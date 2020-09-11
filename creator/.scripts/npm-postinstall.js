const { execSync } = require('child_process');

console.log("Running npm-postinstall.js");

//execSync('cp node_modules/devextreme/dist/css/fonts/* public/fonts/devextreme/');

// fix DevExtreme的 formatISO8601函数没用使用utc时间
execSync('cp -r .scripts/devextreme/* node_modules/devextreme/');
execSync('rm -rf ./node_modules/crypto');

if (process.platform == "darwin"){
    try {execSync('mkdir ./node_modules/bcrypt/');} catch(e) {}
    execSync('cp -r ../node_modules/bcrypt/* ./node_modules/bcrypt/');
    execSync('cp -r .scripts/bcrypt-57-darwin-x64/* node_modules/bcrypt/');
    execSync('cp -r .scripts/bcrypt-57-darwin-x64/* ../node_modules/bcrypt/');
}
else if (process.platform == "win32") {
    try {execSync('mkdir ./node_modules/bcrypt/');} catch(e) {}
    execSync('cp -r ../node_modules/bcrypt/* ./node_modules/bcrypt/');
    execSync('cp -r .scripts/bcrypt-57-win32-x64/* node_modules/bcrypt/');
    execSync('cp -r .scripts/bcrypt-57-win32-x64/* ../node_modules/bcrypt/');
}

// 修正 旧版 windows 客户端
execSync('cp -r .scripts/iconv-lite/* node_modules/iconv-lite/');

execSync('rm -rf node_modules/@steedos');

execSync('ln -s ' + process.cwd() + '/../node_modules/@steedos ' + process.cwd() + '/node_modules/@steedos' );