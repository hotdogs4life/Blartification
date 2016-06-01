function matchCase(text, pattern) {
    var result = '',
        results_all_caps = true;

    for (var i = 0; i < text.length; i++) {
        var c = text.charAt(i);
        var p = pattern.charCodeAt(i);

        if ((isNaN(p) && results_all_caps) || (p >= 65 && p < 65 + 26)) {
            result += c.toUpperCase();
        } else {
            result += c.toLowerCase();
            results_all_caps = false;
        }
    }

    return results_all_caps === true ? result.toUpperCase() : result;
}

function blartify() {
    var nodeIterator = document.createNodeIterator(
        document.body,
        NodeFilter.SHOW_TEXT
    );
    
    /* List of phrasing elements to Blartify from https://www.w3.org/TR/html-markup/common-models.html#common.elem.phrasing */
    var phrasing_elements = ['a', 'em', 'strong', 'small', 'mark', 'abbr', 'dfn', 'i', 'b', 's', 'u', 'code', 'var', 'samp', 'kbd', 'sup', 'sub', 'q', 'cite', 'span', 'bdo', 'bdi', 'br', 'wbr', 'ins', 'del', 'img', 'embed', 'object', 'iframe', 'map', 'area', 'script', 'noscript', 'ruby', 'video', 'audio', 'input', 'textarea', 'select', 'button', 'label', 'output', 'datalist', 'keygen', 'progress', 'command', 'canvas', 'time', 'meter'];
    
    var currentNode,
        r = new RegExp(/cop{1,2}/, 'gi');

    while (currentNode = nodeIterator.nextNode()) {
        if (phrasing_elements.includes(currentNode.parentElement.tagName.toLowerCase())) {
            currentNode.nodeValue = currentNode.nodeValue.replace(r, function (match) {
                return matchCase('blart', match);
            });
        }
    }
};

blartify();