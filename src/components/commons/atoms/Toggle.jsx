/**
 * Toggle button component
 * @param {element} label - JSX element
 * @param {callback} onClick - callback function
 * @param {boolean} active - active state
 * @param {string} className - className
 * @returns {JSX.Element} - Toggle button component
 * @constructor
 */
const Toggle = ({ label, onClick, active, className }) => (
  <div className={className} onClick={onClick}>
    {label}
  </div>
);

export default Toggle;
