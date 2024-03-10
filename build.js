const fs = require('fs');
const path = require('path');
const pkg = require('./package.json');

let jsInputPath = path.join(__dirname, `/www/content/theme/kwBaseTheme.js`);
let jsOutputPath = path.join(__dirname, `/output/kwBaseTheme.js`);
let jsContent = '';

fs.readFile(jsInputPath, {encoding: 'utf-8'}, async (err,data) =>
{
    if (!err) 
    {
        jsContent = `/**************************************
* ${pkg.name} - ${pkg.description}
* @version ${pkg.version}
* @lastBuild ${new Date()}
* @author KitchenJS
* @link https://github.com/Kitchen-JS/${pkg.name}
* TailWind: v${pkg.dependencies.tailwindcss}
* Credit to work done by https://github.com/andrewdeclue
**************************************/

${data}`;

        fs.writeFile(jsOutputPath, jsContent, err => 
        {
            if (err) 
            {
                console.error(err);
            }
            else
            {
                console.log(`/output/${pkg.name}.js: written successfully`);
            }
        });
    } 
    else 
    {
        console.log(err);
    }
});

jsInputPath = path.join(__dirname, `/www/content/theme/clsTailwind.js`);
jsOutputPath = path.join(__dirname, `/output/clsTailwind.js`);
jsContent = '';

fs.readFile(jsInputPath, {encoding: 'utf-8'}, async (err,data) =>
{
    if (!err) 
    {
        jsContent = `/**************************************
* clsTailwind - Tailwind Helper see const tailwind at bottom of page
* @version ${pkg.version}
* @lastBuild ${new Date()}
* @author KitchenJS
* @link https://github.com/Kitchen-JS/${pkg.name}
* TailWind: v${pkg.dependencies.tailwindcss}
* Credit to work done by https://github.com/andrewdeclue
**************************************/

${data}`;

        fs.writeFile(jsOutputPath, jsContent, err => 
        {
            if (err) 
            {
                console.error(err);
            }
            else
            {
                console.log(`/output/clsTailwind.js: written successfully`);
            }
        });
    } 
    else 
    {
        console.log(err);
    }
});

let cssInputPath = path.join(__dirname, '/www/content/theme/kwBaseTheme.css');
let cssOutputPath = path.join(__dirname, '/output/kwBaseTheme.css');
let cssContent = '';

fs.readFile(cssInputPath, {encoding: 'utf-8'}, async (err,data) =>
{
    if (!err) 
    {
        cssContent = `/**************************************
* ${pkg.name} - ${pkg.description}
* @version ${pkg.version}
* @lastBuild ${new Date()}
* @author KitchenJS
* @link https://github.com/Kitchen-JS/${pkg.name}
* TailWind: v${pkg.dependencies.tailwindcss}
* Credit to work done by https://github.com/andrewdeclue
**************************************/

${data}`;

        fs.writeFile(cssOutputPath, cssContent, err => 
        {
            if (err) 
            {
                console.error(err);
            }
            else
            {
                console.log('/output/kwBaseTheme.css:' + ' written successfully')
            }
        });
    } 
    else 
    {
        console.log(err);
    }
});