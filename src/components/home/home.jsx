
import { useSelector } from "react-redux";


import { Link,} from 'react-router-dom';
import RenderLineChart from "../../ui/recharts";

export default function Home() {
    let { balance, history } = useSelector((state) => state);

    return (
        <div id='Home'>
            <section>
                <div className="balance">
                    <h1>Balance: ${balance} <br /> <span>{Date().split(' ')[1]}, {Date().split(' ')[3]}</span> </h1>
                    <Link to={'/action'}>To operations</Link>
                </div>
                <div className="graphic">
                <RenderLineChart />
                </div>

            </section>
        </div>
    );
}

