export default function dateToString(date: number){
    const d = new Date(date);
    return d.toLocaleString('en-US', {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "numeric",
        hour12: false,
        minute: "numeric"
    });
}
