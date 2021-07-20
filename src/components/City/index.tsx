import { StyledCity } from './style'

import { useState } from 'react'

import { database } from '../../services/firebase'

type CityProps = {
  city: string
}

export function City(props: CityProps) {
  const [image, setImage] = useState()
  const [activities, setActivities] = useState()
  const [attractions, setAttractions] = useState()
  database
    .ref(`destination/${props.city}`)
    .once('value')
    .then(snap => {
      setActivities(snap.val().activities)
      setAttractions(snap.val().attractions)
      setImage(snap.val().photo)
    })
  let link = `/destination/${props.city}`
  return (
    <StyledCity href={link}>
      <img src={image} alt={`Cidade ${props.city}`} />
      <div>
        <h2>{props.city}</h2>
        <p>
          <strong>Atividades: </strong> {activities}
        </p>

        <p>
          <strong>Principais atrativos: </strong> {attractions}
        </p>
      </div>
    </StyledCity>
  )
}
