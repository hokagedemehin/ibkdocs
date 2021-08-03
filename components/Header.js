import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"
import { useSession, signOut } from "next-auth/client"

const Header = () => {

    const [session] = useSession()

    return (
        <div className="sticky top-0 z-10 flex items-center px-4 py-2 shadow-md bg-white">
            <Button
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className=" h-15 w-15 border-0"
            >
                <Icon name="menu" size="3xl"/>
            </Button>
            <Icon 
                name="description"
                size="5xl"
                color="blue"
            />
            <h1 className="hidden md:inline-flex ml-2 text-gray-500 text-2xl">
                Docs
            </h1>
            <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
                <Icon name="search" size="3xl" color="gray" />
                <input type="text" placeholder="Search" className="flex-grow px-2 sm:px-5 text-base bg-transparent outline-none w-10" />
            </div>

            <Button
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="hidden md:inline-flex ml-5 md:ml-20 h-15 w-15 border-0"
            >
                <Icon name="apps" size="3xl" color="gray" />
            </Button>
            <img 
                loading="lazy"
                onClick={() => signOut()}
                className="cursor-pointer h-12 w-12 rounded-full ml-2"
                src={session?.user?.image}
                // src="profile_placeholder.png"
            />
        </div>
    )
}

export default Header
