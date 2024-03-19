import { useState } from "react"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getMoneyContent } from "../../reducers/reducer/bank";

export default function Actions() {
    const [replenish, setReplenish] = useState('');
    const [getMoney, setGetMoney] = useState({price: "", product: "", category: ""})
    let valuesNum = replenish.replace(/[a-z]/gi, '');
    let price = getMoney.price.replace(/[a-z]/gi, '');

    let dispatch = useDispatch()
    function getMoneyProduct(){
        if(getMoney.category && getMoney.price && getMoney.product){
            let data = {...getMoney, id: Date.now(), data: Date().split(' ').slice(1).slice(0, 4).join(' ')};
            dispatch(getMoneyContent(data))
            setGetMoney({price: "", product: "", category: ""})
        } else{
            alert("Error")
            return
        }
    }

  return (
    <div id='action'>
      <section>
        <div className="put">
            <input value={valuesNum} onChange={(e)=>setReplenish(e.target.value)} type="text" placeholder='sum'/>
            <button>Replenish</button>
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
