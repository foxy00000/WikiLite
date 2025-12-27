- The first aspect to get better in functional programming is relying more on constants => `const` instead of variables => `var` and `let` (unfold for the example)
  collapsed:: true
	- ```javascript
	  // Non-functional
	  let sum = 10;
	  sum = sum + 1;
	  
	  // functional
	  const sum = 10 + 1
	  ```
	- => Notice how functional programming takes only one line to write due to its declerative nature (you can read it like a sentence which increases maintainability)
- This also applies to declearing functions themselves (unfold for the example)
  collapsed:: true
	- ```javascript
	  // Non-functional
	  function add(a, b) {
	      return a + b;
	  }
	  
	  // functional
	  const add = (a, b) => {
	      return a + b;
	  }
	  ```
	- => This prevents accidental reassignment by the immutability of `add`