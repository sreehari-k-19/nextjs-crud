
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useReducer, useState } from "react";
import { HiFingerPrint, HiAtSymbol } from "react-icons/hi";
import Layout from "../Layout/Layout";
import style from '../styles/Login.module.scss'
import styles from '../styles/Register.module.scss'
const formReducer = (state, event) => {
    return {
        ...state, [event.target.name]: event.target.value
    }
}
export default function Login() {
    const [show, setShow] = useState(false)
    const [formData, setFormData] = useReducer(formReducer, {})
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData, "formData")
    }
    return (
        <Layout>
            <Head>
                <title>Register</title>
            </Head>

            <div className={style.loginForm}>
                <h2>Register</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, officia.
                </p>
                <div className={style.form}>
                    <form  onSubmit={handleSubmit}>
                        <div>
                            <input type="text" name="name" onChange={setFormData} placeholder="Name" />
                            <span><HiAtSymbol /></span>
                        </div>
                        <div>
                            <input type="text" onChange={setFormData} name="email" placeholder="Email" />
                            <span><HiAtSymbol /></span>
                        </div>
                        <div>
                            <input type="Date" placeholder="Date of birth" onChange={setFormData} name="dateofbirth" />
                            <span><HiAtSymbol /></span>
                        </div>
                        <div>
                            <input type={`${show ? "text" : "password"}`} placeholder="Password" onChange={setFormData} name="password" />
                            <span onClick={() => setShow(!show)}><HiFingerPrint /></span>
                        </div>
                        <button className={style.loginButton}>Login</button>
                    </form>
                </div>
                <button className={style.googleButton}>Signup with Google<Image alt="google" src={'/google.svg'} width="20" height={20} ></Image></button>
                <button className={style.githubButton}>Signup with GitHup <Image src={'/github.svg'} alt="github" width="20" height={20} ></Image> </button>
                <p className="">Dont have an account yet? <Link legacyBehavior href={'/Login'}><a>Sign Up</a></Link>
                </p>
            </div>

        </Layout >
    )
}