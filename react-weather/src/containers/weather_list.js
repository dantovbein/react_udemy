import React, { Component } from "react";
import { connect } from "react-redux";

import Chart from "../components/chart";
import GoogleMaps from "../components/google_maps";

class WeatherList extends Component {

  constructor(props){
    super(props);
  }

  renderCity(cityData) {
    const {name} = cityData.city;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return(
      <tr key={name}>
        <td><GoogleMaps lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="K" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    )
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Country</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
        {
          this.props.weather.map(this.renderCity)
        }
        </tbody>
      </table>
    )
  }
}



export default connect(
  ({weather}) => ({
    weather
  }), null)(WeatherList);