export const initialState = {
  cartList:[],
  productList:[{
    title: 'The Psychology of Money',
    Author:"Morgan Housel ",
    price: '1.02',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_SY400_.jpg'
  },
  {
    title: "Life's Amazing Secrets: How to Find Balance and Purpose in Your Life | Inspirational Zen book on motivation, self-development & healthy living",
    Author: "Gaur Gopal Das",
    price: '2.03',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_SY400_.jpg'
  },
  {
    title: 'Atomic Habits: The life-changing million copy bestseller',
    Author: "James Clear",
    price: '3.04',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/91bYsX41DVL._AC_SY400_.jpg.jpg'
  },
  {
    title: 'Rich Dad Poor Dad : What The Rich Teach Their Kids About Money That The Poor And Middle Class Do Not!: (25th Anniversary Edition)',
    Author:"Robert T. Kiyosaki",
    price: '4.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_SY400_.jpg'
  },
  {
    title: 'Ikigai: The Japanese secret to a long and happy life',
    Author:"Héctor García",
    price: '5.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_SY400_.jpg'
  },
  {
    title: "Grandma's Bag of Stories: Collection of 20+ Illustrated short stories, traditional Indian folk tales for all ages for children of all ages by Sudha Murty",
    Author:"Sudha Murty",
    price: '6.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/81jv44QdNwL._AC_SY400_.jpg'
  },
  {
    title: 'Word Power Made Easy By Norman Lewis (More than 700 Pages)',
    Author:"Norman Lewis",
    price: '7.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/818e+fq7+BL._AC_SY400_.jpg'
  },
  {
    title: 'The Power of Your Subconscious Mind',
    Author:"Joseph Murphy",
    price: '8.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_SY400_.jpg'
  },
  {
    title: 'Attitude Is Everything: Change Your Attitude ... Change Your Life!',
    Author: "Jeff Keller",
    price: '9.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/710jnzKlDTL._AC_SY400_.jpg'
  }]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { 
        ...state, 
        cartList:[...state.cartList, action.payload]
      };
    case 'REMOVE_FROM_CART':
      return { 
        ...state, 
        cartList: state.cartList.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
}