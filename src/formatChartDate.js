// format Date object
export function formatChartDate(createdAt) {
  if (createdAt === null) return
  const dateObj = new Date(createdAt.toDate())
  const month = ('00' + (dateObj.getMonth() + 1)).slice(-2)
  const date = ('00' + dateObj.getDate()).slice(-2)
  return (`${month}/${date}`)
}
