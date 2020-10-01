
export default interface DOMEvent<T extends EventTarget> extends Event {
    target: T;
    currentTarget: T;
}