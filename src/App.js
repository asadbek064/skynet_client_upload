import React from "react";
import DragUploader from "./components/DragUploader";
import HNSLookup from "./components/HNSLookup";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./App.css";

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ backgroundColor: "#f4f4f4" }}>
        <Content style={{ margin: "24px 16px 0" }}>
          <Switch>
            <Route path="/upload">
              <DragUploader />
            </Route>
            <Route path="/hns-lookup">
              <HNSLookup />
            </Route>
            <Route path="/">
              <h4>
                <Link to="upload">File Upload</Link>
                <br />
                <Link to="hns-lookup">HNS Lookup</Link>
              </h4>
            </Route>
          </Switch>
          {/* </div> */}
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
