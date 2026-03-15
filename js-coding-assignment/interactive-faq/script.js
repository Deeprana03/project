class QAltem {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
    this.element = null;
  }

  render() {
    const qaDiv = document.createElement('div');
    qaDiv.classList.add('qa-item');

    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `
      ${this.question}
      <span class="cue">+</span>
    `;

    const answerDiv = document.createElement('div');
    answerDiv.classList.add('answer');
    answerDiv.textContent = this.answer;

    qaDiv.appendChild(questionDiv);
    qaDiv.appendChild(answerDiv);

    questionDiv.addEventListener('click', () => this.toggle());

    this.element = qaDiv;
    return qaDiv;
  }

  toggle() {
    this.element.classList.toggle('active');
  }
}

const qaData = [
  new QAltem("What is JavaScript?", "JavaScript lets you make websites interactive."),
  new QAltem("What is OOP?", "OOP is a way to structure your code using classes and objects."),
  new QAltem("How do I add event listeners?", "Use element.addEventListener('event', callback) to react to clicks, typing, etc."),
  new QAltem("Why semantic HTML?", "Semantic HTML improves accessibility and SEO."),
  new QAltem("Can I style it differently?", "Yes! Change colors, fonts, and spacing in the CSS.")
];

const qaSection = document.getElementById('qa-section');
qaData.forEach(item => {
  qaSection.appendChild(item.render());
});