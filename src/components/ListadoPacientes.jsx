import React from 'react'
import Pacientes from './Pacientes'


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
 
  return (
    <div className='md:w-1/2 lg:w-3/5 h-screen lg:overflow-y-scroll'>
      {pacientes && pacientes.length ? (
        <>
              <h2 className='font-black text-3xl text-center'>
              Listado Pacientes
              </h2>
              <p className='text-xl mt-5 mb-10 text-center'>Administra tus {''} <span className='text-indigo-600 font-bold'>Pacientes</span></p>
              
              {pacientes.map(paciente=>(
              <Pacientes 
              key={paciente.id} 
              paciente={paciente} 
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
              />)
              )}
              
              </>
      ): (
        <>
           <h2 className='font-black text-3xl text-center'>
              No hay Pacientes
              </h2>
              <p className='text-xl mt-5 mb-10 text-center'>Comienza agregando pacientes {''} <span className='text-indigo-600 font-bold'>y apareceran en este lugar</span></p>
              
        </>
      )}


    </div>
  )
}

export default ListadoPacientes
