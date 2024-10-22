import { useMediaQuery } from "@chakra-ui/react";
import { Header } from "../home/Header"
import { Navbar, Sidebar } from "../Navbar"
import { Sponsors } from "../home/Sponsors";
import { Oppurtunity } from "../home/Oppurtunity";
import { Client } from "../home/Client";
import { ServiceModal } from "../home/ServiceModal";
import { CallSchedule } from "../home/CallSchedule";
import { FAQ } from "../home/FAQ";
import { CallendlyComponent } from "../home/CallendlyComponent";
import { Footer } from "../common/Footer";

export const Home = () => {
    const [isNotSmallerThan622] = useMediaQuery('(min-width: 622px)');
    
    console.log('isNotSmallerThan620:', isNotSmallerThan622); 

    return (
        <>
            {isNotSmallerThan622 ? <Navbar /> : <Sidebar />} {/* Adjust logic if necessary */}
            <Header />
            <Sponsors/>
            <Oppurtunity/>
            <Client/>
            <ServiceModal/>
            <CallSchedule/>
            <FAQ/>
            <CallendlyComponent/>
            <Footer/>
        </>
    );
};
