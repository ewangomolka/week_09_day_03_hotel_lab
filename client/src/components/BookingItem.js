import React, {useState} from 'react';
import {deleteBooking} from "./BookingService";

const BookingItem = ({booking, removeBooking}) => {

    const handleDelete = () =>{
        deleteBooking(booking._id)
        .then(()=>{
            removeBooking(booking._id)
        })
    } 
    return ( 

        <div>
            <h1>{booking.name}</h1>
            <p>{booking.email}</p>
            <button onClick={handleDelete}></button>
        </div>
     );
}
 
export default BookingItem;