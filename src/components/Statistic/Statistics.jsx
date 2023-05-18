function Statistic({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
        <h3>Good: {good}</h3>
        <h3>Neutral: {neutral}</h3>
        <h3>Bad: {bad}</h3>
        <h3>Total: {total}</h3>
        <h3>Positive feedback: {positivePercentage} %</h3>
    </div>
  )
}
export default Statistic