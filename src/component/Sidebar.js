import React, {useState} from "react";
import {
    FaUserAlt,
    FaRegChartBar,
    FaBars,
} from "react-icons/fa";
import {NavLink} from "react-router-dom";

const Sidebar = ({children}) => {
    const menuItem = [
        {
            path:"/",
            name:"Candidate List",
            icon:<FaUserAlt/>
        },
        {
            path:"/candidateRecruitmentForm",
            name:"Add Candidate",
            icon:<FaRegChartBar/>
        },
        {
            path:"/candidateRecruitmentRegion",
            name:"Region",
            icon:<FaUserAlt/>
        },
        {
            path:"/project",
            name:"Add Region",
            icon:<FaRegChartBar/>
        },
    ]
    return(
       <div className="view">

            <div className="sidebar">
                <div className="mt-3"></div>
                {
                    menuItem.map((item) => (
                        <NavLink to={item.path}  className="link" activeclassName="active">
                            <div className='icon'>{item.icon}</div>
                            <div className='link_text'>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <div className="main_page">{children}</div>
       </div>
    );
}
export default Sidebar;