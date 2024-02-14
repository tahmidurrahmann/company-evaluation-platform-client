import { useEffect, useState } from "react";

import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../../../firebase/firebase";

const MultipleFileUploader = () => {
    const [img, setImg] = useState('')
    const [imgUrl, setImgUrl] = useState([])

    const handleClick = () => {
        if (img !== null) {
            const imgRef = ref(storage,`files/${v4()}`)
            uploadBytes(imgRef, img).then(value => {
                console.log(value)
                getDownloadURL(value.ref).then(url => {
                    setImgUrl(data => [...data, url])
                })
            })
        }
    }

    useEffect(() => {
        listAll(ref(storage, "files")).then(imgs => {
            console.log(imgs)
            imgs.items.forEach(val => {
                getDownloadURL(val).then(url => {
                    setImgUrl(data => [...data, url])
                })
            })
        })
    }, [])

    imgUrl.map(element => {
        console.log(element);
    })

    return (
        <div className="App">
            <input type="file" onChange={(e) => setImg(e.target.files[0])} />
            <button onClick={handleClick}>Upload</button>
            <br />
            {
                imgUrl.map((dataVal, index) => <div key={index} >
                    <img src={dataVal} height="200px" width="200px" />
                    <a href={dataVal}>{dataVal}</a>
                </div>)
            }
        </div>
    )
};

export default MultipleFileUploader;