import en from "@/locales/en.default.json";

const flatten = (obj: any, prefix = ""): Record<string, string> => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        const path = prefix ? `${prefix}.${key}` : key;
        if (typeof value === "object" && value !== null) {
            Object.assign(acc, flatten(value, path));
        } else {
            acc[path] = value as string;
        }
        return acc;
    }, {} as Record<string, string>);
};

const flatLocale = flatten(en);

export const translate = (key: string): string => {
    return flatLocale[key] || key;
};
