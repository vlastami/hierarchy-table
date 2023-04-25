import React from "react";

const RemoveButton = ({ onClick }) => (
    <button className="remove-button" onClick={onClick}>
        &#x2715;
    </button>
);

export default RemoveButton;