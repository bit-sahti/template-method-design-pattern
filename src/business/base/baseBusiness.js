import { NotImplementedException } from '../../utils/exceptions.js'

export class BaseBusiness {
  constructor() {
    Reflect.defineProperty(this, 'create', {
      writable: false,
      configurable: true,
      enumerable: true,
      value: function (data) {
        const isValid = this._validateRequiredFields(data)

        if (!isValid) throw new Error('Invalid data')

        return this._create(data)
      },
    })
  }
  _validateRequiredFields() {
    throw new NotImplementedException(this._validateRequiredFields.name)
  }

  _create() {
    throw new NotImplementedException(this._create.name)
  }
}
