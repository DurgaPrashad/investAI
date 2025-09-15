import { useState } from "react";

export function useToast() {
  const [toasts, setToasts] = useState([]);
  return {
    toasts,
    toast: (toast) => setToasts((prev) => [...prev, { ...toast, id: Date.now().toString() }]),
    dismiss: (id) => setToasts((prev) => prev.filter((t) => t.id !== id)),
  };
}

export function toast(toast) {
  // This is a stub for global toast usage
}
