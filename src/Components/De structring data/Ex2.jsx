
const Ex2 = (props) => {
 const { name , rating , description , cast} = props.element;
 console.log(props);
  return (
    <div>
      <h1>{name}</h1>
      <h2>{description}</h2>
      <h2>{rating}</h2>
      <h4> {description} </h4>
      {/* <h5> {cast} </h5> */}
      {props.html}
    </div>
  )
}

export default Ex2
