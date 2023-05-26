import Image from "next/image";
import style from '../styles/Leaf.module.scss';
export default function Leafs() {
    return (
        <>
            <img className={style.leafflow} src="/leaf1.png" />
            <img className={style.leafflow} src="/leaf2.png" />
            <img className={style.leafflow} src="/leaf1.png" />
            <div className={style.leaf}><Image src={"/crudcom.png"} width={400} height={500} /></div>
        </>
    )
}

