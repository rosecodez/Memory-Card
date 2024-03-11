export default function Scoreboard({ score, bestScore }) {
    return(
        <div id="scoreboard-container">
            <div>Score: {score}</div>
            <div>Best score: {bestScore}</div>
        </div>
    )
}