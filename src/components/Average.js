import React from 'react'

const Average = ({ records, chart }) => {
  // 選択された種目のmaxLiftだけを抽出して配列を作る
  const maxLifts = records.map((item) => {
    if (item.exercise === chart) { return item.maxLift }
    return
  })
  const Average = maxLifts.reduce((a, b) => a + b) / maxLifts.length
  const base = 0.1
  const roundedAverage = Math.round(Average * base) / base

  return (
    <div>
      {`平均最大重量: ${roundedAverage} kg`}
    </div>
  )
}

export default Average
