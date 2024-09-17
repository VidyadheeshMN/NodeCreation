// outputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import { LayoutNode } from "./layoutNode";
import CustomSelect from "../Select";
import Input from "../autoGrowInput";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState({
    value: data.outputType || "Text",
    label: data.outputType || "Text",
  });

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (value) => {
    setOutputType(value);
  };

  const selectOptions = [
    { label: "Text", value: "Text" },
    { label: "Image", value: "Image" },
  ];

  return (
    <LayoutNode
      id={id}
      header='Output'
      components={{
        Handles: () => (
          <Handle type='target' position={Position.Left} id={`${id}-value`} />
        ),
      }}
    >
      <div>
        <Input
          shouldAutoGrow={false}
          type='text'
          value={currName}
          onChange={handleNameChange}
          placeholder='Output'
        />
        <CustomSelect options={selectOptions} />
      </div>
    </LayoutNode>
  );
};
