import React, { useState } from 'react'

function Modal() {

    const [programTime, setProgramTime] = useState('')
    const [programTitle, setProgramTitle] = useState('')
    
    const ProgramsDetails = (e) => {
        e.preventDefault()
        const details = { programTitle, programTime }
        console.log(details)
        const converted = programTime.LocaleString
    }

    return (
        <div className='modal'>
            <h1 className='heading'>Set a Program Timer</h1>

            <form action="">
                <div className='input_div'>
                    <label htmlFor="">Program Title</label>
                    <input type="text"
                        placeholder='Program Title'
                        value={programTitle}
                        onChange={(e) => setProgramTitle(e.target.value) }
                    />
                        
                </div>

                <div className='input_div'>
                    <label htmlFor="">Program elapsed Time</label>
                    <input type="datetime-local"
                        placeholder='Program Name'
                        value={programTime}
                        onChange={(e) => setProgramTime(e.target.value)}
                        />
                </div>
                <div className="input_div">
                    <button onClick={ProgramsDetails}>Add Program</button>
                    <button >Add Program</button>
                </div>
            </form>


        </div>
    )
}

export default Modal
