
  // Add click event listener to each question
  const questions = document.querySelectorAll('.question');
  questions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      answer.classList.toggle('show');
      question.classList.toggle('collapsed');

      // Collapse other answers when a new question is expanded
      const otherAnswers = Array.from(document.querySelectorAll('.answer')).filter(a => a !== answer);
      otherAnswers.forEach(a => {
        if (a.classList.contains('show')) {
          a.classList.remove('show');
        }
      });

      // Collapse other questions when a new question is expanded
      const otherQuestions = Array.from(document.querySelectorAll('.question')).filter(q => q !== question);
      otherQuestions.forEach(q => {
        if (q.classList.contains('collapsed')) {
          q.classList.remove('collapsed');
        }
      });
    });
  });

