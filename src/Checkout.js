import React from 'react';
import './Checkout.css';
import adbanner from '../src/images/adbanner.jfif'
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad'
            src={adbanner} alt='ad banner' />

            <div>
                <h2 className='checkout__title'>
                    Your shopping basket
                </h2>
            </div>
        </div>

        <div className='checkout__right'>
            <Subtotal />

            {/* Item */}
            {/* Item */}
            {/* Item */}
            {/* Item */}

        </div>
    </div>
  )
}

export default Checkout