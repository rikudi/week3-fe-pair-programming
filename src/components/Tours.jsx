import Title from "./Title";
import Tour from "./Tour";
import tour1 from "../assets/images/tour-1.jpeg";
import tour2 from "../assets/images/tour-2.jpeg";
import tour3 from "../assets/images/tour-3.jpeg";

let tours = [
  {
    "imgSrc": tour1,
    "imgAlt": "Tibet Adventure",
    "date": "august 26th, 2025",
    "title": "Tibet Adventure",
    "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit,qui corporis.",
    "location": "china",
    "price": "from €2100",
    "duration": "6 days",
  },
  {
    "imgSrc": tour2,
    "imgAlt": "best of java",
    "date": "october 1th, 2025",
    "title": "best of java",
    "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit,qui corporis.",
    "location": "indonesia",
    "price": "from €1400",
    "duration": "11 days",
  },
  {
    "imgSrc": tour3,
    "imgAlt": "explore hong kong",
    "date": "september 15th, 2025",
    "title": "explore hong kong",
    "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit,qui corporis.",
    "location": "hong kong",
    "price": "from €5000",
    "duration": "8 days",
  },
]

function Tours() {
  return (
    <section className="section" id="tours">
      <Title content="Featured" highlight="tours" />
      <div className="section-center featured-center">
        {tours.map((tour, index) => {
          return <Tour key={index} {...tour} />
        })}
      </div>
    </section>
  );
}

export default Tours;
