import React from "react";
import { BrowserRouter as Rota, Route, Routes, Link } from "react-router-dom";

export default function Home(){
  return (
    <>
      <div id="container-home">
        <div id="container-logo">
          <div id="logo"></div>
          <div id="lista-cabecalho">
            <ul className="lista">
              <li>
                {" "}
                <Link to="#">ESPECIALIDADES</Link>
              </li>
              <li>
                {" "}
                <Link to="#">CONTATO</Link>
              </li>
              <li>
                {" "}
                <Link to="#">DIRETORIA/EQUIPE</Link>
              </li>
            </ul>
          </div>

          <div id="button-cl">
            <div className="botao-login">
              <button
                className="botoescabecalho"
                type="submit"
                id="botao2-login"
              >
                <Link to="./Login" className="linkcl">
                  {" "}
                  <h2>LOGIN</h2>
                </Link>
              </button>
            </div>

            <div className="botao-cadastro">
              <button
                className="botoescabecalho"
                type="submit"
                id="botao-cadastro"
              >
                {" "}
                <Link to="#" className="linkcl">
                  <h2>CADASTRO</h2>
                </Link>{" "}
              </button>
            </div>
          </div>
        </div>{" "}
        {/*Final da div cabeçalho */}

      </div>{" "}
      {/*Final da div que contém tudo */}
    </>
  );
}