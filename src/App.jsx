import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Datashow from './Component/Datashow';

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
   const checkBox1 = document.getElementById('vehicle1');
   const checkBox2 = document.getElementById('vehicle2');
   const checkBox3 = document.getElementById('vehicle3');
   const checkBox4 = document.getElementById('vehicle4');
   const checkBox5 = document.getElementById('vehicle5');
   const checkBox6 = document.getElementById('vehicle6');
   const checkBox7 = document.getElementById('vehicle7');
   const checkBox8 = document.getElementById('vehicle8');
   const checkBox9 = document.getElementById('vehicle9');

  useEffect(() => {
    async function fetchData() {
       setIsLoading(true);
       try {
          const response = await fetch('https://seopage1erp.website/api/leads');
          const json = await response.json();
          setData(json);
       } catch (error) {
          console.error(error);
       } finally {
          setIsLoading(false);
       }
    }
    fetchData();
 }, []);
 
 if (isLoading) {
  return <div style={{ color: 'black' }}>Loading...</div>;
}
if (data) {
  const maindata = data.data.slice(0,10);
  // console.log(maindata);
  return(
  <div>
    <details className="dropdown mb-32">
  <summary className="m-1 btn">open or close</summary>
  <div className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1">Name</label><br></br>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
  <label for="vehicle2">Project Link</label><br></br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label for="vehicle3">Project id</label><br></br>
  <input type="checkbox" id="vehicle4" name="vehicle3" value="Boat"/>
  <label for="vehicle3">Project Budjet</label><br></br>
  <input type="checkbox" id="vehicle5" name="vehicle3" value="Boat"/>
  <label for="vehicle3">Bid value</label><br></br>
  <input type="checkbox" id="vehicle6" name="vehicle3" value="Boat"/>
  <label for="vehicle3">Created</label><br></br>
  <input type="checkbox" id="vehicle7" name="vehicle3" value="Boat"/>
  <label for="vehicle3">Created By</label><br></br>
  <input type="checkbox" id="vehicle8" name="vehicle3" value="Boat"/>
  <label for="vehicle3">Bidding Delay Time</label><br></br>
  <input type="checkbox" id="vehicle9" name="vehicle3" value="Boat"/>
  <label for="vehicle3">Staus</label><br></br>
  </div>
</details>
    <div className="">
  <table className="table">
    {/* head */}
    
    <thead>
      <tr>
        <th><input type="checkbox" className="checkbox" /></th>
        <th>Name</th>
        <th>Project Link</th>


        <th>Project id</th>

        <th>Project Budjet</th>

        <th>Bid value</th>

        <th>Created</th>

        <th>Created By</th>

        <th>Bidding Delay Time</th>

        <th>Staus</th>

        
      </tr>
    </thead>
    
    <tbody>
  
    {maindata.map(item => (<Datashow
     key={item.id}
         item={item}>
      </Datashow>))
    }
   

    </tbody>
    
    
  </table>
</div>
  </div>
  )
  
}

return <div style={{ color: 'black' }}>No data</div>;

}

export default App
