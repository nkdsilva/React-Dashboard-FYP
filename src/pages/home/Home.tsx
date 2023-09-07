import Barchartbox from "../../components/barchartBox/Barchartbox";
import Bigchartbox from "../../components/bigchartbox/Bigchartbox";
import Chartbox from "../../components/chartbox/Chartbox";
import Piechartbox from "../../components/piechartbox/piechartbox";
import Topbox from "../../components/topbox/Topbox";
import { barChartBoxRevenue, barChartBoxVisit, chartBoxMonthly, chartBoxDaily, chartBoxProduct, chartBoxUser } from "../../data";
import "./home.scss"

const Home = () =>{
    return(
        <div className="home">
            <div className="box box1"><Topbox/></div>
            <div className="box box2"><Chartbox{...chartBoxUser}/></div>
            <div className="box box3"><Chartbox{...chartBoxProduct}/></div>
            <div className="box box4"><Piechartbox/></div>
            <div className="box box5"><Chartbox{...chartBoxDaily}/></div>
            <div className="box box6"><Chartbox{...chartBoxMonthly}/></div>
            <div className="box box7"><Bigchartbox/></div>
            <div className="box box8"><Barchartbox{...barChartBoxVisit}/></div>
            <div className="box box9"><Barchartbox{...barChartBoxRevenue}/></div>
        </div>
    )
}

export default Home;
