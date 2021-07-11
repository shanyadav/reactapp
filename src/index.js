import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import './index.css'
import Sdata from './Sdata';

ReactDom.render(
    <>
    <h2>Responsive Image Gallery</h2>
    <h4>Resize the browser window to see the effect.</h4>
<Card 
    imgSrc="http://i.imgur.com/QJa0R6q.jpg" 
    title="Add a description of the image here"
    size="Size = 1230"
/>
<Card/>
<Card/>
</>, 
document.getElementById('root')
)