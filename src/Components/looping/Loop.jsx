// we don't use for loop in React . we use map method
import SeiesData from './jsondata.json'
const Loop = () => {
  return (
    <div>
        {
            SeiesData.map((itmes)=>{

               return ( <li key={itmes.id} >

                    <h1>Name:  {itmes.name}</h1> 

                    <img src={itmes.img_url} alt="" />
                    <h3 > ating : {itmes.rating} </h3>

                    <h2> items:{itmes.description} </h2>

                    <h4> cast:{itmes.cast} </h4>
                    <br />
                </li>
                
               );
            })
        }


    </div>
  )
}

export default Loop
