function takeANumber(line, name) {
  return `Welcome, ${name}. You are number ${line} in line.`;
}

function nowServing(katzDeliLine) {
  return katzDeliLine[0];
  katzDeliLine.shift;
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(curLine) {
  return `The line is currently: $
}