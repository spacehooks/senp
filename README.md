<h1 align="center">Senp</h1>

Senp is a very simple reactive library based on triggers. It was inspired by [this article](https://www.monterail.com/blog/2016/how-to-build-a-reactive-engine-in-javascript-part-1-observable-objects) and is heavily focused on it.

![](./assets/sling_logo.svg)

### ⚙️ How to use?
One of the most simple yet useful example is changing the value of an element based on click. To do this, you need an html template like this:

```html
    <script src="https://cdn.jsdelivr.net/gh/KauanRakoski/Senp/src/index.js"></script>

    <div id="app">0</div>
    <button onclick="Handleclick()">Click me!</button>
```
And a simple script, that tells the div content to change when the value changes:
```javascript
    let div = document.getElementById('app')

    const Num = Trigger({
            state: 0
        })
        
    Num.observe('state', ()=> {div.innerHTML=`${Num.data.state}` })

    function Handleclick(){
        Num.data.state += 1
   }

   // You can substitute Num.observe by watch node
   WatchNode(div, Num, 'state')
```

