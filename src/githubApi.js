const axios = require('axios');

class GithubApi {
  constructor(token, orgName, repoName) {
    this.headers = {
      'Authorization': `token ${token}`,
      'User-Agent': 'Issue-Importer',
    };
    this.orgName = orgName;
    this.repoName = repoName;
  }

  async createIssue(issue) {
    const url = `https://api.github.com/repos/${this.orgName}/${this.repoName}/issues`;
    try {
      const response = await axios.post(url, issue, { headers: this.headers });
      return `Successfully created issue #${response.data.number}: ${issue.title}`;
    } catch (error) {
      throw new Error(`Failed to create issue ${issue.title}: ${error}`);
    }
  }
}

module.exports = GithubApi;
