const defaultRbac = require('./rbac')

module.exports = class RbacRepository {
  constructor (rbac) {
    this.rbac = rbac || defaultRbac
  }

  getUser (userId) {
    return this.rbac.users && this.rbac.users.find(u => u.id === userId)
  }

  getRoles (userId) {
    return this.getUser(userId).roles
  }

  getPlanRoles (userId, planId) {
    return this.rbac['plan-user-roles'].filter(r => r.planId === planId && r.userId === userId)
  }

  getRole (roleId) {
    return this.rbac.roles.find(r => r.id === roleId)
  }

  getPermissions (ids) {
    return this.rbac.permissions.filter(p => ids.includes(p.id))
  }
}
