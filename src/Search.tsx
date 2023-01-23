import React, {ChangeEvent} from 'react';
import {Form, Stack} from "react-bootstrap";
import Button from "react-bootstrap/Button";

type PropsType = {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onSearchAll: () => void
    onSearchEnergie: () => void
}
const Search = ({value, onChange, onSearchAll, onSearchEnergie}: PropsType) => {
    return (
        <div className="posts-container">
            <Stack direction="horizontal" gap={3}>
                <Form.Control className="me-auto" placeholder="Hledat..." value={value} onChange={onChange}/>
                <Button variant="secondary" onClick={onSearchAll}>Vše</Button>
                <div className="vr"/>
                <Button variant="secondary" onClick={onSearchEnergie}>Energie</Button>
            </Stack>
        </div>
    );
};

export default Search;