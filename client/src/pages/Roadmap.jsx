import CollectInfo from "../components/CollectInfo";


export async function action({request}) {
  const formData = await request.formData();

  console.log(formData.get("name"));
  console.log(formData.get("aspiration"));
  console.log(formData.get("strength"));
  console.log(formData.get("interest"));
  return null;
} 

export default function RoadMap() {

  return (
    <div>
      <h1>Roadmap pages goes here</h1>
      <CollectInfo />
      
    </div>
  );
}