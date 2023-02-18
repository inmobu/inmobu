import React, { useState } from "react";
import styled from "styled-components";
import { usePopper } from 'react-popper';

interface TooltipProps {
  children: JSX.Element,
  tooltipContent: JSX.Element,
  placement: "top" | "top-start" | "top-end"
  | "bottom" | "bottom-start" | "bottom-end"
  | "left" | "left-start" | "left-end"
  | "right" | "right-start" | "right-end"
}

export const TooltipArrow = styled.div`
  &::before {
    content: "";
    background: black;
    width: 0.6rem;
    height: 0.6rem;
    transform: translate(-50%, -50%) rotate(45deg);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;
  }
`;

const TipWrapper = styled.div`
  background: black;
  border-radius: 0.25rem;
  color: white;
  padding: 0.5rem;
  font-size: 0.875rem;
  z-index: 50;

  &[data-popper-placement^="right"] {
    ${TooltipArrow} {
      left: 0px;
    }
  }

  &[data-popper-placement^="left"] {
    ${TooltipArrow} {
      right: 0px;
    }
  }

  &[data-popper-placement^="top"] {
    ${TooltipArrow} {
      bottom: 0px;
    }
  }

  &[data-popper-placement^="bottom"] {
    ${TooltipArrow} {
      top: 0px;
    }
  }
`;

const Tooltip = (props: TooltipProps) => {
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const [showPopper, setShowPopper] = useState<boolean>(false)
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      { name: 'arrow', options: { element: arrowElement }},
      { name: "offset", options: { offset: [0, 10] }}
    ],
    placement: props.placement
  });

  return (
    <>
      <div
      className="h-auto w-auto"
        onMouseOver={() => { setShowPopper(true) }} ref={setReferenceElement}
        onMouseOut={() => { setShowPopper(false) }}
      >
        {props.children}
      </div>
      {
        showPopper &&
          <TipWrapper ref={setPopperElement} style={styles.popper} {...attributes.popper}>
             {props.tooltipContent}
            <TooltipArrow ref={setArrowElement} style={styles.arrow}>
            </TooltipArrow>
          </TipWrapper>
      }

    </>
  );
};

export default Tooltip;