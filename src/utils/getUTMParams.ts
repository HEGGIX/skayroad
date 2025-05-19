export function getUTMParams(): Record<string, string> {
    const params = new URLSearchParams(window.location.search)
    const utm: Record<string, string> = {}

    for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_id']) {
        const value = params.get(key)
        if (value) {
            utm[key] = value
        }
    }

    return utm
}