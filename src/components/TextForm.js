import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import sha256 from 'js-sha256'

function TextControlsExample(props) {
    const [text, setText] = useState("");
    const updateText = (event) => {
        setText(event.target.value);
    };
    const updateToLowerCase = (event) => {
        setText(text.toLowerCase());
    };
    const updateToUpperCase = (event) => {
        setText(text.toUpperCase());
    };
    const encodeToBase64 = () =>{
        setText(window.btoa(text));
    }
    const decodeToBase64 = () =>{
        setText(window.atob(text));
    }
    const encodeTosha256 = () =>{
        setText(sha256(text));
    }

    return (
        <Form className="container">
            <Form.Group
                className="mb-3 my-4"
                controlId="exampleForm.ControlTextarea1"
            >
                <h3>{props.disc}</h3>
                <Form.Control
                    as="textarea"
                    rows={8}
                    value={text}
                    onChange={updateText}
                />
                <Button variant="primary" onClick={updateToUpperCase} className="mx-2 my-2">
                    Convert To Uppper Case
                </Button>
                <Button variant="primary" onClick={updateToLowerCase} className="my-2 my-2">
                    Convert To Lower Case
                </Button>
                <Button variant="primary" onClick={encodeToBase64} className="mx-2 my-2">
                    Encode To base64
                </Button>
                <Button variant="primary" onClick={decodeToBase64} className="mx-2 my-2 ">
                    Decode From base64
                </Button>
                <Button variant="primary" onClick={encodeTosha256} className="mx-2 my-2">
                    Enocde To sha256
                </Button>
            </Form.Group>
        </Form>
    );
}

TextControlsExample.propTypes = { disc: PropTypes.string };
export default TextControlsExample;
