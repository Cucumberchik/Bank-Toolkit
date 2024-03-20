import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMoney, getMoneyContent } from "../../reducers/reducer/bank";

export default function Actions() {
  let {balance} = useSelector(state=>state)
    const [replenish, setReplenish] = useState('');
    const [getMoney, setGetMoney] = useState({price: "", product: "", category: ""})
    let valuesNum = replenish.split('').filter(el=> +el == el).join('');
    let price = getMoney.price.split('').filter(el=> +el == el).join('');
    let date = Date().split(' ').slice(1).slice(0, 4).join(' ');

    let dispatch = useDispatch()
    function getMoneyProduct(){
        if((+balance - +getMoney.price)>0){
          if(getMoney.category && getMoney.price && getMoney.product){
            let data = {...getMoney, price: getMoney.price.split('').filter(el=> +el == el).join('')};
              let item = {...data, id: Date.now(), date};
              dispatch(getMoneyContent(item));
              setGetMoney({price: "", product: "", category: ""});
          } else{
              alert("Error");
              return;
          }
        }else{
        alert("у вас не хватает денег");
        }
    }
    function replenishGet(){
      if(valuesNum){
        let Object = {date, replenish: valuesNum}
        dispatch(addMoney(Object))
        setReplenish('')
      }else{
        alert('error')
      }
    }

  return (
    <div id='action'>
      <section>
        <div className="put">
            <input value={valuesNum} onChange={(e)=>setReplenish(e.target.value)} type="text" placeholder='sum'/>
            <button onClick={replenishGet}>Replenish</button>
        </div>
        <div className="get_money">
            <input value={price} type="text" onChange={(e)=>setGetMoney({...getMoney, price: e.target.value})} placeholder='price'/>
            <input value={getMoney.product} type="text" onChange={(e)=>setGetMoney({...getMoney, product: e.target.value})} placeholder='product'/>
            <input value={getMoney.category} type="text" onChange={(e)=>setGetMoney({...getMoney, category: e.target.value})} placeholder='cotegory'/>
            <button onClick={getMoneyProduct}>Buy</button>
            <Link to={'/'}>Back</Link>
        </div>
      </section>
    </div>
  )
}
