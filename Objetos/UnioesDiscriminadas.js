"use strict";
const poem2 = Math.random() > 0.5
    ? { name: "The Double Image", pages: 7, type: "pages" }
    : { name: "Her Kind", rhymes: true, type: "rhymes" };
if (poem2.type == "pages") {
    console.log(`It's got pages: ${poem2.pages}`);
}
else {
    console.log(`It rhymes: ${poem2.rhymes}`);
}
poem2.type;
// poem2.pages
