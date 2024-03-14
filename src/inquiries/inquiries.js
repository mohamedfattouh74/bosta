import { useTranslation } from 'react-i18next';
import './inquiries.css';
import inquiries from '../inquiries.png'
  
const Inquiries=()=>{

    const [t,i18n]=useTranslation();
return( 
        <>
        <div className='grid grid-cols-2 max-lg:grid-cols-1 border border-gray-200 mt-4 rounded-md p-2'>
            <img src={inquiries}></img>
            <div className='p-2'>
                <p className='font-semibold text-[#111619] pb-4'>{t('Is there an issue in your shipment?')}</p>
                <button className='bg-red-600 text-white font-bold px-4 py-2 rounded-md flex justify-start'>{t('Report an issue')}</button>
            </div>
        </div>
          </>
    );
    
    
    
}

export default Inquiries;