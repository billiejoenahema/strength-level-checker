import { getStrengthLevel } from './getStrengthLevel'

export const calcMaxLiftAndStrengthLevel = (report, user) => {
  const getMaxLift = (report) => {
    return Math.round(report.lift + report.lift * report.reps / 40)
  }
  const resultLift = getMaxLift(report)
  const judgedLevel = getStrengthLevel(report.exercise, resultLift, user.bodyWeight)
  return ({ ...report, strengthLevel: judgedLevel, maxLift: resultLift })
}
