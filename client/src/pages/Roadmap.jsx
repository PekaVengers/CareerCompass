import { useEffect, useState } from "react";
import CollectInfo from "../components/CollectInfo";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useSearchParams, useActionData } from "react-router-dom";
import getOpenAi from "../utils/getOpenAi";
import { getRoleData } from "../utils/getRoleData";

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const shouldSave = searchParams.get("save") === "true";
  const formData = await request.formData();

  if (shouldSave) {
    const email = searchParams.get("email");
    formData.append("email", email);
    const res = await axios.post("http://127.0.0.1:8000/api/user-info", formData);
  }

  const openai = getOpenAi();

  const content1 = `
You are Career Advisor now which will provide personalized guidance and roadmap to students on basis of latest trends or what suits better for future. You will provide career advice and roadmap to follow on basis on education level, field of interest, key strengths, education and aspiration of user. 
You must consider the education level as content can differ based on age to age.
 Provide resources which are popular and of good quality. You must generate answer in such a manner such that it will not deviate for similar values.
Return output in this manner -
Hey [user name], suggested career or job for you is 
[job name 1]
[Job Description of [job name 1]:]
(cover it in a single paragraph)
[Roadmap to follow for [job name 1]:]
(roadmap must be covered within 5 steps)
[roadmap step a.)]
[roadmap step b.)]
[roadmap step c.)]
[roadmap step d.)]
[roadmap step e.)]
[job name 2]
[Job Description of [job name 2]:]
(cover it in a single paragraph)
[Roadmap to follow for [job name 2]:]
(roadmap must be covered within 5 steps)
[roadmap step a.)]
[roadmap step b.)]
[roadmap step c.)]
[roadmap step d.)]
[roadmap step e.)]
[job name 3]
[Job Description of [job name 3]:]
(cover it in a single paragraph)
[Roadmap to follow for [job name 3]:]
(roadmap must be covered within 5 steps)
[roadmap step a.)]
[roadmap step b.)]
[roadmap step c.)]
[roadmap step d.)]
[roadmap step e.)]
 
Information provided below is user input, gather that information and return output like you are told to.
`
  const content2 = `
User name : Himanshu
Fields of interest : technology, coding, chess
Key strength: problem solving
Aspiration : coding
Education Level : University
`

  // const response = await openai.createChatCompletion({
  //   model: "gpt-3.5-turbo",
  //   messages: [
  //     {
  //       role: "system",
  //       content: content1,
  //     },
  //     {
  //       role: "user",
  //       content: content2,
  //     },
  //   ],
  //   temperature: 0.8,
  //   top_p: 1,
  //   frequency_penalty: 0,
  //   presence_penalty: 0,
  // });
  // console.log(response)
  // return response.data.choices[0].message.content;

  return getRoleData();

}

export default function RoadMap() {
  const { isAuthenticated, user } = useAuth0();
  const [hasData, setHasData] = useState(false);
  const [, setSearchParams] = useSearchParams();
  const actionData = useActionData();
  const [loading, setLoading] = useState(true);
  console.log(actionData)

  useEffect(() => {
    async function getUserData() {
      setLoading(true);
      if (user) {
        const res = await axios.get(`http://127.0.0.1:8000/api/user-info?email=${user.email}`)
        if (res.data.dataExists) {
          setHasData(true);
        } else {
          setSearchParams(prevParams => {
            prevParams.set("save", "true");
            prevParams.set("email", user.email);
            return prevParams;
          });
        }
      }
      setLoading(false);
    }
    getUserData()
  }, [user, isAuthenticated, setHasData, setSearchParams])

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className="p-6">
      {hasData || actionData ? (
        <>
          <div className="text-lg font-semibold mb-4 px-20">
          We&apos;re thrilled to help you explore exciting career options based on your interests and strengths.
          </div>
          <div className="text-lg font-semibold mb-4 px-20">
            Here are some suggested career paths that align with your profile.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-20">
            {actionData.map((role) => (
              <div key={role.name} className="flex-shrink-0">
                <div className="bg-green-200 rounded-3xl p-4 shadow-md">
                  <h3 className="text-xl font-semibold my-5">{role.name}</h3>
                  <div className="mt-2">{role.description.length > 300 ? role.description.slice(0, 300) + "..." : role.description}</div>
                  <button className="mt-7 bg-green-600 px-4 py-2 text-white rounded-2xl font-semibold">See More</button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <CollectInfo />
      )}
    </div>

  );
}