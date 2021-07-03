import React from 'react'

const Average = ({ records, chart }) => {
  // 選択された種目のmaxLiftだけを抽出して配列を作る
  const maxLifts = records.map((item) => {
    if (item.exercise === chart) { return item.maxLift }
    return
  })
  const dataAverage = maxLifts.reduce((a, b) => a + b) / maxLifts.length

  return (
    <div>
      {`平均最大重量: ${dataAverage} kg`}
    </div>
  )
}

export default Average
