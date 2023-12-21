import axios from "axios"

function Movies (){
    const data = axios.get('https://icanhazdadjoke.com/').then((response)=>{
        console.log (response.data)
    }
    )
   return(
    <>
    <p>{data[0]}</p>
    <p>teste</p>
    </>
   )
   
}

export default Movies