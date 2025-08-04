import Exceljs from "exceljs";

export function basicWorkbookNWorksheetOprs() {
  const workbook = new Exceljs.Workbook(); //workbook created
  workbook.properties.date1904 = true;
  let { creator, created, lastModifiedBy } = workbook; //mostly used props

  creator = "me";
  lastModifiedBy = "him";
//   created = new Date().toLocaleDateString("en-US", {                             //? One Method
//       timeZone: "Asia/karachi"
//   })

created = `${new Date().toLocaleDateString()}  ${new Date().toLocaleTimeString()}`



  //? ================Console logs================
  //* console.log(workbook)
//      console.log(created, creator, lastModifiedBy);
}
