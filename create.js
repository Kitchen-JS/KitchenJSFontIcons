const fs = require('fs');
const svgtofont = require('svgtofont');
const path = require('path');
const grunt = require('grunt');

const pkg = grunt.file.readJSON('package.json')

// https://github.com/Kitchen-JS/svgtofont

svgtofont({
  src: path.resolve(process.cwd(), "svg"), // svg path
  dist: path.resolve(process.cwd(), "fonts"), // output path
  //styleTemplates: null, 
  styleTemplates: path.resolve(process.cwd(), "node_modules/svgtofont/lib/styles"), // file templates path (optional)
  fontName: "kfi", // font name
  //css: true, // Create CSS files.
  css: {
    fontSize: "6rem",
  },
  startUnicode: 0xea01, // unicode start number
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true
  },
  //website: null
  website: {
    title: "Kitchen JS Font Icons",
    // Must be a .svg format image.
    logo: path.resolve(process.cwd(), "svg", "git.svg"),
    favicon: "./svg/army-pec-logo.svg",
    version: pkg.version,
    meta: {
      description: "Converts SVG fonts to TTF/EOT/WOFF/WOFF2/SVG format.",
      keywords: "svgtofont,TTF,EOT,WOFF,WOFF2,SVG"
    },
    description: `SVG produced Font Based Icon Set`,
    links: [
      {
        title: "Kitchen JS Font Icons on GitHub",
        url: "https://github.com/Kitchen-JS/KitchenJSFontIcons"
      }
    ]
  }
}).then(() => 
{
  console.log('Finished writing Kitchen JS Font Icons v' + pkg.version);
});
