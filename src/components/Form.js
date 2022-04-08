
import React from 'react'

export default function Form(props) {
    const {
        values,
    } = props

    const onChange = evt => {
        const { value, name } = evt.target;
        console.log(value)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        const { name, value } = evt.target;
        console.log(name)
    }

    const isDisabled = () => {
        // if (values !== ) {
        //     return false
        // } else {
        //     return true  
        // }
    }

    return (
        <div>
            <form className='form'>
                {/* onChange={onChange} */}
                <h3>Summoner Name</h3>
                <label>
                    <input
                        name='name'
                        type='input'
                        placeholder='Summoner Name'
                        value={values}
                        onChange={onChange}
                    />

                    <select value={values} name="lp" onChange={onChange}>
                        <option value="">-- role --</option>
                        <option value='top'>Top</option>
                        <option value='mid'>Mid</option>
                        <option value='jungle'>Jungle</option>
                        <option value='adc'>ADC</option>
                        <option value='support'>Support</option>
                    </select>
                </label>

                <label>
                    <h3>Did You Carry?</h3>
                    <input
                        name='lp'
                        type='input'
                        placeholder='lp that you lost or gained'
                        value={values}
                        onChange={onChange}
                    />
                </label>
                <h3></h3>
                <button className='btn' disabled={isDisabled()} onClick={onSubmit} name='add'>Carried</button>
                <button className='btn' disabled={isDisabled()} onClick={onSubmit} name='sub'>Cringed On</button>
            </form>
        </div>
    )
}
