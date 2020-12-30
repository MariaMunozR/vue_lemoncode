export interface SnackbarPlugin {
    (params: any): void;
    info(message: string): void;
    error(message: string): void;
  }