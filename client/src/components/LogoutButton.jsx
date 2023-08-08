import { useAuth0 } from "@auth0/auth0-react";

export default function LogoutButton() {
  const {logout} = useAuth0();
  return (
    <button onClick={() => logout()} className="bg-[#43B14B] text-[1.2rem] py-[0.5rem] px-[1rem] text-white rounded-[0.7rem] font-inter">
      Log Out
    </button>
  )
}