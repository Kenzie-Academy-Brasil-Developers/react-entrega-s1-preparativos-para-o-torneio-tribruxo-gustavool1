import { useState } from 'react'
import Bruxo from './Bruxo'
import './style.css'
const Characteres = ({students}) =>{
    const randomNumber = ()=>{
        return Math.floor(Math.random()*3)
    }
    const estudantes = () =>{
       
        const gryffindor = students.filter((estudante)=>estudante.house === 'Gryffindor')
        const randomGryffindor = Math.floor(Math.random()*5)
        
        const slytherin = students.filter((estudante)=>estudante.house === 'Slytherin')
        const randomSlytherin = Math.floor(Math.random()*3)

        const hufflepuff = students.filter((estudante)=>estudante.house === 'Hufflepuff')
        const ravenclaw = students.filter((estudante)=>estudante.house === 'Ravenclaw')

        const hufflepuffEravenclaw = [...hufflepuff, ...ravenclaw]
        const randomhufflepuffEravenclaw = Math.floor(Math.random()*3)

        const allStudents = [gryffindor[randomGryffindor],slytherin[randomSlytherin],hufflepuffEravenclaw[randomhufflepuffEravenclaw]]
        const retorno = []
        while(retorno.length <3){
            const n = randomNumber()
            const filtrando = retorno.filter((element)=>element.house === allStudents[n].house)
            if(filtrando.length === 0){
                retorno.push(allStudents[n])
            }
        }
        return retorno
    }
    const [bruxos,setBruxos] = useState(estudantes())
    const addingRandomBruxos = () =>{
        setBruxos(estudantes)
    }
    // <img src={students[n].image} alt={students[n].name}></img>
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