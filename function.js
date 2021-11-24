
window.function = function (data, qtl, delimiter) {
  
  const math = await import("https://cdn.skypack.dev/mathjs");
  
  data = data.value ?? "";
  qtl = qtl.value ?? "";
  delimiter = delimiter.value ?? ", ";
  
  var arr = data.value.split(delimiter);
  
  return math.evaluate(quantileSeq(arr, qtl, false));

}
