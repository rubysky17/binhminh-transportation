import React, { memo, useRef } from "react";
import useClickOutside from "hooks/useClickoutside/useClickoutside";

import "./styles.scss";

function PopOver({ children, isOpen, onClose }) {
  const popoverRef = useRef();

  useClickOutside(popoverRef, () => {
    onClose && onClose();
  });

  return (
    <>
      {isOpen && (
        <div ref={popoverRef} className="wrapper-popover">
          {children}
        </div>
      )}{" "}
    </>
  );
}

export default memo(PopOver);
