{
  // Enum
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;

  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUSEDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Tursday,
    Friday,
    Satarday,
    Sunday,
  }
  console.log(Days.Friday);
  let day: Days = Days.Monday;
  day = Days.Tuesday;
  day = 10;
  console.log(day);

  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  let dayOfWeek: DaysOfWeek = "Monday";
  dayOfWeek = "Tuesday";
}
