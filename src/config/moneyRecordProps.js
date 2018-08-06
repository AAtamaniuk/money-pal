import PropTypes from "prop-types";
import categories from "./categories";

const moneyRecordProps = {
  id: PropTypes.string.isRequired,
  category: PropTypes.oneOf(categories).isRequired,
  description: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
};

export default moneyRecordProps;
