- Definition ==S== OLID
  card-last-interval:: 4
  card-repeats:: 1
  card-ease-factor:: 2.6
  card-next-schedule:: 2024-11-17T15:18:20.582Z
  card-last-reviewed:: 2024-11-13T15:18:20.582Z
  card-last-score:: 5
	- => One function shall only have one responsibility.
- Don't do that
  ```php
  function doAll() {
    // connect to db
    // put things into table
    // close db
  }
  
  ```
- Do this
  ```php
  connectDb();
  putIntoTable();
  closeDb();
  
  function connectDb() {
    // connect to db
  }
  
  function putIntoTable() {
    // put things into table
  }
  
  function closeDb() {
    // close db
  }
  ```