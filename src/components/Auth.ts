export default class Auth {
  static login(token: string) {
    localStorage.setItem('token', token)
  }

  static logout() {
    localStorage.removeItem('token')
  }

  static getToken() {
    return localStorage.getItem('token')
  }

  static isLogined(): boolean {
    return !!localStorage.getItem('token')
  }
}
