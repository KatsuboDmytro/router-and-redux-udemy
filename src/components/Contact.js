import React from 'react'
import { connect/*, useSelector, useDispatch*/ } from 'react-redux'
import { NavLink } from 'react-router-dom'
//import { Modal } from './Modal'
import { deleteCard } from '../actions/deleteCard';

const Contact = ({cards}) => {
  return (
    <>
      {/*<Modal/>*/}
      {
        cards.map((card) => {
            return(
              <div key={card.id} className='ui raised very padded text container segment'>
                <NavLink to={`/router-and-redux-udemy/${card.title}`} className='ui header'>{card.title}</NavLink>
                <p>{card.body}</p>
              </div>
            )
        })
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    deleteCard: () => {dispatch(deleteCard)}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);