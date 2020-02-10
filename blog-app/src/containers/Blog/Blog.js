import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {

    state = {
        posts:[],
        postSelected:null
    }
    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts').then(
            response => {
                const posts = response.data.slice(10, 14);
                const updatedPosts = posts.map(post =>{
                    return{
                        ...post,
                        author:'Abdul'
                    };
                });
            
                this.setState({posts:updatedPosts})
            });
    };

    postClickedHandler = (id) => {
        this.setState({postSelected:id})
    }
    
    render () {
        let posts = this.state.posts.map(
            post =>{
                return <Post 
                key={post.id} 
                title={post.title} 
                author={post.author}
                clicked = {()=>this.postClickedHandler(post.id)}></Post>
            }
        )
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost  id={this.state.postSelected}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;