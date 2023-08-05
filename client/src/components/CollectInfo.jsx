import { useState } from "react";
import { Form } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import formBg from "../assets/formbg.png"
import formBg1 from "../assets/formbg1.png"

export default function CollectInfo() {
  const [step, setStep] = useState(0);
  const [showError, setShowError] = useState(false);
  const [currentVal, setCurrentVal] = useState("");
  const { user } = useAuth0();

  function changeStep() {
    if (currentVal === "" && step != 0) {
      setShowError(true);
    } else {
      setCurrentVal("");
      setStep(step + 1);
    }
  }

  function handleChange(event) {
    setShowError(false);
    setCurrentVal(event.target.value);
  }

  return (
    <div className="h-[812px] flex flex-col" style={step === 0 ? { backgroundImage: `url(${formBg})`, backgroundSize: "cover" } : { backgroundImage: `url(${formBg1})`, backgroundSize: "cover" }}>
      <Form method="post">
        {
          <div className="flex gap-4 ml-[117px] mt-[323px] text-3xl mb-1" style={step != 0 ? { display: "None" } : {}}>
            <div>Let&apos;s go over some of your basic information.</div>
          </div>
        }
        {
          <div className="flex flex-col items-center mt-[273px]" style={user || step != 1 ? { display: "None" } : {}}>
            <label htmlFor="name">
              <div className="flex gap-4 text-3xl mb-1">
                <div className="text-[#0FA958] font-bold">{step} -&gt; </div>
                <div className="flex flex-col">
                  <div>What is your name?</div>
                  <input style={{ borderBottom: "1px solid black", marginBottom: "0.5rem", marginTop: "0.5rem" }} onChange={handleChange} id="name" name="name" type="text" />
                </div>
              </div>
            </label>
            {showError && <div className="mr-[10rem] text-2xl mb-1 text-red-600">(This Field is Required)</div>}
          </div>
        }
        {
          <div className="flex flex-col items-center mt-[273px]" style={(!user && step != 2) || (user && step != 1) ? { display: "None" } : {}}>
            <label htmlFor="interest">
              <div className="flex gap-4 text-3xl mb-1">
                <div className="text-[#0FA958] font-bold">{step} -&gt; </div>
                <div className="flex flex-col">
                  <div>What are your interests?</div>
                  <input style={{ borderBottom: "1px solid black", marginBottom: "0.5rem", marginTop: "0.5rem" }} onChange={handleChange} id="interest" name="interest" type="text" />
                </div>
              </div>
            </label>
            {showError && <div className="text-2xl mb-1 text-red-600">(This Field is Required)</div>}
          </div>
        }
        {
          <div className="flex flex-col items-center mt-[273px]" style={(!user && step != 3) || (user && step != 2) ? { display: "None" } : {}}>
            <label htmlFor="strength">
              <div className="flex gap-4 text-3xl mb-1">
                <div className="text-[#0FA958] font-bold">{step} -&gt; </div>
                <div className="flex flex-col">
                  <div>What are your strengths?</div>
                  <input style={{ borderBottom: "1px solid black", marginBottom: "0.5rem", marginTop: "0.5rem" }} onChange={handleChange} id="strength" name="strength" type="text" />
                </div>
              </div>
            </label>
            {showError && <div className="text-2xl mb-1 text-red-600">(This Field is Required)</div>}
          </div>
        }
        {
          <div className="flex flex-col items-center mt-[273px]" style={(!user && step != 4) || (user && step != 3) ? { display: "None" } : {}}>
            <label htmlFor="aspiration">
              <div className="flex gap-4 text-3xl mb-1">
                <div className="text-[#0FA958] font-bold">{step} -&gt; </div>
                <div className="flex flex-col">
                  <div>What is your aspiration?</div>
                  <input style={{ borderBottom: "1px solid black", marginBottom: "0.5rem", marginTop: "0.5rem" }} onChange={handleChange} id="aspiration" name="aspiration" type="text" />
                </div>
              </div>
            </label>
            {showError && <div className="text-2xl mb-1 text-red-600">(This Field is Required)</div>}
          </div>
        }
        {
          <div className="flex flex-col items-center mt-[273px]" style={(!user && step != 5) || (user && step != 4) ? { display: "None" } : {}}>
            <label htmlFor="education">
              <div className="flex gap-4 text-3xl mb-1">
                <div className="text-[#0FA958] font-bold">{step} -&gt; </div>
                <div className="flex flex-col">
                  <div> What is your education level?</div>
                  <input style={{ borderBottom: "1px solid black", marginBottom: "0.5rem", marginTop: "0.5rem" }} onChange={handleChange} id="education" name="education" type="text" />
                </div>
              </div>
            </label>
            {showError && <div className="text-2xl mb-1 text-red-600">(This Field is Required)</div>}
          </div>
        }
        {((step <= 4 && !user) || (step <= 3 && user)) && <button className="absolute ml-[196px] mb-[341px] bg-[#43B14B] rounded-3xl text-white px-12 py-[13px] text-xl" style={step != 0 ? {marginLeft : "48rem"}: {}} type="button" onClick={changeStep}>{step === 0 ? "Let's Go" : "Next"}</button>}
        {((!user && step >= 5) || (step >= 4 && user)) && <button className="absolute ml-[48rem] mb-[341px] bg-[#43B14B] rounded-3xl text-white px-12 py-[13px] text-xl">Submit</button>}
      </Form>
    </div>
  );
}