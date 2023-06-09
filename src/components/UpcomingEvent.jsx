import React, { useState } from 'react'

function UpcomingEvent(props) {
    //const [soldOut, setSoldOut] = useState(false);

    const handleBuyTickets = () => {
        // TODO: HANDLE BUY TICKETS
    }
    return (
        <div className="event" data-bg={props.img}>
            { props.soldOut ? ( 
                <span className="event__out">Sold out</span>
            ) : (
            <a href="#modal-ticket" className="event__ticket open-modal">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M9,10a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V11A1,1,0,0,0,9,10Zm12,1a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H3A1,1,0,0,0,2,6v4a1,1,0,0,0,1,1,1,1,0,0,1,0,2,1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1,1,1,0,0,1,0-2ZM20,9.18a3,3,0,0,0,0,5.64V17H10a1,1,0,0,0-2,0H4V14.82A3,3,0,0,0,4,9.18V7H8a1,1,0,0,0,2,0H20Z" />
                </svg> Buy ticket
            </a> 
            )}
            <span className="event__date">{props.date}</span>
            <span className="event__time">{props.time}</span>
            <h3 className="event__title"><a href="event.html">{props.name}</a></h3>
            <p className="event__address">{props.address}</p>
        </div>
    )
}

export default UpcomingEvent