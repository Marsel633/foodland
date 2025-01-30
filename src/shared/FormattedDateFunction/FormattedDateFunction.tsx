export const FormattedDateFunction = (date: number) => {
    const formattedDate = new Date(date).toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return formattedDate;
  };