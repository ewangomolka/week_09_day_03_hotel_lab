import React from 'react';
import BookingItem from './BookingItem';

const BookingList = ({bookings, removeBooking}) => {
    const bookingList = bookings.map((booking) => {
        return <BookingItem
        booking={booking}
        key={booking._id}
        removeBooking={removeBooking}/>
    })

    return ( 
        <div>
            {bookingList}
        </div>
     );
}
 
export default BookingList;