import React from 'react'
import { useState } from 'react'

const initialFormValues = { name: '', role: '', lp: 0 }

export default function Form(props) {
    const [values, setValues] = useState(initialFormValues)

    const onChange = evt => {
        const { id, value } = evt.target;
        setValues({...values, [id]: value})
        console.log(values)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        setValues(initialFormValues)
        console.log(values)
    }

    const isDisabled = () => {
        if (values.name.trim() && values.role.trim() && values.lp ) {
            return false
        } else {
            return true  
        }
    }

    return (
        <div>
            <form className='form'>
                {/* onChange={onChange} */}
                <h3>Summoner Name</h3>
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

                    <h3>Did You Carry?</h3>
                    <input
                        id='lp'
                        type='input'
                        placeholder='lp that you lost or gained'
                        value={values.lp}
                        onChange={onChange}
                    />
                <h3></h3>
                <button className='btn' disabled={isDisabled()} onClick={onSubmit} id='add'>Carried</button>
                <button className='btn' disabled={isDisabled()} onClick={onSubmit} id='sub'>Cringed On</button>
            </form>
        </div>
    )
}
