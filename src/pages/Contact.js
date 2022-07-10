import React from "react";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";

const Contact = () => {
  return (
    <div className="min-h-screen flex-col justify-center items-center grid md:grid-cols-2 grid-cols-1 bg-my-gray">
      <div className="min-h-screen flex flex-col justify-center items-center mx-6">
        <ContactForm />
      </div>
      <div className="min-h-screen w-full flex flex-col justify-center items-center overflow-x-clip">
        <Map />
      </div>
    </div>
  );
};

export default Contact;
