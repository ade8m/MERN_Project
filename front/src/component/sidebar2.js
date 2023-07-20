import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




export const SideBarC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleCollapse = (event) => {
      event.preventDefault();
      const target = event.currentTarget;
      const parent = target.parentElement;
      const sublist = parent.querySelector('.collapse');
    
      if (sublist) {
        const isCollapsed = sublist.classList.contains('show');
        if (isCollapsed) {
          sublist.classList.remove('show');
        } else {
          sublist.classList.add('show');
        }
        parent.classList.toggle('active');
      }
    };
    
    const dropdownToggleLinks = document.querySelectorAll('.dropdown-toggle');
    dropdownToggleLinks.forEach((link) => {
      link.addEventListener('click', handleCollapse);
    });
    const navbarDropdownToggleLinks = document.querySelectorAll('#contente .dropdown-toggle');
  navbarDropdownToggleLinks.forEach((link) => {
    link.addEventListener('click', handleCollapse);
  });

    return () => {
      // Clean up the event listeners when the component is unmounted
      dropdownToggleLinks.forEach((link) => {
        link.removeEventListener('click', handleCollapse);
      });
      navbarDropdownToggleLinks.forEach((link) => {
        link.removeEventListener('click', handleCollapse);
      });
    };
  }, []);

  return (
    <div>
      <nav id="sidebar">
        <div className="sidebar_blog_1">
 
          <div className="sidebar-header">
            <div className="logo_section">
            <div className="center">
                        <img width="40" src="images/login.jpeg" alt="#" />
                     </div>
            </div>         
          </div>
          <div className="sidebar_user_info">
            <div className="icon_setting"></div>
            <div className="user_profle_side">
              <div className="user_img">
                <img className="img-responsive" src="images/layout_img/user_img.jpg" alt="#" />
              </div>
              <div className="user_info">
                <h6>John David</h6>
                <p>
                  <span className="online_animation"></span> Online
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar_blog_2">
          <h4>Plateform de Location</h4>
          <ul className="list-unstyled components">
            <li className="active">
              <a href="#dashboard" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                <i className="fa fa-dashboard yellow_color"></i> <span>Paramétre</span>
              </a>
              <ul className="collapse list-unstyled" id="dashboard">
                <li>
                  <a href="dashboard.html"> <span>Default Dashboard</span></a>
                </li>
                <li>
                  <a href="dashboard_2.html"> <span>Dashboard style 2</span></a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/societe">
                <i className="fa fa-clock-o orange_color"></i> <span>Société</span>
              </Link>
            </li>
            <li>
              <a href="#element" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                <i className="fa fa-diamond purple_color"></i> <span>Elements</span>
              </a>
              <ul className="collapse list-unstyled" id="element">
                <li>
                  <Link to="/voiture">
                    <span>voiture</span>
                  </Link>
                </li>
                <li>
                  <Link to="/facture">
                    <span>Facture</span>
                  </Link>
                </li>
                <li>
                  <Link to="/Contrat">
                    <span>Contrat</span>
                  </Link>
                </li>
              </ul>
            </li>          
                   
          </ul>
        </div>
      </nav>
      <div id="contente">
        <div className="topbar">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="full">
            <button type="button" id="sidebarCollapse" className="sidebar_toggle"><i className="fa fa-bars"></i></button>
              <div className="logo_section">
                <a href="index.html">
                  <img className="img-responsive" src="images/logo/logo.png" alt="#" />
                </a>
              </div>
              <div className="right_topbar">
                <div className="icon_info">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="fa fa-bell-o"></i>
                        <span className="badge">2</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa fa-question-circle"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa fa-envelope-o"></i>
                        <span className="badge">3</span>
                      </Link>
                    </li>
                  </ul>
                  <ul className="user_profile_dd">
                    <li>
                      <Link className="dropdown-toggle" data-toggle="dropdown">
                        <img className="img-responsive rounded-circle" src="images/layout_img/user_img.jpg" alt="#" />
                        <span className="name_user">John David</span>
                      </Link>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="profile.html">
                          My Profile
                        </a>
                        <a className="dropdown-item" href="settings.html">
                          Settings
                        </a>
                        <a className="dropdown-item" href="help.html">
                          Help
                        </a>
                        <a className="dropdown-item" href="logout">
                          <span>Log Out</span><i className="fa fa-sign-out"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideBarC;
