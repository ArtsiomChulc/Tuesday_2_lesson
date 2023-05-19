import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    title: string
    onChangeCB: (newTitle: string) => void
}

export function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false)
    let [title, setTitle] = useState('')

    const activateEditMode = () => {
        setEditMode(true)
        setTitle(props.title)
    }

    const activateViewMode = () => {
        setEditMode(false)
        props.onChangeCB(title)
    }

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        editMode
            ? <input onChange={onChangeInputHandler} onBlur={activateViewMode} value={title} autoFocus/>
            : <span onDoubleClick={activateEditMode}>{props.title}</span>
    )
}