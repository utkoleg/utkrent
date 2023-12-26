import React from 'react';

function AccessDenied(props) {
    return (
        <div style={{
            height: "100vh",
            color: "red",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center"
        }}>
            <h1>ACCESS DENIED</h1>
        </div>
    );
}

export default AccessDenied;