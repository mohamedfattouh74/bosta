import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations...
        }
      },
      ar: {
        translation: {
          // here we will place our translations...
          "Home":'الرئيسية',
          "Pricings":'التسعير',
          "Use Cases":'حالات الاستخدام',
          "Track Shipment":'تتبع الشحنة',
          "Sign Up":'التسجيل',
          "Join A New Generation Of Logistics!":'انضم إلى جيل جديد من الخدمات اللوجستية',
          "Redefining how you ship, track, collect, deliver all through innovative tech-solutions and efficient operations.":'إعادة تعريف كيفية شحن وتتبع وجمع وتسليم كل ذلك من خلال حلول تقنية مبتكرة وعمليات فعالة.',
          "Start Now":'ابدأ الأن',
          "Shipment Details":'تفاصيل الشحنة',
          "Shipment Address":"عنوان الشحنة",
          "Is there an issue in your shipment?":'هل يوجد مشكلة في شحنتك؟',
          "Report an issue":'بلغ عن مشكلة',
          "Last Update":"اخر تحديث",
          "Provider":'اسم التاجر',
          "Shipment Date":'موعد التسليم',
          "Status":'الحالة',
          "Date":'التاريخ',
          "Time":'الوقت',
          "Hub":'مركز',
          "New Cairo,Shag House One for Carpets 5th settlement":"القاهرة الجديدة شاج هاوس وان للسجاد التجمع الخامس",
          "Created":"تم انشاء الشحنة",
          "TICKET CREATED":"تم انشاء الشحنة",
          "Delivered to sender":'تم استلام الشحنة من التاجر',
          "DELIVERED TO SENDER":'تم استلام الشحنة من التاجر',
          "Out for delivery":'الشحنة خرجت للتسليم',
          "OUT FOR DELIVERY":'الشحنة خرجت للتسليم',
          "Delivered":'تم التسليم',
          "DELIVERED":'تم التسليم',
          "Shipment No.":"رقم الشحنة",
          "Bosta":'بوسطة',
          "CANCELLED":'تم الغاء الشحنة',
          "PACKAGE RECEIVED":'تم استلام الشحنة',
          "WAITING FOR CUSTOMER ACTION":'في انتظار العميل',
          "IN TRANSIT":'في الترانزيت',
          "NOT YET SHIPPED":'لم يتم الشحن'
        }
      }
    }
  });

export default i18n;