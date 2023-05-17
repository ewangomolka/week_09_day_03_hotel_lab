import React, { useState } from 'react';
import { postBooking } from './BookingService';

const BookingForm = ({ addBooking }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checked: false,
    })

    const onChange = (e) => {
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        postBooking(formData).then((data) => {
            addBooking(data);
        })

        setFormData({
            name: "",
            email: "",
            checked: false,
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit} id='bookings-form'>
                <h2>Add a booking</h2>
                <div className='formWrap'>
                    <label htmlFor="name">Name:</label>
                    <input 
                    onChange={onChange} 
                    type="text"
                    id='name'
                    name='name'
                    value={formData.name} />
                </div>

                <div className="formWrap">
                <label htmlFor="email">Email:</label>
                    <input 
                    onChange={onChange} 
                    type="text"
                    id='email'
                    name='email'
                    value={formData.email} />
                </div>

                <div className="formWrap">
                <label htmlFor="checked">Checked In?</label>
                    <input 
                    type="checkbox"
                    onChange={onChange}
                    id='checked'
                    name='checked'
                    value={formData.checked} />
                </div>
                <input type="submit" value="Save" id="save"/>
            </form>
        </div>
    );
}

export default BookingForm;