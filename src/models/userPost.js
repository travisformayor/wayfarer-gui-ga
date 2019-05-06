import axios from 'axios';
axios.defaults.withCredentials = true; // Gets session cookie from responses

let userPostEndpoint = 'http://localhost:4000/api/v1/posts'; // localhost

// note: the following doesn't work unless you use the heroku buildpack. 
// ex: heroku create app-name --buildpack mars/create-react-app
// https://github.com/mars/create-react-app-buildpack
if(process.env.NODE_ENV === 'production') { // we are on heroku!
  userPostEndpoint = 'https://wayfare-back-345.herokuapp.com/api/v1/posts';
}

console.log('Post Env: ', process.env.NODE_ENV);
console.log('endpoint set to: ', userPostEndpoint);

class PostModel {
  // Static method to be called
  static all() {
    const api_url = `${userPostEndpoint}`;
    let request = axios.get(api_url);
    return request;
  }

  // static createPost(userPost) {
  //   const api_url = `${userPostEndpoint}/createPost`;
  //   let request = axios.post(api_url);
  //   return request;
  // }

  // static deletePost(userPost) {
  //   const api_url = `${userPostEndpoint}/deletePost`;
  //   let request = axios.delete(api_url);
  //   return request;
  // }

  // static updatePost(userPost) {
  //   const api_url = `${userPostEndpoint}/updatePost`;
  //   let request = axios.put(api_url);
  //   return request;
  // }

  static oneById(id) {
    const api_url = `${userPostEndpoint}/${id}`;
    let request = axios.get(api_url);
    return request;
  }

  static allByUsername(username) {
    const api_url = `${userPostEndpoint}/user/${username}`;
    let request = axios.get(api_url);
    return request;
  }
}



export default PostModel;