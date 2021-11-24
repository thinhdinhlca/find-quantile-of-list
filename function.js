
window.function = async function (data, qtl, delimiter) {
  
  const math = await import("https://cdn.skypack.dev/mathjs");
  
  if (data.value === undefined) return undefined;
  
  qtl = qtl.value ?? "";
  delimiter = delimiter.value ?? ", ";
  
  var arr = data.value.split(delimiter);
  
  return math.quantileSeq(arr, qtl, false);

}
