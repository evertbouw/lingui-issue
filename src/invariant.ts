// eslint-disable-next-line lingui/no-unlocalized-strings
export function invariant(condition: boolean, message = 'Invariant violation'): asserts condition {
    if (!condition) throw new Error(message);
}
