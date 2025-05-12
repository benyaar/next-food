'use client'
import classes from './image-picker.module.css'
import {useRef, useState} from "react";
import Image from "next/image";

export default  function ImagePicker({label, name}) {
    const [pickedImage, setPickedImage] = useState()
    const imageInputRef = useRef()

    function handleImageChange() {
        imageInputRef.current.click()
    }
    function handleImagePicked(e) {
        const file = e.target.files[0]
        if(!file) {
            setPickedImage(null);
            return;
        }
        const reader = new FileReader()
        reader.onload = () => {
            setPickedImage(reader.result)
        }
        reader.readAsDataURL(file)

    }

    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}></div>
        <div className={classes.preview}>
            {pickedImage && <Image src={pickedImage} alt="Preview" fill />}
        </div>
        <input className={classes.input}
               type="file"
               id="image"
               accept="image/png, image/jpeg"
               name={name}
               ref = {imageInputRef}
               multiple={true}
               onChange={handleImagePicked}
               required={true}
        />
        <button className={classes.button} type="button" onClick={handleImageChange}>
            Pick an Image
        </button>
    </div>
}