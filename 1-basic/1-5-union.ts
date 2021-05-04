{
  // Union Types : OR
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("left");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  type login = "suecces" | "fail";

  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: "로그인 성공",
      },
    };
  }

  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(`성공. ${state.response.body}`);
    } else {
      console.log(`실패. ${state.reason}`);
    }
  }
}
