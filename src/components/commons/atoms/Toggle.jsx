/**
 * Toggle button component
 * @param {element} label
 * @param {callback} onClick
 * @param {boolean} active
 * @returns {JSX.Element}
 * @constructor
 */
const Toggle = ({ label , onClick, active }) => (
  <div
    className={
      "toggle-button flex h-[25px] w-[40px] cursor-pointer items-center justify-end rounded-full transition-all flex justify-center " +
      (active ? "bg-green-300" : "bg-gray-300")
    }
    onClick={onClick}
  >
    {label}
  </div>
);

export default Toggle;
