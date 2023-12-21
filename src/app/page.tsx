import { api } from "../../services/api";

export default function Home() {
  
  async function getApi (){
    const config = {
      headers: {
          'Accept': 'application/json'
      }
  }
    const response = await api.get("", config);
      console.log(response);
      return response.data.joke
  }

  const joke = getApi()
  
  return (
    <main>
      <div className="container">
        <h3>Don't Laugh Challenge</h3>
        <div id="joke" className="joke">{joke}</div>
       
    </div>
    
    </main>
  )
}
