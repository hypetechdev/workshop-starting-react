import React from 'react'

import { postsService } from '../../lib/services/postsService.js'

import Title from '../../components/Title.jsx'
import Text from '../../components/Text.jsx'

import PostList from './PostList.jsx'

class PostsPage extends React.Component {
    state = {
        isLoading: true,
        posts: [],
    }

    componentDidMount() {
        console.log('componentDidMount')

        postsService.fetchPosts().then((posts) => {
            this.setState({
                posts,
                isLoading: false,
            })
        })

        // setTimeout(() => {
        //     this.setState({
        //         posts: [{}, {}],
        //         isLoading: false,
        //     })
        // }, 3000)
    }

    render() {
        console.log('render')
        if (this.state.isLoading) {
            return <h2>Loading posts...</h2>
        }

        return (
            <>
                <Title title="Posts page" />
                <Text content="This is subtitle" />
                <PostList posts={this.state.posts} />
            </>
        )
    }
}

PostsPage.propTypes = {}

export default PostsPage
