const rowsContainer = document.getElementById("rowsContainer");
const subjectsData = [
    { id: "GQUR-322", name: "CALCULUS AND ANALYTICAL GEOMETRY" },
    { id: "GENG-300", name: "FUNCTIONAL ENGLISH" },
    { id: "GICP-302", name: "IDEOLOGY AND CONSTITUTION OF PAKISTAN" },
    { id: "GICT-314", name: "APPLICATIONS OF ICT" },
    { id: "GICT-315", name: "APPLICATIONS OF ICT (LAB)" },
    { id: "GNAS-316", name: "ELECTRONIC DEVICES AND CIRCUITS" },
    { id: "SE24-318", name: "PROGRAMMING FUNDAMENTALS" },
    { id: "SE24-319", name: "PROGRAMMING FUNDAMENTALS (LAB)" }
];

function renderInputRows() {

    let html = "";

    subjectsData.forEach((sub, index) => {
        html += `
            <div class="row subject-info">
                <div class="col result-data">${sub.id}</div>
                <div class="col result-data col-4">${sub.name}</div>
                <div class="col result-data"><input type="number" class="atten-input inputField"></div>
                <div class="col result-data"><input type="number" class="assign inputField"></div>
                <div class="col result-data"><input type="number" class="midsInput inputField"></div>
                <div class="col result-data"><input type="number" class="finalInput inputField"></div>
                <div class="col result-data"></div>
                <div class="col result-data"></div>
            </div>
        `;
    });

    rowsContainer.innerHTML = html;
}

renderInputRows();






const userName = document.getElementById("userName")
const rollNoInput = document.getElementById("rollNo")
const userNameElem = document.getElementById("userNameElem")
const rollNoElem = document.getElementById("rollNoElem")
const userInfoBtn = document.getElementById("userInfo-btn")
const inputContainer = document.getElementById("inputContainer")
const marksheet = document.getElementById("marksheet")
let name;
let rollNo;

function startResult() {
    name = userName.value;
    rollNo = rollNoInput.value
    inputContainer.classList.add("d-none")
    marksheet.classList.remove("d-none")

    userNameElem.innerText = name;
    rollNoElem.innerText = rollNo
}

userInfoBtn.addEventListener("click", startResult)


const semester = document.getElementById("semester")
let semesterElem = document.getElementById("semesterElem")
let selectedSemester;

function selectSemester() {
    selectedSemester = semester.value
    semesterElem.innerText = selectedSemester
}
semester.addEventListener("change", selectSemester)


const year = document.getElementById("year")
const examYear = document.getElementById("examYear")
let selectedYear;

function selectYear() {
    selectedYear = year.value
    examYear.innerText = selectedYear
}
year.addEventListener("change", selectYear)



const examType = document.getElementById("examType")
const examTypeElem = document.getElementById("examTypeElem")
let selectedType;

function selectExamType() {
    selectedType = examType.value
    examTypeElem.innerText = selectedType
}
examType.addEventListener("change", selectExamType)





const generateBtn = document.getElementById("generateBtn");
const inputField = document.getElementsByClassName("inputField")
const midsInput = document.getElementsByClassName("midsInput");
const finalInput = document.getElementsByClassName("finalInput");
const attendence = document.getElementsByClassName("atten-input");
const assignment = document.getElementsByClassName("assign");


var pass = `<div id="pass-btn" class="d-flex justify-content-center align-items-center">
                <p class="m-0">pass</p>
            </div>`

var fail = `<div id="fail-btn" class="d-flex justify-content-center align-items-center">
                <p class="m-0">fail</p>
            </div>`


function generateResult() {
    let hasError = false

    for (let i = 0; i < midsInput.length; i++) {
        if (midsInput[i].value < 0 || midsInput[i].value > 30) {
            midsInput[i].style.border = "1px solid red"
            hasError = true;
        }
    }

    for (let i = 0; i < finalInput.length; i++) {
        if (finalInput[i].value < 0 || finalInput[i].value > 50) {
            finalInput[i].style.border = "1px solid red"
            hasError = true;
        }
    }

    for (let i = 0; i < assignment.length; i++) {
        if (assignment[i].value < 0 || assignment[i].value > 10) {
            assignment[i].style.border = "1px solid red"
            hasError = true;
        }
    }

    for (let i = 0; i < attendence.length; i++) {
        if (attendence[i].value < 0 || attendence[i].value > 10) {
            attendence[i].style.border = "1px solid red"
            hasError = true;
        }
    }

    if (hasError) return

    const subjects = subjectsData.map((sub, i) => ({
        name: sub.name,
        id: sub.id,
        attendence: attendence[i].value,
        assignment: assignment[i].value,
        mid: midsInput[i].value,
        final: finalInput[i].value
    }));

    console.log(subjects);

    for (let i = 0; i < inputField.length; i++) {
        inputField[i].classList.add("d-none");
    }

    renderSubjects(subjects)
}

generateBtn.addEventListener("click", generateResult);





const resultInfo = document.querySelector(".resultInfo");

function renderSubjects(subjects) {

    let html = `
        <div class="row result-heading">
            <div class="col">COURSE NO</div>
            <div class="col col-4 text-center">SUBJECTS</div>
            <div class="col">ATTEN. <br>MRK.</div>
            <div class="col">assign. <br>MRK.</div>
            <div class="col">MID. <br>MRK.</div>
            <div class="col">FINAL. <br>MRK.</div>
            <div class="col">OBT. <br>MRK.</div>
            <div class="col">REMARKS</div>
        </div>
    `;

    subjects.forEach((sub, index) => {
        let obtained =
            Number(sub.attendence) +
            Number(sub.assignment) +
            Number(sub.mid) +
            Number(sub.final);

        html += `
            <div class="row subject-info">
                <div class="col result-data">${sub.id}</div>
                <div class="col result-data col-4">${sub.name}</div>
                <div class="col result-data">${sub.attendence}</div>
                <div class="col result-data">${sub.assignment}</div>
                <div class="col result-data">${sub.mid}</div>
                <div class="col result-data">${sub.final}</div>
                <div class="col result-data">${obtained}</div>
                <div class="col result-data">${obtained > 50 ? pass : fail}</div>
            </div>
        `;
    });

    resultInfo.innerHTML = html;
}