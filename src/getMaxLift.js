// 入力されたliftとrepsからMaxLiftを計算
export const getMaxLift = (report) => {
  return Math.round(report.lift + report.lift * report.reps / 40)
}
