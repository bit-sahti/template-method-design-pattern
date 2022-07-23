import { jest} from '@jest/globals'
import { BaseBusiness } from '../src/business/base/baseBusiness.js'
import { NotImplementedException } from '../src/utils/exceptions.js'

describe('#Base Business test suite', () => {
    it.todo('Should throw an error when child class doesn\'t implement _validateRequiredFields method')
    it.todo('Should throw an error when data is invalid')
    it.todo('Should throw an error when child class doesn\'t implement _create method')
    it.todo('Should validate received data and save it on creation')
})