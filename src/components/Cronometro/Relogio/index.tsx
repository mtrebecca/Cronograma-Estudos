import style from './Relogio.module.scss';

export default function Relogio() {
    return(
        <>
            <span className={style.relogioWrapper}>0</span>
            <span className={style.relogioWrapper}>0</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioWrapper}>0</span>
            <span className={style.relogioWrapper}>0</span>
        </>
    )
}