import { Injectable } from '@angular/core';
/**
 * An utility service for link parsing.
 */
var ParseLinkUtil = (function () {
    function ParseLinkUtil() {
    }
    /**
     * Method to parse the links
     */
    /**
         * Method to parse the links
         */
    ParseLinkUtil.prototype.parse = /**
         * Method to parse the links
         */
        function (header) {
            if (header.length === 0) {
                throw new Error('input must not be of zero length');
            }
            // Split parts by comma
            var parts = header.split(',');
            var links = {};
            // Parse each part into a named link
            parts.forEach(function (p) {
                var section = p.split(';');
                if (section.length !== 2) {
                    throw new Error('section could not be split on ";"');
                }
                var url = section[0].replace(/<(.*)>/, '$1').trim();
                var queryString = {};
                url.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), function ($0, $1, $2, $3) { return queryString[$1] = $3; });
                var page = queryString.page;
                if (typeof page === 'string') {
                    page = parseInt(page, 10);
                }
                var name = section[1].replace(/rel="(.*)"/, '$1').trim();
                links[name] = page;
            });
            return links;
        };
    ParseLinkUtil.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ParseLinkUtil.ctorParameters = function () { return []; };
    return ParseLinkUtil;
}());
export { ParseLinkUtil };