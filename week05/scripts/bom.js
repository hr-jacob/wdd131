const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// Get chapters from localStorage OR empty array
let chaptersArray = getChapterList() || [];

// Display existing chapters on page load
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Button click event
button.addEventListener('click', () => {
  if (input.value !== '') {

    displayList(input.value);        // Show on page
    chaptersArray.push(input.value); // Add to array
    setChapterList();                // Save to localStorage

    input.value = '';                // Clear input
    input.focus();                   // Focus input
  }
});


// Display chapter in list
function displayList(item) {

  const li = document.createElement('li');
  const deleteButton = document.createElement('button');

  li.textContent = item;

  deleteButton.textContent = '❌';

  li.append(deleteButton);
  list.append(li);

  // Delete button
  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
}


// Save array to localStorage
function setChapterList() {
  localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}


// Get array from localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem('chapters'));
}


// Delete chapter
function deleteChapter(chapter) {

  // Remove ❌ from end
  chapter = chapter.slice(0, chapter.length - 1);

  // Remove from array
  chaptersArray = chaptersArray.filter(item => item !== chapter);

  // Update localStorage
  setChapterList();
}
