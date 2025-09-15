import * as React from "react";

function ToastProvider({ children }) {
  return <div>{children}</div>;
}

function Toast({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

function ToastTitle({ children }) {
  return <div>{children}</div>;
}

function ToastDescription({ children }) {
  return <div>{children}</div>;
}

function ToastClose() {
  return <button>Close</button>;
}

function ToastViewport() {
  return null;
}

export { Toast, ToastProvider, ToastTitle, ToastDescription, ToastClose, ToastViewport };
