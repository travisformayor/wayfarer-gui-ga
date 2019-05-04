import axios from 'axios';
axios.defaults.withCredentials = true; // Gets session cookie from responses

if(process.env.NODE_ENV === 'production') { // we are on heroku!
  const userEndpoint = 'https://wayfare-back-345.herokuapp.com/api/v1/posts';
} else {
  const userEndpoint = 'http://localhost:4000/api/v1/posts'; // localhost
}

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
}



export default PostModel;