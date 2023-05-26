import Head from 'next/head'
import Link from 'next/link'
import { getSession, useSession, signOut } from "next-auth/react"
import { get } from 'mongoose'
export default function UserHome() {
    const { data: session } = useSession()

    function handleSignOut() {
        signOut()
    }

    return (
        <div>
            <Head>
                <title>Home Page</title>
            </Head>
            {session ? User({ session, handleSignOut }) : "no user"}
        </div>
    )
}


function User({ session, handleSignOut }) {
    return (
        <div className='details'>
            <h5>{session.user.name}</h5>
            <h5>{session.user.email}</h5>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    )
}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: { session }
    }
}