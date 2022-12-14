import { useAppSelector } from "../../store/types";
import { Payment } from "./payment";
import { Title, TitleWrap, Wrap } from "./styles";

type PropType = {
  name: string;
  episode: string;
  air_date: string;
  detail?: string;
  id: number;
}

export const Header: React.FC<PropType> = ({name, episode, air_date, detail, id}) => { 
  const cartList = useAppSelector(state => state.cart.shopList)
  const orders = useAppSelector(state => state.orders.idList)
  const isOnCart = cartList.some(item => item.id === id)
  const isOnOrders = orders.some(item => item === id)  
  
  return <>
    <Wrap isBought={isOnCart || isOnOrders}>
      <TitleWrap>
        {name && <Title>Title: {name}</Title>}
        {air_date && <Title>Air date: {air_date}</Title>}
        {detail && <Title>{detail}</Title>}
        {episode && <Title>{episode}</Title>}
      </TitleWrap>
      {!isOnOrders && !isOnCart &&
        <Payment episode={episode} id={id} />
      }
    </Wrap>
  </>
}