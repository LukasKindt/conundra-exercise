import React from 'react'
import { Component } from 'react';
import ListView from './listView';
import MapView from './mapView';

class MainComponent extends Component {

    state = {
      orders: [],
      isLoaded: false,
      selectedOrder: ''
    }

    setOrder = (id) => {
        this.setState({
            selectedOrder: id
        })
    }

    fetchOrders(){
        fetch('http://localhost:3004/orders')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            orders: json
          })
        })
    }

    scrollToSelected(){
        const element = document.getElementsByClassName('selectedOrder')[0];
        if (element){
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    componentDidMount(){
        this.fetchOrders()
    }

    render(){
        var {isLoaded, orders} = this.state
        if(!isLoaded){
            return <p>Loading orders...</p>
        } else {
            return (
                <section className='main'>
                    <ListView
                        orders={orders}
                        setOrder={this.setOrder}
                        selectedOrder={this.state.selectedOrder}/>
                    <MapView
                        orders={orders}
                        setOrder={this.setOrder}
                        selectedOrder={this.state.selectedOrder}
                        scrollToSelected={this.scrollToSelected}/>
                </section>
            )
        }
    }
}

export default MainComponent