type StorageKey = "auth-token" | "user-preferences" | "theme"

export const storage = {
  get<T>(key: StorageKey): T | null {
    if (typeof window === "undefined") return null
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch {
      return null
    }
  },

  set<T>(key: StorageKey, value: T): void {
    if (typeof window === "undefined") return
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error("Storage set error:", error)
    }
  },

  remove(key: StorageKey): void {
    if (typeof window === "undefined") return
    localStorage.removeItem(key)
  },

  clear(): void {
    if (typeof window === "undefined") return
    localStorage.clear()
  },
}
