import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';

import { usePersistedState } from '../../../utils';

const SelectGroup = ({ list, handleChange }) => {
  const [theme, setTheme] = usePersistedState('@SF:selectedButton', list[0].name ? list[0].name : null);

  const handleClick = (event) => {
    setTheme(event.name);
    handleChange(event);
  };

  return (
    <>
      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="gender1" value={theme}>
          {list.map((item) => (
            <FormControlLabel key={item.name} onClick={() => handleClick(item)} value={item.name} control={<Radio />} label={`Tema ${item.name}`} />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
};

SelectGroup.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    theme: PropTypes.PropTypes.shape({}).isRequired,
  })).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SelectGroup;
