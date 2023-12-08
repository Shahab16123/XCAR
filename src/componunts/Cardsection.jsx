import React, { Fragment } from 'react'

function Cardsection({ title, imgurl, body }) {
    return (
        <Fragment>
            <div className='card-container'>
                <div className='img-section'>
                    <img src={imgurl} alt="some image" />
                </div>
                <div className="card-content">
                    <h2 className='card-title'>{title}</h2>
                    <p className="card-body">{body}</p>
                    <button className='link-btn'>Buy Now</button>
                </div>
            </div>
        </Fragment>
    )
}

export default Cardsection;