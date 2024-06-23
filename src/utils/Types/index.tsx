import { JsonFunction } from "react-router-dom";

export interface LoadingButtonType {
  text: string;
  width?: string;
}

export interface InputType {
  placeholder: string;
  type: string;
  passwordInput?: boolean;
}

export interface SearchInputType {
  placeholder: string;
  type: string;
}

export interface ModalType {
  open?: boolean;
  cancelFn?: any;
  confirmationFn?: any;
  heading?: String;
  message?: String;
}
