export const getInitial = (s) => {
    let arr = s.trim().split(" ");
    let initial = "";
    if (arr.length === 0) return initial;
    if (arr.length === 1) return (initial += arr[0][0].toUpperCase());
    initial += arr[0][0].toUpperCase();
    initial += arr[1][0].toUpperCase();
    return initial;
}