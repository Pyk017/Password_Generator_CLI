# Command Line Random Password Generator

Node.js command line app to generate random passwords

## Usage

Install dependencies

```
npm install
```

Run file

```
node index (options)
```

To create a symlink to run "virgorandompass" from anywhere

```
npm link

# Now you can run
passgen (options)

# To remove symlink
npm unlink
```

## Options

| Short | Long                | Description                     |
| ----- | ------------------- | ------------------------------- |
| -l    | --length <_number_> | length of password (default: 8) |
| -s    | --save <_filename_> | save password to your filename  |
| -nn   | --no-numbers        | remove numbers                  |
| -ns   | --no-symbols        | remove symbols                  |
| -h    | --help              | display help for command        |
| -V    | --version           | Show the version                |
