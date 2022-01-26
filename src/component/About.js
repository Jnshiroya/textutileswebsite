import React from 'react';
import { useState } from 'react/cjs/react.development';

export default function About(prop) {
    const [mystyle,setstyle]=useState({
        color: prop.mode==='dark'?'white':'black',
        backgroundColor:prop.mode==='dark'?'black':'white',
        border:'1px solid ',
        borderColor: prop.mode==='dark'?'white':'black'
    });
    // const [btntxt,settext]=useState('dark mode on');
    // const changemode=()=>{
    //     if (mystyle.color==='white') {
    //         setstyle({ 
    //             color: 'black',
    //     backgroundColor:'white',
    //     border:'1px solid black'
    //         });
    //         settext('light mode on');
            
    //     } else {
    //         setstyle({color: 'white',
    //         backgroundColor:'black',
    //         border:'1px solid white'
    //     });
    //     settext('dark mode on');
    //     }
    // }
  return( 
      <>
      <hr />
      <div className="container my-3"  >
        
          <h1 className='my-3'>ABOUT US</h1>
          <hr />
          <div className="accordion accordion-flush" id="accordionFlushExample" style={mystyle}>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" >
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
  {/* <button type="button" onClick={changemode} id='changemodebtn' className="btn  my-3" style={mystyle}>{btntxt}</button> */}
</div>
      </div>
</>
  );
}
