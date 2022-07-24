import "./app3.css";
import $ from "jquery";

const $square = $("#app3 .square");
$square.on("click", () => {
  // $.toggleClass 如果没有就加上，如果有就去除
  $square.toggleClass("active");
});
