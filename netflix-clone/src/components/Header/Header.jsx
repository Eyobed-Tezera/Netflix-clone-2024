import React from "react";
import "./header.css";
import NetflixLogo from "../../assets/images/NetflexLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { image2 } from "../../utils/image";
function Header() {
  return (
    <div>
      <div className="header_outlet_container">
        <div className="header_container">
          <div className="header_left">
            <ul>
              <li>
                <img src={NetflixLogo} alt="Netflix Logo" width="100" />
              </li>
              <li>Home</li>
              <li>TVshows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Browse by Language</li>
            </ul>
          </div>
          <div className="header_right">
            <ul>
              <li>
                <SearchIcon />
              </li>
              <li style={{marginTop:2}}>Kids</li>
              <li>
                <NotificationsNoneIcon />
              </li>
              <li>
                <img  style={{ paddingBottom:4}}src={image2} alt="profile" />{" "}
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
