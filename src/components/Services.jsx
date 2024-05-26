import React from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const servicesList = [
  {
    icon: <FaCocktail />,
    title: "Free Cocktails",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta odit explicabo iste voluptas minima totam cumque vitae quia repudiandae vero! Expedita odio veritatis aliquid soluta enim ipsum cumque temporibus dicta?",
  },
  {
    icon: <FaHiking />,
    title: "Endless Hiking",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta odit explicabo iste voluptas minima totam cumque vitae quia repudiandae vero! Expedita odio veritatis aliquid soluta enim ipsum cumque temporibus dicta?",
  },
  {
    icon: <FaShuttleVan />,
    title: "Free Shuttle",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta odit explicabo iste voluptas minima totam cumque vitae quia repudiandae vero! Expedita odio veritatis aliquid soluta enim ipsum cumque temporibus dicta?",
  },
  {
    icon: <FaBeer />,
    title: "Strongest Beer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta odit explicabo iste voluptas minima totam cumque vitae quia repudiandae vero! Expedita odio veritatis aliquid soluta enim ipsum cumque temporibus dicta?",
  },
];

const Services = () => {
  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {servicesList.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
