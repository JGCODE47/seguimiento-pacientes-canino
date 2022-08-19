import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Formulario from './components/Formulario.jsx'
import ListadoPacientes from './components/ListadoPacientes.jsx'


const App = () => {
  const inicial = JSON.parse(localStorage.getItem('pacientes'))?? []
  
  const [pacientes, setPacientes] = useState(inicial);
  const [paciente, setPaciente] = useState({})
 
 



  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])

 


  const eliminarPaciente = (id)=>{
    const pacienteActualizado = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacienteActualizado)

  }

   return (
    <div className='container mx-auto mt-10'>
    <Header />
      <div className='mt-12 md:flex'>
          <Formulario
          pacientes={pacientes}
          setPacientes = {setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          
          />
          <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          />
      </div>
    </div>
  )
}

export default App
