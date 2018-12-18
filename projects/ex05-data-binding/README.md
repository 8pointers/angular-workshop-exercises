## Exercise 1

Implement the _app-countdown_ component that shows remaining time (in seconds) until _to_ time and then updates itself once every second. When the _to_ time is reached, the component should render 'Time is up!'.

```javascript
<app-countdown [to]="aBitLater"></app-countdown>
```

## Exercise 2

Implement Game of Life component, so that size of the grid (n) and cell dimensions (width and height) can be configured.

```javascript
<app-game-of-life [n]="10" [width]="20" [height]="20"></app-game-of-life>
```

## Exercise 3

Change the _app-todo_ component so that items can be marked as done/undone when they are clicked. Also, add the ability to specify which items to show - all, only done or only undone.
