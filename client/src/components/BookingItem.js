import React from 'react';
import {deleteBooking} from "./BookingService";

const BookingItem = ({booking, removeBooking, handleEditClicked}) => {

    const handleDelete = () =>{
        deleteBooking(booking._id)
        .then(()=>{
            removeBooking(booking._id)
        })
    }
    
    const handleEdit = () =>{
        handleEditClicked(booking)
    }

    return ( 

        <div>
            <h1>{booking.name}</h1>
            <p>{booking.email}</p>
            {booking.checked === true ? <p>Guest Checked in</p> : <p>Awaiting Check In</p>}
            <button onClick={handleEdit}>Edit Booking</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
     );
}
 
export default BookingItem;