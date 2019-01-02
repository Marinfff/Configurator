import React, { Component } from 'react';
import axios from 'axios';
import Info from './Component/info';
import './App.css';

let nulle = {
  "name" : "не выбрано",
  "price" : 0,
  "power" : 0
}

class Motherboard extends React.Component{

 constructor(props) {
  super(props);
  this.state = {
    selectValue: 0,
    menus : [nulle]
  };

  this.onSelectChange = this.onSelectChange.bind(this);
}

onSelectChange(event) {
  this.setState({selectValue: event.target.value});
}

componentWillMount() {
  axios
  .get("http://monreve.ml/server/mother.php")
  .then(({ data }) => {
    this.setState({
      menus: data
    });
  });
}

render() {

  var menus = this.state.menus;

  for (let i = 0; i < menus.length; i++) {
    menus[i].power = +menus[i].power;
    menus[i].price = +menus[i].price;
  };

  return (
    <select value={this.state.selectValue} onChange={this.onSelectChange} onClick={() => { this.props.updateData(menus[this.state.selectValue])}}>
    {menus.map((value, index)=>{
      return(
        <option key={index} value={index}>{value.name}</option> 
        ); 
    })}
    </select>
    );
}
}

class Cpu extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectValueCpu: 0,
      cpus : [nulle]
    };

    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onSelectChange(event) {
    this.setState({selectValueCpu: event.target.value});
  }

  componentWillMount() {
    axios
    .get("http://monreve.ml/server/cpu.php")
    .then(({ data }) => {
      this.setState({
        cpus: data
      });
    });
  }
  
  render(){

    var cpus = this.state.cpus;

    for (let i = 0; i < cpus.length; i++) {
      cpus[i].power = +cpus[i].power;
      cpus[i].price = +cpus[i].price;
    };

    return (
      <select value={this.state.selectValueCpu} onChange={this.onSelectChange} onClick={() => { this.props.updateDataCpu(cpus[this.state.selectValueCpu])}}> 
      {cpus.map((value, index)=>{
        if ((this.props.mItems.socket === value.socket)||(value.name === "не выбрано")) {
          return(
            <option key={index} value={index}>{value.name}</option> 
            );
        }else{
          return(
            null
            );
        }
      })}
      </select>
      );
  }
}

class Ram extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      selectValueRam: 0,
      rams: [nulle]
    };

    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onSelectChange(event) {
    this.setState({selectValueRam: event.target.value});
  }

  componentWillMount() {
    axios
    .get("http://monreve.ml/server/ram.php")
    .then(({ data }) => {
      this.setState({
        rams: data
      });
    });
  }

  render(){
    var rams = this.state.rams;

    for (let i = 0; i < rams.length; i++) {
      rams[i].power = +rams[i].power;
      rams[i].price = +rams[i].price;
    };

    return (
      <select value={this.state.selectValueRam} onChange={this.onSelectChange} onClick={() => { this.props.updateDataRam(rams[this.state.selectValueRam])}}> 
      {rams.map((value, index)=>{
       if ((this.props.rItems.ram === value.ram)||(value.name === "не выбрано")) {
        return(
          <option key={index} value={index}>{value.name}</option> 
          );
      }else{
        return(
          null
          );
      }
    })}
      </select>
      );
  }
}

class Power extends React.Component{

 constructor(props) {
  super(props);
  this.state = {
    selectValuePower: 0,
    power : [nulle]
  };

  this.onSelectChange = this.onSelectChange.bind(this);
}

onSelectChange(event) {
  this.setState({selectValuePower: event.target.value});
}

componentWillMount() {
  axios
  .get("http://monreve.ml/server/power.php")
  .then(({ data }) => {
    this.setState({
      power: data
    });
  });
}

render() {

  var powers = this.state.power;

  for (let i = 0; i < powers.length; i++) {
    powers[i].power = +powers[i].power;
    powers[i].price = +powers[i].price;
  };

  return (
    <select value={this.state.selectValuePower} onChange={this.onSelectChange} onClick={() => { this.props.updateDataPower(powers[this.state.selectValuePower])}}>
    {powers.map((value, index)=>{
      if ((this.props.pItems < value.power)||(value.name === "не выбрано")) {
        return(
          <option key={index} value={index}>{value.name}</option> 
          );
      }else if((this.props.pItems.power > value.power)||(value.name === "не выбрано")){
        return(
          <option key={index} value={index}>{value.name}</option> 
          );
      }else{
        return(
          null
          );
      }
    })}
    </select>
    );
}
}

class Video extends React.Component{

 constructor(props) {
  super(props);
  this.state = {
    selectValueVideo: 0,
    video : [nulle]
  };

  this.onSelectChange = this.onSelectChange.bind(this);
}

onSelectChange(event) {
  this.setState({selectValueVideo: event.target.value});
}

componentWillMount() {
  axios
  .get("http://monreve.ml/server/videocard.php")
  .then(({ data }) => {
    this.setState({
      video: data
    });
  });
}

render() {

  var videos = this.state.video;

  for (let i = 0; i < videos.length; i++) {
    videos[i].power = +videos[i].power;
    videos[i].price = +videos[i].price;
  };

  return (
    <select value={this.state.selectValueVideo} onChange={this.onSelectChange} onClick={() => { this.props.updateDataVideo(videos[this.state.selectValueVideo])}}>
    {videos.map((value, index)=>{
      return(
        <option key={index} value={index}>{value.name}</option> 
        ); 
    })}
    </select>
    );
}
}

class Case extends React.Component{

 constructor(props) {
  super(props);
  this.state = {
    selectValueCase: 0,
    cases : [nulle]
  };

  this.onSelectChange = this.onSelectChange.bind(this);
}

onSelectChange(event) {
  this.setState({selectValueCase: event.target.value});
}

componentWillMount() {
  axios
  .get("http://monreve.ml/server/cases.php")
  .then(({ data }) => {
    this.setState({
      cases: data
    });
  });
}

render() {

  var casess = this.state.cases;

  for (let i = 0; i < casess.length; i++) {
    casess[i].power = +casess[i].power;
    casess[i].price = +casess[i].price;
  };

  return (
    <select value={this.state.selectValueCase} onChange={this.onSelectChange} onClick={() => { this.props.updateDataCase(casess[this.state.selectValueCase])}}>
    {casess.map((value, index)=>{
      if ((this.props.csItems.format === value.format)||(value.name === "не выбрано")) {
        return(
          <option key={index} value={index}>{value.name}</option> 
          );
      }else{
        return(
          null
          );
      }
    })}
    </select>
    );
}
}

class Hdd extends React.Component{

 constructor(props) {
  super(props);
  this.state = {
    selectValueHdd: 0,
    hdd : [nulle]
  };

  this.onSelectChange = this.onSelectChange.bind(this);
}

onSelectChange(event) {
  this.setState({selectValueHdd: event.target.value});
}

componentWillMount() {
  axios
  .get("http://monreve.ml/server/hdd.php")
  .then(({ data }) => {
    this.setState({
      hdd: data
    });
  });
}

render() {

  var hdds = this.state.hdd;

  for (let i = 0; i < hdds.length; i++) {
    hdds[i].power = +hdds[i].power;
    hdds[i].price = +hdds[i].price;
  };

  return (
    <select value={this.state.selectValueHdd} onChange={this.onSelectChange} onClick={() => { this.props.updateDataHdd(hdds[this.state.selectValueHdd])}}>
    {hdds.map((value, index)=>{
      return(
        <option key={index} value={index}>{value.name}</option> 
        ); 
    })}
    </select>
    );
}
}

class App extends Component {
  state = {
    selectValue :nulle,
    selectValuePower: nulle,
    selectValueRam: nulle,
    selectValueVideo: nulle,
    selectValueHdd: nulle,
    selectValueCpu: nulle,
    selectValueCase: nulle
  };
  updateData = (value) => {
    this.setState({ selectValue: value })
  };
  updateDataPower = (value) => {
    this.setState({ selectValuePower: value })
  };
  updateDataRam = (value) => {
    this.setState({ selectValueRam: value })
  };
  updateDataVideo = (value) => {
    this.setState({ selectValueVideo: value })
  };
  updateDataHdd = (value) => {
    this.setState({ selectValueHdd: value })
  };
  updateDataCpu = (value) => {
    this.setState({ selectValueCpu: value })
  };
  updateDataCase = (value) => {
    this.setState({ selectValueCase: value })
  }

  render() {
    var mother = this.state.selectValue;
    var powerr = this.state.selectValuePower;
    var memory = this.state.selectValueRam;
    var cpu = this.state.selectValueCpu;
    var hdd = this.state.selectValueHdd;
    var videocard = this.state.selectValueVideo;
    var cases = this.state.selectValueCase;

    var totalPrice = mother.price + powerr.price + memory.price + cpu.price + hdd.price + videocard.price + cases.price;
    var totalPower = (mother.power + memory.power + cpu.power + hdd.power + videocard.power)*(1 + 20/100);

    return (
      <div className="wrapper">
      <div className="menu">
      <p>Материнские платы</p><Motherboard updateData={this.updateData} />
      <p>Процессоры</p><Cpu mItems={mother} updateDataCpu={this.updateDataCpu} />
      <p>Оперативная память</p><Ram rItems={mother} updateDataRam={this.updateDataRam} />
      <p>Видеокарты</p><Video  updateDataVideo={this.updateDataVideo} />
      <p>Жесткие диски</p><Hdd updateDataHdd={this.updateDataHdd} />
      <p>Блоки питания</p><Power pItems={totalPower} updateDataPower={this.updateDataPower} />
      <p>Кейсы</p><Case csItems={mother}  updateDataCase={this.updateDataCase} />
      </div>
      <Info mItems={mother} cItems={cpu} rItems={memory} pItems={powerr} vItems={videocard} hItems={hdd} csItems={cases} tprice={totalPrice} /> 
      </div>
      );
  }
}

export default App;
