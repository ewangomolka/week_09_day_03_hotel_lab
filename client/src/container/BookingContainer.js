import {useState, useEffect} from 'react';
import BookingList from '../components/BookingList'
import BookingForm from '../components/BookingForm'
import {getBookings, updateBooking} from '../components/BookingService'

const BookingContainer = () => {

    const [bookings, setBookings] = useState([]);
    const [editBooking, setEditBooking] = useState(null)

    useEffect(() => {
      getBookings().then((allBookings) => {
        setBookings(allBookings);
      })
    }, [bookings])

    const addBooking = (booking) => {
        setBookings([...bookings, booking]);
    }

    const removeBooking = (id) => {
        const bookingsToKeep = bookings.filter(booking => booking._id !== id)
        setBookings(bookingsToKeep);
    }

    const handleEditClicked = (booking) => {
      setEditBooking(booking)
    }

    const handleBookingUpdate = (id, booking) => {
      updateBooking(id, booking)
    }


    return ( 
        <div>
            <BookingList bookings={bookings} removeBooking={removeBooking} handleEditClicked={handleEditClicked}
            editBooking={editBooking}
            handleBookingUpdate={handleBookingUpdate}/>
            <BookingForm addBooking={addBooking}/>
        </div>
     );
}
 
export default BookingContainer;