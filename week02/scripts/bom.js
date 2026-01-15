const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('____');

// Create a li element
const li = document.createElement('li');

// Create a delete button
const deleteButton = document.createElement('button');

// Populate the li with the input value
li.textContent = input.value;

// Populate the button with ❌
deleteButton.textContent = '❌';

// Append the delete button to the li
li.append(deleteButton);

// Append the li to the unordered list
list.append(li);

