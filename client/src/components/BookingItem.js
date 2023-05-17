import React, {useState} from 'react';
import {deleteBooking} from "./BookingService";

const BookingItem = ({booking, removeBooking}) => {

    const handleDelete = () =>{
        deleteBooking(booking._id)
        .then(()=>{
            removeBooking(booking._id)
        })
    }
    
    const handleCheck = () =>{
        
    }

    return ( 

        <div>
            <h1>{booking.name}</h1>
            <p>{booking.email}</p>
            <button onClick={handleCheck}>Check in</button>
            {booking.checked === true ? <p>Guest Checked in</p> : null}
            <button onClick={handleDelete}>Delete</button>
        </div>
     );
}
 
export default BookingItem;