
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs"; // Import BsPlus from react-icons/bs
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <BsPlus className="fs-4 mx-2" /> {/* Added mx-2 for spacing between icons */}
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
