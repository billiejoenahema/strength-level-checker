// format Date object
export function formatDate(createdAt) {
  const dateObj = new Date(createdAt.toDate())
  const year = dateObj.getFullYear();
  const month = ('00' + (dateObj.getMonth() + 1)).slice(-2)
  const date = ('00' + dateObj.getDate()).slice(-2)
  const hours = ('00' + dateObj.getHours()).slice(-2)
  const minutes = ('00' + dateObj.getMinutes()).slice(-2)
  const seconds = ('00' + dateObj.getSeconds()).slice(-2)
  return (`${year}年${month}月${date}日 ${hours}時${minutes}分${seconds}秒`)
}
