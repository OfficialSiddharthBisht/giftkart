import React from 'react'
import '../styles/listItem.css';

function ListItem() {
    let imageUrl = "";
    let title = ""
    let caption = ""
    return (
        <div className='list-item-container'>
            <div className="left">
                <img src={imageUrl} className="thumbnail" alt="" />
            </div>
            <div className='center'>
                <h4>{title}</h4>
                <p>{caption}</p>
            </div>
            <div className='right'>
                <p>&#8250;</p>
            </div>
        </div>
    );
};

export default ListItem