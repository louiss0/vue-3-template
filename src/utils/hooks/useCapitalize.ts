
function setString(string: string) {
    return string
        .split(" ")
        .map((string) =>
            `${string.charAt(0).toUpperCase()}${string.slice(1)}`)
        .join("  ")
}

export function useCapitalize(string: string, filter?: string | RegExp) {


    if (filter) {
        return setString(string.replace(filter, " "))

    }


    return setString(string)


}




