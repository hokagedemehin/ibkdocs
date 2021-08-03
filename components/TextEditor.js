import dynamic from "next/dynamic";
import { useState, useEffect } from 'react'
// import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js"
import { db } from "../firebase";
import { useRouter } from 'next/dist/client/router'
import { convertFromRaw, convertToRaw } from "draft-js";
import { useSession, signOut ,getSession } from 'next-auth/client'
import { useDocumentOnce } from 'react-firebase-hooks/firestore';

// #########################################################3
// only do this for the client side rendering and not the server side rendering
const Editor = dynamic(() => import('react-draft-wysiwyg').then((module) => module.Editor), {ssr: false})
// ####################################################

const TextEditor = () => {

    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const [session] = useSession()
    const router = useRouter();
    const { id } = router.query
    const [snapshot] = useDocumentOnce(db?.collection("userDocs")
    ?.doc(session.user.email)
    ?.collection("docs")?.doc(id))

    useEffect(() => {
        if(snapshot?.data()?.editorState) {
            setEditorState(EditorState.createWithContent(convertFromRaw(snapshot?.data()?.editorState)));
        }
        
    }, [snapshot])
    
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
        db.collection('userDocs')
        .doc(session.user.email)
        .collection('docs')
        .doc(id).set({
            editorState: convertToRaw(editorState.getCurrentContent()),
        }, {merge: true})
    }

    return (
        <div className="bg-[#F8F9FA]min-h-screen pb-10">
            <Editor 
                toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
                editorClassName="mt-6 p-4 bg-white shadow-lg max-w-5xl mx-auto mb-12 border"
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
            />
        </div>
    )
}

export default TextEditor
