class Github {
  constructor(){
    this.client_id = '10733732056a9551a37e';
    this.cliente_secret = 'aa2cba7915e7206c969f8368b97ae5412f6331d6';
    this.repos_count = 5;
    this.repos_sort = 'created: asc'
  }

  // Get user method

  async getUser(user){

    // Fetch the api and selecting the user
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    // Grab the json data from the var profileResponse
    const profile = await profileResponse.json();

    const repos = await repoResponse.json();


    return {
      profile, // in ES6 this is equal to: profile: profile
      repos
    }
  }
}