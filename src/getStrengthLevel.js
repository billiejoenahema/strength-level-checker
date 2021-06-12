import { BENCH_PRESS_TABLE } from './strengthStandards'

export const getStrengthLevel = (maxLift, bodyWeight) => {
  const bodyWeightColumn = BENCH_PRESS_TABLE.map((row) => { return row.weight })
  // bodyWeightColumnの中からbodyWeightの近似値を探す
  const closestValue = bodyWeightColumn.reduce((prev, curr) => {
    return (Math.abs(curr - bodyWeight) < Math.abs(prev - bodyWeight) ? curr : prev)
  })
  BENCH_PRESS_TABLE.map((row) => {
    if (row.weight !== closestValue) return
    const criteriaWeight = row.criterion.find((criteria) => {
      return (maxLift <= criteria)
    })
    const criteriaIndex = row.criterion.indexOf(criteriaWeight)
    switch (criteriaIndex) {
      case 0:
        return 'Beginner'
      case 1:
        return 'Novice'
      case 2:
        return 'Intermediate'
      case 3:
        return 'Advanced'
      case 4:
        return 'Elite'
      default:
        return 'unKnown'
    }
  })
}
