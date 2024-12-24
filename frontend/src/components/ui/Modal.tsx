import React, { FC } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-70"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div
        className={[
          "relative max-w-lg w-full", // Core layout styles
          "bg-white dark:bg-gray-800", // Background for light/dark modes
          "rounded-lg shadow-lg", // Styling for structure
          "transition-all duration-300", // Smooth transitions
        ].join(" ")}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export const ModalOverlay: FC = () => <></>;

export const ModalContent: FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="p-6">{children}</div>;

export const ModalHeader: FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="p-4 border-b text-lg font-bold dark:border-gray-700">
    {children}
  </div>
);

export const ModalCloseButton: FC<{ onClose: () => void }> = ({ onClose }) => (
  <button
    className={[
      "absolute top-4 right-4",
      "text-gray-500 hover:text-gray-700 focus:outline-none",
      "dark:text-gray-400 dark:hover:text-gray-200",
    ].join(" ")}
    onClick={onClose}
  >
    &times;
  </button>
);

export const ModalBody: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-4">{children}</div>
);

export const ModalFooter: FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="p-4 border-t flex justify-end dark:border-gray-700">
    {children}
  </div>
);
