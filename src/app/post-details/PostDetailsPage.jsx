import React, { useEffect, useState } from 'react'
import Paper from '../../components/Paper'
import Text from '../../components/Text'
import Title from '../../components/Title'
import { postsService } from '../../lib/services/postsService'

const PostDetailsPage = (props) => {
    const [post, setPost] = useState(null)

    const { postId } = props.match.params

    useEffect(() => {
        postsService.fetchPost(postId).then((post) => {
            setPost(post)
        })
    }, [postId])

    if (!post) {
        return <h1>Loading post data...</h1>
    }

    return (
        <>
            <Title title={`ID: ${postId}`} />
            <Paper>
                <Title title={post.title} />
                <Text content={post.body} />
            </Paper>
        </>
    )
}

export default PostDetailsPage
