import React, { useEffect, useState } from 'react';
import './style.css'


function Counter() {

    function timecacl() {

    }
    // datetime of now 
    let d = new Date();
    // datetime of 2024
    const d24 = new Date(2023, 11, 31, 23, 59, 59, 1000);
    //diff date
    let datediff = Math.floor((Math.abs(d - d24)) / (1000));

    let days = datediff / (3600 * 24);
    let daymod = datediff % (3600 * 24);
    let hours = daymod / 3600;
    let hoursmod = daymod % 3600;
    let min = hoursmod / 60;
    let sec = hoursmod % 60;


    // console.log(min)
    // console.log(sec)

    // const [count, setCount] = useState(datediff + 1);
    const [count, setCount] = useState();

    const [ddd, setddd] = useState(Math.floor(days));
    const [hhh, sethhh] = useState(Math.floor(hours));
    const [mmm, setmmm] = useState(Math.floor(min));
    const [sss, setsss] = useState(Math.floor(sec));

    useEffect(() => {
        setTimeout(() => {
            // datetime of now 
            let d = new Date();
            // datetime of 2024
            const d24 = new Date(2023, 11, 31, 23, 59, 59, 1000);
            //diff date
            let datediff = Math.floor((Math.abs(d - d24)) / (1000));

            let days = datediff / (3600 * 24);
            let daymod = datediff % (3600 * 24);
            let hours = daymod / 3600;
            let hoursmod = daymod % 3600;
            let min = hoursmod / 60;
            let sec = hoursmod % 60;
            setCount(datediff)
            // console.log(ddd,":",hhh,":",mmm,":",sss);
            // console.log(count);
            setsss(Math.floor(sec));
            setmmm(Math.floor(min));
            sethhh(Math.floor(hours));
            setddd(Math.floor(days));
        }, 1000);
    }, [count])



    return (
        <div className='container'>
            <h2>The rest in 2023</h2>
            <div className='counter'>
                <div>
                    <h1>{ddd}</h1>
                    <h3>days</h3>
                </div>
                <div>
                    {hhh<10 ? <h1>0{hhh}</h1> : <h1>{hhh}</h1>}
                    <h3>hours</h3>
                </div>
                <div>
                {mmm<10 ? <h1>0{mmm}</h1> : <h1>{mmm}</h1>}
                    <h3>minutes</h3>
                </div>
                <div>
                {sss<10 ? <h1>0{sss}</h1> : <h1>{sss}</h1>}
                    <h3>seconds</h3>
                </div>
            </div>

        </div>
    )
}

export default Counter