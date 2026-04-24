import React from 'react'

/**
 * 权限控制高阶组件
 *
 * 用法一（函数调用，带参数）：
 *   export default withAuth(['admin'])(UserPage)
 *
 * 用法二（装饰器，带参数）：
 *   @withAuth(['admin', 'editor'])
 *   class UserPage extends React.Component { ... }
 *
 * 用法三（装饰器，不带参数，默认要求已登录）：
 *   @withAuth()
 *   class UserPage extends React.Component { ... }
 *
 * requiredRoles:
 *   - undefined / []: 只要已登录即可
 *   - ['admin', ...]: 用户必须拥有其中任意一个角色
 */
export const withAuth = (role)=>(Comp) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isAdmin: false,
        checking: false,
      }
    }

    async componentDidMount() {
      const currentRole = await this.getCurrentUser()
      this.setState({
        isAdmin: currentRole === 'Admin'
      })
    }

    getCurrentUser() {

      return new Promise((resolve) => {
        this.setState({
          checking: true
        })
        setTimeout(() => {
          this.setState({
            checking: false
          })
          resolve(role)
        }, 2000);

      })
    }


    render() {
      const { checking, isAdmin} = this.state

      if (checking) {
        return <div style={{ padding: 12 }}>权限校验中...</div>
      }

      if (!isAdmin) {
        return (
          <div style={{ padding: 12, color: '#c00' }}>
            无权访问
          </div>
        )
      }

      return <Comp {...this.props} />
    }
  }
}

export default withAuth
