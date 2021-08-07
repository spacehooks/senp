/* let div = document.getElementById('app')
 */
const Num = Trigger({
    state: []
})

function Handleclick() {
    Num.data.state.push('Hello')
}

console.log(Num.data.state)
Handleclick()
console.log(Num.data.state.length)
