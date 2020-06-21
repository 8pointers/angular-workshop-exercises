describe('Using promise-based API', function () {
  const __: any = 'replace me so that the test is passing';
  const leaderboardService = {
    getLeaderboard: function () {
      return fetch('assets/leaderboard.json').then((response: any) => response.json());
    },
    getLeaderboard2: function () {
      return fetch('assets/leaderboard2.json').then((response: any) => response.json());
    },
  };
  it('should understand how async values can be represented using promises', function (done) {
    leaderboardService.getLeaderboard().then(
      (leaderboard: any) => {
        expect(leaderboard).toEqual(__);
        done();
      },
      () => {
        done.fail('This should not be executed');
      }
    );
  });
  it('should understand how promises can also represent failures', function (done) {
    leaderboardService.getLeaderboard2().then(
      () => {
        done.fail('This should not be executed');
      },
      (reason: Error) => {
        expect(reason).toEqual(__);
        done();
      }
    );
  });
});
