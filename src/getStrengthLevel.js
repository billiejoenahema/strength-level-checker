import { BENCH_PRESS_TABLE } from './strengthStandards'

export const getStrengthLevel = (maxLift, bodyWeight) => {
  const bodyWeightColumn = BENCH_PRESS_TABLE.map((row) => { return row.weight })
  // bodyWeightColumnの中からbodyWeightの近似値を探す
  const closestValue = bodyWeightColumn.reduce((prev, curr) => {
    return (Math.abs(curr - bodyWeight) < Math.abs(prev - bodyWeight) ? curr : prev)
  })
  let strengthLevel
  BENCH_PRESS_TABLE.forEach((row) => {
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
