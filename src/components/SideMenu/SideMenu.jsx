import MenuList from "./MenuList";
import menus from "./data";
import "./SideMenu.css";

const SideMenu = () => {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
};

export default SideMenu;
