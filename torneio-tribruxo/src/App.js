
import './App.css';
import { useEffect, useState } from 'react';
import Characteres from './components/Character';
function App() {
  const [students, setStudents] = useState(null)
  const [showBtn, setShowBtn] = useState(true)
  const [showingStudents, setShowingStudents] = useState(false)

  useEffect(()=>{
    fetch('http://hp-api.herokuapp.com/api/characters/students')
    .then((response) => response.json())
    .then((response) =>setStudents(response))
    .catch((err)=>console.log(err))
  }, [])

  const showStudentsCard = () =>{
    setShowBtn(!showBtn)
    if(students !== null){
      setShowingStudents(true)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
         {showBtn &&  
          <>
            <h1>Torneio tribruxo</h1>
            <p>Clique no botão para encontrar os feiticeiros</p>
            <button className='btn-start' onClick={showStudentsCard} >Começar !</button>

          </>
          }
        {showingStudents &&
            <div className='container'>
              <Characteres students={students}></Characteres>
            </div>
        }
           
      </header>
    </div>
  );
}

export default App;
