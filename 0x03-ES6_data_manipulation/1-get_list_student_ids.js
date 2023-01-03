export default function getListStudentIds(array1) {
  if (!Array.isArray(array1)) {
    return [];
  }
  const arrayId = array1.map(x => x.id);
  return arrayId;
}
