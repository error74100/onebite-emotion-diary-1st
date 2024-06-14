import './Header.css';

function Header({ leftchild, title, rightchild }) {
  return (
    <div className="Header">
      <div className="left_child">{leftchild}</div>
      <div className="title">{title}</div>
      <div className="right_child">{rightchild}</div>
    </div>
  );
}

export default Header;
