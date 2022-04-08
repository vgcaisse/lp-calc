import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react'

export default function Form(props) {
    const {
        value,
    } = props

    const onChange = evt => {
        const { value } = evt.target;
        console.log(value)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        const { name } = evt.target;
        console.log(name)
    }

    // isDisabled = () => {
    //     if (!value) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    return (
        <div>
            <form className='form'>
                <label>
                    {/* onChange={onChange} */}
                    <h3>Did You Carry?</h3>
                    <select value={value} name="lp" onChange={onChange}>
                        <option value="">-- by how much/little --</option>
                        <option value='14'>14</option>
                        <option value='17'>17</option>
                        <option value='21'>21</option>
                    </select>
                </label>
                <button className='btn' onClick={onSubmit} name='add'>Carry?</button>
                <button className='btn' onClick={onSubmit} name='sub'>Cringed On?</button>
            </form>
        </div>
    )
}

