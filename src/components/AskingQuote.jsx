import React from "react";

const AskingQuote = () => {
  return (
    <>
      {" "}
      <div className="left-qoute">
        <h2>Kickstart your global strategy</h2>
        <p>
          We enable our clients to reach new markets globally by connecting with
          their audiences and providing the best possible customer experience—in
          any language.
        </p>
        <img
          src="https://www.transperfect.com/sites/default/files/styles/multi_tab_cta_decoration_265_265/public/media/image/globe_pin.png"
          alt="internet"
          width={"250px"}
        />
      </div>
      <div className="right-qoute">
        <h5>Fill out the form to request information</h5>
        <form>
          <select class="form-select my-2" aria-label="Default select example">
            <option selected>How can we help</option>
            <option value="1">
              questions about services/Technology pricing
            </option>
            <option value="2">Job applicant career questions</option>
            <option value="3">Vendor linguist questions</option>
            <option value="4">Press Inquiries</option>
            <option value="5">Other</option>
          </select>
          <div className="d-flex gap-2 my-2">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="First Name"
            />
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Last Name"
            />
          </div>
          <div className="d-flex gap-2 my-2">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Job Title"
            />
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Phone Number"
            />
          </div>
          <div className="d-flex gap-2 my-2">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Email"
            />
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Company"
            />
          </div>
          <div>
            <p>Message :</p>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Subscribe to the TransPerfect email newsletter
            </label>
          </div>
          <div>
            <button type="button" class="btn btn-primary btn-lg">
              Submit
            </button>
            <div>
              By submitting this form, you agree to the privacy policy and terms
              of this website.
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AskingQuote;
