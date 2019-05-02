import axios from 'axios'

// const endPoint = `https://super-crud-api.herokuapp.com/api/users`
const userEndpoint = 'localhost:4000/api/v1/users';
// Todo : add way for app to detect if its running on Heroku, and switch urls

class UserModel {
  // can call this static method with:
  // let Users = User.all();
  static all() {
    let request = axios.get(userEndpoint);
    return request;
  }

  static login(user) {
    
    const api_url = `${userEndpoint}/${user.email}`;
    let request = axios.get(api_url, user, {'credentials': 'include'});
    return request;
  }

  static signup(user) {
    // Todo: Add frontend validation code before this get called
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