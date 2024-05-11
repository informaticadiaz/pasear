import { getPlace} from "../api/data"
import { useParams } from 'react-router-dom'

export default function Place() {
  const { id } = useParams()

  const place = getPlace(id)

  if (!place || place === "not found") {
    return <div>Lugar no encontrado</div>
  }
  
  const { name, description, tittle } = (getPlace(id))
  console.log(id)

  
  return (
    <div>
      hola desde place {name}
      {description}
      {tittle}
    </div>
  )
}