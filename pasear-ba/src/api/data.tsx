import places from '../data/places.json'

export function getPlaces() {
  console.log(places)
  return places
}
export function getPlace(id: string) {
  const place = places.find(place => place.id.toString() === id)
  if (!place) {
   return "not found" 
  }
  return place
}