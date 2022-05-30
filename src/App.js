// import logo from './logo.svg';
// import './App.css';

function App() {
  const postData = () => {
    
  }
  return (
    <>
      <div className="container">
        <h1 className="m-4 text-success">Basic Details</h1>
        <div className="container mb-4"><hr /></div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Job Title*</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Write a title that appropriately describes this job" />
        </div>

        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Location*</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="+ Add location" />
        </div>

        <div className="row mb-3">
          <label for="exampleFormControlInput1" className="form-label">Years of experience*</label>
          <div className="col">
            <select className="form-select" aria-label="Default select example">
              <option selected>Select min</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="col">
            <select className="form-select" aria-label="Default select example">
              <option selected>Select max</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Job Description*</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Describe the role and responsibilities, skills required for the job and help the candidates understand the role better"></textarea>
        </div>

        <h1 className="m-4 mt-5 text-success">Targeting</h1>
        <div className="container mb-4"><hr /></div>

        <div className="row mb-3">
          <div className="col">
            <label for="exampleFormControlInput1" className="form-label">Category*</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select</option>
              <option value="se">Software Engineer</option>
              <option value="da">Data Analyst</option>
              <option value="cs">Cyber Security</option>
            </select>
          </div>
          <div className="col">
            <label for="exampleFormControlInput1" className="form-label">Functional Area*</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select</option>
              <option value="d">Delhi</option>
              <option value="b">Banglore</option>
              <option value="p">Pune</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <label for="exampleFormControlInput1" className="form-label">Graduating Year*</label>
          <div className="col">
            <select className="form-select" aria-label="Default select example">
              <option selected>Min Batch</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
            </select>
          </div>
          <div className="col">
            <select className="form-select" aria-label="Default select example">
              <option selected>Max Batch</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Tags</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="+ Add job tag" />
        </div>

        <div className="container mt-5">
          <button type="submit" className="btn btn-success" onClick={postData}>Post job</button>
          <button type="submit" className="btn btn-outline-success mx-4">Post job and Add Another job</button>
          <button type="button" className="btn btn-link text-success">Cancel</button>
        </div>
      </div>
    </>
  );
}

export default App;
