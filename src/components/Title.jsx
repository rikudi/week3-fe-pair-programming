function Title(props) {

  return (
    <div className="section-title">
      <h2>
        {props.content} <span>{props.highlight}</span>
      </h2>
    </div>
  );
}

export default Title;
