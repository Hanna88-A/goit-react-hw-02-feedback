import s from "./Statistics.module.css"
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    
    return (
        <div className={s.statBox}>
            <h3>Statistics:</h3>
            <ul className={s.list}>
                <li className={s.item}>Good - <span className={s.feetBack}>{good}</span></li>
                <li className={s.item}>Neutral - <span className={s.feetBack}>{neutral}</span></li>
                <li className={s.item}>Bad - <span className={s.feetBack}>{bad}</span></li>
            </ul>
            <p className={s.titleTotal}>Total -<span className={s.feetBack}>{total}</span></p>
            <p className={s.titlePercent}>Positive Feedback -<span className={s.feetBack}>{positivePercentage}%</span></p>
        </div>
        
        
    )
}
export default Statistics;