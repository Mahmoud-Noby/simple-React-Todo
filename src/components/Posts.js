import  { Component } from 'react';
import axios from 'axios';
class Posts extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response)  => {
      console.log(response.data);
      this.setState({
        posts: response.data.slice(0, 11)
      })
    })
  }
  render() {
    const { posts } = this.state;
    const postsList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
         )
      })
    ) : (
      <div className="center"> No posts yet </div>
    )
    return (
      <div className="container">
        <h3 className="center blue-text">Posts</h3>
        {postsList}
      </div>
    )
  }
}

export default  Posts