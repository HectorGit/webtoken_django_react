import {useState} from "react"
import axios from "axios"
import DeskList from "./DeskList"
import BarChart from "./BarChart"
import MultiBarChart from "./MultiBarChart"
import StackedChart from "./StackedChart"
import DonutGraph from "./DonutGraph"

const moment = require('moment')

function DeskData() {


    var time_active_data_for_graph  = new Array(24).fill(0);//this will be filled in with data fetched...

    const tempData = [
        {hour:'0', time_active: 0},
        {hour:'1', time_active: 0},
        {hour:'2', time_active: 0},
        {hour:'3', time_active: 0},
        {hour:'4', time_active: 0},
        {hour:'5', time_active: 0},
        {hour:'6', time_active: 0},
        {hour:'7', time_active: 0},
        {hour:'8', time_active: 0},
        {hour:'9', time_active: 0},
        {hour:'10', time_active: 0},
        {hour:'11', time_active: 0},
        {hour:'12', time_active: 0},
        {hour:'13', time_active: 0},
        {hour:'14', time_active: 0},
        {hour:'15', time_active: 0},
        {hour:'16', time_active: 0},
        {hour:'17', time_active: 0},
        {hour:'18', time_active: 0},
        {hour:'19', time_active: 0},
        {hour:'20', time_active: 0},
        {hour:'21', time_active: 0},
        {hour:'22', time_active: 0},
        {hour:'23', time_active: 0}
    ]
    

    let ergoURL = "https://temporary-ergonomyx-api-clone.herokuapp.com/get_desk_data_for_user_id/" //changing this because now we are using the other temporary backend
    const sergioUserID = "9"
    // const [formID, setFormID] = useState("")
    const [userData, setUserData] = useState(null)
    const [chartData, setChartData] = useState(null)

    function getErgoData(event) {
        // fetch desk data from ergo-api by user_id
        event.preventDefault()
        const uri = ergoURL + sergioUserID
        try {
            fetch(uri)
            .then(response => response.json())
            .then((data) => {
                // post each row to the db
                for(let i = 0; i < data.length; i++) {
                    let obj = data[i];

                    // format date and primary_key before posting to db
                    obj.date = moment(obj.date).format('YYYY-MM-DD')
                    obj.primary_key = obj.user_id + obj.date + obj.timestamp
                    // console.log('object is : ' + obj)
                    axios({
                        method: "POST",
                        url:"/deskdata/0/",
                        data: obj
                    })
                    // if (i===20) {
                    //     break
                    // }
                }
                // setFormID("")
            })
            .then(console.log('data posted to db'))
        } catch (error) {
            console.log("error fetching data from ergo api")
        }

    
    }

    function getPostgresData(event) {
        event.preventDefault()
        axios({
            method: "GET",
            url: "/deskdata/" + sergioUserID,
        }).then((response)=>{
            const data = response.data

            // this should be it's own function,
            // arranging data for graph
            for(let i = 0;  i < data.length ; i++){ // //const hour_record in data
                //assuming that hour goes from 0 to 23
                time_active_data_for_graph[data[i]['hour']] = data[i]['time_active'] //time_active time_total or calories...
                console.log("wrote data to hour :", data[i]['hour'])
                tempData[data[i]['hour']].time_active = data[i]['time_active']
    
            }
            // verify the array 👍🏽 (print it out or something)
            console.log("finalized data: ", tempData)
    

            // console.log(data)
            setUserData(tempData)
            setChartData(tempData)
        }).catch((error) => {
            if (error.response) {
                console.log(error.response);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        })
    }


  return(
    <div>
        <div>
            <p>fetch data from ergo api and import to DB</p>
            <button onClick={getErgoData}>import data</button>
        </div>
        <br />
        <div>
            <p>get & display the saved data from db using django api</p>
            <button onClick={getPostgresData}>Display data</button>
        </div>


        <div>
            {/* { userData && userData.map(data => <DeskList
                primary_key={data.primary_key}
                user_id={data.user_id}
                hour={data.hour}
                date={data.date}
                time_active={data.time_active}
                time_total={data.time_total}
                calories={data.calories}
                timestamp={data.timestamp}
                movements={data.movements}
            />)} */}
            <div className="row1">
                <div className="col1">{chartData && <BarChart data={chartData}/>}</div>
                <div className="col2">{chartData && <MultiBarChart />}</div>
                
                
            </div>

            <div className="row2">
                <div className="col1">{chartData && <StackedChart />}</div>
                <div className="col2">{chartData && <DonutGraph/>}</div>
                
                
            </div>

        </div>

    </div>
  )
}


export default DeskData;