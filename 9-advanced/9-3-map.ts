{
  type Video = {
    title: string;
    author: string;
  };
  // Not use MapType
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };
  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // };

  type Optional<T> = {
    [P in keyof T]?: T[P]; //for ...in
  };
  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: "hi",
  };

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: "dog",
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoReadOnly = Readonly<Video>;
  const videoRo: VideoReadOnly = {
    title: "mapping",
    author: "cotton",
  };

  const video: ReadOnly<Video> = {
    title: "mapping",
    author: "cotton",
  };

  type Nullabe<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullabe<Video> = {
    title: "Hi",
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };
  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
