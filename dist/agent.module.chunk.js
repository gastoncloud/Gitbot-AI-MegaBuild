webpackJsonp(["agent.module"],{

/***/ "./node_modules/@angular/flex-layout/esm5/core.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export removeStyles */
/* unused harmony export BROWSER_PROVIDER */
/* unused harmony export CLASS_NAME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CoreModule; });
/* unused harmony export MediaQueriesModule */
/* unused harmony export MediaChange */
/* unused harmony export StylesheetMap */
/* unused harmony export STYLESHEET_MAP_PROVIDER_FACTORY */
/* unused harmony export STYLESHEET_MAP_PROVIDER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_FLEX_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SERVER_TOKEN; });
/* unused harmony export DISABLE_DEFAULT_BREAKPOINTS */
/* unused harmony export ADD_ORIENTATION_BREAKPOINTS */
/* unused harmony export BREAKPOINT */
/* unused harmony export DISABLE_VENDOR_PREFIXES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BaseFxDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BaseFxDirectiveAdapter; });
/* unused harmony export RESPONSIVE_ALIASES */
/* unused harmony export DEFAULT_BREAKPOINTS */
/* unused harmony export ScreenTypes */
/* unused harmony export ORIENTATION_BREAKPOINTS */
/* unused harmony export BreakPointRegistry */
/* unused harmony export buildMergedBreakPoints */
/* unused harmony export DEFAULT_BREAKPOINTS_PROVIDER_FACTORY */
/* unused harmony export DEFAULT_BREAKPOINTS_PROVIDER */
/* unused harmony export BREAKPOINTS_PROVIDER_FACTORY */
/* unused harmony export BREAKPOINTS_PROVIDER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CUSTOM_BREAKPOINTS_PROVIDER_FACTORY; });
/* unused harmony export BREAKPOINTS */
/* unused harmony export MatchMedia */
/* unused harmony export MockMatchMedia */
/* unused harmony export MockMediaQueryList */
/* unused harmony export MockMatchMediaProvider */
/* unused harmony export ServerMediaQueryList */
/* unused harmony export ServerMatchMedia */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MediaMonitor; });
/* unused harmony export MEDIA_MONITOR_PROVIDER_FACTORY */
/* unused harmony export MEDIA_MONITOR_PROVIDER */
/* unused harmony export ObservableMedia */
/* unused harmony export MediaService */
/* unused harmony export OBSERVABLE_MEDIA_PROVIDER_FACTORY */
/* unused harmony export OBSERVABLE_MEDIA_PROVIDER */
/* unused harmony export KeyOptions */
/* unused harmony export ResponsiveActivation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return StyleUtils; });
/* unused harmony export ɵb */
/* unused harmony export ɵa */
/* unused harmony export ɵe */
/* unused harmony export ɵd */
/* unused harmony export ɵc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Find all of the server-generated stylings, if any, and remove them
 * This will be in the form of inline classes and the style block in the
 * head of the DOM
 * @param {?} _document
 * @param {?} platformId
 * @return {?}
 */
function removeStyles(_document, platformId) {
    return function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["l" /* isPlatformBrowser */])(platformId)) {
            var /** @type {?} */ elements = Array.from(_document.querySelectorAll("[class*=" + CLASS_NAME + "]"));
            // RegExp constructor should only be used if passing a variable to the constructor.
            // When using static regular expression it is more performant to use reg exp literal.
            // This is also needed to provide Safari 9 compatibility, please see
            // https://stackoverflow.com/questions/37919802 for more discussion.
            var /** @type {?} */ classRegex_1 = /\bflex-layout-.+?\b/g;
            elements.forEach(function (el) {
                el.classList.contains(CLASS_NAME + "ssr") && el.parentNode ?
                    el.parentNode.removeChild(el) : el.className.replace(classRegex_1, '');
            });
        }
    };
}
/**
 *  Provider to remove SSR styles on the browser
 */
var /** @type {?} */ BROWSER_PROVIDER = {
    provide: /** @type {?} */ (__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* APP_BOOTSTRAP_LISTENER */]),
    useFactory: removeStyles,
    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* PLATFORM_ID */]],
    multi: true
};
var /** @type {?} */ CLASS_NAME = 'flex-layout-';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 *  Injection token unique to the flex-layout library.
 *  Use this token when build a custom provider (see below).
 */
var /** @type {?} */ BREAKPOINTS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('Token (@angular/flex-layout) Breakpoints');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Registry of 1..n MediaQuery breakpoint ranges
 * This is published as a provider and may be overridden from custom, application-specific ranges
 *
 */
var BreakPointRegistry = /** @class */ (function () {
    function BreakPointRegistry(_registry) {
        this._registry = _registry;
    }
    Object.defineProperty(BreakPointRegistry.prototype, "items", {
        /**
         * Accessor to raw list
         */
        get: /**
         * Accessor to raw list
         * @return {?}
         */
        function () {
            return this._registry.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreakPointRegistry.prototype, "sortedItems", {
        /**
         * Accessor to sorted list used for registration with matchMedia API
         *
         * NOTE: During breakpoint registration, we want to register the overlaps FIRST
         *       so the non-overlaps will trigger the MatchMedia:BehaviorSubject last!
         *       And the largest, non-overlap, matching breakpoint should be the lastReplay value
         */
        get: /**
         * Accessor to sorted list used for registration with matchMedia API
         *
         * NOTE: During breakpoint registration, we want to register the overlaps FIRST
         *       so the non-overlaps will trigger the MatchMedia:BehaviorSubject last!
         *       And the largest, non-overlap, matching breakpoint should be the lastReplay value
         * @return {?}
         */
        function () {
            var /** @type {?} */ overlaps = this._registry.filter(function (it) { return it.overlapping === true; });
            var /** @type {?} */ nonOverlaps = this._registry.filter(function (it) { return it.overlapping !== true; });
            return overlaps.concat(nonOverlaps);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Search breakpoints by alias (e.g. gt-xs)
     */
    /**
     * Search breakpoints by alias (e.g. gt-xs)
     * @param {?} alias
     * @return {?}
     */
    BreakPointRegistry.prototype.findByAlias = /**
     * Search breakpoints by alias (e.g. gt-xs)
     * @param {?} alias
     * @return {?}
     */
    function (alias) {
        return this._registry.find(function (bp) { return bp.alias == alias; }) || null;
    };
    /**
     * @param {?} query
     * @return {?}
     */
    BreakPointRegistry.prototype.findByQuery = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return this._registry.find(function (bp) { return bp.mediaQuery == query; }) || null;
    };
    Object.defineProperty(BreakPointRegistry.prototype, "overlappings", {
        /**
         * Get all the breakpoints whose ranges could overlapping `normal` ranges;
         * e.g. gt-sm overlaps md, lg, and xl
         */
        get: /**
         * Get all the breakpoints whose ranges could overlapping `normal` ranges;
         * e.g. gt-sm overlaps md, lg, and xl
         * @return {?}
         */
        function () {
            return this._registry.filter(function (it) { return it.overlapping == true; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreakPointRegistry.prototype, "aliases", {
        /**
         * Get list of all registered (non-empty) breakpoint aliases
         */
        get: /**
         * Get list of all registered (non-empty) breakpoint aliases
         * @return {?}
         */
        function () {
            return this._registry.map(function (it) { return it.alias; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreakPointRegistry.prototype, "suffixes", {
        /**
         * Aliases are mapped to properties using suffixes
         * e.g.  'gt-sm' for property 'layout'  uses suffix 'GtSm'
         * for property layoutGtSM.
         */
        get: /**
         * Aliases are mapped to properties using suffixes
         * e.g.  'gt-sm' for property 'layout'  uses suffix 'GtSm'
         * for property layoutGtSM.
         * @return {?}
         */
        function () {
            return this._registry.map(function (it) { return !!it.suffix ? it.suffix : ''; });
        },
        enumerable: true,
        configurable: true
    });
    BreakPointRegistry.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    BreakPointRegistry.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [BREAKPOINTS,] },] },
    ]; };
    return BreakPointRegistry;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Class instances emitted [to observers] for each mql notification
 */
var  /**
 * Class instances emitted [to observers] for each mql notification
 */
MediaChange = /** @class */ (function () {
    function MediaChange(matches, mediaQuery, mqAlias, suffix // e.g.   GtSM, Md, GtLg
    ) {
        if (matches === void 0) { matches = false; }
        if (mediaQuery === void 0) { mediaQuery = 'all'; }
        if (mqAlias === void 0) { mqAlias = ''; }
        if (suffix === void 0) { suffix = ''; }
        this.matches = matches;
        this.mediaQuery = mediaQuery;
        this.mqAlias = mqAlias;
        this.suffix = suffix;
    }
    /**
     * @return {?}
     */
    MediaChange.prototype.clone = /**
     * @return {?}
     */
    function () {
        return new MediaChange(this.matches, this.mediaQuery, this.mqAlias, this.suffix);
    };
    return MediaChange;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * MediaMonitor configures listeners to mediaQuery changes and publishes an Observable facade to
 * convert mediaQuery change callbacks to subscriber notifications. These notifications will be
 * performed within the ng Zone to trigger change detections and component updates.
 *
 * NOTE: both mediaQuery activations and de-activations are announced in notifications
 */
var MatchMedia = /** @class */ (function () {
    function MatchMedia(_zone, _platformId, _document) {
        this._zone = _zone;
        this._platformId = _platformId;
        this._document = _document;
        this._registry = new Map();
        this._source = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new MediaChange(true));
        this._observable$ = this._source.asObservable();
    }
    /**
     * For the specified mediaQuery?
     */
    /**
     * For the specified mediaQuery?
     * @param {?} mediaQuery
     * @return {?}
     */
    MatchMedia.prototype.isActive = /**
     * For the specified mediaQuery?
     * @param {?} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        var /** @type {?} */ mql = this._registry.get(mediaQuery);
        return !!mql ? mql.matches : false;
    };
    /**
     * External observers can watch for all (or a specific) mql changes.
     * Typically used by the MediaQueryAdaptor; optionally available to components
     * who wish to use the MediaMonitor as mediaMonitor$ observable service.
     *
     * NOTE: if a mediaQuery is not specified, then ALL mediaQuery activations will
     *       be announced.
     */
    /**
     * External observers can watch for all (or a specific) mql changes.
     * Typically used by the MediaQueryAdaptor; optionally available to components
     * who wish to use the MediaMonitor as mediaMonitor$ observable service.
     *
     * NOTE: if a mediaQuery is not specified, then ALL mediaQuery activations will
     *       be announced.
     * @param {?=} mediaQuery
     * @return {?}
     */
    MatchMedia.prototype.observe = /**
     * External observers can watch for all (or a specific) mql changes.
     * Typically used by the MediaQueryAdaptor; optionally available to components
     * who wish to use the MediaMonitor as mediaMonitor$ observable service.
     *
     * NOTE: if a mediaQuery is not specified, then ALL mediaQuery activations will
     *       be announced.
     * @param {?=} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        if (mediaQuery) {
            this.registerQuery(mediaQuery);
        }
        return this._observable$.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_filter__["a" /* filter */])(function (change) {
            return mediaQuery ? (change.mediaQuery === mediaQuery) : true;
        }));
    };
    /**
     * Based on the BreakPointRegistry provider, register internal listeners for each unique
     * mediaQuery. Each listener emits specific MediaChange data to observers
     */
    /**
     * Based on the BreakPointRegistry provider, register internal listeners for each unique
     * mediaQuery. Each listener emits specific MediaChange data to observers
     * @param {?} mediaQuery
     * @return {?}
     */
    MatchMedia.prototype.registerQuery = /**
     * Based on the BreakPointRegistry provider, register internal listeners for each unique
     * mediaQuery. Each listener emits specific MediaChange data to observers
     * @param {?} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        var _this = this;
        var /** @type {?} */ list = normalizeQuery(mediaQuery);
        if (list.length > 0) {
            this._prepareQueryCSS(list, this._document);
            list.forEach(function (query) {
                var /** @type {?} */ mql = _this._registry.get(query);
                var /** @type {?} */ onMQLEvent = function (e) {
                    _this._zone.run(function () {
                        var /** @type {?} */ change = new MediaChange(e.matches, query);
                        _this._source.next(change);
                    });
                };
                if (!mql) {
                    mql = _this._buildMQL(query);
                    mql.addListener(onMQLEvent);
                    _this._registry.set(query, mql);
                }
                if (mql.matches) {
                    onMQLEvent(mql); // Announce activate range for initial subscribers
                }
            });
        }
    };
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     */
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    MatchMedia.prototype._buildMQL = /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    function (query) {
        var /** @type {?} */ canListen = Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["l" /* isPlatformBrowser */])(this._platformId) &&
            !!(/** @type {?} */ (window)).matchMedia('all').addListener;
        return canListen ? (/** @type {?} */ (window)).matchMedia(query) : /** @type {?} */ ({
            matches: query === 'all' || query === '',
            media: query,
            addListener: function () {
            },
            removeListener: function () {
            }
        });
    };
    /**
     * For Webkit engines that only trigger the MediaQueryList Listener
     * when there is at least one CSS selector for the respective media query.
     *
     * @param query string The mediaQuery used to create a faux CSS selector
     *
     */
    /**
     * For Webkit engines that only trigger the MediaQueryList Listener
     * when there is at least one CSS selector for the respective media query.
     *
     * @param {?} mediaQueries
     * @param {?} _document
     * @return {?}
     */
    MatchMedia.prototype._prepareQueryCSS = /**
     * For Webkit engines that only trigger the MediaQueryList Listener
     * when there is at least one CSS selector for the respective media query.
     *
     * @param {?} mediaQueries
     * @param {?} _document
     * @return {?}
     */
    function (mediaQueries, _document) {
        var /** @type {?} */ list = mediaQueries.filter(function (it) { return !ALL_STYLES[it]; });
        if (list.length > 0) {
            var /** @type {?} */ query = list.join(', ');
            try {
                var /** @type {?} */ styleEl_1 = _document.createElement('style');
                styleEl_1.setAttribute('type', 'text/css');
                if (!styleEl_1['styleSheet']) {
                    var /** @type {?} */ cssText = "\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media " + query + " {.fx-query-test{ }}\n";
                    styleEl_1.appendChild(_document.createTextNode(cssText));
                }
                _document.head.appendChild(styleEl_1);
                // Store in private global registry
                list.forEach(function (mq) { return ALL_STYLES[mq] = styleEl_1; });
            }
            catch (/** @type {?} */ e) {
                console.error(e);
            }
        }
    };
    MatchMedia.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    MatchMedia.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], },
        { type: Object, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* PLATFORM_ID */],] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DOCUMENT */],] },] },
    ]; };
    return MatchMedia;
}());
/**
 * Private global registry for all dynamically-created, injected style tags
 * @see prepare(query)
 */
var /** @type {?} */ ALL_STYLES = {};
/**
 * Always convert to unique list of queries; for iteration in ::registerQuery()
 * @param {?} mediaQuery
 * @return {?}
 */
function normalizeQuery(mediaQuery) {
    return (typeof mediaQuery === 'undefined') ? [] :
        (typeof mediaQuery === 'string') ? [mediaQuery] : unique(/** @type {?} */ (mediaQuery));
}
/**
 * Filter duplicate mediaQueries in the list
 * @param {?} list
 * @return {?}
 */
function unique(list) {
    var /** @type {?} */ seen = {};
    return list.filter(function (item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        if (source != null) {
            for (var /** @type {?} */ key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * For the specified MediaChange, make sure it contains the breakpoint alias
 * and suffix (if available).
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function mergeAlias(dest, source) {
    return extendObject(dest, source ? {
        mqAlias: source.alias,
        suffix: source.suffix
    } : {});
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * MediaMonitor uses the MatchMedia service to observe mediaQuery changes (both activations and
 * deactivations). These changes are are published as MediaChange notifications.
 *
 * Note: all notifications will be performed within the
 * ng Zone to trigger change detections and component updates.
 *
 * It is the MediaMonitor that:
 *  - auto registers all known breakpoints
 *  - injects alias information into each raw MediaChange event
 *  - provides accessor to the currently active BreakPoint
 *  - publish list of overlapping BreakPoint(s); used by ResponsiveActivation
 */
var MediaMonitor = /** @class */ (function () {
    function MediaMonitor(_breakpoints, _matchMedia) {
        this._breakpoints = _breakpoints;
        this._matchMedia = _matchMedia;
        this._registerBreakpoints();
    }
    Object.defineProperty(MediaMonitor.prototype, "breakpoints", {
        /**
         * Read-only accessor to the list of breakpoints configured in the BreakPointRegistry provider
         */
        get: /**
         * Read-only accessor to the list of breakpoints configured in the BreakPointRegistry provider
         * @return {?}
         */
        function () {
            return this._breakpoints.items.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaMonitor.prototype, "activeOverlaps", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            var /** @type {?} */ items = this._breakpoints.overlappings.reverse();
            return items.filter(function (bp) {
                return _this._matchMedia.isActive(bp.mediaQuery);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaMonitor.prototype, "active", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            var /** @type {?} */ found = null, /** @type {?} */ items = this.breakpoints.reverse();
            items.forEach(function (bp) {
                if (bp.alias !== '') {
                    if (!found && _this._matchMedia.isActive(bp.mediaQuery)) {
                        found = bp;
                    }
                }
            });
            var /** @type {?} */ first = this.breakpoints[0];
            return found || (this._matchMedia.isActive(first.mediaQuery) ? first : null);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * For the specified mediaQuery alias, is the mediaQuery range active?
     */
    /**
     * For the specified mediaQuery alias, is the mediaQuery range active?
     * @param {?} alias
     * @return {?}
     */
    MediaMonitor.prototype.isActive = /**
     * For the specified mediaQuery alias, is the mediaQuery range active?
     * @param {?} alias
     * @return {?}
     */
    function (alias) {
        var /** @type {?} */ bp = this._breakpoints.findByAlias(alias) || this._breakpoints.findByQuery(alias);
        return this._matchMedia.isActive(bp ? bp.mediaQuery : alias);
    };
    /**
     * External observers can watch for all (or a specific) mql changes.
     * If specific breakpoint is observed, only return *activated* events
     * otherwise return all events for BOTH activated + deactivated changes.
     */
    /**
     * External observers can watch for all (or a specific) mql changes.
     * If specific breakpoint is observed, only return *activated* events
     * otherwise return all events for BOTH activated + deactivated changes.
     * @param {?=} alias
     * @return {?}
     */
    MediaMonitor.prototype.observe = /**
     * External observers can watch for all (or a specific) mql changes.
     * If specific breakpoint is observed, only return *activated* events
     * otherwise return all events for BOTH activated + deactivated changes.
     * @param {?=} alias
     * @return {?}
     */
    function (alias) {
        var /** @type {?} */ bp = this._breakpoints.findByAlias(alias || '') ||
            this._breakpoints.findByQuery(alias || '');
        var /** @type {?} */ hasAlias = function (change) { return (bp ? change.mqAlias !== '' : true); };
        // Note: the raw MediaChange events [from MatchMedia] do not contain important alias information
        var /** @type {?} */ media$ = this._matchMedia.observe(bp ? bp.mediaQuery : alias);
        return media$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(function (change) { return mergeAlias(change, bp); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_filter__["a" /* filter */])(hasAlias));
    };
    /**
     * Immediate calls to matchMedia() to establish listeners
     * and prepare for immediate subscription notifications
     * @return {?}
     */
    MediaMonitor.prototype._registerBreakpoints = /**
     * Immediate calls to matchMedia() to establish listeners
     * and prepare for immediate subscription notifications
     * @return {?}
     */
    function () {
        var /** @type {?} */ queries = this._breakpoints.sortedItems.map(function (bp) { return bp.mediaQuery; });
        this._matchMedia.registerQuery(queries);
    };
    MediaMonitor.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    MediaMonitor.ctorParameters = function () { return [
        { type: BreakPointRegistry, },
        { type: MatchMedia, },
    ]; };
    return MediaMonitor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Ensure a single global service provider
 * @param {?} parentRegistry
 * @param {?} breakpoints
 * @return {?}
 */
function BREAKPOINT_REGISTRY_PROVIDER_FACTORY(parentRegistry, breakpoints) {
    return parentRegistry || new BreakPointRegistry(breakpoints);
}
/**
 * Export provider that uses a global service factory (above)
 */
var /** @type {?} */ BREAKPOINT_REGISTRY_PROVIDER = {
    provide: BreakPointRegistry,
    deps: [
        [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* SkipSelf */](), BreakPointRegistry],
        /** @type {?} */ (BREAKPOINTS),
    ],
    useFactory: BREAKPOINT_REGISTRY_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Base class for MediaService and pseudo-token for
 * @abstract
 */
var  /**
 * Base class for MediaService and pseudo-token for
 * @abstract
 */
ObservableMedia = /** @class */ (function () {
    function ObservableMedia() {
    }
    return ObservableMedia;
}());
/**
 * Class internalizes a MatchMedia service and exposes an Subscribable and Observable interface.
 * This an Observable with that exposes a feature to subscribe to mediaQuery
 * changes and a validator method (`isActive(<alias>)`) to test if a mediaQuery (or alias) is
 * currently active.
 *
 * !! Only mediaChange activations (not de-activations) are announced by the ObservableMedia
 *
 * This class uses the BreakPoint Registry to inject alias information into the raw MediaChange
 * notification. For custom mediaQuery notifications, alias information will not be injected and
 * those fields will be ''.
 *
 * !! This is not an actual Observable. It is a wrapper of an Observable used to publish additional
 * methods like `isActive(<alias>). To access the Observable and use RxJS operators, use
 * `.asObservable()` with syntax like media.asObservable().map(....).
 *
 *  \@usage
 *
 *  // RxJS
 *  import {filter} from 'rxjs/operators/filter';
 *  import { ObservableMedia } from '\@angular/flex-layout';
 *
 *  \@Component({ ... })
 *  export class AppComponent {
 *    status : string = '';
 *
 *    constructor(  media:ObservableMedia ) {
 *      let onChange = (change:MediaChange) => {
 *        this.status = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
 *      };
 *
 *      // Subscribe directly or access observable to use filter/map operators
 *      // e.g.
 *      //      media.subscribe(onChange);
 *
 *      media.asObservable()
 *        .pipe(
 *          filter((change:MediaChange) => true)   // silly noop filter
 *        ).subscribe(onChange);
 *    }
 *  }
 */
var MediaService = /** @class */ (function () {
    function MediaService(breakpoints, mediaWatcher) {
        this.breakpoints = breakpoints;
        this.mediaWatcher = mediaWatcher;
        /**
         * Should we announce gt-<xxx> breakpoint activations ?
         */
        this.filterOverlaps = true;
        this._registerBreakPoints();
        this.observable$ = this._buildObservable();
    }
    /**
     * Test if specified query/alias is active.
     */
    /**
     * Test if specified query/alias is active.
     * @param {?} alias
     * @return {?}
     */
    MediaService.prototype.isActive = /**
     * Test if specified query/alias is active.
     * @param {?} alias
     * @return {?}
     */
    function (alias) {
        var /** @type {?} */ query = this._toMediaQuery(alias);
        return this.mediaWatcher.isActive(query);
    };
    /**
     * Proxy to the Observable subscribe method
     */
    /**
     * Proxy to the Observable subscribe method
     * @param {?=} next
     * @param {?=} error
     * @param {?=} complete
     * @return {?}
     */
    MediaService.prototype.subscribe = /**
     * Proxy to the Observable subscribe method
     * @param {?=} next
     * @param {?=} error
     * @param {?=} complete
     * @return {?}
     */
    function (next, error, complete) {
        return this.observable$.subscribe(next, error, complete);
    };
    /**
     * Access to observable for use with operators like
     * .filter(), .map(), etc.
     */
    /**
     * Access to observable for use with operators like
     * .filter(), .map(), etc.
     * @return {?}
     */
    MediaService.prototype.asObservable = /**
     * Access to observable for use with operators like
     * .filter(), .map(), etc.
     * @return {?}
     */
    function () {
        return this.observable$;
    };
    /**
     * Register all the mediaQueries registered in the BreakPointRegistry
     * This is needed so subscribers can be auto-notified of all standard, registered
     * mediaQuery activations
     * @return {?}
     */
    MediaService.prototype._registerBreakPoints = /**
     * Register all the mediaQueries registered in the BreakPointRegistry
     * This is needed so subscribers can be auto-notified of all standard, registered
     * mediaQuery activations
     * @return {?}
     */
    function () {
        var /** @type {?} */ queries = this.breakpoints.sortedItems.map(function (bp) { return bp.mediaQuery; });
        this.mediaWatcher.registerQuery(queries);
    };
    /**
     * Prepare internal observable
     *
     * NOTE: the raw MediaChange events [from MatchMedia] do not
     *       contain important alias information; as such this info
     *       must be injected into the MediaChange
     * @return {?}
     */
    MediaService.prototype._buildObservable = /**
     * Prepare internal observable
     *
     * NOTE: the raw MediaChange events [from MatchMedia] do not
     *       contain important alias information; as such this info
     *       must be injected into the MediaChange
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ self = this;
        var /** @type {?} */ media$ = this.mediaWatcher.observe();
        var /** @type {?} */ activationsOnly = function (change) {
            return change.matches === true;
        };
        var /** @type {?} */ addAliasInformation = function (change) {
            return mergeAlias(change, _this._findByQuery(change.mediaQuery));
        };
        var /** @type {?} */ excludeOverlaps = function (change) {
            var /** @type {?} */ bp = _this.breakpoints.findByQuery(change.mediaQuery);
            return !bp ? true : !(self.filterOverlaps && bp.overlapping);
        };
        /**
             * Only pass/announce activations (not de-activations)
             * Inject associated (if any) alias information into the MediaChange event
             * Exclude mediaQuery activations for overlapping mQs. List bounded mQ ranges only
             */
        return media$.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_filter__["a" /* filter */])(activationsOnly), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_filter__["a" /* filter */])(excludeOverlaps), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(addAliasInformation));
    };
    /**
     * Breakpoint locator by alias
     * @param {?} alias
     * @return {?}
     */
    MediaService.prototype._findByAlias = /**
     * Breakpoint locator by alias
     * @param {?} alias
     * @return {?}
     */
    function (alias) {
        return this.breakpoints.findByAlias(alias);
    };
    /**
     * Breakpoint locator by mediaQuery
     * @param {?} query
     * @return {?}
     */
    MediaService.prototype._findByQuery = /**
     * Breakpoint locator by mediaQuery
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return this.breakpoints.findByQuery(query);
    };
    /**
     * Find associated breakpoint (if any)
     * @param {?} query
     * @return {?}
     */
    MediaService.prototype._toMediaQuery = /**
     * Find associated breakpoint (if any)
     * @param {?} query
     * @return {?}
     */
    function (query) {
        var /** @type {?} */ bp = this._findByAlias(query) || this._findByQuery(query);
        return bp ? bp.mediaQuery : query;
    };
    MediaService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    MediaService.ctorParameters = function () { return [
        { type: BreakPointRegistry, },
        { type: MatchMedia, },
    ]; };
    return MediaService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Ensure a single global ObservableMedia service provider
 * @param {?} parentService
 * @param {?} matchMedia
 * @param {?} breakpoints
 * @return {?}
 */
function OBSERVABLE_MEDIA_PROVIDER_FACTORY(parentService, matchMedia, breakpoints) {
    return parentService || new MediaService(breakpoints, matchMedia);
}
/**
 *  Provider to return global service for observable service for all MediaQuery activations
 */
var /** @type {?} */ OBSERVABLE_MEDIA_PROVIDER = {
    // tslint:disable-line:variable-name
    provide: ObservableMedia,
    deps: [
        [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* SkipSelf */](), ObservableMedia],
        MatchMedia,
        BreakPointRegistry
    ],
    useFactory: OBSERVABLE_MEDIA_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ RESPONSIVE_ALIASES = [
    'xs', 'gt-xs', 'sm', 'gt-sm', 'md', 'gt-md', 'lg', 'gt-lg', 'xl'
];
var /** @type {?} */ DEFAULT_BREAKPOINTS = [
    {
        alias: 'xs',
        mediaQuery: '(min-width: 0px) and (max-width: 599px)'
    },
    {
        alias: 'gt-xs',
        overlapping: true,
        mediaQuery: '(min-width: 600px)'
    },
    {
        alias: 'lt-sm',
        overlapping: true,
        mediaQuery: '(max-width: 599px)'
    },
    {
        alias: 'sm',
        mediaQuery: '(min-width: 600px) and (max-width: 959px)'
    },
    {
        alias: 'gt-sm',
        overlapping: true,
        mediaQuery: '(min-width: 960px)'
    },
    {
        alias: 'lt-md',
        overlapping: true,
        mediaQuery: '(max-width: 959px)'
    },
    {
        alias: 'md',
        mediaQuery: '(min-width: 960px) and (max-width: 1279px)'
    },
    {
        alias: 'gt-md',
        overlapping: true,
        mediaQuery: '(min-width: 1280px)'
    },
    {
        alias: 'lt-lg',
        overlapping: true,
        mediaQuery: '(max-width: 1279px)'
    },
    {
        alias: 'lg',
        mediaQuery: '(min-width: 1280px) and (max-width: 1919px)'
    },
    {
        alias: 'gt-lg',
        overlapping: true,
        mediaQuery: '(min-width: 1920px)'
    },
    {
        alias: 'lt-xl',
        overlapping: true,
        mediaQuery: '(max-width: 1920px)'
    },
    {
        alias: 'xl',
        mediaQuery: '(min-width: 1920px) and (max-width: 5000px)'
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/* tslint:disable */
var /** @type {?} */ HANDSET_PORTRAIT = '(orientations: portrait) and (max-width: 599px)';
var /** @type {?} */ HANDSET_LANDSCAPE = '(orientations: landscape) and (max-width: 959px)';
var /** @type {?} */ TABLET_LANDSCAPE = '(orientations: landscape) and (min-width: 960px) and (max-width: 1279px)';
var /** @type {?} */ TABLET_PORTRAIT = '(orientations: portrait) and (min-width: 600px) and (max-width: 839px)';
var /** @type {?} */ WEB_PORTRAIT = '(orientations: portrait) and (min-width: 840px)';
var /** @type {?} */ WEB_LANDSCAPE = '(orientations: landscape) and (min-width: 1280px)';
var /** @type {?} */ ScreenTypes = {
    'HANDSET': HANDSET_PORTRAIT + ", " + HANDSET_LANDSCAPE,
    'TABLET': TABLET_PORTRAIT + " , " + TABLET_LANDSCAPE,
    'WEB': WEB_PORTRAIT + ", " + WEB_LANDSCAPE + " ",
    'HANDSET_PORTRAIT': "" + HANDSET_PORTRAIT,
    'TABLET_PORTRAIT': TABLET_PORTRAIT + " ",
    'WEB_PORTRAIT': "" + WEB_PORTRAIT,
    'HANDSET_LANDSCAPE': HANDSET_LANDSCAPE + "]",
    'TABLET_LANDSCAPE': "" + TABLET_LANDSCAPE,
    'WEB_LANDSCAPE': "" + WEB_LANDSCAPE
};
/**
 * Extended Breakpoints for handset/tablets with landscape or portrait orientations
 */
var /** @type {?} */ ORIENTATION_BREAKPOINTS = [
    { 'alias': 'handset', 'mediaQuery': ScreenTypes.HANDSET },
    { 'alias': 'handset.landscape', 'mediaQuery': ScreenTypes.HANDSET_LANDSCAPE },
    { 'alias': 'handset.portrait', 'mediaQuery': ScreenTypes.HANDSET_PORTRAIT },
    { 'alias': 'tablet', 'mediaQuery': ScreenTypes.TABLET },
    { 'alias': 'tablet.landscape', 'mediaQuery': ScreenTypes.TABLET },
    { 'alias': 'tablet.portrait', 'mediaQuery': ScreenTypes.TABLET_PORTRAIT },
    { 'alias': 'web', 'mediaQuery': ScreenTypes.WEB, overlapping: true },
    { 'alias': 'web.landscape', 'mediaQuery': ScreenTypes.WEB_LANDSCAPE, overlapping: true },
    { 'alias': 'web.portrait', 'mediaQuery': ScreenTypes.WEB_PORTRAIT, overlapping: true }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ALIAS_DELIMITERS = /(\.|-|_)/g;
/**
 * @param {?} part
 * @return {?}
 */
function firstUpperCase(part) {
    var /** @type {?} */ first = part.length > 0 ? part.charAt(0) : '';
    var /** @type {?} */ remainder = (part.length > 1) ? part.slice(1) : '';
    return first.toUpperCase() + remainder;
}
/**
 * Converts snake-case to SnakeCase.
 * @param {?} name Text to UpperCamelCase
 * @return {?}
 */
function camelCase(name) {
    return name
        .replace(ALIAS_DELIMITERS, '|')
        .split('|')
        .map(firstUpperCase)
        .join('');
}
/**
 * For each breakpoint, ensure that a Suffix is defined;
 * fallback to UpperCamelCase the unique Alias value
 * @param {?} list
 * @return {?}
 */
function validateSuffixes(list) {
    list.forEach(function (bp) {
        if (!bp.suffix) {
            bp.suffix = camelCase(bp.alias); // create Suffix value based on alias
            bp.overlapping = !!bp.overlapping; // ensure default value
        }
    });
    return list;
}
/**
 * Merge a custom breakpoint list with the default list based on unique alias values
 *  - Items are added if the alias is not in the default list
 *  - Items are merged with the custom override if the alias exists in the default list
 * @param {?} defaults
 * @param {?=} custom
 * @return {?}
 */
function mergeByAlias(defaults, custom) {
    if (custom === void 0) { custom = []; }
    var /** @type {?} */ dict = {};
    defaults.forEach(function (bp) {
        dict[bp.alias] = bp;
    });
    // Merge custom breakpoints
    custom.forEach(function (bp) {
        if (dict[bp.alias]) {
            extendObject(dict[bp.alias], bp);
        }
        else {
            dict[bp.alias] = bp;
        }
    });
    return validateSuffixes(Object.keys(dict).map(function (k) { return dict[k]; }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ DISABLE_DEFAULT_BREAKPOINTS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('Flex Layout token, disable the default breakpoints');
var /** @type {?} */ ADD_ORIENTATION_BREAKPOINTS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('Flex Layout token, add the orientation breakpoints');
var /** @type {?} */ BREAKPOINT = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('Flex Layout token, collect all breakpoints into one provider');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Add new custom items to the default list or override existing default with custom overrides
 * @deprecated
 * \@deletion-target v6.0.0-beta.15
 * @param {?=} _custom
 * @param {?=} options
 * @return {?}
 */
function buildMergedBreakPoints(_custom, options) {
    options = extendObject({}, {
        defaults: true,
        // exclude pre-configured, internal default breakpoints
        orientation: false // exclude pre-configured, internal orientations breakpoints
    }, options || {});
    return function () {
        // Order so the defaults are loaded last; so ObservableMedia will report these last!
        var /** @type {?} */ defaults = (options && options.orientations) ?
            ORIENTATION_BREAKPOINTS.concat(DEFAULT_BREAKPOINTS) : DEFAULT_BREAKPOINTS;
        return (options && options.defaults) ?
            mergeByAlias(defaults, _custom || []) : mergeByAlias(_custom || []);
    };
}
/**
 *  Ensure that only a single global BreakPoint list is instantiated...
 *  \@deprecated
 *  \@deletion-target v6.0.0-beta.15
 * @return {?}
 */
function DEFAULT_BREAKPOINTS_PROVIDER_FACTORY() {
    return validateSuffixes(DEFAULT_BREAKPOINTS);
}
/**
 * Default Provider that does not support external customization nor provide
 * the extra extended breakpoints:   "handset", "tablet", and "web"
 *
 *  NOTE: !! breakpoints are considered to have unique 'alias' properties,
 *        custom breakpoints matching existing breakpoints will override the properties
 *        of the existing (and not be added as an extra breakpoint entry).
 *        [xs, gt-xs, sm, gt-sm, md, gt-md, lg, gt-lg, xl]
 * @deprecated
 * \@deletion-target v6.0.0-beta.15
 */
var /** @type {?} */ DEFAULT_BREAKPOINTS_PROVIDER = {
    provide: BREAKPOINTS,
    useFactory: DEFAULT_BREAKPOINTS_PROVIDER_FACTORY
};
/**
 * Factory that combines the configured breakpoints into one array and then merges
 * them using a utility function
 * @param {?} parentBreakpoints
 * @param {?} breakpoints
 * @param {?} disableDefaults
 * @param {?} addOrientation
 * @return {?}
 */
function BREAKPOINTS_PROVIDER_FACTORY(parentBreakpoints, breakpoints, disableDefaults, addOrientation) {
    var /** @type {?} */ bpFlattenArray = [].concat.apply([], (breakpoints || [])
        .map(function (v) { return Array.isArray(v) ? v : [v]; }));
    var /** @type {?} */ builtIns = DEFAULT_BREAKPOINTS.concat(addOrientation ? ORIENTATION_BREAKPOINTS : []);
    return parentBreakpoints || disableDefaults ?
        mergeByAlias(bpFlattenArray) : mergeByAlias(builtIns, bpFlattenArray);
}
/**
 * Provider that combines the provided extra breakpoints with the default and
 * orientation breakpoints based on configuration
 */
var /** @type {?} */ BREAKPOINTS_PROVIDER = {
    provide: BREAKPOINTS,
    useFactory: BREAKPOINTS_PROVIDER_FACTORY,
    deps: [
        [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* SkipSelf */](), BREAKPOINTS],
        [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */](), BREAKPOINT],
        [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */](), DISABLE_DEFAULT_BREAKPOINTS],
        [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */](), ADD_ORIENTATION_BREAKPOINTS],
    ]
};
/**
 * Use with FlexLayoutModule.CUSTOM_BREAKPOINTS_PROVIDER_FACTORY!
 * @deprecated
 * \@deletion-target v6.0.0-beta.15
 * @param {?=} custom
 * @param {?=} options
 * @return {?}
 */
function CUSTOM_BREAKPOINTS_PROVIDER_FACTORY(custom, options) {
    return {
        provide: /** @type {?} */ (BREAKPOINTS),
        useFactory: buildMergedBreakPoints(custom, options)
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Ensure a single global service provider
 * @param {?} parentMedia
 * @param {?} ngZone
 * @param {?} platformId
 * @param {?} _document
 * @return {?}
 */
function MATCH_MEDIA_PROVIDER_FACTORY(parentMedia, ngZone, platformId, _document) {
    return parentMedia || new MatchMedia(ngZone, platformId, _document);
}
/**
 * Export provider that uses a global service factory (above)
 */
var /** @type {?} */ MATCH_MEDIA_PROVIDER = {
    provide: MatchMedia,
    deps: [
        [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* SkipSelf */](), MatchMedia],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
        /** @type {?} */ (__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* PLATFORM_ID */]),
        /** @type {?} */ (__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DOCUMENT */]),
    ],
    useFactory: MATCH_MEDIA_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Applies CSS prefixes to appropriate style keys.
 *
 * Note: `-ms-`, `-moz` and `-webkit-box` are no longer supported. e.g.
 *    {
 *      display: -webkit-flex;     NEW - Safari 6.1+. iOS 7.1+, BB10
 *      display: flex;             NEW, Spec - Firefox, Chrome, Opera
 *      // display: -webkit-box;   OLD - iOS 6-, Safari 3.1-6, BB7
 *      // display: -ms-flexbox;   TWEENER - IE 10
 *      // display: -moz-flexbox;  OLD - Firefox
 *    }
 * @param {?} target
 * @return {?}
 */
function applyCssPrefixes(target) {
    for (var /** @type {?} */ key in target) {
        var /** @type {?} */ value = target[key] || '';
        switch (key) {
            case 'display':
                if (value === 'flex') {
                    target['display'] = [
                        '-webkit-flex',
                        'flex'
                    ];
                }
                else if (value === 'inline-flex') {
                    target['display'] = [
                        '-webkit-inline-flex',
                        'inline-flex'
                    ];
                }
                else {
                    target['display'] = value;
                }
                break;
            case 'align-items':
            case 'align-self':
            case 'align-content':
            case 'flex':
            case 'flex-basis':
            case 'flex-flow':
            case 'flex-grow':
            case 'flex-shrink':
            case 'flex-wrap':
            case 'justify-content':
                target['-webkit-' + key] = value;
                break;
            case 'flex-direction':
                value = value || 'row';
                target['-webkit-flex-direction'] = value;
                target['flex-direction'] = value;
                break;
            case 'order':
                target['order'] = target['-webkit-' + key] = isNaN(value) ? '0' : value;
                break;
        }
    }
    return target;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Utility to emulate a CSS stylesheet
 *
 * This utility class stores all of the styles for a given HTML element
 * as a readonly `stylesheet` map.
 */
var StylesheetMap = /** @class */ (function () {
    function StylesheetMap() {
        this.stylesheet = new Map();
    }
    /**
     * Add an individual style to an HTML element
     */
    /**
     * Add an individual style to an HTML element
     * @param {?} element
     * @param {?} style
     * @param {?} value
     * @return {?}
     */
    StylesheetMap.prototype.addStyleToElement = /**
     * Add an individual style to an HTML element
     * @param {?} element
     * @param {?} style
     * @param {?} value
     * @return {?}
     */
    function (element, style, value) {
        var /** @type {?} */ stylesheet = this.stylesheet.get(element);
        if (stylesheet) {
            stylesheet.set(style, value);
        }
        else {
            this.stylesheet.set(element, new Map([[style, value]]));
        }
    };
    /**
     * Clear the virtual stylesheet
     */
    /**
     * Clear the virtual stylesheet
     * @return {?}
     */
    StylesheetMap.prototype.clearStyles = /**
     * Clear the virtual stylesheet
     * @return {?}
     */
    function () {
        this.stylesheet.clear();
    };
    /**
     * Retrieve a given style for an HTML element
     */
    /**
     * Retrieve a given style for an HTML element
     * @param {?} el
     * @param {?} styleName
     * @return {?}
     */
    StylesheetMap.prototype.getStyleForElement = /**
     * Retrieve a given style for an HTML element
     * @param {?} el
     * @param {?} styleName
     * @return {?}
     */
    function (el, styleName) {
        var /** @type {?} */ styles = this.stylesheet.get(el);
        var /** @type {?} */ value = '';
        if (styles) {
            var /** @type {?} */ style = styles.get(styleName);
            if (typeof style === 'number' || typeof style === 'string') {
                value = style + '';
            }
        }
        return value;
    };
    StylesheetMap.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    StylesheetMap.ctorParameters = function () { return []; };
    return StylesheetMap;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Token that is provided to tell whether the FlexLayoutServerModule
 * has been included in the bundle
 *
 * NOTE: This can be manually provided to disable styles when using SSR
 */
var /** @type {?} */ SERVER_TOKEN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('FlexLayoutServerLoaded');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ DISABLE_VENDOR_PREFIXES = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('Flex Layout token, whether to add vendor prefix styles inline for elements');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var StyleUtils = /** @class */ (function () {
    function StyleUtils(_serverStylesheet, _serverModuleLoaded, _platformId, noVendorPrefixes) {
        this._serverStylesheet = _serverStylesheet;
        this._serverModuleLoaded = _serverModuleLoaded;
        this._platformId = _platformId;
        this.noVendorPrefixes = noVendorPrefixes;
    }
    /**
     * Applies styles given via string pair or object map to the directive element
     */
    /**
     * Applies styles given via string pair or object map to the directive element
     * @param {?} element
     * @param {?} style
     * @param {?=} value
     * @return {?}
     */
    StyleUtils.prototype.applyStyleToElement = /**
     * Applies styles given via string pair or object map to the directive element
     * @param {?} element
     * @param {?} style
     * @param {?=} value
     * @return {?}
     */
    function (element, style, value) {
        var /** @type {?} */ styles = {};
        if (typeof style === 'string') {
            styles[style] = value;
            style = styles;
        }
        styles = this.noVendorPrefixes ? style : applyCssPrefixes(style);
        this._applyMultiValueStyleToElement(styles, element);
    };
    /**
     * Applies styles given via string pair or object map to the directive's element
     */
    /**
     * Applies styles given via string pair or object map to the directive's element
     * @param {?} style
     * @param {?=} elements
     * @return {?}
     */
    StyleUtils.prototype.applyStyleToElements = /**
     * Applies styles given via string pair or object map to the directive's element
     * @param {?} style
     * @param {?=} elements
     * @return {?}
     */
    function (style, elements) {
        var _this = this;
        if (elements === void 0) { elements = []; }
        var /** @type {?} */ styles = this.noVendorPrefixes ? style : applyCssPrefixes(style);
        elements.forEach(function (el) {
            _this._applyMultiValueStyleToElement(styles, el);
        });
    };
    /**
     * Determine the DOM element's Flexbox flow (flex-direction)
     *
     * Check inline style first then check computed (stylesheet) style
     */
    /**
     * Determine the DOM element's Flexbox flow (flex-direction)
     *
     * Check inline style first then check computed (stylesheet) style
     * @param {?} target
     * @return {?}
     */
    StyleUtils.prototype.getFlowDirection = /**
     * Determine the DOM element's Flexbox flow (flex-direction)
     *
     * Check inline style first then check computed (stylesheet) style
     * @param {?} target
     * @return {?}
     */
    function (target) {
        var /** @type {?} */ query = 'flex-direction';
        var /** @type {?} */ value = this.lookupStyle(target, query);
        if (value === FALLBACK_STYLE) {
            value = '';
        }
        var /** @type {?} */ hasInlineValue = this.lookupInlineStyle(target, query) ||
            (Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["m" /* isPlatformServer */])(this._platformId) && this._serverModuleLoaded) ? value : '';
        return [value || 'row', hasInlineValue];
    };
    /**
     * Find the DOM element's raw attribute value (if any)
     */
    /**
     * Find the DOM element's raw attribute value (if any)
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    StyleUtils.prototype.lookupAttributeValue = /**
     * Find the DOM element's raw attribute value (if any)
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    function (element, attribute) {
        return element.getAttribute(attribute) || '';
    };
    /**
     * Find the DOM element's inline style value (if any)
     */
    /**
     * Find the DOM element's inline style value (if any)
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    StyleUtils.prototype.lookupInlineStyle = /**
     * Find the DOM element's inline style value (if any)
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    function (element, styleName) {
        return element.style[styleName] || element.style.getPropertyValue(styleName) || '';
    };
    /**
     * Determine the inline or inherited CSS style
     * NOTE: platform-server has no implementation for getComputedStyle
     */
    /**
     * Determine the inline or inherited CSS style
     * NOTE: platform-server has no implementation for getComputedStyle
     * @param {?} element
     * @param {?} styleName
     * @param {?=} inlineOnly
     * @return {?}
     */
    StyleUtils.prototype.lookupStyle = /**
     * Determine the inline or inherited CSS style
     * NOTE: platform-server has no implementation for getComputedStyle
     * @param {?} element
     * @param {?} styleName
     * @param {?=} inlineOnly
     * @return {?}
     */
    function (element, styleName, inlineOnly) {
        if (inlineOnly === void 0) { inlineOnly = false; }
        var /** @type {?} */ value = '';
        if (element) {
            var /** @type {?} */ immediateValue = value = this.lookupInlineStyle(element, styleName);
            if (!immediateValue) {
                if (Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["l" /* isPlatformBrowser */])(this._platformId)) {
                    if (!inlineOnly) {
                        value = getComputedStyle(element).getPropertyValue(styleName);
                    }
                }
                else {
                    if (this._serverModuleLoaded) {
                        value = this._serverStylesheet.getStyleForElement(element, styleName);
                    }
                }
            }
        }
        // Note: 'inline' is the default of all elements, unless UA stylesheet overrides;
        //       in which case getComputedStyle() should determine a valid value.
        return value ? value.trim() : FALLBACK_STYLE;
    };
    /**
     * Applies the styles to the element. The styles object map may contain an array of values
     * Each value will be added as element style
     * Keys are sorted to add prefixed styles (like -webkit-x) first, before the standard ones
     * @param {?} styles
     * @param {?} element
     * @return {?}
     */
    StyleUtils.prototype._applyMultiValueStyleToElement = /**
     * Applies the styles to the element. The styles object map may contain an array of values
     * Each value will be added as element style
     * Keys are sorted to add prefixed styles (like -webkit-x) first, before the standard ones
     * @param {?} styles
     * @param {?} element
     * @return {?}
     */
    function (styles, element) {
        var _this = this;
        Object.keys(styles).sort().forEach(function (key) {
            var /** @type {?} */ values = Array.isArray(styles[key]) ? styles[key] : [styles[key]];
            values.sort();
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var value = values_1[_i];
                if (Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["l" /* isPlatformBrowser */])(_this._platformId) || !_this._serverModuleLoaded) {
                    element.style.setProperty(key, value);
                }
                else {
                    _this._serverStylesheet.addStyleToElement(element, key, value);
                }
            }
        });
    };
    StyleUtils.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    StyleUtils.ctorParameters = function () { return [
        { type: StylesheetMap, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [SERVER_TOKEN,] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* PLATFORM_ID */],] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [DISABLE_VENDOR_PREFIXES,] },] },
    ]; };
    return StyleUtils;
}());
var /** @type {?} */ FALLBACK_STYLE = 'block';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Ensure a single global service provider
 * @param {?} parentSheet
 * @return {?}
 */
function STYLESHEET_MAP_PROVIDER_FACTORY(parentSheet) {
    return parentSheet || new StylesheetMap();
}
/**
 * Export provider that uses a global service factory (above)
 */
var /** @type {?} */ STYLESHEET_MAP_PROVIDER = {
    provide: StylesheetMap,
    deps: [
        [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* SkipSelf */](), StylesheetMap],
    ],
    useFactory: STYLESHEET_MAP_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * *****************************************************************
 * Define module for the MediaQuery API
 * *****************************************************************
 */
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{
                    providers: [
                        BREAKPOINTS_PROVIDER,
                        BREAKPOINT_REGISTRY_PROVIDER,
                        MATCH_MEDIA_PROVIDER,
                        MediaMonitor,
                        OBSERVABLE_MEDIA_PROVIDER,
                        STYLESHEET_MAP_PROVIDER,
                        StyleUtils,
                        BROWSER_PROVIDER,
                    ]
                },] },
    ];
    /** @nocollapse */
    CoreModule.ctorParameters = function () { return []; };
    return CoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @deprecated use Core Module instead
 * \@deletion-target 5.0.0-beta.15
 * *****************************************************************
 * Define module for the MediaQuery API
 * *****************************************************************
 */
var MediaQueriesModule = /** @class */ (function () {
    function MediaQueriesModule() {
    }
    MediaQueriesModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{
                    imports: [CoreModule],
                    exports: [CoreModule],
                },] },
    ];
    /** @nocollapse */
    MediaQueriesModule.ctorParameters = function () { return []; };
    return MediaQueriesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ADD_FLEX_STYLES = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('Flex Layout token, should flex stylings be applied to parents automatically');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var /** @type {?} */ INLINE = 'inline';
var /** @type {?} */ LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
/**
 * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
 * @param {?} value
 * @return {?}
 */
function buildLayoutCSS(value) {
    var _a = validateValue(value), direction = _a[0], wrap = _a[1], isInline = _a[2];
    return buildCSS(direction, wrap, isInline);
}
/**
 * Validate the value to be one of the acceptable value options
 * Use default fallback of 'row'
 * @param {?} value
 * @return {?}
 */
function validateValue(value) {
    value = value ? value.toLowerCase() : '';
    var _a = value.split(' '), direction = _a[0], wrap = _a[1], inline = _a[2];
    // First value must be the `flex-direction`
    if (!LAYOUT_VALUES.find(function (x) { return x === direction; })) {
        direction = LAYOUT_VALUES[0];
    }
    if (wrap === INLINE) {
        wrap = (inline !== INLINE) ? inline : '';
        inline = INLINE;
    }
    return [direction, validateWrapValue(wrap), !!inline];
}
/**
 * Convert layout-wrap='<value>' to expected flex-wrap style
 * @param {?} value
 * @return {?}
 */
function validateWrapValue(value) {
    if (!!value) {
        switch (value.toLowerCase()) {
            case 'reverse':
            case 'wrap-reverse':
            case 'reverse-wrap':
                value = 'wrap-reverse';
                break;
            case 'no':
            case 'none':
            case 'nowrap':
                value = 'nowrap';
                break;
            // All other values fallback to 'wrap'
            default:
                value = 'wrap';
                break;
        }
    }
    return value;
}
/**
 * Build the CSS that should be assigned to the element instance
 * BUG:
 *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
 *      Use height instead if possible; height : <xxx>vh;
 *
 *  This way any padding or border specified on the child elements are
 *  laid out and drawn inside that element's specified width and height.
 * @param {?} direction
 * @param {?=} wrap
 * @param {?=} inline
 * @return {?}
 */
function buildCSS(direction, wrap, inline) {
    if (wrap === void 0) { wrap = null; }
    if (inline === void 0) { inline = false; }
    return {
        'display': inline ? 'inline-flex' : 'flex',
        'box-sizing': 'border-box',
        'flex-direction': direction,
        'flex-wrap': !!wrap ? wrap : null
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var KeyOptions = /** @class */ (function () {
    function KeyOptions(baseKey, defaultValue, inputKeys) {
        this.baseKey = baseKey;
        this.defaultValue = defaultValue;
        this.inputKeys = inputKeys;
    }
    return KeyOptions;
}());
/**
 * ResponsiveActivation acts as a proxy between the MonitorMedia service (which emits mediaQuery
 * changes) and the fx API directives. The MQA proxies mediaQuery change events and notifies the
 * directive via the specified callback.
 *
 * - The MQA also determines which directive property should be used to determine the
 *   current change 'value'... BEFORE the original `onMediaQueryChanges()` method is called.
 * - The `ngOnDestroy()` method is also head-hooked to enable auto-unsubscribe from the
 *   MediaQueryServices.
 *
 * NOTE: these interceptions enables the logic in the fx API directives to remain terse and clean.
 */
var  /**
 * ResponsiveActivation acts as a proxy between the MonitorMedia service (which emits mediaQuery
 * changes) and the fx API directives. The MQA proxies mediaQuery change events and notifies the
 * directive via the specified callback.
 *
 * - The MQA also determines which directive property should be used to determine the
 *   current change 'value'... BEFORE the original `onMediaQueryChanges()` method is called.
 * - The `ngOnDestroy()` method is also head-hooked to enable auto-unsubscribe from the
 *   MediaQueryServices.
 *
 * NOTE: these interceptions enables the logic in the fx API directives to remain terse and clean.
 */
ResponsiveActivation = /** @class */ (function () {
    /**
     * Constructor
     */
    function ResponsiveActivation(_options, _mediaMonitor, _onMediaChanges) {
        this._options = _options;
        this._mediaMonitor = _mediaMonitor;
        this._onMediaChanges = _onMediaChanges;
        this._subscribers = [];
        this._registryMap = this._buildRegistryMap();
        this._subscribers = this._configureChangeObservers();
    }
    Object.defineProperty(ResponsiveActivation.prototype, "registryFromLargest", {
        /**
         * Get a readonly sorted list of the breakpoints corresponding to the directive properties
         * defined in the HTML markup: the sorting is done from largest to smallest. The order is
         * important when several media queries are 'registered' and from which, the browser uses the
         * first matching media query.
         */
        get: /**
         * Get a readonly sorted list of the breakpoints corresponding to the directive properties
         * defined in the HTML markup: the sorting is done from largest to smallest. The order is
         * important when several media queries are 'registered' and from which, the browser uses the
         * first matching media query.
         * @return {?}
         */
        function () {
            return this._registryMap.slice().reverse();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveActivation.prototype, "mediaMonitor", {
        /**
         * Accessor to the DI'ed directive property
         * Each directive instance has a reference to the MediaMonitor which is
         * used HERE to subscribe to mediaQuery change notifications.
         */
        get: /**
         * Accessor to the DI'ed directive property
         * Each directive instance has a reference to the MediaMonitor which is
         * used HERE to subscribe to mediaQuery change notifications.
         * @return {?}
         */
        function () {
            return this._mediaMonitor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveActivation.prototype, "activatedInputKey", {
        /**
         * Determine which directive @Input() property is currently active (for the viewport size):
         * The key must be defined (in use) or fallback to the 'closest' overlapping property key
         * that is defined; otherwise the default property key will be used.
         * e.g.
         *      if `<div fxHide fxHide.gt-sm="false">` is used but the current activated mediaQuery alias
         *      key is `.md` then `.gt-sm` should be used instead
         */
        get: /**
         * Determine which directive \@Input() property is currently active (for the viewport size):
         * The key must be defined (in use) or fallback to the 'closest' overlapping property key
         * that is defined; otherwise the default property key will be used.
         * e.g.
         *      if `<div fxHide fxHide.gt-sm="false">` is used but the current activated mediaQuery alias
         *      key is `.md` then `.gt-sm` should be used instead
         * @return {?}
         */
        function () {
            return this._activatedInputKey || this._options.baseKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveActivation.prototype, "activatedInput", {
        /**
         * Get the currently activated @Input value or the fallback default @Input value
         */
        get: /**
         * Get the currently activated \@Input value or the fallback default \@Input value
         * @return {?}
         */
        function () {
            var /** @type {?} */ key = this.activatedInputKey;
            return this.hasKeyValue(key) ? this._lookupKeyValue(key) : this._options.defaultValue;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Fast validator for presence of attribute on the host element
     */
    /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    ResponsiveActivation.prototype.hasKeyValue = /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var /** @type {?} */ value = this._options.inputKeys[key];
        return typeof value !== 'undefined';
    };
    /**
     * Remove interceptors, restore original functions, and forward the onDestroy() call
     */
    /**
     * Remove interceptors, restore original functions, and forward the onDestroy() call
     * @return {?}
     */
    ResponsiveActivation.prototype.destroy = /**
     * Remove interceptors, restore original functions, and forward the onDestroy() call
     * @return {?}
     */
    function () {
        this._subscribers.forEach(function (link) {
            link.unsubscribe();
        });
        this._subscribers = [];
    };
    /**
     * For each *defined* API property, register a callback to `_onMonitorEvents( )`
     * Cache 1..n subscriptions for internal auto-unsubscribes when the the directive destructs
     * @return {?}
     */
    ResponsiveActivation.prototype._configureChangeObservers = /**
     * For each *defined* API property, register a callback to `_onMonitorEvents( )`
     * Cache 1..n subscriptions for internal auto-unsubscribes when the the directive destructs
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ subscriptions = [];
        this._registryMap.forEach(function (bp) {
            if (_this._keyInUse(bp.key)) {
                // Inject directive default property key name: to let onMediaChange() calls
                // know which property is being triggered...
                var /** @type {?} */ buildChanges = function (change) {
                    change = change.clone();
                    change.property = _this._options.baseKey;
                    return change;
                };
                subscriptions.push(_this.mediaMonitor
                    .observe(bp.alias)
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(buildChanges))
                    .subscribe(function (change) {
                    _this._onMonitorEvents(change);
                }));
            }
        });
        return subscriptions;
    };
    /**
     * Build mediaQuery key-hashmap; only for the directive properties that are actually defined/used
     * in the HTML markup
     * @return {?}
     */
    ResponsiveActivation.prototype._buildRegistryMap = /**
     * Build mediaQuery key-hashmap; only for the directive properties that are actually defined/used
     * in the HTML markup
     * @return {?}
     */
    function () {
        var _this = this;
        return this.mediaMonitor.breakpoints
            .map(function (bp) {
            return /** @type {?} */ (extendObject({}, bp, {
                baseKey: _this._options.baseKey,
                // e.g. layout, hide, self-align, flex-wrap
                key: _this._options.baseKey + bp.suffix // e.g.  layoutGtSm, layoutMd, layoutGtLg
            }));
        })
            .filter(function (bp) { return _this._keyInUse(bp.key); });
    };
    /**
     * Synchronizes change notifications with the current mq-activated @Input and calculates the
     * mq-activated input value or the default value
     */
    /**
     * Synchronizes change notifications with the current mq-activated \@Input and calculates the
     * mq-activated input value or the default value
     * @param {?} change
     * @return {?}
     */
    ResponsiveActivation.prototype._onMonitorEvents = /**
     * Synchronizes change notifications with the current mq-activated \@Input and calculates the
     * mq-activated input value or the default value
     * @param {?} change
     * @return {?}
     */
    function (change) {
        if (change.property == this._options.baseKey) {
            change.value = this._calculateActivatedValue(change);
            this._onMediaChanges(change);
        }
    };
    /**
     * Has the key been specified in the HTML markup and thus is intended
     * to participate in activation processes.
     * @param {?} key
     * @return {?}
     */
    ResponsiveActivation.prototype._keyInUse = /**
     * Has the key been specified in the HTML markup and thus is intended
     * to participate in activation processes.
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._lookupKeyValue(key) !== undefined;
    };
    /**
     *  Map input key associated with mediaQuery activation to closest defined input key
     *  then return the values associated with the targeted input property
     *
     *  !! change events may arrive out-of-order (activate before deactivate)
     *     so make sure the deactivate is used ONLY when the keys match
     *     (since a different activate may be in use)
     * @param {?} current
     * @return {?}
     */
    ResponsiveActivation.prototype._calculateActivatedValue = /**
     *  Map input key associated with mediaQuery activation to closest defined input key
     *  then return the values associated with the targeted input property
     *
     *  !! change events may arrive out-of-order (activate before deactivate)
     *     so make sure the deactivate is used ONLY when the keys match
     *     (since a different activate may be in use)
     * @param {?} current
     * @return {?}
     */
    function (current) {
        var /** @type {?} */ currentKey = this._options.baseKey + current.suffix; // e.g. suffix == 'GtSm',
        var /** @type {?} */ newKey = this._activatedInputKey; // e.g. newKey == hideGtSm
        newKey = current.matches ? currentKey : ((newKey == currentKey) ? '' : newKey);
        this._activatedInputKey = this._validateInputKey(newKey);
        return this.activatedInput;
    };
    /**
     * For the specified input property key, validate it is defined (used in the markup)
     * If not see if a overlapping mediaQuery-related input key fallback has been defined
     *
     * NOTE: scans in the order defined by activeOverLaps (largest viewport ranges -> smallest ranges)
     * @param {?} inputKey
     * @return {?}
     */
    ResponsiveActivation.prototype._validateInputKey = /**
     * For the specified input property key, validate it is defined (used in the markup)
     * If not see if a overlapping mediaQuery-related input key fallback has been defined
     *
     * NOTE: scans in the order defined by activeOverLaps (largest viewport ranges -> smallest ranges)
     * @param {?} inputKey
     * @return {?}
     */
    function (inputKey) {
        var _this = this;
        var /** @type {?} */ isMissingKey = function (key) { return !_this._keyInUse(key); };
        if (isMissingKey(inputKey)) {
            this.mediaMonitor.activeOverlaps.some(function (bp) {
                var /** @type {?} */ key = _this._options.baseKey + bp.suffix;
                if (!isMissingKey(key)) {
                    inputKey = key;
                    return true; // exit .some()
                }
                return false;
            });
        }
        return inputKey;
    };
    /**
     * Get the value (if any) for the directive instances \@Input property (aka key)
     * @param {?} key
     * @return {?}
     */
    ResponsiveActivation.prototype._lookupKeyValue = /**
     * Get the value (if any) for the directive instances \@Input property (aka key)
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._options.inputKeys[key];
    };
    return ResponsiveActivation;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Abstract base class for the Layout API styling directives.
 * @abstract
 */
var  /**
 * Abstract base class for the Layout API styling directives.
 * @abstract
 */
BaseFxDirective = /** @class */ (function () {
    /**
     * Constructor
     */
    function BaseFxDirective(_mediaMonitor, _elementRef, _styler) {
        this._mediaMonitor = _mediaMonitor;
        this._elementRef = _elementRef;
        this._styler = _styler;
        /**
         *  Dictionary of input keys with associated values
         */
        this._inputMap = {};
        /**
         * Has the `ngOnInit()` method fired
         *
         * Used to allow *ngFor tasks to finish and support queries like
         * getComputedStyle() during ngOnInit().
         */
        this._hasInitialized = false;
    }
    Object.defineProperty(BaseFxDirective.prototype, "hasMediaQueryListener", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this._mqActivation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFxDirective.prototype, "activatedValue", {
        /**
         * Imperatively determine the current activated [input] value;
         * if called before ngOnInit() this will return `undefined`
         */
        get: /**
         * Imperatively determine the current activated [input] value;
         * if called before ngOnInit() this will return `undefined`
         * @return {?}
         */
        function () {
            return this._mqActivation ? this._mqActivation.activatedInput : undefined;
        },
        /**
         * Change the currently activated input value and force-update
         * the injected CSS (by-passing change detection).
         *
         * NOTE: Only the currently activated input value will be modified;
         *       other input values will NOT be affected.
         */
        set: /**
         * Change the currently activated input value and force-update
         * the injected CSS (by-passing change detection).
         *
         * NOTE: Only the currently activated input value will be modified;
         *       other input values will NOT be affected.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ key = 'baseKey', /** @type {?} */ previousVal;
            if (this._mqActivation) {
                key = this._mqActivation.activatedInputKey;
                previousVal = this._inputMap[key];
                this._inputMap[key] = value;
            }
            var /** @type {?} */ change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* SimpleChange */](previousVal, value, false);
            this.ngOnChanges(/** @type {?} */ (_a = {}, _a[key] = change, _a));
            var _a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFxDirective.prototype, "parentElement", {
        // *********************************************
        // Accessor Methods
        // *********************************************
        /**
         * Access to host element's parent DOM node
         */
        get: /**
         * Access to host element's parent DOM node
         * @return {?}
         */
        function () {
            return this._elementRef.nativeElement.parentNode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFxDirective.prototype, "nativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Access the current value (if any) of the @Input property.
     */
    /**
     * Access the current value (if any) of the \@Input property.
     * @param {?} key
     * @return {?}
     */
    BaseFxDirective.prototype._queryInput = /**
     * Access the current value (if any) of the \@Input property.
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._inputMap[key];
    };
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * Use post-component-initialization event to perform extra
     * querying such as computed Display style
     */
    /**
     * Use post-component-initialization event to perform extra
     * querying such as computed Display style
     * @return {?}
     */
    BaseFxDirective.prototype.ngOnInit = /**
     * Use post-component-initialization event to perform extra
     * querying such as computed Display style
     * @return {?}
     */
    function () {
        this._display = this._getDisplayStyle();
        this._hasInitialized = true;
    };
    /**
     * @param {?} change
     * @return {?}
     */
    BaseFxDirective.prototype.ngOnChanges = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        throw new Error("BaseFxDirective::ngOnChanges should be overridden in subclass: " + change);
    };
    /**
     * @return {?}
     */
    BaseFxDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._mqActivation) {
            this._mqActivation.destroy();
        }
        delete this._mediaMonitor;
    };
    // *********************************************
    // Protected Methods
    // *********************************************
    /**
     * Was the directive's default selector used ?
     * If not, use the fallback value!
     */
    /**
     * Was the directive's default selector used ?
     * If not, use the fallback value!
     * @param {?} key
     * @param {?} fallbackVal
     * @return {?}
     */
    BaseFxDirective.prototype._getDefaultVal = /**
     * Was the directive's default selector used ?
     * If not, use the fallback value!
     * @param {?} key
     * @param {?} fallbackVal
     * @return {?}
     */
    function (key, fallbackVal) {
        var /** @type {?} */ val = this._queryInput(key);
        var /** @type {?} */ hasDefaultVal = (val !== undefined && val !== null);
        return (hasDefaultVal && val !== '') ? val : fallbackVal;
    };
    /**
     * Quick accessor to the current HTMLElement's `display` style
     * Note: this allows us to preserve the original style
     * and optional restore it when the mediaQueries deactivate
     */
    /**
     * Quick accessor to the current HTMLElement's `display` style
     * Note: this allows us to preserve the original style
     * and optional restore it when the mediaQueries deactivate
     * @param {?=} source
     * @return {?}
     */
    BaseFxDirective.prototype._getDisplayStyle = /**
     * Quick accessor to the current HTMLElement's `display` style
     * Note: this allows us to preserve the original style
     * and optional restore it when the mediaQueries deactivate
     * @param {?=} source
     * @return {?}
     */
    function (source) {
        if (source === void 0) { source = this.nativeElement; }
        var /** @type {?} */ query = 'display';
        return this._styler.lookupStyle(source, query);
    };
    /**
     * Quick accessor to raw attribute value on the target DOM element
     */
    /**
     * Quick accessor to raw attribute value on the target DOM element
     * @param {?} attribute
     * @param {?=} source
     * @return {?}
     */
    BaseFxDirective.prototype._getAttributeValue = /**
     * Quick accessor to raw attribute value on the target DOM element
     * @param {?} attribute
     * @param {?=} source
     * @return {?}
     */
    function (attribute, source) {
        if (source === void 0) { source = this.nativeElement; }
        return this._styler.lookupAttributeValue(source, attribute);
    };
    /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     */
    /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     * @param {?} target
     * @param {?=} addIfMissing
     * @return {?}
     */
    BaseFxDirective.prototype._getFlowDirection = /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     * @param {?} target
     * @param {?=} addIfMissing
     * @return {?}
     */
    function (target, addIfMissing) {
        if (addIfMissing === void 0) { addIfMissing = false; }
        var /** @type {?} */ value = 'row';
        var /** @type {?} */ hasInlineValue = '';
        if (target) {
            _a = this._styler.getFlowDirection(target), value = _a[0], hasInlineValue = _a[1];
            if (!hasInlineValue && addIfMissing) {
                var /** @type {?} */ style = buildLayoutCSS(value);
                var /** @type {?} */ elements = [target];
                this._styler.applyStyleToElements(style, elements);
            }
        }
        return value.trim() || 'row';
        var _a;
    };
    /**
     * Applies styles given via string pair or object map to the directive element.
     */
    /**
     * Applies styles given via string pair or object map to the directive element.
     * @param {?} style
     * @param {?=} value
     * @param {?=} element
     * @return {?}
     */
    BaseFxDirective.prototype._applyStyleToElement = /**
     * Applies styles given via string pair or object map to the directive element.
     * @param {?} style
     * @param {?=} value
     * @param {?=} element
     * @return {?}
     */
    function (style, value, element) {
        if (element === void 0) { element = this.nativeElement; }
        this._styler.applyStyleToElement(element, style, value);
    };
    /**
     * Applies styles given via string pair or object map to the directive's element.
     */
    /**
     * Applies styles given via string pair or object map to the directive's element.
     * @param {?} style
     * @param {?} elements
     * @return {?}
     */
    BaseFxDirective.prototype._applyStyleToElements = /**
     * Applies styles given via string pair or object map to the directive's element.
     * @param {?} style
     * @param {?} elements
     * @return {?}
     */
    function (style, elements) {
        this._styler.applyStyleToElements(style, elements);
    };
    /**
     *  Save the property value; which may be a complex object.
     *  Complex objects support property chains
     */
    /**
     *  Save the property value; which may be a complex object.
     *  Complex objects support property chains
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseFxDirective.prototype._cacheInput = /**
     *  Save the property value; which may be a complex object.
     *  Complex objects support property chains
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (typeof source === 'object') {
            for (var /** @type {?} */ prop in source) {
                this._inputMap[prop] = source[prop];
            }
        }
        else {
            if (!!key) {
                this._inputMap[key] = source;
            }
        }
    };
    /**
     *  Build a ResponsiveActivation object used to manage subscriptions to mediaChange notifications
     *  and intelligent lookup of the directive's property value that corresponds to that mediaQuery
     *  (or closest match).
     */
    /**
     *  Build a ResponsiveActivation object used to manage subscriptions to mediaChange notifications
     *  and intelligent lookup of the directive's property value that corresponds to that mediaQuery
     *  (or closest match).
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    BaseFxDirective.prototype._listenForMediaQueryChanges = /**
     *  Build a ResponsiveActivation object used to manage subscriptions to mediaChange notifications
     *  and intelligent lookup of the directive's property value that corresponds to that mediaQuery
     *  (or closest match).
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    function (key, defaultValue, onMediaQueryChange) {
        // tslint:disable-line:max-line-length
        if (!this._mqActivation) {
            var /** @type {?} */ keyOptions = new KeyOptions(key, defaultValue, this._inputMap);
            this._mqActivation = new ResponsiveActivation(keyOptions, this._mediaMonitor, function (change) { return onMediaQueryChange(change); });
        }
        return this._mqActivation;
    };
    Object.defineProperty(BaseFxDirective.prototype, "childrenNodes", {
        /**
         * Special accessor to query for all child 'element' nodes regardless of type, class, etc.
         */
        get: /**
         * Special accessor to query for all child 'element' nodes regardless of type, class, etc.
         * @return {?}
         */
        function () {
            var /** @type {?} */ obj = this.nativeElement.children;
            var /** @type {?} */ buffer = [];
            // iterate backwards ensuring that length is an UInt32
            for (var /** @type {?} */ i = obj.length; i--;) {
                buffer[i] = obj[i];
            }
            return buffer;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     */
    /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @param {?} baseKey
     * @return {?}
     */
    BaseFxDirective.prototype.hasResponsiveAPI = /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @param {?} baseKey
     * @return {?}
     */
    function (baseKey) {
        var /** @type {?} */ totalKeys = Object.keys(this._inputMap).length;
        var /** @type {?} */ baseValue = this._inputMap[baseKey];
        return (totalKeys - (!!baseValue ? 1 : 0)) > 0;
    };
    /**
     * Fast validator for presence of attribute on the host element
     */
    /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    BaseFxDirective.prototype.hasKeyValue = /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._mqActivation.hasKeyValue(key);
    };
    Object.defineProperty(BaseFxDirective.prototype, "hasInitialized", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasInitialized;
        },
        enumerable: true,
        configurable: true
    });
    return BaseFxDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Adapter to the BaseFxDirective abstract class so it can be used via composition.
 * @see BaseFxDirective
 */
var  /**
 * Adapter to the BaseFxDirective abstract class so it can be used via composition.
 * @see BaseFxDirective
 */
BaseFxDirectiveAdapter = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_5_tslib__["b" /* __extends */])(BaseFxDirectiveAdapter, _super);
    /**
     * BaseFxDirectiveAdapter constructor
     */
    function BaseFxDirectiveAdapter(_baseKey, // non-responsive @Input property name
        // non-responsive @Input property name
        _mediaMonitor, _elementRef, _styler) {
        var _this = _super.call(this, _mediaMonitor, _elementRef, _styler) || this;
        _this._baseKey = _baseKey;
        _this._mediaMonitor = _mediaMonitor;
        _this._elementRef = _elementRef;
        _this._styler = _styler;
        return _this;
    }
    Object.defineProperty(BaseFxDirectiveAdapter.prototype, "activeKey", {
        /**
         * Accessor to determine which @Input property is "active"
         * e.g. which property value will be used.
         */
        get: /**
         * Accessor to determine which \@Input property is "active"
         * e.g. which property value will be used.
         * @return {?}
         */
        function () {
            var /** @type {?} */ mqa = this._mqActivation;
            var /** @type {?} */ key = mqa ? mqa.activatedInputKey : this._baseKey;
            // Note: ClassDirective::SimpleChanges uses 'klazz' instead of 'class' as a key
            return (key === 'class') ? 'klazz' : key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFxDirectiveAdapter.prototype, "inputMap", {
        /** Hash map of all @Input keys/values defined/used */
        get: /**
         * Hash map of all \@Input keys/values defined/used
         * @return {?}
         */
        function () {
            return this._inputMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFxDirectiveAdapter.prototype, "mqActivation", {
        /**
         * @see BaseFxDirective._mqActivation
         */
        get: /**
         * @see BaseFxDirective._mqActivation
         * @return {?}
         */
        function () {
            return this._mqActivation;
        },
        enumerable: true,
        configurable: true
    });
    /**
      * Does this directive have 1 or more responsive keys defined
      * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
      */
    /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @return {?}
     */
    BaseFxDirectiveAdapter.prototype.hasResponsiveAPI = /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @return {?}
     */
    function () {
        return _super.prototype.hasResponsiveAPI.call(this, this._baseKey);
    };
    /**
     * @see BaseFxDirective._queryInput
     */
    /**
     * @see BaseFxDirective._queryInput
     * @param {?} key
     * @return {?}
     */
    BaseFxDirectiveAdapter.prototype.queryInput = /**
     * @see BaseFxDirective._queryInput
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return key ? this._queryInput(key) : undefined;
    };
    /**
     *  Save the property value.
     */
    /**
     *  Save the property value.
     * @param {?=} key
     * @param {?=} source
     * @param {?=} cacheRaw
     * @return {?}
     */
    BaseFxDirectiveAdapter.prototype.cacheInput = /**
     *  Save the property value.
     * @param {?=} key
     * @param {?=} source
     * @param {?=} cacheRaw
     * @return {?}
     */
    function (key, source, cacheRaw) {
        if (cacheRaw === void 0) { cacheRaw = false; }
        if (cacheRaw) {
            this._cacheInputRaw(key, source);
        }
        else if (Array.isArray(source)) {
            this._cacheInputArray(key, source);
        }
        else if (typeof source === 'object') {
            this._cacheInputObject(key, source);
        }
        else if (typeof source === 'string') {
            this._cacheInputString(key, source);
        }
        else {
            throw new Error("Invalid class value '" + key + "' provided. Did you want to cache the raw value?");
        }
    };
    /**
     * @see BaseFxDirective._listenForMediaQueryChanges
     */
    /**
     * @see BaseFxDirective._listenForMediaQueryChanges
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    BaseFxDirectiveAdapter.prototype.listenForMediaQueryChanges = /**
     * @see BaseFxDirective._listenForMediaQueryChanges
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    function (key, defaultValue, onMediaQueryChange) {
        return this._listenForMediaQueryChanges(key, defaultValue, onMediaQueryChange);
    };
    // ************************************************************
    // Protected Methods
    // ************************************************************
    /**
     * No implicit transforms of the source.
     * Required when caching values expected later for KeyValueDiffers
     */
    /**
     * No implicit transforms of the source.
     * Required when caching values expected later for KeyValueDiffers
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseFxDirectiveAdapter.prototype._cacheInputRaw = /**
     * No implicit transforms of the source.
     * Required when caching values expected later for KeyValueDiffers
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (key) {
            this._inputMap[key] = source;
        }
    };
    /**
     *  Save the property value for Array values.
     */
    /**
     *  Save the property value for Array values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseFxDirectiveAdapter.prototype._cacheInputArray = /**
     *  Save the property value for Array values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (key === void 0) { key = ''; }
        this._inputMap[key] = source ? source.join(' ') : '';
    };
    /**
     *  Save the property value for key/value pair values.
     */
    /**
     *  Save the property value for key/value pair values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseFxDirectiveAdapter.prototype._cacheInputObject = /**
     *  Save the property value for key/value pair values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (key === void 0) { key = ''; }
        var /** @type {?} */ classes = [];
        if (source) {
            for (var /** @type {?} */ prop in source) {
                if (!!source[prop]) {
                    classes.push(prop);
                }
            }
        }
        this._inputMap[key] = classes.join(' ');
    };
    /**
     *  Save the property value for string values.
     */
    /**
     *  Save the property value for string values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseFxDirectiveAdapter.prototype._cacheInputString = /**
     *  Save the property value for string values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (key === void 0) { key = ''; }
        this._inputMap[key] = source;
    };
    return BaseFxDirectiveAdapter;
}(BaseFxDirective));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * MockMatchMedia mocks calls to the Window API matchMedia with a build of a simulated
 * MockMediaQueryListener. Methods are available to simulate an activation of a mediaQuery
 * range and to clearAll mediaQuery listeners.
 */
var MockMatchMedia = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_5_tslib__["b" /* __extends */])(MockMatchMedia, _super);
    function MockMatchMedia(_zone, _platformId, _document, _breakpoints) {
        var _this = _super.call(this, _zone, _platformId, _document) || this;
        _this._breakpoints = _breakpoints;
        /**
         * Special flag used to test BreakPoint registrations with MatchMedia
         */
        _this.autoRegisterQueries = true;
        /**
         * Allow fallback to overlapping mediaQueries to determine
         * activatedInput(s).
         */
        _this.useOverlaps = false;
        _this._actives = [];
        _this._actives = [];
        return _this;
    }
    /** Easy method to clear all listeners for all mediaQueries */
    /**
     * Easy method to clear all listeners for all mediaQueries
     * @return {?}
     */
    MockMatchMedia.prototype.clearAll = /**
     * Easy method to clear all listeners for all mediaQueries
     * @return {?}
     */
    function () {
        this._registry.forEach(function (mql, _) {
            mql.destroy();
        });
        this._registry.clear();
        this.useOverlaps = false;
    };
    /** Feature to support manual, simulated activation of a mediaQuery. */
    /**
     * Feature to support manual, simulated activation of a mediaQuery.
     * @param {?} mediaQuery
     * @param {?=} useOverlaps
     * @return {?}
     */
    MockMatchMedia.prototype.activate = /**
     * Feature to support manual, simulated activation of a mediaQuery.
     * @param {?} mediaQuery
     * @param {?=} useOverlaps
     * @return {?}
     */
    function (mediaQuery, useOverlaps) {
        if (useOverlaps === void 0) { useOverlaps = false; }
        useOverlaps = useOverlaps || this.useOverlaps;
        mediaQuery = this._validateQuery(mediaQuery);
        if (useOverlaps || !this.isActive(mediaQuery)) {
            this._deactivateAll();
            this._registerMediaQuery(mediaQuery);
            this._activateWithOverlaps(mediaQuery, useOverlaps);
        }
        return this.hasActivated;
    };
    /** Converts an optional mediaQuery alias to a specific, valid mediaQuery */
    /**
     * Converts an optional mediaQuery alias to a specific, valid mediaQuery
     * @param {?} queryOrAlias
     * @return {?}
     */
    MockMatchMedia.prototype._validateQuery = /**
     * Converts an optional mediaQuery alias to a specific, valid mediaQuery
     * @param {?} queryOrAlias
     * @return {?}
     */
    function (queryOrAlias) {
        var /** @type {?} */ bp = this._breakpoints.findByAlias(queryOrAlias);
        if (bp) {
            queryOrAlias = bp.mediaQuery;
        }
        return queryOrAlias;
    };
    /**
     * Manually activate any overlapping mediaQueries to simulate
     * similar functionality in the window.matchMedia()
     * @param {?} mediaQuery
     * @param {?} useOverlaps
     * @return {?}
     */
    MockMatchMedia.prototype._activateWithOverlaps = /**
     * Manually activate any overlapping mediaQueries to simulate
     * similar functionality in the window.matchMedia()
     * @param {?} mediaQuery
     * @param {?} useOverlaps
     * @return {?}
     */
    function (mediaQuery, useOverlaps) {
        if (useOverlaps) {
            var /** @type {?} */ bp = this._breakpoints.findByQuery(mediaQuery);
            var /** @type {?} */ alias = bp ? bp.alias : 'unknown';
            // Simulate activation of overlapping lt-<XXX> ranges
            switch (alias) {
                case 'lg':
                    this._activateByAlias('lt-xl');
                    break;
                case 'md':
                    this._activateByAlias('lt-xl, lt-lg');
                    break;
                case 'sm':
                    this._activateByAlias('lt-xl, lt-lg, lt-md');
                    break;
                case 'xs':
                    this._activateByAlias('lt-xl, lt-lg, lt-md, lt-sm');
                    break;
            }
            // Simulate activate of overlapping gt-<xxxx> mediaQuery ranges
            switch (alias) {
                case 'xl':
                    this._activateByAlias('gt-lg, gt-md, gt-sm, gt-xs');
                    break;
                case 'lg':
                    this._activateByAlias('gt-md, gt-sm, gt-xs');
                    break;
                case 'md':
                    this._activateByAlias('gt-sm, gt-xs');
                    break;
                case 'sm':
                    this._activateByAlias('gt-xs');
                    break;
            }
        }
        // Activate last since the responsiveActivation is watching *this* mediaQuery
        return this._activateByQuery(mediaQuery);
    };
    /**
     *
     * @param {?} aliases
     * @return {?}
     */
    MockMatchMedia.prototype._activateByAlias = /**
     *
     * @param {?} aliases
     * @return {?}
     */
    function (aliases) {
        var _this = this;
        var /** @type {?} */ activate = function (alias) {
            var /** @type {?} */ bp = _this._breakpoints.findByAlias(alias);
            _this._activateByQuery(bp ? bp.mediaQuery : alias);
        };
        aliases.split(',').forEach(function (alias) { return activate(alias.trim()); });
    };
    /**
     *
     * @param {?} mediaQuery
     * @return {?}
     */
    MockMatchMedia.prototype._activateByQuery = /**
     *
     * @param {?} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        var /** @type {?} */ mql = /** @type {?} */ (this._registry.get(mediaQuery));
        var /** @type {?} */ alreadyAdded = this._actives.reduce(function (found, it) {
            return found || (mql && (it.media === mql.media));
        }, false);
        if (mql && !alreadyAdded) {
            this._actives.push(mql.activate());
        }
        return this.hasActivated;
    };
    /**
     * Deactivate all current Mock MQLs
     * @return {?}
     */
    MockMatchMedia.prototype._deactivateAll = /**
     * Deactivate all current Mock MQLs
     * @return {?}
     */
    function () {
        if (this._actives.length) {
            // Deactivate all current MQLs and reset the buffer
            for (var _i = 0, _a = this._actives; _i < _a.length; _i++) {
                var it = _a[_i];
                it.deactivate();
            }
            this._actives = [];
        }
        return this;
    };
    /**
     * Insure the mediaQuery is registered with MatchMedia
     * @param {?} mediaQuery
     * @return {?}
     */
    MockMatchMedia.prototype._registerMediaQuery = /**
     * Insure the mediaQuery is registered with MatchMedia
     * @param {?} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        if (!this._registry.has(mediaQuery) && this.autoRegisterQueries) {
            this.registerQuery(mediaQuery);
        }
    };
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     */
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    MockMatchMedia.prototype._buildMQL = /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return new MockMediaQueryList(query);
    };
    Object.defineProperty(MockMatchMedia.prototype, "hasActivated", {
        get: /**
         * @return {?}
         */
        function () {
            return (this._actives.length > 0);
        },
        enumerable: true,
        configurable: true
    });
    MockMatchMedia.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    MockMatchMedia.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], },
        { type: Object, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* PLATFORM_ID */],] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DOCUMENT */],] },] },
        { type: BreakPointRegistry, },
    ]; };
    return MockMatchMedia;
}(MatchMedia));
/**
 * Special internal class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
var  /**
 * Special internal class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
MockMediaQueryList = /** @class */ (function () {
    function MockMediaQueryList(_mediaQuery) {
        this._mediaQuery = _mediaQuery;
        this._isActive = false;
        this._listeners = [];
    }
    Object.defineProperty(MockMediaQueryList.prototype, "matches", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MockMediaQueryList.prototype, "media", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaQuery;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     */
    /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     * @return {?}
     */
    MockMediaQueryList.prototype.destroy = /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     * @return {?}
     */
    function () {
        this.deactivate();
        this._listeners = [];
    };
    /** Notify all listeners that 'matches === TRUE' */
    /**
     * Notify all listeners that 'matches === TRUE'
     * @return {?}
     */
    MockMediaQueryList.prototype.activate = /**
     * Notify all listeners that 'matches === TRUE'
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._isActive) {
            this._isActive = true;
            this._listeners.forEach(function (callback) {
                callback(_this);
            });
        }
        return this;
    };
    /** Notify all listeners that 'matches === false' */
    /**
     * Notify all listeners that 'matches === false'
     * @return {?}
     */
    MockMediaQueryList.prototype.deactivate = /**
     * Notify all listeners that 'matches === false'
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._isActive) {
            this._isActive = false;
            this._listeners.forEach(function (callback) {
                callback(_this);
            });
        }
        return this;
    };
    /** Add a listener to our internal list to activate later */
    /**
     * Add a listener to our internal list to activate later
     * @param {?} listener
     * @return {?}
     */
    MockMediaQueryList.prototype.addListener = /**
     * Add a listener to our internal list to activate later
     * @param {?} listener
     * @return {?}
     */
    function (listener) {
        if (this._listeners.indexOf(listener) === -1) {
            this._listeners.push(listener);
        }
        if (this._isActive) {
            listener(this);
        }
    };
    /** Don't need to remove listeners in the testing environment */
    /**
     * Don't need to remove listeners in the testing environment
     * @param {?} _
     * @return {?}
     */
    MockMediaQueryList.prototype.removeListener = /**
     * Don't need to remove listeners in the testing environment
     * @param {?} _
     * @return {?}
     */
    function (_) {
    };
    return MockMediaQueryList;
}());
/**
 * Pre-configured provider for MockMatchMedia
 */
var /** @type {?} */ MockMatchMediaProvider = {
    // tslint:disable-line:variable-name
    provide: MatchMedia,
    useClass: MockMatchMedia
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Special server-only class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
var  /**
 * Special server-only class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
ServerMediaQueryList = /** @class */ (function () {
    function ServerMediaQueryList(_mediaQuery) {
        this._mediaQuery = _mediaQuery;
        this._isActive = false;
        this._listeners = [];
    }
    Object.defineProperty(ServerMediaQueryList.prototype, "matches", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerMediaQueryList.prototype, "media", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaQuery;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     */
    /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     * @return {?}
     */
    ServerMediaQueryList.prototype.destroy = /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     * @return {?}
     */
    function () {
        this.deactivate();
        this._listeners = [];
    };
    /** Notify all listeners that 'matches === TRUE' */
    /**
     * Notify all listeners that 'matches === TRUE'
     * @return {?}
     */
    ServerMediaQueryList.prototype.activate = /**
     * Notify all listeners that 'matches === TRUE'
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._isActive) {
            this._isActive = true;
            this._listeners.forEach(function (callback) {
                callback(_this);
            });
        }
        return this;
    };
    /** Notify all listeners that 'matches === false' */
    /**
     * Notify all listeners that 'matches === false'
     * @return {?}
     */
    ServerMediaQueryList.prototype.deactivate = /**
     * Notify all listeners that 'matches === false'
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._isActive) {
            this._isActive = false;
            this._listeners.forEach(function (callback) {
                callback(_this);
            });
        }
        return this;
    };
    /** Add a listener to our internal list to activate later */
    /**
     * Add a listener to our internal list to activate later
     * @param {?} listener
     * @return {?}
     */
    ServerMediaQueryList.prototype.addListener = /**
     * Add a listener to our internal list to activate later
     * @param {?} listener
     * @return {?}
     */
    function (listener) {
        if (this._listeners.indexOf(listener) === -1) {
            this._listeners.push(listener);
        }
        if (this._isActive) {
            listener(this);
        }
    };
    /** Don't need to remove listeners in the server environment */
    /**
     * Don't need to remove listeners in the server environment
     * @param {?} _
     * @return {?}
     */
    ServerMediaQueryList.prototype.removeListener = /**
     * Don't need to remove listeners in the server environment
     * @param {?} _
     * @return {?}
     */
    function (_) {
    };
    return ServerMediaQueryList;
}());
/**
 * Special server-only implementation of MatchMedia that uses the above
 * ServerMediaQueryList as its internal representation
 *
 * Also contains methods to activate and deactivate breakpoints
 */
var ServerMatchMedia = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_5_tslib__["b" /* __extends */])(ServerMatchMedia, _super);
    function ServerMatchMedia(_zone, _platformId, _document) {
        var _this = _super.call(this, _zone, _platformId, _document) || this;
        _this._zone = _zone;
        _this._platformId = _platformId;
        _this._document = _document;
        _this._registry = new Map();
        _this._source = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new MediaChange(true));
        _this._observable$ = _this._source.asObservable();
        return _this;
    }
    /** Activate the specified breakpoint if we're on the server, no-op otherwise */
    /**
     * Activate the specified breakpoint if we're on the server, no-op otherwise
     * @param {?} bp
     * @return {?}
     */
    ServerMatchMedia.prototype.activateBreakpoint = /**
     * Activate the specified breakpoint if we're on the server, no-op otherwise
     * @param {?} bp
     * @return {?}
     */
    function (bp) {
        var /** @type {?} */ lookupBreakpoint = this._registry.get(bp.mediaQuery);
        if (lookupBreakpoint) {
            lookupBreakpoint.activate();
        }
    };
    /** Deactivate the specified breakpoint if we're on the server, no-op otherwise */
    /**
     * Deactivate the specified breakpoint if we're on the server, no-op otherwise
     * @param {?} bp
     * @return {?}
     */
    ServerMatchMedia.prototype.deactivateBreakpoint = /**
     * Deactivate the specified breakpoint if we're on the server, no-op otherwise
     * @param {?} bp
     * @return {?}
     */
    function (bp) {
        var /** @type {?} */ lookupBreakpoint = this._registry.get(bp.mediaQuery);
        if (lookupBreakpoint) {
            lookupBreakpoint.deactivate();
        }
    };
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     */
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    ServerMatchMedia.prototype._buildMQL = /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return new ServerMediaQueryList(query);
    };
    ServerMatchMedia.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    ServerMatchMedia.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], },
        { type: Object, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* PLATFORM_ID */],] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DOCUMENT */],] },] },
    ]; };
    return ServerMatchMedia;
}(MatchMedia));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Ensure a single global service provider
 * @param {?} parentMonitor
 * @param {?} breakpoints
 * @param {?} matchMedia
 * @return {?}
 */
function MEDIA_MONITOR_PROVIDER_FACTORY(parentMonitor, breakpoints, matchMedia) {
    return parentMonitor || new MediaMonitor(breakpoints, matchMedia);
}
/**
 * Export provider that uses a global service factory (above)
 */
var /** @type {?} */ MEDIA_MONITOR_PROVIDER = {
    provide: MediaMonitor,
    deps: [
        [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* SkipSelf */](), MediaMonitor],
        BreakPointRegistry,
        MatchMedia,
    ],
    useFactory: MEDIA_MONITOR_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=core.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/flex-layout/esm5/extended.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtendedModule; });
/* unused harmony export ClassDirective */
/* unused harmony export ImgSrcDirective */
/* unused harmony export negativeOf */
/* unused harmony export ShowHideDirective */
/* unused harmony export StyleDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout_flex__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * This directive provides a responsive API for the HTML <img> 'src' attribute
 * and will update the img.src property upon each responsive activation.
 *
 * e.g.
 *      <img src="defaultScene.jpg" src.xs="mobileScene.jpg"></img>
 *
 * @see https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-src/
 */
var ImgSrcDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(ImgSrcDirective, _super);
    /* tslint:enable */
    function ImgSrcDirective(_elRef, _monitor, _styler, _platformId, _serverModuleLoaded) {
        var _this = _super.call(this, _monitor, _elRef, _styler) || this;
        _this._elRef = _elRef;
        _this._monitor = _monitor;
        _this._styler = _styler;
        _this._platformId = _platformId;
        _this._serverModuleLoaded = _serverModuleLoaded;
        _this._cacheInput('src', _elRef.nativeElement.getAttribute('src') || '');
        if (Object(__WEBPACK_IMPORTED_MODULE_2__angular_common__["m" /* isPlatformServer */])(_this._platformId) && _this._serverModuleLoaded) {
            _this.nativeElement.setAttribute('src', '');
        }
        return _this;
    }
    Object.defineProperty(ImgSrcDirective.prototype, "srcBase", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this.cacheDefaultSrc(val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcLtXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcGtLg', val); },
        enumerable: true,
        configurable: true
    });
    /**
     * Listen for responsive changes to update the img.src attribute
     */
    /**
     * Listen for responsive changes to update the img.src attribute
     * @return {?}
     */
    ImgSrcDirective.prototype.ngOnInit = /**
     * Listen for responsive changes to update the img.src attribute
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        if (this.hasResponsiveKeys) {
            // Listen for responsive changes
            this._listenForMediaQueryChanges('src', this.defaultSrc, function () {
                _this._updateSrcFor();
            });
        }
        this._updateSrcFor();
    };
    /**
     * Update the 'src' property of the host <img> element
     */
    /**
     * Update the 'src' property of the host <img> element
     * @return {?}
     */
    ImgSrcDirective.prototype.ngOnChanges = /**
     * Update the 'src' property of the host <img> element
     * @return {?}
     */
    function () {
        if (this.hasInitialized) {
            this._updateSrcFor();
        }
    };
    /**
     * Use the [responsively] activated input value to update
     * the host img src attribute or assign a default `img.src=''`
     * if the src has not been defined.
     *
     * Do nothing to standard `<img src="">` usages, only when responsive
     * keys are present do we actually call `setAttribute()`
     */
    /**
     * Use the [responsively] activated input value to update
     * the host img src attribute or assign a default `img.src=''`
     * if the src has not been defined.
     *
     * Do nothing to standard `<img src="">` usages, only when responsive
     * keys are present do we actually call `setAttribute()`
     * @return {?}
     */
    ImgSrcDirective.prototype._updateSrcFor = /**
     * Use the [responsively] activated input value to update
     * the host img src attribute or assign a default `img.src=''`
     * if the src has not been defined.
     *
     * Do nothing to standard `<img src="">` usages, only when responsive
     * keys are present do we actually call `setAttribute()`
     * @return {?}
     */
    function () {
        if (this.hasResponsiveKeys) {
            var /** @type {?} */ url = this.activatedValue || this.defaultSrc;
            if (Object(__WEBPACK_IMPORTED_MODULE_2__angular_common__["m" /* isPlatformServer */])(this._platformId) && this._serverModuleLoaded) {
                this._styler.applyStyleToElement(this.nativeElement, { 'content': url ? "url(" + url + ")" : '' });
            }
            else {
                this.nativeElement.setAttribute('src', String(url));
            }
        }
    };
    /**
     * Cache initial value of 'src', this will be used as fallback when breakpoint
     * activations change.
     * NOTE: The default 'src' property is not bound using @Input(), so perform
     * a post-ngOnInit() lookup of the default src value (if any).
     */
    /**
     * Cache initial value of 'src', this will be used as fallback when breakpoint
     * activations change.
     * NOTE: The default 'src' property is not bound using \@Input(), so perform
     * a post-ngOnInit() lookup of the default src value (if any).
     * @param {?=} value
     * @return {?}
     */
    ImgSrcDirective.prototype.cacheDefaultSrc = /**
     * Cache initial value of 'src', this will be used as fallback when breakpoint
     * activations change.
     * NOTE: The default 'src' property is not bound using \@Input(), so perform
     * a post-ngOnInit() lookup of the default src value (if any).
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        this._cacheInput('src', value || '');
    };
    Object.defineProperty(ImgSrcDirective.prototype, "defaultSrc", {
        /**
         * Empty values are maintained, undefined values are exposed as ''
         */
        get: /**
         * Empty values are maintained, undefined values are exposed as ''
         * @return {?}
         */
        function () {
            return this._queryInput('src') || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "hasResponsiveKeys", {
        /**
         * Does the <img> have 1 or more src.<xxx> responsive inputs
         * defined... these will be mapped to activated breakpoints.
         */
        get: /**
         * Does the <img> have 1 or more src.<xxx> responsive inputs
         * defined... these will be mapped to activated breakpoints.
         * @return {?}
         */
        function () {
            return Object.keys(this._inputMap).length > 1;
        },
        enumerable: true,
        configurable: true
    });
    ImgSrcDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */], args: [{
                    selector: "\n  img[src.xs],    img[src.sm],    img[src.md],    img[src.lg],   img[src.xl],\n  img[src.lt-sm], img[src.lt-md], img[src.lt-lg], img[src.lt-xl],\n  img[src.gt-xs], img[src.gt-sm], img[src.gt-md], img[src.gt-lg]\n"
                },] },
    ];
    /** @nocollapse */
    ImgSrcDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["f" /* MediaMonitor */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["h" /* StyleUtils */], },
        { type: Object, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["T" /* PLATFORM_ID */],] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["g" /* SERVER_TOKEN */],] },] },
    ]; };
    ImgSrcDirective.propDecorators = {
        "srcBase": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src',] },],
        "srcXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src.xs',] },],
        "srcSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src.sm',] },],
        "srcMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src.md',] },],
        "srcLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src.lg',] },],
        "srcXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src.xl',] },],
        "srcLtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src.lt-sm',] },],
        "srcLtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src.lt-md',] },],
        "srcLtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src.lt-lg',] },],
        "srcLtXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src.lt-xl',] },],
        "srcGtXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src.gt-xs',] },],
        "srcGtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src.gt-sm',] },],
        "srcGtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src.gt-md',] },],
        "srcGtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src.gt-lg',] },],
    };
    return ImgSrcDirective;
}(__WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["b" /* BaseFxDirective */]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Directive to add responsive support for ngClass.
 * This maintains the core functionality of 'ngClass' and adds responsive API
 * Note: this class is a no-op when rendered on the server
 */
var ClassDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(ClassDirective, _super);
    /* tslint:enable */
    function ClassDirective(monitor, _iterableDiffers, _keyValueDiffers, _ngEl, _renderer, _ngClassInstance, _styler) {
        var _this = _super.call(this, monitor, _ngEl, _styler) || this;
        _this.monitor = monitor;
        _this._iterableDiffers = _iterableDiffers;
        _this._keyValueDiffers = _keyValueDiffers;
        _this._ngEl = _ngEl;
        _this._renderer = _renderer;
        _this._ngClassInstance = _ngClassInstance;
        _this._styler = _styler;
        _this._configureAdapters();
        return _this;
    }
    Object.defineProperty(ClassDirective.prototype, "ngClassBase", {
        set: /**
         * Intercept ngClass assignments so we cache the default classes
         * which are merged with activated styles or used as fallbacks.
         * Note: Base ngClass values are applied during ngDoCheck()
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var /** @type {?} */ key = 'ngClass';
            this._base.cacheInput(key, val, true);
            this._ngClassInstance.ngClass = this._base.queryInput(key);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "klazz", {
        set: /**
         * Capture class assignments so we cache the default classes
         * which are merged with activated styles and used as fallbacks.
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var /** @type {?} */ key = 'class';
            this._base.cacheInput(key, val);
            this._ngClassInstance.klass = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassLg', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassXl', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassLtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassLtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassLtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassLtXl', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassGtXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassGtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassGtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassGtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    // ******************************************************************
    // Lifecycle Hooks
    // ******************************************************************
    /**
     * For @Input changes on the current mq activation property
     */
    /**
     * For \@Input changes on the current mq activation property
     * @param {?} changes
     * @return {?}
     */
    ClassDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this._base.activeKey in changes) {
            this._ngClassInstance.ngClass = this._base.mqActivation.activatedInput || '';
        }
    };
    /**
     * @return {?}
     */
    ClassDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._configureMQListener();
    };
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     */
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    ClassDirective.prototype.ngDoCheck = /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    function () {
        this._ngClassInstance.ngDoCheck();
    };
    /**
     * @return {?}
     */
    ClassDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._base.ngOnDestroy();
        delete this._ngClassInstance;
    };
    // ******************************************************************
    // Internal Methods
    // ******************************************************************
    /**
     * Configure adapters (that delegate to an internal ngClass instance) if responsive
     * keys have been defined.
     */
    /**
     * Configure adapters (that delegate to an internal ngClass instance) if responsive
     * keys have been defined.
     * @return {?}
     */
    ClassDirective.prototype._configureAdapters = /**
     * Configure adapters (that delegate to an internal ngClass instance) if responsive
     * keys have been defined.
     * @return {?}
     */
    function () {
        this._base = new __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["c" /* BaseFxDirectiveAdapter */]('ngClass', this.monitor, this._ngEl, this._styler);
        if (!this._ngClassInstance) {
            // Create an instance NgClass Directive instance only if `ngClass=""` has NOT been defined on
            // the same host element; since the responsive variations may be defined...
            this._ngClassInstance = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["h" /* NgClass */](this._iterableDiffers, this._keyValueDiffers, this._ngEl, this._renderer);
        }
    };
    /**
     * Build an mqActivation object that bridges mql change events to onMediaQueryChange handlers
     * NOTE: We delegate subsequent activity to the NgClass logic
     *       Identify the activated input value and update the ngClass iterables...
     *       Use ngDoCheck() to actually apply the values to the element
     */
    /**
     * Build an mqActivation object that bridges mql change events to onMediaQueryChange handlers
     * NOTE: We delegate subsequent activity to the NgClass logic
     *       Identify the activated input value and update the ngClass iterables...
     *       Use ngDoCheck() to actually apply the values to the element
     * @param {?=} baseKey
     * @return {?}
     */
    ClassDirective.prototype._configureMQListener = /**
     * Build an mqActivation object that bridges mql change events to onMediaQueryChange handlers
     * NOTE: We delegate subsequent activity to the NgClass logic
     *       Identify the activated input value and update the ngClass iterables...
     *       Use ngDoCheck() to actually apply the values to the element
     * @param {?=} baseKey
     * @return {?}
     */
    function (baseKey) {
        var _this = this;
        if (baseKey === void 0) { baseKey = 'ngClass'; }
        var /** @type {?} */ fallbackValue = this._base.queryInput(baseKey);
        this._base.listenForMediaQueryChanges(baseKey, fallbackValue, function (changes) {
            _this._ngClassInstance.ngClass = changes.value || '';
            _this._ngClassInstance.ngDoCheck();
        });
    };
    ClassDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */], args: [{
                    selector: "\n    [ngClass.xs], [ngClass.sm], [ngClass.md], [ngClass.lg], [ngClass.xl],\n    [ngClass.lt-sm], [ngClass.lt-md], [ngClass.lt-lg], [ngClass.lt-xl],\n    [ngClass.gt-xs], [ngClass.gt-sm], [ngClass.gt-md], [ngClass.gt-lg]\n  "
                },] },
    ];
    /** @nocollapse */
    ClassDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["f" /* MediaMonitor */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* IterableDiffers */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* KeyValueDiffers */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* Renderer2 */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_common__["h" /* NgClass */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* Self */] },] },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["h" /* StyleUtils */], },
    ]; };
    ClassDirective.propDecorators = {
        "ngClassBase": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass',] },],
        "klazz": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['class',] },],
        "ngClassXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass.xs',] },],
        "ngClassSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass.sm',] },],
        "ngClassMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass.md',] },],
        "ngClassLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass.lg',] },],
        "ngClassXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass.xl',] },],
        "ngClassLtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass.lt-sm',] },],
        "ngClassLtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass.lt-md',] },],
        "ngClassLtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass.lt-lg',] },],
        "ngClassLtXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass.lt-xl',] },],
        "ngClassGtXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass.gt-xs',] },],
        "ngClassGtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass.gt-sm',] },],
        "ngClassGtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass.gt-md',] },],
        "ngClassGtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass.gt-lg',] },],
    };
    return ClassDirective;
}(__WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["b" /* BaseFxDirective */]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ FALSY = ['false', false, 0];
/**
 * For fxHide selectors, we invert the 'value'
 * and assign to the equivalent fxShow selector cache
 *  - When 'hide' === '' === true, do NOT show the element
 *  - When 'hide' === false or 0... we WILL show the element
 * @param {?} hide
 * @return {?}
 */
function negativeOf(hide) {
    return (hide === '') ? false :
        ((hide === 'false') || (hide === 0)) ? true : !hide;
}
/**
 * 'show' Layout API directive
 *
 */
var ShowHideDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(ShowHideDirective, _super);
    /* tslint:enable */
    /**
     *
     */
    function ShowHideDirective(monitor, layout, elRef, styleUtils, platformId, serverModuleLoaded) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this.layout = layout;
        _this.elRef = elRef;
        _this.styleUtils = styleUtils;
        _this.platformId = platformId;
        _this.serverModuleLoaded = serverModuleLoaded;
        if (layout) {
            /**
                   * The Layout can set the display:flex (and incorrectly affect the Hide/Show directives.
                   * Whenever Layout [on the same element] resets its CSS, then update the Hide/Show CSS
                   */
            /**
             * The Layout can set the display:flex (and incorrectly affect the Hide/Show directives.
             * Whenever Layout [on the same element] resets its CSS, then update the Hide/Show CSS
             */
            _this._layoutWatcher = layout.layout$.subscribe(function () { return _this._updateWithValue(); });
        }
        return _this;
    }
    Object.defineProperty(ShowHideDirective.prototype, "show", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('show', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hide", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('show', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showXs', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showSm', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showMd', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLg', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showXl', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtSm', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtMd', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtLg', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtXl', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtXs', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtSm', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtMd', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtLg', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * Override accessor to the current HTMLElement's `display` style
     * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
     * unless it was already explicitly specified inline or in a CSS stylesheet.
     */
    /**
     * Override accessor to the current HTMLElement's `display` style
     * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
     * unless it was already explicitly specified inline or in a CSS stylesheet.
     * @return {?}
     */
    ShowHideDirective.prototype._getDisplayStyle = /**
     * Override accessor to the current HTMLElement's `display` style
     * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
     * unless it was already explicitly specified inline or in a CSS stylesheet.
     * @return {?}
     */
    function () {
        return this.layout ? 'flex' : _super.prototype._getDisplayStyle.call(this);
    };
    /**
     * On changes to any @Input properties...
     * Default to use the non-responsive Input value ('fxShow')
     * Then conditionally override with the mq-activated Input's current value
     */
    /**
     * On changes to any \@Input properties...
     * Default to use the non-responsive Input value ('fxShow')
     * Then conditionally override with the mq-activated Input's current value
     * @param {?} changes
     * @return {?}
     */
    ShowHideDirective.prototype.ngOnChanges = /**
     * On changes to any \@Input properties...
     * Default to use the non-responsive Input value ('fxShow')
     * Then conditionally override with the mq-activated Input's current value
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.hasInitialized && (changes['show'] != null || this._mqActivation)) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    ShowHideDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        var /** @type {?} */ value = this._getDefaultVal('show', true);
        // Build _mqActivation controller
        this._listenForMediaQueryChanges('show', value, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    /**
     * @return {?}
     */
    ShowHideDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /** Validate the visibility value and then update the host's inline display style */
    /**
     * Validate the visibility value and then update the host's inline display style
     * @param {?=} value
     * @return {?}
     */
    ShowHideDirective.prototype._updateWithValue = /**
     * Validate the visibility value and then update the host's inline display style
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._getDefaultVal('show', true);
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        var /** @type {?} */ shouldShow = this._validateTruthy(value);
        this._applyStyleToElement(this._buildCSS(shouldShow));
        if (Object(__WEBPACK_IMPORTED_MODULE_2__angular_common__["m" /* isPlatformServer */])(this.platformId) && this.serverModuleLoaded) {
            this.nativeElement.style.setProperty('display', '');
        }
    };
    /** Build the CSS that should be assigned to the element instance */
    /**
     * Build the CSS that should be assigned to the element instance
     * @param {?} show
     * @return {?}
     */
    ShowHideDirective.prototype._buildCSS = /**
     * Build the CSS that should be assigned to the element instance
     * @param {?} show
     * @return {?}
     */
    function (show) {
        return { 'display': show ? this._display : 'none' };
    };
    /**  Validate the to be not FALSY */
    /**
     * Validate the to be not FALSY
     * @param {?} show
     * @return {?}
     */
    ShowHideDirective.prototype._validateTruthy = /**
     * Validate the to be not FALSY
     * @param {?} show
     * @return {?}
     */
    function (show) {
        return (FALSY.indexOf(show) == -1);
    };
    ShowHideDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */], args: [{
                    selector: "\n  [fxShow],\n  [fxShow.xs], [fxShow.sm], [fxShow.md], [fxShow.lg], [fxShow.xl],\n  [fxShow.lt-sm], [fxShow.lt-md], [fxShow.lt-lg], [fxShow.lt-xl],\n  [fxShow.gt-xs], [fxShow.gt-sm], [fxShow.gt-md], [fxShow.gt-lg],\n  [fxHide],\n  [fxHide.xs], [fxHide.sm], [fxHide.md], [fxHide.lg], [fxHide.xl],\n  [fxHide.lt-sm], [fxHide.lt-md], [fxHide.lt-lg], [fxHide.lt-xl],\n  [fxHide.gt-xs], [fxHide.gt-sm], [fxHide.gt-md], [fxHide.gt-lg]\n"
                },] },
    ];
    /** @nocollapse */
    ShowHideDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["f" /* MediaMonitor */], },
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout_flex__["b" /* LayoutDirective */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* Self */] },] },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["h" /* StyleUtils */], },
        { type: Object, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["T" /* PLATFORM_ID */],] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["g" /* SERVER_TOKEN */],] },] },
    ]; };
    ShowHideDirective.propDecorators = {
        "show": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow',] },],
        "showXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow.xs',] },],
        "showSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow.sm',] },],
        "showMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow.md',] },],
        "showLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow.lg',] },],
        "showXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow.xl',] },],
        "showLtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow.lt-sm',] },],
        "showLtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow.lt-md',] },],
        "showLtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow.lt-lg',] },],
        "showLtXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow.lt-xl',] },],
        "showGtXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow.gt-xs',] },],
        "showGtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow.gt-sm',] },],
        "showGtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow.gt-md',] },],
        "showGtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow.gt-lg',] },],
        "hide": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide',] },],
        "hideXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide.xs',] },],
        "hideSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide.sm',] },],
        "hideMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide.md',] },],
        "hideLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide.lg',] },],
        "hideXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide.xl',] },],
        "hideLtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide.lt-sm',] },],
        "hideLtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide.lt-md',] },],
        "hideLtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide.lt-lg',] },],
        "hideLtXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide.lt-xl',] },],
        "hideGtXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide.gt-xs',] },],
        "hideGtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide.gt-sm',] },],
        "hideGtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide.gt-md',] },],
        "hideGtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide.gt-lg',] },],
    };
    return ShowHideDirective;
}(__WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["b" /* BaseFxDirective */]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        if (source != null) {
            for (var /** @type {?} */ key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * NgStyle allowed inputs
 */
var /**
 * NgStyle allowed inputs
 */
NgStyleKeyValue = /** @class */ (function () {
    function NgStyleKeyValue(key, value, noQuotes) {
        if (noQuotes === void 0) { noQuotes = true; }
        this.key = key;
        this.value = value;
        this.key = noQuotes ? key.replace(/['"]/g, '').trim() : key.trim();
        this.value = noQuotes ? value.replace(/['"]/g, '').trim() : value.trim();
        this.value = this.value.replace(/;/, '');
    }
    return NgStyleKeyValue;
}());
/**
 * Transform Operators for \@angular/flex-layout NgStyle Directive
 */
var /** @type {?} */ ngStyleUtils = {
    getType: getType,
    buildRawList: buildRawList,
    buildMapFromList: buildMapFromList,
    buildMapFromSet: buildMapFromSet
};
/**
 * @param {?} target
 * @return {?}
 */
function getType(target) {
    var /** @type {?} */ what = typeof target;
    if (what === 'object') {
        return (target.constructor === Array) ? 'array' :
            (target.constructor === Set) ? 'set' : 'object';
    }
    return what;
}
/**
 * Split string of key:value pairs into Array of k-v pairs
 * e.g.  'key:value; key:value; key:value;' -> ['key:value',...]
 * @param {?} source
 * @param {?=} delimiter
 * @return {?}
 */
function buildRawList(source, delimiter) {
    if (delimiter === void 0) { delimiter = ';'; }
    return String(source)
        .trim()
        .split(delimiter)
        .map(function (val) { return val.trim(); })
        .filter(function (val) { return val !== ''; });
}
/**
 * Convert array of key:value strings to a iterable map object
 * @param {?} styles
 * @param {?=} sanitize
 * @return {?}
 */
function buildMapFromList(styles, sanitize) {
    var /** @type {?} */ sanitizeValue = function (it) {
        if (sanitize) {
            it.value = sanitize(it.value);
        }
        return it;
    };
    return styles
        .map(stringToKeyValue)
        .filter(function (entry) { return !!entry; })
        .map(sanitizeValue)
        .reduce(keyValuesToMap, {});
}
/**
 * Convert Set<string> or raw Object to an iterable NgStyleMap
 * @param {?} source
 * @param {?=} sanitize
 * @return {?}
 */
function buildMapFromSet(source, sanitize) {
    var /** @type {?} */ list = new Array();
    if (getType(source) == 'set') {
        source.forEach(function (entry) { return list.push(entry); });
    }
    else {
        // simple hashmap
        Object.keys(source).forEach(function (key) {
            list.push(key + ":" + source[key]);
        });
    }
    return buildMapFromList(list, sanitize);
}
/**
 * Convert 'key:value' -> [key, value]
 * @param {?} it
 * @return {?}
 */
function stringToKeyValue(it) {
    var _a = it.split(':'), key = _a[0], val = _a[1];
    return val ? new NgStyleKeyValue(key, val) : null;
}
/**
 * Convert [ [key,value] ] -> { key : value }
 * @param {?} map
 * @param {?} entry
 * @return {?}
 */
function keyValuesToMap(map, entry) {
    if (!!entry.key) {
        map[entry.key] = entry.value;
    }
    return map;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Directive to add responsive support for ngStyle.
 *
 */
var StyleDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(StyleDirective, _super);
    /* tslint:enable */
    /**
     *  Constructor for the ngStyle subclass; which adds selectors and
     *  a MediaQuery Activation Adapter
     */
    function StyleDirective(monitor, _sanitizer, _ngEl, _renderer, _differs, _ngStyleInstance, _styler) {
        var _this = _super.call(this, monitor, _ngEl, _styler) || this;
        _this.monitor = monitor;
        _this._sanitizer = _sanitizer;
        _this._ngEl = _ngEl;
        _this._renderer = _renderer;
        _this._differs = _differs;
        _this._ngStyleInstance = _ngStyleInstance;
        _this._styler = _styler;
        _this._configureAdapters();
        return _this;
    }
    Object.defineProperty(StyleDirective.prototype, "ngStyleBase", {
        set: /**
         * Intercept ngStyle assignments so we cache the default styles
         * which are merged with activated styles or used as fallbacks.
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var /** @type {?} */ key = 'ngStyle';
            this._base.cacheInput(key, val, true); // convert val to hashmap
            this._ngStyleInstance.ngStyle = this._base.queryInput(key);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleLg', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleXl', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleLtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleLtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleLtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleLtXl', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleGtXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleGtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleGtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleGtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    // ******************************************************************
    // Lifecycle Hooks
    // ******************************************************************
    /**
     * For @Input changes on the current mq activation property
     */
    /**
     * For \@Input changes on the current mq activation property
     * @param {?} changes
     * @return {?}
     */
    StyleDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this._base.activeKey in changes) {
            this._ngStyleInstance.ngStyle = this._base.mqActivation.activatedInput || '';
        }
    };
    /**
     * @return {?}
     */
    StyleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._configureMQListener();
    };
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     */
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    StyleDirective.prototype.ngDoCheck = /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    function () {
        this._ngStyleInstance.ngDoCheck();
    };
    /**
     * @return {?}
     */
    StyleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._base.ngOnDestroy();
        delete this._ngStyleInstance;
    };
    // ******************************************************************
    // Internal Methods
    // ******************************************************************
    /**
       * Configure adapters (that delegate to an internal ngClass instance) if responsive
       * keys have been defined.
       */
    /**
     * Configure adapters (that delegate to an internal ngClass instance) if responsive
     * keys have been defined.
     * @return {?}
     */
    StyleDirective.prototype._configureAdapters = /**
     * Configure adapters (that delegate to an internal ngClass instance) if responsive
     * keys have been defined.
     * @return {?}
     */
    function () {
        this._base = new __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["c" /* BaseFxDirectiveAdapter */]('ngStyle', this.monitor, this._ngEl, this._styler);
        if (!this._ngStyleInstance) {
            // Create an instance NgClass Directive instance only if `ngClass=""` has NOT been
            // defined on the same host element; since the responsive variations may be defined...
            this._ngStyleInstance = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["i" /* NgStyle */](this._differs, this._ngEl, this._renderer);
        }
        this._buildCacheInterceptor();
        this._fallbackToStyle();
    };
    /**
     * Build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * Build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @param {?=} baseKey
     * @return {?}
     */
    StyleDirective.prototype._configureMQListener = /**
     * Build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @param {?=} baseKey
     * @return {?}
     */
    function (baseKey) {
        var _this = this;
        if (baseKey === void 0) { baseKey = 'ngStyle'; }
        var /** @type {?} */ fallbackValue = this._base.queryInput(baseKey);
        this._base.listenForMediaQueryChanges(baseKey, fallbackValue, function (changes) {
            _this._ngStyleInstance.ngStyle = changes.value || '';
            _this._ngStyleInstance.ngDoCheck();
        });
    };
    // ************************************************************************
    // Private Internal Methods
    // ************************************************************************
    /**
     * Build intercept to convert raw strings to ngStyleMap
     */
    /**
     * Build intercept to convert raw strings to ngStyleMap
     * @return {?}
     */
    StyleDirective.prototype._buildCacheInterceptor = /**
     * Build intercept to convert raw strings to ngStyleMap
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ cacheInput = this._base.cacheInput.bind(this._base);
        this._base.cacheInput = function (key, source, cacheRaw, merge) {
            if (cacheRaw === void 0) { cacheRaw = false; }
            if (merge === void 0) { merge = true; }
            var /** @type {?} */ styles = _this._buildStyleMap(source);
            if (merge) {
                styles = extendObject({}, _this._base.inputMap['ngStyle'], styles);
            }
            cacheInput(key, styles, cacheRaw);
        };
    };
    /**
     * Convert raw strings to ngStyleMap; which is required by ngStyle
     * NOTE: Raw string key-value pairs MUST be delimited by `;`
     *       Comma-delimiters are not supported due to complexities of
     *       possible style values such as `rgba(x,x,x,x)` and others
     */
    /**
     * Convert raw strings to ngStyleMap; which is required by ngStyle
     * NOTE: Raw string key-value pairs MUST be delimited by `;`
     *       Comma-delimiters are not supported due to complexities of
     *       possible style values such as `rgba(x,x,x,x)` and others
     * @param {?} styles
     * @return {?}
     */
    StyleDirective.prototype._buildStyleMap = /**
     * Convert raw strings to ngStyleMap; which is required by ngStyle
     * NOTE: Raw string key-value pairs MUST be delimited by `;`
     *       Comma-delimiters are not supported due to complexities of
     *       possible style values such as `rgba(x,x,x,x)` and others
     * @param {?} styles
     * @return {?}
     */
    function (styles) {
        var _this = this;
        var /** @type {?} */ sanitizer = function (val) {
            // Always safe-guard (aka sanitize) style property values
            return _this._sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_2" /* SecurityContext */].STYLE, val) || '';
        };
        if (styles) {
            switch (ngStyleUtils.getType(styles)) {
                case 'string': return ngStyleUtils.buildMapFromList(ngStyleUtils.buildRawList(styles), sanitizer);
                case 'array': return ngStyleUtils.buildMapFromList(/** @type {?} */ (styles), sanitizer);
                case 'set': return ngStyleUtils.buildMapFromSet(styles, sanitizer);
                default: return ngStyleUtils.buildMapFromSet(styles, sanitizer);
            }
        }
        return styles;
    };
    /**
     * Initial lookup of raw 'class' value (if any)
     */
    /**
     * Initial lookup of raw 'class' value (if any)
     * @return {?}
     */
    StyleDirective.prototype._fallbackToStyle = /**
     * Initial lookup of raw 'class' value (if any)
     * @return {?}
     */
    function () {
        if (!this._base.queryInput('ngStyle')) {
            this.ngStyleBase = this._getAttributeValue('style') || '';
        }
    };
    StyleDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */], args: [{
                    selector: "\n    [ngStyle.xs], [ngStyle.sm], [ngStyle.md], [ngStyle.lg], [ngStyle.xl],\n    [ngStyle.lt-sm], [ngStyle.lt-md], [ngStyle.lt-lg], [ngStyle.lt-xl],\n    [ngStyle.gt-xs], [ngStyle.gt-sm], [ngStyle.gt-md], [ngStyle.gt-lg]\n  "
                },] },
    ];
    /** @nocollapse */
    StyleDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["f" /* MediaMonitor */], },
        { type: __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* Renderer2 */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* KeyValueDiffers */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_common__["i" /* NgStyle */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* Self */] },] },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["h" /* StyleUtils */], },
    ]; };
    StyleDirective.propDecorators = {
        "ngStyleBase": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle',] },],
        "ngStyleXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle.xs',] },],
        "ngStyleSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle.sm',] },],
        "ngStyleMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle.md',] },],
        "ngStyleLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle.lg',] },],
        "ngStyleXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle.xl',] },],
        "ngStyleLtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle.lt-sm',] },],
        "ngStyleLtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle.lt-md',] },],
        "ngStyleLtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle.lt-lg',] },],
        "ngStyleLtXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle.lt-xl',] },],
        "ngStyleGtXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle.gt-xs',] },],
        "ngStyleGtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle.gt-sm',] },],
        "ngStyleGtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle.gt-md',] },],
        "ngStyleGtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle.gt-lg',] },],
    };
    return StyleDirective;
}(__WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["b" /* BaseFxDirective */]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ALL_DIRECTIVES = [
    ShowHideDirective,
    ClassDirective,
    StyleDirective,
    ImgSrcDirective
];
/**
 * *****************************************************************
 * Define module for the Extended API
 * *****************************************************************
 */
var ExtendedModule = /** @class */ (function () {
    function ExtendedModule() {
    }
    ExtendedModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["e" /* CoreModule */]],
                    declarations: ALL_DIRECTIVES.slice(),
                    exports: ALL_DIRECTIVES.slice()
                },] },
    ];
    /** @nocollapse */
    ExtendedModule.ctorParameters = function () { return []; };
    return ExtendedModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=extended.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VERSION */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexLayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* unused harmony reexport ɵb */
/* unused harmony reexport ɵa */
/* unused harmony reexport ɵe */
/* unused harmony reexport ɵd */
/* unused harmony reexport ɵc */
/* unused harmony reexport removeStyles */
/* unused harmony reexport BROWSER_PROVIDER */
/* unused harmony reexport CLASS_NAME */
/* unused harmony reexport CoreModule */
/* unused harmony reexport MediaQueriesModule */
/* unused harmony reexport MediaChange */
/* unused harmony reexport StylesheetMap */
/* unused harmony reexport STYLESHEET_MAP_PROVIDER_FACTORY */
/* unused harmony reexport STYLESHEET_MAP_PROVIDER */
/* unused harmony reexport ADD_FLEX_STYLES */
/* unused harmony reexport SERVER_TOKEN */
/* unused harmony reexport DISABLE_DEFAULT_BREAKPOINTS */
/* unused harmony reexport ADD_ORIENTATION_BREAKPOINTS */
/* unused harmony reexport BREAKPOINT */
/* unused harmony reexport DISABLE_VENDOR_PREFIXES */
/* unused harmony reexport BaseFxDirective */
/* unused harmony reexport BaseFxDirectiveAdapter */
/* unused harmony reexport RESPONSIVE_ALIASES */
/* unused harmony reexport DEFAULT_BREAKPOINTS */
/* unused harmony reexport ScreenTypes */
/* unused harmony reexport ORIENTATION_BREAKPOINTS */
/* unused harmony reexport BreakPointRegistry */
/* unused harmony reexport buildMergedBreakPoints */
/* unused harmony reexport DEFAULT_BREAKPOINTS_PROVIDER_FACTORY */
/* unused harmony reexport DEFAULT_BREAKPOINTS_PROVIDER */
/* unused harmony reexport BREAKPOINTS_PROVIDER_FACTORY */
/* unused harmony reexport BREAKPOINTS_PROVIDER */
/* unused harmony reexport CUSTOM_BREAKPOINTS_PROVIDER_FACTORY */
/* unused harmony reexport BREAKPOINTS */
/* unused harmony reexport MatchMedia */
/* unused harmony reexport MockMatchMedia */
/* unused harmony reexport MockMediaQueryList */
/* unused harmony reexport MockMatchMediaProvider */
/* unused harmony reexport ServerMediaQueryList */
/* unused harmony reexport ServerMatchMedia */
/* unused harmony reexport MediaMonitor */
/* unused harmony reexport MEDIA_MONITOR_PROVIDER_FACTORY */
/* unused harmony reexport MEDIA_MONITOR_PROVIDER */
/* unused harmony reexport ObservableMedia */
/* unused harmony reexport MediaService */
/* unused harmony reexport OBSERVABLE_MEDIA_PROVIDER_FACTORY */
/* unused harmony reexport OBSERVABLE_MEDIA_PROVIDER */
/* unused harmony reexport KeyOptions */
/* unused harmony reexport ResponsiveActivation */
/* unused harmony reexport StyleUtils */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_extended__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/extended.es5.js");
/* unused harmony reexport ExtendedModule */
/* unused harmony reexport ClassDirective */
/* unused harmony reexport ImgSrcDirective */
/* unused harmony reexport negativeOf */
/* unused harmony reexport ShowHideDirective */
/* unused harmony reexport StyleDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout_flex__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* unused harmony reexport FlexModule */
/* unused harmony reexport FlexDirective */
/* unused harmony reexport FlexAlignDirective */
/* unused harmony reexport FlexFillDirective */
/* unused harmony reexport FlexOffsetDirective */
/* unused harmony reexport FlexOrderDirective */
/* unused harmony reexport LayoutDirective */
/* unused harmony reexport LayoutAlignDirective */
/* unused harmony reexport LayoutGapDirective */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Current version of Angular Flex-Layout.
 */
var /** @type {?} */ VERSION = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Version */]('5.0.0-beta.13-3e5820d');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 *
 */
var FlexLayoutModule = /** @class */ (function () {
    function FlexLayoutModule(serverModuleLoaded, platformId) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["m" /* isPlatformServer */])(platformId) && !serverModuleLoaded) {
            console.warn('Warning: Flex Layout loaded on the server without FlexLayoutServerModule');
        }
    }
    /**
     * External uses can easily add custom breakpoints AND include internal orientations
     * breakpoints; which are not available by default.
     *
     * !! Selector aliases are not auto-configured. Developers must subclass
     * the API directives to support extra selectors for the orientations breakpoints !!
     * @deprecated use BREAKPOINT multi-provider instead
     * @deletion-target v6.0.0-beta.15
     */
    /**
     * External uses can easily add custom breakpoints AND include internal orientations
     * breakpoints; which are not available by default.
     *
     * !! Selector aliases are not auto-configured. Developers must subclass
     * the API directives to support extra selectors for the orientations breakpoints !!
     * @deprecated use BREAKPOINT multi-provider instead
     * \@deletion-target v6.0.0-beta.15
     * @param {?} breakpoints
     * @param {?=} options
     * @return {?}
     */
    FlexLayoutModule.provideBreakPoints = /**
     * External uses can easily add custom breakpoints AND include internal orientations
     * breakpoints; which are not available by default.
     *
     * !! Selector aliases are not auto-configured. Developers must subclass
     * the API directives to support extra selectors for the orientations breakpoints !!
     * @deprecated use BREAKPOINT multi-provider instead
     * \@deletion-target v6.0.0-beta.15
     * @param {?} breakpoints
     * @param {?=} options
     * @return {?}
     */
    function (breakpoints, options) {
        return {
            ngModule: FlexLayoutModule,
            providers: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["d" /* CUSTOM_BREAKPOINTS_PROVIDER_FACTORY */])(breakpoints, options || { orientations: false })
            ]
        };
    };
    FlexLayoutModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_4__angular_flex_layout_flex__["a" /* FlexModule */], __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_extended__["a" /* ExtendedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["e" /* CoreModule */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_4__angular_flex_layout_flex__["a" /* FlexModule */], __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_extended__["a" /* ExtendedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["e" /* CoreModule */]]
                },] },
    ];
    /** @nocollapse */
    FlexLayoutModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["g" /* SERVER_TOKEN */],] },] },
        { type: Object, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* PLATFORM_ID */],] },] },
    ]; };
    return FlexLayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=flex-layout.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/flex-layout/esm5/flex.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexModule; });
/* unused harmony export FlexDirective */
/* unused harmony export FlexAlignDirective */
/* unused harmony export FlexFillDirective */
/* unused harmony export FlexOffsetDirective */
/* unused harmony export FlexOrderDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LayoutDirective; });
/* unused harmony export LayoutAlignDirective */
/* unused harmony export LayoutGapDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__ = __webpack_require__("./node_modules/rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_bidi__ = __webpack_require__("./node_modules/@angular/cdk/esm5/bidi.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var /** @type {?} */ INLINE = 'inline';
var /** @type {?} */ LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
/**
 * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
 * @param {?} value
 * @return {?}
 */
function buildLayoutCSS(value) {
    var _a = validateValue(value), direction = _a[0], wrap = _a[1], isInline = _a[2];
    return buildCSS(direction, wrap, isInline);
}
/**
 * Validate the value to be one of the acceptable value options
 * Use default fallback of 'row'
 * @param {?} value
 * @return {?}
 */
function validateValue(value) {
    value = value ? value.toLowerCase() : '';
    var _a = value.split(' '), direction = _a[0], wrap = _a[1], inline = _a[2];
    // First value must be the `flex-direction`
    if (!LAYOUT_VALUES.find(function (x) { return x === direction; })) {
        direction = LAYOUT_VALUES[0];
    }
    if (wrap === INLINE) {
        wrap = (inline !== INLINE) ? inline : '';
        inline = INLINE;
    }
    return [direction, validateWrapValue(wrap), !!inline];
}
/**
 * Determine if the validated, flex-direction value specifies
 * a horizontal/row flow.
 * @param {?} value
 * @return {?}
 */
function isFlowHorizontal(value) {
    var flow = validateValue(value)[0];
    return flow.indexOf('row') > -1;
}
/**
 * Convert layout-wrap='<value>' to expected flex-wrap style
 * @param {?} value
 * @return {?}
 */
function validateWrapValue(value) {
    if (!!value) {
        switch (value.toLowerCase()) {
            case 'reverse':
            case 'wrap-reverse':
            case 'reverse-wrap':
                value = 'wrap-reverse';
                break;
            case 'no':
            case 'none':
            case 'nowrap':
                value = 'nowrap';
                break;
            // All other values fallback to 'wrap'
            default:
                value = 'wrap';
                break;
        }
    }
    return value;
}
/**
 * Build the CSS that should be assigned to the element instance
 * BUG:
 *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
 *      Use height instead if possible; height : <xxx>vh;
 *
 *  This way any padding or border specified on the child elements are
 *  laid out and drawn inside that element's specified width and height.
 * @param {?} direction
 * @param {?=} wrap
 * @param {?=} inline
 * @return {?}
 */
function buildCSS(direction, wrap, inline) {
    if (wrap === void 0) { wrap = null; }
    if (inline === void 0) { inline = false; }
    return {
        'display': inline ? 'inline-flex' : 'flex',
        'box-sizing': 'border-box',
        'flex-direction': direction,
        'flex-wrap': !!wrap ? wrap : null
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * 'layout' flexbox styling directive
 * Defines the positioning flow direction for the child elements: row or column
 * Optional values: column or row (default)
 * @see https://css-tricks.com/almanac/properties/f/flex-direction/
 *
 */
var LayoutDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(LayoutDirective, _super);
    /* tslint:enable */
    /**
     *
     */
    function LayoutDirective(monitor, elRef, styleUtils) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this._announcer = new __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        _this.layout$ = _this._announcer.asObservable();
        return _this;
    }
    Object.defineProperty(LayoutDirective.prototype, "layout", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layout', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutLtXl', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * On changes to any @Input properties...
     * Default to use the non-responsive Input value ('fxLayout')
     * Then conditionally override with the mq-activated Input's current value
     */
    /**
     * On changes to any \@Input properties...
     * Default to use the non-responsive Input value ('fxLayout')
     * Then conditionally override with the mq-activated Input's current value
     * @param {?} changes
     * @return {?}
     */
    LayoutDirective.prototype.ngOnChanges = /**
     * On changes to any \@Input properties...
     * Default to use the non-responsive Input value ('fxLayout')
     * Then conditionally override with the mq-activated Input's current value
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['layout'] != null || this._mqActivation) {
            this._updateWithDirection();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    LayoutDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('layout', 'row', function (changes) {
            _this._updateWithDirection(changes.value);
        });
        this._updateWithDirection();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * Validate the direction value and then update the host's inline flexbox styles
     */
    /**
     * Validate the direction value and then update the host's inline flexbox styles
     * @param {?=} value
     * @return {?}
     */
    LayoutDirective.prototype._updateWithDirection = /**
     * Validate the direction value and then update the host's inline flexbox styles
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput('layout') || 'row';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        // Update styles and announce to subscribers the *new* direction
        var /** @type {?} */ css = buildLayoutCSS(!!value ? value : '');
        this._applyStyleToElement(css);
        this._announcer.next({
            direction: css['flex-direction'],
            wrap: !!css['flex-wrap'] && css['flex-wrap'] !== 'nowrap'
        });
    };
    LayoutDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */], args: [{ selector: "\n  [fxLayout],\n  [fxLayout.xs], [fxLayout.sm], [fxLayout.md], [fxLayout.lg], [fxLayout.xl],\n  [fxLayout.lt-sm], [fxLayout.lt-md], [fxLayout.lt-lg], [fxLayout.lt-xl],\n  [fxLayout.gt-xs], [fxLayout.gt-sm], [fxLayout.gt-md], [fxLayout.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    LayoutDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["f" /* MediaMonitor */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["h" /* StyleUtils */], },
    ]; };
    LayoutDirective.propDecorators = {
        "layout": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout',] },],
        "layoutXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout.xs',] },],
        "layoutSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout.sm',] },],
        "layoutMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout.md',] },],
        "layoutLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout.lg',] },],
        "layoutXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout.xl',] },],
        "layoutGtXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout.gt-xs',] },],
        "layoutGtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout.gt-sm',] },],
        "layoutGtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout.gt-md',] },],
        "layoutGtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout.gt-lg',] },],
        "layoutLtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout.lt-sm',] },],
        "layoutLtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout.lt-md',] },],
        "layoutLtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout.lt-lg',] },],
        "layoutLtXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout.lt-xl',] },],
    };
    return LayoutDirective;
}(__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["b" /* BaseFxDirective */]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * 'layout-padding' styling directive
 *  Defines padding of child elements in a layout container
 */
var LayoutGapDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(LayoutGapDirective, _super);
    /* tslint:enable */
    function LayoutGapDirective(monitor, elRef, container, _zone, _directionality, styleUtils) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this._zone = _zone;
        _this._directionality = _directionality;
        _this._layout = 'row';
        if (container) {
            // Subscribe to layout direction changes
            _this._layoutWatcher = container.layout$.subscribe(_this._onLayoutChange.bind(_this));
        }
        _this._directionWatcher =
            _this._directionality.change.subscribe(_this._updateWithValue.bind(_this));
        return _this;
    }
    Object.defineProperty(LayoutGapDirective.prototype, "gap", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gap', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapLtXl', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * @param {?} changes
     * @return {?}
     */
    LayoutGapDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['gap'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    LayoutGapDirective.prototype.ngAfterContentInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        this._watchContentChanges();
        this._listenForMediaQueryChanges('gap', '0', function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    /**
     * @return {?}
     */
    LayoutGapDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
        if (this._observer) {
            this._observer.disconnect();
        }
        if (this._directionWatcher) {
            this._directionWatcher.unsubscribe();
        }
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * Watch for child nodes to be added... and apply the layout gap styles to each.
     * NOTE: this does NOT! differentiate between viewChildren and contentChildren
     */
    /**
     * Watch for child nodes to be added... and apply the layout gap styles to each.
     * NOTE: this does NOT! differentiate between viewChildren and contentChildren
     * @return {?}
     */
    LayoutGapDirective.prototype._watchContentChanges = /**
     * Watch for child nodes to be added... and apply the layout gap styles to each.
     * NOTE: this does NOT! differentiate between viewChildren and contentChildren
     * @return {?}
     */
    function () {
        var _this = this;
        this._zone.runOutsideAngular(function () {
            if (typeof MutationObserver !== 'undefined') {
                _this._observer = new MutationObserver(function (mutations) {
                    var /** @type {?} */ validatedChanges = function (it) {
                        return (it.addedNodes && it.addedNodes.length > 0) ||
                            (it.removedNodes && it.removedNodes.length > 0);
                    };
                    // update gap styles only for child 'added' or 'removed' events
                    if (mutations.some(validatedChanges)) {
                        _this._updateWithValue();
                    }
                });
                _this._observer.observe(_this.nativeElement, { childList: true });
            }
        });
    };
    /**
     * Cache the parent container 'flex-direction' and update the 'margin' styles
     */
    /**
     * Cache the parent container 'flex-direction' and update the 'margin' styles
     * @param {?} layout
     * @return {?}
     */
    LayoutGapDirective.prototype._onLayoutChange = /**
     * Cache the parent container 'flex-direction' and update the 'margin' styles
     * @param {?} layout
     * @return {?}
     */
    function (layout) {
        var _this = this;
        this._layout = (layout.direction || '').toLowerCase();
        if (!LAYOUT_VALUES.find(function (x) { return x === _this._layout; })) {
            this._layout = 'row';
        }
        this._updateWithValue();
    };
    /**
     *
     */
    /**
     *
     * @param {?=} value
     * @return {?}
     */
    LayoutGapDirective.prototype._updateWithValue = /**
     *
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        var /** @type {?} */ gapValue = value || this._queryInput('gap') || '0';
        if (this._mqActivation) {
            gapValue = this._mqActivation.activatedInput;
        }
        // Gather all non-hidden Element nodes
        var /** @type {?} */ items = this.childrenNodes
            .filter(function (el) { return el.nodeType === 1 && _this._getDisplayStyle(el) != 'none'; })
            .sort(function (a, b) {
            var /** @type {?} */ orderA = +_this._styler.lookupStyle(a, 'order');
            var /** @type {?} */ orderB = +_this._styler.lookupStyle(b, 'order');
            if (isNaN(orderA) || isNaN(orderB) || orderA === orderB) {
                return 0;
            }
            else {
                return orderA > orderB ? 1 : -1;
            }
        });
        if (items.length > 0) {
            if (gapValue.endsWith(GRID_SPECIFIER)) {
                gapValue = gapValue.substring(0, gapValue.indexOf(GRID_SPECIFIER));
                // For each `element` children, set the padding
                this._applyStyleToElements(this._buildGridPadding(gapValue), items);
                // Add the margin to the host element
                this._applyStyleToElement(this._buildGridMargin(gapValue));
            }
            else {
                var /** @type {?} */ lastItem = items.pop();
                // For each `element` children EXCEPT the last,
                // set the margin right/bottom styles...
                this._applyStyleToElements(this._buildCSS(gapValue), items);
                // Clear all gaps for all visible elements
                this._applyStyleToElements(this._buildCSS(), [lastItem]);
            }
        }
    };
    /**
     *
     * @param {?} value
     * @return {?}
     */
    LayoutGapDirective.prototype._buildGridPadding = /**
     *
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ paddingTop = '0px', /** @type {?} */ paddingRight = '0px', /** @type {?} */ paddingBottom = value, /** @type {?} */ paddingLeft = '0px';
        if (this._directionality.value === 'rtl') {
            paddingLeft = value;
        }
        else {
            paddingRight = value;
        }
        return { 'padding': paddingTop + " " + paddingRight + " " + paddingBottom + " " + paddingLeft };
    };
    /**
     * Prepare margin CSS, remove any previous explicitly
     * assigned margin assignments
     * Note: this will not work with calc values (negative calc values are invalid)
     * @param {?} value
     * @return {?}
     */
    LayoutGapDirective.prototype._buildGridMargin = /**
     * Prepare margin CSS, remove any previous explicitly
     * assigned margin assignments
     * Note: this will not work with calc values (negative calc values are invalid)
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ marginTop = '0px', /** @type {?} */ marginRight = '0px', /** @type {?} */ marginBottom = '-' + value, /** @type {?} */ marginLeft = '0px';
        if (this._directionality.value === 'rtl') {
            marginLeft = '-' + value;
        }
        else {
            marginRight = '-' + value;
        }
        return { 'margin': marginTop + " " + marginRight + " " + marginBottom + " " + marginLeft };
    };
    /**
     * Prepare margin CSS, remove any previous explicitly
     * assigned margin assignments
     * @param {?=} value
     * @return {?}
     */
    LayoutGapDirective.prototype._buildCSS = /**
     * Prepare margin CSS, remove any previous explicitly
     * assigned margin assignments
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = null; }
        var /** @type {?} */ key, /** @type {?} */ margins = {
            'margin-left': null,
            'margin-right': null,
            'margin-top': null,
            'margin-bottom': null
        };
        switch (this._layout) {
            case 'column':
                key = 'margin-bottom';
                break;
            case 'column-reverse':
                key = 'margin-top';
                break;
            case 'row':
                key = this._directionality.value === 'rtl' ? 'margin-left' : 'margin-right';
                break;
            case 'row-reverse':
                key = this._directionality.value === 'rtl' ? 'margin-right' : 'margin-left';
                break;
            default:
                key = this._directionality.value === 'rtl' ? 'margin-left' : 'margin-right';
                break;
        }
        margins[key] = value;
        return margins;
    };
    LayoutGapDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */], args: [{
                    selector: "\n  [fxLayoutGap],\n  [fxLayoutGap.xs], [fxLayoutGap.sm], [fxLayoutGap.md], [fxLayoutGap.lg], [fxLayoutGap.xl],\n  [fxLayoutGap.lt-sm], [fxLayoutGap.lt-md], [fxLayoutGap.lt-lg], [fxLayoutGap.lt-xl],\n  [fxLayoutGap.gt-xs], [fxLayoutGap.gt-sm], [fxLayoutGap.gt-md], [fxLayoutGap.gt-lg]\n"
                },] },
    ];
    /** @nocollapse */
    LayoutGapDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["f" /* MediaMonitor */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
        { type: LayoutDirective, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* Self */] },] },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* NgZone */], },
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_cdk_bidi__["b" /* Directionality */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["h" /* StyleUtils */], },
    ]; };
    LayoutGapDirective.propDecorators = {
        "gap": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap',] },],
        "gapXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap.xs',] },],
        "gapSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap.sm',] },],
        "gapMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap.md',] },],
        "gapLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap.lg',] },],
        "gapXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap.xl',] },],
        "gapGtXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap.gt-xs',] },],
        "gapGtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap.gt-sm',] },],
        "gapGtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap.gt-md',] },],
        "gapGtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap.gt-lg',] },],
        "gapLtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap.lt-sm',] },],
        "gapLtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap.lt-md',] },],
        "gapLtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap.lt-lg',] },],
        "gapLtXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap.lt-xl',] },],
    };
    return LayoutGapDirective;
}(__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["b" /* BaseFxDirective */]));
var /** @type {?} */ GRID_SPECIFIER = ' grid';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        if (source != null) {
            for (var /** @type {?} */ key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * The flex API permits 3 or 1 parts of the value:
 *    - `flex-grow flex-shrink flex-basis`, or
 *    - `flex-basis`
 * @param {?} basis
 * @param {?=} grow
 * @param {?=} shrink
 * @return {?}
 */
function validateBasis(basis, grow, shrink) {
    if (grow === void 0) { grow = '1'; }
    if (shrink === void 0) { shrink = '1'; }
    var /** @type {?} */ parts = [grow, shrink, basis];
    var /** @type {?} */ j = basis.indexOf('calc');
    if (j > 0) {
        parts[2] = _validateCalcValue(basis.substring(j).trim());
        var /** @type {?} */ matches = basis.substr(0, j).trim().split(' ');
        if (matches.length == 2) {
            parts[0] = matches[0];
            parts[1] = matches[1];
        }
    }
    else if (j == 0) {
        parts[2] = _validateCalcValue(basis.trim());
    }
    else {
        var /** @type {?} */ matches = basis.split(' ');
        parts = (matches.length === 3) ? matches : [
            grow, shrink, basis
        ];
    }
    return parts;
}
/**
 * Calc expressions require whitespace before & after any expression operators
 * This is a simple, crude whitespace padding solution.
 *   - '3 3 calc(15em + 20px)'
 *   - calc(100% / 7 * 2)
 *   - 'calc(15em + 20px)'
 *   - 'calc(15em+20px)'
 *   - '37px'
 *   = '43%'
 * @param {?} calc
 * @return {?}
 */
function _validateCalcValue(calc) {
    return calc.replace(/[\s]/g, '').replace(/[\/\*\+\-]/g, ' $& ');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Directive to control the size of a flex item using flex-basis, flex-grow, and flex-shrink.
 * Corresponds to the css `flex` shorthand property.
 *
 * @see https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 */
var FlexDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(FlexDirective, _super);
    /* tslint:enable */
    // Note: Explicitly @SkipSelf on LayoutDirective because we are looking
    //       for the parent flex container for this flex item.
    function FlexDirective(monitor, elRef, _container, styleUtils, addFlexStyles) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this._container = _container;
        _this.styleUtils = styleUtils;
        _this.addFlexStyles = addFlexStyles;
        _this._cacheInput('flex', '');
        _this._cacheInput('shrink', 1);
        _this._cacheInput('grow', 1);
        if (_container) {
            // If this flex item is inside of a flex container marked with
            // Subscribe to layout immediate parent direction changes
            // If this flex item is inside of a flex container marked with
            // Subscribe to layout immediate parent direction changes
            _this._layoutWatcher = _container.layout$.subscribe(function (layout) {
                // `direction` === null if parent container does not have a `fxLayout`
                // `direction` === null if parent container does not have a `fxLayout`
                _this._onLayoutChange(layout);
            });
        }
        return _this;
    }
    Object.defineProperty(FlexDirective.prototype, "shrink", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('shrink', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "grow", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('grow', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flex", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flex', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexLtXl', val); },
        enumerable: true,
        configurable: true
    });
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    FlexDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['flex'] != null || this._mqActivation) {
            this._updateStyle();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    FlexDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('flex', '', function (changes) {
            _this._updateStyle(changes.value);
        });
        this._updateStyle();
    };
    /**
     * @return {?}
     */
    FlexDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
    };
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     */
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     * @param {?=} layout
     * @return {?}
     */
    FlexDirective.prototype._onLayoutChange = /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     * @param {?=} layout
     * @return {?}
     */
    function (layout) {
        this._layout = layout || this._layout || { direction: 'row', wrap: false };
        this._updateStyle();
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    FlexDirective.prototype._updateStyle = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ flexBasis = value || this._queryInput('flex') || '';
        if (this._mqActivation) {
            flexBasis = this._mqActivation.activatedInput;
        }
        var /** @type {?} */ basis = String(flexBasis).replace(';', '');
        var /** @type {?} */ parts = validateBasis(basis, this._queryInput('grow'), this._queryInput('shrink'));
        this._applyStyleToElement(this._validateValue.apply(this, parts));
    };
    /**
     * Validate the value to be one of the acceptable value options
     * Use default fallback of 'row'
     */
    /**
     * Validate the value to be one of the acceptable value options
     * Use default fallback of 'row'
     * @param {?} grow
     * @param {?} shrink
     * @param {?} basis
     * @return {?}
     */
    FlexDirective.prototype._validateValue = /**
     * Validate the value to be one of the acceptable value options
     * Use default fallback of 'row'
     * @param {?} grow
     * @param {?} shrink
     * @param {?} basis
     * @return {?}
     */
    function (grow, shrink, basis) {
        // The flex-direction of this element's flex container. Defaults to 'row'.
        var /** @type {?} */ layout = this._getFlowDirection(this.parentElement, !!this.addFlexStyles);
        var /** @type {?} */ direction = (layout.indexOf('column') > -1) ? 'column' : 'row';
        var /** @type {?} */ max = isFlowHorizontal(direction) ? 'max-width' : 'max-height';
        var /** @type {?} */ min = isFlowHorizontal(direction) ? 'min-width' : 'min-height';
        var /** @type {?} */ hasCalc = String(basis).indexOf('calc') > -1;
        var /** @type {?} */ usingCalc = hasCalc || (basis == 'auto');
        var /** @type {?} */ isPercent = String(basis).indexOf('%') > -1 && !hasCalc;
        var /** @type {?} */ hasUnits = String(basis).indexOf('px') > -1 || String(basis).indexOf('em') > -1 ||
            String(basis).indexOf('vw') > -1 || String(basis).indexOf('vh') > -1;
        var /** @type {?} */ isPx = String(basis).indexOf('px') > -1 || usingCalc;
        var /** @type {?} */ isValue = (hasCalc || hasUnits);
        grow = (grow == '0') ? 0 : grow;
        shrink = (shrink == '0') ? 0 : shrink;
        // make box inflexible when shrink and grow are both zero
        // should not set a min when the grow is zero
        // should not set a max when the shrink is zero
        var /** @type {?} */ isFixed = !grow && !shrink;
        var /** @type {?} */ css = {};
        // flex-basis allows you to specify the initial/starting main-axis size of the element,
        // before anything else is computed. It can either be a percentage or an absolute value.
        // It is, however, not the breaking point for flex-grow/shrink properties
        //
        // flex-grow can be seen as this:
        //   0: Do not stretch. Either size to element's content width, or obey 'flex-basis'.
        //   1: (Default value). Stretch; will be the same size to all other flex items on
        //       the same row since they have a default value of 1.
        //   ≥2 (integer n): Stretch. Will be n times the size of other elements
        //      with 'flex-grow: 1' on the same row.
        // Use `null` to clear existing styles.
        var /** @type {?} */ clearStyles = {
            'max-width': null,
            'max-height': null,
            'min-width': null,
            'min-height': null
        };
        switch (basis || '') {
            case '':
                basis = direction === 'row' ? '0%' : 'auto';
                break;
            case 'initial': // default
            case 'nogrow':
                grow = 0;
                basis = 'auto';
                break;
            case 'grow':
                basis = '100%';
                break;
            case 'noshrink':
                shrink = 0;
                basis = 'auto';
                break;
            case 'auto':
                break;
            case 'none':
                grow = 0;
                shrink = 0;
                basis = 'auto';
                break;
            default:
                // Defaults to percentage sizing unless `px` is explicitly set
                if (!isValue && !isPercent && !isNaN(/** @type {?} */ (basis))) {
                    basis = basis + '%';
                }
                // Fix for issue 280
                if (basis === '0%') {
                    isValue = true;
                }
                if (basis === '0px') {
                    basis = '0%';
                }
                // fix issue #5345
                if (hasCalc) {
                    css = extendObject(clearStyles, {
                        'flex-grow': grow,
                        'flex-shrink': shrink,
                        'flex-basis': isValue ? basis : '100%'
                    });
                }
                else {
                    css = extendObject(clearStyles, {
                        'flex': grow + " " + shrink + " " + (isValue ? basis : '100%')
                    });
                }
                break;
        }
        if (!(css['flex'] || css['flex-grow'])) {
            if (hasCalc) {
                css = extendObject(clearStyles, {
                    'flex-grow': grow,
                    'flex-shrink': shrink,
                    'flex-basis': basis
                });
            }
            else {
                css = extendObject(clearStyles, {
                    'flex': grow + " " + shrink + " " + basis
                });
            }
        }
        // Fix for issues 277 and 534
        if (basis !== '0%') {
            css[min] = isFixed || (isPx && grow) ? basis : null;
            css[max] = isFixed || (!usingCalc && shrink) ? basis : null;
        }
        // Fix for issue 528
        if (!css[min] && !css[max]) {
            if (hasCalc) {
                css = extendObject(clearStyles, {
                    'flex-grow': grow,
                    'flex-shrink': shrink,
                    'flex-basis': basis
                });
            }
            else {
                css = extendObject(clearStyles, {
                    'flex': grow + " " + shrink + " " + basis
                });
            }
        }
        else {
            // Fix for issue 660
            if (this._layout && this._layout.wrap) {
                css[hasCalc ? 'flex-basis' : 'flex'] = css[max] ?
                    (hasCalc ? css[max] : grow + " " + shrink + " " + css[max]) :
                    (hasCalc ? css[min] : grow + " " + shrink + " " + css[min]);
            }
        }
        return extendObject(css, { 'box-sizing': 'border-box' });
    };
    FlexDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */], args: [{ selector: "\n  [fxFlex],\n  [fxFlex.xs], [fxFlex.sm], [fxFlex.md], [fxFlex.lg], [fxFlex.xl],\n  [fxFlex.lt-sm], [fxFlex.lt-md], [fxFlex.lt-lg], [fxFlex.lt-xl],\n  [fxFlex.gt-xs], [fxFlex.gt-sm], [fxFlex.gt-md], [fxFlex.gt-lg],\n"
                },] },
    ];
    /** @nocollapse */
    FlexDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["f" /* MediaMonitor */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
        { type: LayoutDirective, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* SkipSelf */] },] },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["h" /* StyleUtils */], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["a" /* ADD_FLEX_STYLES */],] },] },
    ]; };
    FlexDirective.propDecorators = {
        "shrink": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShrink',] },],
        "grow": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxGrow',] },],
        "flex": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex',] },],
        "flexXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex.xs',] },],
        "flexSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex.sm',] },],
        "flexMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex.md',] },],
        "flexLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex.lg',] },],
        "flexXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex.xl',] },],
        "flexGtXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex.gt-xs',] },],
        "flexGtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex.gt-sm',] },],
        "flexGtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex.gt-md',] },],
        "flexGtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex.gt-lg',] },],
        "flexLtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex.lt-sm',] },],
        "flexLtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex.lt-md',] },],
        "flexLtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex.lt-lg',] },],
        "flexLtXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex.lt-xl',] },],
    };
    return FlexDirective;
}(__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["b" /* BaseFxDirective */]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * 'flex-order' flexbox styling directive
 * Configures the positional ordering of the element in a sorted layout container
 * @see https://css-tricks.com/almanac/properties/o/order/
 */
var FlexOrderDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(FlexOrderDirective, _super);
    /* tslint:enable */
    function FlexOrderDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(FlexOrderDirective.prototype, "order", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('order', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderLtXl', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    FlexOrderDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['order'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    FlexOrderDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('order', '0', function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    FlexOrderDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput('order') || '0';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FlexOrderDirective.prototype._buildCSS = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = parseInt(value, 10);
        return { order: isNaN(value) ? 0 : value };
    };
    FlexOrderDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */], args: [{ selector: "\n  [fxFlexOrder],\n  [fxFlexOrder.xs], [fxFlexOrder.sm], [fxFlexOrder.md], [fxFlexOrder.lg], [fxFlexOrder.xl],\n  [fxFlexOrder.lt-sm], [fxFlexOrder.lt-md], [fxFlexOrder.lt-lg], [fxFlexOrder.lt-xl],\n  [fxFlexOrder.gt-xs], [fxFlexOrder.gt-sm], [fxFlexOrder.gt-md], [fxFlexOrder.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    FlexOrderDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["f" /* MediaMonitor */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["h" /* StyleUtils */], },
    ]; };
    FlexOrderDirective.propDecorators = {
        "order": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder',] },],
        "orderXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder.xs',] },],
        "orderSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder.sm',] },],
        "orderMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder.md',] },],
        "orderLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder.lg',] },],
        "orderXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder.xl',] },],
        "orderGtXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder.gt-xs',] },],
        "orderGtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder.gt-sm',] },],
        "orderGtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder.gt-md',] },],
        "orderGtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder.gt-lg',] },],
        "orderLtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder.lt-sm',] },],
        "orderLtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder.lt-md',] },],
        "orderLtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder.lt-lg',] },],
        "orderLtXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder.lt-xl',] },],
    };
    return FlexOrderDirective;
}(__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["b" /* BaseFxDirective */]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * 'flex-offset' flexbox styling directive
 * Configures the 'margin-left' of the element in a layout container
 */
var FlexOffsetDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(FlexOffsetDirective, _super);
    /* tslint:enable */
    function FlexOffsetDirective(monitor, elRef, _container, _directionality, styleUtils) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this._container = _container;
        _this._directionality = _directionality;
        /**
         * The flex-direction of this element's host container. Defaults to 'row'.
         */
        _this._layout = { direction: 'row', wrap: false };
        _this._directionWatcher =
            _this._directionality.change.subscribe(_this._updateWithValue.bind(_this));
        _this.watchParentFlow();
        return _this;
    }
    Object.defineProperty(FlexOffsetDirective.prototype, "offset", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offset', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetLtXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetGtLg', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    FlexOffsetDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['offset'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * Cleanup
     */
    /**
     * Cleanup
     * @return {?}
     */
    FlexOffsetDirective.prototype.ngOnDestroy = /**
     * Cleanup
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
        if (this._directionWatcher) {
            this._directionWatcher.unsubscribe();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    FlexOffsetDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('offset', 0, function (changes) {
            _this._updateWithValue(changes.value);
        });
    };
    /**
     * If parent flow-direction changes, then update the margin property
     * used to offset
     */
    /**
     * If parent flow-direction changes, then update the margin property
     * used to offset
     * @return {?}
     */
    FlexOffsetDirective.prototype.watchParentFlow = /**
     * If parent flow-direction changes, then update the margin property
     * used to offset
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._container) {
            // Subscribe to layout immediate parent direction changes (if any)
            this._layoutWatcher = this._container.layout$.subscribe(function (layout) {
                // `direction` === null if parent container does not have a `fxLayout`
                // `direction` === null if parent container does not have a `fxLayout`
                _this._onLayoutChange(layout);
            });
        }
    };
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     */
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     * @param {?=} layout
     * @return {?}
     */
    FlexOffsetDirective.prototype._onLayoutChange = /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     * @param {?=} layout
     * @return {?}
     */
    function (layout) {
        this._layout = layout || this._layout || { direction: 'row', wrap: false };
        this._updateWithValue();
    };
    /**
     * Using the current fxFlexOffset value, update the inline CSS
     * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
     *       otherwise `margin-top` is used for the offset.
     */
    /**
     * Using the current fxFlexOffset value, update the inline CSS
     * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
     *       otherwise `margin-top` is used for the offset.
     * @param {?=} value
     * @return {?}
     */
    FlexOffsetDirective.prototype._updateWithValue = /**
     * Using the current fxFlexOffset value, update the inline CSS
     * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
     *       otherwise `margin-top` is used for the offset.
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput('offset') || 0;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} offset
     * @return {?}
     */
    FlexOffsetDirective.prototype._buildCSS = /**
     * @param {?} offset
     * @return {?}
     */
    function (offset) {
        var /** @type {?} */ isPercent = String(offset).indexOf('%') > -1;
        var /** @type {?} */ isPx = String(offset).indexOf('px') > -1;
        if (!isPx && !isPercent && !isNaN(offset)) {
            offset = offset + '%';
        }
        // The flex-direction of this element's flex container. Defaults to 'row'.
        var /** @type {?} */ isRtl = this._directionality.value === 'rtl';
        var /** @type {?} */ layout = this._getFlowDirection(this.parentElement, true);
        var /** @type {?} */ horizontalLayoutKey = isRtl ? 'margin-right' : 'margin-left';
        return isFlowHorizontal(layout) ? (_a = {}, _a[horizontalLayoutKey] = "" + offset, _a) :
            { 'margin-top': "" + offset };
        var _a;
    };
    FlexOffsetDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */], args: [{ selector: "\n  [fxFlexOffset],\n  [fxFlexOffset.xs], [fxFlexOffset.sm], [fxFlexOffset.md], [fxFlexOffset.lg], [fxFlexOffset.xl],\n  [fxFlexOffset.lt-sm], [fxFlexOffset.lt-md], [fxFlexOffset.lt-lg], [fxFlexOffset.lt-xl],\n  [fxFlexOffset.gt-xs], [fxFlexOffset.gt-sm], [fxFlexOffset.gt-md], [fxFlexOffset.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    FlexOffsetDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["f" /* MediaMonitor */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
        { type: LayoutDirective, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* SkipSelf */] },] },
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_cdk_bidi__["b" /* Directionality */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["h" /* StyleUtils */], },
    ]; };
    FlexOffsetDirective.propDecorators = {
        "offset": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset',] },],
        "offsetXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset.xs',] },],
        "offsetSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset.sm',] },],
        "offsetMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset.md',] },],
        "offsetLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset.lg',] },],
        "offsetXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset.xl',] },],
        "offsetLtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset.lt-sm',] },],
        "offsetLtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset.lt-md',] },],
        "offsetLtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset.lt-lg',] },],
        "offsetLtXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset.lt-xl',] },],
        "offsetGtXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset.gt-xs',] },],
        "offsetGtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset.gt-sm',] },],
        "offsetGtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset.gt-md',] },],
        "offsetGtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset.gt-lg',] },],
    };
    return FlexOffsetDirective;
}(__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["b" /* BaseFxDirective */]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * 'flex-align' flexbox styling directive
 * Allows element-specific overrides for cross-axis alignments in a layout container
 * @see https://css-tricks.com/almanac/properties/a/align-self/
 */
var FlexAlignDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(FlexAlignDirective, _super);
    /* tslint:enable */
    function FlexAlignDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(FlexAlignDirective.prototype, "align", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('align', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtLg', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    FlexAlignDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['align'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    FlexAlignDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('align', 'stretch', function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    FlexAlignDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput('align') || 'stretch';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} align
     * @return {?}
     */
    FlexAlignDirective.prototype._buildCSS = /**
     * @param {?} align
     * @return {?}
     */
    function (align) {
        var /** @type {?} */ css = {};
        // Cross-axis
        switch (align) {
            case 'start':
                css['align-self'] = 'flex-start';
                break;
            case 'end':
                css['align-self'] = 'flex-end';
                break;
            default:
                css['align-self'] = align;
                break;
        }
        return css;
    };
    FlexAlignDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */], args: [{
                    selector: "\n  [fxFlexAlign],\n  [fxFlexAlign.xs], [fxFlexAlign.sm], [fxFlexAlign.md], [fxFlexAlign.lg], [fxFlexAlign.xl],\n  [fxFlexAlign.lt-sm], [fxFlexAlign.lt-md], [fxFlexAlign.lt-lg], [fxFlexAlign.lt-xl],\n  [fxFlexAlign.gt-xs], [fxFlexAlign.gt-sm], [fxFlexAlign.gt-md], [fxFlexAlign.gt-lg]\n"
                },] },
    ];
    /** @nocollapse */
    FlexAlignDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["f" /* MediaMonitor */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["h" /* StyleUtils */], },
    ]; };
    FlexAlignDirective.propDecorators = {
        "align": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign',] },],
        "alignXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign.xs',] },],
        "alignSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign.sm',] },],
        "alignMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign.md',] },],
        "alignLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign.lg',] },],
        "alignXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign.xl',] },],
        "alignLtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign.lt-sm',] },],
        "alignLtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign.lt-md',] },],
        "alignLtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign.lt-lg',] },],
        "alignLtXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign.lt-xl',] },],
        "alignGtXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign.gt-xs',] },],
        "alignGtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign.gt-sm',] },],
        "alignGtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign.gt-md',] },],
        "alignGtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign.gt-lg',] },],
    };
    return FlexAlignDirective;
}(__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["b" /* BaseFxDirective */]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ FLEX_FILL_CSS = {
    'margin': 0,
    'width': '100%',
    'height': '100%',
    'min-width': '100%',
    'min-height': '100%'
};
/**
 * 'fxFill' flexbox styling directive
 *  Maximizes width and height of element in a layout container
 *
 *  NOTE: fxFill is NOT responsive API!!
 */
var FlexFillDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(FlexFillDirective, _super);
    function FlexFillDirective(monitor, elRef, styleUtils) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this.elRef = elRef;
        _this._applyStyleToElement(FLEX_FILL_CSS);
        return _this;
    }
    FlexFillDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */], args: [{ selector: "\n  [fxFill],\n  [fxFlexFill]\n" },] },
    ];
    /** @nocollapse */
    FlexFillDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["f" /* MediaMonitor */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["h" /* StyleUtils */], },
    ]; };
    return FlexFillDirective;
}(__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["b" /* BaseFxDirective */]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * 'layout-align' flexbox styling directive
 *  Defines positioning of child elements along main and cross axis in a layout container
 *  Optional values: {main-axis} values or {main-axis cross-axis} value pairs
 *
 *  \@see https://css-tricks.com/almanac/properties/j/justify-content/
 *  \@see https://css-tricks.com/almanac/properties/a/align-items/
 *  \@see https://css-tricks.com/almanac/properties/a/align-content/
 */
var LayoutAlignDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(LayoutAlignDirective, _super);
    /* tslint:enable */
    function LayoutAlignDirective(monitor, elRef, container, styleUtils) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this._layout = 'row';
        if (container) {
            // Subscribe to layout direction changes
            _this._layoutWatcher = container.layout$.subscribe(_this._onLayoutChange.bind(_this));
        }
        return _this;
    }
    Object.defineProperty(LayoutAlignDirective.prototype, "align", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('align', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtXl', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * @param {?} changes
     * @return {?}
     */
    LayoutAlignDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['align'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    LayoutAlignDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('align', 'start stretch', function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    /**
     * @return {?}
     */
    LayoutAlignDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     *
     */
    /**
     *
     * @param {?=} value
     * @return {?}
     */
    LayoutAlignDirective.prototype._updateWithValue = /**
     *
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput('align') || 'start stretch';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
        this._allowStretching(value, !this._layout ? 'row' : this._layout);
    };
    /**
     * Cache the parent container 'flex-direction' and update the 'flex' styles
     */
    /**
     * Cache the parent container 'flex-direction' and update the 'flex' styles
     * @param {?} layout
     * @return {?}
     */
    LayoutAlignDirective.prototype._onLayoutChange = /**
     * Cache the parent container 'flex-direction' and update the 'flex' styles
     * @param {?} layout
     * @return {?}
     */
    function (layout) {
        var _this = this;
        this._layout = (layout.direction || '').toLowerCase();
        if (!LAYOUT_VALUES.find(function (x) { return x === _this._layout; })) {
            this._layout = 'row';
        }
        var /** @type {?} */ value = this._queryInput('align') || 'start stretch';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._allowStretching(value, this._layout || 'row');
    };
    /**
     * @param {?} align
     * @return {?}
     */
    LayoutAlignDirective.prototype._buildCSS = /**
     * @param {?} align
     * @return {?}
     */
    function (align) {
        var /** @type {?} */ css = {}, _a = align.split(' '), main_axis = _a[0], cross_axis = _a[1]; // tslint:disable-line:variable-name
        // Main axis
        switch (main_axis) {
            case 'center':
                css['justify-content'] = 'center';
                break;
            case 'space-around':
                css['justify-content'] = 'space-around';
                break;
            case 'space-between':
                css['justify-content'] = 'space-between';
                break;
            case 'space-evenly':
                css['justify-content'] = 'space-evenly';
                break;
            case 'end':
            case 'flex-end':
                css['justify-content'] = 'flex-end';
                break;
            case 'start':
            case 'flex-start':
            default:
                css['justify-content'] = 'flex-start'; // default main axis
                break;
        }
        // Cross-axis
        switch (cross_axis) {
            case 'start':
            case 'flex-start':
                css['align-items'] = css['align-content'] = 'flex-start';
                break;
            case 'baseline':
                css['align-items'] = 'baseline';
                break;
            case 'center':
                css['align-items'] = css['align-content'] = 'center';
                break;
            case 'end':
            case 'flex-end':
                css['align-items'] = css['align-content'] = 'flex-end';
                break;
            case 'stretch':
            default:
                // 'stretch'
                css['align-items'] = css['align-content'] = 'stretch'; // default cross axis
                break;
        }
        return extendObject(css, {
            'display': 'flex',
            'flex-direction': this._layout || 'row',
            'box-sizing': 'border-box'
        });
    };
    /**
     * Update container element to 'stretch' as needed...
     * NOTE: this is only done if the crossAxis is explicitly set to 'stretch'
     */
    /**
     * Update container element to 'stretch' as needed...
     * NOTE: this is only done if the crossAxis is explicitly set to 'stretch'
     * @param {?} align
     * @param {?} layout
     * @return {?}
     */
    LayoutAlignDirective.prototype._allowStretching = /**
     * Update container element to 'stretch' as needed...
     * NOTE: this is only done if the crossAxis is explicitly set to 'stretch'
     * @param {?} align
     * @param {?} layout
     * @return {?}
     */
    function (align, layout) {
        var _a = align.split(' '), cross_axis = _a[1]; // tslint:disable-line:variable-name
        if (cross_axis == 'stretch') {
            // Use `null` values to remove style
            this._applyStyleToElement({
                'box-sizing': 'border-box',
                'max-width': !isFlowHorizontal(layout) ? '100%' : null,
                'max-height': isFlowHorizontal(layout) ? '100%' : null
            });
        }
    };
    LayoutAlignDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */], args: [{ selector: "\n  [fxLayoutAlign],\n  [fxLayoutAlign.xs], [fxLayoutAlign.sm], [fxLayoutAlign.md], [fxLayoutAlign.lg],[fxLayoutAlign.xl],\n  [fxLayoutAlign.lt-sm], [fxLayoutAlign.lt-md], [fxLayoutAlign.lt-lg], [fxLayoutAlign.lt-xl],\n  [fxLayoutAlign.gt-xs], [fxLayoutAlign.gt-sm], [fxLayoutAlign.gt-md], [fxLayoutAlign.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    LayoutAlignDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["f" /* MediaMonitor */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
        { type: LayoutDirective, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* Self */] },] },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["h" /* StyleUtils */], },
    ]; };
    LayoutAlignDirective.propDecorators = {
        "align": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign',] },],
        "alignXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign.xs',] },],
        "alignSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign.sm',] },],
        "alignMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign.md',] },],
        "alignLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign.lg',] },],
        "alignXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign.xl',] },],
        "alignGtXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign.gt-xs',] },],
        "alignGtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign.gt-sm',] },],
        "alignGtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign.gt-md',] },],
        "alignGtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign.gt-lg',] },],
        "alignLtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign.lt-sm',] },],
        "alignLtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign.lt-md',] },],
        "alignLtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign.lt-lg',] },],
        "alignLtXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign.lt-xl',] },],
    };
    return LayoutAlignDirective;
}(__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["b" /* BaseFxDirective */]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ALL_DIRECTIVES = [
    LayoutDirective,
    LayoutGapDirective,
    LayoutAlignDirective,
    FlexDirective,
    FlexOrderDirective,
    FlexOffsetDirective,
    FlexFillDirective,
    FlexAlignDirective,
];
/**
 * *****************************************************************
 * Define module for the Flex API
 * *****************************************************************
 */
var FlexModule = /** @class */ (function () {
    function FlexModule() {
    }
    FlexModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["e" /* CoreModule */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_bidi__["a" /* BidiModule */]],
                    declarations: ALL_DIRECTIVES.slice(),
                    exports: ALL_DIRECTIVES.slice()
                },] },
    ];
    /** @nocollapse */
    FlexModule.ctorParameters = function () { return []; };
    return FlexModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=flex.es5.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/ReplaySubject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplaySubject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduler_queue__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/queue.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operators_observeOn__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/observeOn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_ObjectUnsubscribedError__ = __webpack_require__("./node_modules/rxjs/_esm5/util/ObjectUnsubscribedError.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SubjectSubscription__ = __webpack_require__("./node_modules/rxjs/_esm5/SubjectSubscription.js");
/** PURE_IMPORTS_START ._Subject,._scheduler_queue,._Subscription,._operators_observeOn,._util_ObjectUnsubscribedError,._SubjectSubscription PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






/**
 * @class ReplaySubject<T>
 */
var ReplaySubject = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) {
            bufferSize = Number.POSITIVE_INFINITY;
        }
        if (windowTime === void 0) {
            windowTime = Number.POSITIVE_INFINITY;
        }
        _super.call(this);
        this.scheduler = scheduler;
        this._events = [];
        this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        this._windowTime = windowTime < 1 ? 1 : windowTime;
    }
    ReplaySubject.prototype.next = function (value) {
        var now = this._getNow();
        this._events.push(new ReplayEvent(now, value));
        this._trimBufferThenGetEvents();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        var _events = this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        var subscription;
        if (this.closed) {
            throw new __WEBPACK_IMPORTED_MODULE_4__util_ObjectUnsubscribedError__["a" /* ObjectUnsubscribedError */]();
        }
        else if (this.hasError) {
            subscription = __WEBPACK_IMPORTED_MODULE_2__Subscription__["a" /* Subscription */].EMPTY;
        }
        else if (this.isStopped) {
            subscription = __WEBPACK_IMPORTED_MODULE_2__Subscription__["a" /* Subscription */].EMPTY;
        }
        else {
            this.observers.push(subscriber);
            subscription = new __WEBPACK_IMPORTED_MODULE_5__SubjectSubscription__["a" /* SubjectSubscription */](this, subscriber);
        }
        if (scheduler) {
            subscriber.add(subscriber = new __WEBPACK_IMPORTED_MODULE_3__operators_observeOn__["a" /* ObserveOnSubscriber */](subscriber, scheduler));
        }
        var len = _events.length;
        for (var i = 0; i < len && !subscriber.closed; i++) {
            subscriber.next(_events[i].value);
        }
        if (this.hasError) {
            subscriber.error(this.thrownError);
        }
        else if (this.isStopped) {
            subscriber.complete();
        }
        return subscription;
    };
    ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || __WEBPACK_IMPORTED_MODULE_1__scheduler_queue__["a" /* queue */]).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        // Trim events that fall out of the time window.
        // Start at the front of the list. Break early once
        // we encounter an event that falls within the window.
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    };
    return ReplaySubject;
}(__WEBPACK_IMPORTED_MODULE_0__Subject__["a" /* Subject */]));
var ReplayEvent = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}());
//# sourceMappingURL=ReplaySubject.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/QueueAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueueAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncAction__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsyncAction.js");
/** PURE_IMPORTS_START ._AsyncAction PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var QueueAction = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        // If delay exists and is greater than 0, or if the delay is null (the
        // action wasn't rescheduled) but was originally scheduled as an async
        // action, then recycle as an async action.
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Otherwise flush the scheduler starting with this action.
        return scheduler.flush(this);
    };
    return QueueAction;
}(__WEBPACK_IMPORTED_MODULE_0__AsyncAction__["a" /* AsyncAction */]));
//# sourceMappingURL=QueueAction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/QueueScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueueScheduler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START ._AsyncScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var QueueScheduler = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(QueueScheduler, _super);
    function QueueScheduler() {
        _super.apply(this, arguments);
    }
    return QueueScheduler;
}(__WEBPACK_IMPORTED_MODULE_0__AsyncScheduler__["a" /* AsyncScheduler */]));
//# sourceMappingURL=QueueScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/queue.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return queue; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__QueueAction__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/QueueAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__QueueScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/QueueScheduler.js");
/** PURE_IMPORTS_START ._QueueAction,._QueueScheduler PURE_IMPORTS_END */


/**
 *
 * Queue Scheduler
 *
 * <span class="informal">Put every next task on a queue, instead of executing it immediately</span>
 *
 * `queue` scheduler, when used with delay, behaves the same as {@link async} scheduler.
 *
 * When used without delay, it schedules given task synchronously - executes it right when
 * it is scheduled. However when called recursively, that is when inside the scheduled task,
 * another task is scheduled with queue scheduler, instead of executing immediately as well,
 * that task will be put on a queue and wait for current one to finish.
 *
 * This means that when you execute task with `queue` scheduler, you are sure it will end
 * before any other task scheduled with that scheduler will start.
 *
 * @examples <caption>Schedule recursively first, then do something</caption>
 *
 * Rx.Scheduler.queue.schedule(() => {
 *   Rx.Scheduler.queue.schedule(() => console.log('second')); // will not happen now, but will be put on a queue
 *
 *   console.log('first');
 * });
 *
 * // Logs:
 * // "first"
 * // "second"
 *
 *
 * @example <caption>Reschedule itself recursively</caption>
 *
 * Rx.Scheduler.queue.schedule(function(state) {
 *   if (state !== 0) {
 *     console.log('before', state);
 *     this.schedule(state - 1); // `this` references currently executing Action,
 *                               // which we reschedule with new state
 *     console.log('after', state);
 *   }
 * }, 0, 3);
 *
 * // In scheduler that runs recursively, you would expect:
 * // "before", 3
 * // "before", 2
 * // "before", 1
 * // "after", 1
 * // "after", 2
 * // "after", 3
 *
 * // But with queue it logs:
 * // "before", 3
 * // "after", 3
 * // "before", 2
 * // "after", 2
 * // "before", 1
 * // "after", 1
 *
 *
 * @static true
 * @name queue
 * @owner Scheduler
 */
var queue = /*@__PURE__*/ new __WEBPACK_IMPORTED_MODULE_1__QueueScheduler__["a" /* QueueScheduler */](__WEBPACK_IMPORTED_MODULE_0__QueueAction__["a" /* QueueAction */]);
//# sourceMappingURL=queue.js.map


/***/ }),

/***/ "./src/app/agent/agent-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intents_intents_component__ = __webpack_require__("./src/app/agent/intents/intents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__intent_intent_component__ = __webpack_require__("./src/app/agent/intent/intent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__train_train_component__ = __webpack_require__("./src/app/agent/train/train.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings_component__ = __webpack_require__("./src/app/agent/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat_component__ = __webpack_require__("./src/app/agent/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entities_entities_component__ = __webpack_require__("./src/app/agent/entities/entities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__entity_entity_component__ = __webpack_require__("./src/app/agent/entity/entity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_entities_service__ = __webpack_require__("./src/app/services/entities.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_intent_resolver_service__ = __webpack_require__("./src/app/services/intent-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', redirectTo: 'intents' },
    {
        path: 'intents', component: __WEBPACK_IMPORTED_MODULE_2__intents_intents_component__["a" /* IntentsComponent */],
    },
    {
        path: 'create-intent', component: __WEBPACK_IMPORTED_MODULE_3__intent_intent_component__["a" /* IntentComponent */],
    },
    {
        resolve: {
            story: __WEBPACK_IMPORTED_MODULE_10__services_intent_resolver_service__["a" /* IntentResolverService */],
        },
        path: 'edit-intent/:intent_id', component: __WEBPACK_IMPORTED_MODULE_3__intent_intent_component__["a" /* IntentComponent */],
    },
    {
        path: 'entities', component: __WEBPACK_IMPORTED_MODULE_7__entities_entities_component__["a" /* EntitiesComponent */],
    },
    {
        resolve: {
            entity: __WEBPACK_IMPORTED_MODULE_9__services_entities_service__["b" /* EntityResolverService */],
        },
        path: 'edit-entity/:entity_id', component: __WEBPACK_IMPORTED_MODULE_8__entity_entity_component__["a" /* EntityComponent */],
    },
    {
        resolve: {
            story: __WEBPACK_IMPORTED_MODULE_10__services_intent_resolver_service__["a" /* IntentResolverService */],
        },
        path: 'train-intent/:intent_id', component: __WEBPACK_IMPORTED_MODULE_4__train_train_component__["a" /* TrainComponent */],
    },
    {
        path: 'settings', component: __WEBPACK_IMPORTED_MODULE_5__settings_settings_component__["a" /* SettingsComponent */],
    },
    {
        path: 'chat', component: __WEBPACK_IMPORTED_MODULE_6__chat_chat_component__["a" /* ChatComponent */],
    }
];
var AgentRoutingModule = /** @class */ (function () {
    function AgentRoutingModule() {
    }
    AgentRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AgentRoutingModule);
    return AgentRoutingModule;
}());



/***/ }),

/***/ "./src/app/agent/agent.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentModule", function() { return AgentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agent_routing_module__ = __webpack_require__("./src/app/agent/agent-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__intents_intents_component__ = __webpack_require__("./src/app/agent/intents/intents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_grid_list__ = __webpack_require__("./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_divider__ = __webpack_require__("./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_expansion__ = __webpack_require__("./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_slider__ = __webpack_require__("./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_chips__ = __webpack_require__("./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_autocomplete__ = __webpack_require__("./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_intent_service__ = __webpack_require__("./src/app/services/intent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_training_service__ = __webpack_require__("./src/app/services/training.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_intent_resolver_service__ = __webpack_require__("./src/app/services/intent-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_agents_service__ = __webpack_require__("./src/app/services/agents.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_entities_service__ = __webpack_require__("./src/app/services/entities.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__settings_settings_component__ = __webpack_require__("./src/app/agent/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__chat_chat_component__ = __webpack_require__("./src/app/agent/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__intent_intent_component__ = __webpack_require__("./src/app/agent/intent/intent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__train_train_component__ = __webpack_require__("./src/app/agent/train/train.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__directives_autofocus_directive__ = __webpack_require__("./src/app/directives/autofocus.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__entities_entities_component__ = __webpack_require__("./src/app/agent/entities/entities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__entity_entity_component__ = __webpack_require__("./src/app/agent/entity/entity.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/* Material UI imports begins here */







/* Material UI imports ends here */
/* Services imports begins here */






/* Services imports ends here */







var AgentModule = /** @class */ (function () {
    function AgentModule() {
    }
    AgentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__agent_routing_module__["a" /* AgentRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_grid_list__["a" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_divider__["a" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_slider__["a" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_chips__["a" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_autocomplete__["a" /* MatAutocompleteModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__intents_intents_component__["a" /* IntentsComponent */], __WEBPACK_IMPORTED_MODULE_22__intent_intent_component__["a" /* IntentComponent */], __WEBPACK_IMPORTED_MODULE_23__train_train_component__["a" /* TrainComponent */], __WEBPACK_IMPORTED_MODULE_20__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__chat_chat_component__["a" /* ChatComponent */], __WEBPACK_IMPORTED_MODULE_24__directives_autofocus_directive__["a" /* AutofocusDirective */], __WEBPACK_IMPORTED_MODULE_25__entities_entities_component__["a" /* EntitiesComponent */], __WEBPACK_IMPORTED_MODULE_26__entity_entity_component__["a" /* EntityComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_18__services_agents_service__["a" /* AgentsService */], __WEBPACK_IMPORTED_MODULE_14__services_intent_service__["a" /* IntentService */],
                __WEBPACK_IMPORTED_MODULE_16__services_intent_resolver_service__["a" /* IntentResolverService */], __WEBPACK_IMPORTED_MODULE_15__services_training_service__["a" /* TrainingService */], __WEBPACK_IMPORTED_MODULE_17__services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_19__services_entities_service__["a" /* EntitiesService */], __WEBPACK_IMPORTED_MODULE_19__services_entities_service__["b" /* EntityResolverService */]]
        })
    ], AgentModule);
    return AgentModule;
}());



/***/ }),

/***/ "./src/app/agent/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- https://tburleson-layouts-demos.firebaseapp.com/#/docs -->\n<div fxLayout=\"row\" fxFill>\n  <mat-card fxFlex=\"30\" fxLayout=\"column\" >\n    <div fxFlex=\"90\" class=\"chat-container\" #scrollMe>\n      <div *ngFor=\"let message of messages\"  [@listAnimation]=\"messages.length\" >\n\n        <div  *ngIf=\"message.author=='user'\" class=\"chat-message\">\n          <div class=\"chat-message-content human\">\n            <span class=\"textright\">{{message.content}}</span>\n          </div>\n        </div>\n\n          <div  *ngIf=\"message.author=='chat'\" class=\"chat-message\">\n            <div class=\"chat-message-content\">\n              <span class=\"textleft\" [innerHTML]=\"message.content\"></span>\n            </div>\n          </div>\n\n\n      </div>\n    </div>\n    \n      <form [formGroup]=\"chatForm\" *ngIf=\"chatForm\" (submit)=\"send()\" fxLayout=\"row\" fxFlex=\"10\" >\n        <mat-input-container fxFlex>\n          <input type=\"text\" matInput formControlName=\"input\" placeholder=\"Type your message here\" autocomplete=off>\n        </mat-input-container>\n      </form>\n    </mat-card>\n    \n    <mat-card fxFlex=\"50\" class=\"json-response\">\n      <h3>POST /api/v1</h3>\n      <pre>{{prettyChatCurrent}}</pre>\n    </mat-card>\n</div> "

/***/ }),

/***/ "./src/app/agent/chat/chat.component.scss":
/***/ (function(module, exports) {

module.exports = ".textright {\n  text-align: right; }\n\n.textleft {\n  text-align: left; }\n\n.textcenter {\n  text-align: center; }\n\n.fullwidth {\n  width: 100%; }\n\nmat-card {\n  margin: 10px;\n  height: 600px; }\n\n::-webkit-scrollbar {\n  width: 0px;\n  /* remove scrollbar space */\n  background: transparent;\n  /* optional: just make scrollbar invisible */ }\n\n.chat-container {\n  overflow-y: auto; }\n\n.chat-message {\n  margin: 10px 0;\n  min-height: 20px;\n  -webkit-animation: fadeIn 0.5s linear;\n          animation: fadeIn 0.5s linear;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both; }\n\n.chat-message:after {\n    display: block;\n    content: \"\";\n    clear: both; }\n\n.chat-message-content {\n  width: auto;\n  max-width: 85%;\n  display: inline-block;\n  padding: 7px 13px;\n  border-radius: 15px;\n  color: #595a5a;\n  background-color: #eeeeee; }\n\n.chat-message-content.human {\n    float: right;\n    color: #f7f8f8;\n    background-color: #3392fb; }\n\n.json-response {\n  background-color: #efefef; }\n\n.json-response pre {\n    height: auto;\n    height: 500px;\n    overflow: auto;\n    background-color: #eeeeee;\n    word-break: normal !important;\n    word-wrap: normal !important;\n    white-space: pre !important; }\n\n.chat-message:nth-child(1) {\n  -webkit-animation-delay: 0.25s;\n          animation-delay: 0.25s; }\n\n.chat-message:nth-child(2) {\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s; }\n\n.chat-message:nth-child(3) {\n  -webkit-animation-delay: 0.75s;\n          animation-delay: 0.75s; }\n\n.chat-message:nth-child(4) {\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s; }\n\n.chat-message:nth-child(5) {\n  -webkit-animation-delay: 1.25s;\n          animation-delay: 1.25s; }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  75% {\n    opacity: 0.5; }\n  100% {\n    opacity: 1; } }\n"

/***/ }),

/***/ "./src/app/agent/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* unused harmony export Message */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatComponent = /** @class */ (function () {
    function ChatComponent(fb, chatService) {
        this.fb = fb;
        this.chatService = chatService;
        this.messages = [];
        this.chatFormFields = {
            input: [''],
        };
        this.chatForm = this.fb.group(this.chatFormFields);
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatInitial = {
            'currentNode': '',
            'complete': null, 'context': {},
            'parameters': [],
            'extractedParameters': {},
            'speechResponse': '',
            'intent': {},
            'input': 'init_conversation',
            'missingParameters': []
        };
        this.chatService.converse(this.chatInitial)
            .then(function (c) {
            c.owner = 'chat';
            _this.changeCurrent(c);
            _this.render_bubbles(c);
        });
    };
    ChatComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    ChatComponent.prototype.render_bubbles = function (c) {
        var _this = this;
        c.speechResponse.forEach(function (item, index) {
            if (index == 0) {
                _this.add_to_messages(item, "chat");
            }
            else {
                setTimeout(function () {
                    _this.add_to_messages(item, "chat");
                }, 500);
            }
        });
    };
    ChatComponent.prototype.add_to_messages = function (message, author) {
        var _this = this;
        var new_message = new Message(message, author);
        this.messages.push(new_message);
        setTimeout(function () {
            _this.scrollToBottom();
        }, 300);
    };
    ChatComponent.prototype.changeCurrent = function (c) {
        c.date = new Date();
        this.chatCurrent = c;
        this.prettyChatCurrent = JSON ? JSON.stringify(c, null, '  ') : 'your browser doesnt support JSON so cant pretty print';
    };
    ChatComponent.prototype.send = function () {
        var _this = this;
        var form = this.chatForm.value;
        var sendMessage = __assign({}, this.chatCurrent, { input: form.input, owner: 'user' });
        this.add_to_messages(form.input, "user");
        this.changeCurrent(sendMessage);
        this.chatService.converse(sendMessage)
            .then(function (c) {
            c.owner = 'chat';
            _this.changeCurrent(c);
            _this.chatForm.reset();
            setTimeout(function () {
                _this.render_bubbles(c);
            }, 1000);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('scrollMe'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ChatComponent.prototype, "myScrollContainer", void 0);
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'app-chat',
            template: __webpack_require__("./src/app/agent/chat/chat.component.html"),
            styles: [__webpack_require__("./src/app/agent/chat/chat.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["n" /* trigger */])('listAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["m" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* style */])({ opacity: 0 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* stagger */])('500ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('.3s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* style */])({ opacity: 0, offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* style */])({ opacity: .5, offset: 0.5 }),
                                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* style */])({ opacity: 1, offset: 1.0 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]])
    ], ChatComponent);
    return ChatComponent;
}());

var Message = /** @class */ (function () {
    function Message(content, author) {
        this.content = content;
        this.author = author;
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/agent/entities/entities.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\n    <mat-form-field fxFlex=\"80\">\n      <input matInput #newEntityName placeholder=\"Entity name\">\n    </mat-form-field>\n    <button mat-raised-button color=\"primary\" (click)=\"newEntity(newEntityName.value)\">Add</button>\n  </div>\n\n  <div class=\"entities\">\n    <div *ngFor=\"let entity of entities;let i=index\" fxLayout=\"row\" fxLayoutAlign=\" center\" class=\"entity-container\">\n      <div fxFlex=\"60\">\n        {{entity.name}}\n      </div>\n      <div fxFlex=\"40\">\n        <button mat-icon-button (click)=\"edit(entity)\" color=\"accent\">\n          <mat-icon aria-label=\"Edit this entity\">edit</mat-icon>\n        </button>\n        <button mat-icon-button (click)=\"deleteEntity(entity._id.$oid,i)\" color=\"warn\">\n            <mat-icon aria-label=\"Delete this entity\">delete</mat-icon>\n          </button>\n      </div>\n    </div>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/agent/entities/entities.component.scss":
/***/ (function(module, exports) {

module.exports = "mat-card {\n  margin: 10px; }\n  mat-card .full-width {\n    width: 100%; }\n  mat-card .entities {\n    margin: 10px; }\n  mat-card .entities .entity {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding: 5px;\n      margin-bottom: 3px;\n      cursor: pointer; }\n  mat-card .entity-container {\n    border-bottom: 1px solid lightgray;\n    padding: 10px; }\n"

/***/ }),

/***/ "./src/app/agent/entities/entities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_entities_service__ = __webpack_require__("./src/app/services/entities.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utils_service__ = __webpack_require__("./src/app/services/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EntitiesComponent = /** @class */ (function () {
    function EntitiesComponent(_router, coreService, entitiesService) {
        this._router = _router;
        this.coreService = coreService;
        this.entitiesService = entitiesService;
        this.entities = [];
    }
    EntitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.entitiesService.getEntities().then(function (result) {
            _this.entities = result;
        });
    };
    EntitiesComponent.prototype.newEntity = function (name) {
        var _this = this;
        if (this.entities.find(function (x) { return x.name === name; })) {
            alert("Entity already exist");
            return;
        }
        this.entitiesService.create_entity({ "name": name }).then(function (result) {
            _this.entities.push({
                "_id": {
                    "$oid": result["_id"]
                },
                "name": name
            });
        });
    };
    EntitiesComponent.prototype.edit = function (entity) {
        this._router.navigate(["/agent/default/edit-entity", entity._id.$oid]);
    };
    EntitiesComponent.prototype.deleteEntity = function (id, i) {
        var _this = this;
        if (confirm('Are u sure want to delete this entity?')) {
            this.coreService.displayLoader(true);
            this.entitiesService.delete_entity(id).then(function () {
                _this.entities.splice(i, 1);
                _this.ngOnInit();
                _this.coreService.displayLoader(false);
            });
        }
    };
    EntitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-entities',
            template: __webpack_require__("./src/app/agent/entities/entities.component.html"),
            styles: [__webpack_require__("./src/app/agent/entities/entities.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_utils_service__["a" /* UtilsService */], __WEBPACK_IMPORTED_MODULE_1__services_entities_service__["a" /* EntitiesService */]])
    ], EntitiesComponent);
    return EntitiesComponent;
}());



/***/ }),

/***/ "./src/app/agent/entity/entity.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"container\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div fxFlex=\"90\">\n      <input matInput [(ngModel)]=\"entity.name\" placeholder=\"Entity value\">\n    </div>\n    <div>\n      <button mat-raised-button (click)=\"saveEntity()\" color=\"accent\">\n        Save\n      </button>\n    </div>\n  </div>\n\n  <mat-divider></mat-divider>\n\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" style=\"margin-top:10px;\">\n    <mat-form-field fxFlex=\"80\">\n      <input matInput #newEntityValue placeholder=\"Entity value\">\n    </mat-form-field>\n    <button mat-mini-fab (click)=\"newValue(newEntityValue.value)\" color=\"primary\">\n      <mat-icon aria-label=\"New value\">add</mat-icon>\n    </button>\n  </div>\n\n  <div class=\"values\">\n    <div *ngFor=\"let value of entity.entity_values;let value_index=index\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n      <span fxFlex=\"10\">\n        <h3>{{value.value}}</h3>\n      </span>\n      <mat-form-field fxFlex=\"85\">\n        <mat-chip-list #chipList>\n          <mat-chip *ngFor=\"let synonym of value.synonyms;let synonym_index=index\" [selectable]=\"true\" [removable]=\"true\" (remove)=\"remove_synonym(value_index,synonym_index)\">\n            {{synonym}}\n            <mat-icon matChipRemove *ngIf=\"true\">cancel</mat-icon>\n          </mat-chip>\n          <input placeholder=\"Synonyms\" [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"true\"\n            (matChipInputTokenEnd)=\"add(value_index,$event)\" />\n        </mat-chip-list>\n      </mat-form-field>\n      <div fxFlex=\"5\">\n          <button mat-icon-button (click)=\"deleteEntityValue(value_index)\" color=\"warn\">\n              <mat-icon aria-label=\"Delete this value\">delete</mat-icon>\n            </button>\n      </div>\n    </div>\n  </div>\n\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/agent/entity/entity.component.scss":
/***/ (function(module, exports) {

module.exports = ".values {\n  margin-top: 20px; }\n"

/***/ }),

/***/ "./src/app/agent/entity/entity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_entities_service__ = __webpack_require__("./src/app/services/entities.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_keycodes__ = __webpack_require__("./node_modules/@angular/cdk/esm5/keycodes.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EntityComponent = /** @class */ (function () {
    function EntityComponent(entitiesService, _activatedRoute) {
        this.entitiesService = entitiesService;
        this._activatedRoute = _activatedRoute;
        this.separatorKeysCodes = [__WEBPACK_IMPORTED_MODULE_3__angular_cdk_keycodes__["g" /* ENTER */], __WEBPACK_IMPORTED_MODULE_3__angular_cdk_keycodes__["c" /* COMMA */]];
    }
    EntityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.data
            .subscribe(function (data) {
            console.log("selected entity =>>", data.entity);
            _this.entity = data.entity;
        });
    };
    EntityComponent.prototype.newValue = function (value) {
        this.entity["entity_values"].push({
            "value": value,
            "synonyms": []
        });
    };
    EntityComponent.prototype.add = function (value_index, event) {
        var input = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.entity.entity_values[value_index].synonyms.push(value);
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    EntityComponent.prototype.remove_synonym = function (value_index, synonym_index) {
        if (synonym_index >= 0) {
            this.entity.entity_values[value_index].synonyms.splice(synonym_index, 1);
        }
    };
    EntityComponent.prototype.saveEntity = function () {
        this.entitiesService.saveEntity(this.entity).then(function (result) {
            console.log("Success: " + JSON.stringify(result));
        });
    };
    EntityComponent.prototype.deleteEntityValue = function (value_index) {
        this.entity["entity_values"].splice(value_index, 1);
    };
    EntityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-entity',
            template: __webpack_require__("./src/app/agent/entity/entity.component.html"),
            styles: [__webpack_require__("./src/app/agent/entity/entity.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_entities_service__["a" /* EntitiesService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], EntityComponent);
    return EntityComponent;
}());



/***/ }),

/***/ "./src/app/agent/intent/intent.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <h2>{{message}}</h2>\n\n  <form [formGroup]=\"intentForm\" *ngIf=\"intentForm\" (submit)=\"save()\" class=\"row\" style=\" width: 100%;\">\n    <mat-form-field class=\"full-width\">\n      <textarea matInput formControlName=\"name\" placeholder=\"Intent name\"></textarea>\n    </mat-form-field>\n    <br>\n    <mat-form-field class=\"full-width\">\n      <textarea matInput formControlName=\"intentId\" placeholder=\"Intent ID\"></textarea>\n    </mat-form-field>\n\n    <h2>Parameters\n      <button type=\"button\"  mat-mini-fab (click)=\"addParameter()\" color=\"primary\">\n        <mat-icon aria-label=\"New Parameter\">add</mat-icon>\n      </button>\n    </h2>\n    <section class=\"parameters\" formArrayName=\"parameters\">\n      <div *ngFor=\"let paremeter of intentForm.controls.parameters.controls; let i=index;\" class=\"parameter\">\n\n        <div [formGroup]=\"paremeter\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n          <mat-form-field fxFlex=\"30\">\n            <input matInput formControlName=\"name\" placeholder=\"Parameter name\">\n          </mat-form-field>\n\n          <mat-form-field class=\"col-md-4\" fxFlex=\"10\">\n            <mat-select formControlName=\"type\" placeholder=\"Parameter type\">\n              <mat-option *ngFor=\"let intent of intentTypesArray\" [value]=\"intent\">\n                {{ intentTypes[intent] }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-checkbox formControlName=\"required\" fxFlex=\"10\">Required</mat-checkbox>\n          <mat-form-field *ngIf=\"paremeter.controls.required.value\" fxFlex=\"45\">\n            <textarea matInput formControlName=\"prompt\" placeholder=\"Message to prompt when require\"></textarea>\n          </mat-form-field>\n\n          <button mat-icon-button (click)=\"deleteParameter(i)\">\n            <mat-icon aria-label=\"Delete this intent\">delete</mat-icon>\n          </button>\n        </div>\n      </div>\n\n\n    </section>\n\n\n    <h3>\n      <mat-checkbox formControlName=\"apiTrigger\">API trigger</mat-checkbox>\n    </h3>\n\n    <section [formGroup]=\"intentForm.controls.apiDetails\" *ngIf=\"apiTrigger()\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n      <h3>HTTP Headers             \n          <button type=\"button\"  mat-mini-fab (click)=\"addHeader()\" color=\"primary\">\n            <mat-icon aria-label=\"Add header\">add</mat-icon>\n          </button>\n        </h3>\n      <div class=\"api-headers\" *ngFor=\"let header of intentForm.controls.apiDetails.controls.headers.controls; let j=index;\"  fxLayoutGap=\"10px\">\n        <div  fxLayout=\"row\" [formGroup]=\"header\" fxLayoutGap=\"10px\">\n            <mat-form-field fxFlex=\"40\">\n                <input matInput formControlName=\"headerKey\" placeholder=\"new key\">\n              </mat-form-field>\n              <mat-form-field fxFlex=\"40\">\n                <input matInput formControlName=\"headerValue\" placeholder=\"value\">\n              </mat-form-field>\n              <button mat-icon-button (click)=\"deleteHeader(j)\">\n                  <mat-icon aria-label=\"Delete this Header\">delete</mat-icon>\n                </button>\n        </div>\n\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n        <mat-form-field fxFlex=\"90\">\n          <input matInput formControlName=\"url\" placeholder=\"API url\">\n        </mat-form-field>\n\n        <mat-form-field fxFlex=\"10\">\n          <mat-select formControlName=\"requestType\" placeholder=\"API method\">\n            <mat-option value=\"GET\">GET</mat-option>\n            <mat-option value=\"POST\">POST</mat-option>\n            <mat-option value=\"PUT\">PUT</mat-option>\n            <mat-option value=\"DELETE\">DELETE</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n\n      <mat-checkbox formControlName=\"isJson\">JSON payload</mat-checkbox>\n      <div *ngIf=\"intentForm.value.apiDetails.isJson\">\n        Extracted parameters can be used to build your json. Example,\n        <pre> {{ '\\{ \n    \"name\": \\{\\{ parameters\\[\\\"name\\\"\\] \\}\\} \n \\}' }}</pre>\n      </div>\n      <mat-form-field class=\"full-width\" *ngIf=\"intentForm.value.apiDetails.isJson\">\n        <textarea matInput formControlName=\"jsonData\" placeholder=\"JsonData\" rows=\"8\" placeholder=\"JSON payload\"></textarea>\n      </mat-form-field>\n\n    </section>\n    <br>\n    <mat-form-field class=\"full-width\">\n      <textarea matInput formControlName=\"speechResponse\" placeholder=\"Speech Response\" rows=\"5\"></textarea>\n    </mat-form-field>\n\n    <p>\n      Extracted parameters and api call response can be accessed from speech respone using \"parameters\" and \"result\" objects respectively.\n      <a href=\"http://jinja.pocoo.org/docs/2.10/templates/\" target=\"_blank\">Jinja</a> Templating enabled.\n    </p>\n\n\n\n    <mat-card-actions>\n      <button mat-raised-button color=\"primary\" [disabled]=\"!intentForm.valid\">Save</button>\n    </mat-card-actions>\n  </form>\n</mat-card>"

/***/ }),

/***/ "./src/app/agent/intent/intent.component.scss":
/***/ (function(module, exports) {

module.exports = "mat-card {\n  margin: 10px; }\n  mat-card .full-width {\n    width: 100%; }\n  mat-card .parameter {\n    padding: 15px;\n    margin-bottom: 10px; }\n  mat-card pre {\n    background-color: #efefef;\n    padding: 5px; }\n"

/***/ }),

/***/ "./src/app/agent/intent/intent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utils_service__ = __webpack_require__("./src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_intent_service__ = __webpack_require__("./src/app/services/intent.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IntentComponent = /** @class */ (function () {
    function IntentComponent(fb, coreService, intentService, _activatedRoute, _router) {
        this.fb = fb;
        this.coreService = coreService;
        this.intentService = intentService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.intentTypes = __WEBPACK_IMPORTED_MODULE_4__services_intent_service__["a" /* IntentService */].intentTypes;
        this.intentTypesArray = Object.keys(this.intentTypes);
    }
    IntentComponent.prototype.loadForm = function () {
        var _this = this;
        this.intentFormFields = {
            _id: [''],
            name: [''],
            intentId: [''],
            userDefined: [true],
            speechResponse: [''],
            apiTrigger: [false],
            apiDetails: this.initApiDetails(),
            parameters: this.fb.array(this.intent && this.intent.parameters ? this.intent.parameters.map(function (n) {
                return _this.initParameter(n);
            }) : [])
        };
        this.intentForm = this.fb.group(this.intentFormFields);
    };
    IntentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadForm();
        this._activatedRoute.params.subscribe(function (params) {
            console.log("active agent reached " + params['intent_id']);
        });
        this._activatedRoute.data
            .subscribe(function (data) {
            console.log("selected intent =>>");
            console.log(data.story);
            _this.intent = data.story;
            _this.loadForm();
            _this.coreService.setDataForm(_this.intentForm, _this.intentFormFields, _this.intent);
        });
    };
    IntentComponent.prototype.addParameter = function () {
        var control = this.intentForm.controls['parameters'];
        control.push(this.initParameter());
    };
    IntentComponent.prototype.initParameter = function (parameter) {
        if (parameter === void 0) { parameter = null; }
        var fields = {
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            type: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            required: [false],
            prompt: ['']
        };
        var g = this.fb.group(fields);
        if (parameter) {
            // setdataform
        }
        return g;
    };
    IntentComponent.prototype.deleteParameter = function (i) {
        var control = this.intentForm.controls['parameters'];
        control.removeAt(i);
    };
    IntentComponent.prototype.initApiDetails = function (parameter) {
        var _this = this;
        if (parameter === void 0) { parameter = null; }
        var fields = {
            isJson: [false],
            url: [''],
            headers: this.fb.array(this.intent && this.intent.apiTrigger ? this.intent.apiDetails.headers.map(function (n) {
                return _this.initApiHeaders();
            }) : []),
            requestType: [''],
            jsonData: ['']
        };
        var g = this.fb.group(fields);
        if (parameter) {
            // setdataform
        }
        return g;
    };
    IntentComponent.prototype.initApiHeaders = function () {
        var fields = {
            headerKey: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            headerValue: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        };
        var g = this.fb.group(fields);
        return g;
    };
    IntentComponent.prototype.addHeader = function () {
        var header = this.intentForm.controls["apiDetails"]["controls"]["headers"];
        header.push(this.initApiHeaders());
    };
    IntentComponent.prototype.deleteHeader = function (j) {
        var control = this.intentForm.controls["apiDetails"]["controls"]["headers"];
        control.removeAt(j);
    };
    IntentComponent.prototype.save = function () {
        var _this = this;
        var form = this.intentForm.value;
        if (form._id && form._id.$oid) {
            form._id = form._id.$oid;
        }
        if (!this.apiTrigger()) {
            delete form.apiDetails;
        }
        this.intentService.saveIntent(form)
            .then(function (c) {
            _this.message = 'Intent created!';
            _this._router.navigate(["/agent/default/edit-intent", c["_id"]]);
        });
    };
    IntentComponent.prototype.apiTrigger = function () {
        return this.intentForm.value.apiTrigger;
    };
    IntentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-intent',
            template: __webpack_require__("./src/app/agent/intent/intent.component.html"),
            styles: [__webpack_require__("./src/app/agent/intent/intent.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_utils_service__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_4__services_intent_service__["a" /* IntentService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], IntentComponent);
    return IntentComponent;
}());



/***/ }),

/***/ "./src/app/agent/intents/intents.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\" center\">\n  <h1 fxFlex>List of Intents\n    <button mat-mini-fab (click)=\"add()\">\n      <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n    </button>\n  </h1>\n\n  <button mat-raised-button color=\"primary\" (click)=\"trainModels()\">Build Agent</button>\n</div>\n\n\n\n<mat-card>\n  <div *ngFor=\"let intent of intents\" fxLayout=\"row\" fxLayoutAlign=\" center\" class=\"intent-container\">\n    <div fxFlex=\"60\">\n      {{intent.name}}\n    </div>\n    <div fxFlex=\"40\">\n      <button mat-button (click)=\"train(intent)\" color=\"primary\">Train</button>\n      <button mat-icon-button (click)=\"edit(intent)\" color=\"accent\">\n        <mat-icon aria-label=\"Edit this intent\">edit</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"delete(intent)\" color=\"warn\" *ngIf=\"intent.userDefined\">\n        <mat-icon aria-label=\"Delete this intent\">delete</mat-icon>\n      </button>\n    </div>\n  </div>\n  <br>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/agent/intents/intents.component.scss":
/***/ (function(module, exports) {

module.exports = "mat-card {\n  margin: 10px; }\n  mat-card .intent-container {\n    border-bottom: 1px solid lightgray;\n    padding: 10px; }\n  .header {\n  margin: 10px; }\n"

/***/ }),

/***/ "./src/app/agent/intents/intents.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_intent_service__ = __webpack_require__("./src/app/services/intent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_training_service__ = __webpack_require__("./src/app/services/training.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_utils_service__ = __webpack_require__("./src/app/services/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IntentsComponent = /** @class */ (function () {
    function IntentsComponent(intentService, _activatedRoute, _router, trainingService, coreService) {
        this.intentService = intentService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.trainingService = trainingService;
        this.coreService = coreService;
    }
    IntentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.intentService.getIntents().then(function (s) {
            _this.intents = s;
        });
    };
    IntentsComponent.prototype.add = function () {
        this._router.navigate(["/agent/default/create-intent"]);
    };
    IntentsComponent.prototype.edit = function (intent) {
        this._router.navigate(["/agent/default/edit-intent", intent._id.$oid]);
    };
    IntentsComponent.prototype.train = function (intent) {
        this._router.navigate(["/agent/default/train-intent", intent._id.$oid]);
    };
    IntentsComponent.prototype.delete = function (intent) {
        var _this = this;
        if (confirm('Are u sure want to delete this story?')) {
            this.coreService.displayLoader(true);
            this.intentService.delete_intent(intent._id.$oid).then(function (s) {
                _this.ngOnInit();
                _this.coreService.displayLoader(false);
            });
        }
    };
    IntentsComponent.prototype.trainModels = function () {
        var _this = this;
        this.coreService.displayLoader(true);
        this.trainingService.trainModels().then(function (s) {
            _this.coreService.displayLoader(false);
        });
    };
    IntentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-intents',
            template: __webpack_require__("./src/app/agent/intents/intents.component.html"),
            styles: [__webpack_require__("./src/app/agent/intents/intents.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_intent_service__["a" /* IntentService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_training_service__["a" /* TrainingService */], __WEBPACK_IMPORTED_MODULE_4__services_utils_service__["a" /* UtilsService */]])
    ], IntentsComponent);
    return IntentsComponent;
}());



/***/ }),

/***/ "./src/app/agent/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card fxLayout=\"column\">\n    \n    <form [formGroup]=\"config_form\" (submit)=\"save_config()\">\n        <h3>Tune ML</h3>\n        <mat-slider min=\"0.1\" max=\"1.0\" step=\"0.05\" formControlName=\"confidence_threshold\" (change)=\"threshold_value_changed()\"></mat-slider>\n        Intent Detection threshold = <b>{{config_form.value.confidence_threshold | percent}}</b>\n        <br>\n      </form>  \n    <div class=\"code-snippet\">\n            <h3>Chat Widget</h3>\n            <p>Copy and paste the below snippet into your HTML code.</p>\n            <pre id=\"codeStyler\">\n                    <code  >{{ code }} </code> \n            </pre>\n            <p>\n                In the above code snippet, \n                replace <code>win.iky_base_url</code> value with your iky installation in following format <code>\"ip:port/\"</code> and <code>win.chat_context</code> with any global context\n            </p>\n\n    </div>\n\n    <h3>Import/Export Intents</h3>\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\n\n        <div class=\"import-group\" fxLayout=\"row\" fxLayoutAlign=\" center\">\n            <div fxFlex>\n                <input type=\"file\"\n                      id=\"file\"\n                      (change)=\"handleFileInput($event.target.files)\">\n            </div>\n            <div fxLayoutAlign=\"end\" >  <button mat-raised-button (click)=\"uploadFileToActivity()\" [disabled]=\"!fileToUpload\">Import Intents</button></div>  \n          </div>\n          <button mat-raised-button (click)=\"export()\" color=\"primary\">Export Intents</button>\n    </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/agent/settings/settings.component.scss":
/***/ (function(module, exports) {

module.exports = "mat-card {\n  margin: 10px;\n  /* Code Styles */ }\n  mat-card .import-group {\n    width: 500px;\n    border: 1px solid lightgray;\n    padding: 5px; }\n  mat-card pre {\n    white-space: pre-wrap;\n    white-space: -moz-pre-wrap;\n    white-space: -o-pre-wrap;\n    word-wrap: break-word;\n    margin: 20px 0;\n    width: 800px;\n    max-width: 100%;\n    outline: none;\n    white-space: normal;\n    background-color: #f6f8fa;\n    border-color: #ccc;\n    color: #666;\n    font-size: 15px !important;\n    padding: 7px;\n    -webkit-box-shadow: 1px 2px 3px lightgrey;\n            box-shadow: 1px 2px 3px lightgrey; }\n  mat-card code {\n    font-family: Courier, 'New Courier', monospace;\n    font-size: 12px; }\n  mat-card #codeStyler {\n    border-radius: 5px;\n    -moz-border-radius: 5px;\n    -webkit-border-radius: 5px;\n    margin: 1em 0; }\n"

/***/ }),

/***/ "./src/app/agent/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_intent_service__ = __webpack_require__("./src/app/services/intent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_agents_service__ = __webpack_require__("./src/app/services/agents.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_utils_service__ = __webpack_require__("./src/app/services/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(intentService, agent_service, fb, utilsService) {
        this.intentService = intentService;
        this.agent_service = agent_service;
        this.fb = fb;
        this.utilsService = utilsService;
        this.fileToUpload = null;
        this.config_form = this.fb.group({
            "confidence_threshold": []
        });
        this.code = "\n  \n  <script type=\"text/javascript\">\n  !function(win,doc){\"use strict\";var script_loader=()=>{try\n  {var head=doc.head||doc.getElementsByTagName(\"head\")[0],script=doc.createElement(\"script\");script.setAttribute(\"type\",\"text/javascript\"),script.setAttribute(\"src\",win.iky_base_url+\"assets/widget/iky_widget.js\"),head.appendChild(script)}\n  catch(e){}};win.chat_context={\"username\":\"John\"},win.iky_base_url=\"http://localhost:8080/\",script_loader()}(window,document);\n  </script>\n  ";
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.agent_service.get_config().then(function (result) {
            _this.config_form.setValue(result);
        });
    };
    SettingsComponent.prototype.threshold_value_changed = function () {
        this.save_config();
    };
    SettingsComponent.prototype.save_config = function () {
        this.agent_service.update_config(this.config_form.value);
        console.log(this.config_form.value);
    };
    SettingsComponent.prototype.export = function () {
        window.open(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].ikyBackend + "intents/export", "_blank");
    };
    SettingsComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
    };
    SettingsComponent.prototype.uploadFileToActivity = function () {
        var _this = this;
        this.utilsService.displayLoader(true);
        this.intentService.importIntents(this.fileToUpload).then(function (result) {
            _this.utilsService.displayLoader(false);
            console.log(result);
        });
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__("./src/app/agent/settings/settings.component.html"),
            styles: [__webpack_require__("./src/app/agent/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_intent_service__["a" /* IntentService */], __WEBPACK_IMPORTED_MODULE_4__services_agents_service__["a" /* AgentsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__services_utils_service__["a" /* UtilsService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/agent/train/train.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" >\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\"  >\n      <h2 fxFlex=\"90\">Train your intent</h2>\n      <div>\n          <button mat-raised-button (click)=\"updateTrainingData()\" color=\"primary\">Save Training Data </button>\n      </div>\n      \n  </div>\n  <p fxFlex=\"85\">\n      Train your story for possible user inputs. Tag required parameters using mouse and give em labels  \n    </p>\n\n</div>\n\n<mat-card >\n  <mat-form-field class=\"full-width\">\n    <textarea matInput [(ngModel)]=\"newExampleText\" placeholder=\"enter example text here\"></textarea>\n  </mat-form-field>\n  <button mat-raised-button color=\"accent\" (click)=\"addNewExample()\">Add to training set</button>\n</mat-card >\n\n<div class=\"mat-accordion\">\n<mat-accordion>\n  <mat-expansion-panel *ngFor=\"let example of trainingData;let example_index = index\" [expanded]=\"example_index == 0\" (opened)=\"selectionInfo.value = ''\">\n    <mat-expansion-panel-header>\n      <mat-panel-title [innerHTML]=\"getAnnotatedText(example)\">\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n\n    <div fxLayout=\"row\">\n      <div fxFlex=\"90\" id=\"textarea_highlight\" contenteditable=\"true\" role=\"textarea\" (mouseup)=\"annotate()\" appAutofocus  (keyup)=\"example.text = $event.target.outerText;placeCaretAtEnd($event.target)\">{{example.text}}</div>\n      <button mat-icon-button fxFlex=\"10\">\n        <mat-icon aria-label=\"Delete this example\" (click)=\"deleteExample(example_index)\">delete</mat-icon>\n      </button>\n\n    </div>\n\n    <div class=\"add-entity\">\n        <span *ngIf=\"this.selectionInfo.value == ''; else elseBlock\" class=\"round-button\"> Select text to add an entity </span>\n\n        <ng-template #elseBlock>\n          <mat-form-field>\n              <input matInput type=\"text\" [(ngModel)]=\"newEntityName\" placeholder=\"entity name\" aria-label=\"entity\" [matAutocomplete]=\"auto\" appAutofocus>\n              <mat-autocomplete #auto=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let entity of entities\" [value]=\"entity.name\">\n                    <span>{{ entity.name }}</span>\n                  </mat-option>\n                </mat-autocomplete>\n          </mat-form-field>\n\n            \n\n          <span class=\"round-button\" (click)=\"newEntityName && addNewEntity(example_index)\"> Add an entity for\n            <b>\"{{this.selectionInfo.value}}\"</b>\n          </span>\n        </ng-template>\n      </div>\n      \n    <div class=\"entity-table\">\n\n      <table width=\"100%\">\n        <h3>Entities</h3>\n        <tr class=\"table-header\">\n          <td>Entity</td>\n          <td>Value</td>\n          <td></td>\n        </tr>\n        <tr *ngFor=\"let entity of example.entities;let entity_index = index\">\n          <td>{{entity.name}}</td>\n          <td>{{entity.value}}</td>\n          <td>\n            <button mat-icon-button (click)=\"deleteEntity(example_index,entity_index)\" >\n              <mat-icon aria-label=\"Delete this entity\" >close</mat-icon>\n            </button>\n          </td>\n        </tr>\n      </table>\n    </div>\n  </mat-expansion-panel>\n</mat-accordion>\n</div>\n"

/***/ }),

/***/ "./src/app/agent/train/train.component.scss":
/***/ (function(module, exports) {

module.exports = ".round-button {\n  border: 1px solid;\n  border-radius: 5px;\n  padding: 5px; }\n\n.round-button:hover {\n  cursor: pointer;\n  background-color: gray;\n  color: #fff; }\n\n.add-entity {\n  margin-top: 10px; }\n\n.entity-table {\n  padding: 5px; }\n\n.full-width {\n  width: 100%; }\n\nmat-card {\n  margin: 5px; }\n\n.mat-accordion {\n  margin: 5px; }\n\n.header {\n  padding: 5px; }\n\n#textarea_highlight {\n  border-radius: 5px;\n  padding: 10px;\n  background-color: #efefef; }\n\n.table-header {\n  padding: 10px;\n  background: #e9eaeb; }\n"

/***/ }),

/***/ "./src/app/agent/train/train.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_intent_service__ = __webpack_require__("./src/app/services/intent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_training_service__ = __webpack_require__("./src/app/services/training.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_entities_service__ = __webpack_require__("./src/app/services/entities.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TrainComponent = /** @class */ (function () {
    function TrainComponent(storyService, _activatedRoute, _router, trainingService, entitiesService) {
        this.storyService = storyService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.trainingService = trainingService;
        this.entitiesService = entitiesService;
        this.selectionInfo = {
            "value": "",
            "begin": 0,
            "end": 0
        };
        this.intentId = null;
        this.entities = [];
        this.trainingData = [];
        this.newEntityName = null;
    }
    TrainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            console.log("current intent " + params['intent_id']);
            _this.intentId = params['intent_id'];
            _this.trainingService.getTrainingData(params['intent_id']).then(function (result) {
                _this.trainingData = result;
            });
        });
        this._activatedRoute.data
            .subscribe(function (data) {
            console.log("selected intent =>>");
            console.log(data.story);
            _this.story = data.story;
        });
        if (this.story) {
            if (this.story._id && this.story._id.$oid) {
                this.story._id = this.story._id.$oid;
            }
        }
        this.entitiesService.getEntities().then(function (result) {
            _this.entities = result;
        });
    };
    // 123456
    TrainComponent.prototype.getAnnotatedText = function (example) {
        var text = example.text;
        example.entities.forEach(function (entity) {
            var key = entity.value;
            var regex = new RegExp(key, 'g');
            text = text.replace(regex, '&nbsp;<mark style="background: red;">' + key + '</mark>&nbsp;');
        });
        return text;
    };
    // updateValue($event,example_index){
    //   this.trainingData[example_index]["text"]=$event.srcElement.outerText;
    // }
    TrainComponent.prototype.addNewExample = function () {
        this.trainingData.unshift({
            "text": this.newExampleText,
            "entities": []
        });
        this.newExampleText = "";
    };
    TrainComponent.prototype.deleteExample = function (example_index) {
        this.trainingData.splice(example_index, 1);
    };
    TrainComponent.prototype.deleteEntity = function (example_index, entity_index) {
        this.trainingData[example_index].entities.splice(entity_index, 1);
    };
    TrainComponent.prototype.getSelectionInfo = function () {
        var selection = window.getSelection();
        if (selection.anchorOffset == selection.extentOffset)
            return false;
        var result = {
            "value": selection.toString(),
        };
        if (selection.anchorOffset > selection.extentOffset) {
            result["begin"] = selection.extentOffset;
            result["end"] = selection.anchorOffset;
        }
        else if (selection.anchorOffset < selection.extentOffset) {
            result["begin"] = selection.anchorOffset;
            result["end"] = selection.extentOffset;
        }
        return result;
    };
    TrainComponent.prototype.addNewEntity = function (example_index) {
        this.trainingData[example_index]["entities"].push({
            "value": this.selectionInfo.value,
            "begin": this.selectionInfo.begin,
            "end": this.selectionInfo.end,
            "name": this.newEntityName
        });
        this.newEntityName = null;
    };
    TrainComponent.prototype.annotate = function () {
        // snap selection to the word
        this.snapSelectionToWord();
        var result = this.getSelectionInfo();
        if (result)
            this.selectionInfo = result;
        console.log(this.selectionInfo);
    };
    TrainComponent.prototype.updateTrainingData = function () {
        this.trainingService.saveTrainingData(this.intentId, this.trainingData).then(function () {
            console.log("Success");
        });
    };
    TrainComponent.prototype.snapSelectionToWord = function () {
        var sel;
        // Check for existence of window.getSelection() and that it has a
        // modify() method. IE 9 has both selection APIs but no modify() method.
        if (window.getSelection && (sel = window.getSelection()).modify) {
            sel = window.getSelection();
            if (!sel.isCollapsed) {
                // Detect if selection is backwards
                var range = document.createRange();
                range.setStart(sel.anchorNode, sel.anchorOffset);
                range.setEnd(sel.focusNode, sel.focusOffset);
                var backwards = range.collapsed;
                range.detach();
                // modify() works on the focus of the selection
                var endNode = sel.focusNode, endOffset = sel.focusOffset;
                sel.collapse(sel.anchorNode, sel.anchorOffset);
                var direction = [];
                if (backwards) {
                    direction = ['backward', 'forward'];
                }
                else {
                    direction = ['forward', 'backward'];
                }
                sel.modify("move", direction[0], "character");
                sel.modify("move", direction[1], "word");
                sel.extend(endNode, endOffset);
                sel.modify("extend", direction[1], "character");
                sel.modify("extend", direction[0], "word");
            }
        }
        else if ((sel = document.selection) && sel.type != "Control") {
            var textRange = sel.createRange();
            if (textRange.text) {
                textRange.expand("word");
                // Move the end back to not include the word's trailing space(s),
                // if necessary
                while (/\s$/.test(textRange.text)) {
                    textRange.moveEnd("character", -1);
                }
                textRange.select();
            }
        }
    };
    //place curser at the end of content editable div
    TrainComponent.prototype.placeCaretAtEnd = function (el) {
        el.focus();
        if (typeof window.getSelection != "undefined"
            && typeof document.createRange != "undefined") {
            var range = document.createRange();
            range.selectNodeContents(el);
            range.collapse(false);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        }
        else if (typeof document.body.createTextRange != "undefined") {
            var textRange = document.body.createTextRange();
            textRange.moveToElementText(el);
            textRange.collapse(false);
            textRange.select();
        }
    };
    TrainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-train',
            template: __webpack_require__("./src/app/agent/train/train.component.html"),
            styles: [__webpack_require__("./src/app/agent/train/train.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_intent_service__["a" /* IntentService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_training_service__["a" /* TrainingService */],
            __WEBPACK_IMPORTED_MODULE_4__services_entities_service__["a" /* EntitiesService */]])
    ], TrainComponent);
    return TrainComponent;
}());



/***/ }),

/***/ "./src/app/directives/autofocus.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutofocusDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutofocusDirective = /** @class */ (function () {
    function AutofocusDirective(el) {
        this.el = el;
    }
    AutofocusDirective.prototype.ngAfterViewInit = function () {
        this.el.nativeElement.focus();
    };
    AutofocusDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appAutofocus]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], AutofocusDirective);
    return AutofocusDirective;
}());



/***/ }),

/***/ "./src/app/services/agents.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgentsService = /** @class */ (function () {
    function AgentsService(http) {
        this.http = http;
    }
    AgentsService.prototype.get_config = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ikyBackend + "agents/default/config").toPromise();
    };
    AgentsService.prototype.update_config = function (data) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ikyBackend + "agents/default/config", data).toPromise();
    };
    AgentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AgentsService);
    return AgentsService;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
    }
    ChatService.prototype.converse = function (intent, botId) {
        if (botId === void 0) { botId = 'default'; }
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ikyBackend + "api/v1", intent).toPromise();
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/entities.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntitiesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EntityResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EntitiesService = /** @class */ (function () {
    function EntitiesService(http) {
        this.http = http;
    }
    EntitiesService.prototype.getEntities = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ikyBackend + 'entities/').toPromise();
    };
    EntitiesService.prototype.getEntity = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ikyBackend + ("entities/" + id)).toPromise();
    };
    EntitiesService.prototype.saveEntity = function (entity) {
        if (entity._id) {
            return this.update_entity(entity);
        }
        else {
            delete entity._id;
            return this.create_entity(entity);
        }
    };
    EntitiesService.prototype.create_entity = function (entity) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ikyBackend + "entities/", entity).toPromise();
    };
    EntitiesService.prototype.update_entity = function (entity) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ikyBackend + ("entities/" + entity._id.$oid), entity).toPromise();
    };
    EntitiesService.prototype.delete_entity = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ikyBackend + ("entities/" + id), {}).toPromise();
    };
    EntitiesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], EntitiesService);
    return EntitiesService;
}());


var EntityResolverService = /** @class */ (function () {
    function EntityResolverService(_router, entityService) {
        this._router = _router;
        this.entityService = entityService;
    }
    EntityResolverService.prototype.resolve = function (route) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.entityService.getEntity(route.params['entity_id']).then(function (result) {
                console.log("intent details resolved");
                resolve(result);
            }, function (err) {
                new Error("Could'nt get intent details");
            });
        });
    };
    EntityResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], EntitiesService])
    ], EntityResolverService);
    return EntityResolverService;
}());



/***/ }),

/***/ "./src/app/services/intent-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntentResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intent_service__ = __webpack_require__("./src/app/services/intent.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntentResolverService = /** @class */ (function () {
    function IntentResolverService(intentService, _router) {
        this.intentService = intentService;
        this._router = _router;
    }
    IntentResolverService.prototype.resolve = function (route) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.intentService.getIntent(route.params['intent_id']).then(function (result) {
                console.log("intent details resolved");
                resolve(result);
            }, function (err) {
                new Error("Could'nt get intent details");
            });
        });
    };
    IntentResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__intent_service__["a" /* IntentService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], IntentResolverService);
    return IntentResolverService;
}());



/***/ }),

/***/ "./src/app/services/intent.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntentService = /** @class */ (function () {
    function IntentService(http) {
        this.http = http;
    }
    IntentService.prototype.getIntents = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ikyBackend + 'intents/').toPromise();
    };
    IntentService.prototype.getIntent = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ikyBackend + ("intents/" + id)).toPromise();
    };
    IntentService.prototype.saveIntent = function (intent) {
        if (intent._id) {
            return this.update_intent(intent);
        }
        else {
            delete intent._id;
            return this.create_intent(intent);
        }
    };
    IntentService.prototype.create_intent = function (intent) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ikyBackend + "intents/", intent).toPromise();
    };
    IntentService.prototype.update_intent = function (intent) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ikyBackend + ("intents/" + intent._id), intent).toPromise();
    };
    IntentService.prototype.delete_intent = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ikyBackend + ("intents/" + id), {}).toPromise();
    };
    IntentService.prototype.importIntents = function (fileToUpload) {
        var formData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ikyBackend + "intents/import", formData).toPromise();
    };
    IntentService.intentTypes = {
        'mobile': 'Mobile number',
        'email': 'Email',
        'free_text': 'Free Text',
        'number': 'Number',
        'list': 'List',
    };
    IntentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], IntentService);
    return IntentService;
}());



/***/ }),

/***/ "./src/app/services/training.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrainingService = /** @class */ (function () {
    function TrainingService(http) {
        this.http = http;
    }
    TrainingService.prototype.saveTrainingData = function (intent_id, data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ikyBackend + ("train/" + intent_id + "/data"), data).toPromise();
    };
    TrainingService.prototype.getTrainingData = function (intent_id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ikyBackend + ("train/" + intent_id + "/data")).toPromise();
    };
    TrainingService.prototype.trainModels = function () {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ikyBackend + "nlu/build_models", {}).toPromise();
    };
    TrainingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TrainingService);
    return TrainingService;
}());



/***/ })

});
//# sourceMappingURL=agent.module.chunk.js.map