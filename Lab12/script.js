const words = 10;
const maxDiff = 3;
let input;
let quiz = [];
let currentIndex = 0;
let currentLevel = 1;

function generateQuiz(n, dictionary) {
  if (!dictionary || dictionary.length === 0) {
      console.error("Словник порожній або не знайдений!");
      return [];
  }
  
  const result = [];
  const shuffled = [...dictionary].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(n, shuffled.length));

  for (const word of selected) {
    result.push({
      en: word.en,
      ua: word.ua,
      status: "unsolved"
    });
  }
  return result;
}

function showWord(index) {
  if (!quiz.length) {
      $(".word").text("No words");
      $(".counter").text(`0/0`);
      return;
  }
  const wordObj = quiz[index];
  
  $(".word").text(wordObj.en);
  $(".counter").text(`${index + 1}/${quiz.length}`);
  
  input.val("");

  const wordBox = $(".word-box");
  wordBox.removeClass("solved failed");
  
  if (wordObj.status === "solved") {
    wordBox.addClass("solved");
  } else if (wordObj.status === "failed") {
    wordBox.addClass("failed");
  }
}

function checkCompletion() {
    const solved = quiz.filter(w => w.status === "solved").length;
    const failed = quiz.filter(w => w.status === "failed").length;
    const totalDone = solved + failed;

    if (totalDone === words) {
        $("#final-correct").text(solved);
        $("#final-total").text(words);
        $("#results-modal").addClass("active");
    }
}

function checkAnswer() {
  const rawValue = input.val().trim();
  input.val("");
  const pattern = /^[а-яА-ЯіІїЇєЄґҐ'’\- ]+$/;
  if (!pattern.test(rawValue)) { return; }

  const answer = rawValue.toLowerCase();
  const currentWord = quiz[currentIndex];

  if (currentWord.status === "solved") return; 

  if (answer === currentWord.ua.toLowerCase()) {
    currentWord.status = "solved";
  } else {
    currentWord.status = "failed";
  }

  $(".stat.correct").text(quiz.filter(w => w.status === "solved").length);
  $(".stat.incorrect").text(quiz.filter(w => w.status === "failed").length);

  showWord(currentIndex);
  input.val(answer); 

  checkCompletion();
}

function nextWord() {
  if (!quiz.length) return;
  currentIndex = currentIndex + 1 < quiz.length ? currentIndex + 1 : 0;
  showWord(currentIndex);
}

function prevWord() {
  if (!quiz.length) return;
  currentIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : quiz.length-1;
  showWord(currentIndex);
}

function restart() {
  const selectedDict = getDictionary(currentLevel);
  
  quiz = generateQuiz(words, selectedDict);
  currentIndex = 0;
  $(".stat.correct").text(0);
  $(".stat.incorrect").text(0);
  
  $(".diff-value").text(currentLevel);
  
  showWord(currentIndex);

  $("#results-modal").removeClass("active");
}

function increaseDiff() {
    if (currentLevel < maxDiff) {
        currentLevel++;
        restart();
    }
}

function decreaseDiff() {
    if (currentLevel > 1) {
        currentLevel--;
        restart(); 
    }
}

function main() {
  input = $(".answer-input");
  restart();

  $("#submit-btn").on("click", checkAnswer);
  $("#restart-btn").on("click", restart);
  $("#prev-btn").on("click", prevWord);
  $("#next-btn").on("click", nextWord);


  $("#diff-next").on("click", increaseDiff);
  $("#diff-prev").on("click", decreaseDiff);

  $("#main-btn").on("click", function(){
    $("#exit-modal").addClass("active");
  });
  $("#modal-confirm").on("click", function() {
        window.location.href = "../index.html"; 
    });
  $("#modal-cancel").on("click", function() {
      $("#exit-modal").removeClass("active");
  });   
  $("#exit-modal").on("click", function(e) {
      if (e.target === this) {
          $(this).removeClass("active");
      }
  });

  $("#res-restart-btn").on("click", restart);
  $("#res-menu-btn").on("click", function() {
      window.location.href = "../index.html";
  });
}

$(document).ready(main);