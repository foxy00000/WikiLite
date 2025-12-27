- Definition SOL ==I== D
  card-last-interval:: 4
  card-repeats:: 1
  card-ease-factor:: 2.36
  card-next-schedule:: 2024-11-17T15:14:25.745Z
  card-last-reviewed:: 2024-11-13T15:14:25.747Z
  card-last-score:: 3
	- => Clients should not be forced to implement interfaces they don’t use. So we segregate them into smaller usable ones
- Don't do that
- ```php
  interface AppInterface {
      public function sendEmail();
      public function processPayment();
      public function generateReport();
      public function updateUserProfile();
      public function scheduleAppointment();
      public function calculateTaxes();
      public function trackShipment();
      // ... dozens more methods
  }
  ```
- Do this
- ```php
  interface EmailInterface {
      public function sendEmail();
  }
  
  interface PaymentInterface {
      public function processPayment();
  }
  
  interface ReportingInterface {
      public function generateReport();
  }
  
  // ... dozen more interfaces
  ```