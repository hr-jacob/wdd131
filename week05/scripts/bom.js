const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Load from localStorage or empty array
let chaptersArray = JSON.parse(localStorage.getItem('chapters')) || [];

// Display saved chapters
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Button click
button.addEventListener('click', () => {

  if (input.value.trim() !== '') {

    displayList(input.value);

    chaptersArray.push(input.value);

    localStorage.setItem('chapters', JSON.stringify(chaptersArray));

    input.value = '';
    input.focus();
  }

});


// Display item
function displayList(item) {

  const li = document.createElement('li');
  const deleteButton = document.createElement('button');

  li.textContent = item;
  deleteButton.textContent = '❌';

  li.append(deleteButton);
  list.append(li);

  // Delete
  deleteButton.addEventListener('click', () => {

    list.removeChild(li);

    removeChapter(item);

  });
}


// Remove from storage
function removeChapter(chapter) {

  chaptersArray = chaptersArray.filter(item => item !== chapter);

  localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}
