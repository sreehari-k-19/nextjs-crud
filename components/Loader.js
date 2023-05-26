
import style from '../styles/Fetchcom.module.scss';


export default function Loader() {
    return (
        <div className={style.spinnercontainer}>
            <div className={style.loadingspinner}></div>
        </div>
    )
}