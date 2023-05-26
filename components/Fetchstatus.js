import style from '../styles/Fetchcom.module.scss'

export function Status({value}) {
    return (
        <div className={style.center}>
            <div className={value?style.success:style.error}>
                <p>{value?"Success":"Something went wrong"}</p>
            </div>
        </div>
    )
}