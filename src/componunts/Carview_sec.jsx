import React from 'react'
import Cardsection from './Cardsection';
import Accordian_bt from './Accordian_bt';



function Carview_sec() {
    return (
        <div className='container'>
            <div className="review-sec">
                    <h1>Get Car Review From Our Expert</h1>
                <div className='review-sec2'>
                <Cardsection
                    title="Toyota Land Crusier"
                    imgurl="https://images.unsplash.com/photo-1650530579355-7ad9d4766043?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed veritatis facere aperiam veniam! Rerum exercitationem assumenda, nulla quae, repudiandae omnis blanditiis qui nemo quam accusamus odit aspernatur cupiditate unde?" />
                <Cardsection
                    title="Jeep Wrangler"
                    imgurl="https://images.unsplash.com/photo-1602038187784-41e649a79d38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed veritatis facere aperiam veniam! Rerum exercitationem assumenda, nulla quae, repudiandae omnis blanditiis qui nemo quam accusamus odit aspernatur cupiditate unde?" />
                <Cardsection
                    title="Ford F150"
                    imgurl="https://images.unsplash.com/photo-1590043586864-d05a4ff3ec08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed veritatis facere aperiam veniam! Rerum exercitationem assumenda, nulla quae, repudiandae omnis blanditiis qui nemo quam accusamus odit aspernatur cupiditate unde?" />
                <Cardsection
                    title="Mazda 3"
                    imgurl="https://images.unsplash.com/photo-1599491143816-8c1ea12a4e06?q=80&w=2159&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed veritatis facere aperiam veniam! Rerum exercitationem assumenda, nulla quae, repudiandae omnis blanditiis qui nemo quam accusamus odit aspernatur cupiditate unde?" />
                <Cardsection
                    title="Honda Civic"
                    imgurl="https://wallpapercave.com/wp/wp12781284.jpg"
                    body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed veritatis facere aperiam veniam! Rerum exercitationem assumenda, nulla quae, repudiandae omnis blanditiis qui nemo quam accusamus odit aspernatur cupiditate unde?" />
                <Cardsection
                    title="Chevrolet Corvette C8"
                    imgurl="https://wallpapercave.com/wp/wp11634747.jpg"
                    body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed veritatis facere aperiam veniam! Rerum exercitationem assumenda, nulla quae, repudiandae omnis blanditiis qui nemo quam accusamus odit aspernatur cupiditate unde?" />
                </div>
                <Accordian_bt/>
            </div>
        </div>
    )
}

export default Carview_sec;