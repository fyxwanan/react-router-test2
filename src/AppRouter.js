import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './pages/Index';
import './index.css';
import Video from './pages/Video';
import Workplace from './pages/Workplace';

let routerConfig = [
  { path: '/', title: '博客首页', exact: true, component: Index },
  { path: '/video', title: '视频教程', exact: false, component: Video },
  { path: '/workplace', title: '职场技能', exact: false, component: Workplace },
]

function AppRouter () {
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            {
              routerConfig.map((item) => {
                return <li><Link to={item.path}>{item.title}</Link></li>
              })
            }
          </ul>
        </div>
        <div className="rightNav">
          {
            routerConfig.map((item) => {
              return <Route path={item.path} exact={item.exact} component={item.component}></Route>
            })
          }
        </div>
      </div>
    </Router>
  )
}

export default AppRouter;