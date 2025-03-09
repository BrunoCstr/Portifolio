import { AboutMe } from "../components/AboutMe";
import { Home } from "../components/Home";
import { Projects } from "../components/Projects";
import { ContractableServices } from "../components/ContractableServices";
import { SatisfiedCustomers } from "../components/SatisfiedCustomers";

export function Portifolio() {
  return (
    <div>
      <Home />
      <AboutMe />
      <Projects/>
      <ContractableServices/>
      <SatisfiedCustomers/>
    </div>
  );
}
