import "./style.css";

const Container = (props) => {
  return (
    <div className="container-principal">
      {props.children}
    </div>
  );
};
export default Container;

