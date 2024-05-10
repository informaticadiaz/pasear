import { getPlace} from "../api/data"
import { useParams } from 'react-router-dom'

export default function Place() {
  const { id } = useParams()
  const { name, description, tittle } = (getPlace(id))



  return (
    <div>av
      hola {name}
      {description}
      {tittle}
    </div>
  )
}