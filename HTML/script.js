let q = 0;
let score = 0

let questions = [
    {
        text: "What is the capital of Scotland?",
        a: "Glasgow",
        b: "Edinburgh",
        c: "Aberdeen",
        correct: "b"
    },
    {
        text: "What animal is a symbol of Scotland?",
        a: "Lion",
        b: "Horse",
        c: "Unicorn",
        correct: "c"
    },
    {
        text: "What famous lake is Scotland known for?",
        a: "Loch Ness",
        b: "Lake Victoria",
        c: "Lake Tahoe",
        correct: "a"
    },
    {
        text: "What is the name of the Scottish parliament building located in Edinburgh?",
        a: "Holyrood Castle",
        b: "Holyrood Palace",
        c: "Edinburgh Palace",
        correct: "b"
    },
    {
        text: "What is the highest mountain in Scotland?",
        a: "Cairn Gorm",
        b: "Ben Nevis",
        c: "Schiehallion",
        correct: "b"
    }
];

function showQuestion() {
    document.getElementById("question").innerText = questions[q].text;
    document.getElementById("btnA").innerText = questions[q].a;
    document.getElementById("btnB").innerText = questions[q].b;
    document.getElementById("btnC").innerText = questions[q].c;
}

function answer(choice) {
    const result = document.getElementById("result");

    if (choice === questions[q].correct) {
        result.innerText = "Correct!";
        result.className = "correct";
        score = score + 1;

    } else {
        result.innerText = "Wrong!";
        result.className = "wrong";
    }

    q = q + 1;

    if (q < questions.length) {
        showQuestion();
    } else {
        document.getElementById("question").innerText = 
        "Quiz finished! You got " + score + " out of " + questions.length + " questions correct!";
        document.getElementById("btnA").style.display = "none";
        document.getElementById("btnB").style.display = "none";
        document.getElementById("btnC").style.display = "none";
    }
}

showQuestion();

function restartQuiz() {
    q = 0;
    document.getElementById("result").innerText = "";

    document.getElementById("btnA").style.display = "inline-block";
    document.getElementById("btnB").style.display = "inline-block";
    document.getElementById("btnC").style.display = "inline-block";

    showQuestion();
}
