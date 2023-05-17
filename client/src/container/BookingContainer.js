import {useState, useEffect} from 'react';
import BookingList from '../components/BookingList'
import BookingForm from '../components/BookingForm'
import {getBookings} from '../components/BookingService'

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
        const bookingsToKeep = bookings.filter(booking => booking._id !== id)
        setBookings(bookingsToKeep);
    }


    return ( 
        <div>
            <BookingList bookings={bookings} removeBooking={removeBooking} />
            <BookingForm addBooking={addBooking}/>
        </div>
     );
}
 
export default BookingContainer;