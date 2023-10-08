import React, { useState } from "react";
// import Icon from "../Images/Icon.svg";
import Icon from "../assets/react.svg"
// import Profile from "../Images/profile.png";
import Dashboard from "../Images/dashboard.svg";
import Transactions from "../Images/transactions.svg";
import Performance from "../Images/performance.svg";
import News from "../Images/news.svg";
import Settings from "../Images/settings.svg";
import Support from "../Images/support.svg";
import { useLocation, Link } from "react-router-dom";
// import dashbord from "../pages/Dashboard"

const Sidebar = () => {
    const location = useLocation();

    const [closeMenu] = useState(false);


    return (
        <div className={closeMenu === false ? "sidebar" : "sidebar active"}>
            <div
                className={
                    closeMenu === false
                        ? "logoContainer"
                        : "logoContainer active"
                }
            >
                <img src={Icon} alt="icon" className="logo" />
                <h2 className="title">AABranch</h2>
            </div>
            <div><hr /><hr /></div>
            {/* <div
                className={
                    closeMenu === false
                        ? "burgerContainer"
                        : "burgerContainer active"
                }
            >
                <div
                    className="burgerTrigger"
                    onClick={() => {
                        handleCloseMenu();
                    }}
                ></div>
                <div className="burgerMenu"></div>
            </div> */}
            {/* <div
                className={
                    closeMenu === false
                        ? "profileContainer"
                        : "profileContainer active"
                }
            >
                <img src={Profile} alt="profile" className="profile" />
                <div className="profileContents">
                    <p className="name">Hello, John👋</p>
                    <p>johnsmith@gmail.com</p>
                </div>
            </div> */}
            <div
                className={
                    closeMenu === false
                        ? "contentsContainer"
                        : "contentsContainer active"
                }
            >
                <ul>
                    <li className={location.pathname === "/" ? "active" : ""}>
                        <img src={Dashboard} alt="dashboard" />
                        <Link to="/">dashboard</Link>

                    </li>
                    <li
                        className={
                            location.pathname === "/transactions"
                                ? "active"
                                : ""
                        }
                    >
                        <img src={Transactions} alt="transactions" />
                        <Link to="/transactions">transactions</Link>
                    </li>
                    <li
                        className={
                            location.pathname === "/performance" ? "active" : ""
                        }
                    >
                        <img src={Performance} alt="Performance" />
                        <Link to="/performance">performance</Link>
                    </li>
                    <li
                        className={
                            location.pathname === "/news" ? "active" : ""
                        }
                    >
                        <img src={News} alt="News" />
                        <Link to="/news">news</Link>
                    </li>
                    <li
                        className={
                            location.pathname === "/settings" ? "active" : ""
                        }
                    >
                        <img src={Settings} alt="Settings" />
                        <Link to="/settings">settings</Link>
                    </li>
                    <li
                        className={
                            location.pathname === "/support" ? "active" : ""
                        }
                    >
                        <img src={Support} alt="Support" />
                        <Link to="/support">support</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
