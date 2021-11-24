
window.function = function (data, qtl, delimiter) {
  
  const mathjs = await import("https://cdn.skypack.dev/mathjs");
  
  data = data.value ?? "";
  qtl = qtl.value ?? "";
  delimiter = delimiter.value ?? ", ";
  
  arr = data.split(delimiter);
  
  return mathjs.quantileSeq(arr, qtl, false);

}
