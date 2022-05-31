import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const url = "localhost:8001/v1jobs/job";    //"https://jsonplaceholder.typicode.com/posts/"  this link can be used to see the output in the console
  const [data, setData] = useState({
    jobtitle: "",
    location: "",
    minexp: "",
    maxexp: "",
    description: "",
    category: "",
    funcarea: "",
    mingradyear: "",
    maxgradyear: "",
    tags: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  };

  const submit = (e) => {
    e.preventDefault();
    setErrors(validate(data));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit)
      Axios.post(url, {
        jobtitle: data.jobtitle,
        location: data.location,
        minexp: data.minexp,
        maxexp: data.maxexp,
        description: data.description,
        category: data.category,
        funcarea: data.funcarea,
        mingradyear: data.mingradyear,
        maxgradyear: data.maxgradyear,
        tags: data.tags
      }).then(res => {
        console.log("Data posted successfully", res.data)
      })
  }, [errors]);  // eslint-disable-line react-hooks/exhaustive-deps

  const cancel = () => {
    window.location.reload(false);
  };

  const validate = (data) => {
    const errors = {};
    if (!data.jobtitle)
      errors.jobtitle = "Job Title is required";
    if (!data.location)
      errors.location = "Location is required";
    if (!data.minexp)
      errors.minexp = "Minimum years of experience is required";
    if (!data.maxexp)
      errors.maxexp = "Maximum years of experience is required";
    if (!data.description)
      errors.description = "Job Description is required";
    if (!data.category)
      errors.category = "Category is required";
    if (!data.funcarea)
      errors.funcarea = "Functional Area is required";
    if (!data.mingradyear)
      errors.mingradyear = "Minimum graduating year is required";
    if (!data.maxgradyear)
      errors.maxgradyear = "Maximum graduating year is required";
    if (!data.tags)
      errors.tags = "Tags is required";
    return errors;
  };

  return (
    <>
      <form onSubmit={(e) => submit(e)}>
        <div className="container">
          <h1 className="m-4 text-success">Basic Details</h1>
          <div className="container mb-4"><hr /></div>
          <div className="mb-3">
            <label className="form-label">Job Title*</label>
            <input type="text" onChange={(e) => handleChange(e)} id="jobtitle" className="form-control" placeholder="Write a title that appropriately describes this job" />
          </div>
          <p className="text-danger">{errors.jobtitle}</p>

          <div className="mb-3">
            <label className="form-label">Location*</label>
            <input type="text" onChange={(e) => handleChange(e)} id="location" className="form-control" placeholder="+ Add location" />
          </div>
          <p className="text-danger">{errors.location}</p>

          <div className="row mb-3">
            <label className="form-label">Years of experience*</label>
            <div className="col">
              <select id="minexp" onChange={(e) => handleChange(e)} className="form-select">
                <option value="NA" >Select min</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              <p className="text-danger">{errors.minexp}</p>
            </div>
            <div className="col">
              <select id="maxexp" onChange={(e) => handleChange(e)} className="form-select">
                <option value="NA">Select max</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
              <p className="text-danger">{errors.maxexp}</p>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Job Description*</label>
            <textarea className="form-control" rows="3" onChange={(e) => handleChange(e)} id="description" placeholder="Describe the role and responsibilities, skills required for the job and help the candidates understand the role better"></textarea>
          </div>
          <p className="text-danger">{errors.description}</p>

          <h1 className="m-4 mt-5 text-success">Targeting</h1>
          <div className="container mb-4"><hr /></div>

          <div className="row mb-3">
            <div className="col">
              <label className="form-label">Category*</label>
              <select id="category" onChange={(e) => handleChange(e)} className="form-select">
                <option value="NA">Select</option>
                <option value="CS">Computer Science</option>
                <option value="FI">Finance</option>
                <option value="BD">Business Development</option>
              </select>
              <p className="text-danger">{errors.category}</p>
            </div>
            <div className="col">
              <label className="form-label">Functional Area*</label>
              <select id="funcarea" onChange={(e) => handleChange(e)} className="form-select" >
                <option value="NA">Select</option>
                <option value="DL">Delhi</option>
                <option value="BG">Bangalore</option>
                <option value="PU">Pune</option>
              </select>
              <p className="text-danger">{errors.funcarea}</p>
            </div>
          </div>

          <div className="row mb-3">
            <label className="form-label">Graduating Year*</label>
            <div className="col">
              <select id="mingradyear" onChange={(e) => handleChange(e)} className="form-select">
                <option value="NA">Min Batch</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
              </select>
              <p className="text-danger">{errors.mingradyear}</p>
            </div>
            <div className="col">
              <select id="maxgradyear" onChange={(e) => handleChange(e)} className="form-select">
                <option value="NA">Max Batch</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
              </select>
              <p className="text-danger">{errors.maxgradyear}</p>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Tags</label>
            <input id="tags" onChange={(e) => handleChange(e)} type="text" className="form-control" placeholder="+ Add job tag" />
          </div>
          <p className="text-danger">{errors.tags}</p>

          <div className="container mt-5">
            <button type="submit" className="btn btn-success">Post job</button>
            <button type="submit" className="btn btn-outline-success post-another-job">Post job and Add Another job</button>
            <button type="button" onClick={cancel} className="btn btn-link text-success">Cancel</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
