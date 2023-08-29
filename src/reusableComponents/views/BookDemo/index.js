import React from 'react';
import { BookDemoStyle } from './styles'
import { Button } from 'antd';

const BookDemo = () => {
  return (
    <BookDemoStyle>
        <div className='book-demo'>
           <h1>Ready to get started?
            </h1> 
            <p>
             Book a demo or contact us
            </p>
            <div>
            <Button className='book-btn'>Book a consultation</Button>
            <Button className='contact-btn'>Contact us</Button>
            </div>
        </div>
    </BookDemoStyle>
   
  )
}

export default BookDemo