import { SignInButton } from "@clerk/nextjs";
import { LogIn } from "lucide-react";

function LoginButton() {
  return (
    <SignInButton mode="modal">
      <button className="flex items-center gap-2 px-4 py-2 bg-linear-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-600 text-white rounded-lg transition-all font-medium shadow-lg shadow-blue-500/20 cursor-pointer">
        <LogIn className="w-4 h-4 transition-transform" />
        <span>Sign In</span>
      </button>
    </SignInButton>
  );
}
export default LoginButton;
