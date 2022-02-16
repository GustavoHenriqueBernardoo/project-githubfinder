// Init Github
const github = new Github;
// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get the input text
  const userText = e.target.value;
  if(userText !== ''){
    // Make a http call and fetch the data from the API
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found'){
          // Show alert 
          ui.showAlert('User not found', 'alert alert-danger');
        }else{
          // Show profile 
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  }else {
    // Clear profile
    ui.clearProfile();
  }
  }
);