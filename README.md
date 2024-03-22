# SECRET-WARS

Secret Wars is a comand line interface to allow you managing and view your password and secret
such as your facebook password or other.

## Requirements

- You need to have this following dependencies:
 1. Node.js from [official Node.js website](https://nodejs.org/en) equal or `^v21.7.1`
 2. npm correctly configured

## Installation

Clone this repository, enter to project directory and then 

run ```npm install -g .```

> Notice: soon publish to npm

## Usage

- To list secrets

```secretwars -l```

- To register a secret

```secretwars -r <subject> <secret>```

> Notice: subject and secret should be a string as (secretwars -r "facebook" "passwd")

## Bugs

- Displaying secrets is in JSON format
