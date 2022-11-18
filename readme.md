# check-dependencies

This script checks dependencies of your project.

## Installation

```sh
# Recomended
npx npx @nurjs/check-dependencies

# OR an alternative global install
npm install -g @nurjs/check-dependencies
```

## Usage

Check dependencies of your project using:

```sh
check-dependencies -p [path to your project] -u true
```

### arguments

| argument | alias | description                                                              | default   | example                                 |
| -------- | ----- | ------------------------------------------------------------------------ | --------- | --------------------------------------- |
| path     | p     | path to your project (can be relative)                                   | undefined | check-dependencies -p ../nurjs          |
| upgrade  | u     | is used to run upgrade command and npm install to make the update happen | true      | check-dependencies -u false -p ../nurjs |
| version  | v     | prints version of this tool                                              | -         | check-dependencies -v                   |
| debug    | d     | print debug info                                                         | false     | check-dependencies -d                   |
| ckear    | c     | clear the console                                                        | true      | check-dependencies -c false             |
| noClear  | -     | Don't clear the console                                                  | false     | check-dependencies --noClear true       |

## contributions
check [contributions instructions](https://