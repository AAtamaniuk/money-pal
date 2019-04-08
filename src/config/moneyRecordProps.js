import PropTypes from "prop-types";
import moment from "moment";
import categories from "./categories";

const moneyRecordProps = {
  id: PropTypes.string.isRequired,
  category: PropTypes.oneOf(categories).isRequired,
  description: PropTypes.string.isRequired,
  createdAt: PropTypes.instanceOf(moment).isRequired,
  amount: PropTypes.number.isRequired
};

export default moneyRecordProps;
