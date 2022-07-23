import { NotImplementedException } from '../../utils/exceptions.js'

export class BaseBusiness {
  _validateRequiredFields() {
    throw new NotImplementedException(this._validateRequiredFields.name)
  }

  _create() {
    throw new NotImplementedException(this._create.name)
  }

  create(data) {
    const isValid = this._validateRequiredFields(data)

    if (!isValid) throw new Error('Invalid data')

    return this._create(data)
  }
}
