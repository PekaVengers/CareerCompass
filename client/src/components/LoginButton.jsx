import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
  const {loginWithRedirect} = useAuth0();
  return (
    <button onClick={() => loginWithRedirect()} className="text-xl hover:text-green-500 duration-500">
      Log In
    </button>
  )
}