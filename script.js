// Smooth Scrolling
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // FAQ Accordion Effect
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isOpen = answer.style.display === 'block';
      
      // Close all answers
      document.querySelectorAll('.faq-answer').forEach(ans => (ans.style.display = 'none'));
      
      // Open the clicked answer if it wasn't open
      answer.style.display = isOpen ? 'none' : 'block';
    });
  });
  