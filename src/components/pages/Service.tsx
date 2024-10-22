import { useMediaQuery } from "@chakra-ui/react";
import { Navbar, Sidebar } from "../Navbar";
import { Header } from "../service/Header";
import { Sponsors } from "../service/Sponsors";
import { ServiceModal } from "../service/ServiceModal";
import { Statistics } from "../service/Statistics";
import { Opportunities } from "../service/Opportunities";
import { ProcessModal } from "../service/ProcessModal";
import { Nurture } from "../service/Nurture";
import { Appointments } from "../service/Appointments";
import { ProcessCardHolder } from "../service/ProcessCardHolder";
import { CallSchedule } from "../service/CallSchedule";
import { FAQ } from "../home/FAQ";
import { CallendlyComponent } from "../home/CallendlyComponent";
import { Footer } from "../common/Footer";

export const Service = () => {
    const [isNotSmallerThan622] = useMediaQuery('(min-width: 622px)');
    
    console.log('isNotSmallerThan620:', isNotSmallerThan622); 

  return (
    <>
        {isNotSmallerThan622 ? <Navbar /> : <Sidebar />} {/* Adjust logic if necessary */}
        <Header/>
        <Sponsors/>
        <ServiceModal/>
        <Statistics/>
        <Opportunities/>
        <ProcessModal/>
        <Nurture/>
        <Appointments/>
        <ProcessCardHolder/>
        <CallSchedule/>
        <FAQ/>
        <CallendlyComponent/>
        <Footer/>
    </>
  )
}
