import './App.css';
import Card from './Card'

function App() {
  let test =(
    <>
    <button>test button child 1</button>
  <button>test button child2 </button>
    </>
  )
  return (
    < >
     <h1 style={{textAlign:"center"}}>workshop Props</h1>
<div className='App'>
  {/* creation d'une prop like alan smith  */}
<Card name="test" imag="https://cdn.iconscout.com/icon/free/png-256/avatar-371-456323.png"/>
{/* ici on a le faite de passer un seulee composant  */}
<Card name="testy alman ">
  {test}
</Card>
<Card  name="i\m an other test"/>
<Card name="and no i'am "/>
</div>
    
   
    
    
    </>
  );
}

export default App;

