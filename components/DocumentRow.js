import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"
import { useRouter } from 'next/dist/client/router'

const DocumentRow = (props) => {
    const {id, fileName, date} = props
    const router = useRouter()

    return (
        <div
        onClick={() =>router.push(`/doc/${id}`)}
         className="flex items-center py-4 px-6 rounded-lg hover:bg-gray-100 text-sm cursor-pointer max-w-4xl mx-auto">
            <Icon name="article" size="3xl" color="blue" />
            <p className="flex-grow pl-3 w-10 pr-10 truncate">{fileName}</p>
            <p className="pr-5 text-sm">
                {date.toDate().toLocaleDateString()}
            </p>
            <Button 
            className="border-0"
            buttonType="outline"
            rounded={true}
            iconOnly={true}
            ripple='dark'
            >
                <Icon name="more_vert" size="3xl"/>
            </Button>
        </div>
    )
}

export default DocumentRow
