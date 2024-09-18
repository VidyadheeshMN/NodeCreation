// inputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import { LayoutNode } from "./layoutNode";
import Input from "../autoGrowInput";
import CustomSelect from "../select";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  return (
    <LayoutNode
      id={id}
      components={{
        Handles: () => (
          <Handle type='source' position={Position.Right} id={`${id}-value`} />
        ),
      }}
      header='Input'
    >
      <div>
        <label>
          Name:
          <Input type='text' value={currName} onChange={handleNameChange} />
        </label>
        <CustomSelect
          options={[
            { value: "Text", label: "Text" },
            { value: "File", label: "File" },
          ]}
        />
      </div>
    </LayoutNode>
  );
};
