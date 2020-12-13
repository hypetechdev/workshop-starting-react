import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const PostItem = (props) => {
    const [selected, setSelected] = useState(false)

    // const post = {
    //     id: 123,
    //     title: 'Lorem ipsum dolor sit',
    //     body:
    //         'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores tempora excepturi hic incidunt laborum aliquam, aut cum facere est eveniet beatae quod. Saepe odio magnam, cumque possimus iste deserunt. Quod.',
    // }

    const handleSelectClick = () => {
        setSelected((prevState) => !prevState)
    }

    const cardStyle = selected ? ' red' : ' blue-grey darken-1'

    return (
        <div className={`card${cardStyle}`} onClick={handleSelectClick}>
            <div className="card-content white-text">
                <span className="card-title">{props.title}</span>
                <p>{props.body}</p>
            </div>
            <Link to={`/posts/${props.id}`}>read more</Link>
        </div>
    )
}

PostItem.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default PostItem
