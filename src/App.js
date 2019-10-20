import React from "react";
import axios from 'axios';
import Loading from './components/Loading';
import Titles from "./components/Titles";

let long;
let lat;
const API_KEY = '1550d33ca6bd1ec550af0097a1f7cef0';
class App extends React.Component {
  state = {
    data: null,
  }

  async componentDidMount(){
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
       position =>{ 
         lat = position.coords.latitude,
         long =  position.coords.longitude
       }, 
       err => console.log(err)
     );
     setTimeout(() => {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
      .then(res => {
        const data = res.data;
        this.setState({data: data})
      })
    }, 3000) 
   }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="col-xs-5 title-container">
            {this.state.data ? ( <Titles summary={this.state.data.weather[0].main} temperature={this.state.data.main.temp} icon={(this.state.data.weather[0].id).toString()} />) : (<Loading />) }
          </div>
        </div>
      </div>
    );
  }
};

export default App;