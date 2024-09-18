// parentNode.js

export const LayoutNode = ({ id, header = "Random", components, children }) => {
  const isCustomHeaderPresent =
    components.Header && components.Header() ? true : false;
  console.log("components. handle is: ", components.Handles);
  return (
    <div
      id={id}
      key={id}
      style={{
        width: 300,
        height: "100%",
        borderRadius: "0.5rem 0.5rem 0 0",
        backdropFilter: "blur(1px) saturate(45%)",
        background: "rgba(187, 160, 255, 0.2)",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <components.Handles />
      {isCustomHeaderPresent ? (
        <components.Header />
      ) : (
        <div
          style={{
            textAlign: "left",
            fontWeight: 700,
            padding: "0.4rem",
            position: "relative",
            display: "flex",
            alignItems: "flex-start",
            paddingBottom: "0.15rem",
          }}
        >
          {header}
        </div>
      )}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.5)",
          borderRadius: "0 0 0.5rem 0.5rem",
          maxHeight: 300,
          overflowY: "auto",
          padding: "0.4rem",
          scrollbarWidth: "none",
        }}
      >
        {children}
      </div>
    </div>
  );
};
