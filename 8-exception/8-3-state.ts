{
  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
  };
  type SuccessState = {
    result: "success";
  };

  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    // tryConnect(): ResultState {}
  }

  class UserService {
    constructor(private client: NetworkClient) {}
    login() {
      this.client.tryConnect();
      //login...
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  // service.login();

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // 유저에게 에러 사항을 출력한다.
        console.log("에러 확인");
      }
    }
  }

  const app = new App(service);
  app.run();
}
