import { ToastContainer, toast } from "react-toastify";

const showError = (message: string) => {
  toast.error(message, { type: "error" });
};

const ErrorToast = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};

export default ErrorToast;
export { ErrorToast, showError };
