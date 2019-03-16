import {capitalize} from "../../../helpers/string";

export {
  Form,
} from './Form.component'

export {
  Textarea,
} from './Textarea.component'

export { Field } from './Field.component'
export { Fieldset } from './Fieldset.component'

export class Validator {
  constructor() {
    this.defaultValidation = {isValid: false, label: 'Le champs n\'est pas valide'}
    this.validationOk = {...this.defaultValidation, isValid: true, label: null}
    this.currentValidation = this.defaultValidation;
  }

  validate = (field) => {
    console.log('VALIDATION !!!', field)
    const { validationOk, validateCommon } = this
    const validateField = this[`validate${capitalize(field.type)}`];

    this.currentValidation = validateCommon(field);

    if (validateField) {
      this.currentValidation = validateField(field)
    } else {
      console.warn(`No validate function for fields of type ${field.type}`)
      this.currentValidation = validationOk
    }

    return this.currentValidation
  }

  isEmpty = (field) => field.value.length <= 0

  validateCommon = (field) => {
    const {defaultValidation, validationOk, isRequired, isEmpty} = this
    // If field is not required and empty return validation OK
    if (!field.isRequired && isEmpty(field)) return validationOk
    // If field is required and empty return validation KO
    if (field.isRequired && isEmpty(field)) return {...defaultValidation, isValid: false, label: 'Ce champs est requis'}

    return validationOk
  }

  validateText = (field) => {
    const { currentValidation } = this
    return currentValidation
  }

  validateTextarea = (field) => {
    const { currentValidation } = this
    return currentValidation
  }

  validateEmail = (field) => {
    const { defaultValidation, validationOk } = this
    const validationKO = {...defaultValidation, label: 'L\'adresse email n\'est pas valide'}
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = regEx.test(field.value)
    return isEmailValid ? validationOk : validationKO
  }
}
