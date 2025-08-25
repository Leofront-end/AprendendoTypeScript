"use strict";
const poem1 = Math.random() > 0.5
    ? { name: "The Double Image", pages: 7 }
    : { name: "Her Kind", rhymes: true };
poem1.name;
if ("pages" in poem1) {
    poem1.pages;
}
else {
    poem1.rhymes;
}
