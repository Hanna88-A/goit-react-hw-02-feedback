import s from "./FeedbackOptions.module.css"
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
       
    return <ul className={s.listButton}>
        {options.map(name => (
            <li className={s.title} key = {name}><button className={s.button} onClick={()=>{onLeaveFeedback(name)}}>{name}</button></li>
        ))}
    </ul>
    
};

export default FeedbackOptions