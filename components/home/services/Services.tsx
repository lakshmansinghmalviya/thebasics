import { Carousel } from "@/components/carousel/Carousel";
import React from "react";

export const Services = () => {
  const imageUrls = [
    "https://www.thebasics.co.in/images/service.jpg",
    "https://www.thebasics.co.in/images/service.jpg",
    "https://www.thebasics.co.in/images/service.jpg",
  ];

  return (
    <div>
      <Carousel images={imageUrls} />
    </div>
  );
};
