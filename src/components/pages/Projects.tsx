import { useMediaQuery } from "@chakra-ui/react";
import { Navbar, Sidebar } from "../Navbar";
import { Header } from "../projects/Header";
import { Sponsors } from "../home/Sponsors";
import { ProjectHolder } from "../projects/ProjectHolder";
import { Footer } from "../common/Footer";

export const Projects = () => {
  const [isNotSmallerThan622] = useMediaQuery('(min-width: 622px)');
    
  console.log('isNotSmallerThan620:', isNotSmallerThan622); 

  return (
      <>
          {isNotSmallerThan622 ? <Navbar /> : <Sidebar />} 
          <Header/>
          <Sponsors/>
          <ProjectHolder/>
          <Footer/>
      </>
  )
}
