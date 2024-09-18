import { useEffect, useState } from "react";
import axios from "axios";
import { shallow } from "zustand/shallow";
import { useStore } from "./store";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

const parseUrl = "http://localhost:8000/pipelines/parse";

const SubmitButton = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const { setResult, setModalShow } = props;

  const { nodes, edges } = useStore(selector, shallow);

  useEffect(() => {
    if (nodes.length < 1) {
      setIsDisabled(true);
    } else setIsDisabled(false);
  });

  const buttonStyle = {
    padding: "12px 24px",
    fontSize: "16px",
    backgroundColor: "#6366F1",
    color: "white",
    border: "1px solid transparent",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "border-color 0.4s ease, opacity 0.3s ease",
    outline: "none",
    opacity: isClicked ? 0.5 : 1,
  };

  const focusStyle = {
    borderColor: "#6366F1",
  };

  const handleClick = async () => {
    const cleanNodes = nodes.map((node) => ({ id: node.id, type: node.type }));
    const cleanEdges = edges.map((edge) => ({
      source: edge.source,
      // sourceHandle: edge.sourceHandle,
      target: edge.target,
      // targetHandle: edge.targetHandle,
    }));
    setIsClicked(true);
    try {
      const res = await axios.post(parseUrl, {
        nodes: cleanNodes,
        edges: cleanEdges,
      });
      console.log("result is: ", res.data);
      setModalShow(true);
      setResult({ ...res.data, status: "success" });
    } catch (err) {
      console.log("error occured while trying to get DAG information: ", err);
      setResult({ status: "failed" });
      setModalShow(true);
    } finally {
      setIsClicked(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        disabled={isDisabled}
        style={isFocused ? { ...buttonStyle, ...focusStyle } : buttonStyle}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
        onClick={() => handleClick()}
        type='submit'
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;
