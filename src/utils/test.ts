import toast from "react-hot-toast";
import { isSSR } from "utils/isSSR";

export const copyEmail = () => {
  const EMAIL = "christopher_chifor@yahoo.ca";
  if (!isSSR) {
    navigator.clipboard.writeText(EMAIL).then(() => {
      toast("Email copied to clipboard!");
    });
  }
}