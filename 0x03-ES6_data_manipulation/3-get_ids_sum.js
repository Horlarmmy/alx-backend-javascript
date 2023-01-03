export default function getStudentIdsSum(array1) {
  const totalId = array1.reduce((x, y) => x + y.id, 0);
  return totalId;
}
