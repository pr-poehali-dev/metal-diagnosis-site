import React from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import TechSpecs from "@/components/TechSpecs";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="max-w-4xl mx-auto py-8 px-4">
        <About />
        <TechSpecs />
        <ContactForm />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
