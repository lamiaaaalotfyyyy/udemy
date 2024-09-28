import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { usePopper } from "react-popper";

const CartPopper = ({
  trigger,
  content,
  buttonContent,
  placement = "bottom",
}) => {
  const [showPopper, setShowPopper] = useState(false);
  const triggerRef = useRef();
  const [popperElement, setPopperElement] = useState(null);
  const timeoutRef = useRef(null);

  const { styles, attributes } = usePopper(triggerRef.current, popperElement, {
    placement: placement,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [-90, 30],
        },
      },
    ],
  });

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowPopper(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowPopper(false);
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={triggerRef}
    >
      {trigger}

      {showPopper && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className="bg-white shadow-lg border w-[300px] max-w-[300px]"
        >
          <div className="px-6 py-4 w-full flex flex-col items-center z-10">
            <div className="text-base font-sans text-gray-500	mb-1 text-center font-semibold">
              {content}
            </div>
            <Link
              href="/"
              className="py-3 w-full text-violet-600 text-sm font-bold hover:text-violet-900 text-center	"
            >
              {buttonContent}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPopper;
