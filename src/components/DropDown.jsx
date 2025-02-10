import PropTypes from "prop-types";
import './Dropdown.css';
const DropDown = ({options, onSelect}) => {

  return (
    <select onChange={(e) => onSelect(e.target.value)}>
        <option>Choose a random city</option>
        {options.map((city, index) => (
            <option key={index} value={city}>
                {city}
            </option>
        ))};
    </select>
  );
};

DropDown.propTypes = {
    options: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default DropDown