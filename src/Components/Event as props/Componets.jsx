
export const Components = () => {

    const handleClick = () => {
        alert("Clcked button")
    }
    const HandleHover = ()=>{
        alert("Hover button");
    }
  return (
        <Cmp2 onClick ={handleClick}  onHover= {HandleHover} />
  )
}

const Cmp2 = (props) =>{
    const doubleClick = (user)=>{
        alert(`Hellow , ${user} `)
    }
    return (
      <>
        <button onClick={props.onClick}>Clicked </button>
        <button onMouseEnter={props.onHover}> Hover </button>
        <button onDoubleClick={() => doubleClick("vahab")}>Suble click</button>
      </>
    );

}