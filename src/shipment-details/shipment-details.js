import { useParams } from 'react-router-dom';
import './shipment-details.css';
import { useEffect, useState } from 'react';
import EventsTable from '../events-table/events-table';
import React from 'react';
import Address from '../address/address';
import Nav from '../nav/nav';
import Inquiries from '../inquiries/inquiries';
import ShipmentProgress from '../shipment-progress/shipment-progress';
import Stepper from '../stepper/stepper';



function Shipment(){

    const {id}= useParams()
    let [shipment,setShipment] = useState({})
    
    function getShipmentDetails(){
        fetch(`https://tracking.bosta.co/shipments/track/${id}`).then(res=>{
            return res.json();
        }).then(data=>{
            setShipment(data);
        })
    }

    useEffect(( ) => {
        getShipmentDetails();
      }, []);

    
    return(
        <>
   
        {shipment ? <ShipmentProgress data={shipment}/>:"Loading..."}
        <Stepper data={shipment}/>
        <div className='grid grid-cols-3 max-lg:grid-cols-1 gap-6 mx-8 mt-12 text-[#111619]'>
            <div className='col-span-2'>
            {shipment ? <EventsTable table={shipment.TransitEvents} />:"Loading..."}
            </div>
            <div>
                <Address/>
                <Inquiries/>
            </div>
        </div>
        
        </>    
        );
}

export default Shipment;