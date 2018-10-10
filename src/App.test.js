const funcs = require('./jestutilities/function')
const punks = require('./jestutilities/jest-testing')

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

describe('handleDirectionChange method', () => {
    test('should return an empty string', () => {
        let result = punks.handleDirectionChange()
        expect(result).toBe('')
    })
})

describe('handleState method', () => {
    test('should return an empty string', () => {
        let result = punks.handleState()
        expect(result).toBe('')
    })
})

describe('handleOnSwipeEnd method', () => {
    test('should return an empty array', () => {
        let result = punks.handleOnSwipeEnd()
        expect(result).toEqual([])
    })
})

describe('handleGeolocation', () => {
    test('should return an empty object', () => {
        let result = punks.handleGeolocation()
        expect(result).toEqual({})
    })
})

describe('handleUpdateSettings', () => {
    test('should return an empty object', () => {
        let result = punks.handleUpdateSettings()
        expect(result).toEqual({})
    })
})