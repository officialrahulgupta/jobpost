import { useState } from "react";
import Axios from "axios";

function App() {
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
  
  const handleChange = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  };

  const submit = (e) => {
    const url = "https://jsonplaceholder.typicode.com/posts/";
    e.preventDefault();
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
      console.log("Data posted", res.data)
    })
  };

  const cancel = () => {
    window.location.reload(false);
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

          <div className="mb-3">
            <label className="form-label">Location*</label>
            <input type="text" onChange={(e) => handleChange(e)} id="location" className="form-control" placeholder="+ Add location" />
          </div>

          <div className="row mb-3">
            <label className="form-label">Years of experience*</label>
            <div className="col">
              <select id="minexp" onChange={(e) => handleChange(e)} className="form-select">
                <option value="NA" >Select min</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="col">
              <select id="maxexp" onChange={(e) => handleChange(e)} className="form-select">
                <option value="NA">Select max</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Job Description*</label>
            <textarea className="form-control" rows="3" onChange={(e) => handleChange(e)} id="description" placeholder="Describe the role and responsibilities, skills required for the job and help the candidates understand the role better"></textarea>
          </div>

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
            </div>
            <div className="col">
              <label className="form-label">Functional Area*</label>
              <select id="funcarea" onChange={(e) => handleChange(e)} className="form-select" >
                <option value="NA">Select</option>
                <option value="DL">Delhi</option>
                <option value="BG">Banglore</option>
                <option value="PU">Pune</option>
              </select>
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
            </div>
            <div className="col">
              <select id="maxgradyear" onChange={(e) => handleChange(e)} className="form-select">
                <option value="NA">Max Batch</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Tags</label>
            <input id="tags" onChange={(e) => handleChange(e)} type="text" className="form-control" placeholder="+ Add job tag" />
          </div>

          <div className="container mt-5">
            <button type="submit" className="btn btn-success">Post job</button>
            <button type="submit" className="btn btn-outline-success mx-4">Post job and Add Another job</button>
            <button type="button" onClick={cancel} className="btn btn-link text-success">Cancel</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
