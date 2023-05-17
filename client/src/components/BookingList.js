import React from 'react';
import BookingItem from './BookingItem';
import EditBookingForm from './EditBookingForm';

const BookingList = ({bookings, removeBooking, handleEditClicked, editBooking, handleBookingUpdate}) => {
    const bookingList = bookings.map((booking) => {
        if(editBooking != null){
            if(booking._id == editBooking._id){
                return(
                    <EditBookingForm editBooking={editBooking} handleBookingUpdate={handleBookingUpdate} handleEditClicked={handleEditClicked}/>
                )
            }else {
                return <BookingItem
                booking={booking}
                key={booking._id}
                removeBooking={removeBooking}
                handleEditClicked={handleEditClicked}
                editBooking={editBooking}
                handleBookingUpdate={handleBookingUpdate}/>
            }
        }
        return <BookingItem
        booking={booking}
        key={booking._id}
        removeBooking={removeBooking}
        handleEditClicked={handleEditClicked}
        editBooking={editBooking}
        handleBookingUpdate={handleBookingUpdate}/>
    })

    return ( 
        <div>
            {bookingList}
        </div>
     );
}
 
export default BookingList;