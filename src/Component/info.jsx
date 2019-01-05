import React, { Component } from 'react';

class Infoe extends Component{
  render(){
    var objects = [];
    
    for (var key in this.props.Items) {
      objects.push(this.props.Items[key], ", ");
    }

    var price = objects[objects.length - 6];
    var power = objects[objects.length - 4];
    var images = objects[objects.length - 2];
    
    for (var i = 0; i < 7; i++) {
      objects.pop();
    };

    if (power !== 0) {
      return(
        <div className="grid-info">
          <div><img src={images} alt=""/></div>
          <div>{objects}</div>
          <div>{price + "$"}</div>
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
    return(
      <div className="section">
        <Infoe Items={this.props.mItems} />
        <Infoe Items={this.props.cItems} />
        <Infoe Items={this.props.rItems} />
        <Infoe Items={this.props.vItems} />
        <Infoe Items={this.props.hItems} />
        <Infoe Items={this.props.pItems} />
        <Infoe Items={this.props.csItems} />
        <Prices tprice={this.props.tprice} />
      </div>
    );
  }
}

export default Info;
