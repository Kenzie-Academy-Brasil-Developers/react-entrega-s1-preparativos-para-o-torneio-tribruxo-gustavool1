import './style.css'
const Bruxo = ({bruxo}) =>{
    return (
        <>
            <img src={bruxo.image} alt={bruxo} className={'img-'+bruxo.house }></img>
            <p>{bruxo.name}</p>
            <p className={bruxo.house}>{bruxo.house}</p>
        </>
    )
}   

export default Bruxo