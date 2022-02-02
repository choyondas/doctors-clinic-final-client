import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentPage from "../AppointmentPage/AppointmentPage";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import DentalCare from "../DentalCare/DentalCare";
import Doctors from "../Doctors/Doctors";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Services />
      <DentalCare/>
      <AppointmentPage />
      <Testimonial/>
      <Blogs />
      <Doctors />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
