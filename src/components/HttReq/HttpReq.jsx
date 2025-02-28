import { useEffect, useState } from "react";

const HttpReq = () => {
  const [empId, setEmpId] = useState(1);
  const [empdetails, setEmpDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const changeEmpId = (event) => {
    setEmpId(event.target.value);
  };

  useEffect(() => {
    // JSON -> Java script Object notation
    setTimeout(() => {
      setLoading(true);
      fetch(`https://boringapi.com/api/v1/employees/${empId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.employee);
          setEmpDetails(data.employee);
        })
        .catch((err) =>
          console.log("error in fetching the data for emp id", empId)
        )
        .finally(() => {
          setLoading(false);
        });
    }, 1000);


    return () => {
        console.log("clean up function...")
    }
  }, [empId]);

  return (
    <div className="http-req">
      <input
        type="number"
        className="form-control"
        value={empId}
        onChange={changeEmpId}
      />
      {loading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {empdetails && (
        <div className="emp-details">
          <div>First name is: {empdetails.first_name}</div>
          <div>Gneder is: {empdetails.gender}</div>
          <div>Department is: {empdetails.department}</div>
        </div>
      )}
    </div>
  );
};

export default HttpReq;
