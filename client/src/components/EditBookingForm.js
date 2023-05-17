import {useState} from "react";


const EditBookingForm = ({handleBookingUpdate, editBooking, handleEditClicked}) => {
    
    const [isChecked, setChecked] = useState(false)
    const [formData, setFormData] = useState({
        species: editBooking.name,
        location: editBooking.email,
        checked: isChecked,
    })

    const onChange = (e) =>{
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

    const onSubmit = (e) =>{
        e.preventDefault();
        handleBookingUpdate(editBooking._id, formData)
        setFormData({
            name: "",
            email: "",
            checked: false,
        });
        handleEditClicked(null)
    }

    return (
        <form onSubmit={onSubmit} className="sightings-edit-form" id="sightings-form" >
            <h2>Edit {editBooking.name}'s Booking</h2>
            <div className="formWrap">
                <label htmlFor="name">Name:</label>
                <input 
                    onChange={onChange} 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name} />
            </div>
            <div className="formWrap">
                <label htmlFor="email">Email:</label>
                <input 
                    onChange={onChange} 
                    type="text" 
                    id="email" 
                    name="email"
                    value={formData.email} />
            </div>
            <div className="formWrap">
                <label htmlFor="checked">Checked:</label>
                <input 
                    onChange={onCheckboxChecked} 
                    type="checkbox" 
                    id="checked" 
                    name="checked" 
                    value={formData.checked}/>
            </div>

            <input type="submit" value="Save" id="save"/>
	    </form>

    );
}

export default EditBookingForm;