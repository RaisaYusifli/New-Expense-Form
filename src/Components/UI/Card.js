import React from 'react';
// import './Card.css';

const Card=(props)=>{
    const classes= 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
    // the value of the children prop will always be the content
    // of between open and closing tag of your custom component -wrapper rolunu oynuyur(sarmaliyici)
}

export default Card;