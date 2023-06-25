import { CgProfile } from "react-icons/cg";
import "./index.css";
const ActionItem = (props) => {
  const { each } = props;
  const { date1, time1, action1 } = each;

  return (
    <li className="listStyle1">
      <CgProfile className="icon1" />

      <div>
        <p>{action1}</p>
        <p>
          `{date1} at {time1}`
        </p>
      </div>
    </li>
  );
};
export default ActionItem;
