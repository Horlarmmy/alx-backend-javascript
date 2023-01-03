export default function getStudentsByLocation(array1, city) {
  const loc = array1.filter((x) => x.location === city);
  return loc;
}
