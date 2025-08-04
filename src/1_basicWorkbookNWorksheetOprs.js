import Exceljs from "exceljs";

export function basicWorkbookNWorksheetOprs() {
  const workbook = new Exceljs.Workbook();
  let { creator, created, lastModifiedBy } = workbook;

  creator = "me";
  lastModifiedBy = "him";

  // ================Console logs================
  // console.log(workbook)
  console.log(created, creator, lastModifiedBy);
}
