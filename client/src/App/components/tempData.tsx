import React, { Fragment } from 'react';
import { Ticket } from '../viewmodels/ticketResponseVM';

interface Props {
    data: Ticket[]
}

function TempData({ data } : Props) {
    return (
        <div>
            {data.map(ticket => (
                <Fragment>
                    <h1>{ticket.id}</h1>
                    <h2>{ticket.location}</h2>
                    <h2>{ticket.machineId}</h2>
                    <h3>{ticket.date}</h3>
                    <h4>{ticket.ticketBody}</h4>
                </Fragment>
            ))}
        </div>
    )
}

export default TempData
