
import React, { useState } from "react";

export function Login() {
  const [email, setemail] = useState("");
  const [senha, setsenha] = useState("");

  return (
    <>
      <div id="maioral">
        <div id="container" className="container">
          <div id="logo-forms">
            {/* Div logo e forms */}
            <div id="logo-hovet">{/* Div logo */}</div>
            <div id="form-login">
              {/* Div forms */}
              <h1> SEJA BEM-VINDO!</h1>
              <form
                onSubmit={() => alert("EMAIL: " + email + " SENHA: " + senha)}
                action=""
              >
                <div id="campo-email">
                  <label id="label" htmlFor="email">
                    {" "}
                    E-mail ou CPF
                  </label>
                  <br />
                  <input
                    id="email"
                    type="text"
                    value={email}
                    className="place"
                    placeholder="Digite seu E-mail ou CPF"
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  />
                </div>

                <div id="campo-senha">
                  <label id="label" htmlFor="senha">
                    {" "}
                    Senha
                  </label>
                  <br />
                  <input
                    id="senha"
                    type="password"
                    value={senha}
                    className="place"
                    placeholder="Digite sua senha"
                    onChange={(e) => {
                      setsenha(e.target.value);
                    }}
                  />
                  <div id="icon"></div>
                </div>

                <h4>ou</h4>

                <div id="campo-google">
                  {" "}
                  <button type="submit" id="botao-google">
                    Sign in with Google
                  </button>
                </div>

                <div id="campo-submit">
                  {" "}
                  <button type="submit" id="botao-login">
                    {" "}
                    <h2>Entrar</h2>{" "}
                  </button>
                </div>

                <h3>
                  Ainda não tem conta? <span> Crie uma agora!</span>
                </h3>

              </form>
            </div>{" "}
            {/* Div forms */}
          </div>
          {/* Div logo e forms */}
        </div>
        {/* Final da div principal */}
      </div>
      {/* Final da div maioral */}
    </>
  );
}

export default Login;


