const quizData = [
    {
      question: "1. What is 25% of 160?",
      options: ["30", "40", "50", "60"],
      answer: "40"
    },
    {
      question: "2. Simplify: 5 + 3 × 2",
      options: ["11", "16", "13", "21"],
      answer: "11"
    },
    {
      question: "3. What is the square of 12?",
      options: ["144", "124", "132", "120"],
      answer: "144"
    },
    {
      question: "4. If a triangle has angles of 90° and 45°, what is the third angle?",
      options: ["35°", "45°", "60°", "90°"],
      answer: "45°"
    },
    {
      question: "5. How many sides does a hexagon have?",
      options: ["5", "6", "7", "8"],
      answer: "6"
    },
    {
      question: "6. What is the value of π (pi) up to 2 decimal places?",
      options: ["3.12", "3.14", "3.16", "3.18"],
      answer: "3.14"
    },
    {
      question: "7. Find the perimeter of a square with side 7 cm.",
      options: ["28 cm", "21 cm", "14 cm", "49 cm"],
      answer: "28 cm"
    },
    {
      question: "8. What is the LCM of 4 and 6?",
      options: ["10", "12", "14", "18"],
      answer: "12"
    },
    {
      question: "9. What is 3⁴ (3 raised to the power 4)?",
      options: ["81", "27", "64", "12"],
      answer: "81"
    },
    {
      question: "10. Convert 0.75 into a fraction.",
      options: ["3/4", "2/5", "1/2", "4/5"],
      answer: "3/4"
    }
  ];
  

  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  const resultElement = document.getElementById("result");
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;
    optionsElement.innerHTML = "";
    currentQuizData.options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => selectAnswer(option));
      optionsElement.appendChild(button);
    });
  }
  
  function selectAnswer(selectedOption) {
    const currentQuizData = quizData[currentQuestion];
    if (selectedOption === currentQuizData.answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionElement.textContent = "";
    optionsElement.textContent = "";
    submitButton.style.display = "none";
    resultElement.textContent = `Your score: ${score} out of ${quizData.length}`;
  }
  
  loadQuestion();
  