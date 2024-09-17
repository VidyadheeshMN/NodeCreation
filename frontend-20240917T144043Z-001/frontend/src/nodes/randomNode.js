// randomNode.js

import { Handle, Position } from "reactflow";
import { LayoutNode } from "./layoutNode";

export const RandomNode = ({ id }) => {
  return (
    <div>
      <LayoutNode
        id={id || "random"}
        components={{
          Handles: () => (
            <>
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
          Header: () => null,
        }}
        header='Random Node'
      >
        <div>
          <div>This is a Random node.</div>
          <div>This does not do anything.</div>
        </div>
      </LayoutNode>
    </div>
  );
};
