import React, {ChangeEvent, useEffect, useState} from 'react';
import './index.css'
import Button from "react-bootstrap/Button";
import Search from "./Search";
import Post from "./Post";


export type GalleryType = {

        name:string
        editor: string
        filename: string
        id: string
        parent: string

}

export type GalleryPropsType = {
    handleClose: () => void
    addBox: (box: any) => void


}
const Gallery = (props: GalleryPropsType) => {

    const [posts, setPosts] = useState<GalleryType[]>([])
    const [search, setSearch] = useState('')
    const fields = ['id', 'name', 'filename', 'editor', 'parent']
    const filteredPosts = posts.filter(p => fields.some(field => p[field as keyof GalleryType].toString().toLowerCase().includes(search.toLowerCase())))
    console.log('filtered', filteredPosts)
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
                       <Post post={post} addBox={props.addBox}  />
                    );
                })}
            </div>
        </>)}

    export default Gallery