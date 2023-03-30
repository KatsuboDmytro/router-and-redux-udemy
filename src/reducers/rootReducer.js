const initialState = {
    cards: [
        {
          id:1, 
          title:'Alex', 
          body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem architecto ea totam nam itaque praesentium eos repellendus perspiciatis facere? Eligendi, minus. Velit saepe nulla in assumenda blanditiis non eum quas?Ratione ducimus itaque modi quos laborum quam autem illum, iusto sunt ex ipsa non dolorem cumque dicta corporis aperiam unde, culpa obcaecati nulla? Nesciunt officiis eaque rerum, facere corporis cupiditate',
        },
        {
          id:2, 
          title:'Willma', 
          body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem architecto ea totam nam itaque praesentium eos repellendus perspiciatis facere? Eligendi, minus. Velit saepe nulla in assumenda blanditiis non eum quas?Ratione ducimus itaque modi quos laborum quam autem illum, iusto sunt ex ipsa non dolorem cumque dicta corporis aperiam unde, culpa obcaecati nulla? Nesciunt officiis eaque rerum, facere corporis cupiditate',
        },
        {
          id:3, 
          title:'John', 
          body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem architecto ea totam nam itaque praesentium eos repellendus perspiciatis facere? Eligendi, minus. Velit saepe nulla in assumenda blanditiis non eum quas?Ratione ducimus itaque modi quos laborum quam autem illum, iusto sunt ex ipsa non dolorem cumque dicta corporis aperiam unde, culpa obcaecati nulla? Nesciunt officiis eaque rerum, facere corporis cupiditate',
        },
    ],
    users:[],
    modal: {
      isOpen: false,
    },
}

export const rootReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case 'DELETE_CARD':
      let newCard = state.cards.filter((card) => action.id !== card.id);
      return{
        ...state,
        cards: newCard,
      };

    case 'FETCH_USERS':
      return{...state, users: action.payload};

    case 'OPEN_MODAL':
      return{...state,
        modal: {
          isOpen: true,
        }};

    case 'CLOSE_MODAL':
      return{...state,
        modal: {
          isOpen: false,
        }};

    default:
      return state;
  }
}

