export default class FormErrors  {
  /**
   * Create new Error instance.
   */
  constructor() {
    this.errors = {}
  }

  /**
   * Record the new errors.
   *
   * @param {object} errors
   */
  errorRecord(errors) {
    this.errors = errors
  }

  /**
   * Clear one or all errors fields.
   *
   * @param {string|null} field
   */
  errorClear(field = null) {
    if(field) {
      delete this.errors[field]
      return
    }

    this.errors = {}
  }

  /**
   * Retrieve the error message for a field.
   *
   * @param {string} field
   * @returns {string}
   */
  errorGet(field) {
    if (this.errors.hasOwnProperty(field)) {
      return this.errors[field][0]
    }
  }

  /**
   * Determinate if an errors exists fot the given field.
   *
   * @param {string} field
   * @returns {boolean}
   */
  errorHas(field) {
    return this.errors.hasOwnProperty(field)
  }

  /**
   * Determinate if we have any errors.
   *
   * @returns {boolean}
   */
  errorAny() {
    return Object.keys(this.errors).length > 0
  }
}
