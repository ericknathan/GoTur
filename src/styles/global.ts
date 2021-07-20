import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

img {
    max-height: 100%;
}

a {
    text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
    color: #295C57;
}

.bg {
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 5;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    form {
        display: grid;
        gap: 10px;
        input {
            width: 100%;
            border-radius: 15px;
            border: none;
            border: 1px solid #295C57;
            height: 45px;
            padding: 10px;
        }
    }
}

`