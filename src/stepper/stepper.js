import { useEffect, useState } from "react";
import "./stepper.css"
import { useTranslation } from "react-i18next";



const Stepper =({data})=>{

    const{t,i18n}=useTranslation();
    const steps=['Created','Delivered to sender','Out for delivery','Delivered'];
    const [currentStep,setCurrentStep]=useState(0);


    useEffect(() => {
        if (data?.CurrentStatus?.state === 'DELIVERED') {
          setCurrentStep(3)
        }
        else if(data?.CurrentStatus?.state === 'CANCELLED'){
          const index= data.TransitEvents.findIndex((event)=>event.state ==='CANCELLED');
          const lastEventBeforeCancel=data.TransitEvents[index-1].state;
          if(lastEventBeforeCancel==='TICKET_CREATED'){
            setCurrentStep(0)
          }
          else if(lastEventBeforeCancel==='DELIVERED_TO_SENDER'){
            setCurrentStep(1)
          }
        }
        else if(data?.CurrentStatus?.state === 'DELIVERED_TO_SENDER'){
          setCurrentStep(1)
          }
        else if(data?.CurrentStatus?.state === 'TICKET_CREATED'){
          setCurrentStep(0)
          }
      }, [data]);

    return(

        <div className="flex justify-between  relative border border-gray-200 rounded-b-md px-8 mx-8 max-md:px-2 py-6">
            {steps.map((step,i)=>{
                return <div key={i} className={"step-item relative flex flex-col w-full  "+ ((data?.CurrentStatus?.state === 'DELIVERED' || data?.CurrentStatus?.state === 'TICKET_CREATED') && i<currentStep ? 'before:bg-green-600':data?.CurrentStatus?.state === 'CANCELLED' && i<currentStep ?'before:bg-red-500':data?.CurrentStatus?.state === 'DELIVERED_TO_SENDER' && i<currentStep ?'before:bg-yellow-500':'before:bg-gray-500')}>
                    <div className={"step text-white text-center pt-1 w-8 h-8 rounded-full "+ ((data?.CurrentStatus?.state === 'DELIVERED' || data?.CurrentStatus?.state === 'TICKET_CREATED') &&  i<=currentStep ? 'bg-green-600':data?.CurrentStatus?.state === 'CANCELLED' && i<=currentStep ?'bg-red-500':data?.CurrentStatus?.state === 'DELIVERED_TO_SENDER' && i<=currentStep ?'bg-yellow-500':'bg-gray-500')}> &#10003;</div>
                    <p className="text-gray-500"> {t(step)} </p>
                </div>
            })}
        </div>
    )
    
}




export default Stepper;