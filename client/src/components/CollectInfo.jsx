import { useState } from "react";
import { Form } from "react-router-dom";

export default function CollectInfo() {
  const [step, setStep] = useState(0);
  const [showError, setShowError] = useState(false);
  const [currentVal, setCurrentVal] = useState("");

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
    <div>
      <h1>Collecting user information</h1>
      <Form method="post" action="/roadmap">
        {
          <div style={step != 0 ? { display: "None" } : {}}>
            Let&apos;s go over some of your basic information.
          </div>
        }
        {
          <div style={step != 1 ? { display: "None" } : {}}>
            <label htmlFor="name">
              {step} What is your name?
              <input onChange={handleChange} id="name" name="name" placeholder="Name" type="text" />
            </label>
            {showError && <div>This Field is Required</div>}
          </div>
        }
        {
          <div style={step != 2 ? { display: "None" } : {}}>
            <label htmlFor="name">
              {step} What are your interests?
              <input onChange={handleChange} id="interest" name="interest" placeholder="Interests" type="text" />
            </label>
            {showError && <div>This Field is Required</div>}
          </div>
        }
        {
          <div style={step != 3 ? { display: "None" } : {}}>
            <label htmlFor="name">
              {step} What are your strengths?
              <input onChange={handleChange} id="strength" name="strength" placeholder="Strengths" type="text" />
            </label>
            {showError && <div>This Field is Required</div>}
          </div>
        }
        {
          <div style={step != 4 ? { display: "None" } : {}}>
            <label htmlFor="name">
              {step} What is your aspiration?
              <input onChange={handleChange} id="aspiration" name="aspiration" placeholder="Aspiration" type="text" />
            </label>
            {showError && <div>This Field is Required</div>}
          </div>
        }
        {step <= 3 && <button type="button" onClick={changeStep}>{step === 0 ? "Let's Go" : "Next"}</button>}
        {step >= 4 && <button>Submit</button>}
      </Form>
    </div>
  );
}