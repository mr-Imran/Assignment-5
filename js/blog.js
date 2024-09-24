const blogdata = [
    {
        blogtitle : "What is the Document Object Model (DOM)?",
        blogcontent : "The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page."
    },
    {
        blogtitle: "How do you select an element from the DOM?",
        blogcontent: "You can select an element by using the document.querySelector() method. This method takes a CSS selector as an argument and returns the first element that matches the selector. If no elements match the selector, the method returns null."

    },
    {
        blogtitle: "What is event delegation in the context of the DOM, and why is it useful?",
        blogcontent: "Event delegation is a technique for handling events where you delegate event handling to a common ancestor. This is useful because it allows you to attach a single event listener to the common ancestor, rather than attaching multiple event listeners to individual elements. This can improve performance and reduce memory usage, especially when dealing with a large number of elements."

    },
    {
        blogtitle: "How do you manipulate an element's attributes and styles using the DOM?",
        blogcontent: "You can manipulate an element's attributes using the setAttribute() and getAttribute() methods. To manipulate an element's styles, you can use the style property of the element, which provides access to the element's inline styles as a CSSStyleDeclaration object. You can set individual style properties using the style object, or you can set the element's inline styles using the setAttribute() method with the style attribute."
    }
];

function generateblog() {
    const section = document.getElementById('blogs');
    blogdata.forEach(item => {
        const bloghtmlcode = `
            <div class="card lg:card-side bg-base-100 shadow-xl p-8 mt-10 rounded-2xl border border-[#1111111A]">
                <div class="card-body gap-4">
                    <h2 class="card-title">${item.blogtitle}</h2>
                    <p>${item.blogcontent}</p>
                </div>
            </div>
        `;
        section.innerHTML += bloghtmlcode;
    }
    );
}

generateblog();


