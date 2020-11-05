import React from "react";
import "./App.css";
import { Modal, Switch } from "antd";
import { PlusCircleTwoTone, FileDoneOutlined } from "@ant-design/icons";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { Link } from "react-router-dom";
import { PostContext } from "./postStorage";

import { lightTheme, darkTheme } from "./Themes";

function Home() {
  const global = React.useContext(PostContext);
  const [visible, setModalVisible] = React.useState(false);
  const [theme, setTheme] = React.useState(true);
  const [data, setData] = React.useState(null);
  const [titulo, setTitulo] = React.useState("");
  const [texto, setTexto] = React.useState("");

  const lembrete = global.lembrete;
  const setLembrete = global.setLembrete;

  function onChange(checked) {
    setTheme(!theme);
  }

  setInterval(() => setData(new Date().toLocaleString()), 1000);

  const saveTexto = (event) => {
    if (event.target.id === "input") {
      setTitulo(event.target.value);
    } else {
      setTexto(event.target.value);
    }
  };

  const saveModal = () => {
    if (lembrete === "") {
      if (titulo && texto !== "") {
        setLembrete([
          { titulo: titulo, texto: texto, id: lembrete.length + 1, data: data },
        ]);
        setModalVisible(false);
        setTexto("");
        setTitulo("");
      } else {
        alert("Todos campos são requeridos ");
      }
    } else {
      if (titulo && texto !== "") {
        setLembrete([
          ...lembrete,
          { titulo: titulo, texto: texto, id: lembrete.length + 1, data: data },
        ]);
        setModalVisible(false);
        setTexto("");
        setTitulo("");
      } else {
        alert("Todos campos são requeridos ");
      }
    }
  };

  const cancelModal = () => {
    setModalVisible(false);
    setTexto("");
    setTitulo("");
  };

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Switch
        checkedChildren="Light"
        unCheckedChildren="Dark"
        className="switch_dark"
        defaultChecked
        onChange={onChange}
      />
      <div className="main_div">
        <div>
          <h2 className="titulo_inicio">
            ADICIONE SEUS LEMBRETES AQUI <br />
            👇
          </h2>
        </div>
        <div>
          <PlusCircleTwoTone
            className="ico_center"
            onClick={() => setModalVisible(true)}
          />
        </div>
        <div className="modal">
          <Modal
            title={<h3>Adiconar Lembrete </h3>}
            centered
            visible={visible}
            onOk={saveModal}
            onCancel={cancelModal}
            width={600}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <input
                onChange={saveTexto}
                id="input"
                value={titulo}
                placeholder="Titulo"
                style={{ marginBottom: "5px" }}
                type="text"
              ></input>
              <p>{data}</p>
            </div>

            <textarea
              onChange={saveTexto}
              value={texto}
              style={{ height: "300px", width: "550px" }}
              name="subject"
              id="textarea"
              placeholder="Digite Aqui o que quer lembrar"
            ></textarea>
          </Modal>
        </div>
      </div>
      <div className="link_post">
        <Link to="/post">Ir Para Lembretes </Link>

        <FileDoneOutlined className="ico_post" />
      </div>
    </ThemeProvider>
  );
}

export default Home;
