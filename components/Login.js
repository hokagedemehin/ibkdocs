import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/client'
import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"
import Image from 'next/image'

const Login = () => {
    return (
        <>
            <Head>
                <title>Google Docs Demo Login</title>
                <link rel="icon" href="/Google_Docs_Logo.png" />
            </Head>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <Image 
                    // src="/Google_Docs.svg"
                    src="/google2.png"
                    height="300"
                    width="550"
                    objectFit="contain"
                />
                <Button
                    className="w-44 mt-10"
                    color="blue"
                    buttonType="filled"
                    ripple='light'
                    onClick={() => signIn()}
                >Log in</Button>
            </div>
        </>
    )
}

export default Login
