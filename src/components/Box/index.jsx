import { Link } from "react-scroll";
import { HiMiniChatBubbleOvalLeftEllipsis } from "react-icons/hi2";

export const Bot = () => {
  return (
    <Link
      className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-gradient-to-tr from-button2 to-primary w-16 h-16 flex items-center justify-center rounded-full animate-bounce"
      to="contact"
    >
      <HiMiniChatBubbleOvalLeftEllipsis />
    </Link>
  );
};

