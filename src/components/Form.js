import React, { useState } from 'react'

// const initialFormValues = { name: '', role: '', lp: 0 }

export default function Form(props) {
    const [values, setValues] = useState({})
    const [lp, setLp] = useState(0)
    const [winStreak, setwinStreak] = useState(0)
    const [loseStreak, setLoseStreak] = useState(0)

    const onChange = e => {
        const { id, value } = e.target;
        setValues({ ...values, [id]: value })
        console.log(values)
    }

    // const onSubmit = e => {
    //     e.preventDefault();
    //     // setValues(initialFormValues)
    //     console.log(values)
    // }

    const addLp = (e) => {
        e.preventDefault();
        const { id } = e.target;        
        setLp(lp + lp) 
        setwinStreak(winStreak + 1)       
    }

    const subLp = (e) => {
        e.preventDefault();
        const { id } = e.target;        
        setLp(lp - lp) 
        setLoseStreak(loseStreak + 1)       
    }

    const isDisabled = () => {
        // if (values.name.trim() && values.role.trim() && values.lp) {
        //     return false
        // } else {
        //     return true
        // }
        return false
    }
    console.log(values)

    return (
        <div>
            <h2>LP gained this sesion: {lp}</h2>
            <h3>Win Streak: {winStreak}</h3>
            <h3>Lose Streak: {loseStreak}</h3>
            <form className='form'>
                <h3>Did You Carry?</h3>
                {/* <input
                    id='lp'
                    type='input'
                    placeholder='lp that you lost or gained'
                    value={values.lp}
                    onChange={onChange}
                /> */}

                <select value={values.lp} id="lp" onChange={onChange}>
                    <option value={1}>-- 1 --</option>
                    <option value={2}>-- 2 --</option>
                    <option value={3}>-- 3 --</option>
                    <option value={4}>-- 4 --</option>
                    <option value={5}>-- 5 --</option>
                    <option value={6}>-- 6 --</option>
                    <option value={7}>-- 7 --</option>
                    <option value={8}>-- 8 --</option>
                    <option value={9}>-- 9 --</option>
                    <option value={10}>-- 10 --</option>
                    <option value={11}>-- 11 --</option>
                    <option value={12}>-- 12 --</option>
                    <option value={13}>-- 13 --</option>
                    <option value={14}>-- 14 --</option>
                    <option value={15}>-- 15 --</option>
                    <option value={16}>-- 16 --</option>
                    <option value={17}>-- 17 --</option>
                    <option value={18}>-- 18 --</option>
                    <option value={19}>-- 19 --</option>
                    <option value={21}>-- 21 --</option>
                    <option value={22}>-- 22 --</option>
                    <option value={23}>-- 23 --</option>
                    <option value={24}>-- 24 --</option>
                    <option value={25}>-- 25 --</option>
                    <option value={26}>-- 26 --</option>
                    <option value={27}>-- 27 --</option>
                    <option value={28}>-- 28 --</option>
                    <option value={29}>-- 29 --</option>
                    <option value={30}>-- 30 --</option>
                    <option value={31}>-- 31 --</option>
                </select>

                <h3>{null}</h3> {/* break point */}
                <button className='btn' disabled={isDisabled()} onClick={addLp} >Carried</button>
                <button className='btn' disabled={isDisabled()} onClick={subLp} >Cringed On</button>
            </form>
        </div>
    )
}
