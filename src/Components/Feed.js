import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!

    /* Use the map() function to render multiple Blocks! */
    // TODO: edit this variable

    const [colors, addColor] = useState([])

    const posts = colors.map((currColor) =>
        <Block color={currColor}/>)

    return (
        <div>
            <Menu></Menu>
            
            <Menu handleClick={(color) => addColor(colors => [color, ...colors])}></Menu>
            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;