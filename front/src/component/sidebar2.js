import React,{useEffect,useState} from 'react';
import { Link} from 'react-router-dom';


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

     
      const isCollapsed = sublist.classList.contains('show');
      if (isCollapsed) {
        sublist.classList.remove('show');
      } else {
        sublist.classList.add('show');
      }
      parent.classList.toggle('active');
    };


    const dropdownToggleLinks = document.querySelectorAll('.dropdown-toggle');
    dropdownToggleLinks.forEach((link) => {
      link.addEventListener('click', handleCollapse);
    });

    return () => {
      // Clean up the event listeners when the component is unmounted
      dropdownToggleLinks.forEach((link) => {
        link.removeEventListener('click', handleCollapse);
      });
    };
  }, []);

  return (
    <nav id="sidebar"  className={sidebarOpen ? 'active' : ''}>
      <div className="sidebar_blog_1">
        <div className="sidebar-header">
          <div className="logo_section">
            <img className="logo_icon img-responsive" src="images/logo/logo_icon.png" alt="#" />
          </div>
          <button type="button" id="sidebarCollapse" className="sidebar_toggle"  onClick={handleSidebarToggle}>
            <i className="fa fa-bars"></i>
         </button>
        </div>
        <div className="sidebar_user_info">
          <div className="icon_setting"></div>
          <div className="user_profle_side">
            <div className="user_img"><img className="img-responsive" src="images/layout_img/user_img.jpg" alt="#" /></div>
            <div className="user_info">
              <h6>John David</h6>
              <p><span className="online_animation"></span> Online</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar_blog_2">
        <h4>General</h4>
        <ul className="list-unstyled components">
          <li className="active">
            <a href="#dashboard" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fa fa-dashboard yellow_color"></i> <span>Paramétre</span></a>
            <ul className="collapse list-unstyled" id="dashboard">
              <li>
                <a href="dashboard.html"> <span>Default Dashboard</span></a>
              </li>
              <li>
                <a href="dashboard_2.html"> <span>Dashboard style 2</span></a>
              </li>
            </ul>
          </li>
          <li>  <Link to="/societe">
            <i className="fa fa-clock-o orange_color"></i> <span>Société</span>
                </Link></li>
          <li>
            <a href="#element" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fa fa-diamond purple_color"></i> <span>Elements</span></a>
            <ul className="collapse list-unstyled" id="element">
              <li>  <Link to="/voiture"><span>voiture</span></Link></li>
              <li><Link to="/Facture"><span>Facture</span></Link></li>
              <li><Link to="/Contrat"><span>list</span></Link></li>
            </ul>
          </li>
          <li><a href="tables.html"><i className="fa fa-table purple_color2"></i> <span>Tables</span></a></li>
          <li>
            <a href="#apps" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fa fa-object-group blue2_color"></i> <span>Apps</span></a>
            <ul className="collapse list-unstyled" id="apps">
              <li><a href="email.html"> <span>Email</span></a></li>
              <li><a href="calendar.html"> <span>Calendar</span></a></li>
              <li><a href="media_gallery.html"><span>Media Gallery</span></a></li>
            </ul>
          </li>
          <li><a href="price.html"><i className="fa fa-briefcase blue1_color"></i> <span>Pricing Tables</span></a></li>
          <li>
            <a href="contact.html">
              <i className="fa fa-paper-plane red_color"></i> <span>Contact</span></a>
          </li>
          <li className="active">
            <a href="#additional_page" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fa fa-clone yellow_color"></i> <span>Additional Pages</span></a>
            <ul className="collapse list-unstyled" id="additional_page">
              <li>
                <a href="profile.html"> <span>Profile</span></a>
              </li>
              <li>
                <a href="project.html"><span>Projects</span></a>
              </li>
              <li>
                <a href="login.html"><span>Login</span></a>
              </li>
              <li>
                <a href="404_error.html"><span>404 Error</span></a>
              </li>
            </ul>
          </li>
          <li><a href="map.html"><i className="fa fa-map purple_color2"></i> <span>Map</span></a></li>
          <li><a href="charts.html"><i className="fa fa-bar-chart-o green_color"></i> <span>Charts</span></a></li>
          <li><a href="settings.html"><i className="fa fa-cog yellow_color"></i> <span>Settings</span></a></li>
        </ul>
      </div>
     </nav>
  );
};

export default SideBarC;
