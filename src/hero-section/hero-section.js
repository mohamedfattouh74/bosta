import './hero-section.css';
import person from './person.png';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function HeroSection(){
    const {t,i18n}=useTranslation();

    return(
        <div className='grid grid-cols-2 max-lg:grid-cols-1'>
            <div className='mt-48 max-lg:mt-12 ml-12'>
                <p className='text-5xl font-bold text-[#111619] text-left pb-8'>{t('Join A New Generation Of Logistics!')}</p>
                <p className='text-[#667085] text-left pb-8 text-balance font-bold'>{t('Redefining how you ship, track, collect, deliver all through innovative tech-solutions and efficient operations.')}</p>
                <button className='bg-red-600 text-white font-bold px-4 py-2 rounded-md flex justify-start'>{t('Start Now')}</button>
            </div>
            <img width='720px' className='mt-12 max-lg:mr-2 mr-6 rounded-lg' src={person}/>

        </div>
    );
}

export default HeroSection;