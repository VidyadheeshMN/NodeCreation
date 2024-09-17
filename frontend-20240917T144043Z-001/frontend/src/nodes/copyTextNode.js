// textNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import { LayoutNode } from "./layoutNode";
import Input from "../autoGrowInput";

export const TextNode = ({ id, data }) => {
  const defaultText = data?.text || "{{input}}";

  const extractVariables = (text) => {
    const regex = /{{\s*([\w$]+)\s*}}/g;
    const vars = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
      vars.push(match[1]);
    }
    return [...new Set(vars)];
  };

  const [currText, setCurrText] = useState(defaultText);
  const [variables, setVariables] = useState(extractVariables(defaultText));

  const handleTextChange = (e) => {
    let { value } = e.target;
    setCurrText(value);
    setVariables(extractVariables(value));
  };

  return (
    <LayoutNode
      id={id}
      components={{
        Handles: () => <Handle position={Position.Right} id={`${id}-output`} />,
      }}
      header='Text'
    >
      <div
        style={{ position: "absolute", top: 0, right: 308, textAlign: "right" }}
      >
        {variables.map((vrbl) => (
          <div>{vrbl}</div>
        ))}
      </div>
      <div>
        <Input
          type='text'
          value={currText}
          onChange={handleTextChange}
          placeholder='Enter text'
        />
      </div>
    </LayoutNode>
  );
};
