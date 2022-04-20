import PropTypes from 'prop-types';
import Buttons from './Button.styled';

const Button = ({ id, onDelete }) => {
  return (
    <Buttons type="button" onClick={() => onDelete(id)}>
      Delete
    </Buttons>
  );
};

export default Button;
