import places from '../data/places.json'
import { Place } from '../data/types'


export function getPlace(id: string | undefined): Place | null {
  // Utilizar `Array.find` para buscar el lugar por su ID
  const place = places.find(place => place.id.toString() === id)
  if (!place) {
   return null 
  }
  // Devolver null si el lugar no se encuentra
  return place || null;
}