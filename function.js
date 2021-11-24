
window.function = function (data, qtl, delimiter) {
  
  const ss = await import("https://unpkg.com/simple-statistics@7.7.0/dist/simple-statistics.min.js");
  
  data = data.value ?? "";
  qtl = qtl.value ?? "";
  delimiter = delimiter.value ?? ", ";
  
  return ss.quantile(data, 0.33);

}
