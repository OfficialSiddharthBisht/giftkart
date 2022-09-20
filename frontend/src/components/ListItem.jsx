import React from 'react'
import '../styles/listItem.css';

const ListItem = ({title,image,description})=> {
    return (
        <div className='dropdown'>
        <div className='list-item-container dropdown-content'>
            <div className="left">
                <img src={image} className="thumbnail" alt="" />
            </div>
            <div className='center'>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
        </div>
    );
};

export default ListItem