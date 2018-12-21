## Exercise 1

Implement a directive that fires a GA event when clicked.

https://developers.google.com/analytics/devguides/collection/analyticsjs/events

```javascript
<div appGA="video">Click this to send GA event</div>
```

## Exercise 2

Implement 2 directives that can be used to toggle a class on a DOM element.

```javascript
<button appToggle="product-details-123">

<div appToggleable="product-details-123" appToggleableClass="hidden">
  Now you see me
</div>

<button appToggle="shopping-basket">

<div appToggleable="shopping-basket" appToggleableClass="hidden">
  Now you see me
</div>
```
