import React from "react";
import { Form } from 'react-bootstrap';

export default function SelectNumberOfPages({ setvalue }:any) {
    return (
        <>
            <Form.Select aria-label="Default select example">
                <option onClick={() => { setvalue(10) }}>Show 10 results</option>
                <option onClick={() => { setvalue(20) }}>Show 20 results</option>
                <option onClick={() => { setvalue(50) }}>Show 50 results</option>
            </Form.Select>
        </>
    )
}