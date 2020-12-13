import React from 'react'
import PropTypes from 'prop-types'
import PostItem from './PostItem.jsx'

import Text from '../../components/Text.jsx'

const PostList = ({ posts = [] }) => {
    if (!posts.length) {
        return <Text content="No posts" />
    }

    return (
        <div>
            {posts.map((post) => (
                <PostItem
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                />
            ))}
        </div>
    )
}

PostList.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default PostList
