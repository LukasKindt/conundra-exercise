import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'

export const MapView = ({orders, setOrder, selectedOrder, scrollToSelected}) => {

    const polyline = []

    const handleClickMarker = id => {
        console.log('click')
        setOrder(id);
    }
    
    const createRef = ref => {
        console.log(ref)
        if(ref){
            console.log(ref.options.id)
            console.log(selectedOrder)
            if (ref.options.id === 'marker ' + selectedOrder){
                console.log(ref.options.id)
                ref.openPopup()
            }}
    } 

    return (
        <section id="mapid" className='map'>
            <MapContainer center={[51, 3.8]} zoom={10} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

                {orders.map(order => (
                    <Marker 
                        eventHandlers={{click: () => {handleClickMarker(order.businessId); scrollToSelected()}}}
                        key={order.businessId} position={[order.latitude, order.longitude]}
                        id={'marker ' + order.businessId}
                        ref={createRef}>
                        {polyline.push([order.latitude, order.longitude])}
                        <Popup>
                            <span className="popupName">{order.businessId}</span> <br/> {order.address}
                        </Popup>
                    </Marker>
                ))}
                <Polyline pathOptions={{color: 'red'}} positions={polyline} />
            </MapContainer>

        </section>
    )
}

export default MapView