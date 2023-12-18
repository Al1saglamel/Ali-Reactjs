import MidBox from "../../components/midBox/MidBox"
import ChartBox from "../../components/chartBox/ChartBox"
import "./home.scss"
import { chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data"
import PieChartRight from "../../components/pieCardRight/PieChartRight"
import BigChart from "../../components/bigChart/BigChart"
const Home = () => {
  return (
    <div className="home">
      <div className="box contentbox1"><ChartBox{...chartBoxUser}/></div>
      <div className="box contentbox2"><ChartBox{...chartBoxProduct}/></div>
      <div className="box contentbox3"><ChartBox{...chartBoxRevenue}/></div>
      <div className="box contentbox4"><ChartBox{...chartBoxConversion}/></div>
      <div className="box contentbox5">
        <MidBox/>
      </div>
      <div className="box contentbox6"><BigChart/></div>
      <div className="box contentbox7"><PieChartRight/></div>
      {/* <div className="box contentbox8"> </div>
      <div className="box contentbox10">Box1</div>       */}
    </div>
  )
}

export default Home