export const delay = <F>(ms: number, fn: F):Promise<F> => {
    return new Promise((res) => {
        setTimeout(() => res(fn), ms)
    })
}
