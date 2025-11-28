import http from "k6/http";
import { sleep } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
  return {
    "report.html": htmlReport(data),
  };
}

export let options = {
 vus:200,
 duration:"120s",
};
export default function () {
  http.get("http://localhost:5050/");
  sleep(1); // wait 1 second between requests
}
