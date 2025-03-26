export const formatDate = (isoDate: string): string => {
    if (!isoDate) return "Unknown Date";
    return new Date(isoDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};

export const capitalizeFirstLetter = (text: string): string => {
    return text ? text.charAt(0).toUpperCase() + text.slice(1) : "";
};

export const truncateText = (text: string, maxLength: number = 100): string => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};
