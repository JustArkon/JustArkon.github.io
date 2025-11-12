const elements = window.elements;
const answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",

  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",

  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",

  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];


function handleSubmit() {
  const pattern=/[A-Za-zА-ЯІіЇїЄєа-я][A-Za-zА-ЯІіЇїЄєа-я\s]*\?/;
  const question = elements.input.value.trim();
  console.log(pattern.test(question));
  if(!pattern.test(question)){
    elements.input.value = '';
    elements.circle.textContent = "Try asking other question";
    return;
  }

  const answer = answers[Math.floor(Math.random() * answers.length)];
  elements.circle.textContent = answer;
}

elements.btn.addEventListener('click', handleSubmit);
