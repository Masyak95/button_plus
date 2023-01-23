import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.module.css';
import {Buttons} from "./Button";
import Gallery from "./Gallery";


function App() {

    const [data, setData] = useState<any[]>([
        {id: 1, item: null},
        {id: 2, item: null},
        {id: 3, item: null},
        {id: 4, item: null}
    ])
    const [selectedBox, setSelectedBox] = useState(null);
    const [isGalleryShown, setIsGalleryShown] = useState(false)
    const openGallery = () => setIsGalleryShown(true)
    const closeGallery = () => setIsGalleryShown(false)

    const addBox = (box: any) => {
        setData(data.map(d => d.id === selectedBox ? ({...d, item: box}) : d))
        closeGallery()
    }
    console.log({data, selectedBox})
    return (
        <div className="container">
            <div className="box-container">
                {data.map((d: any) => (
                    <Buttons key={d.id} data={d} callBack={() => {
                    openGallery();
                    setSelectedBox(d.id)
                    }}/>
                ))}
            </div>

            {isGalleryShown && <Gallery handleClose={closeGallery} addBox={addBox}/>}
        </div>
    );
}

export default App;

