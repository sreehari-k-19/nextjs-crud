import Image from 'next/image'
import style from '../styles/Layout.module.scss'
export default function Layout({ children }) {

    return (
        <div className={style.formLayout}>
            <div className={style.loginContainer}>
                {children}
            </div>
            <div className={style.layoutImages}>
                <div className={style.fullImage}>
                    {/* <img src='/fullLeaf.png'/> */}
                    <Image src={'/fullLeaf.png'} width={490} height={590} />
                </div>
            </div>
        </div>
    )
}