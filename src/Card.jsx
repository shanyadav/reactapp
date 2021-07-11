import React from 'react';

function Card(props){
    console.log(props);
    return (
    <>
        <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="">
                    <img src={props.imgSrc} alt="Cinque Terre"/>
                </a>
                <div className="desc">{props.title}</div>
                <div className="size">{props.size}</div>
            </div>
        </div>
    </>)
}

export default Card;