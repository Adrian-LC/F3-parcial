import { useState } from 'react'
import { Form } from './components/Form'
import { Card } from './components/Card'
import './App.css'

export const App = () => {
  const [infoCard, setInfoCard] = useState({
    nombre: '',
    apellido: ''
  })

  const newCard = data => setInfoCard(data)

  return (
    <>
      <Form
        newCard={ newCard }
      />
      {
        infoCard.nombre && infoCard.apellido ?
        <Card
          { ...infoCard }
        /> :
        undefined
      }
    </>
  )
}
