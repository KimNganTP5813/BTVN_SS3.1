import React from "react";
import StudentControl from "./StudentControl";
import StudentList from "./StudentList";
import StudentForm from "./StudentForm";

export default function StudentManager() {
  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="css/style.css" />
        <title>Basic React Lab</title>
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* START CONTROL */}
              <StudentControl />
              {/* END CONTROL */}
              {/* START LIST STUDENT */}
              <StudentList />
              {/* END LIST STUDENT */}
            </div>
          </div>
          {/* START FORM SINH VIEN */}
          <StudentForm />
          {/* END FORM SINH VIÊN */}
        </div>
      </>
    </div>
  );
}
