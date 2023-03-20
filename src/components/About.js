import React from 'react'
import './Modal.css'

export const About = () => {
  return (
    <>
      <div className='wrapper'>
        <div className='modal'>
          <div className='modal-content'>
          <div className='modal-header'>
                <h3>I am a modal</h3>
                <div className='close'>X</div>
              </div>
              <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem architecto ea totam nam itaque praesentium eos repellendus perspiciatis facere? Eligendi, minus. Velit saepe nulla in assumenda blanditiis non eum quas?
                  Ratione ducimus itaque modi quos laborum quam autem illum, iusto sunt ex ipsa non dolorem cumque dicta corporis aperiam unde, culpa obcaecati nulla? Nesciunt officiis eaque rerum, facere corporis cupiditate?
              </p>
          </div>
        </div>
      </div>
      <div className='ui raised very padded text container segment'
           style={{marginTop: '80px'}}>
        <h3 className='ui header'>About</h3>
      </div>
    </>
  )
}