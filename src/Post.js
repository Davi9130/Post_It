import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { Switch, Table } from "antd";
import { FileDoneOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { PostContext } from "./postStorage";

import { lightTheme, darkTheme } from "./Themes";

function Post() {
  const global = React.useContext(PostContext);

  const [theme, setTheme] = React.useState(true);
  function onChange(checked) {
    setTheme(!theme);
  }

  const columns = [
    { title: "Titulo", dataIndex: "titulo", key: "id" },
    { title: "Data", dataIndex: "data", key: "id" },
    {
      title: "Deletar",
      dataIndex: "",
      key: "x",
      render: () => <p>Excluir</p>,
    },
  ];

  const data = JSON.parse(localStorage.getItem("lembrete"));

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
      <Table
        size="middle"
        style={{ width: "800px", margin: "0 auto" }}
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.texto}</p>
          ),
          rowExpandable: (record) => record.texto !== "",
        }}
        dataSource={data}
      />
      ,
      <div className="link_post">
        <Link to="/">Ir Para Home </Link>
        <FileDoneOutlined className="ico_post" />
      </div>
    </ThemeProvider>
  );
}

export default Post;
