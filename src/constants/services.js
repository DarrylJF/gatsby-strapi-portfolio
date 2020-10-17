import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
import Title from "../components/Title"

const ServiceList = () => {
  const services = [
    {
      id: 1,
      icon: <FaCode className="service-icon" />,
      title: "web development",
      text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
    },
    {
      id: 2,
      icon: <FaSketch className="service-icon" />,
      title: "web design",
      text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
    },
    {
      id: 3,
      icon: <FaAndroid className="service-icon" />,
      title: "app design",
      text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
    },
  ]
  return (
    <section className="section bg-grey">
      <Title title="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          const {id,icon,title,text} = service
          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}


export default ServiceList



