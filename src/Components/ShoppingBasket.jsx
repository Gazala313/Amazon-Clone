import './shoppingbasket.scss';
import { useStateValue } from './StateProvider';
import Rating from './Rating';
import { useEffect, useState } from 'react';

const ShoppingBasket = () => {
  const { myReducer } = useStateValue();
  const [ data, dispatch ] = myReducer;
  const [increment,setIncrement] = useState(1);

  const removeFromCart = (id) => {
    dispatch({
      type:'REMOVE_FROM_CART',
      payload:id
    })
  }

  const IncreaseCount =(id)=>{
    setIncrement(increment + 1)
  }
  useEffect(()=>{
    if(increment <= 0){
        setIncrement(1);
    }
  })
  
  return(
    <div className="shoppingBasket">
      <h2>Your Shopping Basket</h2>
      <hr/>
      <ul className='list'>
        {
          data.cartList.map(item=>(<li key={item.id}>
            <div className='imageHolder'>
              <img src={item.imageURL} alt="" />
            </div>
            <div className='itemDeatils'>
              <div>{item.title}</div>
              <p><strong>${item.price}</strong></p>
              <div><Rating rate={item.rating}/></div>
              <div>
                <button className='inc' onClick={()=> IncreaseCount(item.id)}>-</button> Qty <span> {increment} </span>
                <button className='inc' onClick={()=>IncreaseCount(item.id)}>+</button>
              </div>
              
              <button onClick={()=>removeFromCart(item.id)}>Remove from Cart</button>
            </div>
          </li>))
        }
      </ul>
    </div>
  )
}

export default ShoppingBasket;