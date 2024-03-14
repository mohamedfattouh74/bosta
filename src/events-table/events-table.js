import './events-table.css';
import { useTranslation } from 'react-i18next';

const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric"}
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

const formatTime =(dateString)=>{
    let date=new Date(dateString).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })
    return date;
}


  
const EventsTable=({table})=>{
    const {t,i18n}=useTranslation();
return( 
        <>
        <h1 className='font-bold text-xl mb-4 text-[#111619]'>{t('Shipment Details')}</h1>
        <div className='max-h-72 overflow-y-scroll rounded-md border border-gray-200 text-[#111619]'>
            <div className='grid grid-cols-4 bg-gray-200 border border-gray-200 py-2 font-bold px-4'>
                <div>{t('Status')}</div>
                <div>{t('Date')}</div>
                <div>{t('Time')}</div>
                <div>{t('Hub')}</div>
            </div>
        {table ? table.map((event)=>{
            return <div className='grid grid-cols-4 py-2 border border-gray-200 px-4 '>
                <div>{t(event.state.split('_').join(' '))}</div>
                <div>{formatDate(event.timestamp)}</div>
                <div>{formatTime(event.timestamp)}</div>
                <div>{event.hub?event.hub:'-'}</div>
            </div> 
            
        }) :"Loading..."}
        </div>
          </>
    );
    
    
    
}

export default EventsTable;