import Service from "./Service";
import Title from "./Title";
import {services} from "../data";

function Services() {
  return (
    <section className="section services" id="services">
      <Title content="our" highlight="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          return <Service key={service.id} {...service} />
        })}
      </div>
    </section>

  );
}

export default Services;
