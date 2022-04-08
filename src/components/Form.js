import React from 'react'

export default function Form(props) {
    const {
        value
    } = props

    const onChange = evt => {

    }

    const onSubmit = evt => {
        evt.preventDefault();
        console.log(value)
    }

    return (
        <div>
            <form className='form'>
                <label>
                    {/* onChange={onChange} */}
                    <h3>Did You Carry?</h3>
                    <select value={'values'} name="lp" >
                        <option value="">-- by how much/little --</option>
                        <option value='14'>14</option>
                        <option value='17'>17</option>
                        <option value='21'>21</option>
                    </select>
                </label>
                <button onClick={onSubmit}>Carry?</button>
                <button onClick={onSubmit}>Cringed On?</button>
            </form>
        </div>
    )
}

