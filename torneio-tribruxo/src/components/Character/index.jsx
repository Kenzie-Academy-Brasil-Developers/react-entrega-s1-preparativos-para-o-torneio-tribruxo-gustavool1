import { useEffect, useState } from 'react'
import Bruxo from './Bruxo'
import './style.css'
const Characteres = ({students}) =>{
    const randomNumber = ()=>{
        return Math.floor(Math.random()*11)        
    }
    const estudantes = () =>{
        const retorno = []
        while(retorno.length <3){
            const n = randomNumber()
            const filtrando = retorno.filter((element)=>element.house === students[n].house)
            if(filtrando.length === 0){
                retorno.push(students[n])
            }
        }
        return retorno
    }
    const [bruxos,setBruxos] = useState(estudantes())
    const addingRandomBruxos = () =>{
        setBruxos(estudantes)
    }
   
    return(
        <section className='students-container'>
             <>
                {bruxos.map((bruxo,index)=>(
                    <div key={index} className='student'>
                        <Bruxo bruxo={bruxo} ></Bruxo>
                    </div> 
                ))}
                <button className='btn-restart' onClick={addingRandomBruxos}>Tente novamente</button>
            </>
        </section>
    )
}
export default Characteres