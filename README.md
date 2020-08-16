# React interview question

![demo](./demo.gif)

## Objective

Create a React application that reads a CSV file and displays it in a table view.

It must do the following:

1. Allow a user to drag + drop CSV file into the ui
2. Display each row effectively
3. Allow row selection/highlighting
4. Allow editing of row data

## Considerations/Rules

1. CSV file starts off as small, but this should scale to 1M+ rows
2. User experience, we want as little stutter/lag. No slow parsing, no janky scrollign, etc.
3. UI doesn't have to be pretty, but include cells/rows breaks in the table and a easily visible area to drag and drop the CSV file
4. Google and NPM modules are fair game

## Instructions

1. Run `npm install`
2. Run `npm run generate-csv:sm` to create a dataset size 100. This will make a file called `data.csv` in the root directory
3. Run `npm run start` to spin up the app on `localhost:1234`
4. To test on larger datasets, run `npm run generate-csv:md` for 100k rows and `npm run generate-csv:lg` for 1M rows
5. Have fun
