In this project, let's build a **The Return Journey Game** by applying the concepts we have learned till now.

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- Initially,
  - Score should be `0` and time should be `40` sec
  - The game will display a box that changes color between green and red. The goal of the game is to get to n clicks on the green box within y seconds.
- The timer should start running backwards from the `40` sec
- When a red box is clicked, then the corresponding result should be displayed
- When a green box is clicked,
  - Score is incremented by one

-Once the button is pressed, your app should display a box that changes its color on a random basis. Ideally, it should change no sooner than 1s and no later than 2s.

-If the users click on the red box or if the time has expired, they failed the game and you should display Game Over! message and end the game immediately.

-If the users click on the green box, you should increment their score count by 1. If they manage to click the green box n times within y seconds, they win and you should display You win! message.

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components/GreenLightRedLight` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
