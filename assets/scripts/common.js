const bodies = document.getElementsByClassName('body');

for (let body of bodies) {
  body.addEventListener('click', function() {
    if(body.classList.contains('colored')) {
      body.classList.remove('colored');
    } else {
      body.classList.add('colored');
    };
  });
};