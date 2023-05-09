import React from 'react'
import { useState } from 'react'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import '../styles/UploadFileStyle.css'

function handleDrop(acceptedFiles, setData, setRender, setSound) {
    document.getElementById('textField').innerHTML = 'Uploading...'
    const formData = new FormData()
    formData.append('crossorigin', 'anonymous')
    formData.append('file', acceptedFiles[0])
    setSound(acceptedFiles[0])
    axios.post('http://164.92.202.74/upload?secret_token=znj', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then((response) => {
        document.getElementById('textField').innerHTML = 'Uploaded!'
        setData(response.data)
        setRender(false)
    }).catch((error) => {
        document.getElementById('textField').innerHTML = 'Error! Try again with another file.'
    })
}

export default function UploadFile({render, setRender, setData, setSound}) {
    return (
        <>
        {render ?
            <div className='UploadFile'>
                <div>
                    <Dropzone onDrop={acceptedFiles => handleDrop(acceptedFiles, setData, setRender, setSound)} >
                    {({getRootProps, getInputProps}) => (
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p id='textField'>Drag and drop Your .wav here</p>
                        </div>
                    )}
                    </Dropzone>
                </div>
            </div>
        : null}
        </>
    )
}