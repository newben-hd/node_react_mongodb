# node_react_mongodb

Project Structure
---

* src: JavaScript modular codes
	* Source of our generated working files
* public: HTML, JavaScript, and CSS as static assets
	* Loading on clients
* api: backend API server

File Descriptions
---

* index.(*): is the starting point in every directory
* server.js: First script we need to run the Node server
* webpack.config.js: Configure webpack to work with working directory structure 
* .babelrc: Configure Babel to work with selected presets i.e. instructs Babel to use selected presets
* .eslintrc.js:

NOTES
---

* When importing module, include relative path such as: import "./module1"
* When using babel-node package on command, you need to either include local directory package since it's not available on global scope, or export PATH with local directory: ./node_module/.bin/babel-node or in .bashrc file: 
	```sh
	export PATH="$PATH:./node_module/.bin/babel-node"
	```
* Importing:
	* Import default exported object into a config module: import config from './config' 
	* Export objects: 
		```js
		export default {
			port: env.PORT || 8080
		};
		export const nodeEnv = env.NODE_ENV || 'development';
		```
	* Import non-default exported object with destructure syntax: import config, { nodeEnv } from './config'
* HTTP:
	* Express is a wrapper around core http module
* React:
	* Run webpack and generate the bundle.js file from React source code into public:
	```sh
	npm run dev
	```
* SASS:
  * Extension for CSS as more powerful
  * save it as {file}.scss
  * Make sure to translate it to css:
  ```sh
  node i -S node-sass-middleware
  ```

PACKAGES
---

* json-loader: loader for webpack to understand JSON file:
  ```sh
  npm i -S json-loader
  ```
  * Configure webpack {webpack.config.js} with the json loader:
  ```js
  module:{
    loaders:[
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
  ```
* prop-types: props validation since built-in React PropTypes is deprecated
  ```sh
  npm i -S prop-types
  ```
* axios: promised based HTTP client for the browser and node.js through AJAX requests; for remote API data fetching
  ```sh
  npm i -S axios
  ```