import {
  BENCH_PRESS_TABLE,
  SQUAT_TABLE,
  DEAD_LIFT_TABLE,
  SHOULDER_PRESS_TABLE,
  BENT_OVER_ROW_TABLE
} from './strengthStandards'

// maxLiftとbodyWeightからstrengthLevelを判定
export const getStrengthLevel = (exercise, maxLift, bodyWeight) => {
  let exerciseTable = ''

  switch (exercise) {
    case 'ベンチプレス':
      exerciseTable = BENCH_PRESS_TABLE
      break
    case 'スクワット':
      exerciseTable = SQUAT_TABLE
      break
    case 'デッドリフト':
      exerciseTable = DEAD_LIFT_TABLE
      break
    case 'ショルダープレス':
      exerciseTable = SHOULDER_PRESS_TABLE
      break
    case 'ベントオーバーロウ':
      exerciseTable = BENT_OVER_ROW_TABLE
      break
    default:
      console.log('error')
  }

  const bodyWeightColumn = exerciseTable.map((row) => { return row.weight })
  // bodyWeightColumnの中からbodyWeightの近似値を探す
  const closestValue = bodyWeightColumn.reduce((prev, curr) => {
    return (Math.abs(curr - bodyWeight) < Math.abs(prev - bodyWeight) ? curr : prev)
  })

  let strengthLevel = ''
  exerciseTable.forEach((row) => {
    if (row.weight !== closestValue) return
    const criteriaWeight = row.criterion.find((criteria) => {
      return (maxLift <= criteria)
    })
    const criteriaIndex = row.criterion.indexOf(criteriaWeight)
    const strengthIndex = (criteriaIndex === 0) ? criteriaIndex : criteriaIndex - 1

    switch (strengthIndex) {
      case 0:
        strengthLevel = 'ビギナー'
        break
      case 1:
        strengthLevel = '初級者'
        break
      case 2:
        strengthLevel = '中級者'
        break
      case 3:
        strengthLevel = '上級者'
        break
      default:
        strengthLevel = 'エリート'
    }
  })
  return strengthLevel
}
