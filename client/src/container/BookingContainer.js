import {useState, useEffect} from 'react';
import BookingList from '../components/BookingList'
import BookingForm from '../components/BookingForm'
import getBooking from '../components/BookingService'

import './App.css'

const BookingContainer = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
      getBookings().then((allBookings) => {
        setBookings(allBookings);
      })
    }, [])

    const addBooking = (booking) => {
        setBookings([...bookings, booking]);
    }

    const removeBooking = (id) => {
        const bookingToKeep = booking.filter(booking => booking._id !== id)
        setBookings(bookingToKeep);
    }


    return ( 
        <div>
            <BookingList bookings={bookings} removeBooking={removeBooking} />
            <BookingForm addBooking={addBooking}/>
        </div>
     );
}
 
export default BookingContainer;