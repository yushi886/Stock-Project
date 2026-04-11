import React from 'react';

function Hero() {
    return ( 
       <section  className='container-fluid' id="supportHero">
            <div className=' p-5 ' id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="">Track Ticket</a>
            </div>
            <div className=' row p-3 m-2' >
                <div className=' col-6 p-3' >
                    <h1 className='fs-3'>Search for an answer or browse hlp topics to create a ticket</h1>
                    <br />
                    <input placeholder='Eg. how do I activate F&O' />
                    <br />
                    <a href="" className='p-1'>Track account opening</a> 
                    <a href="" className='p-1'>Track segment activation</a> 
                    <a href="" className='p-1'>Intraday margins</a> 
                    <a href="" className='p-1'>Kite user manual</a> 
                </div>
                <div className=' col-6 p-3 ' >
                    <h1 className='fs-3 ' >Featured</h1>
                    <ol>
                    <li><a href="">Current Takeovers and Delisting - January 2024</a></li>
                    <li className='p-2'><a href="">Latest Intraday leverages - MIS & CO</a></li> 
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;