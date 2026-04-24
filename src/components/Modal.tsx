import React, { useEffect } from "react";
import type { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-md transition-all">
      <div
        className="absolute inset-0 w-full h-full"
        onClick={onClose}
        aria-label="Cerrar modal"
      />
      <div className="relative bg-white rounded-2xl shadow-lg max-w-lg w-full p-8 z-10 animate-fadeIn">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-logo-dos text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal; 