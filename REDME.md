<h1 align="center">Sling</h1>
Sling is a very simple reactive library based on triggers. It was inspired by [this article](https://www.monterail.com/blog/2016/how-to-build-a-reactive-engine-in-javascript-part-1-observable-objects) and is heavily focused on it.

### ⚙️ How to use?
One of the most simple yet useful example is changing the value of an element based on click. To do this, you need an html template like this:

```html
    <div id="app">0</div>
    <button onclick="Handleclick()">Click me!</button>
```
And a simple script, that tells the div content to change when the value changes:
```javascript
    const Num = Trigger({
            state: 0
        })
        
    Num.observe('state', ()=> {document.getElementById('app').innerHTML=`${Num.data.state}` })

    function Handleclick(){
        Num.data.state += 1
    }
```