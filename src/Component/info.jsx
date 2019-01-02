import React, { Component } from 'react';

class InfoM extends Component{
  render(){
    if (this.props.mItems.price !== 0) {
      return(
        <div className="grid-info">
        <div><img src={this.props.mItems.image} alt=""/></div>
        <div>{this.props.mItems.name}, {this.props.mItems.socket}, {this.props.mItems.ram}, {this.props.mItems.format}</div>
        <div>{this.props.mItems.price + "$"}</div>
        </div>
        );
    }else{
      return(
        null
        );
    }
  }
}

class InfoR extends Component{
  render(){
    if (this.props.rItems.price !== 0) {
      return(
        <div className="grid-info">
        <div><img src={this.props.rItems.image} alt=""/></div>
        <div>{this.props.rItems.name}, {this.props.rItems.ram}</div>
        <div>{this.props.rItems.price + "$"}</div>
        </div>
        );
    }else{
      return(
        null
        );
    }
  }
}

class InfoC extends Component{
  render(){
    if (this.props.cItems.price !== 0) {
      return(
        <div className="grid-info">
        <div><img src={this.props.cItems.image} alt=""/></div>
        <div>{this.props.cItems.name}, {this.props.cItems.socket}, {this.props.cItems.freq}, {this.props.cItems.core+"core"}</div>
        <div>{this.props.cItems.price + "$"}</div>
        </div>
        );
    }else{
      return(
        null
        );
    }
  }
}

class InfoP extends Component{
  render(){
    if (this.props.pItems.price !== 0) {
      return(
        <div className="grid-info">
        <div><img src={this.props.pItems.image} alt=""/></div>
        <div>{this.props.pItems.name}, {this.props.pItems.form}, {this.props.pItems.power+"W"}</div>
        <div>{this.props.pItems.price + "$"}</div>
        </div>
        );
    }else{
      return(
        null
        );
    }
  }
}

class InfoV extends Component{
  render(){
    if (this.props.vItems.price !== 0) {
      return(
       <div className="grid-info">
       <div><img src={this.props.vItems.image} alt=""/></div>
       <div>{this.props.vItems.name}, {this.props.cItems.socket}, {this.props.cItems.freq}</div>
       <div>{this.props.vItems.price + "$"}</div>
       </div>
       );
    }else{
      return(
        null
        );
    }
  }
}

class InfoH extends Component{
  render(){
    if (this.props.hItems.price !== 0) {
      return(
        <div className="grid-info">
        <div><img src={this.props.hItems.image} alt=""/></div>
        <div>{this.props.hItems.name}</div>
        <div>{this.props.hItems.price + "$"}</div>
        </div>
        );
    }else{
      return(
        null
        );
    }
  }
}

class InfoCS extends Component{
  render(){
    if (this.props.csItems.price !== 0) {
      return(
       <div className="grid-info">
       <div><img src={this.props.csItems.image} alt=""/></div>
       <div>{this.props.csItems.name} {this.props.csItems.form}</div>
       <div>{this.props.csItems.price + "$"}</div>
       </div>
       );
    }else{
      return(
        null
        );
    }
  }
}

class Prices extends Component{
  render(){
    if (this.props.tprice === 0) {
      return(
        <p className="null" >В корзине ничего нет</p>
        );
    }else{
      return(
       <div className="grid-price">
       <p>Полная стоимость: {this.props.tprice + "$"}</p>
       </div>
       );
    }
  }
}

class Info extends Component{
  render(){

    var mother = this.props.mItems;
    var powerr = this.props.pItems;
    var memory = this.props.rItems;
    var cpu = this.props.cItems;
    var hdd = this.props.hItems;
    var videocard = this.props.vItems;
    var cases = this.props.csItems;
    var totalprice = this.props.tprice;

    return(
      <section className="section">
      <InfoM mItems={mother} />
      <InfoC cItems={cpu} />
      <InfoR rItems={memory} />
      <InfoP pItems={powerr} />
      <InfoV vItems={videocard} cItems={cpu}  />
      <InfoH hItems={hdd} />
      <InfoCS csItems={cases} />
      <Prices tprice={totalprice} />
      </section>
      );
  }
}

export default Info;
