import CareersHero from "../components/Careers/CareersHero";
import CareersList from "../components/Careers/CareersList";
import SEO from "../components/SEO/SEO";


export default function Careers() {
  return (
    <>
    <SEO
        title="Careers"
        description="Explore career opportunities at INSK across digital marketing, development, design, and support roles in South Asia."
        keywords="INSK careers, digital marketing jobs, tech jobs Sri Lanka"
        url="https://insk.vercel.app/careers"
      />
      <CareersHero />
      <CareersList />
    </>
  );
}
