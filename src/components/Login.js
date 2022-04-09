import React, { useState } from 'react'

const initialFormValues = { name: '', role: '' }

export default function Login(props) {
    const [values, setValues] = useState({name: '', role: '',})

    const onChange = e => {
        const { id, value } = e.target;
        setValues({ ...values, [id]: value })
        console.log(values)
    }

    const onSubmit = e => {
        e.preventDefault();
        setValues(values)
        // setValues()
        console.log(values)
    }

    const isDisabled = () => {
        if (values.name.trim() && values.role.trim()) {
            return false
        } else {
            return true
        }
    }
    console.log(values)

    return (
        <div>
            <form className='form' onSubmit={onSubmit}>
                <h3>Summoner Name: {values.name}</h3>
                <input
                    id='name'
                    type='input'
                    placeholder='Summoner Name'
                    value={values.name}
                    onChange={onChange}
                />

                <select value={values.role} id="role" onChange={onChange}>
                    <option value="">-- role --</option>
                    <option value='top'>Top</option>
                    <option value='mid'>Mid</option>
                    <option value='jungle'>Jungle</option>
                    <option value='adc'>ADC</option>
                    <option value='support'>Support</option>
                </select>
                <button id="submit" type="submit" disabled={isDisabled()}>Submit</button>
            </form>
        </div>
    )
}
