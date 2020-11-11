let div = document.getElementById('app')

const Num = Trigger({
    state: 0
})

/*  For normal triggers, use observe:

    Num.observe('state', ()=> {document.getElementById('app').innerHTML=`${Num.data.state}` }) 
*/

function Handleclick() {
    Num.data.state += 1
}

// For automatic content changes in a Node, use WatchNode
WatchNode(div, Num, 'state')