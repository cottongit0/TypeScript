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
    switch (login.state) {
      case "success":
        console.log(`${login.response.body}`);
        break;
      case "fail":
        console.log(`${login.reason}`);
        break;
      case "loading":
        console.log(`${login.state}`);
    }
  }

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "😃 loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "😱 no network" }); // 😱 no network
}
