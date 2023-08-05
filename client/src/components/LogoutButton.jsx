import { useAuth0 } from "@auth0/auth0-react";

export default function LogoutButton() {
  const {logout} = useAuth0();
  return (
    <button onClick={() => logout()} className="text-xl hover:text-green-500 duration-500">
      Log Out
    </button>
  )
}