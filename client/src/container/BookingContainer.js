// The BookingContainer manages the bookings 

// Imported the necessary dependencies and components here.
import { useState, useEffect } from 'react';
import BookingList from '../components/BookingList'
import BookingForm from '../components/BookingForm'
import { getBookings, updateBooking } from '../components/BookingService'

import './BookingContainer.css'

// The Booking Container is defined using an arrow function
// Inside the function are two state variables which are defined using the useState Hook
// bookings is an array which stores the booking data.
// editBooking is a single booking object. This is the booking that is getting edited. 'null' is used as the initial value because there is no specific booking being edited when the component first renders.
// useEffect is fetching the bookings from the server when the component mounts/when the state changes. The getBookings function comes from the BookingService.js and updates the bookings state with received data. The [booking] is passed as the dependency array. It means that the effect should be re-run whenever the value of the bookings state variable changes.
// 

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


// The BookingForm and BookingList gets rendered here.
// functions e.g. addBooking are passed as props to the BookingForm
  return (
    <>
      <header><h1 className='hotel-name'>The Tipton Hotel </h1></header>
      <div className='booking-container-wrapper'>
        <div className='booking-form-container'><BookingForm addBooking={addBooking} />
          <img src="../Moseby_SL.png" alt="Moseby" />
        </div>
        <div className='booking-list-container'><BookingList bookings={bookings} removeBooking={removeBooking} handleEditClicked={handleEditClicked}
          editBooking={editBooking}
          handleBookingUpdate={handleBookingUpdate} /></div>
      </div>
    </>
  );
}

export default BookingContainer;