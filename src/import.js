const readline = require("readline");
const GithubApi = require("./githubApi");
const CsvReader = require("./csvReader");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function promptForInfo() {
    const questions = [
        "GitHub Token: ",
        "Repository Name: ",
        "Organization Name: ",
    ];
    const answersPromises = questions.map(
        (question) =>
            new Promise((resolve) => {
                rl.question(question, (answer) => {
                    resolve({ [question]: answer });
                });
            })
    );
    const answersArray = await Promise.all(answersPromises);
    const answers = Object.assign({}, ...answersArray);
    rl.close();
    return answers;
}

async function main() {
    const {
        "GitHub Token: ": token,
        "Repository Name: ": repo,
        "Organization Name: ": org,
    } = await promptForInfo();
    const githubApi = new GithubApi(token, org, repo);
    const csvFilePath = process.argv[2] || "tasks.csv";
    const csvReader = new CsvReader(csvFilePath);

    csvReader.read(async (row) => {
        const issue = {
            title: row.title,
            body: row.description,
            labels: row.labels.split(";"),
            priority: row.priority,
        };
        try {
            const result = await githubApi.createIssue(issue);
            console.info(result);
        } catch (error) {
            console.error(error.message);
        }
    });
}

module.exports = { main };

main();
