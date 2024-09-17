import Select from "react-select";

const customStyles = {
  container: (provided, state) => ({
    ...provided,
  }),
  control: (provided, state) => ({
    ...provided,
    borderRadius: "0.5rem",
    boxShadow: state.isFocused ? "0 0 8px rgba(99, 102, 241, 0.5)" : "none",
  }),
};

const CustomSelect = (props) => {
  return (
    <div
      onContextMenu={() => {
        return false;
      }}
    >
      <Select
        {...props}
        menuPortalTarget={document.body}
        styles={customStyles}
      />
    </div>
  );
};
export default CustomSelect;
