import React from 'react';
//  import Cards from './card/Cards';
//  import Chart from './card/Chart';
//  import  CountryPicker from './card/CountryPicker';
// instent of duing this we use 
import {Cards, CountryPicker, Chart } from './covid tracker';
import Styles from './Appp.module.css';
import {fetchdata} from './Api/';
import coronaImg from './Images/covid.png';
 
class Appp extends React.Component{ 
    
    state={
       data: {},
       country: '',
    }
    async componentDidMount(){
        const data=await fetchdata();
         this.setState({data});
    }
    handleCountryChange = async (country) => {
        const data=await fetchdata(country);
         this.setState({data:data,country:country});
     
        //fetch the data 
        //set the data
      }
    
    render(){
        const {data, country} =this.state;
        return(
            <div className={Styles.container}>
            <img  className={Styles.img} src={coronaImg} alt="COVID-19"/> 
              <Cards data={data}/>
              <CountryPicker 
               handleCountryChange={this.handleCountryChange}/>
              <Chart data={data} country={country}/>
              
            </div>
        );
    }
}
export default Appp;