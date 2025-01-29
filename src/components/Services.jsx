import Service from "./Service";
import Title from "./Title";

let services = [
  {
    "title": "amazing food",
    "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia."
  },
  {
    "title": "endless hiking",
    "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia."
  },
  {
    "title": "amazing comfort",
    "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia."
  }
]

function Services() {
  return (
    <section className="section services" id="services">
      <Title content="our" highlight="services" />
      <div className="section-center services-center">
        {services.map((service, index) => {
          return <Service key={index} {...service} />
        })}
      </div>
    </section>

  );
}

export default Services;
