var settingsIcon = document.querySelector('.settings-icon');
var listContainer = document.getElementById('list-container');
var closeBtn = document.querySelector('.close-btn');

settingsIcon.addEventListener('click', function() {
  if (listContainer.style.display === 'none') {
    listContainer.style.display = 'block';
  } else {
    listContainer.style.display = 'none';
  }
});

closeBtn.addEventListener('click', function() {
  listContainer.style.display = 'none';
});

var infoIcon = document.querySelector('.fas.fa-info-circle');
var infoContainer = document.getElementById('info-container');
var infoCloseBtn = document.querySelector('.infoclose-btn'); 

infoIcon.addEventListener('click', function() {
  if (infoContainer.style.display === 'none') {
    infoContainer.style.display = 'block';
  } else {
    infoContainer.style.display = 'none';
  }
});

infoCloseBtn.addEventListener('click', function() {
  infoContainer.style.display = 'none';
});

