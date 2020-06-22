## Exercise 2

Create (usling angular-cli; see below and [https://angular.io/cli/generate](https://angular.io/cli/generate) for more info) and implement a message-of-the-day component that displays a random message of the day (from a predefined list of messages):

```bash
npm run generate component message-of-the-day -- \
--inlineStyle=true --inlineTemplate=true --skipTests=true --project=ex02-component
```

```typescript
const messages = [
  'They don’t make bugs like Bunny anymore.',
  'Talk is cheap. Show me the code.',
  'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.',
  'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.',
  'In theory, theory and practice are the same. In practice, they’re not.',
  'Good design adds value faster than it adds cost.'
];
```

Make sure your component is rendered on the homepage.
