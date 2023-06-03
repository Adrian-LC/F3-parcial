import { useState } from 'react'

export const Form = (props) => {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [error, setError] = useState('')

  const onChangeNombre = e => setNombre(e.target.value)
  const onChangeApellido = e => setApellido(e.target.value)

  const onSubmitForm = e => {
    e.preventDefault()

    if (esValidoNombre() && esValidoApellido()) {
      setNombre('')
      setApellido('')
      setError('')
      props.newCard({ nombre, apellido })
    } else {
      setError('Por favor chequea que la información sea correcta')
    }
  }

  const esValidoNombre = () => nombre.trim().length >= 3
  const esValidoApellido = () => apellido.trim().length >= 6

  return (
    <section>
      <h2>Form</h2>
      <form onSubmit={ onSubmitForm }>
        <div>
          <label htmlFor='nombre'>Nombre:</label>
          <input
            type='text'
            id='nombre'
            value={ nombre }
            onChange={ onChangeNombre }
          />
        </div>
        <div>
          <label htmlFor='apellido'>Apellido:</label>
          <input
            type='text'
            id='apellido'
            value={ apellido }
            onChange={ onChangeApellido }
          />
        </div>
        <button type='submit'>Enviar</button>
      </form>
      { error ? <p>{ error }</p> : undefined }
    </section>
  )
}
