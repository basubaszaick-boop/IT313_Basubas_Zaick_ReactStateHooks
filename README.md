# IT313 Laboratory 5 - React State and Hooks

## Lab Timer & Practice Tracker

This project is a React Native application created using Expo.

The application allows students to track solved practice problems and measure their laboratory time using a stopwatch.

## Components

### PracticeTracker

PracticeTracker receives the following props:

- solved
- onSolve
- onReset

It displays the number of solved problems and provides Solve +1 and Reset buttons.

It also displays "Great job!" when the solved count reaches 5.

### LabScreen

LabScreen is the parent component.

It owns:

- solved state
- isRunning state

It also handles the Solve +1, Reset, Start, and Stop events.

### Stopwatch

Stopwatch receives:

- seconds
- isRunning

as props from LabScreen.

It displays the elapsed time and either "Running..." or "Paused".

### useStopwatch

useStopwatch is a custom hook.

It uses useState to store the elapsed seconds and useEffect to create an interval while the stopwatch is running.

The cleanup function clears the interval when the stopwatch stops or when the component unmounts.

## React Concepts Demonstrated

- useState
- useEffect
- Dependency array
- Cleanup function
- Conditional rendering
- Event handling
- Lifting state up
- Custom hooks
- Props

## How to Run

Install the project dependencies:

npm install

Start the Expo development server:

npx expo start

Open the application using Expo Go.

## Expected Behavior

- Solved starts at 0.
- Solve +1 increases the solved count.
- Reset returns solved to 0.
- Great job! appears when solved reaches 5.
- Start begins the stopwatch.
- Stop pauses the stopwatch.
- The timer continues from its current value after pressing Start again.