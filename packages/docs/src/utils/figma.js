import React from "react";
import { Segment, Paragraph, ThemeProvider } from "@loops-ar/ui";
import PropTypes from "prop-types";

export default function FigmaFrame({ nodeId }) {
  return (
    <ThemeProvider>
      <Segment style={{ padding: 0, overflow: "hidden", position: "relative" }}>
        <iframe
          title={nodeId}
          style={{
            border: 0,
            width: "100%",
            height: "400px",
            display: "block",
          }}
          src={`https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fh5URPewC3mozozTTnOCGsG%2FLoops-ar%3Fnode-id%3D${nodeId}`}
          allowFullScreen
        />
        <Paragraph
          size="2"
          style={{
            height: "48px",
            widht: "100%",
            backgroundColor: "white",
            userSelect: "none",
            position: "absolute",
            right: 0,
            left: 0,
            bottom: 0,
            padding: "12px",
            boxSizing: "border-box",
            borderTop: "1px solid #ccc",
          }}
        >
          Click in the frame and press Ctrl+0 to see in real size
        </Paragraph>
      </Segment>
    </ThemeProvider>
  );
}

FigmaFrame.propTypes = {
  nodeId: PropTypes.string.isRequired,
};
