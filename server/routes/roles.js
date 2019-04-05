const RoleService = require('../services/role-service')
const joi = require('joi')

const service = new RoleService()

module.exports = {
  method: 'GET',
  path: '/roles/{userId}/{planId?}',
  options: {
    handler: (request, h) => {
      const userId = request.params.userId
      const planId = request.params.planId
      return service.getCredentials(userId, planId)
    },
    validate: {
      params: {
        userId: joi.string(),
        planId: joi.string().allow('')
      }
    }
  }
}
