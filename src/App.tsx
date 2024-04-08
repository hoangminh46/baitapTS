import "./App.css";

function App() {
  //Bai tap Date - Typescript
  //bai 1:
  const today: Date = new Date();
  const day: number = today.getDate();
  const month: number = today.getMonth() + 1;
  const year: number = today.getFullYear();
  const formattedDate = day + "/" + month + "/" + year;

  console.log(formattedDate);

  //bai2
  function getDaysinMonth(month: number, year: number): number {
    return new Date(year, month, 0).getDate();
  }
  console.log(getDaysinMonth(2, 2024));

  //bai 3:
  function checkWeekend(day: number, month: number, year: number): void {
    const checkDate: number = new Date(year, month - 1, day).getDay();
    if (checkDate === 0 || checkDate === 6) {
      console.log("Ngày cuối tuần");
    } else {
      console.log("Ngày trong tuần");
    }
  }
  checkWeekend(7, 4, 2024);

  //bai4
  function getMinutes(hr: number, min: number): number {
    return hr * 60 + min;
  }
  console.log(getMinutes(2, 20));

  //bai 5
  function getDayPassed(): void {
    const today: Date = new Date();
    const startOfYear: Date = new Date(today.getFullYear(), 0, 1);

    const timeDiff: number = today.getTime() - startOfYear.getTime();
    const daysPassed: number = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    console.log(daysPassed);
  }
  getDayPassed();

  //bai6
  function calculateAge(birthDate: string): number {
    const today: Date = new Date();
    const birth: Date = new Date(birthDate);

    let age: number = today.getFullYear() - birth.getFullYear();

    if (
      today.getMonth() < birth.getMonth() ||
      (today.getMonth() === birth.getMonth() &&
        today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  }

  console.log(calculateAge("2000-06-04"));

  //bai 7

  function getStartOfWeek(date: Date): void {
    const startOfWeek = new Date(date);
    const dayOfWeek = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    startOfWeek.setDate(diff);
    console.log(startOfWeek);
  }
  getStartOfWeek(today);

  // Bai 8

  function getLastDayOfMonth(): void {
    const month = today.getMonth();
    const year = today.getFullYear();

    const nextMonth = new Date(year, month + 1, 1);

    nextMonth.setDate(nextMonth.getDate() - 1);

    const dayOfWeek = nextMonth.toLocaleDateString("en-US", {
      weekday: "long",
    });
    const dayOfMonth = nextMonth.getDate();

    console.log(dayOfWeek + ", " + dayOfMonth);
  }
  getLastDayOfMonth();

  // bai9

  function countdownToNewYear(): void {
    const currentYear: number = today.getFullYear();
    const newYearDate: Date = new Date(currentYear + 1, 0, 1);
    const timeRemaining: number = newYearDate.getTime() - today.getTime();
    const daysRemaining: number = Math.ceil(
      timeRemaining / (1000 * 60 * 60 * 24)
    );
    console.log(`Còn ${daysRemaining} ngày đến tết Dương lịch`);
  }

  countdownToNewYear();

  return (
    <>
      <h1>Bai tap AMELA</h1>
    </>
  );
}

export default App;
