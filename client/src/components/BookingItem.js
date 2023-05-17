import React from 'react';
import {deleteBooking} from "./BookingService";
import './BookingItem.css'

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

        <div className='booking-item-container'>
            <h1>{booking.name}</h1>
            <p><b>Email:</b> {booking.email}</p>
            {booking.checked === true ? <p>Guest Checked in ✅</p> : <p>Awaiting Check In ⌛</p>}
            <button className='edit-button' onClick={handleEdit}>Edit Booking</button>
            <button className='delete-button' onClick={handleDelete}>Delete</button>
        </div>
     );
}
 
export default BookingItem;