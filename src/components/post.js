import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postAction'
import PropTypes from 'prop-types'

class Posts extends Component {
    componentWillMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost)
        }
    }



    render() {
        const postItem = this.props.posts.map(post => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
        ))
        return (
            <div>
                {postItem}
            </div>
        )
    }
}
Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts:  PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const MapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(MapStateToProps, {fetchPosts})  (Posts);