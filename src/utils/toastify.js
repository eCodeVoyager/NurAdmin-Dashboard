import { toast } from "react-toastify";

const notify = (type, message) => {
  const options = {
    position: "top-right",
    autoClose: 3000,
  };

  switch (type) {
    case "success":
      toast.success(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    case "promise":
      if (message && message.promise && message.messages) {
        toast.promise(
          message.promise,
          {
            pending: message.messages.pending,
            success: message.messages.success,
            error: message.messages.error,
          },
          options
        );
      } else {
        console.error(
          "For promise type, provide { promise, messages } as message parameter"
        );
      }
      break;
    default:
      console.error("Invalid notification type");
  }
};

export { notify };
