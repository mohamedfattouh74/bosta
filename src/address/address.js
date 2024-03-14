import './address.css';
import { useTranslation } from 'react-i18next';
  
const Address=()=>{
  
    const [t,i18n]=useTranslation();
return( 
        <>
       <h1 className='font-bold text-xl mb-4 text-[#111619]'>{t('Shipment Address')}</h1>
       <p className='bg-gray-100 p-8 rounded-md border border-gray-200 text-[#111619]'>{t('New Cairo,Shag House One for Carpets 5th settlement')}</p>
          </>
    );
    
    
    
}

export default Address;