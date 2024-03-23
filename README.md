# SECRET-WARS :balloon:

Secret Wars is a comand line interface to allow you managing and view your password and secret
such as your facebook password or other.

## Features
1. Store your password and secret
2. Insert your password and secret
3. Export your password and secret into a txt file

## Requirements

- You need to have this following dependencies:
 1. Node.js from [official Node.js website](https://nodejs.org/en) equal or `^v21.7.1`
 2. npm correctly configured

## Installation

Clone this repository, enter to project directory and then 

run ```npm install``` and ```npm install -g .```

> Notice: soon publish to npm

## Usage

- To list secrets

```secretwars -l```

- To register a secret

```secretwars -r <subject> <secret>```

> Notice: subject and secret should be a string as (secretwars -r "facebook" "passwd")

- Export all your secrets in a txt file

```secretwars -w```

> Notice: the file generated is locate in your current working directory

## Bugs

- Displaying secrets is in JSON format