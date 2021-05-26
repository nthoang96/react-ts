import React from "react";
import { SnackbarProvider } from "notistack";

export default function withSnackbar(WrappedComponent: React.ComponentType) {
  return function () {
    return (
      <>
        <SnackbarProvider maxSnack={3}>
          <WrappedComponent />
        </SnackbarProvider>
      </>
    );
  };
}
