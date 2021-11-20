/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 3610:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function addMatrix2x2Number(a, b) {
    return mat2_1.default(a[0][0] + b, a[0][1] + b, a[1][0] + b, a[1][1] + b);
}
exports.default = addMatrix2x2Number;
var mat2_1 = __importDefault(__webpack_require__(3194));


/***/ }),

/***/ 3235:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function addMatrix3x3Number(a, b) {
    return mat3_1.default(a[0][0] + b, a[0][1] + b, a[0][2] + b, a[1][0] + b, a[1][1] + b, a[1][2] + b, a[2][0] + b, a[2][1] + b, a[2][2] + b);
}
exports.default = addMatrix3x3Number;
var mat3_1 = __importDefault(__webpack_require__(1180));


/***/ }),

/***/ 6848:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function addMatrix4x4Number(a, b) {
    return mat4_1.default(a[0][0] + b, a[0][1] + b, a[0][2] + b, a[0][3] + b, a[1][0] + b, a[1][1] + b, a[1][2] + b, a[1][3] + b, a[2][0] + b, a[2][1] + b, a[2][2] + b, a[2][3] + b, a[3][0] + b, a[3][1] + b, a[3][2] + b, a[3][3] + b);
}
exports.default = addMatrix4x4Number;
var mat4_1 = __importDefault(__webpack_require__(8068));


/***/ }),

/***/ 6082:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function addNumberMatrix2x2(a, b) {
    return mat2_1.default(a + b[0][0], a + b[0][1], a + b[1][0], a + b[1][1]);
}
exports.default = addNumberMatrix2x2;
var mat2_1 = __importDefault(__webpack_require__(3194));


/***/ }),

/***/ 3759:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function addNumberMatrix3x3(a, b) {
    return mat3_1.default(a + b[0][0], a + b[0][1], a + b[0][2], a + b[1][0], a + b[1][1], a + b[1][2], a + b[2][0], a + b[2][1], a + b[2][2]);
}
exports.default = addNumberMatrix3x3;
var mat3_1 = __importDefault(__webpack_require__(1180));


/***/ }),

/***/ 6632:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function addNumberMatrix4x4(a, b) {
    return mat4_1.default(a + b[0][0], a + b[0][1], a + b[0][2], a + b[0][3], a + b[1][0], a + b[1][1], a + b[1][2], a + b[1][3], a + b[2][0], a + b[2][1], a + b[2][2], a + b[2][3], a + b[3][0], a + b[3][1], a + b[3][2], a + b[3][3]);
}
exports.default = addNumberMatrix4x4;
var mat4_1 = __importDefault(__webpack_require__(8068));


/***/ }),

/***/ 5121:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function addNumberVector2(a, b) {
    return add_vector2_vector2_1.default(vec2_1.default(a), b);
}
exports.default = addNumberVector2;
var vec2_1 = __importDefault(__webpack_require__(2185));
var add_vector2_vector2_1 = __importDefault(__webpack_require__(9148));


/***/ }),

/***/ 1669:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function addNumberVector3(a, b) {
    return add_vector3_vector3_1.default(vec3_1.default(a), b);
}
exports.default = addNumberVector3;
var vec3_1 = __importDefault(__webpack_require__(2860));
var add_vector3_vector3_1 = __importDefault(__webpack_require__(1131));


/***/ }),

/***/ 7418:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function addNumberVector4(a, b) {
    return add_vector4_vector4_1.default(vec4_1.default(a), b);
}
exports.default = addNumberVector4;
var vec4_1 = __importDefault(__webpack_require__(5570));
var add_vector4_vector4_1 = __importDefault(__webpack_require__(5323));


/***/ }),

/***/ 4192:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function addVector2Number(a, b) {
    return add_vector2_vector2_1.default(a, vec2_1.default(b));
}
exports.default = addVector2Number;
var vec2_1 = __importDefault(__webpack_require__(2185));
var add_vector2_vector2_1 = __importDefault(__webpack_require__(9148));


/***/ }),

/***/ 9148:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function addVector2Vector2(a, b) {
    return vec2_1.default(a.x + b.x, a.y + b.y);
}
exports.default = addVector2Vector2;
var vec2_1 = __importDefault(__webpack_require__(2185));


/***/ }),

/***/ 1016:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function addVector3Number(a, b) {
    return add_vector3_vector3_1.default(a, vec3_1.default(b));
}
exports.default = addVector3Number;
var vec3_1 = __importDefault(__webpack_require__(2860));
var add_vector3_vector3_1 = __importDefault(__webpack_require__(1131));


/***/ }),

/***/ 1131:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function addVector3Vector3(a, b) {
    return vec3_1.default(a.x + b.x, a.y + b.y, a.z + b.z);
}
exports.default = addVector3Vector3;
var vec3_1 = __importDefault(__webpack_require__(2860));


/***/ }),

/***/ 1823:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function addVector4Number(a, b) {
    return add_vector4_vector4_1.default(a, vec4_1.default(b));
}
exports.default = addVector4Number;
var vec4_1 = __importDefault(__webpack_require__(5570));
var add_vector4_vector4_1 = __importDefault(__webpack_require__(5323));


/***/ }),

/***/ 5323:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function addVector4Vector4(a, b) {
    return vec4_1.default(a.x + b.x, a.y + b.y, a.z + b.z, a.w + b.w);
}
exports.default = addVector4Vector4;
var vec4_1 = __importDefault(__webpack_require__(5570));


/***/ }),

/***/ 3796:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function add(a, b) {
    return deduce_1.default(a, 
    /* Matrix4x4 */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ null, 
    /* Matrix3x3 */ null, 
    /* Matrix2x2 */ null, 
    /* Vector4 */ null, 
    /* Vector3 */ null, 
    /* Vector2 */ null, 
    /* number */ function (b) { return add_matrix4x4_number_1.default(a, b); }); }, 
    /* Matrix3x3 */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ null, 
    /* Matrix3x3 */ null, 
    /* Matrix2x2 */ null, 
    /* Vector4 */ null, 
    /* Vector3 */ null, 
    /* Vector2 */ null, 
    /* number */ function (b) { return add_matrix3x3_number_1.default(a, b); }); }, 
    /* Matrix2x2 */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ null, 
    /* Matrix3x3 */ null, 
    /* Matrix2x2 */ null, 
    /* Vector4 */ null, 
    /* Vector3 */ null, 
    /* Vector2 */ null, 
    /* number */ function (b) { return add_matrix2x2_number_1.default(a, b); }); }, 
    /* Vector4 */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ null, 
    /* Matrix3x3 */ null, 
    /* Matrix2x2 */ null, 
    /* Vector4 */ function (b) { return add_vector4_vector4_1.default(a, b); }, 
    /* Vector3 */ function (b) { return add_vector3_vector3_1.default(vec3_1.default(a.x, a.y, a.z), b); }, // @todo: add conversion via vec
    /* Vector2 */ function (// @todo: add conversion via vec
    b) { return add_vector2_vector2_1.default(vec2_1.default(a.x, a.y), b); }, // @todo: add conversion via vec
    /* number */ function (// @todo: add conversion via vec
    b) { return add_vector4_number_1.default(a, b); }); }, 
    /* Vector3 */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ null, 
    /* Matrix3x3 */ null, 
    /* Matrix2x2 */ null, 
    /* Vector4 */ function (b) { return add_vector3_vector3_1.default(a, vec3_1.default(b.x, b.y, b.z)); }, // @todo: add conversion
    /* Vector3 */ function (// @todo: add conversion
    b) { return add_vector3_vector3_1.default(a, b); }, 
    /* Vector2 */ function (b) { return add_vector2_vector2_1.default(vec2_1.default(a.x, a.y), b); }, // @todo: add conversion
    /* number */ function (// @todo: add conversion
    b) { return add_vector3_number_1.default(a, b); }); }, 
    /* Vector2 */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ null, 
    /* Matrix3x3 */ null, 
    /* Matrix2x2 */ null, 
    /* Vector4 */ function (b) { return add_vector2_vector2_1.default(a, vec2_1.default(b.x, b.y)); }, // @todo: add conversion
    /* Vector3 */ function (// @todo: add conversion
    b) { return add_vector2_vector2_1.default(a, vec2_1.default(b.x, b.y)); }, // @todo: add conversion
    /* Vector2 */ function (// @todo: add conversion
    b) { return add_vector2_vector2_1.default(a, b); }, 
    /* number */ function (b) { return add_vector2_number_1.default(a, b); }); }, 
    /* number */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ function (b) { return add_number_matrix4x4_1.default(a, b); }, 
    /* Matrix3x3 */ function (b) { return add_number_matrix3x3_1.default(a, b); }, 
    /* Matrix2x2 */ function (b) { return add_number_matrix2x2_1.default(a, b); }, 
    /* Vector4 */ function (b) { return add_number_vector4_1.default(a, b); }, 
    /* Vector3 */ function (b) { return add_number_vector3_1.default(a, b); }, 
    /* Vector2 */ function (b) { return add_number_vector2_1.default(a, b); }, 
    /* number */ function (b) { return a + b; }); });
}
exports.default = add;
var add_number_vector2_1 = __importDefault(__webpack_require__(5121));
var add_number_vector3_1 = __importDefault(__webpack_require__(1669));
var add_number_vector4_1 = __importDefault(__webpack_require__(7418));
var add_vector2_number_1 = __importDefault(__webpack_require__(4192));
var add_vector2_vector2_1 = __importDefault(__webpack_require__(9148));
var add_vector3_number_1 = __importDefault(__webpack_require__(1016));
var add_vector3_vector3_1 = __importDefault(__webpack_require__(1131));
var add_vector4_number_1 = __importDefault(__webpack_require__(1823));
var add_vector4_vector4_1 = __importDefault(__webpack_require__(5323));
var add_number_matrix4x4_1 = __importDefault(__webpack_require__(6632));
var add_number_matrix3x3_1 = __importDefault(__webpack_require__(3759));
var add_number_matrix2x2_1 = __importDefault(__webpack_require__(6082));
var add_matrix4x4_number_1 = __importDefault(__webpack_require__(6848));
var add_matrix3x3_number_1 = __importDefault(__webpack_require__(3235));
var add_matrix2x2_number_1 = __importDefault(__webpack_require__(3610));
var vec3_1 = __importDefault(__webpack_require__(2860));
var vec2_1 = __importDefault(__webpack_require__(2185));
var deduce_1 = __importDefault(__webpack_require__(1122));


/***/ }),

/***/ 7807:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var matrix2x2_columns_1 = __importDefault(__webpack_require__(4589));
var ArrayMatrix2x2Columns = /** @class */ (function (_super) {
    __extends(ArrayMatrix2x2Columns, _super);
    function ArrayMatrix2x2Columns(_a) {
        var values = _a.values;
        var _this = _super.call(this) || this;
        _this.values = values;
        return _this;
    }
    Object.defineProperty(ArrayMatrix2x2Columns.prototype, 0, {
        get: function () {
            return this.getByIndex(0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayMatrix2x2Columns.prototype, 1, {
        get: function () {
            return this.getByIndex(1);
        },
        enumerable: false,
        configurable: true
    });
    ArrayMatrix2x2Columns.prototype.getByIndex = function (index) {
        var values = this.values;
        return new array_vector2_1.default({ values: values, offset: index * 2 });
    };
    return ArrayMatrix2x2Columns;
}(matrix2x2_columns_1.default));
exports.default = ArrayMatrix2x2Columns;
var array_vector2_1 = __importDefault(__webpack_require__(640));


/***/ }),

/***/ 513:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var matrix2x2_rows_1 = __importDefault(__webpack_require__(8087));
var ArrayMatrix2x2Rows = /** @class */ (function (_super) {
    __extends(ArrayMatrix2x2Rows, _super);
    function ArrayMatrix2x2Rows(_a) {
        var values = _a.values;
        var _this = _super.call(this) || this;
        _this.values = values;
        return _this;
    }
    Object.defineProperty(ArrayMatrix2x2Rows.prototype, 0, {
        get: function () {
            return this.getByIndex(0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayMatrix2x2Rows.prototype, 1, {
        get: function () {
            return this.getByIndex(1);
        },
        enumerable: false,
        configurable: true
    });
    ArrayMatrix2x2Rows.prototype.getByIndex = function (index) {
        var values = this.values;
        return new array_vector2_1.default({ values: values, offset: index, stride: 2 });
    };
    return ArrayMatrix2x2Rows;
}(matrix2x2_rows_1.default));
exports.default = ArrayMatrix2x2Rows;
var array_vector2_1 = __importDefault(__webpack_require__(640));


/***/ }),

/***/ 7797:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var matrix2x2_1 = __importDefault(__webpack_require__(8459));
var ArrayMatrix2x2 = /** @class */ (function (_super) {
    __extends(ArrayMatrix2x2, _super);
    function ArrayMatrix2x2(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.values, values = _c === void 0 ? undefined : _c;
        var _this = this;
        if (values === undefined)
            values = __spreadArray([], __read(ArrayMatrix2x2.default.values));
        _this = _super.call(this) || this;
        _this.values = values;
        return _this;
    }
    Object.defineProperty(ArrayMatrix2x2.prototype, "columns", {
        get: function () {
            var values = this.values;
            return new array_matrix2x2_columns_1.default({ values: values });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayMatrix2x2.prototype, "rows", {
        get: function () {
            var values = this.values;
            return new array_matrix2x2_rows_1.default({ values: values });
        },
        enumerable: false,
        configurable: true
    });
    ArrayMatrix2x2.default = {
        values: [
            1, 0,
            0, 1,
        ],
    };
    return ArrayMatrix2x2;
}(matrix2x2_1.default));
exports.default = ArrayMatrix2x2;
var array_matrix2x2_columns_1 = __importDefault(__webpack_require__(7807));
var array_matrix2x2_rows_1 = __importDefault(__webpack_require__(513));


/***/ }),

/***/ 4629:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var matrix3x3_columns_1 = __importDefault(__webpack_require__(4567));
var ArrayMatrix3x3Columns = /** @class */ (function (_super) {
    __extends(ArrayMatrix3x3Columns, _super);
    function ArrayMatrix3x3Columns(_a) {
        var values = _a.values;
        var _this = _super.call(this) || this;
        _this.values = values;
        return _this;
    }
    Object.defineProperty(ArrayMatrix3x3Columns.prototype, 0, {
        get: function () {
            return this.getByIndex(0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayMatrix3x3Columns.prototype, 1, {
        get: function () {
            return this.getByIndex(1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayMatrix3x3Columns.prototype, 2, {
        get: function () {
            return this.getByIndex(2);
        },
        enumerable: false,
        configurable: true
    });
    ArrayMatrix3x3Columns.prototype.getByIndex = function (index) {
        var values = this.values;
        return new array_vector3_1.default({ values: values, offset: index * 3 });
    };
    return ArrayMatrix3x3Columns;
}(matrix3x3_columns_1.default));
exports.default = ArrayMatrix3x3Columns;
var array_vector3_1 = __importDefault(__webpack_require__(4349));


/***/ }),

/***/ 1464:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var matrix3x3_rows_1 = __importDefault(__webpack_require__(5487));
var ArrayMatrix3x3Rows = /** @class */ (function (_super) {
    __extends(ArrayMatrix3x3Rows, _super);
    function ArrayMatrix3x3Rows(_a) {
        var values = _a.values;
        var _this = _super.call(this) || this;
        _this.values = values;
        return _this;
    }
    Object.defineProperty(ArrayMatrix3x3Rows.prototype, 0, {
        get: function () {
            return this.getByIndex(0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayMatrix3x3Rows.prototype, 1, {
        get: function () {
            return this.getByIndex(1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayMatrix3x3Rows.prototype, 2, {
        get: function () {
            return this.getByIndex(2);
        },
        enumerable: false,
        configurable: true
    });
    ArrayMatrix3x3Rows.prototype.getByIndex = function (index) {
        var values = this.values;
        return new array_vector3_1.default({ values: values, offset: index, stride: 3 });
    };
    return ArrayMatrix3x3Rows;
}(matrix3x3_rows_1.default));
exports.default = ArrayMatrix3x3Rows;
var array_vector3_1 = __importDefault(__webpack_require__(4349));


/***/ }),

/***/ 4293:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var matrix3x3_1 = __importDefault(__webpack_require__(3941));
var ArrayMatrix3x3 = /** @class */ (function (_super) {
    __extends(ArrayMatrix3x3, _super);
    function ArrayMatrix3x3(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.values, values = _c === void 0 ? undefined : _c;
        var _this = this;
        if (values === undefined)
            values = __spreadArray([], __read(ArrayMatrix3x3.default.values));
        _this = _super.call(this) || this;
        _this.values = values;
        return _this;
    }
    Object.defineProperty(ArrayMatrix3x3.prototype, "columns", {
        get: function () {
            var values = this.values;
            return new array_matrix3x3_columns_1.default({ values: values });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayMatrix3x3.prototype, "rows", {
        get: function () {
            var values = this.values;
            return new array_matrix3x3_rows_1.default({ values: values });
        },
        enumerable: false,
        configurable: true
    });
    ArrayMatrix3x3.default = {
        values: [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1,
        ],
    };
    return ArrayMatrix3x3;
}(matrix3x3_1.default));
exports.default = ArrayMatrix3x3;
var array_matrix3x3_columns_1 = __importDefault(__webpack_require__(4629));
var array_matrix3x3_rows_1 = __importDefault(__webpack_require__(1464));


/***/ }),

/***/ 9376:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var matrix4x4_columns_1 = __importDefault(__webpack_require__(4135));
var ArrayMatrix4x4Columns = /** @class */ (function (_super) {
    __extends(ArrayMatrix4x4Columns, _super);
    function ArrayMatrix4x4Columns(_a) {
        var values = _a.values;
        var _this = _super.call(this) || this;
        _this.values = values;
        return _this;
    }
    Object.defineProperty(ArrayMatrix4x4Columns.prototype, 0, {
        get: function () {
            return this.getByIndex(0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayMatrix4x4Columns.prototype, 1, {
        get: function () {
            return this.getByIndex(1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayMatrix4x4Columns.prototype, 2, {
        get: function () {
            return this.getByIndex(2);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayMatrix4x4Columns.prototype, 3, {
        get: function () {
            return this.getByIndex(3);
        },
        enumerable: false,
        configurable: true
    });
    ArrayMatrix4x4Columns.prototype.getByIndex = function (index) {
        var values = this.values;
        return new array_vector4_1.default({ values: values, offset: index * 4 });
    };
    return ArrayMatrix4x4Columns;
}(matrix4x4_columns_1.default));
exports.default = ArrayMatrix4x4Columns;
var array_vector4_1 = __importDefault(__webpack_require__(642));


/***/ }),

/***/ 7093:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var matrix4x4_rows_1 = __importDefault(__webpack_require__(5181));
var ArrayMatrix4x4Rows = /** @class */ (function (_super) {
    __extends(ArrayMatrix4x4Rows, _super);
    function ArrayMatrix4x4Rows(_a) {
        var values = _a.values;
        var _this = _super.call(this) || this;
        _this.values = values;
        return _this;
    }
    Object.defineProperty(ArrayMatrix4x4Rows.prototype, 0, {
        get: function () {
            return this.getByIndex(0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayMatrix4x4Rows.prototype, 1, {
        get: function () {
            return this.getByIndex(1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayMatrix4x4Rows.prototype, 2, {
        get: function () {
            return this.getByIndex(2);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayMatrix4x4Rows.prototype, 3, {
        get: function () {
            return this.getByIndex(3);
        },
        enumerable: false,
        configurable: true
    });
    ArrayMatrix4x4Rows.prototype.getByIndex = function (index) {
        var values = this.values;
        return new array_vector4_1.default({ values: values, offset: index, stride: 4 });
    };
    return ArrayMatrix4x4Rows;
}(matrix4x4_rows_1.default));
exports.default = ArrayMatrix4x4Rows;
var array_vector4_1 = __importDefault(__webpack_require__(642));


/***/ }),

/***/ 7578:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var matrix4x4_1 = __importDefault(__webpack_require__(2481));
var ArrayMatrix4x4 = /** @class */ (function (_super) {
    __extends(ArrayMatrix4x4, _super);
    function ArrayMatrix4x4(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.values, values = _c === void 0 ? undefined : _c;
        var _this = this;
        if (values === undefined)
            values = __spreadArray([], __read(ArrayMatrix4x4.default.values));
        _this = _super.call(this) || this;
        _this.values = values;
        return _this;
    }
    Object.defineProperty(ArrayMatrix4x4.prototype, "columns", {
        get: function () {
            var values = this.values;
            return new array_matrix4x4_columns_1.default({ values: values });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayMatrix4x4.prototype, "rows", {
        get: function () {
            var values = this.values;
            return new array_matrix4x4_rows_1.default({ values: values });
        },
        enumerable: false,
        configurable: true
    });
    ArrayMatrix4x4.default = {
        values: [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ],
    };
    return ArrayMatrix4x4;
}(matrix4x4_1.default));
exports.default = ArrayMatrix4x4;
var array_matrix4x4_columns_1 = __importDefault(__webpack_require__(9376));
var array_matrix4x4_rows_1 = __importDefault(__webpack_require__(7093));


/***/ }),

/***/ 640:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var vector2_1 = __importDefault(__webpack_require__(3155));
var ArrayVector2 = /** @class */ (function (_super) {
    __extends(ArrayVector2, _super);
    function ArrayVector2(_a) {
        var _b = _a === void 0 ? {} : _a, values = _b.values, _c = _b.offset, offset = _c === void 0 ? ArrayVector2.default.offset : _c, _d = _b.stride, stride = _d === void 0 ? ArrayVector2.default.stride : _d;
        var _this = this;
        if (!values)
            values = ArrayVector2.default.values.slice();
        _this = _super.call(this) || this;
        _this.values = values;
        _this.offset = offset;
        _this.stride = stride;
        return _this;
    }
    Object.defineProperty(ArrayVector2.prototype, "x", {
        get: function () {
            return this.getByIndex(ArrayVector2.index.x);
        },
        set: function (x) {
            this.setByIndex(ArrayVector2.index.x, x);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayVector2.prototype, "y", {
        get: function () {
            return this.getByIndex(ArrayVector2.index.y);
        },
        set: function (y) {
            this.setByIndex(ArrayVector2.index.y, y);
        },
        enumerable: false,
        configurable: true
    });
    ArrayVector2.prototype.getByIndex = function (index) {
        var _a = this, values = _a.values, offset = _a.offset, stride = _a.stride;
        return values[offset + stride * index];
    };
    ArrayVector2.prototype.setByIndex = function (index, value) {
        var _a = this, values = _a.values, offset = _a.offset, stride = _a.stride;
        values[offset + stride * index] = value;
    };
    ArrayVector2.default = __assign(__assign({}, vector2_1.default.default), { values: [vector2_1.default.default.x, vector2_1.default.default.y], offset: 0, stride: 1 });
    ArrayVector2.index = {
        x: 0,
        y: 1,
    };
    return ArrayVector2;
}(vector2_1.default));
exports.default = ArrayVector2;


/***/ }),

/***/ 4349:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var vector3_1 = __importDefault(__webpack_require__(5312));
var ArrayVector3 = /** @class */ (function (_super) {
    __extends(ArrayVector3, _super);
    function ArrayVector3(_a) {
        var _b = _a === void 0 ? {} : _a, values = _b.values, _c = _b.offset, offset = _c === void 0 ? ArrayVector3.default.offset : _c, _d = _b.stride, stride = _d === void 0 ? ArrayVector3.default.stride : _d;
        var _this = this;
        if (!values)
            values = ArrayVector3.default.values.slice();
        _this = _super.call(this) || this;
        _this.values = values;
        _this.offset = offset;
        _this.stride = stride;
        return _this;
    }
    Object.defineProperty(ArrayVector3.prototype, "x", {
        get: function () {
            return this.getByIndex(ArrayVector3.index.x);
        },
        set: function (x) {
            this.setByIndex(ArrayVector3.index.x, x);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayVector3.prototype, "y", {
        get: function () {
            return this.getByIndex(ArrayVector3.index.y);
        },
        set: function (y) {
            this.setByIndex(ArrayVector3.index.y, y);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayVector3.prototype, "z", {
        get: function () {
            return this.getByIndex(ArrayVector3.index.z);
        },
        set: function (z) {
            this.setByIndex(ArrayVector3.index.z, z);
        },
        enumerable: false,
        configurable: true
    });
    ArrayVector3.prototype.getByIndex = function (index) {
        var _a = this, values = _a.values, offset = _a.offset, stride = _a.stride;
        return values[offset + stride * index];
    };
    ArrayVector3.prototype.setByIndex = function (index, value) {
        var _a = this, values = _a.values, offset = _a.offset, stride = _a.stride;
        values[offset + stride * index] = value;
    };
    ArrayVector3.default = __assign(__assign({}, vector3_1.default.default), { values: [vector3_1.default.default.x, vector3_1.default.default.y, vector3_1.default.default.z], offset: 0, stride: 1 });
    ArrayVector3.index = {
        x: 0,
        y: 1,
        z: 2,
    };
    return ArrayVector3;
}(vector3_1.default));
exports.default = ArrayVector3;


/***/ }),

/***/ 642:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var vector4_1 = __importDefault(__webpack_require__(8888));
var ArrayVector4 = /** @class */ (function (_super) {
    __extends(ArrayVector4, _super);
    function ArrayVector4(_a) {
        var _b = _a === void 0 ? {} : _a, values = _b.values, _c = _b.offset, offset = _c === void 0 ? ArrayVector4.default.offset : _c, _d = _b.stride, stride = _d === void 0 ? ArrayVector4.default.stride : _d;
        var _this = this;
        if (!values)
            values = ArrayVector4.default.values.slice();
        _this = _super.call(this) || this;
        _this.values = values;
        _this.offset = offset;
        _this.stride = stride;
        return _this;
    }
    Object.defineProperty(ArrayVector4.prototype, "x", {
        get: function () {
            return this.getByIndex(ArrayVector4.index.x);
        },
        set: function (x) {
            this.setByIndex(ArrayVector4.index.x, x);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayVector4.prototype, "y", {
        get: function () {
            return this.getByIndex(ArrayVector4.index.y);
        },
        set: function (y) {
            this.setByIndex(ArrayVector4.index.y, y);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayVector4.prototype, "z", {
        get: function () {
            return this.getByIndex(ArrayVector4.index.z);
        },
        set: function (z) {
            this.setByIndex(ArrayVector4.index.z, z);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayVector4.prototype, "w", {
        get: function () {
            return this.getByIndex(ArrayVector4.index.w);
        },
        set: function (w) {
            this.setByIndex(ArrayVector4.index.w, w);
        },
        enumerable: false,
        configurable: true
    });
    ArrayVector4.prototype.getByIndex = function (index) {
        var _a = this, values = _a.values, offset = _a.offset, stride = _a.stride;
        return values[offset + stride * index];
    };
    ArrayVector4.prototype.setByIndex = function (index, value) {
        var _a = this, values = _a.values, offset = _a.offset, stride = _a.stride;
        values[offset + stride * index] = value;
    };
    ArrayVector4.default = __assign(__assign({}, vector4_1.default.default), { values: [vector4_1.default.default.x, vector4_1.default.default.y, vector4_1.default.default.z, vector4_1.default.default.w], offset: 0, stride: 1 });
    ArrayVector4.index = {
        x: 0,
        y: 1,
        z: 2,
        w: 3,
    };
    return ArrayVector4;
}(vector4_1.default));
exports.default = ArrayVector4;


/***/ }),

/***/ 1122:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function deduce(s, matrix4x4Handler, matrix3x3Handler, matrix2x2Handler, vector4Handler, vector3Handler, vector2Handler, numberHandler) {
    if (typeof s === 'number')
        return numberHandler(s);
    var x = ('x' in s && s.x) || (0 in s && s[0]);
    if (typeof x === 'number') {
        var y_1 = ('y' in s && s.y) || (1 in s && s[1]);
        var z_1 = ('z' in s && s.z) || (2 in s && s[2]);
        if (typeof z_1 !== 'number')
            return vector2Handler(vec2_1.default(x, y_1));
        var w_1 = ('w' in s && s.w) || (3 in s && s[3]);
        if (typeof w_1 === 'number')
            return vector4Handler(vec4_1.default(x, y_1, z_1, w_1));
        return vector3Handler(vec3_1.default(x, y_1, z_1));
    }
    var xx = ('x' in x && x.x) || (0 in x && x[0]);
    var xy = ('y' in x && x.y) || (1 in x && x[1]);
    var y = ('y' in s && s.y) || (1 in s && s[1]);
    var yx = ('x' in y && y.x) || (0 in y && y[0]);
    var yy = ('y' in y && y.y) || (1 in y && y[1]);
    var z = ('z' in s && s.z) || (2 in s && s[2]);
    if (z === false) {
        return matrix2x2Handler(mat2_1.default(xx, xy, yx, yy));
    }
    var xz = ('z' in x && x.z) || (2 in x && x[2]);
    var yz = ('z' in y && y.z) || (2 in y && y[2]);
    var zx = ('x' in z && z.x) || (0 in z && z[0]);
    var zy = ('y' in z && z.y) || (1 in z && z[1]);
    var zz = ('z' in z && z.z) || (2 in z && z[2]);
    var w = ('w' in s && s.w) || (3 in s && s[3]);
    if (w === false) {
        return matrix3x3Handler(mat3_1.default(xx, xy, xz, yx, yy, yz, zx, zy, zz));
    }
    var yw = ('w' in y && y.w) || (3 in y && y[3]);
    var xw = ('w' in x && x.w) || (3 in x && x[3]);
    var zw = ('w' in z && z.w) || (3 in z && z[3]);
    var wx = ('x' in w && w.x) || (0 in w && w[0]);
    var wy = ('y' in w && w.y) || (1 in w && w[1]);
    var wz = ('z' in w && w.z) || (2 in w && w[2]);
    var ww = ('w' in w && w.w) || (3 in w && w[3]);
    return matrix4x4Handler(mat4_1.default(xx, xy, xz, xw, yx, yy, yz, yw, zx, zy, zz, zw, wx, wy, wz, ww));
}
exports.default = deduce;
var vec4_1 = __importDefault(__webpack_require__(5570));
var vec3_1 = __importDefault(__webpack_require__(2860));
var vec2_1 = __importDefault(__webpack_require__(2185));
var mat2_1 = __importDefault(__webpack_require__(3194));
var mat3_1 = __importDefault(__webpack_require__(1180));
var mat4_1 = __importDefault(__webpack_require__(8068));


/***/ }),

/***/ 2794:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function divideMatrix2x2Number(a, b) {
    return mat2_1.default(a[0][0] / b, a[0][1] / b, a[1][0] / b, a[1][1] / b);
}
exports.default = divideMatrix2x2Number;
var mat2_1 = __importDefault(__webpack_require__(3194));


/***/ }),

/***/ 3609:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function divideMatrix3x3Number(a, b) {
    return mat3_1.default(a[0][0] / b, a[0][1] / b, a[0][2] / b, a[1][0] / b, a[1][1] / b, a[1][2] / b, a[2][0] / b, a[2][1] / b, a[2][2] / b);
}
exports.default = divideMatrix3x3Number;
var mat3_1 = __importDefault(__webpack_require__(1180));


/***/ }),

/***/ 8186:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function divideMatrix4x4Number(a, b) {
    return mat4_1.default(a[0][0] / b, a[0][1] / b, a[0][2] / b, a[0][3] / b, a[1][0] / b, a[1][1] / b, a[1][2] / b, a[1][3] / b, a[2][0] / b, a[2][1] / b, a[2][2] / b, a[2][3] / b, a[3][0] / b, a[3][1] / b, a[3][2] / b, a[3][3] / b);
}
exports.default = divideMatrix4x4Number;
var mat4_1 = __importDefault(__webpack_require__(8068));


/***/ }),

/***/ 2695:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function divideNumberMatrix2x2(a, b) {
    return mat2_1.default(a / b[0][0], a / b[0][1], a / b[1][0], a / b[1][1]);
}
exports.default = divideNumberMatrix2x2;
var mat2_1 = __importDefault(__webpack_require__(3194));


/***/ }),

/***/ 9705:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function divideNumberMatrix3x3(a, b) {
    return mat3_1.default(a / b[0][0], a / b[0][1], a / b[0][2], a / b[1][0], a / b[1][1], a / b[1][2], a / b[2][0], a / b[2][1], a / b[2][2]);
}
exports.default = divideNumberMatrix3x3;
var mat3_1 = __importDefault(__webpack_require__(1180));


/***/ }),

/***/ 9923:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function divideNumberMatrix4x4(a, b) {
    return mat4_1.default(a / b[0][0], a / b[0][1], a / b[0][2], a / b[0][3], a / b[1][0], a / b[1][1], a / b[1][2], a / b[1][3], a / b[2][0], a / b[2][1], a / b[2][2], a / b[2][3], a / b[3][0], a / b[3][1], a / b[3][2], a / b[3][3]);
}
exports.default = divideNumberMatrix4x4;
var mat4_1 = __importDefault(__webpack_require__(8068));


/***/ }),

/***/ 1205:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function divideNumberVector2(a, b) {
    return divide_vector2_vector2_1.default(vec2_1.default(a), b);
}
exports.default = divideNumberVector2;
var vec2_1 = __importDefault(__webpack_require__(2185));
var divide_vector2_vector2_1 = __importDefault(__webpack_require__(1634));


/***/ }),

/***/ 6330:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function divideNumberVector3(a, b) {
    return divide_vector3_vector3_1.default(vec3_1.default(a), b);
}
exports.default = divideNumberVector3;
var vec3_1 = __importDefault(__webpack_require__(2860));
var divide_vector3_vector3_1 = __importDefault(__webpack_require__(4058));


/***/ }),

/***/ 7693:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function divideNumberVector4(a, b) {
    return divide_vector4_vector4_1.default(vec4_1.default(a), b);
}
exports.default = divideNumberVector4;
var vec4_1 = __importDefault(__webpack_require__(5570));
var divide_vector4_vector4_1 = __importDefault(__webpack_require__(3034));


/***/ }),

/***/ 124:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function divideVector2Number(a, b) {
    return divide_vector2_vector2_1.default(a, vec2_1.default(b));
}
exports.default = divideVector2Number;
var vec2_1 = __importDefault(__webpack_require__(2185));
var divide_vector2_vector2_1 = __importDefault(__webpack_require__(1634));


/***/ }),

/***/ 1634:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function divideVector2Vector2(a, b) {
    return vec2_1.default(a.x / b.x, a.y / b.y);
}
exports.default = divideVector2Vector2;
var vec2_1 = __importDefault(__webpack_require__(2185));


/***/ }),

/***/ 8198:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function divideVector3Number(a, b) {
    return divide_vector3_vector3_1.default(a, vec3_1.default(b));
}
exports.default = divideVector3Number;
var vec3_1 = __importDefault(__webpack_require__(2860));
var divide_vector3_vector3_1 = __importDefault(__webpack_require__(4058));


/***/ }),

/***/ 4058:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function divideVector3Vector3(a, b) {
    return vec3_1.default(a.x / b.x, a.y / b.y, a.z / b.z);
}
exports.default = divideVector3Vector3;
var vec3_1 = __importDefault(__webpack_require__(2860));


/***/ }),

/***/ 4540:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function divideVector4Number(a, b) {
    return divide_vector4_vector4_1.default(a, vec4_1.default(b));
}
exports.default = divideVector4Number;
var vec4_1 = __importDefault(__webpack_require__(5570));
var divide_vector4_vector4_1 = __importDefault(__webpack_require__(3034));


/***/ }),

/***/ 3034:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function divideVector4Vector4(a, b) {
    return vec4_1.default(a.x / b.x, a.y / b.y, a.z / b.z, a.w / b.w);
}
exports.default = divideVector4Vector4;
var vec4_1 = __importDefault(__webpack_require__(5570));


/***/ }),

/***/ 8981:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function divide(a, b) {
    return deduce_1.default(a, 
    /* Matrix4x4 */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ null, 
    /* Matrix3x3 */ null, 
    /* Matrix2x2 */ null, 
    /* Vector4 */ null, 
    /* Vector3 */ null, 
    /* Vector2 */ null, 
    /* number */ function (b) { return divide_matrix4x4_number_1.default(a, b); }); }, 
    /* Matrix3x3 */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ null, 
    /* Matrix3x3 */ null, 
    /* Matrix2x2 */ null, 
    /* Vector4 */ null, 
    /* Vector3 */ null, 
    /* Vector2 */ null, 
    /* number */ function (b) { return divide_matrix3x3_number_1.default(a, b); }); }, 
    /* Matrix2x2 */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ null, 
    /* Matrix3x3 */ null, 
    /* Matrix2x2 */ null, 
    /* Vector4 */ null, 
    /* Vector3 */ null, 
    /* Vector2 */ null, 
    /* number */ function (b) { return divide_matrix2x2_number_1.default(a, b); }); }, 
    /* Vector4 */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ null, 
    /* Matrix3x3 */ null, 
    /* Matrix2x2 */ null, 
    /* Vector4 */ function (b) { return divide_vector4_vector4_1.default(a, b); }, 
    /* Vector3 */ function (b) { return divide_vector3_vector3_1.default(vec3_1.default(a.x, a.y, a.z), b); }, // @todo: divide conversion via vec
    /* Vector2 */ function (// @todo: divide conversion via vec
    b) { return divide_vector2_vector2_1.default(vec2_1.default(a.x, a.y), b); }, // @todo: divide conversion via vec
    /* number */ function (// @todo: divide conversion via vec
    b) { return divide_vector4_number_1.default(a, b); }); }, 
    /* Vector3 */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ null, 
    /* Matrix3x3 */ null, 
    /* Matrix2x2 */ null, 
    /* Vector4 */ function (b) { return divide_vector3_vector3_1.default(a, vec3_1.default(b.x, b.y, b.z)); }, // @todo: divide conversion
    /* Vector3 */ function (// @todo: divide conversion
    b) { return divide_vector3_vector3_1.default(a, b); }, 
    /* Vector2 */ function (b) { return divide_vector2_vector2_1.default(vec2_1.default(a.x, a.y), b); }, // @todo: divide conversion
    /* number */ function (// @todo: divide conversion
    b) { return divide_vector3_number_1.default(a, b); }); }, 
    /* Vector2 */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ null, 
    /* Matrix3x3 */ null, 
    /* Matrix2x2 */ null, 
    /* Vector4 */ function (b) { return divide_vector2_vector2_1.default(a, vec2_1.default(b.x, b.y)); }, // @todo: divide conversion
    /* Vector3 */ function (// @todo: divide conversion
    b) { return divide_vector2_vector2_1.default(a, vec2_1.default(b.x, b.y)); }, // @todo: divide conversion
    /* Vector2 */ function (// @todo: divide conversion
    b) { return divide_vector2_vector2_1.default(a, b); }, 
    /* number */ function (b) { return divide_vector2_number_1.default(a, b); }); }, 
    /* number */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ function (b) { return divide_number_matrix4x4_1.default(a, b); }, 
    /* Matrix3x3 */ function (b) { return divide_number_matrix3x3_1.default(a, b); }, 
    /* Matrix2x2 */ function (b) { return divide_number_matrix2x2_1.default(a, b); }, 
    /* Vector4 */ function (b) { return divide_number_vector4_1.default(a, b); }, 
    /* Vector3 */ function (b) { return divide_number_vector3_1.default(a, b); }, 
    /* Vector2 */ function (b) { return divide_number_vector2_1.default(a, b); }, 
    /* number */ function (b) { return a / b; }); });
}
exports.default = divide;
var divide_number_vector2_1 = __importDefault(__webpack_require__(1205));
var divide_number_vector3_1 = __importDefault(__webpack_require__(6330));
var divide_number_vector4_1 = __importDefault(__webpack_require__(7693));
var divide_vector2_number_1 = __importDefault(__webpack_require__(124));
var divide_vector2_vector2_1 = __importDefault(__webpack_require__(1634));
var divide_vector3_number_1 = __importDefault(__webpack_require__(8198));
var divide_vector3_vector3_1 = __importDefault(__webpack_require__(4058));
var divide_vector4_number_1 = __importDefault(__webpack_require__(4540));
var divide_vector4_vector4_1 = __importDefault(__webpack_require__(3034));
var divide_number_matrix4x4_1 = __importDefault(__webpack_require__(9923));
var divide_number_matrix3x3_1 = __importDefault(__webpack_require__(9705));
var divide_number_matrix2x2_1 = __importDefault(__webpack_require__(2695));
var divide_matrix4x4_number_1 = __importDefault(__webpack_require__(8186));
var divide_matrix3x3_number_1 = __importDefault(__webpack_require__(3609));
var divide_matrix2x2_number_1 = __importDefault(__webpack_require__(2794));
var vec3_1 = __importDefault(__webpack_require__(2860));
var vec2_1 = __importDefault(__webpack_require__(2185));
var deduce_1 = __importDefault(__webpack_require__(1122));


/***/ }),

/***/ 2965:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function dotVector2Vector2(a, b) {
    return a.x * b.x + a.y * b.y;
}
exports.default = dotVector2Vector2;


/***/ }),

/***/ 7635:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function dotVector3Vector3(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
}
exports.default = dotVector3Vector3;


/***/ }),

/***/ 6869:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function dotVector4Vector4(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
}
exports.default = dotVector4Vector4;


/***/ }),

/***/ 5111:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function dot(a, b) {
    return deduce_1.default(a, null, null, null, function (a) { return deduce_1.default(b, null, null, null, function (b) { return dot_vector4_vector4_1.default(a, b); }, function (b) { return dot_vector3_vector3_1.default(vec3_1.default(a.x, a.y, a.z), b); }, function (b) { return dot_vector2_vector2_1.default(vec2_1.default(a.x, a.y), b); }, null); }, function (a) { return deduce_1.default(b, null, null, null, function (b) { return dot_vector3_vector3_1.default(a, vec3_1.default(b.x, b.y, b.z)); }, function (b) { return dot_vector3_vector3_1.default(a, b); }, function (b) { return dot_vector2_vector2_1.default(vec2_1.default(a.x, a.y), b); }, null); }, function (a) { return deduce_1.default(b, null, null, null, function (b) { return dot_vector2_vector2_1.default(a, vec2_1.default(b.x, b.y)); }, function (b) { return dot_vector2_vector2_1.default(a, vec2_1.default(b.x, b.y)); }, function (b) { return dot_vector2_vector2_1.default(a, b); }, null); }, null);
}
exports.default = dot;
var deduce_1 = __importDefault(__webpack_require__(1122));
var dot_vector2_vector2_1 = __importDefault(__webpack_require__(2965));
var dot_vector3_vector3_1 = __importDefault(__webpack_require__(7635));
var dot_vector4_vector4_1 = __importDefault(__webpack_require__(6869));
var vec2_1 = __importDefault(__webpack_require__(2185));
var vec3_1 = __importDefault(__webpack_require__(2860));


/***/ }),

/***/ 4000:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sub = exports.subtract = exports.add = exports.neg = exports.negate = exports.inverseMatrix4x4 = exports.inverseMatrix3x3 = exports.inverseMatrix2x2 = exports.transposeMatrix4x4 = exports.transposeMatrix3x3 = exports.transposeMatrix2x2 = exports.matrix4x4FromMatrix3x3 = exports.matrix4x4FromMatrix2x2 = exports.matrix3x3FromMatrix4x4 = exports.matrix3x3FromMatrix2x2 = exports.matrix2x2FromMatrix3x3 = exports.matrix2x2FromMatrix4x4 = exports.mat4 = exports.mat3 = exports.mat2 = exports.vec4 = exports.vec3 = exports.vec2 = exports.ArrayMatrix4x4Rows = exports.ArrayMatrix3x3Rows = exports.ArrayMatrix2x2Rows = exports.ArrayMatrix4x4Columns = exports.ArrayMatrix3x3Columns = exports.ArrayMatrix2x2Columns = exports.ArrayMatrix4x4 = exports.ArrayMatrix3x3 = exports.ArrayMatrix2x2 = exports.ArrayVector4 = exports.ArrayVector3 = exports.ArrayVector2 = exports.NumberVector4 = exports.NumberVector3 = exports.NumberVector2 = exports.Matrix4x4Rows = exports.Matrix3x3Rows = exports.Matrix2x2Rows = exports.Matrix4x4Columns = exports.Matrix3x3Columns = exports.Matrix2x2Columns = exports.Matrix4x4 = exports.Matrix3x3 = exports.Matrix2x2 = exports.Vector4 = exports.Vector3 = exports.Vector2 = void 0;
exports.multiplyNumberVector4 = exports.multiplyNumberVector3 = exports.multiplyNumberVector2 = exports.subtractMatrix4x4Number = exports.subtractMatrix3x3Number = exports.subtractMatrix2x2Number = exports.subtractVector4Vector4 = exports.subtractVector4Number = exports.subtractVector3Vector3 = exports.subtractVector3Number = exports.subtractVector2Vector2 = exports.subtractVector2Number = exports.subtractNumberMatrix4x4 = exports.subtractNumberMatrix3x3 = exports.subtractNumberMatrix2x2 = exports.subtractNumberVector4 = exports.subtractNumberVector3 = exports.subtractNumberVector2 = exports.addMatrix4x4Number = exports.addMatrix3x3Number = exports.addMatrix2x2Number = exports.addVector4Vector4 = exports.addVector4Number = exports.addVector3Vector3 = exports.addVector3Number = exports.addVector2Vector2 = exports.addVector2Number = exports.addNumberMatrix4x4 = exports.addNumberMatrix3x3 = exports.addNumberMatrix2x2 = exports.addNumberVector4 = exports.addNumberVector3 = exports.addNumberVector2 = exports.negateVector4 = exports.negateVector3 = exports.negateVector2 = exports.inv = exports.inverse = exports.norm = exports.mag = exports.magnitude = exports.len = exports.length = exports.sqr = exports.square = exports.dot = exports.div = exports.divide = exports.mul = exports.multiply = void 0;
exports.translate = exports.lengthVector4 = exports.lengthVector3 = exports.lengthVector2 = exports.squareVector4 = exports.squareVector3 = exports.squareVector2 = exports.dotVector4Vector4 = exports.dotVector3Vector3 = exports.dotVector2Vector2 = exports.divideMatrix4x4Number = exports.divideMatrix3x3Number = exports.divideMatrix2x2Number = exports.divideVector4Vector4 = exports.divideVector4Number = exports.divideVector3Vector3 = exports.divideVector3Number = exports.divideVector2Vector2 = exports.divideVector2Number = exports.divideNumberMatrix4x4 = exports.divideNumberMatrix3x3 = exports.divideNumberMatrix2x2 = exports.divideNumberVector4 = exports.divideNumberVector3 = exports.divideNumberVector2 = exports.multiplyMatrix4x4Matrix4x4 = exports.multiplyMatrix4x4Vector4 = exports.multiplyMatrix4x4Number = exports.multiplyMatrix3x3Matrix3x3 = exports.multiplyMatrix3x3Vector3 = exports.multiplyMatrix3x3Number = exports.multiplyMatrix2x2Matrix2x2 = exports.multiplyMatrix2x2Vector2 = exports.multiplyMatrix2x2Number = exports.multiplyVector4Vector4 = exports.multiplyVector4Number = exports.multiplyVector3Vector3 = exports.multiplyVector3Number = exports.multiplyVector2Vector2 = exports.multiplyVector2Number = exports.multiplyNumberMatrix4x4 = exports.multiplyNumberMatrix3x3 = exports.multiplyNumberMatrix2x2 = void 0;
var vector2_1 = __webpack_require__(3155);
Object.defineProperty(exports, "Vector2", ({ enumerable: true, get: function () { return __importDefault(vector2_1).default; } }));
var vector3_1 = __webpack_require__(5312);
Object.defineProperty(exports, "Vector3", ({ enumerable: true, get: function () { return __importDefault(vector3_1).default; } }));
var vector4_1 = __webpack_require__(8888);
Object.defineProperty(exports, "Vector4", ({ enumerable: true, get: function () { return __importDefault(vector4_1).default; } }));
var matrix2x2_1 = __webpack_require__(8459);
Object.defineProperty(exports, "Matrix2x2", ({ enumerable: true, get: function () { return __importDefault(matrix2x2_1).default; } }));
var matrix3x3_1 = __webpack_require__(3941);
Object.defineProperty(exports, "Matrix3x3", ({ enumerable: true, get: function () { return __importDefault(matrix3x3_1).default; } }));
var matrix4x4_1 = __webpack_require__(2481);
Object.defineProperty(exports, "Matrix4x4", ({ enumerable: true, get: function () { return __importDefault(matrix4x4_1).default; } }));
var matrix2x2_columns_1 = __webpack_require__(4589);
Object.defineProperty(exports, "Matrix2x2Columns", ({ enumerable: true, get: function () { return __importDefault(matrix2x2_columns_1).default; } }));
var matrix3x3_columns_1 = __webpack_require__(4567);
Object.defineProperty(exports, "Matrix3x3Columns", ({ enumerable: true, get: function () { return __importDefault(matrix3x3_columns_1).default; } }));
var matrix4x4_columns_1 = __webpack_require__(4135);
Object.defineProperty(exports, "Matrix4x4Columns", ({ enumerable: true, get: function () { return __importDefault(matrix4x4_columns_1).default; } }));
var matrix2x2_rows_1 = __webpack_require__(8087);
Object.defineProperty(exports, "Matrix2x2Rows", ({ enumerable: true, get: function () { return __importDefault(matrix2x2_rows_1).default; } }));
var matrix3x3_rows_1 = __webpack_require__(5487);
Object.defineProperty(exports, "Matrix3x3Rows", ({ enumerable: true, get: function () { return __importDefault(matrix3x3_rows_1).default; } }));
var matrix4x4_rows_1 = __webpack_require__(5181);
Object.defineProperty(exports, "Matrix4x4Rows", ({ enumerable: true, get: function () { return __importDefault(matrix4x4_rows_1).default; } }));
var number_vector2_1 = __webpack_require__(2630);
Object.defineProperty(exports, "NumberVector2", ({ enumerable: true, get: function () { return __importDefault(number_vector2_1).default; } }));
var number_vector3_1 = __webpack_require__(1615);
Object.defineProperty(exports, "NumberVector3", ({ enumerable: true, get: function () { return __importDefault(number_vector3_1).default; } }));
var number_vector4_1 = __webpack_require__(4634);
Object.defineProperty(exports, "NumberVector4", ({ enumerable: true, get: function () { return __importDefault(number_vector4_1).default; } }));
var array_vector2_1 = __webpack_require__(640);
Object.defineProperty(exports, "ArrayVector2", ({ enumerable: true, get: function () { return __importDefault(array_vector2_1).default; } }));
var array_vector3_1 = __webpack_require__(4349);
Object.defineProperty(exports, "ArrayVector3", ({ enumerable: true, get: function () { return __importDefault(array_vector3_1).default; } }));
var array_vector4_1 = __webpack_require__(642);
Object.defineProperty(exports, "ArrayVector4", ({ enumerable: true, get: function () { return __importDefault(array_vector4_1).default; } }));
var array_matrix2x2_1 = __webpack_require__(7797);
Object.defineProperty(exports, "ArrayMatrix2x2", ({ enumerable: true, get: function () { return __importDefault(array_matrix2x2_1).default; } }));
var array_matrix3x3_1 = __webpack_require__(4293);
Object.defineProperty(exports, "ArrayMatrix3x3", ({ enumerable: true, get: function () { return __importDefault(array_matrix3x3_1).default; } }));
var array_matrix4x4_1 = __webpack_require__(7578);
Object.defineProperty(exports, "ArrayMatrix4x4", ({ enumerable: true, get: function () { return __importDefault(array_matrix4x4_1).default; } }));
var array_matrix2x2_columns_1 = __webpack_require__(7807);
Object.defineProperty(exports, "ArrayMatrix2x2Columns", ({ enumerable: true, get: function () { return __importDefault(array_matrix2x2_columns_1).default; } }));
var array_matrix3x3_columns_1 = __webpack_require__(4629);
Object.defineProperty(exports, "ArrayMatrix3x3Columns", ({ enumerable: true, get: function () { return __importDefault(array_matrix3x3_columns_1).default; } }));
var array_matrix4x4_columns_1 = __webpack_require__(9376);
Object.defineProperty(exports, "ArrayMatrix4x4Columns", ({ enumerable: true, get: function () { return __importDefault(array_matrix4x4_columns_1).default; } }));
var array_matrix2x2_rows_1 = __webpack_require__(513);
Object.defineProperty(exports, "ArrayMatrix2x2Rows", ({ enumerable: true, get: function () { return __importDefault(array_matrix2x2_rows_1).default; } }));
var array_matrix3x3_rows_1 = __webpack_require__(1464);
Object.defineProperty(exports, "ArrayMatrix3x3Rows", ({ enumerable: true, get: function () { return __importDefault(array_matrix3x3_rows_1).default; } }));
var array_matrix4x4_rows_1 = __webpack_require__(7093);
Object.defineProperty(exports, "ArrayMatrix4x4Rows", ({ enumerable: true, get: function () { return __importDefault(array_matrix4x4_rows_1).default; } }));
var vec2_1 = __webpack_require__(2185);
Object.defineProperty(exports, "vec2", ({ enumerable: true, get: function () { return __importDefault(vec2_1).default; } }));
var vec3_1 = __webpack_require__(2860);
Object.defineProperty(exports, "vec3", ({ enumerable: true, get: function () { return __importDefault(vec3_1).default; } }));
var vec4_1 = __webpack_require__(5570);
Object.defineProperty(exports, "vec4", ({ enumerable: true, get: function () { return __importDefault(vec4_1).default; } }));
var mat2_1 = __webpack_require__(3194);
Object.defineProperty(exports, "mat2", ({ enumerable: true, get: function () { return __importDefault(mat2_1).default; } }));
var mat3_1 = __webpack_require__(1180);
Object.defineProperty(exports, "mat3", ({ enumerable: true, get: function () { return __importDefault(mat3_1).default; } }));
var mat4_1 = __webpack_require__(8068);
Object.defineProperty(exports, "mat4", ({ enumerable: true, get: function () { return __importDefault(mat4_1).default; } }));
var matrix2x2_from_matrix4x4_1 = __webpack_require__(2638);
Object.defineProperty(exports, "matrix2x2FromMatrix4x4", ({ enumerable: true, get: function () { return __importDefault(matrix2x2_from_matrix4x4_1).default; } }));
var matrix2x2_from_matrix3x3_1 = __webpack_require__(5431);
Object.defineProperty(exports, "matrix2x2FromMatrix3x3", ({ enumerable: true, get: function () { return __importDefault(matrix2x2_from_matrix3x3_1).default; } }));
var matrix3x3_from_matrix2x2_1 = __webpack_require__(2757);
Object.defineProperty(exports, "matrix3x3FromMatrix2x2", ({ enumerable: true, get: function () { return __importDefault(matrix3x3_from_matrix2x2_1).default; } }));
var matrix3x3_from_matrix4x4_1 = __webpack_require__(8537);
Object.defineProperty(exports, "matrix3x3FromMatrix4x4", ({ enumerable: true, get: function () { return __importDefault(matrix3x3_from_matrix4x4_1).default; } }));
var matrix4x4_from_matrix2x2_1 = __webpack_require__(6503);
Object.defineProperty(exports, "matrix4x4FromMatrix2x2", ({ enumerable: true, get: function () { return __importDefault(matrix4x4_from_matrix2x2_1).default; } }));
var matrix4x4_from_matrix3x3_1 = __webpack_require__(6153);
Object.defineProperty(exports, "matrix4x4FromMatrix3x3", ({ enumerable: true, get: function () { return __importDefault(matrix4x4_from_matrix3x3_1).default; } }));
var transpose_matrix2x2_1 = __webpack_require__(669);
Object.defineProperty(exports, "transposeMatrix2x2", ({ enumerable: true, get: function () { return __importDefault(transpose_matrix2x2_1).default; } }));
var transpose_matrix3x3_1 = __webpack_require__(8756);
Object.defineProperty(exports, "transposeMatrix3x3", ({ enumerable: true, get: function () { return __importDefault(transpose_matrix3x3_1).default; } }));
var transpose_matrix4x4_1 = __webpack_require__(3129);
Object.defineProperty(exports, "transposeMatrix4x4", ({ enumerable: true, get: function () { return __importDefault(transpose_matrix4x4_1).default; } }));
var inverse_matrix2x2_1 = __webpack_require__(2573);
Object.defineProperty(exports, "inverseMatrix2x2", ({ enumerable: true, get: function () { return __importDefault(inverse_matrix2x2_1).default; } }));
var inverse_matrix3x3_1 = __webpack_require__(1869);
Object.defineProperty(exports, "inverseMatrix3x3", ({ enumerable: true, get: function () { return __importDefault(inverse_matrix3x3_1).default; } }));
var inverse_matrix4x4_1 = __webpack_require__(3923);
Object.defineProperty(exports, "inverseMatrix4x4", ({ enumerable: true, get: function () { return __importDefault(inverse_matrix4x4_1).default; } }));
var negate_1 = __webpack_require__(5724);
Object.defineProperty(exports, "negate", ({ enumerable: true, get: function () { return __importDefault(negate_1).default; } }));
var negate_2 = __webpack_require__(5724);
Object.defineProperty(exports, "neg", ({ enumerable: true, get: function () { return __importDefault(negate_2).default; } }));
var add_1 = __webpack_require__(3796);
Object.defineProperty(exports, "add", ({ enumerable: true, get: function () { return __importDefault(add_1).default; } }));
var subtract_1 = __webpack_require__(4140);
Object.defineProperty(exports, "subtract", ({ enumerable: true, get: function () { return __importDefault(subtract_1).default; } }));
var subtract_2 = __webpack_require__(4140);
Object.defineProperty(exports, "sub", ({ enumerable: true, get: function () { return __importDefault(subtract_2).default; } }));
var multiply_1 = __webpack_require__(7554);
Object.defineProperty(exports, "multiply", ({ enumerable: true, get: function () { return __importDefault(multiply_1).default; } }));
var multiply_2 = __webpack_require__(7554);
Object.defineProperty(exports, "mul", ({ enumerable: true, get: function () { return __importDefault(multiply_2).default; } }));
var divide_1 = __webpack_require__(8981);
Object.defineProperty(exports, "divide", ({ enumerable: true, get: function () { return __importDefault(divide_1).default; } }));
var divide_2 = __webpack_require__(8981);
Object.defineProperty(exports, "div", ({ enumerable: true, get: function () { return __importDefault(divide_2).default; } }));
var dot_1 = __webpack_require__(5111);
Object.defineProperty(exports, "dot", ({ enumerable: true, get: function () { return __importDefault(dot_1).default; } }));
var square_1 = __webpack_require__(2034);
Object.defineProperty(exports, "square", ({ enumerable: true, get: function () { return __importDefault(square_1).default; } }));
var square_2 = __webpack_require__(2034);
Object.defineProperty(exports, "sqr", ({ enumerable: true, get: function () { return __importDefault(square_2).default; } }));
var length_1 = __webpack_require__(7327);
Object.defineProperty(exports, "length", ({ enumerable: true, get: function () { return __importDefault(length_1).default; } }));
var length_2 = __webpack_require__(7327);
Object.defineProperty(exports, "len", ({ enumerable: true, get: function () { return __importDefault(length_2).default; } }));
var length_3 = __webpack_require__(7327);
Object.defineProperty(exports, "magnitude", ({ enumerable: true, get: function () { return __importDefault(length_3).default; } }));
var length_4 = __webpack_require__(7327);
Object.defineProperty(exports, "mag", ({ enumerable: true, get: function () { return __importDefault(length_4).default; } }));
var length_5 = __webpack_require__(7327);
Object.defineProperty(exports, "norm", ({ enumerable: true, get: function () { return __importDefault(length_5).default; } }));
var inverse_1 = __webpack_require__(7966);
Object.defineProperty(exports, "inverse", ({ enumerable: true, get: function () { return __importDefault(inverse_1).default; } }));
var inverse_2 = __webpack_require__(7966);
Object.defineProperty(exports, "inv", ({ enumerable: true, get: function () { return __importDefault(inverse_2).default; } }));
var negate_vector2_1 = __webpack_require__(216);
Object.defineProperty(exports, "negateVector2", ({ enumerable: true, get: function () { return __importDefault(negate_vector2_1).default; } }));
var negate_vector3_1 = __webpack_require__(2500);
Object.defineProperty(exports, "negateVector3", ({ enumerable: true, get: function () { return __importDefault(negate_vector3_1).default; } }));
var negate_vector4_1 = __webpack_require__(9116);
Object.defineProperty(exports, "negateVector4", ({ enumerable: true, get: function () { return __importDefault(negate_vector4_1).default; } }));
var add_number_vector2_1 = __webpack_require__(5121);
Object.defineProperty(exports, "addNumberVector2", ({ enumerable: true, get: function () { return __importDefault(add_number_vector2_1).default; } }));
var add_number_vector3_1 = __webpack_require__(1669);
Object.defineProperty(exports, "addNumberVector3", ({ enumerable: true, get: function () { return __importDefault(add_number_vector3_1).default; } }));
var add_number_vector4_1 = __webpack_require__(7418);
Object.defineProperty(exports, "addNumberVector4", ({ enumerable: true, get: function () { return __importDefault(add_number_vector4_1).default; } }));
var add_number_matrix2x2_1 = __webpack_require__(6082);
Object.defineProperty(exports, "addNumberMatrix2x2", ({ enumerable: true, get: function () { return __importDefault(add_number_matrix2x2_1).default; } }));
var add_number_matrix3x3_1 = __webpack_require__(3759);
Object.defineProperty(exports, "addNumberMatrix3x3", ({ enumerable: true, get: function () { return __importDefault(add_number_matrix3x3_1).default; } }));
var add_number_matrix4x4_1 = __webpack_require__(6632);
Object.defineProperty(exports, "addNumberMatrix4x4", ({ enumerable: true, get: function () { return __importDefault(add_number_matrix4x4_1).default; } }));
var add_vector2_number_1 = __webpack_require__(4192);
Object.defineProperty(exports, "addVector2Number", ({ enumerable: true, get: function () { return __importDefault(add_vector2_number_1).default; } }));
var add_vector2_vector2_1 = __webpack_require__(9148);
Object.defineProperty(exports, "addVector2Vector2", ({ enumerable: true, get: function () { return __importDefault(add_vector2_vector2_1).default; } }));
var add_vector3_number_1 = __webpack_require__(1016);
Object.defineProperty(exports, "addVector3Number", ({ enumerable: true, get: function () { return __importDefault(add_vector3_number_1).default; } }));
var add_vector3_vector3_1 = __webpack_require__(1131);
Object.defineProperty(exports, "addVector3Vector3", ({ enumerable: true, get: function () { return __importDefault(add_vector3_vector3_1).default; } }));
var add_vector4_number_1 = __webpack_require__(1823);
Object.defineProperty(exports, "addVector4Number", ({ enumerable: true, get: function () { return __importDefault(add_vector4_number_1).default; } }));
var add_vector4_vector4_1 = __webpack_require__(5323);
Object.defineProperty(exports, "addVector4Vector4", ({ enumerable: true, get: function () { return __importDefault(add_vector4_vector4_1).default; } }));
var add_matrix2x2_number_1 = __webpack_require__(3610);
Object.defineProperty(exports, "addMatrix2x2Number", ({ enumerable: true, get: function () { return __importDefault(add_matrix2x2_number_1).default; } }));
var add_matrix3x3_number_1 = __webpack_require__(3235);
Object.defineProperty(exports, "addMatrix3x3Number", ({ enumerable: true, get: function () { return __importDefault(add_matrix3x3_number_1).default; } }));
var add_matrix4x4_number_1 = __webpack_require__(6848);
Object.defineProperty(exports, "addMatrix4x4Number", ({ enumerable: true, get: function () { return __importDefault(add_matrix4x4_number_1).default; } }));
var subtract_number_vector2_1 = __webpack_require__(4267);
Object.defineProperty(exports, "subtractNumberVector2", ({ enumerable: true, get: function () { return __importDefault(subtract_number_vector2_1).default; } }));
var subtract_number_vector3_1 = __webpack_require__(5512);
Object.defineProperty(exports, "subtractNumberVector3", ({ enumerable: true, get: function () { return __importDefault(subtract_number_vector3_1).default; } }));
var subtract_number_vector4_1 = __webpack_require__(3077);
Object.defineProperty(exports, "subtractNumberVector4", ({ enumerable: true, get: function () { return __importDefault(subtract_number_vector4_1).default; } }));
var subtract_number_matrix2x2_1 = __webpack_require__(3079);
Object.defineProperty(exports, "subtractNumberMatrix2x2", ({ enumerable: true, get: function () { return __importDefault(subtract_number_matrix2x2_1).default; } }));
var subtract_number_matrix3x3_1 = __webpack_require__(1134);
Object.defineProperty(exports, "subtractNumberMatrix3x3", ({ enumerable: true, get: function () { return __importDefault(subtract_number_matrix3x3_1).default; } }));
var subtract_number_matrix4x4_1 = __webpack_require__(8915);
Object.defineProperty(exports, "subtractNumberMatrix4x4", ({ enumerable: true, get: function () { return __importDefault(subtract_number_matrix4x4_1).default; } }));
var subtract_vector2_number_1 = __webpack_require__(2898);
Object.defineProperty(exports, "subtractVector2Number", ({ enumerable: true, get: function () { return __importDefault(subtract_vector2_number_1).default; } }));
var subtract_vector2_vector2_1 = __webpack_require__(8077);
Object.defineProperty(exports, "subtractVector2Vector2", ({ enumerable: true, get: function () { return __importDefault(subtract_vector2_vector2_1).default; } }));
var subtract_vector3_number_1 = __webpack_require__(6963);
Object.defineProperty(exports, "subtractVector3Number", ({ enumerable: true, get: function () { return __importDefault(subtract_vector3_number_1).default; } }));
var subtract_vector3_vector3_1 = __webpack_require__(7450);
Object.defineProperty(exports, "subtractVector3Vector3", ({ enumerable: true, get: function () { return __importDefault(subtract_vector3_vector3_1).default; } }));
var subtract_vector4_number_1 = __webpack_require__(7010);
Object.defineProperty(exports, "subtractVector4Number", ({ enumerable: true, get: function () { return __importDefault(subtract_vector4_number_1).default; } }));
var subtract_vector4_vector4_1 = __webpack_require__(6743);
Object.defineProperty(exports, "subtractVector4Vector4", ({ enumerable: true, get: function () { return __importDefault(subtract_vector4_vector4_1).default; } }));
var subtract_matrix2x2_number_1 = __webpack_require__(9188);
Object.defineProperty(exports, "subtractMatrix2x2Number", ({ enumerable: true, get: function () { return __importDefault(subtract_matrix2x2_number_1).default; } }));
var subtract_matrix3x3_number_1 = __webpack_require__(7565);
Object.defineProperty(exports, "subtractMatrix3x3Number", ({ enumerable: true, get: function () { return __importDefault(subtract_matrix3x3_number_1).default; } }));
var subtract_matrix4x4_number_1 = __webpack_require__(2002);
Object.defineProperty(exports, "subtractMatrix4x4Number", ({ enumerable: true, get: function () { return __importDefault(subtract_matrix4x4_number_1).default; } }));
var multiply_number_vector2_1 = __webpack_require__(9449);
Object.defineProperty(exports, "multiplyNumberVector2", ({ enumerable: true, get: function () { return __importDefault(multiply_number_vector2_1).default; } }));
var multiply_number_vector3_1 = __webpack_require__(5557);
Object.defineProperty(exports, "multiplyNumberVector3", ({ enumerable: true, get: function () { return __importDefault(multiply_number_vector3_1).default; } }));
var multiply_number_vector4_1 = __webpack_require__(287);
Object.defineProperty(exports, "multiplyNumberVector4", ({ enumerable: true, get: function () { return __importDefault(multiply_number_vector4_1).default; } }));
var multiply_number_matrix2x2_1 = __webpack_require__(1947);
Object.defineProperty(exports, "multiplyNumberMatrix2x2", ({ enumerable: true, get: function () { return __importDefault(multiply_number_matrix2x2_1).default; } }));
var multiply_number_matrix3x3_1 = __webpack_require__(6075);
Object.defineProperty(exports, "multiplyNumberMatrix3x3", ({ enumerable: true, get: function () { return __importDefault(multiply_number_matrix3x3_1).default; } }));
var multiply_number_matrix4x4_1 = __webpack_require__(2959);
Object.defineProperty(exports, "multiplyNumberMatrix4x4", ({ enumerable: true, get: function () { return __importDefault(multiply_number_matrix4x4_1).default; } }));
var multiply_vector2_number_1 = __webpack_require__(6554);
Object.defineProperty(exports, "multiplyVector2Number", ({ enumerable: true, get: function () { return __importDefault(multiply_vector2_number_1).default; } }));
var multiply_vector2_vector2_1 = __webpack_require__(3696);
Object.defineProperty(exports, "multiplyVector2Vector2", ({ enumerable: true, get: function () { return __importDefault(multiply_vector2_vector2_1).default; } }));
var multiply_vector3_number_1 = __webpack_require__(5580);
Object.defineProperty(exports, "multiplyVector3Number", ({ enumerable: true, get: function () { return __importDefault(multiply_vector3_number_1).default; } }));
var multiply_vector3_vector3_1 = __webpack_require__(6587);
Object.defineProperty(exports, "multiplyVector3Vector3", ({ enumerable: true, get: function () { return __importDefault(multiply_vector3_vector3_1).default; } }));
var multiply_vector4_number_1 = __webpack_require__(787);
Object.defineProperty(exports, "multiplyVector4Number", ({ enumerable: true, get: function () { return __importDefault(multiply_vector4_number_1).default; } }));
var multiply_vector4_vector4_1 = __webpack_require__(6399);
Object.defineProperty(exports, "multiplyVector4Vector4", ({ enumerable: true, get: function () { return __importDefault(multiply_vector4_vector4_1).default; } }));
var multiply_matrix2x2_number_1 = __webpack_require__(5068);
Object.defineProperty(exports, "multiplyMatrix2x2Number", ({ enumerable: true, get: function () { return __importDefault(multiply_matrix2x2_number_1).default; } }));
var multiply_matrix2x2_vector2_1 = __webpack_require__(956);
Object.defineProperty(exports, "multiplyMatrix2x2Vector2", ({ enumerable: true, get: function () { return __importDefault(multiply_matrix2x2_vector2_1).default; } }));
var multiply_matrix2x2_matrix2x2_1 = __webpack_require__(6430);
Object.defineProperty(exports, "multiplyMatrix2x2Matrix2x2", ({ enumerable: true, get: function () { return __importDefault(multiply_matrix2x2_matrix2x2_1).default; } }));
var multiply_matrix3x3_number_1 = __webpack_require__(8108);
Object.defineProperty(exports, "multiplyMatrix3x3Number", ({ enumerable: true, get: function () { return __importDefault(multiply_matrix3x3_number_1).default; } }));
var multiply_matrix3x3_vector3_1 = __webpack_require__(6428);
Object.defineProperty(exports, "multiplyMatrix3x3Vector3", ({ enumerable: true, get: function () { return __importDefault(multiply_matrix3x3_vector3_1).default; } }));
var multiply_matrix3x3_matrix3x3_1 = __webpack_require__(1525);
Object.defineProperty(exports, "multiplyMatrix3x3Matrix3x3", ({ enumerable: true, get: function () { return __importDefault(multiply_matrix3x3_matrix3x3_1).default; } }));
var multiply_matrix4x4_number_1 = __webpack_require__(562);
Object.defineProperty(exports, "multiplyMatrix4x4Number", ({ enumerable: true, get: function () { return __importDefault(multiply_matrix4x4_number_1).default; } }));
var multiply_matrix4x4_vector4_1 = __webpack_require__(8149);
Object.defineProperty(exports, "multiplyMatrix4x4Vector4", ({ enumerable: true, get: function () { return __importDefault(multiply_matrix4x4_vector4_1).default; } }));
var multiply_matrix4x4_matrix4x4_1 = __webpack_require__(4725);
Object.defineProperty(exports, "multiplyMatrix4x4Matrix4x4", ({ enumerable: true, get: function () { return __importDefault(multiply_matrix4x4_matrix4x4_1).default; } }));
var divide_number_vector2_1 = __webpack_require__(1205);
Object.defineProperty(exports, "divideNumberVector2", ({ enumerable: true, get: function () { return __importDefault(divide_number_vector2_1).default; } }));
var divide_number_vector3_1 = __webpack_require__(6330);
Object.defineProperty(exports, "divideNumberVector3", ({ enumerable: true, get: function () { return __importDefault(divide_number_vector3_1).default; } }));
var divide_number_vector4_1 = __webpack_require__(7693);
Object.defineProperty(exports, "divideNumberVector4", ({ enumerable: true, get: function () { return __importDefault(divide_number_vector4_1).default; } }));
var divide_number_matrix2x2_1 = __webpack_require__(2695);
Object.defineProperty(exports, "divideNumberMatrix2x2", ({ enumerable: true, get: function () { return __importDefault(divide_number_matrix2x2_1).default; } }));
var divide_number_matrix3x3_1 = __webpack_require__(9705);
Object.defineProperty(exports, "divideNumberMatrix3x3", ({ enumerable: true, get: function () { return __importDefault(divide_number_matrix3x3_1).default; } }));
var divide_number_matrix4x4_1 = __webpack_require__(9923);
Object.defineProperty(exports, "divideNumberMatrix4x4", ({ enumerable: true, get: function () { return __importDefault(divide_number_matrix4x4_1).default; } }));
var divide_vector2_number_1 = __webpack_require__(124);
Object.defineProperty(exports, "divideVector2Number", ({ enumerable: true, get: function () { return __importDefault(divide_vector2_number_1).default; } }));
var divide_vector2_vector2_1 = __webpack_require__(1634);
Object.defineProperty(exports, "divideVector2Vector2", ({ enumerable: true, get: function () { return __importDefault(divide_vector2_vector2_1).default; } }));
var divide_vector3_number_1 = __webpack_require__(8198);
Object.defineProperty(exports, "divideVector3Number", ({ enumerable: true, get: function () { return __importDefault(divide_vector3_number_1).default; } }));
var divide_vector3_vector3_1 = __webpack_require__(4058);
Object.defineProperty(exports, "divideVector3Vector3", ({ enumerable: true, get: function () { return __importDefault(divide_vector3_vector3_1).default; } }));
var divide_vector4_number_1 = __webpack_require__(4540);
Object.defineProperty(exports, "divideVector4Number", ({ enumerable: true, get: function () { return __importDefault(divide_vector4_number_1).default; } }));
var divide_vector4_vector4_1 = __webpack_require__(3034);
Object.defineProperty(exports, "divideVector4Vector4", ({ enumerable: true, get: function () { return __importDefault(divide_vector4_vector4_1).default; } }));
var divide_matrix2x2_number_1 = __webpack_require__(2794);
Object.defineProperty(exports, "divideMatrix2x2Number", ({ enumerable: true, get: function () { return __importDefault(divide_matrix2x2_number_1).default; } }));
var divide_matrix3x3_number_1 = __webpack_require__(3609);
Object.defineProperty(exports, "divideMatrix3x3Number", ({ enumerable: true, get: function () { return __importDefault(divide_matrix3x3_number_1).default; } }));
var divide_matrix4x4_number_1 = __webpack_require__(8186);
Object.defineProperty(exports, "divideMatrix4x4Number", ({ enumerable: true, get: function () { return __importDefault(divide_matrix4x4_number_1).default; } }));
var dot_vector2_vector2_1 = __webpack_require__(2965);
Object.defineProperty(exports, "dotVector2Vector2", ({ enumerable: true, get: function () { return __importDefault(dot_vector2_vector2_1).default; } }));
var dot_vector3_vector3_1 = __webpack_require__(7635);
Object.defineProperty(exports, "dotVector3Vector3", ({ enumerable: true, get: function () { return __importDefault(dot_vector3_vector3_1).default; } }));
var dot_vector4_vector4_1 = __webpack_require__(6869);
Object.defineProperty(exports, "dotVector4Vector4", ({ enumerable: true, get: function () { return __importDefault(dot_vector4_vector4_1).default; } }));
var square_vector2_1 = __webpack_require__(5435);
Object.defineProperty(exports, "squareVector2", ({ enumerable: true, get: function () { return __importDefault(square_vector2_1).default; } }));
var square_vector3_1 = __webpack_require__(614);
Object.defineProperty(exports, "squareVector3", ({ enumerable: true, get: function () { return __importDefault(square_vector3_1).default; } }));
var square_vector4_1 = __webpack_require__(5554);
Object.defineProperty(exports, "squareVector4", ({ enumerable: true, get: function () { return __importDefault(square_vector4_1).default; } }));
var length_vector2_1 = __webpack_require__(7370);
Object.defineProperty(exports, "lengthVector2", ({ enumerable: true, get: function () { return __importDefault(length_vector2_1).default; } }));
var length_vector3_1 = __webpack_require__(7785);
Object.defineProperty(exports, "lengthVector3", ({ enumerable: true, get: function () { return __importDefault(length_vector3_1).default; } }));
var length_vector4_1 = __webpack_require__(6905);
Object.defineProperty(exports, "lengthVector4", ({ enumerable: true, get: function () { return __importDefault(length_vector4_1).default; } }));
var translate_1 = __webpack_require__(2564);
Object.defineProperty(exports, "translate", ({ enumerable: true, get: function () { return __importDefault(translate_1).default; } }));


/***/ }),

/***/ 2573:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function inverseMatrix2x2(m) {
    var d = m[0][0] * m[1][1] - m[0][1] * m[1][0];
    return multiply_number_matrix2x2_1.default(1 / d, mat2_1.default(+m[1][1], -m[0][1], -m[1][0], +m[0][0]));
}
exports.default = inverseMatrix2x2;
var mat2_1 = __importDefault(__webpack_require__(3194));
var multiply_number_matrix2x2_1 = __importDefault(__webpack_require__(1947));


/***/ }),

/***/ 1869:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function inverseMatrix3x3(m) {
    var a = m[0][0];
    var b = m[1][0];
    var c = m[2][0];
    var d = m[0][1];
    var e = m[1][1];
    var f = m[2][1];
    var g = m[0][2];
    var h = m[1][2];
    var i = m[2][2];
    var A = e * i - f * h;
    var B = f * g - d * i;
    var C = d * h - e * g;
    var D = c * h - b * i;
    var E = a * i - c * g;
    var F = b * g - a * h;
    var G = b * f - c * e;
    var H = c * d - a * f;
    var I = a * e - b * d;
    var det = a * A + b * B + c * C;
    return multiply_number_matrix3x3_1.default(1 / det, mat3_1.default(A, B, C, D, E, F, G, H, I));
}
exports.default = inverseMatrix3x3;
var mat3_1 = __importDefault(__webpack_require__(1180));
var multiply_number_matrix3x3_1 = __importDefault(__webpack_require__(6075));


/***/ }),

/***/ 3923:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function inverseMatrix4x4(m) {
    var a11 = m[0][0];
    var a12 = m[1][0];
    var a13 = m[2][0];
    var a14 = m[3][0];
    var a21 = m[0][1];
    var a22 = m[1][1];
    var a23 = m[2][1];
    var a24 = m[3][1];
    var a31 = m[0][2];
    var a32 = m[1][2];
    var a33 = m[2][2];
    var a34 = m[3][2];
    var a41 = m[0][3];
    var a42 = m[1][3];
    var a43 = m[2][3];
    var a44 = m[3][3];
    var det = +a11 * (a22 * a33 * a44 + a23 * a34 * a42 + a24 * a32 * a43 - a24 * a33 * a42 - a23 * a32 * a44 - a22 * a34 * a43)
        - a21 * (a12 * a33 * a44 + a13 * a34 * a42 + a14 * a32 * a43 - a14 * a33 * a42 - a13 * a32 * a44 - a12 * a34 * a43)
        + a31 * (a12 * a23 * a44 + a13 * a24 * a42 + a14 * a22 * a43 - a14 * a23 * a42 - a13 * a22 * a44 - a12 * a24 * a43)
        - a41 * (a12 * a23 * a34 + a13 * a24 * a32 + a14 * a22 * a33 - a14 * a23 * a32 - a13 * a22 * a34 - a12 * a24 * a33);
    var M11 = a22 * a33 * a44 + a23 * a34 * a42 + a24 * a32 * a43 - a24 * a33 * a42 - a23 * a32 * a44 - a22 * a34 * a43;
    var M21 = a12 * a33 * a44 + a13 * a34 * a42 + a14 * a32 * a43 - a14 * a33 * a42 - a13 * a32 * a44 - a12 * a34 * a43;
    var M31 = a12 * a23 * a44 + a13 * a24 * a42 + a14 * a22 * a43 - a14 * a23 * a42 - a13 * a22 * a44 - a12 * a24 * a43;
    var M41 = a12 * a23 * a34 + a13 * a24 * a32 + a14 * a22 * a33 - a14 * a23 * a32 - a13 * a22 * a34 - a12 * a24 * a33;
    var M12 = a21 * a33 * a44 + a23 * a34 * a41 + a24 * a31 * a43 - a24 * a33 * a41 - a23 * a31 * a44 - a21 * a34 * a43;
    var M22 = a11 * a33 * a44 + a13 * a34 * a41 + a14 * a31 * a43 - a14 * a33 * a41 - a13 * a31 * a44 - a11 * a34 * a43;
    var M32 = a11 * a23 * a44 + a13 * a24 * a41 + a14 * a21 * a43 - a14 * a23 * a41 - a13 * a21 * a44 - a11 * a24 * a43;
    var M42 = a11 * a23 * a34 + a13 * a24 * a31 + a14 * a21 * a33 - a14 * a23 * a31 - a13 * a21 * a34 - a11 * a24 * a33;
    var M13 = a21 * a32 * a44 + a22 * a34 * a41 + a24 * a31 * a42 - a24 * a32 * a41 - a22 * a31 * a44 - a21 * a34 * a42;
    var M23 = a11 * a32 * a44 + a12 * a34 * a41 + a14 * a31 * a42 - a14 * a32 * a41 - a12 * a31 * a44 - a11 * a34 * a42;
    var M33 = a11 * a22 * a44 + a12 * a24 * a41 + a14 * a21 * a42 - a14 * a22 * a41 - a12 * a21 * a44 - a11 * a24 * a42;
    var M43 = a11 * a22 * a34 + a12 * a24 * a31 + a14 * a21 * a32 - a14 * a22 * a31 - a12 * a21 * a34 - a11 * a24 * a32;
    var M14 = a21 * a32 * a43 + a22 * a33 * a41 + a23 * a31 * a42 - a23 * a32 * a41 - a22 * a31 * a43 - a21 * a33 * a42;
    var M24 = a11 * a32 * a43 + a12 * a33 * a41 + a13 * a31 * a42 - a13 * a32 * a41 - a12 * a31 * a43 - a11 * a33 * a42;
    var M34 = a11 * a22 * a43 + a12 * a23 * a41 + a13 * a21 * a42 - a13 * a22 * a41 - a12 * a21 * a43 - a11 * a23 * a42;
    var M44 = a11 * a22 * a33 + a12 * a23 * a31 + a13 * a21 * a32 - a13 * a22 * a31 - a12 * a21 * a33 - a11 * a23 * a32;
    var A11 = Math.pow((-1), (1 + 1)) * M11;
    var A21 = Math.pow((-1), (2 + 1)) * M12;
    var A31 = Math.pow((-1), (3 + 1)) * M13;
    var A41 = Math.pow((-1), (4 + 1)) * M14;
    var A12 = Math.pow((-1), (1 + 2)) * M21;
    var A22 = Math.pow((-1), (2 + 2)) * M22;
    var A32 = Math.pow((-1), (3 + 2)) * M23;
    var A42 = Math.pow((-1), (4 + 2)) * M24;
    var A13 = Math.pow((-1), (1 + 3)) * M31;
    var A23 = Math.pow((-1), (2 + 3)) * M32;
    var A33 = Math.pow((-1), (3 + 3)) * M33;
    var A43 = Math.pow((-1), (4 + 3)) * M34;
    var A14 = Math.pow((-1), (1 + 4)) * M41;
    var A24 = Math.pow((-1), (2 + 4)) * M42;
    var A34 = Math.pow((-1), (3 + 4)) * M43;
    var A44 = Math.pow((-1), (4 + 4)) * M44;
    return multiply_number_matrix4x4_1.default(1 / det, mat4_1.default(A11, A21, A31, A41, A12, A22, A32, A42, A13, A23, A33, A43, A14, A24, A34, A44));
}
exports.default = inverseMatrix4x4;
var mat4_1 = __importDefault(__webpack_require__(8068));
var multiply_number_matrix4x4_1 = __importDefault(__webpack_require__(2959));


/***/ }),

/***/ 7966:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function inverse(m) {
    return deduce_1.default(m, function (m) { return inverse_matrix4x4_1.default(m); }, function (m) { return inverse_matrix3x3_1.default(m); }, function (m) { return inverse_matrix2x2_1.default(m); }, null, null, null, null);
}
exports.default = inverse;
var inverse_matrix2x2_1 = __importDefault(__webpack_require__(2573));
var inverse_matrix3x3_1 = __importDefault(__webpack_require__(1869));
var inverse_matrix4x4_1 = __importDefault(__webpack_require__(3923));
var deduce_1 = __importDefault(__webpack_require__(1122));


/***/ }),

/***/ 7370:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function lengthVector2(v) {
    return Math.pow(square_vector2_1.default(v), (1 / 2));
}
exports.default = lengthVector2;
var square_vector2_1 = __importDefault(__webpack_require__(5435));


/***/ }),

/***/ 7785:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function lengthVector3(v) {
    return Math.pow(square_vector3_1.default(v), (1 / 2));
}
exports.default = lengthVector3;
var square_vector3_1 = __importDefault(__webpack_require__(614));


/***/ }),

/***/ 6905:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function lengthVector4(v) {
    return Math.pow(square_vector4_1.default(v), (1 / 2));
}
exports.default = lengthVector4;
var square_vector4_1 = __importDefault(__webpack_require__(5554));


/***/ }),

/***/ 7327:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function length(v) {
    return deduce_1.default(v, null, null, null, function (v) { return length_vector4_1.default(v); }, function (v) { return length_vector3_1.default(v); }, function (v) { return length_vector2_1.default(v); }, null);
}
exports.default = length;
var length_vector4_1 = __importDefault(__webpack_require__(6905));
var length_vector3_1 = __importDefault(__webpack_require__(7785));
var length_vector2_1 = __importDefault(__webpack_require__(7370));
var deduce_1 = __importDefault(__webpack_require__(1122));


/***/ }),

/***/ 3194:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function mat2(m, m01, m10, m11) {
    if (m === undefined)
        return new array_matrix2x2_1.default;
    if (typeof m === 'number')
        return new array_matrix2x2_1.default({ values: [
                m, m01,
                m10, m11,
            ] });
    if ('3' in m)
        return matrix2x2_from_matrix4x4_1.default(m);
    if ('2' in m)
        return matrix2x2_from_matrix3x3_1.default(m);
    return m.clone();
}
exports.default = mat2;
var array_matrix2x2_1 = __importDefault(__webpack_require__(7797));
var matrix2x2_from_matrix3x3_1 = __importDefault(__webpack_require__(5431));
var matrix2x2_from_matrix4x4_1 = __importDefault(__webpack_require__(2638));
var transpose_matrix2x2_1 = __importDefault(__webpack_require__(669));
mat2.transpose = transpose_matrix2x2_1.default;


/***/ }),

/***/ 1180:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function mat3(m, m01, m02, m10, m11, m12, m20, m21, m22) {
    if (m === undefined)
        return new array_matrix3x3_1.default;
    if (typeof m === 'number')
        return new array_matrix3x3_1.default({ values: [
                m, m01, m02,
                m10, m11, m12,
                m20, m21, m22,
            ] });
    if ('3' in m)
        return matrix3x3_from_matrix4x4_1.default(m);
    if ('2' in m)
        return m.clone();
    return matrix3x3_from_matrix2x2_1.default(m);
}
exports.default = mat3;
var array_matrix3x3_1 = __importDefault(__webpack_require__(4293));
var transpose_matrix3x3_1 = __importDefault(__webpack_require__(8756));
var matrix3x3_from_matrix4x4_1 = __importDefault(__webpack_require__(8537));
var matrix3x3_from_matrix2x2_1 = __importDefault(__webpack_require__(2757));
mat3.transpose = transpose_matrix3x3_1.default;


/***/ }),

/***/ 8068:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function mat4(m, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    if (m === undefined)
        return new array_matrix4x4_1.default;
    if (typeof m === 'number')
        return new array_matrix4x4_1.default({ values: [
                m, m01, m02, m03,
                m10, m11, m12, m13,
                m20, m21, m22, m23,
                m30, m31, m32, m33,
            ] });
    // @todo: replace with clone()
    if ('3' in m)
        return m.clone();
    if ('2' in m)
        return matrix4x4_from_matrix3x3_1.default(m);
    return matrix4x4_from_matrix2x2_1.default(m);
}
exports.default = mat4;
var array_matrix4x4_1 = __importDefault(__webpack_require__(7578));
var transpose_matrix4x4_1 = __importDefault(__webpack_require__(3129));
var matrix4x4_from_matrix3x3_1 = __importDefault(__webpack_require__(6153));
var matrix4x4_from_matrix2x2_1 = __importDefault(__webpack_require__(6503));
mat4.transpose = transpose_matrix4x4_1.default;


/***/ }),

/***/ 4589:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Matrix2x2Columns = /** @class */ (function () {
    function Matrix2x2Columns() {
    }
    return Matrix2x2Columns;
}());
exports.default = Matrix2x2Columns;


/***/ }),

/***/ 5431:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function matrix2x2FromMatrix4x4(m) {
    return mat2_1.default(m[0][0], m[0][1], m[1][0], m[1][1]);
}
exports.default = matrix2x2FromMatrix4x4;
var mat2_1 = __importDefault(__webpack_require__(3194));


/***/ }),

/***/ 2638:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function matrix2x2FromMatrix4x4(m) {
    return mat2_1.default(m[0][0], m[0][1], m[1][0], m[1][1]);
}
exports.default = matrix2x2FromMatrix4x4;
var mat2_1 = __importDefault(__webpack_require__(3194));


/***/ }),

/***/ 8087:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Matrix2x2Rows = /** @class */ (function () {
    function Matrix2x2Rows() {
    }
    return Matrix2x2Rows;
}());
exports.default = Matrix2x2Rows;


/***/ }),

/***/ 8459:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Matrix2x2 = /** @class */ (function () {
    function Matrix2x2() {
    }
    Object.defineProperty(Matrix2x2.prototype, 0, {
        get: function () {
            return this.columns[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix2x2.prototype, 1, {
        get: function () {
            return this.columns[1];
        },
        enumerable: false,
        configurable: true
    });
    Matrix2x2.prototype.clone = function () {
        return mat2_1.default.apply(void 0, __spreadArray([], __read(this.toArray())));
    };
    Matrix2x2.prototype.toArray = function () {
        return __spreadArray(__spreadArray([], __read(this[0].toArray())), __read(this[1].toArray()));
    };
    Matrix2x2.prototype.toString = function () {
        var _a = this, _0 = _a[0], _1 = _a[1];
        return ("Matrix2x2 {\n" +
            ("    0 : { x : " + _0.x + ", y : " + _0.y + " }\n") +
            ("    1 : { x : " + _1.x + ", y : " + _1.y + " }\n") +
            "}");
    };
    return Matrix2x2;
}());
exports.default = Matrix2x2;
var mat2_1 = __importDefault(__webpack_require__(3194));


/***/ }),

/***/ 4567:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Matrix3x3Columns = /** @class */ (function () {
    function Matrix3x3Columns() {
    }
    return Matrix3x3Columns;
}());
exports.default = Matrix3x3Columns;


/***/ }),

/***/ 2757:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function matrix3x3FromMatrix2x2(m) {
    return mat3_1.default(m[0][0], m[0][1], 0, m[1][0], m[1][1], 0, 0, 0, 1);
}
exports.default = matrix3x3FromMatrix2x2;
var mat3_1 = __importDefault(__webpack_require__(1180));


/***/ }),

/***/ 8537:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function matrix3x3FromMatrix4x4(m) {
    return mat3_1.default(m[0][0], m[0][1], m[0][2], m[1][0], m[1][1], m[1][2], m[2][0], m[2][1], m[2][2]);
}
exports.default = matrix3x3FromMatrix4x4;
var mat3_1 = __importDefault(__webpack_require__(1180));


/***/ }),

/***/ 5487:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Matrix3x3Rows = /** @class */ (function () {
    function Matrix3x3Rows() {
    }
    return Matrix3x3Rows;
}());
exports.default = Matrix3x3Rows;


/***/ }),

/***/ 3941:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Matrix3x3 = /** @class */ (function () {
    function Matrix3x3() {
    }
    Object.defineProperty(Matrix3x3.prototype, 0, {
        get: function () {
            return this.columns[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix3x3.prototype, 1, {
        get: function () {
            return this.columns[1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix3x3.prototype, 2, {
        get: function () {
            return this.columns[2];
        },
        enumerable: false,
        configurable: true
    });
    Matrix3x3.prototype.clone = function () {
        return mat3_1.default.apply(void 0, __spreadArray([], __read(this.toArray())));
    };
    Matrix3x3.prototype.toArray = function () {
        return __spreadArray(__spreadArray(__spreadArray([], __read(this[0].toArray())), __read(this[1].toArray())), __read(this[2].toArray()));
    };
    Matrix3x3.prototype.toString = function () {
        var _a = this, _0 = _a[0], _1 = _a[1], _2 = _a[2];
        return ("Matrix3x3 {\n" +
            ("    0 : { x : " + _0.x + ", y : " + _0.y + ", z : " + _0.z + " }\n") +
            ("    1 : { x : " + _1.x + ", y : " + _1.y + ", z : " + _1.z + " }\n") +
            ("    2 : { x : " + _2.x + ", y : " + _2.y + ", z : " + _2.z + " }\n") +
            "}");
    };
    return Matrix3x3;
}());
exports.default = Matrix3x3;
var mat3_1 = __importDefault(__webpack_require__(1180));


/***/ }),

/***/ 4135:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Matrix4x4Columns = /** @class */ (function () {
    function Matrix4x4Columns() {
    }
    return Matrix4x4Columns;
}());
exports.default = Matrix4x4Columns;


/***/ }),

/***/ 6503:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function matrix4x4FromMatrix2x2(m) {
    return mat4_1.default(m[0][0], m[0][1], 0, 0, m[1][0], m[1][1], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
exports.default = matrix4x4FromMatrix2x2;
var mat4_1 = __importDefault(__webpack_require__(8068));


/***/ }),

/***/ 6153:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function matrix4x4FromMatrix3x3(m) {
    return mat4_1.default(m[0][0], m[0][1], m[0][2], 0, m[1][0], m[1][1], m[1][2], 0, m[2][0], m[2][1], m[2][2], 0, 0, 0, 0, 1);
}
exports.default = matrix4x4FromMatrix3x3;
var mat4_1 = __importDefault(__webpack_require__(8068));


/***/ }),

/***/ 5181:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Matrix4x4Rows = /** @class */ (function () {
    function Matrix4x4Rows() {
    }
    return Matrix4x4Rows;
}());
exports.default = Matrix4x4Rows;


/***/ }),

/***/ 2481:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Matrix4x4 = /** @class */ (function () {
    function Matrix4x4() {
    }
    Object.defineProperty(Matrix4x4.prototype, 0, {
        get: function () {
            return this.columns[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix4x4.prototype, 1, {
        get: function () {
            return this.columns[1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix4x4.prototype, 2, {
        get: function () {
            return this.columns[2];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix4x4.prototype, 3, {
        get: function () {
            return this.columns[3];
        },
        enumerable: false,
        configurable: true
    });
    Matrix4x4.prototype.clone = function () {
        return mat4_1.default.apply(void 0, __spreadArray([], __read(this.toArray())));
    };
    Matrix4x4.prototype.toArray = function () {
        return __spreadArray(__spreadArray(__spreadArray(__spreadArray([], __read(this[0].toArray())), __read(this[1].toArray())), __read(this[2].toArray())), __read(this[3].toArray()));
    };
    Matrix4x4.prototype.toString = function () {
        var _a = this, _0 = _a[0], _1 = _a[1], _2 = _a[2], _3 = _a[3];
        return ("Matrix4x4 {\n" +
            ("    0 : { x : " + _0.x + ", y : " + _0.y + ", z : " + _0.z + ", w : " + _0.w + " }\n") +
            ("    1 : { x : " + _1.x + ", y : " + _1.y + ", z : " + _1.z + ", w : " + _1.w + " }\n") +
            ("    2 : { x : " + _2.x + ", y : " + _2.y + ", z : " + _2.z + ", w : " + _2.w + " }\n") +
            ("    3 : { x : " + _3.x + ", y : " + _3.y + ", z : " + _3.z + ", w : " + _3.w + " }\n") +
            "}");
    };
    return Matrix4x4;
}());
exports.default = Matrix4x4;
var mat4_1 = __importDefault(__webpack_require__(8068));


/***/ }),

/***/ 6430:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function multiplyMatrix2x2Matrix2x2(a, b) {
    return mat2_1.default(dot_vector2_vector2_1.default(a.rows[0], b.columns[0]), dot_vector2_vector2_1.default(a.rows[1], b.columns[0]), dot_vector2_vector2_1.default(a.rows[0], b.columns[1]), dot_vector2_vector2_1.default(a.rows[1], b.columns[1]));
}
exports.default = multiplyMatrix2x2Matrix2x2;
var dot_vector2_vector2_1 = __importDefault(__webpack_require__(2965));
var mat2_1 = __importDefault(__webpack_require__(3194));


/***/ }),

/***/ 5068:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function multiplyMatrix2x2Number(a, b) {
    return mat2_1.default(a[0][0] * b, a[0][1] * b, a[1][0] * b, a[1][1] * b);
}
exports.default = multiplyMatrix2x2Number;
var mat2_1 = __importDefault(__webpack_require__(3194));


/***/ }),

/***/ 956:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function multiplyMatrix2x2Vector2(m, v) {
    return vec2_1.default(dot_vector2_vector2_1.default(m.rows[0], v), dot_vector2_vector2_1.default(m.rows[1], v));
}
exports.default = multiplyMatrix2x2Vector2;
var vec2_1 = __importDefault(__webpack_require__(2185));
var dot_vector2_vector2_1 = __importDefault(__webpack_require__(2965));


/***/ }),

/***/ 1525:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function multiplyMatrix3x3Matrix3x3(a, b) {
    return mat3_1.default(dot_vector3_vector3_1.default(a.rows[0], b.columns[0]), dot_vector3_vector3_1.default(a.rows[1], b.columns[0]), dot_vector3_vector3_1.default(a.rows[2], b.columns[0]), dot_vector3_vector3_1.default(a.rows[0], b.columns[1]), dot_vector3_vector3_1.default(a.rows[1], b.columns[1]), dot_vector3_vector3_1.default(a.rows[2], b.columns[1]), dot_vector3_vector3_1.default(a.rows[0], b.columns[2]), dot_vector3_vector3_1.default(a.rows[1], b.columns[2]), dot_vector3_vector3_1.default(a.rows[2], b.columns[2]));
}
exports.default = multiplyMatrix3x3Matrix3x3;
var dot_vector3_vector3_1 = __importDefault(__webpack_require__(7635));
var mat3_1 = __importDefault(__webpack_require__(1180));


/***/ }),

/***/ 8108:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function multiplyMatrix3x3Number(a, b) {
    return mat3_1.default(a[0][0] * b, a[0][1] * b, a[0][2] * b, a[1][0] * b, a[1][1] * b, a[1][2] * b, a[2][0] * b, a[2][1] * b, a[2][2] * b);
}
exports.default = multiplyMatrix3x3Number;
var mat3_1 = __importDefault(__webpack_require__(1180));


/***/ }),

/***/ 6428:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function multiplyMatrix3x3Vector3(m, v) {
    return vec3_1.default(dot_vector3_vector3_1.default(m.rows[0], v), dot_vector3_vector3_1.default(m.rows[1], v), dot_vector3_vector3_1.default(m.rows[2], v));
}
exports.default = multiplyMatrix3x3Vector3;
var vec3_1 = __importDefault(__webpack_require__(2860));
var dot_vector3_vector3_1 = __importDefault(__webpack_require__(7635));


/***/ }),

/***/ 4725:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function multiplyMatrix4x4Matrix4x4(a, b) {
    return mat4_1.default(dot_vector4_vector4_1.default(a.rows[0], b.columns[0]), dot_vector4_vector4_1.default(a.rows[1], b.columns[0]), dot_vector4_vector4_1.default(a.rows[2], b.columns[0]), dot_vector4_vector4_1.default(a.rows[3], b.columns[0]), dot_vector4_vector4_1.default(a.rows[0], b.columns[1]), dot_vector4_vector4_1.default(a.rows[1], b.columns[1]), dot_vector4_vector4_1.default(a.rows[2], b.columns[1]), dot_vector4_vector4_1.default(a.rows[3], b.columns[1]), dot_vector4_vector4_1.default(a.rows[0], b.columns[2]), dot_vector4_vector4_1.default(a.rows[1], b.columns[2]), dot_vector4_vector4_1.default(a.rows[2], b.columns[2]), dot_vector4_vector4_1.default(a.rows[3], b.columns[2]), dot_vector4_vector4_1.default(a.rows[0], b.columns[3]), dot_vector4_vector4_1.default(a.rows[1], b.columns[3]), dot_vector4_vector4_1.default(a.rows[2], b.columns[3]), dot_vector4_vector4_1.default(a.rows[3], b.columns[3]));
}
exports.default = multiplyMatrix4x4Matrix4x4;
var dot_vector4_vector4_1 = __importDefault(__webpack_require__(6869));
var mat4_1 = __importDefault(__webpack_require__(8068));


/***/ }),

/***/ 562:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function multiplyMatrix4x4Number(a, b) {
    return mat4_1.default(a[0][0] * b, a[0][1] * b, a[0][2] * b, a[0][3] * b, a[1][0] * b, a[1][1] * b, a[1][2] * b, a[1][3] * b, a[2][0] * b, a[2][1] * b, a[2][2] * b, a[2][3] * b, a[3][0] * b, a[3][1] * b, a[3][2] * b, a[3][3] * b);
}
exports.default = multiplyMatrix4x4Number;
var mat4_1 = __importDefault(__webpack_require__(8068));


/***/ }),

/***/ 8149:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function multiplyMatrix4x4Vector4(m, v) {
    return vec4_1.default(dot_vector4_vector4_1.default(m.rows[0], v), dot_vector4_vector4_1.default(m.rows[1], v), dot_vector4_vector4_1.default(m.rows[2], v), dot_vector4_vector4_1.default(m.rows[3], v));
}
exports.default = multiplyMatrix4x4Vector4;
var vec4_1 = __importDefault(__webpack_require__(5570));
var dot_vector4_vector4_1 = __importDefault(__webpack_require__(6869));


/***/ }),

/***/ 1947:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function multiplyNumberMatrix2x2(a, b) {
    return mat2_1.default(a * b[0][0], a * b[0][1], a * b[1][0], a * b[1][1]);
}
exports.default = multiplyNumberMatrix2x2;
var mat2_1 = __importDefault(__webpack_require__(3194));


/***/ }),

/***/ 6075:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function multiplyNumberMatrix3x3(a, b) {
    return mat3_1.default(a * b[0][0], a * b[0][1], a * b[0][2], a * b[1][0], a * b[1][1], a * b[1][2], a * b[2][0], a * b[2][1], a * b[2][2]);
}
exports.default = multiplyNumberMatrix3x3;
var mat3_1 = __importDefault(__webpack_require__(1180));


/***/ }),

/***/ 2959:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function multiplyNumberMatrix4x4(a, b) {
    return mat4_1.default(a * b[0][0], a * b[0][1], a * b[0][2], a * b[0][3], a * b[1][0], a * b[1][1], a * b[1][2], a * b[1][3], a * b[2][0], a * b[2][1], a * b[2][2], a * b[2][3], a * b[3][0], a * b[3][1], a * b[3][2], a * b[3][3]);
}
exports.default = multiplyNumberMatrix4x4;
var mat4_1 = __importDefault(__webpack_require__(8068));


/***/ }),

/***/ 9449:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function multiplyNumberVector2(a, b) {
    return multiply_vector2_vector2_1.default(vec2_1.default(a), b);
}
exports.default = multiplyNumberVector2;
var vec2_1 = __importDefault(__webpack_require__(2185));
var multiply_vector2_vector2_1 = __importDefault(__webpack_require__(3696));


/***/ }),

/***/ 5557:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function multiplyNumberVector3(a, b) {
    return multiply_vector3_vector3_1.default(vec3_1.default(a), b);
}
exports.default = multiplyNumberVector3;
var vec3_1 = __importDefault(__webpack_require__(2860));
var multiply_vector3_vector3_1 = __importDefault(__webpack_require__(6587));


/***/ }),

/***/ 287:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function multiplyNumberVector4(a, b) {
    return multiply_vector4_vector4_1.default(vec4_1.default(a), b);
}
exports.default = multiplyNumberVector4;
var vec4_1 = __importDefault(__webpack_require__(5570));
var multiply_vector4_vector4_1 = __importDefault(__webpack_require__(6399));


/***/ }),

/***/ 6554:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function multiplyVector2Number(a, b) {
    return multiply_vector2_vector2_1.default(a, vec2_1.default(b));
}
exports.default = multiplyVector2Number;
var vec2_1 = __importDefault(__webpack_require__(2185));
var multiply_vector2_vector2_1 = __importDefault(__webpack_require__(3696));


/***/ }),

/***/ 3696:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function multiplyVector2Vector2(a, b) {
    return vec2_1.default(a.x * b.x, a.y * b.y);
}
exports.default = multiplyVector2Vector2;
var vec2_1 = __importDefault(__webpack_require__(2185));


/***/ }),

/***/ 5580:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function multiplyVector3Number(a, b) {
    return multiply_vector3_vector3_1.default(a, vec3_1.default(b));
}
exports.default = multiplyVector3Number;
var vec3_1 = __importDefault(__webpack_require__(2860));
var multiply_vector3_vector3_1 = __importDefault(__webpack_require__(6587));


/***/ }),

/***/ 6587:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function multiplyVector3Vector3(a, b) {
    return vec3_1.default(a.x * b.x, a.y * b.y, a.z * b.z);
}
exports.default = multiplyVector3Vector3;
var vec3_1 = __importDefault(__webpack_require__(2860));


/***/ }),

/***/ 787:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function multiplyVector4Number(a, b) {
    return multiply_vector4_vector4_1.default(a, vec4_1.default(b));
}
exports.default = multiplyVector4Number;
var vec4_1 = __importDefault(__webpack_require__(5570));
var multiply_vector4_vector4_1 = __importDefault(__webpack_require__(6399));


/***/ }),

/***/ 6399:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function multiplyVector4Vector4(a, b) {
    return vec4_1.default(a.x * b.x, a.y * b.y, a.z * b.z, a.w * b.w);
}
exports.default = multiplyVector4Vector4;
var vec4_1 = __importDefault(__webpack_require__(5570));


/***/ }),

/***/ 7554:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function multiply(a, b) {
    return deduce_1.default(a, 
    /* Matrix4x4 */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ function (b) { return multiply_matrix4x4_matrix4x4_1.default(a, b); }, 
    /* Matrix3x3 */ function (b) { return multiply_matrix3x3_matrix3x3_1.default(mat3_1.default(a), b); }, 
    /* Matrix2x2 */ function (b) { return multiply_matrix2x2_matrix2x2_1.default(mat2_1.default(a), b); }, 
    /* Vector4 */ function (b) { return multiply_matrix4x4_vector4_1.default(a, b); }, 
    /* Vector3 */ function (b) { return multiply_matrix3x3_vector3_1.default(mat3_1.default(a), b); }, 
    /* Vector2 */ function (b) { return multiply_matrix2x2_vector2_1.default(mat2_1.default(a), b); }, 
    /* number */ function (b) { return multiply_matrix4x4_number_1.default(a, b); }); }, 
    /* Matrix3x3 */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ function (b) { return multiply_matrix3x3_matrix3x3_1.default(a, mat3_1.default(b)); }, 
    /* Matrix3x3 */ function (b) { return multiply_matrix3x3_matrix3x3_1.default(a, b); }, 
    /* Matrix2x2 */ function (b) { return multiply_matrix2x2_matrix2x2_1.default(mat2_1.default(a), b); }, 
    /* Vector4 */ function (b) { return multiply_matrix3x3_vector3_1.default(a, vec3_1.default(b.x, b.y, b.z)); }, // @todo: conversion via vec
    /* Vector3 */ function (// @todo: conversion via vec
    b) { return multiply_matrix3x3_vector3_1.default(a, b); }, 
    /* Vector2 */ function (b) { return multiply_matrix2x2_vector2_1.default(mat2_1.default(a), b); }, 
    /* number */ function (b) { return multiply_matrix3x3_number_1.default(a, b); }); }, 
    /* Matrix2x2 */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ function (b) { return multiply_matrix2x2_matrix2x2_1.default(a, mat2_1.default(b)); }, 
    /* Matrix3x3 */ function (b) { return multiply_matrix2x2_matrix2x2_1.default(a, mat2_1.default(b)); }, 
    /* Matrix2x2 */ function (b) { return multiply_matrix2x2_matrix2x2_1.default(a, b); }, 
    /* Vector4 */ function (b) { return multiply_matrix2x2_vector2_1.default(a, vec2_1.default(b.x, b.y)); }, // @todo: multiply conversion
    /* Vector3 */ function (// @todo: multiply conversion
    b) { return multiply_matrix2x2_vector2_1.default(a, vec2_1.default(b.x, b.y)); }, // @todo: multiply conversion
    /* Vector2 */ function (// @todo: multiply conversion
    b) { return multiply_matrix2x2_vector2_1.default(a, b); }, 
    /* number */ function (b) { return multiply_matrix2x2_number_1.default(a, b); }); }, 
    /* Vector4 */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ null, 
    /* Matrix3x3 */ null, 
    /* Matrix2x2 */ null, 
    /* Vector4 */ function (b) { return multiply_vector4_vector4_1.default(a, b); }, 
    /* Vector3 */ function (b) { return multiply_vector3_vector3_1.default(vec3_1.default(a.x, a.y, a.z), b); }, // @todo: conversion via vec
    /* Vector2 */ function (// @todo: conversion via vec
    b) { return multiply_vector2_vector2_1.default(vec2_1.default(a.x, a.y), b); }, // @todo: conversion via vec
    /* number */ function (// @todo: conversion via vec
    b) { return multiply_vector4_number_1.default(a, b); }); }, 
    /* Vector3 */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ null, 
    /* Matrix3x3 */ null, 
    /* Matrix2x2 */ null, 
    /* Vector4 */ function (b) { return multiply_vector3_vector3_1.default(a, vec3_1.default(b.x, b.y, b.z)); }, // @todo: conversion via vec
    /* Vector3 */ function (// @todo: conversion via vec
    b) { return multiply_vector3_vector3_1.default(a, b); }, 
    /* Vector2 */ function (b) { return multiply_vector2_vector2_1.default(vec2_1.default(a.x, a.y), b); }, // @todo: conversion via vec
    /* number */ function (// @todo: conversion via vec
    b) { return multiply_vector3_number_1.default(a, b); }); }, 
    /* Vector2 */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ null, 
    /* Matrix3x3 */ null, 
    /* Matrix2x2 */ null, 
    /* Vector4 */ function (b) { return multiply_vector2_vector2_1.default(a, vec2_1.default(b.x, b.y)); }, // @todo: multiply conversion
    /* Vector3 */ function (// @todo: multiply conversion
    b) { return multiply_vector2_vector2_1.default(a, vec2_1.default(b.x, b.y)); }, // @todo: multiply conversion
    /* Vector2 */ function (// @todo: multiply conversion
    b) { return multiply_vector2_vector2_1.default(a, b); }, 
    /* number */ function (b) { return multiply_vector2_number_1.default(a, b); }); }, 
    /* number */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ function (b) { return multiply_number_matrix4x4_1.default(a, b); }, 
    /* Matrix3x3 */ function (b) { return multiply_number_matrix3x3_1.default(a, b); }, 
    /* Matrix2x2 */ function (b) { return multiply_number_matrix2x2_1.default(a, b); }, 
    /* Vector4 */ function (b) { return multiply_number_vector4_1.default(a, b); }, 
    /* Vector3 */ function (b) { return multiply_number_vector3_1.default(a, b); }, 
    /* Vector2 */ function (b) { return multiply_number_vector2_1.default(a, b); }, 
    /* number */ function (b) { return a * b; }); });
}
exports.default = multiply;
var multiply_number_vector2_1 = __importDefault(__webpack_require__(9449));
var multiply_number_vector3_1 = __importDefault(__webpack_require__(5557));
var multiply_number_vector4_1 = __importDefault(__webpack_require__(287));
var multiply_vector2_number_1 = __importDefault(__webpack_require__(6554));
var multiply_vector2_vector2_1 = __importDefault(__webpack_require__(3696));
var multiply_vector3_number_1 = __importDefault(__webpack_require__(5580));
var multiply_vector3_vector3_1 = __importDefault(__webpack_require__(6587));
var multiply_vector4_number_1 = __importDefault(__webpack_require__(787));
var multiply_vector4_vector4_1 = __importDefault(__webpack_require__(6399));
var multiply_number_matrix4x4_1 = __importDefault(__webpack_require__(2959));
var multiply_number_matrix3x3_1 = __importDefault(__webpack_require__(6075));
var multiply_number_matrix2x2_1 = __importDefault(__webpack_require__(1947));
var multiply_matrix4x4_number_1 = __importDefault(__webpack_require__(562));
var multiply_matrix3x3_number_1 = __importDefault(__webpack_require__(8108));
var multiply_matrix2x2_number_1 = __importDefault(__webpack_require__(5068));
var multiply_matrix4x4_vector4_1 = __importDefault(__webpack_require__(8149));
var multiply_matrix3x3_vector3_1 = __importDefault(__webpack_require__(6428));
var multiply_matrix2x2_vector2_1 = __importDefault(__webpack_require__(956));
var multiply_matrix4x4_matrix4x4_1 = __importDefault(__webpack_require__(4725));
var multiply_matrix3x3_matrix3x3_1 = __importDefault(__webpack_require__(1525));
var multiply_matrix2x2_matrix2x2_1 = __importDefault(__webpack_require__(6430));
var vec3_1 = __importDefault(__webpack_require__(2860));
var vec2_1 = __importDefault(__webpack_require__(2185));
var mat2_1 = __importDefault(__webpack_require__(3194));
var mat3_1 = __importDefault(__webpack_require__(1180));
var deduce_1 = __importDefault(__webpack_require__(1122));


/***/ }),

/***/ 216:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function negateVector2(a) {
    return subtract_vector2_vector2_1.default(vec2_1.default(0), a);
}
exports.default = negateVector2;
var vec2_1 = __importDefault(__webpack_require__(2185));
var subtract_vector2_vector2_1 = __importDefault(__webpack_require__(8077));


/***/ }),

/***/ 2500:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function negateVector3(a) {
    return subtract_vector3_vector3_1.default(vec3_1.default(0), a);
}
exports.default = negateVector3;
var vec3_1 = __importDefault(__webpack_require__(2860));
var subtract_vector3_vector3_1 = __importDefault(__webpack_require__(7450));


/***/ }),

/***/ 9116:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function negateVector4(a) {
    return subtract_vector4_vector4_1.default(vec4_1.default(0), a);
}
exports.default = negateVector4;
var vec4_1 = __importDefault(__webpack_require__(5570));
var subtract_vector4_vector4_1 = __importDefault(__webpack_require__(6743));


/***/ }),

/***/ 5724:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function negate(v) {
    return deduce_1.default(v, null, null, null, function (v) { return negate_vector4_1.default(v); }, function (v) { return negate_vector3_1.default(v); }, function (v) { return negate_vector2_1.default(v); }, function (n) { return -n; });
}
exports.default = negate;
var negate_vector2_1 = __importDefault(__webpack_require__(216));
var negate_vector3_1 = __importDefault(__webpack_require__(2500));
var negate_vector4_1 = __importDefault(__webpack_require__(9116));
var deduce_1 = __importDefault(__webpack_require__(1122));


/***/ }),

/***/ 2630:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var vector2_1 = __importDefault(__webpack_require__(3155));
var NumberVector2 = /** @class */ (function (_super) {
    __extends(NumberVector2, _super);
    function NumberVector2(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.x, x = _c === void 0 ? vector2_1.default.default.x : _c, _d = _b.y, y = _d === void 0 ? vector2_1.default.default.y : _d;
        var _this = _super.call(this) || this;
        _this._x = x;
        _this._y = y;
        return _this;
    }
    Object.defineProperty(NumberVector2.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NumberVector2.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: false,
        configurable: true
    });
    return NumberVector2;
}(vector2_1.default));
exports.default = NumberVector2;


/***/ }),

/***/ 1615:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var vector3_1 = __importDefault(__webpack_require__(5312));
var NumberVector3 = /** @class */ (function (_super) {
    __extends(NumberVector3, _super);
    function NumberVector3(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.x, x = _c === void 0 ? vector3_1.default.default.x : _c, _d = _b.y, y = _d === void 0 ? vector3_1.default.default.y : _d, _e = _b.z, z = _e === void 0 ? vector3_1.default.default.z : _e;
        var _this = _super.call(this) || this;
        _this._x = x;
        _this._y = y;
        _this._z = z;
        return _this;
    }
    Object.defineProperty(NumberVector3.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NumberVector3.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NumberVector3.prototype, "z", {
        get: function () {
            return this._z;
        },
        set: function (z) {
            this._z = z;
        },
        enumerable: false,
        configurable: true
    });
    return NumberVector3;
}(vector3_1.default));
exports.default = NumberVector3;


/***/ }),

/***/ 4634:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var vector4_1 = __importDefault(__webpack_require__(8888));
var NumberVector4 = /** @class */ (function (_super) {
    __extends(NumberVector4, _super);
    function NumberVector4(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.x, x = _c === void 0 ? vector4_1.default.default.x : _c, _d = _b.y, y = _d === void 0 ? vector4_1.default.default.y : _d, _e = _b.z, z = _e === void 0 ? vector4_1.default.default.z : _e, _f = _b.w, w = _f === void 0 ? vector4_1.default.default.w : _f;
        var _this = _super.call(this) || this;
        _this._x = x;
        _this._y = y;
        _this._z = z;
        _this._w = w;
        return _this;
    }
    Object.defineProperty(NumberVector4.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NumberVector4.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NumberVector4.prototype, "z", {
        get: function () {
            return this._z;
        },
        set: function (z) {
            this._z = z;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NumberVector4.prototype, "w", {
        get: function () {
            return this._w;
        },
        set: function (w) {
            this._w = w;
        },
        enumerable: false,
        configurable: true
    });
    return NumberVector4;
}(vector4_1.default));
exports.default = NumberVector4;


/***/ }),

/***/ 5435:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function squareVector2(a) {
    return dot_vector2_vector2_1.default(a, a);
}
exports.default = squareVector2;
var dot_vector2_vector2_1 = __importDefault(__webpack_require__(2965));


/***/ }),

/***/ 614:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function squareVector3(a) {
    return dot_vector3_vector3_1.default(a, a);
}
exports.default = squareVector3;
var dot_vector3_vector3_1 = __importDefault(__webpack_require__(7635));


/***/ }),

/***/ 5554:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function squareVector4(a) {
    return dot_vector4_vector4_1.default(a, a);
}
exports.default = squareVector4;
var dot_vector4_vector4_1 = __importDefault(__webpack_require__(6869));


/***/ }),

/***/ 2034:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function square(v) {
    return deduce_1.default(v, null, null, null, function (v) { return square_vector4_1.default(v); }, function (v) { return square_vector3_1.default(v); }, function (v) { return square_vector2_1.default(v); }, function (v) { return Math.pow(v, 2); });
}
exports.default = square;
var square_vector2_1 = __importDefault(__webpack_require__(5435));
var square_vector3_1 = __importDefault(__webpack_require__(614));
var square_vector4_1 = __importDefault(__webpack_require__(5554));
var deduce_1 = __importDefault(__webpack_require__(1122));


/***/ }),

/***/ 9188:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function subtractMatrix2x2Number(a, b) {
    return mat2_1.default(a[0][0] - b, a[0][1] - b, a[1][0] - b, a[1][1] - b);
}
exports.default = subtractMatrix2x2Number;
var mat2_1 = __importDefault(__webpack_require__(3194));


/***/ }),

/***/ 7565:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function subtractMatrix3x3Number(a, b) {
    return mat3_1.default(a[0][0] - b, a[0][1] - b, a[0][2] - b, a[1][0] - b, a[1][1] - b, a[1][2] - b, a[2][0] - b, a[2][1] - b, a[2][2] - b);
}
exports.default = subtractMatrix3x3Number;
var mat3_1 = __importDefault(__webpack_require__(1180));


/***/ }),

/***/ 2002:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function subtractMatrix4x4Number(a, b) {
    return mat4_1.default(a[0][0] - b, a[0][1] - b, a[0][2] - b, a[0][3] - b, a[1][0] - b, a[1][1] - b, a[1][2] - b, a[1][3] - b, a[2][0] - b, a[2][1] - b, a[2][2] - b, a[2][3] - b, a[3][0] - b, a[3][1] - b, a[3][2] - b, a[3][3] - b);
}
exports.default = subtractMatrix4x4Number;
var mat4_1 = __importDefault(__webpack_require__(8068));


/***/ }),

/***/ 3079:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function subtractNumberMatrix2x2(a, b) {
    return mat2_1.default(a - b[0][0], a - b[0][1], a - b[1][0], a - b[1][1]);
}
exports.default = subtractNumberMatrix2x2;
var mat2_1 = __importDefault(__webpack_require__(3194));


/***/ }),

/***/ 1134:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function subtractNumberMatrix3x3(a, b) {
    return mat3_1.default(a - b[0][0], a - b[0][1], a - b[0][2], a - b[1][0], a - b[1][1], a - b[1][2], a - b[2][0], a - b[2][1], a - b[2][2]);
}
exports.default = subtractNumberMatrix3x3;
var mat3_1 = __importDefault(__webpack_require__(1180));


/***/ }),

/***/ 8915:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function subtractNumberMatrix4x4(a, b) {
    return mat4_1.default(a - b[0][0], a - b[0][1], a - b[0][2], a - b[0][3], a - b[1][0], a - b[1][1], a - b[1][2], a - b[1][3], a - b[2][0], a - b[2][1], a - b[2][2], a - b[2][3], a - b[3][0], a - b[3][1], a - b[3][2], a - b[3][3]);
}
exports.default = subtractNumberMatrix4x4;
var mat4_1 = __importDefault(__webpack_require__(8068));


/***/ }),

/***/ 4267:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function subtractNumberVector2(a, b) {
    return subtract_vector2_vector2_1.default(vec2_1.default(a), b);
}
exports.default = subtractNumberVector2;
var vec2_1 = __importDefault(__webpack_require__(2185));
var subtract_vector2_vector2_1 = __importDefault(__webpack_require__(8077));


/***/ }),

/***/ 5512:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function subtractNumberVector3(a, b) {
    return subtract_vector3_vector3_1.default(vec3_1.default(a), b);
}
exports.default = subtractNumberVector3;
var vec3_1 = __importDefault(__webpack_require__(2860));
var subtract_vector3_vector3_1 = __importDefault(__webpack_require__(7450));


/***/ }),

/***/ 3077:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function subtractNumberVector4(a, b) {
    return subtract_vector4_vector4_1.default(vec4_1.default(a), b);
}
exports.default = subtractNumberVector4;
var vec4_1 = __importDefault(__webpack_require__(5570));
var subtract_vector4_vector4_1 = __importDefault(__webpack_require__(6743));


/***/ }),

/***/ 2898:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function subtractVector2Number(a, b) {
    return subtract_vector2_vector2_1.default(a, vec2_1.default(b));
}
exports.default = subtractVector2Number;
var vec2_1 = __importDefault(__webpack_require__(2185));
var subtract_vector2_vector2_1 = __importDefault(__webpack_require__(8077));


/***/ }),

/***/ 8077:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function subtractVector2Vector2(a, b) {
    return vec2_1.default(a.x - b.x, a.y - b.y);
}
exports.default = subtractVector2Vector2;
var vec2_1 = __importDefault(__webpack_require__(2185));


/***/ }),

/***/ 6963:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function subtractVector3Number(a, b) {
    return subtract_vector3_vector3_1.default(a, vec3_1.default(b));
}
exports.default = subtractVector3Number;
var vec3_1 = __importDefault(__webpack_require__(2860));
var subtract_vector3_vector3_1 = __importDefault(__webpack_require__(7450));


/***/ }),

/***/ 7450:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function subtractVector3Vector3(a, b) {
    return vec3_1.default(a.x - b.x, a.y - b.y, a.z - b.z);
}
exports.default = subtractVector3Vector3;
var vec3_1 = __importDefault(__webpack_require__(2860));


/***/ }),

/***/ 7010:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function subtractVector4Number(a, b) {
    return subtract_vector4_vector4_1.default(a, vec4_1.default(b));
}
exports.default = subtractVector4Number;
var vec4_1 = __importDefault(__webpack_require__(5570));
var subtract_vector4_vector4_1 = __importDefault(__webpack_require__(6743));


/***/ }),

/***/ 6743:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function subtractVector4Vector4(a, b) {
    return vec4_1.default(a.x - b.x, a.y - b.y, a.z - b.z, a.w - b.w);
}
exports.default = subtractVector4Vector4;
var vec4_1 = __importDefault(__webpack_require__(5570));


/***/ }),

/***/ 4140:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function subtract(a, b) {
    return deduce_1.default(a, 
    /* Matrix4x4 */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ null, 
    /* Matrix3x3 */ null, 
    /* Matrix2x2 */ null, 
    /* Vector4 */ null, 
    /* Vector3 */ null, 
    /* Vector2 */ null, 
    /* number */ function (b) { return subtract_matrix4x4_number_1.default(a, b); }); }, 
    /* Matrix3x3 */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ null, 
    /* Matrix3x3 */ null, 
    /* Matrix2x2 */ null, 
    /* Vector4 */ null, 
    /* Vector3 */ null, 
    /* Vector2 */ null, 
    /* number */ function (b) { return subtract_matrix3x3_number_1.default(a, b); }); }, 
    /* Matrix2x2 */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ null, 
    /* Matrix3x3 */ null, 
    /* Matrix2x2 */ null, 
    /* Vector4 */ null, 
    /* Vector3 */ null, 
    /* Vector2 */ null, 
    /* number */ function (b) { return subtract_matrix2x2_number_1.default(a, b); }); }, 
    /* Vector4 */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ null, 
    /* Matrix3x3 */ null, 
    /* Matrix2x2 */ null, 
    /* Vector4 */ function (b) { return subtract_vector4_vector4_1.default(a, b); }, 
    /* Vector3 */ function (b) { return subtract_vector3_vector3_1.default(vec3_1.default(a.x, a.y, a.z), b); }, // @todo: subtract conversion via vec
    /* Vector2 */ function (// @todo: subtract conversion via vec
    b) { return subtract_vector2_vector2_1.default(vec2_1.default(a.x, a.y), b); }, // @todo: subtract conversion via vec
    /* number */ function (// @todo: subtract conversion via vec
    b) { return subtract_vector4_number_1.default(a, b); }); }, 
    /* Vector3 */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ null, 
    /* Matrix3x3 */ null, 
    /* Matrix2x2 */ null, 
    /* Vector4 */ function (b) { return subtract_vector3_vector3_1.default(a, vec3_1.default(b.x, b.y, b.z)); }, // @todo: subtract conversion
    /* Vector3 */ function (// @todo: subtract conversion
    b) { return subtract_vector3_vector3_1.default(a, b); }, 
    /* Vector2 */ function (b) { return subtract_vector2_vector2_1.default(vec2_1.default(a.x, a.y), b); }, // @todo: subtract conversion
    /* number */ function (// @todo: subtract conversion
    b) { return subtract_vector3_number_1.default(a, b); }); }, 
    /* Vector2 */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ null, 
    /* Matrix3x3 */ null, 
    /* Matrix2x2 */ null, 
    /* Vector4 */ function (b) { return subtract_vector2_vector2_1.default(a, vec2_1.default(b.x, b.y)); }, // @todo: subtract conversion
    /* Vector3 */ function (// @todo: subtract conversion
    b) { return subtract_vector2_vector2_1.default(a, vec2_1.default(b.x, b.y)); }, // @todo: subtract conversion
    /* Vector2 */ function (// @todo: subtract conversion
    b) { return subtract_vector2_vector2_1.default(a, b); }, 
    /* number */ function (b) { return subtract_vector2_number_1.default(a, b); }); }, 
    /* number */
    function (a) { return deduce_1.default(b, 
    /* Matrix4x4 */ function (b) { return subtract_number_matrix4x4_1.default(a, b); }, 
    /* Matrix3x3 */ function (b) { return subtract_number_matrix3x3_1.default(a, b); }, 
    /* Matrix2x2 */ function (b) { return subtract_number_matrix2x2_1.default(a, b); }, 
    /* Vector4 */ function (b) { return subtract_number_vector4_1.default(a, b); }, 
    /* Vector3 */ function (b) { return subtract_number_vector3_1.default(a, b); }, 
    /* Vector2 */ function (b) { return subtract_number_vector2_1.default(a, b); }, 
    /* number */ function (b) { return a - b; }); });
}
exports.default = subtract;
var subtract_number_vector2_1 = __importDefault(__webpack_require__(4267));
var subtract_number_vector3_1 = __importDefault(__webpack_require__(5512));
var subtract_number_vector4_1 = __importDefault(__webpack_require__(3077));
var subtract_vector2_number_1 = __importDefault(__webpack_require__(2898));
var subtract_vector2_vector2_1 = __importDefault(__webpack_require__(8077));
var subtract_vector3_number_1 = __importDefault(__webpack_require__(6963));
var subtract_vector3_vector3_1 = __importDefault(__webpack_require__(7450));
var subtract_vector4_number_1 = __importDefault(__webpack_require__(7010));
var subtract_vector4_vector4_1 = __importDefault(__webpack_require__(6743));
var subtract_number_matrix4x4_1 = __importDefault(__webpack_require__(8915));
var subtract_number_matrix3x3_1 = __importDefault(__webpack_require__(1134));
var subtract_number_matrix2x2_1 = __importDefault(__webpack_require__(3079));
var subtract_matrix4x4_number_1 = __importDefault(__webpack_require__(2002));
var subtract_matrix3x3_number_1 = __importDefault(__webpack_require__(7565));
var subtract_matrix2x2_number_1 = __importDefault(__webpack_require__(9188));
var vec3_1 = __importDefault(__webpack_require__(2860));
var vec2_1 = __importDefault(__webpack_require__(2185));
var deduce_1 = __importDefault(__webpack_require__(1122));


/***/ }),

/***/ 2564:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function translate(v) {
    return mat4_1.default.transpose(mat4_1.default(1, 0, 0, v.x, 0, 1, 0, v.y, 0, 0, 1, v.z, 0, 0, 0, 1));
}
exports.default = translate;
var mat4_1 = __importDefault(__webpack_require__(8068));


/***/ }),

/***/ 669:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function transposeMatrix2x2(m) {
    return mat2_1.default(m[0][0], m[1][0], m[0][1], m[1][1]);
}
exports.default = transposeMatrix2x2;
var mat2_1 = __importDefault(__webpack_require__(3194));


/***/ }),

/***/ 8756:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function transposeMatrix3x3(m) {
    return mat3_1.default(m[0][0], m[1][0], m[2][0], m[0][1], m[1][1], m[2][1], m[0][2], m[1][2], m[2][2]);
}
exports.default = transposeMatrix3x3;
var mat3_1 = __importDefault(__webpack_require__(1180));


/***/ }),

/***/ 3129:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function transposeMatrix4x4(m) {
    return mat4_1.default(m[0][0], m[1][0], m[2][0], m[3][0], m[0][1], m[1][1], m[2][1], m[3][1], m[0][2], m[1][2], m[2][2], m[3][2], m[0][3], m[1][3], m[2][3], m[3][3]);
}
exports.default = transposeMatrix4x4;
var mat4_1 = __importDefault(__webpack_require__(8068));


/***/ }),

/***/ 2185:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function vec2(x, y) {
    if (x === undefined)
        return new number_vector2_1.default;
    if (y !== undefined)
        return new number_vector2_1.default({ x: x, y: y });
    if (typeof x === 'number')
        return new number_vector2_1.default({ x: x, y: x });
    return (function (v) {
        var x = vector2_1.default.default.x;
        if ("x" in v) {
            var vx = v.x;
            if (typeof vx === "number")
                x = vx;
        }
        else if (0 in v) {
            var v0 = v[0];
            if (typeof v0 === "number")
                x = v0;
        }
        var y = vector2_1.default.default.y;
        if ("y" in v) {
            var vy = v.y;
            if (typeof vy === "number")
                y = vy;
        }
        else if (1 in v) {
            var v1 = v[1];
            if (typeof v1 === "number")
                y = v1;
        }
        return new number_vector2_1.default({ x: x, y: y });
    })(x);
}
exports.default = vec2;
var number_vector2_1 = __importDefault(__webpack_require__(2630));
var vector2_1 = __importDefault(__webpack_require__(3155));
vec2.default = vector2_1.default.default;


/***/ }),

/***/ 2860:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function vec3(x, y, z) {
    if (x === undefined)
        return new number_vector3_1.default;
    if (y !== undefined)
        return new number_vector3_1.default({ x: x, y: y, z: z });
    if (typeof x === 'number')
        return new number_vector3_1.default({ x: x, y: x, z: x });
    return (function (v) {
        var x = vector3_1.default.default.x;
        if ("x" in v) {
            var vx = v.x;
            if (typeof vx === "number")
                x = vx;
        }
        else if (0 in v) {
            var v0 = v[0];
            if (typeof v0 === "number")
                x = v0;
        }
        var y = vector3_1.default.default.y;
        if ("y" in v) {
            var vy = v.y;
            if (typeof vy === "number")
                y = vy;
        }
        else if (1 in v) {
            var v1 = v[1];
            if (typeof v1 === "number")
                y = v1;
        }
        var z = vector3_1.default.default.z;
        if ("z" in v) {
            var vz = v.z;
            if (typeof vz === "number")
                z = vz;
        }
        else if (2 in v) {
            var v2 = v[2];
            if (typeof v2 === "number")
                z = v2;
        }
        return new number_vector3_1.default({ x: x, y: y, z: z });
    })(x);
}
exports.default = vec3;
var number_vector3_1 = __importDefault(__webpack_require__(1615));
var vector3_1 = __importDefault(__webpack_require__(5312));
vec3.default = vector3_1.default.default;


/***/ }),

/***/ 5570:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function vec4(x, y, z, w) {
    if (x === undefined)
        return new number_vector4_1.default;
    if (y !== undefined)
        return new number_vector4_1.default({ x: x, y: y, z: z, w: w });
    if (typeof x === 'number')
        return new number_vector4_1.default({ x: x, y: x, z: x, w: x });
    return (function (v) {
        var x = vector4_1.default.default.x;
        if ("x" in v) {
            var vx = v.x;
            if (typeof vx === "number")
                x = vx;
        }
        else if (0 in v) {
            var v0 = v[0];
            if (typeof v0 === "number")
                x = v0;
        }
        var y = vector4_1.default.default.y;
        if ("y" in v) {
            var vy = v.y;
            if (typeof vy === "number")
                y = vy;
        }
        else if (1 in v) {
            var v1 = v[1];
            if (typeof v1 === "number")
                y = v1;
        }
        var z = vector4_1.default.default.z;
        if ("z" in v) {
            var vz = v.z;
            if (typeof vz === "number")
                z = vz;
        }
        else if (2 in v) {
            var v2 = v[2];
            if (typeof v2 === "number")
                z = v2;
        }
        var w = vector4_1.default.default.w;
        if ("w" in v) {
            var vw = v.w;
            if (typeof vw === "number")
                w = vw;
        }
        else if (3 in v) {
            var v3 = v[3];
            if (typeof v3 === "number")
                w = v3;
        }
        return new number_vector4_1.default({ x: x, y: y, z: z, w: w });
    })(x);
}
exports.default = vec4;
var number_vector4_1 = __importDefault(__webpack_require__(4634));
var vector4_1 = __importDefault(__webpack_require__(8888));
vec4.default = vector4_1.default.default;


/***/ }),

/***/ 3155:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Vector2 = /** @class */ (function () {
    function Vector2() {
    }
    Object.defineProperty(Vector2.prototype, 0, {
        get: function () {
            return this.x;
        },
        set: function (x) {
            this.x = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, 1, {
        get: function () {
            return this.y;
        },
        set: function (y) {
            this.y = y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "length", {
        get: function () {
            return length_1.default(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "len", {
        get: function () {
            return length_1.default(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "magnitude", {
        get: function () {
            return length_1.default(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "mag", {
        get: function () {
            return length_1.default(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "norm", {
        get: function () {
            return length_1.default(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "square", {
        get: function () {
            return square_1.default(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "sqr", {
        get: function () {
            return this.square;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "negate", {
        get: function () {
            return negate_1.default(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "neg", {
        get: function () {
            return this.negate;
        },
        enumerable: false,
        configurable: true
    });
    Vector2.prototype.set = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Vector2.prototype.clone = function () {
        var _a = this, x = _a.x, y = _a.y;
        return vec2_1.default(x, y);
    };
    Vector2.prototype.add = function (other) {
        // casting to number is a hack to overcome overloading ambiguity
        return add_1.default(this, other);
    };
    Vector2.prototype.subtract = function (other) {
        // casting to number is a hack to overcome overloading ambiguity
        return subtract_1.default(this, other);
    };
    Vector2.prototype.sub = function (other) {
        return this.subtract(other);
    };
    Vector2.prototype.multiply = function (other) {
        // casting to number is a hack to overcome overloading ambiguity
        return multiply_1.default(this, other);
    };
    Vector2.prototype.mul = function (other) {
        return this.multiply(other);
    };
    Vector2.prototype.divide = function (other) {
        // casting to number is a hack to overcome overloading ambiguity
        return divide_1.default(this, other);
    };
    Vector2.prototype.div = function (other) {
        return this.divide(other);
    };
    Vector2.prototype.dot = function (other) {
        return dot_1.default(this, other);
    };
    Vector2.prototype.toArray = function () {
        var _a = this, x = _a.x, y = _a.y;
        return [x, y];
    };
    Vector2.prototype.toString = function () {
        var _a = this, x = _a.x, y = _a.y;
        return "Vector2 { x : " + x + ", y : " + y + " }";
    };
    Vector2.default = { x: 0, y: 0 };
    return Vector2;
}());
exports.default = Vector2;
var vec2_1 = __importDefault(__webpack_require__(2185));
var negate_1 = __importDefault(__webpack_require__(5724));
var add_1 = __importDefault(__webpack_require__(3796));
var subtract_1 = __importDefault(__webpack_require__(4140));
var multiply_1 = __importDefault(__webpack_require__(7554));
var divide_1 = __importDefault(__webpack_require__(8981));
var length_1 = __importDefault(__webpack_require__(7327));
var square_1 = __importDefault(__webpack_require__(2034));
var dot_1 = __importDefault(__webpack_require__(5111));


/***/ }),

/***/ 5312:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Vector3 = /** @class */ (function () {
    function Vector3() {
    }
    Object.defineProperty(Vector3.prototype, 0, {
        get: function () {
            return this.x;
        },
        set: function (x) {
            this.x = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, 1, {
        get: function () {
            return this.y;
        },
        set: function (y) {
            this.y = y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, 2, {
        get: function () {
            return this.z;
        },
        set: function (z) {
            this.z = z;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "length", {
        get: function () {
            return length_1.default(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "len", {
        get: function () {
            return length_1.default(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "magnitude", {
        get: function () {
            return length_1.default(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "mag", {
        get: function () {
            return length_1.default(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "norm", {
        get: function () {
            return length_1.default(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "square", {
        get: function () {
            return square_1.default(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "sqr", {
        get: function () {
            return this.square;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "negate", {
        get: function () {
            return negate_1.default(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "neg", {
        get: function () {
            return this.negate;
        },
        enumerable: false,
        configurable: true
    });
    Vector3.prototype.set = function (x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    };
    Vector3.prototype.clone = function () {
        var _a = this, x = _a.x, y = _a.y, z = _a.z;
        return vec3_1.default(x, y, z);
    };
    Vector3.prototype.add = function (other) {
        // casting to number is a hack to overcome overloading ambiguity
        return add_1.default(this, other);
    };
    Vector3.prototype.subtract = function (other) {
        // casting to number is a hack to overcome overloading ambiguity
        return subtract_1.default(this, other);
    };
    Vector3.prototype.sub = function (other) {
        return this.subtract(other);
    };
    Vector3.prototype.multiply = function (other) {
        // casting to number is a hack to overcome overloading ambiguity
        return multiply_1.default(this, other);
    };
    Vector3.prototype.mul = function (other) {
        return this.multiply(other);
    };
    Vector3.prototype.divide = function (other) {
        // casting to number is a hack to overcome overloading ambiguity
        return divide_1.default(this, other);
    };
    Vector3.prototype.div = function (other) {
        return this.divide(other);
    };
    Vector3.prototype.dot = function (other) {
        return dot_1.default(this, other);
    };
    Vector3.prototype.toArray = function () {
        var _a = this, x = _a.x, y = _a.y, z = _a.z;
        return [x, y, z];
    };
    Vector3.prototype.toString = function () {
        var _a = this, x = _a.x, y = _a.y, z = _a.z;
        return "Vector3 { x : " + x + ", y : " + y + ", z : " + z + " }";
    };
    Vector3.default = { x: 0, y: 0, z: 0 };
    return Vector3;
}());
exports.default = Vector3;
var vec3_1 = __importDefault(__webpack_require__(2860));
var negate_1 = __importDefault(__webpack_require__(5724));
var add_1 = __importDefault(__webpack_require__(3796));
var subtract_1 = __importDefault(__webpack_require__(4140));
var multiply_1 = __importDefault(__webpack_require__(7554));
var divide_1 = __importDefault(__webpack_require__(8981));
var length_1 = __importDefault(__webpack_require__(7327));
var square_1 = __importDefault(__webpack_require__(2034));
var dot_1 = __importDefault(__webpack_require__(5111));


/***/ }),

/***/ 8888:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Vector4 = /** @class */ (function () {
    function Vector4() {
    }
    Object.defineProperty(Vector4.prototype, 0, {
        get: function () {
            return this.x;
        },
        set: function (x) {
            this.x = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector4.prototype, 1, {
        get: function () {
            return this.y;
        },
        set: function (y) {
            this.y = y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector4.prototype, 2, {
        get: function () {
            return this.z;
        },
        set: function (z) {
            this.z = z;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector4.prototype, 3, {
        get: function () {
            return this.w;
        },
        set: function (w) {
            this.w = w;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector4.prototype, "length", {
        get: function () {
            return length_1.default(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector4.prototype, "len", {
        get: function () {
            return length_1.default(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector4.prototype, "magnitude", {
        get: function () {
            return length_1.default(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector4.prototype, "mag", {
        get: function () {
            return length_1.default(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector4.prototype, "norm", {
        get: function () {
            return length_1.default(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector4.prototype, "square", {
        get: function () {
            return square_1.default(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector4.prototype, "sqr", {
        get: function () {
            return this.square;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector4.prototype, "negate", {
        get: function () {
            return negate_1.default(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector4.prototype, "neg", {
        get: function () {
            return this.negate;
        },
        enumerable: false,
        configurable: true
    });
    Vector4.prototype.set = function (x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    };
    Vector4.prototype.clone = function () {
        var _a = this, x = _a.x, y = _a.y, z = _a.z, w = _a.w;
        return vec4_1.default(x, y, z, w);
    };
    Vector4.prototype.add = function (other) {
        // casting to number is a hack to overcome overloading ambiguity
        return add_1.default(this, other);
    };
    Vector4.prototype.subtract = function (other) {
        // casting to number is a hack to overcome overloading ambiguity
        return subtract_1.default(this, other);
    };
    Vector4.prototype.sub = function (other) {
        return this.subtract(other);
    };
    Vector4.prototype.multiply = function (other) {
        // casting to number is a hack to overcome overloading ambiguity
        return multiply_1.default(this, other);
    };
    Vector4.prototype.mul = function (other) {
        return this.multiply(other);
    };
    Vector4.prototype.divide = function (other) {
        // casting to number is a hack to overcome overloading ambiguity
        return divide_1.default(this, other);
    };
    Vector4.prototype.div = function (other) {
        return this.divide(other);
    };
    Vector4.prototype.dot = function (other) {
        return dot_1.default(this, other);
    };
    Vector4.prototype.toArray = function () {
        var _a = this, x = _a.x, y = _a.y, z = _a.z, w = _a.w;
        return [x, y, z, w];
    };
    Vector4.prototype.toString = function () {
        var _a = this, x = _a.x, y = _a.y, z = _a.z, w = _a.w;
        return "Vector4 { x : " + x + ", y : " + y + ", z : " + z + ", w : " + w + " }";
    };
    Vector4.default = { x: 0, y: 0, z: 0, w: 1 };
    return Vector4;
}());
exports.default = Vector4;
var vec4_1 = __importDefault(__webpack_require__(5570));
var negate_1 = __importDefault(__webpack_require__(5724));
var add_1 = __importDefault(__webpack_require__(3796));
var subtract_1 = __importDefault(__webpack_require__(4140));
var multiply_1 = __importDefault(__webpack_require__(7554));
var divide_1 = __importDefault(__webpack_require__(8981));
var length_1 = __importDefault(__webpack_require__(7327));
var square_1 = __importDefault(__webpack_require__(2034));
var dot_1 = __importDefault(__webpack_require__(5111));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(4000);
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;