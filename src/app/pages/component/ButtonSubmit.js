import React from "react"
import {Button, message} from "antd";
import {Link} from "react-router-dom";

function SubmitButton(props) {
    const error = () => {
        message.error('Fitur belum tersedia');
    };

    return (
        <Link to={props.linkTo}>
            <Button
                className="mt-4"
                style={{
                    background: "#5CB85F",
                    borderRadius: 4,
                    color: "white",
                    fontWeight: 700,
                    width: "100%",
                    height: 48
                }}
                onClick={props.onClick ? error : ""}
            >
                {props.text}
            </Button>
        </Link>
    )
}

SubmitButton.defaultProps = {
    linkTo: "",
    onclick: false
};

export default SubmitButton