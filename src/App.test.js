const funcs = require('./jestutilities/function')
const pmtest = require('./jestutilities/pmtest');



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
/////////////////////////////////////////
describe('handleStateChange method', () => {
    test('should return an empty string', ()=> {
        let result = pmtest.handleStateChange()
        expect(result).toEqual('')
    })
})

describe('handleDirectionChange method', () => {
    test('should return an empty string', ()=> {
        let result = pmtest.handleDirectionChange()
        expect(result).toBe('')
    })
})

describe('addMessageValidation method', () => {
    test('should return an empty string', ()=> {
        let result = pmtest.addMessageValidation()
        expect(result).toBe('')
    })
})


describe('sendMessageValidation method', () => {
    test('should return an empty string', ()=> {
        let result = pmtest.sendMessageValidation()
        expect(result).toBe('')
    })
})

describe('handleClick method', () => {
    test('should return an empty string', ()=> {
        let result = pmtest.handleClick()
        expect(result).toBe('')
    })
})