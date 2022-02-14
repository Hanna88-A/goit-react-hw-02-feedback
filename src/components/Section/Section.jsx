import e from "./Section.module.css"

const Section = ({title, children}) => {
    return (
        <section className={e.section}>
            <h2>{title}</h2>
            {children}
        </section>
        
    )
}
export default Section