import mitt from "mitt"
import { useEffect, useCallback } from "react"

type Events = {
  "toast:show": { message: string; type: "success" | "error" | "warning" }
  "toast:dismiss": { id?: string }
  "modal:open": { id: string; data?: unknown }
  "modal:close": { id?: string }
  [key: string]: { id: string } | object
}

export const events = mitt<Events>()

export function useEvent<K extends keyof Events>(
  event: K,
  callback: (data: Events[K]) => void
) {
  const stableCallback = useCallback(callback, [callback])

  useEffect(() => {
    events.on(event, stableCallback)
    return () => events.off(event, stableCallback)
  }, [event, stableCallback])
}

export function emit<K extends keyof Events>(event: K, data: Events[K]) {
  events.emit(event, data)
}
