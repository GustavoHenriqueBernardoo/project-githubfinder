class UI {
  constructor(){
    this.profile = document.getElementById('profile');
  }
  // Display profile in UI
  showProfile(user){
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: <a href="https://${user.blog}" target="_blank">${user.blog}</a></li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Show user repos
  showRepos(repos) {
    let output = '';

    repos.forEach(function(repo) {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Output repos
    document.getElementById('repos').innerHTML = output;
  }
  // An easier way to alert and clear alert
  
  /*
  showAlert(message, className) {
    this.profile.innerHTML = `<div class="${className}">${message}</div>`;
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  } 
  clearAlert() {
    this.profile.innerHTML = "";
  }
  */

  // Show alert message in the UI
  showAlert(message, className){
    // Clear any remaining Alerts
    this.clearAlert();
    // Create a Div
    const div = document.createElement('div');
    // Give class to the div
    div.className = className;
    // Add the text message into the div.
    div.appendChild(document.createTextNode(message))
    // Get two elements to insert the div inside. 
    // First, select a container to insert the div on it. 
    // And then, select an element to go after the div.
    const container = document.querySelector('.searchContainer');
    const searchCard = document.querySelector('.search');
    // put the div inside a container
    container.insertBefore(div, searchCard);

    // Timeout after 2 sec
    setTimeout(() => {
      // div.className = '', div.textContent = '';
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert(){
    const currentAlert = document.querySelector('.alert');

    // Checking if currentAlert already exist, and if yes, remove the others.
    if(currentAlert){
      currentAlert.remove();
    }
  }

  // Clear the UI if the text input is = to nothing.
  clearProfile(){
    this.profile.innerHTML = ''
  }
}