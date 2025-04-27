import { JSX } from "react";
import ReactModal from "react-modal";
import { ImageModalProps } from "./ImageModal.types";

export default function ImageModal({
  isOpen,
  onRequestClose,
  imageUrl,
}: ImageModalProps): JSX.Element {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: "0",
          border: "none",
          background: "none",
        },
      }}
      ariaHideApp={false}
    >
      <img
        src={imageUrl}
        alt="Modal Content"
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "90vh",
          maxHeight: "90vh",
        }}
      />
    </ReactModal>
  );
}
