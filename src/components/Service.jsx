function Service(props) {
  return (
    <article className="service">
      <span className="service-icon">
        <i className="fas fa-wallet fa-fw" />
      </span>
      <div className="service-info">
        <h4 className="service-title">{props.title}</h4>
        <p className="service-text">
          {props.content}
        </p>
      </div>
    </article>
  )
}

export default Service;
