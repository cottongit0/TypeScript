{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(login: ResourceLoadState) {
    if (login.state === "success") {
      console.log(`${login.response.body}`);
    } else if (login.state === "loading") {
      console.log(`${login.state}`);
    } else {
      console.log(`${login.reason}`);
    }
  }

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "😃 loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "😱 no network" }); // 😱 no network
}
