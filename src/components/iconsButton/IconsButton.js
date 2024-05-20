import "./IconsButton.css";
import {Link} from "react-router-dom";

function iconsButton(props) {
    return (
        <Link to={props.url}>
            <div className="left-menu-icons">
                <img className="gray-icon" src={props.picUrl} alt={props.iconName} />
                <div className="menu-icons-text">{props.iconName}</div>
            </div>
        </Link>
    );
}

export default iconsButton;

