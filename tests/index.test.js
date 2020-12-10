const s = require('../src/npm')

const changeReflection = (number) => {
    var reflection = number

    var Num = s.Trigger({value: 0})
    Num.observe('value', () => {reflection += 1})
    Num.data.value += 1

    return reflection
}

test('it should reflect', ()=> {
    expect(changeReflection(1)).toBe(2)
})