import { Carousel } from "@/components/carousel/Carousel";
import { SimpleHeading } from "@/components/shared/headings/simple-heading/SimpleHeading";
import React from "react";
import styles from "./Services.module.scss"; // Import the separated CSS file
import { BasicCard } from "@/components/shared/normal-card/BasicCard";
import { TestimonialCard } from "@/components/shared/testimonial-card/TestimonialCard";
import { DetailedServicesSummary } from "./DetailedServicesSummary";

export const Services = () => {
  const imageUrls = [
    "https://www.thebasics.co.in/images/service.jpg",
    "https://www.thebasics.co.in/images/service.jpg",
    "https://www.thebasics.co.in/images/service.jpg",
  ];

  // Services List
  const services = [
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbnN1bHRpbmd8ZW58MHx8MHx8fDA%3D",
      title: "Business Consulting",
      description: "Providing expert advice to improve efficiency, strategy, and profitability for businesses. Providing expert advice to improve efficiency, strategy, and profitability for businesses.",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1661277879262-5a374156cd70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFRlY2hub2xvZ3klMjBJbmZyYXN0cnVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Technology Infrastructure",
      description: "Building scalable and secure IT infrastructures to support business growth.",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1683758342945-e0e47a14a66d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Vic2l0ZSUyMGhvc3Rpbmd8ZW58MHx8MHx8fDA%3D",
      title: "Website Hosting",
      description: "Reliable website hosting solutions with high uptime and security.Reliable website hosting solutions with high uptime and security.Reliable website hosting solutions with high uptime and security.Reliable website hosting solutions with high uptime and security.",
    },
    {
      image: "https://images.unsplash.com/photo-1580894908361-967195033215?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEluZm9ybWF0aW9uJTIwVGVjaG5vbG9neS58ZW58MHx8MHx8fDA%3D",
      title: "Information Technology",
      description: "Comprehensive IT solutions, including software development, cybersecurity, and cloud computing.",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1661425715124-310ec1b49b8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SW50ZXJuZXQlMjBNYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D",
      title: "Internet Marketing & Brand Consulting",
      description: "Boost your brand visibility with digital marketing strategies tailored for success.",
    },
  ];

  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1622461513286-4b2bd9a100af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGdpcmxzJTIwaW1hZ2VzfGVufDB8fDB8fHww",
      profession: "CEO At Winway World",
      description:
        "I am so glad to hire theBasics digital solution. They have a team of experts and loyal developers. Services are much reliable and have a great pricing. Highly recommended by me!",
      name: "Prachi Jain",
    },
    {
      image: "https://images.unsplash.com/photo-1611749068164-59f552b7df9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmxzJTIwaW1hZ2VzfGVufDB8fDB8fHww",
      profession: "Business woman",
      description:
        "I am happy to work with theBasics digital solution. They do very much hard work to complete my project. They do changes in website as much as time I say. They had great communication with me. In future also I want to do work with them only.",
      name: "Divya Sharma",
    },
    {
      image: "https://images.unsplash.com/photo-1611417361507-7d77bbc20a73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHMlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
      profession: "Senior Software Engineer",
      description:
        "It was my pleasure to found theBasics digital solution. The team helps me a lot in developing my online business. I really enjoyed working with them.",
      name: "Sagar Sancheti",
    },
  ];



  return (
    <div className={styles.servicesContainer}>
      {/* Carousel Section */}
      <Carousel images={imageUrls} />

      {/* Heading */}
      <div className={styles.headingContainer}>
        <SimpleHeading text="Our Services Are Your Business's Growth" />
      </div>

      {/* Services Cards Grid */}
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <BasicCard
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      {/* Services in detail */}
      <div className={styles.headingContainer}>
        <DetailedServicesSummary/>
      </div>
      {/* Testimonials Section */}
      <div className={styles.headingContainer}>
        <SimpleHeading text="What Our Clients Say" />
      </div>
      <div className={styles.section}>
        <div className={styles.testimonialsContainer}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              profession={testimonial.profession}
              description={testimonial.description}
              name={testimonial.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
