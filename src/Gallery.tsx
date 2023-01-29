import React, {ChangeEvent, useEffect, useState} from 'react';
import './index.css'
import {Stack} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Search from "./Search";


export type GalleryType = {
    [key: string]: string
}

export type GalleryPropsType = {
    handleClose: () => void
    addBox: (box: any) => void
}
const Gallery = (props: GalleryPropsType) => {

    const [posts, setPosts] = useState<GalleryType[]>([])
    const [search, setSearch] = useState('')
    const fields = ['id', 'name', 'filename', 'editor', 'parent']
    const filteredPosts = posts.filter(p => fields.some(field => p[field].toString().toLowerCase().includes(search.toLowerCase())))

    const fetchPosts = () => {
        fetch("http://82.142.87.102/extAPI/api/icon/read.php?parent=2")
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
            <div className="button">
                <Button variant="outline-primary" onClick={props.handleClose}>X</Button>
            </div>
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
                                </div>
                            </Stack>
                        </div>
                    );
                })}
            </div>
        </>)}

    export default Gallery