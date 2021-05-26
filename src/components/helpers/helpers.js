import { FieldInputs } from "./renderedInputs";

export const add = (parent, selected, array, handleChange) => {
  const ifTrue = parent.filter((item) => item === selected).length === 0;
  if (ifTrue) {
    parent.push(
      <FieldInputs
        className={"checkbox-dark"}
        key={array}
        onChange={handleChange}
        array={array}
      />
    );
  }
};

export const show = (array, handleChange) => {
  return (
    <FieldInputs
      className={"checkbox-dark"}
      key={array}
      onChange={handleChange}
      array={array}
    />
  );
};

export const handleStatesChange = (e, update) => {
  const { value } = e.target;
  console.log(value);

  this.setState({
    [update]: [update].concat(value),
  });
  console.log(update);
};
