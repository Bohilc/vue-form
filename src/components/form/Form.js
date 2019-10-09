import FormErrors from "./FormErrors"

export default class Form extends FormErrors {
  /**
   * Create new Form instance.
   *
   * @param {object} data
   */
  constructor(data) {
    super()
    this.originalData = data

    for (let filed in data) {
      this[filed] = data[filed]
    }
  }

  /**
   * Fetch all relevant data for the form.
   *
   * @returns {object}
   */
  data() {
    let data = Object.assign({}, this)

    delete data.originalData
    delete data.errors

    return data
  }

  /**
   * Submit the form.
   *
   * @param {string} method
   * @param {string} url
   */
  submit(method, url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: method,
        body: this.data()
      })
        .then(response => {
          this.onSuccess(response.data)
          resolve(response.data)
        })
        .catch(error => {
          let errors = {
            name: ['name mast bee longer'],
            description: ['description must bee longer']
          }

          this.onFail(errors)
          reject(errors)
        })
    })


  }

  /**
   * Handle the successful form submission.
   *
   * @param {object} response
   */
  onSuccess(response) {
    // TODO: get real success message.
    console.log('success')

    this.reset()
  }

  /**
   * Handle a failed form submission.
   *
   * @param {object} errors
   */
  onFail(errors) {
    // TODO: get real error from server.

    this.errorRecord(errors)
  }

  /**
   * Reset the form fields.
   */
  reset() {
    for (let field in this.originalData) {
      this[field] = ''
    }

    this.errorClear()
  }
}
