/*
* Add an `onPreResponse` listener to return error pages
*/

module.exports = {
  plugin: {
    name: 'error-pages',
    register: (server, options) => {
      server.ext('onPreResponse', (request, h) => {
        const response = request.response

        if (response.isBoom) {
          // An error was raised during
          // processing the request
          const statusCode = response.output.statusCode

          // In the event of 404
          // return the `404` view
          if (statusCode !== 404) {
            request.log('error', {
              statusCode: statusCode,
              data: response.data,
              message: response.message
            })
          }
          return response
        }
        return h.continue
      })
    }
  }
}
