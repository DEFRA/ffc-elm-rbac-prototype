const defaultRbac = require('./rbac')

module.exports = class RbacRepository {
  constructor (rbac) {
    this.rbac = rbac || defaultRbac
  }

  getUser (userId) {
    return this.rbac.users && this.rbac.users.find(u => u.id === userId)
  }

  isInRole (userId, roleName) {
    const role = this.rbac.roles.find(r => r.name === roleName)
    const user = this.getUser(userId)
    return user.roles.includes(role.id) ? role : undefined
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
