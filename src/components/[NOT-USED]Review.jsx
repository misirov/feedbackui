import React from 'react'

const Review = () => {


    const array = [1,2,3,4,5,6,7,8,9];

    return (
        <div className='review-container'>
            <div className='container'>            
                <div className='review-title'>
                    <h3>Give us your Feedback!</h3>
                </div>

                <div className='review-numbers'>
                    {array.map((n) => (
                        <div className='number'>{n}</div>
                    ))}
                </div>

                <div className='review-input'>
                    <input type='text' placeholder='Write your review' className='input-review' />
                    <button className='btn-review'>Submit</button>
                </div>

            </div>
        </div>
    )
}

export default Review  