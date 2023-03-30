import React from 'react'
import { connect/*, useSelector, useDispatch*/ } from 'react-redux'
import { openModal, closeModal } from '../actions/actionModal'
import './Modal.css'

const About = ({modal, closeModal, openModal}) => {
  return (
    <>
      <div className='ui raised very padded text container segment' id='d-flex' style={{marginTop: '80px'}}>
        <h3 className='ui header' id='center'>About</h3>
        <button className='ui button' onClick={openModal}>Відкрити модальне вікно</button>
      </div>
      {
        modal.isOpen &&
        <div className='wrapper'>
          <div className='modal'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h3>I am a modal</h3>
                <div className='close' onClick={closeModal}>X</div>
              </div>
              <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem architecto ea totam nam itaque praesentium eos repellendus perspiciatis facere? Eligendi, minus. Velit saepe nulla in assumenda blanditiis non eum quas?
                  Ratione ducimus itaque modi quos laborum quam autem illum, iusto sunt ex ipsa non dolorem cumque dicta corporis aperiam unde, culpa obcaecati nulla? Nesciunt officiis eaque rerum, facere corporis cupiditate?
              </p>
            </div>
          </div>
        </div>
      }
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    modal: state.modal,
  }
};

const mapDispatchToProps = {
    openModal,closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(About)