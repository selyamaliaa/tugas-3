import React from "react";
import ReactDOM from "react-dom/client";

function Welcome(p) {
    return <h1>Selamat Datang {p.nama}</h1>
}

let user="Sely";

function App(){
    if(user==null){
        return <button>Login</button>
    }else{
        return <Welcome nama={user}/>
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(App());