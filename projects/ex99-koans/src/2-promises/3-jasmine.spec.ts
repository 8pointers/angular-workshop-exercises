describe('Simpler tests using jasmine-promises', function () {
  const __: any = 'replace me so that the test is passing';
  const getResource = function (url: string) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onreadystatechange = function () {
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
    },
    leaderboardService = {
      getLeaderboard: function () {
        return getResource('assets/leaderboard.json');
      },
      getLeaderboardBadJSON: function () {
        return getResource('assets/leaderboard-bad-json.json');
      },
      getLeaderboard404: function () {
        return getResource('assets/leaderboard-404.json');
      }
    };
  it('should understand resolve', function () {
    return leaderboardService.getLeaderboard().then(leaderboard => expect(leaderboard).toEqual(__));
  });
  it('should understand reject (1)', function () {
    return leaderboardService.getLeaderboardBadJSON().catch(reason => expect(reason).toEqual(new Error(__)));
  });
});
