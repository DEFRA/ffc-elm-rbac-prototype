const defaultRbac = require('./rbac')

module.exports = class RbacRepository {
  constructor (rbac) {
    this.rbac = rbac || defaultRbac
  }

  getUser (userId) {
    return this.rbac.users && this.rbac.users.find(u => u.id === userId)
  }

  getPlanRoles (userId, planId) {
    return this.rbac['plan-user-roles'].filter(r => r.planId === planId && r.userId === userId)
  }

  getBusinessRole (userId) {
    const businessRole = this.rbac.roles.find(r => r.name === 'BusinessUser')
    const user = this.getUser(userId)
    const match = user.roles.includes(businessRole.id)
    return match ? businessRole : null
  }

  getElmRole (userId) {
    const elmRole = this.rbac.roles.find(r => r.name === 'ElmUser')
    const user = this.getUser(userId)
    const match = user.roles.includes(elmRole.id)
    return match ? elmRole : null
  }

  getRole (roleId) {
    return this.rbac.roles.find(r => r.id === roleId)
  }

  getPermissions (ids) {
    return this.rbac.permissions.filter(p => ids.includes(p.id))
  }
}
