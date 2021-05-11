{
  function checkNotNull(arg: number | null): number {
    if (arg == null) {
      throw new Error("잘못된 값을 입력했습니다.");
    }
    return arg;
  }
  console.log(checkNotNull(23));
  console.log(checkNotNull(null));

  function checkNotNullAny(arg: any | null): any {
    if (arg == null) {
      throw new Error("유효한 값이 아닙니다.");
    }
    return arg;
  }

  const anyResult = checkNotNullAny(23);
  console.log(anyResult);

  function checkNotNullGeneric<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("유효한 값이 아닙니다.");
    }
    return arg;
  }
  const number = checkNotNullGeneric(231);
  const boal: boolean = checkNotNullGeneric(true);
}
