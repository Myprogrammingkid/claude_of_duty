type Handler<T> = (payload: T) => void;

/** Minimal typed pub/sub bus. */
export class EventBus<M extends object> {
  private handlers = new Map<keyof M, Set<Handler<never>>>();

  on<K extends keyof M>(key: K, handler: Handler<M[K]>): () => void {
    let set = this.handlers.get(key);
    if (!set) {
      set = new Set();
      this.handlers.set(key, set);
    }
    set.add(handler as Handler<never>);
    return () => set!.delete(handler as Handler<never>);
  }

  emit<K extends keyof M>(key: K, payload: M[K]): void {
    const set = this.handlers.get(key);
    if (!set) return;
    for (const h of set) (h as Handler<M[K]>)(payload);
  }

  clear(): void {
    this.handlers.clear();
  }
}
