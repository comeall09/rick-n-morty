import { useState } from 'react'
import { addPurchase } from '../../../pages/cart/model/slice';
import { Purchase } from '../../../pages/cart/types';
import { useAppDispatch } from "../../../store/types";
import { Wrap, Button, Price } from "./style";

type PropType = {
  episode: string;
  id: number;
}

export const Payment: React.FC<PropType> = ({ episode, id }) => {
  const dispatch = useAppDispatch()
  const [cheapChoosed, setCheapChoosed] = useState(false)
  const [choosed, setChoosed] = useState(false)

  const cheapEp: Purchase = {
    episode: episode,
    quality: '720p',
    price: 2.99,
    id: id,
  }

  const expensiveEp: Purchase = {
    episode: episode,
    quality: 'HD',
    price: 5.99,
    id: id,
  }

  const choose = (value?: string) => {
    if(value) {
      setCheapChoosed(true)
      setChoosed(false)
    }
    else {
      setChoosed(true);
      setCheapChoosed(false)
    }
  }

  const [disabled, setDisabled] = useState(false)

  const startAnim = () => {
    setDisabled(true)
    setTimeout(() => {
      setDisabled(false)
    }, 1201)
  }

  const addToCart = () => {
    if(choosed) {
      startAnim()
      setTimeout(() => {
        dispatch(addPurchase(expensiveEp))
      }, 1200)
    } else {
      if(cheapChoosed) {
        startAnim()
        setTimeout(() => {
          dispatch(addPurchase(cheapEp))
        }, 1200)
      } else return
    }
  }

  return (
    <>
      <Wrap>
        <Price
          choosed={cheapChoosed}
          tabIndex={1}
          onClick={() => choose("cheap")}
        >
          <span>
            {episode} | {cheapEp.quality}
          </span>
          <span>{cheapEp.price}$</span>
        </Price>
        <Price
          choosed={choosed}
          tabIndex={2}
          onClick={() => choose()}
        >
          <span>
            {episode} | {expensiveEp.quality}
          </span>
          {expensiveEp.price}$
        </Price>
        <Button disabled={disabled} onClick={addToCart}>
          {disabled ? "Adding..." : "Add to cart"}
        </Button>
      </Wrap>
    </>
  );
};
