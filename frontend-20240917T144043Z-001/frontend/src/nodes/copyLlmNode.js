// llmNode.js

import { Handle, Position } from "reactflow";
import { LayoutNode } from "./layoutNode";

export const LLMNode = ({ id, data }) => {
  return (
    <LayoutNode
      components={{
        Handles: () => (
          <>
            {" "}
            <Handle
              type='target'
              position={Position.Left}
              id={`${id}-system`}
              style={{ top: `${100 / 3}%` }}
            />
            <Handle
              type='target'
              position={Position.Left}
              id={`${id}-prompt`}
              style={{ top: `${200 / 3}%` }}
            />
            <Handle
              type='source'
              position={Position.Right}
              id={`${id}-response`}
            />
          </>
        ),
        Header: () => (
          <span
            style={{
              color: "white",
              textAlign: "left",
              fontWeight: 700,
              padding: "0.4rem",
              display: "flex",
              alignItems: "flex-start",
              paddingBottom: "0.15rem",
            }}
          >
            LLM
          </span>
        ),
      }}
    >
      <div>
        <span>This is a LLM.</span>
      </div>
    </LayoutNode>
  );
};
