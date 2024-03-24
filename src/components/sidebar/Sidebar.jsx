import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import WebStoriesIcon from '@mui/icons-material/WebStories';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom"
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";


const Sidebar = () => {

  const{dispatch} = useContext(DarkModeContext)
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">Abhishek Deshmukh</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">Lists</p>
          <Link to="/users" style={{textDecoration:"none"}}>
          <li>
            <AccountCircleIcon className="icon"/>
            <span>Users</span>
          </li>
          </Link>
          <Link to="/products" style={{textDecoration:"none"}}>

          <li>
            <ProductionQuantityLimitsIcon className="icon"/>
            <span>Products</span>
          </li>
          </Link>
          <li>
            <BookmarkBorderIcon className="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <DeliveryDiningIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">Useful</p>

          <li>
            <QueryStatsIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <CircleNotificationsIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">Service</p>

          <li>
            <HealthAndSafetyIcon className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <WebStoriesIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <PsychologyIcon className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">User</p>

          <li>
            <Person2Icon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={() => dispatch({type:"DARK"})}></div>
      </div>
    </div>
  );
};

export default Sidebar;
