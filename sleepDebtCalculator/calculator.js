// 1. The first problem to solve is determining how many hours of sleep you got each night of the week.
function getSleepHours(day) {
    day = day.toLowerCase(); // Convert the day to lowercase for case-insensitive comparison
  
    if (day === 'monday') {
      return 8; // Number of hours of sleep on Monday
    } else if (day === 'tuesday') {
      return 6; // Number of hours of sleep on Tuesday
    } else if (day === 'wednesday') {
      return 8; // Number of hours of sleep on Wednesday
    } else if (day === 'thursday') {
      return 7; // Number of hours of sleep on Thursday
    } else if (day === 'friday') {
      return 6; // Number of hours of sleep on Friday
    } else if (day === 'saturday') {
      return 9; // Number of hours of sleep on Saturday
    } else if (day === 'sunday') {
      return 8; // Number of hours of sleep on Sunday
    } else {
      return 0; // Return 0 if the day is invalid
    }
  }
  
  // test the function by calling it
  console.log(getSleepHours('monday')); // Output: 8
  console.log(getSleepHours('Saturday')); // Output: 9

  const getActualSleepHours = () =>
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');


function getIdealSleepHours() {
    const idealHours = 6; // Your ideal hours of sleep per night
    return idealHours * 7; // Total preferred sleep hours per week
  }
  
  // Example usage
  console.log(getActualSleepHours()); // Output: Sum of actual sleep hours for the week
  console.log(getIdealSleepHours()); // Output: Total preferred sleep hours per week

  const calculateSleepDebt =() =>{
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  };
  function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    const sleepDebt = actualSleepHours - idealSleepHours;
  
    if (actualSleepHours === idealSleepHours) {
      console.log("You got the perfect amount of sleep!");
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got more sleep than needed. You are ${sleepDebt} hours over your ideal sleep.`);
    } else {
      console.log(`You should get some rest. You are ${Math.abs(sleepDebt)} hours under your ideal sleep.`);
    }
  }
  
  calculateSleepDebt(); 