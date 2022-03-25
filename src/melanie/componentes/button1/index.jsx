import "./style.css";

const Button1 = (props) => {
  return (
    <button className="btn-basic">
      <p className="btn-text">
        {props.name}
      </p>
    </button>
  );
};

export default Button1;
