interface Page {
    readonly text: string;
}

function read (page: Page): void {
    console.log(page.text);
    
    // page.text += "!"
    
}

const PageIsh = {
    text: "Hello, World!"
}

PageIsh.text += "!"

read(PageIsh)