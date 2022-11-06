import '../Styles/Block.css';
import React from 'react';

const Block = (props) => {
    /* TODO */
    const colorOfPost = {
        backgroundColor: props.color
    }

    return (
        <div data-testid='main-component'>

            <div className="post" style={colorOfPost}></div>
            <div className="caption" >{props.color}</div>
        </div>
    );
}

export default Block;