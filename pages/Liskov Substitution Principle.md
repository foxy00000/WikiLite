- Definition SO ==L== ID
  card-last-interval:: 4
  card-repeats:: 1
  card-ease-factor:: 2.36
  card-next-schedule:: 2024-11-17T15:12:48.924Z
  card-last-reviewed:: 2024-11-13T15:12:48.924Z
  card-last-score:: 3
	- => Any code that uses a base type should be able to work with a subtype as well without altering the base class.
- Don't do that
- ```php
  class Bird {
      public function fly() {
          return "I'm flying!";
      }
  }
  
  class Sparrow extends Bird {
      // Inherits fly() and can use it correctly
  }
  
  class Penguin extends Bird {
      public function fly() {
          throw new Exception("Penguins can't fly!");
      }
  }
  ```
- Do this
- ```php
  interface Flyable {
      public function fly();
  }
  
  class Bird {
      // bird properties and methods
  }
  
  class Sparrow extends Bird implements Flyable {
      public function fly() {
          return "I'm flying!";
      }
  }
  
  class Penguin extends Bird {
      // Penguins cannot fly
  }
  ```