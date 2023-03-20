import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchUsers } from '../actions/deleteCard';

const Card = () => {
    let { user } = useParams();

    const card = useSelector((state) => {
        return state.cards.find(card => card.title === user)
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //const { title, body } = card;
    const users = useSelector((state) => {
        return state.users;
    })
    console.log(users);

    React.useEffect(() => {
        dispatch(fetchUsers());
      }, [dispatch]);

    const onButtonClick = () => {
        let id = card.id;
        dispatch({type:'DELETE_CARD', id});
        navigate('/contact');
    }

    return users.map((user) => {
        return(
            <div key={user.id} className='ui raised very padded text container segment'>
                <h3 className='ui header'>{user.name}</h3>
                <p>{user.email}</p>
                <button className='ui primary right floated button' onClick={onButtonClick}>DELETE</button>
            </div>
        )
    })        
}
export default Card;