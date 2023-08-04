import { useState } from "react";
import { Form} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function CollectInfo() {
  const [step, setStep] = useState(0);
  const [showError, setShowError] = useState(false);
  const [currentVal, setCurrentVal] = useState("");
  const {user} = useAuth0();

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
      <Form method="post">
        {
          <div style={step != 0 ? { display: "None" } : {}}>
            Let&apos;s go over some of your basic information.
          </div>
        }
        {
          <div style={user || step != 1 ? { display: "None" } : {}}>
            <label htmlFor="name">
              {step} What is your name?
              <input onChange={handleChange} id="name" name="name" placeholder="Name" type="text" />
            </label>
            {showError && <div>This Field is Required</div>}
          </div>
        }
        {
          <div style={(!user && step != 2) || (user && step != 1) ? { display: "None" } : {}}>
            <label htmlFor="interest">
              {step} What are your interests?
              <input onChange={handleChange} id="interest" name="interest" placeholder="Interests" type="text" />
            </label>
            {showError && <div>This Field is Required</div>}
          </div>
        }
        {
          <div style={(!user && step != 3) || (user && step != 2) ? { display: "None" } : {}}>
            <label htmlFor="strength">
              {step} What are your strengths?
              <input onChange={handleChange} id="strength" name="strength" placeholder="Strengths" type="text" />
            </label>
            {showError && <div>This Field is Required</div>}
          </div>
        }
        {
          <div style={(!user && step != 4) || (user && step != 3) ? { display: "None" } : {}}>
            <label htmlFor="aspiration">
              {step} What is your aspiration?
              <input onChange={handleChange} id="aspiration" name="aspiration" placeholder="Aspiration" type="text" />
            </label>
            {showError && <div>This Field is Required</div>}
          </div>
        }
        {
          <div style={(!user && step != 5) || (user && step != 4) ? { display: "None" } : {}}>
            <label htmlFor="location">
              {step} What is your location?
              <input onChange={handleChange} id="location" name="location" placeholder="Location" type="text" />
            </label>
            {showError && <div>This Field is Required</div>}
          </div>
        }
        {((step <= 4 && !user) || (step <= 3 && user)) && <button type="button" onClick={changeStep}>{step === 0 ? "Let's Go" : "Next"}</button>}
        {((!user && step >= 5) || (step >= 4 && user)) && <button>Submit</button>}
      </Form>
    </div>
  );
}