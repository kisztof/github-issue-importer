# GitHub Issue Importer

## Description

This Node.js script allows you to import GitHub issues from a CSV file into a specified GitHub repository. It's a convenient way to bulk-create GitHub issues without manual effort.

## Features

- Prompts for GitHub token, repository name, and organization name
- Reads issues from a CSV file
- Creates issues in the specified GitHub repository
- Caches GitHub token locally for future use

## Installation

### From GitHub

1. Clone this repository:

    ```bash
    git clone https://github.com/kisztof/github-issue-importer.git
    ```

2. Navigate to the project directory:

    ```bash
    cd github-issue-importer
    ```

3. Install the required packages:

    ```bash
    yarn install
    ```

### From npm

This package is also available on npm. You can install it using the following command:

```bash
yarn add github-issue-importer
```

#### Global Installation

To install the package globally, allowing you to run it from any directory, use:

```bash
yarn global add github-issue-importer
```

After installing globally, you can run the script from any directory by simply typing:

```bash
github-issue-importer [path/to/your/csvfile.csv]
```

## Usage

1. Run the script:

    ```bash
    node dist/import.js [path/to/your/csvfile.csv]
    ```

    If you don't provide a path, it will default to using ```tasks.csv```.

2. Follow the prompts to enter your GitHub token, repository name, and organization name.

3. The script will read the CSV file and start creating issues in the specified GitHub repository.

## CSV Format

The CSV file should have the following columns:

- ```title```: The title of the issue
- ```description```: The description of the issue
- ```labels```: The labels for the issue, separated by semicolons
- ```priority```: The priority of the issue

Example:

```csv
title,description,labels,priority
Fix login bug,"Login fails when password contains special characters",bug;high,1
Add logout feature,"Add a logout button to the main dashboard",enhancement;medium,2
```

## License

This project is licensed under the MIT License. See the ```LICENSE.md``` file for details.
