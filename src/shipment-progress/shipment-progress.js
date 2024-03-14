import Stepper from "../stepper/stepper";
import { useTranslation } from 'react-i18next';

const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric"}
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

function ShipmentProgress({data}){
    const[t,i18n]=useTranslation();
    return(
        <>
        <div className="border border-gray-200 rounded-t-md mx-8 py-6 mt-20">
            <div className="mx-8 max-md:mx-4 grid grid-cols-4 gap-8 text-[#667085]">
                <p>{t('Shipment No.')} {data.TrackingNumber}</p>
                <p className="max-md:pl-4">{t('Last Update')}</p>
                <p>{t('Provider')}</p>
                <p>{t('Shipment Date')}</p>
            </div>
            <div className="mx-8 max-md:mx-4 grid grid-cols-4 gap-8 text-[#111619] font-bold">
                <p>{t(data?.CurrentStatus?.state.split('_').join(' '))}</p>
                <p className="max-md:pl-4">{formatDate(data?.CurrentStatus?.timestamp)}</p>
                <p>{t(data?.provider)}</p>
                <p>{formatDate(data?.PromisedDate)}</p>
            </div>
        </div>
        </>    
        );
}
export default ShipmentProgress;