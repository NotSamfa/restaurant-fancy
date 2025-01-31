# [Practice] Restaurant Fantasy


![Screenshot of the project](https://github.com/user-attachments/assets/e5638ed3-c7c9-4fb0-801d-00578ec58a29)


## Webpack practice

This simple project was meant as practice for some of the basics of using Webpack. For this reason, the project was focused on creating modules which inject all the HTML content using JavaScript modules structures for the two sections available. Other simple concepts such as IIFE (Immediately Invoked Function Expressions) and a simple adaptation for responsiveness were also implemented. Although, it was not designed as mobile-first.

## Installation

To run this project locally:

1. **Clone the repository**

```bash 
git clone https://github.com/your-username/restaurant-fantasy.git
```

2. **Navigate to the project directory**

```bash 
cd restaurant-fantasy
```

3. **Install dependecies**

```bash 
npm install
```

4. **Run the development server**

```bash 
npx webpack serve
```

## Concepts

### webpack && webpack-CLI

- Module bundler that processes and bundles JavaScript files and optimizes some assets.
- The CLI provides a way to interact with Webpack.

### webpack-dev-server

- Allows to have a live server without creating a fully optimized production build.

### css-loader && style-loader 

- The former exports the CSS as a string and converts it into a JavaScript module, while the latter injects those styles into the DOM using `<style>` tags.

### html-webpack-plugin 

- Automatically injects the generated JavaScript and CSS files (imported for its side effect in _index.js_) into the HTML.
