 const Fields = ({ name, id, label, value, type,placeholder, onChange, accept, checked }) => {
   return (
  <div className="field">
  <label htmlFor={label}>{label}</label>
  <input
  id={id}
  name={name}
  type={type}
  value={value}
  onChange={onChange}
  placeholder={placeholder}
  accept={accept}
  // checked={checked}
  />
  {/* {error && touched && <span className="ui red basic label">{error}</span>} */}
  </div>
   )
}

export default Fields