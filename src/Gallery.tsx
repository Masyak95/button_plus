import React, {ChangeEvent, useEffect, useState} from 'react';
import './index.css'
import {Stack} from "react-bootstrap";

import Search from "./Search";

export type GalleryType = {
    [key: string]: string
}

// {
//     id: string
//     name: string
//     filename: string
//     editor: string
//     parent: string
// }

type PropsType = {
    handleClose: () => void
    addBox: (box: any) => void
}
const Gallery = (props: PropsType) => {

    const [posts, setPosts] = useState<GalleryType[]>([])
    const [search, setSearch] = useState('')
    const fields = ['id', 'name', 'filename', 'editor', 'parent']
    const filteredPosts = posts.filter(p => fields.some(field => p[field].toString().toLowerCase().includes(search.toLowerCase())))

    const fetchPosts = () => {
        fetch("http://82.142.87.102/extAPI/api/icon/read.php?parent=2", {referrerPolicy: "unsafe-url" })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }


    useEffect(() => {
        fetchPosts()
    }, []);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }

    const onSearchAll = () => {
        fetchPosts()
    }

    const onSearchEnergie = () => {
        const filteredPosts = posts.filter(p => p.name.includes('Energie'))
        setPosts(filteredPosts)
    }


    return (
        <>
            <Search value={search} onChange={onChangeHandler} onSearchAll={onSearchAll}
                    onSearchEnergie={onSearchEnergie}/>
            <div className="icon-container">
                {filteredPosts.map((post) => {
                    return (
                        <div key={post.id} data-id={post.id}>
                            <Stack direction="horizontal">
                                <div className="post-card">
                                    <img src={`https://eletak.oresi.cz/files/Icons/CZ/${post.filename}`}
                                         className="post-body"
                                         alt={"#"}/>
                                    <h5 className="post-title" onClick={() => props.addBox(post)}>{post.name}</h5>
                                    <div className="button">
                                        <div className="delete-btn">Delete</div>
                                    </div>
                                    <button onClick={props.handleClose}>X</button>
                                </div>
                            </Stack>
                        </div>
                    );
                })}
            </div>
        </>)
}

export default Gallery