/** @type {import("tsup").Options} */
export const libOptions = {
    sourcemap: true,
    minifyWhitespace: true,
    minifySyntax: true,
    target: "node14",
    dts: true,
    format: ["esm", "cjs"],
    splitting: false,
    outDir: "dist/lib/",
};

/** @type {import("tsup").Options} */
export const binOptions = {
    sourcemap: true,
    minifyWhitespace: true,
    minifySyntax: true,
    target: "node14",
    format: ["esm"],
    splitting: false,
    outDir: "dist/bin/",
};
