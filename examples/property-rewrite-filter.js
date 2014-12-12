var put = require("../put");
var get = require("../get");
var not = require("../not");
var tee = require("../tee");
var call = require("../call");
var filter = require("../filter");
var compose = require("../compose");

// Items with languages mixed into categories
var items = [{
    categories: ["english", "shorts", "beep"]
}, {
    categories: ["tech", "suomeksi", "boop"]
}, {
    categories: ["strömsö", "bwop", "svenska"]
}];

// Language matcher
var language = filter([{ $in: ["english", "suomeksi", "svenska"] }]);

// Property getter
var reader = get("categories");

// Property writer
var langFilter = put("language",
        // Language filter
        compose(reader, call("filter", language)));

// Category writer
var catFilter = put("categories",
        // Inverted language filter
        compose(reader, call("filter", not(language))));

// Clone input object to avoid modifying the source
var clone = compose(JSON.stringify, JSON.parse);

// Transformer
var mapper = compose(clone, tee(langFilter, catFilter));

console.log(items.map(mapper));
console.log(items);
