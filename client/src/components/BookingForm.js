import React, { useState } from 'react';
import { postBooking } from './BookingService';
import './BookingForm.css'

const BookingForm = ({ addBooking }) => {

    const [isChecked, setChecked] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checked: isChecked,
    })

    const onChange = (e) => {
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const onCheckboxChecked = (e) => {
        if (formData.checked == isChecked){
            let newState = {...formData}
            newState.checked = !isChecked
            setFormData(newState)
        }
        setChecked(!isChecked)
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
                <h1>Add a booking</h1>
                <div className='formWrap'>
                    <label htmlFor="name">Name: </label>
                    <input 
                    onChange={onChange} 
                    type="text"
                    id='name'
                    name='name'
                    value={formData.name} required/>
                </div>

                <div className="formWrap">
                <label htmlFor="email">Email: </label>
                    <input 
                    onChange={onChange} 
                    type="text"
                    id='email'
                    name='email'
                    value={formData.email} required/>
                </div>

                <div className="formWrap">
                <label htmlFor="checked" className='checked-in'>Checked In? </label>
                    <input 
                    type="checkbox"
                    onChange={onCheckboxChecked}
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