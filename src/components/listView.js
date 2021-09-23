import React from 'react'

export const ListView = ({orders, setOrder, selectedOrder}) => {

    const handleClickOrder = id => {
        setOrder(id);
    }

    if (orders.length === 0){
        return (
            <section className='list'>
                <p>Sorry, no orders were found!</p>
            </section>
        )
    } else {
        return (
            <section className='list'>
                {orders.map(order => (
                    <article key={order.businessId} onClick={e => handleClickOrder(order.businessId)} className={order.businessId === selectedOrder ? ('listOrder selectedOrder'):('listOrder')}>
                        <p className='listBusinessId'>{order.businessId}</p>
                        <p className='listAdress'>{order.address}</p>
                    </article>
                ))}
            </section>
        )
    }
}

export default ListView