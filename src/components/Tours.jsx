import Title from "./Title";
import Tour from "./Tour";
import {tours} from "../data";
function Tours() {
  return (
    <section className="section" id="tours">
      <Title content="Featured" highlight="tours" />
      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />
        })}
      </div>
    </section>
  );
}

export default Tours;
