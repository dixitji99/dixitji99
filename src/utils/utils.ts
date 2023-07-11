import moment from "moment";

export const getYearsOfExp = () => {
  return moment().diff("2-Jul-2021", "years");
};
