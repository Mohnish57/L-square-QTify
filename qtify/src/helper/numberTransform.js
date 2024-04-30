export default function numberTransform(num) {
  if (typeof num !== Number || isNaN(num)) {
    num = Number(num);
  }

  let len = num.toString().length;

  let scale = "";

  if (len >= 4 || len <= 6) {
    scale = "k";
  } else if (len >= 7) {
    scale = "M";
  }

  let result = "";
  if ((scale = "K")) {
    result = (num / 1000).toFixed(1) + "K";
  } else if ((scale = "M")) {
    result = (num / 100000).toFixed(1) + "M";
  } else {
    result = num.toString;
  }
  return result;
}
