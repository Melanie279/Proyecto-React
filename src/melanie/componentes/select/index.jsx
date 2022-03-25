import "./style.css"

const Select = (props) => {
  console.log(props.data)
  return (
    <form >
      <fieldset>
        <legend className="legend-select">{props.name}</legend>
            <select class="select-css">
                <option>
                  {props.nameSelect}
                </option>
                {
                  props.data.agencias.map((item,index) =>
                  <option>{item.name}</option>)
                }
            </select>
      </fieldset>
    </form>
  );
};

export default Select;
