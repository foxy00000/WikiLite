- Definition S ==O== LID
  card-last-interval:: 4
  card-repeats:: 1
  card-ease-factor:: 2.6
  card-next-schedule:: 2024-11-17T15:07:55.237Z
  card-last-reviewed:: 2024-11-13T15:07:55.241Z
  card-last-score:: 5
	- => Software should be open to extension, but closed to modification
- Don't do that
- ```php
  class Bird {
      public function makeSound($birdType) {
          if ($birdType === 'duck') return 'Quack!';
          if ($birdType === 'chicken') return 'Cluck!';
          // Adding new birds requires modifying this class
      }
  }
  ```
- Do this
- ```php
  interface Bird {
      public function makeSound();
  }
  
  class Duck implements Bird {
      public function makeSound() { return 'Quack!'; }
  }
  
  class Chicken implements Bird {
      public function makeSound() { return 'Cluck!'; }
  }
  
  class BirdSounds {
      public function playSound(Bird $bird) {
          return $bird->makeSound();
      }
  }
  
  ```