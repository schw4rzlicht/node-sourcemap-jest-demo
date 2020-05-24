import SourceMapSupport from "source-map-support";

SourceMapSupport.install();

test("test test", () => {

    console.log("some code");
    console.log("some code");
    console.log("some code");
    console.log("some code");

    expect(5).toBe(4);

    console.log("some code");
    console.log("some code");
    console.log("some code");
    console.log("some code");
    console.log("some code");
});
