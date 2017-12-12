module.exports = robot => {
  // Your code here
  console.log("Yay, the app was loaded!");

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/

  module.exports = robot => {
    robot.on("pull_request.opened", async context => {
      console.log("Received event");
      // `context` extracts information from the event, which can be passed to
      // GitHub API calls. This will return:
      //   {owner: 'yourname', repo: 'yourrepo', number: 123, body: 'Hello World!}
      const params = context.issue({ event: "APPROVE" });
      console.log(params);

      // Post a comment on the issue
      return context.github.pull_request.createReview(params);
    });
  };
};
