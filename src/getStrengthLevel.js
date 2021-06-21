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
    case 'benchPress':
      exerciseTable = BENCH_PRESS_TABLE
      break
    case 'squat':
      exerciseTable = SQUAT_TABLE
      break
    case 'deadLift':
      exerciseTable = DEAD_LIFT_TABLE
      break
    case 'shoulderPress':
      exerciseTable = SHOULDER_PRESS_TABLE
      break
    case 'bentOverRow':
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

    switch (criteriaIndex) {
      case 0:
        strengthLevel = 'Beginner'
        break
      case 1:
        strengthLevel = 'Novice'
        break
      case 2:
        strengthLevel = 'Intermediate'
        break
      case 3:
        strengthLevel = 'Advanced'
        break
      case 4:
        strengthLevel = 'Elite'
        break
      default:
        strengthLevel = 'unKnown'
    }
  })
  return strengthLevel
}
