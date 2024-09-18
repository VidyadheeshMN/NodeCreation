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
        Handles: () => (
          <>
            <Handle position={Position.Right} id={`${id}-output`} />
            {variables.map((vrbl, i) => (
              <HandleGenerator
                id={`${id}-${vrbl}`}
                key={i}
                variableName={vrbl}
                style={{
                  top: `${(100 / (variables.length + 1)) * (i + 1)}%`,
                }}
              />
            ))}
          </>
        ),
      }}
      header='Text'
    >
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

const HandleGenerator = ({ id, variableName, style, key }) => {
  return (
    <div key={key}>
      <div
        style={{
          ...style,
          position: "absolute",
          textAlign: "right",
          right: 308,
          transform: "translate(0, -50%)",
        }}
      >
        {variableName}
      </div>
      <Handle type='source' position={Position.Left} id={id} style={style} />
    </div>
  );
};
