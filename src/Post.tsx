import React from 'react';
import {Stack} from "react-bootstrap";
import { GalleryType} from "./Gallery";

type PostType = {
    addBox: (box: any) => void
    post: GalleryType
}

const Post = (props: PostType) => {
    console.log('post', props.post)
    return (
        <div key={props.post.id} data-id={props.post.id}>
            <Stack direction="horizontal">
                <div className="post-card">
                    <img src={`https://eletak.oresi.cz/files/Icons/CZ/${ props.post.filename}`}
                         className="post-body"
                         alt={"ikona"}/>
                    <h5 className="post-title" onClick={() => props.addBox(props.post)}>{props.post.name}</h5>
                </div>
            </Stack>
        </div>
    );
};

export default Post;