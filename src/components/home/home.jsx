
import { useSelector } from "react-redux";
import setIcon from "../../assets/Set.png"
import getIcon from "../../assets/Get.png"

import { Link,} from 'react-router-dom';
import RenderLineChart from "../../ui/recharts";
import ModalWindowCheck from "./ModalWindowCheck";
import { useState } from "react";

export default function Home() {
    let { balance, set, get, alert } = useSelector(state => state);
    const [modal, setModal] = useState(false)
    const [obj, setEl]= useState({date: "", price: "", category: "", product: ""})
    function handleModalWindow (el) {
        setEl(el)
        setModal(true)
    }
    return (
        <div id='Home'>
            <section>
                <div className="statistics">
                    <div className="balance">
                        <h1 style={{color: alert ? "red" : "whitep"}}>Balance: ${balance} <span>{Date().split(' ')[1]}, {Date().split(' ')[3]}</span> </h1>
                        <Link to={'/action'}>To operations</Link>
                        <RenderLineChart />
                    </div>
                    
                </div>
                <div className="history_items">
                <div className="history">
                    {get?.map((el, id)=>(
                        <div onClick={()=>handleModalWindow(el)} className="history_item" key={id}>
                            <h3>{el.date}</h3>
                            <div className="actived">
                            <h3>${el.price}</h3>
                            <img src={setIcon} alt="icon    " />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="history">
                    {set?.map((el, id)=>(
                        <div className="history_item" key={id}>
                            <h3>{el.date}</h3>
                            <div className="actived">
                            <h3>${el.replenish}</h3>
                            <img src={getIcon} alt="icon    " />
                            </div>
                        </div>
                    ))}
                </div>
                </div>
                <ModalWindowCheck modal={modal} setModal={setModal} obj={obj}/>
            </section>
        </div>
    );
}

