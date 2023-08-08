import getOpenAi from "./getOpenAi";
import { getRoleData } from "./getRoleData";

export default async function getRoadMaps(name, interests, strength, aspiration, education) {
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
`;
//     const content2 = `
// User name : Himanshu
// Fields of interest : technology, coding, chess
// Key strength: problem solving
// Aspiration : coding
// Education Level : University
// `;
    const content2 = `
User name : ${name}
Fields of interest : ${interests}
Key strength: ${strength}
Aspiration : ${aspiration}
Education Level : ${education}
`;

    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: content1,
            },
            {
                role: "user",
                content: content2,
            },
        ],
        temperature: 0.8,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    return getRoleData(response.data.choices[0].message.content);
}
