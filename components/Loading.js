import styled from "styled-components";

function Loading() {
    return (
        <center style={{ display: "grid", placeItems: "center", height: '100vh' }}>
            <div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2042px-WhatsApp.svg.png"
                    alt=""
                    height={200}
                    style={{marginBottom: 10}}
                />
                <LoadIcon />
            </div>
        </center>
    )
}

export default Loading

const LoadIcon = styled.div`
    border: 6px solid #ccc;
    width: 100px;
    height: 100px;
    border-radius:50%;
    border-top-color: #3cbc28;
    border-left-color: #3cbc28;
    animation: spin 1s infinite ease-in-out;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100%{transform: rotate(720deg)}
    }

`