export const formatTime = (duration: number) => {
  const hours = Math.floor(duration / (60 * 60));

  const rest = duration - (hours * 60 * 60)
  
  const minutes = Math.ceil(rest / 60)

  return `${hours}h ${minutes}m`
}