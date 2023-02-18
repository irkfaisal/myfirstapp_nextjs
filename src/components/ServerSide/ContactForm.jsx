import React from 'react'

const ContactForm = () => {
    return (
        <>
            <div className='contForm'>
            <h3> ContactForm from server side</h3>
                <label>Email Id</label>
                <input type="text" placeholder='email id'></input>
                <label>Message</label>
                <input type="text" placeholder='type here'></input>
                <button type='submit'>Submit</button>
            </div>
        </>
    )
}

export default ContactForm