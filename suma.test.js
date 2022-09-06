
const  {suma, mul, div} = require("./calculator")
const  {pares} = require("./array")


test("suma" , () => {
    expect(suma(3,4)).toBe(7)
})

test("div" , () => {
    expect(div(1,2)).toBe(0.5)
})

test("mul" , () => {
    expect(mul(3,4)).toBe(12)
})


test("pares", () => {

    expect(new Set(pares())).toEqual(new Set([2,10,4,6,8]))
})