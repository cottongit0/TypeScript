{
  // Intersection Types <AND>
  type Students = {
    name: string;
    score: number;
  };
  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Students & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  internWork({
    name: "cotton",
    score: 1,
    employeeId: 123,
    work: () => {},
  });
}
