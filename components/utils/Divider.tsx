import React from "react";

function Divider({label}:{label:string}) {
  return (
    <div className="flex items-center mt-3 mb-1">
      <hr className="flex-grow border-t border-secondary-foreground/20" />
      <span className="px-3 text-gray-500">{label}</span>
      <hr className="flex-grow border-t border-secondary-foreground/20" />
    </div>
  );
}

export default Divider;
