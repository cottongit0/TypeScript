// const array = new Array(10000000000000000000);

function readFile(fileName: string): string {
  if (fileName === "존재하지 않는 파일이름") {
    throw new Error(`해당 이름의 파일이 존재하지 않습니다. ${fileName}`);
  }
  return `파일 내용`;
}

function closeFile(fileName: string) {}

const file = "Cotton";
console.log(readFile(file));
closeFile(file);

const notExist = "존재하지 않는 파일이름";

try {
  console.log(readFile(notExist));
} catch (error) {
  console.log("에러 확인");
} finally {
  closeFile(notExist);
  console.log("finally 출력");
}

function run() {
  const fileName = "존재하지 않는 파일이름";
  try {
    console.log(readFile(notExist));
  } catch (error) {
    console.log("에러 확인");
    return;
  } finally {
    closeFile(fileName);
    console.log("닫기");
  }
}
run();
