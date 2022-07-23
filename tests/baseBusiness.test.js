import { jest} from '@jest/globals'
import { BaseBusiness } from '../src/business/base/baseBusiness.js'
import { NotImplementedException } from '../src/utils/exceptions.js'

describe('#Base Business test suite', () => {
    beforeEach(() => {
        jest.restoreAllMocks()
    })
    
    it('Should throw an error when child class doesn\'t implement _validateRequiredFields method', () => {
        class ChildClass extends BaseBusiness {}

        const childClass = new ChildClass()

        const notImplementedError = new NotImplementedException(childClass._validateRequiredFields.name)

        expect(() => childClass.create()).toThrow(notImplementedError)
    })

    it('Should throw an error when data is invalid', () => {
        class ChildClass extends BaseBusiness {
            _validateRequiredFields = jest.fn().mockReturnValue(false)
        }

        const childClass = new ChildClass()

        expect(() => childClass.create()).toThrow('Invalid data')
    })
    
    it('Should throw an error when child class doesn\'t implement _create method', () => {
        class ChildClass extends BaseBusiness {
            _validateRequiredFields = jest.fn().mockReturnValue(true)
        }

        const childClass = new ChildClass()

        const notImplementedError = new NotImplementedException(childClass._create.name)

        expect(() => childClass.create()).toThrow(notImplementedError)
    })

    it('Should validate received data and save it on creation', () => {
        class ChildClass extends BaseBusiness {
            _validateRequiredFields = jest.fn().mockReturnValue(true)
            _create = jest.fn().mockReturnValue(true)
        }

        const childClass = new ChildClass()

        const baseClassCreate = jest.spyOn(BaseBusiness.prototype, BaseBusiness.prototype.create.name)

        const data = { data: [] }
        
        childClass.create(data)

        expect(baseClassCreate).toHaveBeenCalledTimes(1)
        expect(childClass._validateRequiredFields).toHaveBeenCalledTimes(1)
        expect(childClass._create).toHaveBeenCalledTimes(1)
    })
})