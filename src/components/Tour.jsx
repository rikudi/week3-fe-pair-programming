function Tour(props) {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img
          src={props.imgSrc}
          className="tour-img"
          alt={props.imgAlt}
          onError={(e) => {
            console.log("Image failed to upload", props.imgSrc);
            e.target.onerror = null;
          }}
        />
        <p className="tour-date">{props.date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{props.title}</h4>
        </div>
        <p>{props.content}
        </p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map" />
            </span>
            {props.location}
          </p>
          <p>{props.price}</p>
          <p>{props.duration}</p>
        </div>
      </div>
    </article>
  )
}

export default Tour;
