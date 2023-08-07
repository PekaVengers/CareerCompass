import { useEffect, useState } from "react";
import CollectInfo from "../components/CollectInfo";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useSearchParams, useActionData, Form } from "react-router-dom";
import { getRoleData } from "../utils/getRoleData";
// import getRoadMaps from "../utils/getRoadmaps";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../utils/baseURL";


export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const shouldSave = searchParams.get("save") === "true";
  const formData = await request.formData();

  if (shouldSave) {
    const email = searchParams.get("email");
    formData.append("email", email);
    await axios.post(`${BASE_URL}/api/user-info`, formData);
  }
  // const name = formData.get("name");
  // const interest = formData.get("interest");
  // const strength = formData.get("strength");
  // const aspiration = formData.get("aspiration");
  // const education = formData.get("education");
  // const roadmaps = await getRoadMaps(name, interest, strength, aspiration, education);

  return getRoleData();

}

export default function RoadMap() {
  const { isAuthenticated, user } = useAuth0();
  const [hasData, setHasData] = useState(false);
  const [, setSearchParams] = useSearchParams();
  const actionData = useActionData();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      setLoading(true);
      if (user) {
        const res = await axios.get(`${BASE_URL}/api/user-info?email=${user.email}`)
        if (res.data?.error) {
          setSearchParams(prevParams => {
            prevParams.set("save", "true");
            prevParams.set("email", user.email);
            return prevParams;
          });
        } else {
          setHasData(true);
        }
      }
      setLoading(false);
    } 
  
    getUserData()
  }, [user, isAuthenticated, setHasData]);

  function handleClick(index) {
    navigate("/roadmap-detail", { state: { roleInfo: actionData[index] } });
  }

  function handleUpdate() {
    setSearchParams(prevParams => {
      prevParams.set("save", "true");
      prevParams.set("email", user.email);
      return prevParams;
    });
    setHasData(false);
  }
  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className="">
      {hasData || actionData ? (
        actionData ?
          <div className="p-6">
            <div className="text-lg font-semibold mb-4 px-20">
              We&apos;re thrilled to help you explore exciting career options based on your interests and strengths.
            </div>
            <div className="text-lg font-semibold mb-4 px-20">
              Here are some suggested career paths that align with your profile.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-20">
              {actionData?.map((role, index) => (
                <div key={role.name} className="flex-shrink-0">
                  <div className="bg-green-200 rounded-3xl p-4 shadow-md">
                    <h3 className="text-xl font-semibold my-5">{role.name}</h3>
                    <div className="mt-2">{role.description.length > 300 ? role.description.slice(0, 300) + "..." : role.description}</div>
                    <button onClick={() => { handleClick(index) }} to="roadmap-detail" className="mt-7 bg-green-600 px-4 py-2 text-white rounded-2xl font-semibold">
                      See More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          : <div className="m-10">
            <Form method="post">
                <button className="bg-green-600 px-4 py-2 text-white rounded-2xl font-semibold mx-10" type="submit">Find Roadmap based on your Details</button>
                <button className="bg-yellow-400 px-4 py-2 text-white rounded-2xl font-semibold mx-10" onClick={handleUpdate} type="button">Update your Details</button>
            </Form>
          </div>
      ) : (
        <CollectInfo />
      )}
    </div>

  );
}