import axios from 'axios';
axios.defaults.withCredentials = true; // Gets session cookie from responses

// const endPoint = `https://super-crud-api.herokuapp.com/api/users`
const userEndpoint = 'http://localhost:4000/api/v1/users';
// Todo : add way for app to detect if its running on Heroku, and switch urls

class UserModel {
  // can call this static method with:
  // let Users = User.all();
  // static all() {
  //   let request = axios.get(userEndpoint);
  //   return request;
  // }

  static login(user) {
    const api_url = `${userEndpoint}/login`;
    // let request = axios.get(userEndpoint, user, {'credentials': 'include'});
    let request = axios.post(api_url, user);
    return request;
  }

  static signup(user) {
    const api_url = `${userEndpoint}/signup`;
    let request = axios.post(api_url, user);
    return request;
  }

  // static create(user) {
  //   let request = axios.post(endPoint, user);
  //   return request;
  // }

  // static delete(user) {
  //   let request = axios.delete(`${endPoint}/${user._id}`);
  //   return request;
  // }

  // static update(user) {
  //   let request = axios.put(`${endPoint}/${user._id}`, user)
  //   return request
  // }
}

export default UserModel;
// module.exports = User;