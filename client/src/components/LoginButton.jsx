import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton({text}) {
  const {loginWithRedirect} = useAuth0();
  return (
    <button onClick={() => loginWithRedirect()} className="bg-[#43B14B] text-[1.2rem] py-[0.5rem] px-[1rem] text-white rounded-[0.7rem] font-inter">
      {
        text ? text : "Log In"
      }
    </button>
  )
}