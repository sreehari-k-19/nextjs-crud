
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useReducer, useState } from "react";
import { HiFingerPrint, HiAtSymbol } from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/react";
import Layout from "../Layout/Layout";
import style from '../styles/Login.module.scss'
const formReducer = (state, event) => {
    return {
        ...state, [event.target.name]: event.target.value
    }
}
export default function Login() {
    const [show, setShow] = useState(false)
    async function handleGoogleSignin() {
        signIn('google', { callbackUrl: "http://localhost:3000/" })
    }
    async function handleGithubSignin() {
        signIn('github', { callbackUrl: "http://localhost:3000/" })
    }
    const [formData,setFormData]=useReducer(formReducer,{})
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData, "formData")
    }
    return (
        <Layout>
            <Head>
                <title>Login</title>
            </Head>

            <div className={style.loginForm}>
                <h2>Login</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, officia.
                </p>
                <div className={style.form}>
                    <form  onSubmit={handleSubmit}>
                        <div>
                            <input type="text" placeholder="Email" onChange={setFormData} name="email" />
                            <span><HiAtSymbol /></span>
                        </div>
                        <div>
                            <input type={`${show ? "text" : "password"}`} placeholder="Password" onChange={setFormData} name="password" />
                            <span onClick={() => setShow(!show)}><HiFingerPrint /></span>
                        </div>
                        <button className={style.loginButton}>Login</button>
                    </form>
                </div>
                <button className={style.googleButton} onClick={handleGoogleSignin}>Signup with Google<Image alt="google" src={'/google.svg'} width="20" height={20} ></Image></button>
                <button className={style.githubButton} onClick={handleGithubSignin}>Signup with GitHup <Image src={'/github.svg'} alt="github" width="20" height={20} ></Image> </button>
                <p className="">Dont have an account yet? <Link legacyBehavior href={'/Register'}><a>Sign Up</a></Link>
                </p>
            </div>

        </Layout>
    )
}