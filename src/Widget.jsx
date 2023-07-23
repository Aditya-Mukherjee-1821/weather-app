import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./widget.css";
import { useEffect, useState } from 'react';

const Widget = () => {

    // Target API: https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Jharkhand/2023-6-29T21:23:00?key=A2MYFKWXL5YVD2Z4GSS6CVDGQ&include=current



    async function fetchData() {
        const response = await fetch(URL);
        var reponseData = await response.json();
        setData(reponseData);
        // console.log(reponseData) //for debugging

    }



    const [cityName, setcityName] = useState("London");
    const [data, setData] = useState({
        currentConditions: {
            temp: 32
        }
    });

    useEffect(() => {
        fetchData();

    }, [cityName])

    //obtain current date and time in browser
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName} /${year}-${month}-${day}T${hour}:${minute}:${second}?key=A2MYFKWXL5YVD2Z4GSS6CVDGQ&include=current`;

    // const weatherType
    var weatherType = data.currentConditions.icon;
    console.log(weatherType);


    return (
        <>
            <div className='cont'>

                <div className=' gap-5 cardDiv col-md-3 d-flex justify-content-center align-items-center' style = {{backgroundColor: "#212529"}}>

                    <div className='input'>
                        <input type="text" className='form-control m-1' id='place' />
                        <button id='btn' className='btn btn-primary' onClick={() => { setcityName(document.getElementById("place").value); }}>Search</button>
                    </div>

                    <div className='details'>
                        <h1 style={{ textAlign: "center", margin: "1rem" }}>{cityName}</h1>
                        <hr />
                        <h5>Temperature: {(5 / 9) * (data.currentConditions.temp - 32)} °C</h5>
                        <h5>Condition: {data.currentConditions.conditions}</h5>
                        <h5>Dew: {data.currentConditions.dew}</h5>
                        <h5>Humidity: {data.currentConditions.humidity}%</h5>
                        <h5>Pressure: {data.currentConditions.pressure} mBar</h5>
                        <h5>Wind Speed: {data.currentConditions.windspeed} Kmph</h5>
                    </div>

                </div>


            </div>

        </>
    )
}

export default Widget