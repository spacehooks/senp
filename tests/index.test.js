const {Trigger} = require('../src/npm')

// Initializing a testing trigger
const Num = Trigger({
    value: 0,
    array: []
})

const addValue = number => {
    var reflection = number

    Num.observe('value', () => {reflection += 1})
    Num.data.value += 1

    return reflection
}

const pushArray = item => {
    // let reflection = ''
    // Num.observe('array', ()=> reflection = item)
    Num.data.array.push(item)

    return [Num.data.array]
}

test('add value to trigger and reflect', ()=> {
    expect(addValue(1)).toBe(2)
})

test('Push to array and reflect', () => {
    let [trigger_array] = pushArray('testing')

    expect(trigger_array).toEqual(['testing'])
    // expect(reflection).toEqual('testing')
})