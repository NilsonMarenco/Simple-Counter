
import React from "react";
import './Main.css';
import Tabs from './Tabs';

const Main = () => {
      return (<>
            <div className="app__container">
                  <div className="header__container">
                        <h1>Financial Roadmap</h1>
                  </div>
                  <Tabs/>
            </div>
      </>)
};

export default Main;