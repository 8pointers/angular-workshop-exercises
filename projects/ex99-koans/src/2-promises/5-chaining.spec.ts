describe('Chaining', function() {
  const __: any = 'replace me so that the test is passing';
  const getResource = function(url: string) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200 || xhr.status === 304) {
            try {
              resolve(JSON.parse(xhr.responseText));
            } catch (e) {
              reject(e);
            }
          } else {
            reject(new Error('HTTP request failed'));
          }
        }
      };
      xhr.send();
    });
  };
  it('should understand chaining', function() {
    return getResource('assets/player/1.json')
      .then((player: any) => player.name)
      .then(result => expect(result).toBe(__))
      .catch(reason => console.log('This should not be reached', reason));
  });
  it('should understand chaining 2', function() {
    return getResource('assets/leaderboard.json')
      .then((leaderboard: any) =>
        getResource(`assets/player/${leaderboard[0].id}.json`)
      )
      .then((player: any) => player.name)
      .then(result => expect(result).toBe(__))
      .catch(reason => console.log('This should not be reached', reason));
  });
  it('should understand chaining 3', function() {
    return getResource('assets/leaderboard.json')
      .then((leaderboard: any) =>
        getResource(`assets/player/${leaderboard[5]}.json`)
      )
      .then((player: any) => player.name)
      .catch(reason => expect(reason).toEqual(__));
  });
});
