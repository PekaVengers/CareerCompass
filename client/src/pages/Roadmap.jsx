import { useEffect, useState } from "react";
import CollectInfo from "../components/CollectInfo";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export async function action({ request }) {
  console.log(request)
  const searchParams = new URL(request.url).searchParams;
  const shouldSave = searchParams.get("save") === "true";
  const formData = await request.formData();
  
  if (shouldSave) {
    const email = searchParams.get("email");
    formData.append("email", email);
    const res = await axios.post("http://127.0.0.1:8000/api/user-info", formData);
    console.log(res.data);
  }

  console.log(formData.get("name"));
  console.log(formData.get("aspiration"));
  console.log(formData.get("strength"));
  console.log(formData.get("interest"));
  return null;
}

export default function RoadMap() {
  const { isAuthenticated, user } = useAuth0();
  const [ hasData, setHasData ] = useState(false);
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    async function getUserData() {
      if (user) {
        const res = await axios.get(`http://127.0.0.1:8000/api/user-info?username=${user.email}`)
        if (res.data.hasData) {
          setHasData(true);
        } else {
          setSearchParams(prevParams => {
            prevParams.set("save", "true");
            prevParams.set("email", user.email);
            return prevParams;
          });
        }
      }
    }
    getUserData()
  }, [user, isAuthenticated, setHasData, setSearchParams])

  return (
    <div>
      {hasData
        ? <>
          <h1>Roadmap pages goes here</h1>
        </>
        : <CollectInfo />}

    </div>
  );
}