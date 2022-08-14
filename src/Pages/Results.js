import React, { useRef } from 'react';
// import {CopyToClipboard} from 'react-copy-to-clipboard';
import {CopyToClipboard} from 'pivotal-ui/react/copy-to-clipboard';

import { MDBIcon } from 'mdb-react-ui-kit';

import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBToast, 
    MDBCardTitle,
    MDBBtn,
    MDBLazyLoading,
  MDBRipple,
    MDBCardText,
    MDBCardFooter,
    MDBContainer,
    MDBAlert,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
export default function Results(props) {
    console.log(props)
    const triggerItem = useRef(null);
    const triggerItem1 = useRef(null);
    const placementExample = useRef(null);
    if (!props.data || !props){
        return <p>Loading</p>
    } else if (props.data.length<0){
        return <p>broken</p>
    }

    else {
        return (
            <div>
   
        <MDBContainer>
        <MDBRow className='row-cols-3 row-cols-md-4 g-4'>
         {props.data.map((item, index) => (
              <MDBCol>
                   <MDBCard className="shadow-5 square border">
                   <MDBRipple rippleColor='light' ref={triggerItem1}rippleTag='div' className='bg-image hover-overlay cardImages card-image' onClick={() => navigator.clipboard.writeText(`<img src="${item.imgageurl}" width=500/>`)}>
                    <img src={item.imgageurl} className='img-fluid' ref={triggerItem1} />
        {/* <MDBCardImage src={item.imgageurl} fluid alt='...' className='img-fluid '  ref={triggerItem}/> */}
      
        <a ref={triggerItem} >
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBAlert
        color='success'
        autohide
        width={800}
        position='top-right'
        offset={0}
        delay={1300}
        appendToBody
        triggerRef={triggerItem1}
      >
        Copied!
      </MDBAlert>
                   <MDBCardBody>
               
                     <MDBCardText>
                     {/* <MDBBtn ref={triggerItem} onClick={() =>  navigator.clipboard.writeText(`<img src="${item.imgageurl}" width=500/>`)}>Copy</MDBBtn> */}




                     <MDBBtn className='m-1 bg-dark' ref={triggerItem} onClick={() => navigator.clipboard.writeText(`<img src="${item.imgageurl}" width=500/>`)}>
        Copy <MDBIcon far icon="copy" size='lg' className="ms-3"/>
      </MDBBtn>
      <MDBAlert
        color='success'
        autohide
        width={800}
        position='top-right'
        offset={0}
        delay={1300}
        appendToBody
        triggerRef={triggerItem}
      >
        Copied!
      </MDBAlert>








                     <MDBAlert
        color='success'
        autohide
        width={800}
        position='top-right'
        offset={0}
        delay={1300}
        appendToBody
        triggerRef={triggerItem}
      >
        Copied!
      </MDBAlert>
     

                        {/* <i class="fa-solid fa-copy text-black"></i> */}
                     {/* <MDBIcon icon='camera-retro' onClick={() =>  navigator.clipboard.writeText(`<img src="${item.imgageurl}" width=500/>`)}/> */}
                   {/* <MDBIcon icon='camera-retro' class="text-black" /> */}
                     </MDBCardText>
                     
                   </MDBCardBody>
                   {/* <MDBCardFooter>
                     <small className='text-muted'>Last updated 3 mins ago</small>
                   </MDBCardFooter> */}
                 </MDBCard>
              </MDBCol>
            ))}
            </MDBRow>

            </MDBContainer>
            </div>
          )
    }

}
