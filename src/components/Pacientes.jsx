import React from 'react'

const Pacientes = ({paciente, setPaciente, eliminarPaciente}) => {
  const {nombre, propietario, email, fecha, sintomas, id} = paciente
  const handleEliminar = () => { 
    const respuesta = confirm("Deseas eliminar el paciente?")
    if(respuesta){
      eliminarPaciente(id)
    }
  }
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
        <span className='font-normal normal-case'>{nombre}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
        <span className='font-normal normal-case'>{propietario}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
        <span className='font-normal normal-case'>{email}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: {''}
        <span className='font-normal normal-case'>{fecha}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''}
        <span className='font-normal normal-case'>{sintomas}</span>
        </p>
        <div className='flex'>
          <button 
          className='bg-indigo-600 p-3 text-white uppercase rounded-md mr-4'
          onClick={()=>setPaciente(paciente)}
          >Editar
          </button>
          <button 
          className='bg-red-600 p-3 text-white uppercase rounded-md mr-4'
          onClick = {handleEliminar}
          >Eliminar</button>
        </div>

  </div>
  )
}

export default Pacientes
