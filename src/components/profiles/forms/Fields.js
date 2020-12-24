 const Fields = ({ name, id, label, value, type,placeholder, onChange, accept }) => {
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
  />
  </div>
   )
}

export const RadioInput = ({name, id, type, label, value, placeholder, onChange}) => {
  return (
    <div className="field">
    <input type={type} tabIndex="0" className="hidden" id={id} value={value} name={name} placeholder={placeholder} onChange={onChange}/>
    <label htmlFor={label}>{label}</label>
  </div>
    )
}

export default Fields