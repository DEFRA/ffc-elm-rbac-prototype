const RbacRepository = require('./rbac-repository')
const { flattenArray } = require('../utlilities/array-helper')
const _ = require('lodash')

module.exports = class RoleService {
  constructor (repository) {
    this.repository = repository || new RbacRepository()
  }

  getRoles (userId, planId) {
    const roles = this.repository.getRoles(userId).map(r => this.populateRole(r))
    const planRoles = this.repository.getPlanRoles(userId, planId).map(r => this.populateRole(r.roleId))
    return _.union(roles, planRoles)
  }

  populateRole (roleId) {
    return this.repository.getRole(roleId)
  }

  populatePermissions (permissionIds) {
    return this.repository.getPermissions(permissionIds)
  }

  populateCredentials (user, planId) {
    const roles = this.getRoles(user.id, planId)
    const permissionIds = flattenArray((roles.map(r => r.permissions)))
    const permissions = this.populatePermissions(permissionIds)

    return {
      user: { id: user.id, name: user.name },
      roles: roles.map(r => { return { id: r.id, name: r.name } }),
      permissions
    }
  }

  getCredentials (userId, planId = '') {
    const user = this.repository.getUser(userId)
    return user ? this.populateCredentials(user, planId) : {}
  }
}
