import Vue from 'vue'

export const USER_SIGNIN = 'USER_SIGNIN'
export const USER_SIGNOUT = 'USER_SIGNOUT'

export default {
  state: JSON.parse(sessionStorage.getItem('user')) || {},
  mutations: {
    [USER_SIGNIN] (state, user) {
      sessionStorage.setItem('user', JSON.stringify(user))
      Object.assign(state, user)
    },
    [USER_SIGNOUT] (state) {
      sessionStorage.removeItem('user')
      Object.keys(state).forEach(k => Vue.delete(state, k))
    }
  },
  actions: {
    [USER_SIGNIN] ({commit}, user) {
      var self = this._vm
      return new Promise((resolve, reject) => {
        var urlUser = '/user'
        self.$http.get(urlUser, {
          params: {
            phone: user.phone,
            vcode: user.vcode
          }
        }).then(({ data }) => {
          var ret = {
            errcode: 0,
            errmsg: ''
          }
          if (!data) {
            ret.errcode = 1
            ret.errmsg = '账号未注册'
            resolve(ret)
          } else {
            commit(USER_SIGNIN, data)
            resolve(ret)
          }
        }).catch((error) => {
          console.log(error)
          // reject(request.status)
        })
      })
    },
    [USER_SIGNOUT] ({commit}) {
      commit(USER_SIGNOUT)
    }
  }
}
