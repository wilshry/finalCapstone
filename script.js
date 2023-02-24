// Initialize savedRecipes and recipeLinks arrays
let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
let recipeLinks = JSON.parse(localStorage.getItem("recipeLinks")) || [];

// Add click event listeners to "Save for later" buttons
const saveButtons = document.querySelectorAll("button.save-button");

// for loop to iterate over array and listen for button click. function then runs to save recipe link and name to array and to
for (let i = 0; i < saveButtons.length; i++) {
  saveButtons[i].addEventListener("click", function() {
    const recipeName = this.parentNode.querySelector("b").textContent;
    const recipeLink = this.parentNode.querySelector("a").getAttribute("href");
    savedRecipes.push(recipeName);
    recipeLinks.push(recipeLink);
    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
    localStorage.setItem("recipeLinks", JSON.stringify(recipeLinks));
    
    // check if the clicked button has the class "save-button". if so, alert triggered
    if (this.classList.contains("save-button")) {
      alert(`Recipe added! You have ${savedRecipes.length} saved recipe(s).`);
    }
  });
}

// Add saved recipes to savedRecipes.html page
function loadSavedRecipes() {
  const table = document.getElementById("yourRecipes");
  const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
  const recipeLinks = JSON.parse(localStorage.getItem("recipeLinks")) || [];

  for (let i = 0; i < savedRecipes.length; i++) {
    const row = table.insertRow(-1);
    const cell = row.insertCell(0);
    cell.innerHTML = `${savedRecipes[i]} <a href="${recipeLinks[i]}">View Recipe</a>`;
  }
}

window.addEventListener("load", loadSavedRecipes);

// likes function created
function likeRecipe(recipeName) {
    // get current "likes" count 
    let likes = parseInt(localStorage.getItem(`likes-${recipeName}`)) || 0;
    // increment likes count
    likes++;
    // store updated "likes" count in localStorage
    localStorage.setItem(`likes-${recipeName}`, likes);
    // update span element to display the updated "likes" count
    document.getElementById(`likes-${recipeName}`).textContent = likes;
    alert(`You have liked this recipe!`);
}


// comment form validation

document.querySelector('button').addEventListener('click', () => {
    const contactForm = document.querySelector('#contact-form');
    const contactName = document.querySelector('[name="contact-name"]');
    const contactEmail = document.querySelector('[name="contact-email"]');
    const contactMessage = document.querySelector('[name="contact-message"]');
    if(contactName.value.length===0 || contactEmail.value.length===0 || contactMessage.value.length===0){
      alert('Please enter your contact details and message')
    }else{
      alert('Thank you. We will be in touch soon!');
      contactForm.reset()
    }
})
  

// comment form validation

document.querySelector('#comment-form').addEventListener('submit', () => {
    const commentForm = document.querySelector('#comment-form');
    const commentName = document.querySelector('[name="comment-name"]');
    const commentMessage = document.querySelector('[name="comment-message"]');
    if (commentName.value.length === 0 || commentMessage.value.length === 0) {
      alert('Please enter your username and comment');
    } else {
      alert('Thank you for your comment!');
      commentForm.reset()
    }
});
  