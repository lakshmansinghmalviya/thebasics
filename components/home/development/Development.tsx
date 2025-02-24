import { Carousel } from '@/components/carousel/Carousel'
import React from 'react'
import styles from './Developement.module.scss';
import { TestimonialCard } from '@/components/shared/testimonial-card/TestimonialCard';
import { SimpleHeading } from '@/components/shared/headings/simple-heading/SimpleHeading';

export const Development = () => {

  const imageUrls = [
    "https://www.thebasics.co.in/images/development.jpg",
    "https://www.thebasics.co.in/images/development.jpg",
    "https://www.thebasics.co.in/images/development.jpg",
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
    <div className={styles.devContainer}>
      {/* Carousel Section */}
      <Carousel images={imageUrls} />

       {/* Testimonials Section */}
       <div className={styles.headingContainer}>
        <SimpleHeading text="What Our Clients Say About Dev At TheBasics" />
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
  )
}
