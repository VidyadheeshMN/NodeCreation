// randomNode.js

import { Handle, Position } from "reactflow";
import { LayoutNode } from "./layoutNode";

export const UselessNode = ({ id }) => {
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
                type='source'
                position={Position.Right}
                id={`${id}-response`}
              />
            </>
          ),
          Header: () => null,
        }}
        header='Useless Node'
      >
        <div>
          <div>This is a Useless node.</div>
          <div>This is absolutely useless.</div>
        </div>
      </LayoutNode>
    </div>
  );
};
