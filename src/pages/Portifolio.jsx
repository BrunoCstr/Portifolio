import { AboutMe } from "../components/AboutMe";
import { Home } from "../components/Home";
import { Projects } from "../components/Projects";
import { ContractableServices } from "../components/ContractableServices";
// import { SatisfiedCustomers } from "../components/SatisfiedCustomers";
import { ContactMe } from "../components/ContactMe";

export function Portifolio() {
  return (
    <div>
      <Home />
      <AboutMe />
      <Projects/>
      <ContractableServices/>
      {/* <SatisfiedCustomers/> */}
      <ContactMe/>
    </div>
  );
}
