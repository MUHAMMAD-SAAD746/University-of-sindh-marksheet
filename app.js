var rollNo = prompt("enter roll number in provided format year/dpt/no (2K24/SWE/74)")
var examYear = +prompt("enter examination year")

if (!isNaN(examYear) && examYear != "" && examYear > 2020 && examYear < 2026) {
    var examType = prompt("Enter Exam type (enter any one of the following number) \n1) Regular \n2) Improve / Failure \n3) Re-sit")

    if(examType == 1){
        examType = "Regular"
    }
    else if(examType == 2){
        examType = "Improve / Failure"
    }
    else if(examType == 3){
        examType = "Re-Sit"
    }

    var semester = prompt("Enter your Semester from provided numbers \n1) First Semester \n2) Second Semester")


    if (semester == 1 || semester == 2) {
        if(semester == 1){
            semester = "First Semester"
        }
        else{
            semester = "Second Semester"
        }


        var userName = prompt("Enter your name : ");


        var calculus_mid, calculus_final;
        var functional_engMid, functional_engFinal;
        var pst_mid, pst_final
        var ict_mid, ict_final;
        var ict_labMid, ict_labFinal;
        var EDC_mid, EDC_final;
        var pf_mid, pf_final;
        var pf_labMid, pf_labFinal;


        if (isNaN(userName) && userName != "") {
            calculus_mid = +prompt("Enter Calculus Mid Marks (max marks 30)");
            if (!isNaN(calculus_mid) && calculus_mid <= 30) {
                calculus_final = +prompt("Enter Calculus Final Marks (max marks 50)")
                if (!isNaN(calculus_final) && calculus_mid <= 50) {
                    functional_engMid = +prompt("Enter Functional English Mid Marks (max marks 30)")
                    if (!isNaN(functional_engMid) && functional_engMid <= 30) {
                        functional_engFinal = +prompt("Enter Functional English Final Marks (max marks 50)")
                        if (!isNaN(functional_engFinal) && functional_engFinal <= 50) {
                            pst_mid = +prompt("please enter pst mid marks (max marks 30)")
                            if (!isNaN(pst_mid) && pst_mid <= 30) {
                                pst_final = +prompt("please enter pst final marks (max marks 50)")
                                if (!isNaN(pst_final) && pst_final <= 50) {
                                    ict_mid = +prompt("please enter ICT mid marks (max marks 30)")
                                    if (!isNaN(ict_mid) && ict_mid <= 30) {
                                        ict_final = +prompt("please enter ICT final marks (max marks 50)")
                                        if (!isNaN(ict_final) && ict_final <= 50) {
                                            ict_labMid = +prompt("please enter ict lab mids marks (max marks 30)")
                                            if (!isNaN(ict_labMid) && ict_labMid <= 30) {
                                                ict_labFinal = +prompt("please enter ict lab final marks (max marks 50)")
                                                if (!isNaN(ict_labFinal) && ict_labFinal <= 50) {
                                                    EDC_mid = +prompt("please enter EDC mid (max marks 30)")
                                                    if (!isNaN(EDC_mid) && EDC_mid <= 30) {
                                                        EDC_final = +prompt("please enter edc final marks (max marks 50)")
                                                        if (!isNaN(EDC_final) && EDC_final <= 50) {
                                                            pf_mid = +prompt("please enter programming fundamental mid marks (max marks 30)")
                                                            if (!isNaN(pf_mid) && pf_mid <= 30) {
                                                                pf_final = +prompt("please enter programming fundamental final marks (max marks 50)")
                                                                if (!isNaN(pf_final) && pf_final <= 50) {
                                                                    pf_labMid = +prompt("please enter programming fundamental lab mid marks (max marks 30)")
                                                                    if (!isNaN(pf_labMid) && pf_labMid <= 30) {
                                                                        pf_labFinal = +prompt("please enter PF lab final marks (max marks 50)")
                                                                        if (!isNaN(pf_labFinal) && pf_labFinal <= 50) {
                                                                            console.log("all marks fetched success fully");
                                                                        }
                                                                        else {
                                                                            alert("please enter valid PF lab final marks max 50")
                                                                        }
                                                                    }
                                                                    else {
                                                                        alert("please enter valid PF lab mid marks max 30")
                                                                    }
                                                                }
                                                                else {
                                                                    alert("please enter programming fundamental final valid marks max 50")
                                                                }
                                                            }
                                                            else {
                                                                alert("please enter valid marks of programming fundamental mid")
                                                            }
                                                        }
                                                        else {
                                                            alert("please enter valid edc final marks max 50")
                                                        }
                                                    }
                                                    else {
                                                        alert("please enter valid edc mid marks")
                                                    }
                                                }
                                                else {
                                                    alert("please enter valid ict final marks (max marks 50)")
                                                }
                                            }
                                            else {
                                                alert("please enter valid ict lab mid marks")
                                            }
                                        }
                                        else {
                                            alert("please eneter valid ICT final marks (max marks 50)")
                                        }
                                    }
                                    else {
                                        alert("please enter valid ICT mid marks (max marks 30)")
                                    }
                                }
                                else {
                                    alert("please enter valid pst final marks (max marks = 50)")
                                }
                            }
                            else {
                                alert("please enter valid pst mid marks (max marks = 30)")
                            }
                        }
                        else {
                            alert("please enter valid Function eng final marks (max marks = 50)")
                        }
                    }
                    else {
                        alert("please enter valid Function eng mid marks (max marks = 30)")
                    }
                }
                else {
                    alert("please enter valid calculus final marks (max marks = 50)")
                }
            }
            else {
                alert("please enter valid calculus mid marks (max marks = 30)")
            }
        }
        else {
            alert("Please enter valid User Name")
        }



        var calculus_total = calculus_mid + calculus_final + 10 + 9;
        var functional_engTotal = functional_engMid + functional_engFinal + 10 + 9;
        var pst_total = pst_mid + pst_final + 10 + 9;
        var ict_total = ict_mid + ict_final + 10 + 9;
        var ict_labTotal = ict_labMid + ict_labFinal + 10 + 9;
        var EDC_Total = EDC_mid + EDC_final + 10 + 9;
        var pf_total = pf_mid + pf_final + 10 + 9;
        var pf_labTotal = pf_labMid + pf_labFinal + 10 + 9;


        var pass = `<div id="pass-btn">
                <p>pass</p>
            </div>`

        var fail = `<div id="fail-btn">
                <p>fail</p>
            </div>`

        var calculus_result;
        var functional_engResult;
        var pst_result;
        var ict_result;
        var ictLab_result;
        var EDC_result;
        var pf_result;
        var pfLab_result;

        if (calculus_total >= 50) {
            calculus_result = pass;
        }
        else {
            calculus_result = fail;
        }

        if (functional_engTotal >= 50) {
            functional_engResult = pass;
        }
        else {
            functional_engResult = fail;
        }

        if (pst_total >= 50) {
            pst_result = pass;
        }
        else {
            pst_result = fail;
        }

        if (ict_total >= 50) {
            ict_result = pass;
        }
        else {
            ict_result = fail;
        }
        if (ict_labTotal >= 50) {
            ictLab_result = pass;
        }
        else {
            ictLab_result = fail;
        }

        if (EDC_Total >= 50) {
            EDC_result = pass;
        }
        else {
            EDC_result = fail;
        }

        if (pf_total >= 50) {
            pf_result = pass;
        }
        else {
            pf_result = fail;
        }

        if (pf_labTotal >= 50) {
            pfLab_result = pass;
        }
        else {
            pfLab_result = fail;
        }






        document.writeln(`
    <nav class="container-fluid">
        <div class="container">
            <img src="https://usindh.edu.pk/images/usindh/logo.png" alt="">
            <div class="container-fluid">
                <h2>ITSC</h2>
                <h2>University Of Sindh</h2>
            </div>
        </div>
    </nav>

    <div class="container">
        <div class="card mt-4 px-3 mb-4">
            <div class="container heading">
                <h1>Semester Examination Result Notice Board</h1>
            </div>
            
            <p class="note">This is digital notice board for to display department result only for students' information. It is not officially announced result by controller office.</p>
            <div class="card-body">
                <form action="">
                    <label for="semester">Select Semester</label>
                    <select name="semester" id="semester">
                        <option value="1st">Select</option>
                        <option value="1st">1st Semester</option>
                        <option value="2nd">2nd Semester</option>
                        <option value="3rd">3rd Semester</option>
                        <option value="4th">4th Semester</option>
                        <option value="5th">5th Semester</option>
                        <option value="6th">6th Semester</option>
                        <option value="7th">7th Semester</option>
                        <option value="8th">8th Semester</option>
                        <option value="9th">9th Semester</option>
                        <option value="10th">10th semester</option>
                    </select>

                    <label for="semester">Exam Year</label>
                    <select name="semester" id="semester">
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                    </select>

                    <label for="semester">Exam Type</label>
                    <select name="semester" id="semester">
                        <option value="2024">Regular</option>
                        <option value="2023">Improver / Failure</option>
                        <option value="2022">Re-Sit</option>
                    </select>
                </form>

                <div class="container info">
                    <div class="row student-row">
                        <div class="col col-lg-6 col-md-6 col-sm-6 col-6">
                            <p>Student Name</p>
                        </div>
                        <div class="col col-lg-6 col-md-6 col-sm-6 col-6">
                            <p>${userName}</p>
                        </div>
                    </div>
                    <div class="row student-row">
                        <div class="col col-lg-6 col-md-6 col-sm-6 col-6">
                            <p>ROLL NO</p>
                        </div>
                        <div class="col col-lg-6 col-md-6 col-sm-6 col-6">
                            <p>${rollNo}</p>
                        </div>
                    </div>
                    <div class="row student-row">
                        <div class="col col-lg-6 col-md-6 col-sm-6 col-6">
                            <p>EXAM YEAR</p>
                        </div>
                        <div class="col col-lg-6 col-md-6 col-sm-6 col-6">
                            <p>${examYear}</p>
                        </div>
                    </div>
                    <div class="row student-row">
                        <div class="col col-lg-6 col-md-6 col-sm-6 col-6">
                            <p>EXAM TYPE</p>
                        </div>
                        <div class="col col-lg-6 col-md-6 col-sm-6 col-6">
                            <p>${examType}</p>
                        </div>
                    </div>
                    <div class="row student-row">
                        <div class="col col-lg-6 col-md-6 col-sm-6 col-6">
                            <p>SEMESTER</p>
                        </div>
                        <div class="col col-lg-6 col-md-6 col-sm-6 col-6">
                            <p>${semester}</p>
                        </div>
                    </div>
                </div>

                <hr>

                <div class="container result-info">
                    <div class="row result-heading">
                        <div class="col">COURSE NO</div>
                        <div class="col col-4 text-center">SUBJECTS</div>
                        <div class="col">ATTEN. <br>MRK.</div>
                        <div class="col">ASSIGN. <br>MRK.</div>
                        <div class="col">MID. <br>MRK.</div>
                        <div class="col">FINAL. <br>MRK.</div>
                        <div class="col">OBT. <br>MRK.</div>
                        <div class="col">REMARKS</div>
                    </div>
                    <div class="row subject-info">
                        <div class="col result-data">GQUR-322</div>
                        <div class="col result-data col-4">CALCULUS AND ANALYTICAL GEOMETRY</div>
                        <div class="col result-data">10</div>
                        <div class="col result-data">9</div>
                        <div class="col result-data">${calculus_mid}</div>
                        <div class="col result-data">${calculus_final}</div>
                        <div class="col result-data">${calculus_total}</div>
                        <div class="col result-data">${calculus_result}</div>
                    </div>
                    <div class="row  subject-info">
                        <div class="col result-data">GENG-300</div>
                        <div class="col result-data col-4">FUNCTIONAL ENGLISH</div>
                        <div class="col result-data">10</div>
                        <div class="col result-data">9</div>
                        <div class="col result-data">${functional_engMid}</div>
                        <div class="col result-data">${functional_engFinal}</div>
                        <div class="col result-data">${functional_engTotal}</div>
                        <div class="col result-data">${functional_engResult}</div>
                    </div>
                    <div class="row subject-info">
                        <div class="col result-data">GICP-302</div>
                        <div class="col result-data col-4">IDEOLOGY AND CONSTITUTION OF PAKISTAN</div>
                        <div class="col result-data">10</div>
                        <div class="col result-data">9</div>
                        <div class="col result-data">${pst_mid}</div>
                        <div class="col result-data">${pst_final}</div>
                        <div class="col result-data">${pst_total}</div>
                        <div class="col result-data">${pst_result}</div>
                    </div>
                    <div class="row subject-info">
                        <div class="col result-data">GICT-314</div>
                        <div class="col result-data col-4">APPLICATIONS OF INFORMATION & COMMUNICATION TECHNOLOGIES</div>
                        <div class="col result-data">10</div>
                        <div class="col result-data">9</div>
                        <div class="col result-data">${ict_mid}</div>
                        <div class="col result-data">${ict_final}</div>
                        <div class="col result-data">${ict_total}</div>
                        <div class="col result-data">${ict_result}</div>
                    </div>
                    <div class="row subject-info">
                        <div class="col result-data">GICT-315</div>
                        <div class="col result-data col-4">APPLICATIONS OF INFORMATION & COMMUNICATION TECHNOLOGIES (LAB)</div>
                        <div class="col result-data">10</div>
                        <div class="col result-data">9</div>
                        <div class="col result-data">${ict_labMid}</div>
                        <div class="col result-data">${ict_labFinal}</div>
                        <div class="col result-data">${ict_labTotal}</div>
                        <div class="col result-data">${ictLab_result}</div>
                    </div>
                    <div class="row subject-info">
                        <div class="col result-data">GNAS-316</div>
                        <div class="col result-data col-4">ELECTRONIC DEVICES AND CIRCUITS</div>
                        <div class="col result-data">10</div>
                        <div class="col result-data">9</div>
                        <div class="col result-data">${EDC_mid}</div>
                        <div class="col result-data">${EDC_final}</div>
                        <div class="col result-data">${EDC_Total}</div>
                        <div class="col result-data">${EDC_result}</div>
                    </div>
                    <div class="row subject-info">
                        <div class="col result-data">SE24-318</div>
                        <div class="col result-data col-4">PROGRAMMING FUNDAMENTALS</div>
                        <div class="col result-data">10</div>
                        <div class="col result-data">9</div>
                        <div class="col result-data">${pf_mid}</div>
                        <div class="col result-data">${pf_final}</div>
                        <div class="col result-data">${pf_total}</div>
                        <div class="col result-data">${pf_result}</div>
                    </div>
                    <div class="row subject-info">
                        <div class="col result-data">SE24-319</div>
                        <div class="col result-data col-4">PROGRAMMING FUNDAMENTALS (LAB)</div>
                        <div class="col result-data">10</div>
                        <div class="col result-data">9</div>
                        <div class="col result-data">${pf_labMid}</div>
                        <div class="col result-data">${pf_labFinal}</div>
                        <div class="col result-data">${pf_labTotal}</div>
                        <div class="col result-data">${pfLab_result}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `)
    }
    else {
        alert("enter valid semester!")
    }
}
else {
    alert("please enter valid year")
}









