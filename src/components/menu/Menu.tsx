import "./menu.scss"
import {Link} from "react-router-dom";
//import {menu} from "../../data";

export const menu = [
{
    id: 1,
    title: "MAIN",
    listItems: [
    {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "home.svg",
    },
    {
        id: 2,
        title: "Admin",
        path: "/users/1",
        icon: "user.svg",
    },
    ],
},
{
    id: 2,
    title: "LISTS",
    listItems: [
    {
        id: 1,
        title: "Users",
        path: "/Users",
        icon: "user.svg",
    },
    {
        id: 2,
        title: "Profile",
        path: "/Profile",
        icon: "product.svg",
    },
    {
        id: 3,
        title: "Notes",
        path: "/Note",
        icon: "note.svg",
    },
    ],
},
{
    id: 3,
    title: "GENERAL",
    listItems: [
    {
        id: 1,
        title: "Elements",
        path: "/Home",
        icon: "element.svg",
    },
    {
        id: 2,
        title: "Forms",
        path: "/Home",
        icon: "form.svg",
    },
    {
        id: 3,
        title: "Calendar",
        path: "/Calendar",
        icon: "calendar.svg",
    },
    ],
},
{
    id: 4,
    title: "MAINTENANCE",
    listItems: [
    {
        id: 1,
        title: "Settings",
        path: "/Home",
        icon: "setting.svg",
    },
    {
        id: 2,
        title: "Backups",
        path: "/Home",
        icon: "backup.svg",
    },
    ],
},
{
    id: 5,
    title: "ANALYTICS",
    listItems: [
    {
        id: 1,
        title: "Charts",
        path: "/Home",
        icon: "chart.svg",
    },
    {
        id: 2,
        title: "Logs",
        path: "/Home",
        icon: "log.svg",
    },
    ],
},
];

const Menu = () =>{
    return(
        <div className="menu">
            {menu.map((item)=>(
                <div className="item" key={item.id}>
                <span className="title">{item.title}</span>
                {item.listItems.map((listItem)=>(
                    <Link to={listItem.path} className="listItem" key={listItem.id}>
                    <img src={listItem.icon} alt=""/>
                    <span className="ListItemTitle">{listItem.title}</span>
                    </Link>
                ))} 
            </div>
            ))}
        </div>
    );
};

export default Menu;