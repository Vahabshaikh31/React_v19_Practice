
const Challenge = () => {
  return (
    <div>
      <Card name="vahab" id="10">
       <button>Log in</button>
       <button>Sign up</button>
      </Card>
    </div>
  )
}

export default Challenge;

function Card(props){
  const {name , id , children} = props;
    return(
        <>
        <h1>
            {name}
        </h1>
        <h3>
            {id}
        </h3>
        {/* to acces childe we need to write props 7children */}
        <h4>
          {children}
        </h4>
        </>
    );
}