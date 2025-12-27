- Definition SOLI ==D==
  card-last-interval:: 4
  card-repeats:: 1
  card-ease-factor:: 2.36
  card-next-schedule:: 2024-11-17T15:12:04.775Z
  card-last-reviewed:: 2024-11-13T15:12:04.777Z
  card-last-score:: 3
	- => Code should depend on abstractions (interfaces or abstract classes) rather than concrete implementations
- Don't do that
- ```php
  class Lion {
      public function eat(Meat $meat) {
          echo "Lion is eating " . $meat->getType();
      }
  }
  
  class Meat {
      public function getType() {
          return "beef";
      }
  }
  
  ```
- Do this
- ```php
  interface Animal {
      public function eat(Food $food);
  }
  
  interface Food {
      public function getType(): string;
  }
  
  class Lion implements Animal {
      public function eat(Food $food) {
          echo "Lion is eating " . $food->getType();
      }
  }
  
  class Meat implements Food {
      public function getType(): string {
          return "beef";
      }
  }
  
  class Hay implements Food {
      public function getType(): string {
          return "hay";
      }
  }
  ```