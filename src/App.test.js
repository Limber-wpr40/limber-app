const funcs = require('./jestutilities/function')

describe('codeValidation method',()=>{
    test ('should return an empty string',()=>{
        let result = funcs.codeValidation()
        expect(result).toBe('')
    })
})

describe('distanceValidation method',()=>{
    test ('should return an empty string',()=>{
        let result = funcs.distanceValidation()
        expect(result).toBe('')
    })
})

describe('minAgeValidation method',()=>{
    test ('should return an empty string',()=>{
        let result = funcs.minAgeValidation()
        expect(result).toEqual([])
    })
})
describe('maxAgeValidation method',()=>{
    test ('should return an empty string',()=>{
        let result = funcs.maxAgeValidation()
        expect(result).toEqual([])
    })
})
describe('showAgeValidation method',()=>{
    test ('should return an empty string',()=>{
        let result = funcs.showAgeValidation()
        expect(result).toBe('')
    })
})
