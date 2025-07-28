import React, {Dispatch, FC} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface EditorModel {
    setData: Dispatch<string>,
    data: string,
    isReadOnly?: boolean,
    placeholder?: string,
    className?: string
}

export const Editor: FC<EditorModel> = (
    {
        data,
        setData,
        isReadOnly,
        placeholder,
        className
    }
) => {

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];


    return (
        <ReactQuill
            formats={formats}
            className={className}
            placeholder={placeholder}
            readOnly={isReadOnly}
            theme="snow"
            value={data}
            onChange={setData}
        />
    )
}