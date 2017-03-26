# Burn1ng starter KIT
good project structure with perfect workflow to start your awesome project!

# how to use it

1. At first, you need [Node.js](https://nodejs.org/en/download/) installed on your system;
2. If you have already installed node.js, simply run `npm install bower -g` to install bower in your system.
3. Load all dev dependencies of the project - simply run:
```bash
npm install
```
```bash
bower install 
```
4. After downloading all dependencies, run
```bash
gulp
```
to start local server, live sass injection, watching for files and other features! =)

# Features:

- Construct html pages with module parts from `src/templates/*.html`
- According perfect project structure, you can simply control the sequence of all linked SASS and CSS files in 1 file: `src/style/main.scss`;
- Compile all SASS stylesheets;
- Concat compiled SASS with other CSS files in 1 file and minify it;
- Generate sprites (SCSS + PNG). Simply put your icons in `src/icons/` and after that write `@include sprite($icon-name)` in your SASS file;
Look ma! =) It works!
- According perfect project structure, you can simply control the sequence of all linked JS files and libraries in 1 file: `src/js/main.js`;
- Concatenate all js files in 1 file and minify it
- Optimise all images from `src/img/` with `imagemin + pngquant`
- Correctly used all your fonts from `src/fonts`

- After building the project, webserver with tunelling will start automatically
- After any changes in one or some files in your project, you can watch all changes in your favorite browser real-time. 


#### Enjoy!
