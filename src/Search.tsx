import React, {ChangeEvent} from 'react';
import {Form, Stack} from "react-bootstrap";

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

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
                <DropdownButton id="dropdown-basic-button" title="Vybrat">
                    <Dropdown.Item href="#/action-1" onClick={onSearchAll}>Vše</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={onSearchEnergie}>Energie</Dropdown.Item>
                </DropdownButton>
            </Stack>
        </div>
    );
};

export default Search;