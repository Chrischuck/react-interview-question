# React interview question

## Objective

Create a React application that reads a CSV file and displays it in a table view.

It must do the following:

1. Allow a user to drag + drop CSV file into the ui
2. Display each row effectively
3. Allow row selection/highlighting

## Considerations/Rules

1. CSV file starts off as small, but this should scale to 1M+ rows
2. Performance, try not to lock the browser on this one
3. UI doesn't have to be pretty, but it shouldn't be ugly
4. Try to complete this in under 1 hour
5. Google and NPM modules are fair game

## Instructions

1. Run `npm install`
2. Run `npm run generate-csv:sm` to create a dataset size 1000. This will make a file called `data.csv` in the root directory
3. Run `npm run start` to spin up the app on `localhost:1234`
4. To test on larger datasets, run `npm run generate-csv:md` for 100k rows and `npm run generate-csv:lg` for 1M rows
5. Have fun

# Post Completion Questions

1. Would your solution be able to handle an extremely large CSV file(1GB+)? If not, how would you fix it.
2. What ways could you improve your solution?
3. How would you implement editing of row data
4. How would you implement exporting edited data to CSV

# Demo

![demo](./demo.gif)
