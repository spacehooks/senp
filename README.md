<h1 align="center">Senp</h1>

Senp is a very simple reactive library based on triggers. It was inspired by [this article](https://www.monterail.com/blog/2016/how-to-build-a-reactive-engine-in-javascript-part-1-observable-objects) and is heavily focused on it.

<p align="center">
    <img src="./assets/senp-logo.png" width="25%" height="25%"/> 
    <br>
    <img src="http://hits.dwyl.com/kauanrakoski/sling.svg"> &nbsp; 
    <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"> 
</p>

### 📦 Installation

Install via npm:
```shell
    npm install senp
```

Use cdn>
```html
    <script src="https://cdn.jsdelivr.net/gh/hipesoft/senp/src/index.js"></script>
```

### 🚀 Usage

One of the most simple yet useful example is changing the value of an element based on click. To do this, you need an html template like this:

```html
    <div id="app">0</div>
    <button onclick="Handleclick()">Click me!</button>
```
And a simple script, that tells the div content to change when the value changes:

<p align="center">
<img src="./assets/example-js.png" width="80%" height="80%">
</p>

### ♻️ Contributing
1. Fork this repository
2. Create a new branch with your feature name: `git checkout -b my-feature`
3. Work and commit your code: `git commit -m "my-feature or fix"`
4. If necessary, write automated tests
5. Push the code to the forked repo: `git push forked master`
6. Compare and pull-request (explain what you are introducing and its consequences)

-------

Made with :heart: and javascript
