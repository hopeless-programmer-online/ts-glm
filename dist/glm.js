'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __read(o, n) {
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
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

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

var Matrix2x2Columns = /** @class */ (function () {
    function Matrix2x2Columns() {
    }
    return Matrix2x2Columns;
}());

var Matrix3x3Columns = /** @class */ (function () {
    function Matrix3x3Columns() {
    }
    return Matrix3x3Columns;
}());

var Matrix4x4Columns = /** @class */ (function () {
    function Matrix4x4Columns() {
    }
    return Matrix4x4Columns;
}());

var Matrix2x2Rows = /** @class */ (function () {
    function Matrix2x2Rows() {
    }
    return Matrix2x2Rows;
}());

var Matrix3x3Rows = /** @class */ (function () {
    function Matrix3x3Rows() {
    }
    return Matrix3x3Rows;
}());

var Matrix4x4Rows = /** @class */ (function () {
    function Matrix4x4Rows() {
    }
    return Matrix4x4Rows;
}());

var NumberVector2 = /** @class */ (function (_super) {
    __extends(NumberVector2, _super);
    function NumberVector2(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.x, x = _c === void 0 ? Vector2.default.x : _c, _d = _b.y, y = _d === void 0 ? Vector2.default.y : _d;
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
}(Vector2));

var NumberVector3 = /** @class */ (function (_super) {
    __extends(NumberVector3, _super);
    function NumberVector3(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.x, x = _c === void 0 ? Vector3.default.x : _c, _d = _b.y, y = _d === void 0 ? Vector3.default.y : _d, _e = _b.z, z = _e === void 0 ? Vector3.default.z : _e;
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
}(Vector3));

var NumberVector4 = /** @class */ (function (_super) {
    __extends(NumberVector4, _super);
    function NumberVector4(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.x, x = _c === void 0 ? Vector4.default.x : _c, _d = _b.y, y = _d === void 0 ? Vector4.default.y : _d, _e = _b.z, z = _e === void 0 ? Vector4.default.z : _e, _f = _b.w, w = _f === void 0 ? Vector4.default.w : _f;
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
}(Vector4));

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
    ArrayVector2.default = __assign(__assign({}, Vector2.default), { values: [Vector2.default.x, Vector2.default.y], offset: 0, stride: 1 });
    ArrayVector2.index = {
        x: 0,
        y: 1,
    };
    return ArrayVector2;
}(Vector2));

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
    ArrayVector3.default = __assign(__assign({}, Vector3.default), { values: [Vector3.default.x, Vector3.default.y, Vector3.default.z], offset: 0, stride: 1 });
    ArrayVector3.index = {
        x: 0,
        y: 1,
        z: 2,
    };
    return ArrayVector3;
}(Vector3));

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
    ArrayVector4.default = __assign(__assign({}, Vector4.default), { values: [Vector4.default.x, Vector4.default.y, Vector4.default.z, Vector4.default.w], offset: 0, stride: 1 });
    ArrayVector4.index = {
        x: 0,
        y: 1,
        z: 2,
        w: 3,
    };
    return ArrayVector4;
}(Vector4));

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
        return new ArrayVector2({ values: values, offset: index * 2 });
    };
    return ArrayMatrix2x2Columns;
}(Matrix2x2Columns));

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
        return new ArrayVector2({ values: values, offset: index, stride: 2 });
    };
    return ArrayMatrix2x2Rows;
}(Matrix2x2Rows));

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
            return new ArrayMatrix2x2Columns({ values: values });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayMatrix2x2.prototype, "rows", {
        get: function () {
            var values = this.values;
            return new ArrayMatrix2x2Rows({ values: values });
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
}(Matrix2x2));

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
        return new ArrayVector3({ values: values, offset: index * 3 });
    };
    return ArrayMatrix3x3Columns;
}(Matrix3x3Columns));

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
        return new ArrayVector3({ values: values, offset: index, stride: 3 });
    };
    return ArrayMatrix3x3Rows;
}(Matrix3x3Rows));

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
            return new ArrayMatrix3x3Columns({ values: values });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayMatrix3x3.prototype, "rows", {
        get: function () {
            var values = this.values;
            return new ArrayMatrix3x3Rows({ values: values });
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
}(Matrix3x3));

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
        return new ArrayVector4({ values: values, offset: index * 4 });
    };
    return ArrayMatrix4x4Columns;
}(Matrix4x4Columns));

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
        return new ArrayVector4({ values: values, offset: index, stride: 4 });
    };
    return ArrayMatrix4x4Rows;
}(Matrix4x4Rows));

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
            return new ArrayMatrix4x4Columns({ values: values });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayMatrix4x4.prototype, "rows", {
        get: function () {
            var values = this.values;
            return new ArrayMatrix4x4Rows({ values: values });
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
}(Matrix4x4));

function vec2(x, y) {
    if (x === undefined)
        return new NumberVector2;
    if (y === undefined)
        return new NumberVector2({ x: x, y: x });
    return new NumberVector2({ x: x, y: y });
}

function vec3(x, y, z) {
    if (x === undefined)
        return new NumberVector3;
    if (y === undefined)
        return new NumberVector3({ x: x, y: x, z: x });
    return new NumberVector3({ x: x, y: y, z: z });
}

function vec4(x, y, z, w) {
    if (x === undefined)
        return new NumberVector4;
    if (y === undefined)
        return new NumberVector4({ x: x, y: x, z: x, w: x });
    return new NumberVector4({ x: x, y: y, z: z, w: w });
}

function matrix2x2FromMatrix4x4$1(m) {
    return mat2(m[0][0], m[0][1], m[1][0], m[1][1]);
}

function matrix2x2FromMatrix4x4(m) {
    return mat2(m[0][0], m[0][1], m[1][0], m[1][1]);
}

function transposeMatrix2x2(m) {
    return mat2(m[0][0], m[1][0], m[0][1], m[1][1]);
}

function mat2(m, m01, m10, m11) {
    if (m === undefined)
        return new ArrayMatrix2x2;
    if (typeof m === 'number')
        return new ArrayMatrix2x2({ values: [
                m, m01,
                m10, m11,
            ] });
    if ('3' in m)
        return matrix2x2FromMatrix4x4(m);
    if ('2' in m)
        return matrix2x2FromMatrix4x4$1(m);
    return mat2(m[0][0], m[0][1], m[1][0], m[1][1]);
}
mat2.transpose = transposeMatrix2x2;

function transposeMatrix3x3(m) {
    return mat3(m[0][0], m[1][0], m[2][0], m[0][1], m[1][1], m[2][1], m[0][2], m[1][2], m[2][2]);
}

function matrix3x3FromMatrix4x4(m) {
    return mat3(m[0][0], m[0][1], m[0][2], m[1][0], m[1][1], m[1][2], m[2][0], m[2][1], m[2][2]);
}

function matrix3x3FromMatrix2x2(m) {
    return mat3(m[0][0], m[0][1], 0, m[1][0], m[1][1], 0, 0, 0, 1);
}

function mat3(m, m01, m02, m10, m11, m12, m20, m21, m22) {
    if (m === undefined)
        return new ArrayMatrix3x3;
    if (typeof m === 'number')
        return new ArrayMatrix3x3({ values: [
                m, m01, m02,
                m10, m11, m12,
                m20, m21, m22,
            ] });
    if ('3' in m)
        return matrix3x3FromMatrix4x4(m);
    if ('2' in m)
        return mat3(m[0][0], m[0][1], m[0][2], m[1][0], m[1][1], m[1][2], m[2][0], m[2][1], m[2][2]);
    return matrix3x3FromMatrix2x2(m);
}
mat3.transpose = transposeMatrix3x3;

function transposeMatrix4x4(m) {
    return mat4(m[0][0], m[1][0], m[2][0], m[3][0], m[0][1], m[1][1], m[2][1], m[3][1], m[0][2], m[1][2], m[2][2], m[3][2], m[0][3], m[1][3], m[2][3], m[3][3]);
}

function matrix4x4FromMatrix3x3(m) {
    return mat4(m[0][0], m[0][1], m[0][2], 0, m[1][0], m[1][1], m[1][2], 0, m[2][0], m[2][1], m[2][2], 0, 0, 0, 0, 1);
}

function matrix4x4FromMatrix2x2(m) {
    return mat4(m[0][0], m[0][1], 0, 0, m[1][0], m[1][1], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}

function mat4(m, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    if (m === undefined)
        return new ArrayMatrix4x4;
    if (typeof m === 'number')
        return new ArrayMatrix4x4({ values: [
                m, m01, m02, m03,
                m10, m11, m12, m13,
                m20, m21, m22, m23,
                m30, m31, m32, m33,
            ] });
    // @todo: replace with clone()
    if ('3' in m)
        return mat4(m[0][0], m[0][1], m[0][2], m[0][3], m[1][0], m[1][1], m[1][2], m[1][3], m[2][0], m[2][1], m[2][2], m[2][3], m[3][0], m[3][1], m[3][2], m[3][3]);
    if ('2' in m)
        return matrix4x4FromMatrix3x3(m);
    return matrix4x4FromMatrix2x2(m);
}
mat4.transpose = transposeMatrix4x4;

function multiplyNumberMatrix2x2(a, b) {
    return mat2(a * b[0][0], a * b[0][1], a * b[1][0], a * b[1][1]);
}

function inverseMatrix2x2(m) {
    var d = m[0][0] * m[1][1] - m[0][1] * m[1][0];
    return multiplyNumberMatrix2x2(1 / d, mat2(+m[1][1], -m[0][1], -m[1][0], +m[0][0]));
}

function multiplyNumberMatrix3x3(a, b) {
    return mat3(a * b[0][0], a * b[0][1], a * b[0][2], a * b[1][0], a * b[1][1], a * b[1][2], a * b[2][0], a * b[2][1], a * b[2][2]);
}

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
    return multiplyNumberMatrix3x3(1 / det, mat3(A, B, C, D, E, F, G, H, I));
}

function multiplyNumberMatrix4x4(a, b) {
    return mat4(a * b[0][0], a * b[0][1], a * b[0][2], a * b[0][3], a * b[1][0], a * b[1][1], a * b[1][2], a * b[1][3], a * b[2][0], a * b[2][1], a * b[2][2], a * b[2][3], a * b[3][0], a * b[3][1], a * b[3][2], a * b[3][3]);
}

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
    return multiplyNumberMatrix4x4(1 / det, mat4(A11, A21, A31, A41, A12, A22, A32, A42, A13, A23, A33, A43, A14, A24, A34, A44));
}

function addVector2Vector2(a, b) {
    return vec2(a.x + b.x, a.y + b.y);
}

function addNumberVector2(a, b) {
    return addVector2Vector2(vec2(a), b);
}

function addVector3Vector3(a, b) {
    return vec3(a.x + b.x, a.y + b.y, a.z + b.z);
}

function addNumberVector3(a, b) {
    return addVector3Vector3(vec3(a), b);
}

function addVector4Vector4(a, b) {
    return vec4(a.x + b.x, a.y + b.y, a.z + b.z, a.w + b.w);
}

function addNumberVector4(a, b) {
    return addVector4Vector4(vec4(a), b);
}

function addVector2Number(a, b) {
    return addVector2Vector2(a, vec2(b));
}

function addVector3Number(a, b) {
    return addVector3Vector3(a, vec3(b));
}

function addVector4Number(a, b) {
    return addVector4Vector4(a, vec4(b));
}

function addNumberMatrix4x4(a, b) {
    return mat4(a + b[0][0], a + b[0][1], a + b[0][2], a + b[0][3], a + b[1][0], a + b[1][1], a + b[1][2], a + b[1][3], a + b[2][0], a + b[2][1], a + b[2][2], a + b[2][3], a + b[3][0], a + b[3][1], a + b[3][2], a + b[3][3]);
}

function addNumberMatrix3x3(a, b) {
    return mat3(a + b[0][0], a + b[0][1], a + b[0][2], a + b[1][0], a + b[1][1], a + b[1][2], a + b[2][0], a + b[2][1], a + b[2][2]);
}

function addNumberMatrix2x2(a, b) {
    return mat2(a + b[0][0], a + b[0][1], a + b[1][0], a + b[1][1]);
}

function addMatrix4x4Number(a, b) {
    return mat4(a[0][0] + b, a[0][1] + b, a[0][2] + b, a[0][3] + b, a[1][0] + b, a[1][1] + b, a[1][2] + b, a[1][3] + b, a[2][0] + b, a[2][1] + b, a[2][2] + b, a[2][3] + b, a[3][0] + b, a[3][1] + b, a[3][2] + b, a[3][3] + b);
}

function addMatrix3x3Number(a, b) {
    return mat3(a[0][0] + b, a[0][1] + b, a[0][2] + b, a[1][0] + b, a[1][1] + b, a[1][2] + b, a[2][0] + b, a[2][1] + b, a[2][2] + b);
}

function addMatrix2x2Number(a, b) {
    return mat2(a[0][0] + b, a[0][1] + b, a[1][0] + b, a[1][1] + b);
}

function add(a, b) {
    if (typeof a === 'number') {
        if (typeof b === 'number')
            return a + b;
        if ('3' in b) {
            if (typeof b[3] === 'number')
                return addNumberVector4(a, b);
            return addNumberMatrix4x4(a, b);
        }
        if ('2' in b) {
            if (typeof b[2] === 'number')
                return addNumberVector3(a, b);
            return addNumberMatrix3x3(a, b);
        }
        if (typeof b[1] === 'number')
            return addNumberVector2(a, b);
        return addNumberMatrix2x2(a, b);
    }
    if ('3' in a) {
        if (typeof a[3] === 'number') {
            if (typeof b === 'number')
                return addVector4Number(a, b);
            if ('3' in b)
                return addVector4Vector4(a, b);
            if ('2' in b)
                return addVector3Vector3(a, b);
            return addVector2Vector2(a, b);
        }
        return addMatrix4x4Number(a, b);
    }
    if ('2' in a) {
        if (typeof a[2] === 'number') {
            if (typeof b === 'number')
                return addVector3Number(a, b);
            if ('2' in b)
                return addVector3Vector3(a, b);
            return addVector2Vector2(a, b);
        }
        return addMatrix3x3Number(a, b);
    }
    if (typeof a[1] === 'number') {
        if (typeof b === 'number')
            return addVector2Number(a, b);
        return addVector2Vector2(a, b);
    }
    return addMatrix2x2Number(a, b);
}

function subtractVector2Vector2(a, b) {
    return vec2(a.x - b.x, a.y - b.y);
}

function subtractNumberVector2(a, b) {
    return subtractVector2Vector2(vec2(a), b);
}

function subtractVector3Vector3(a, b) {
    return vec3(a.x - b.x, a.y - b.y, a.z - b.z);
}

function subtractNumberVector3(a, b) {
    return subtractVector3Vector3(vec3(a), b);
}

function subtractVector4Vector4(a, b) {
    return vec4(a.x - b.x, a.y - b.y, a.z - b.z, a.w - b.w);
}

function subtractNumberVector4(a, b) {
    return subtractVector4Vector4(vec4(a), b);
}

function subtractVector2Number(a, b) {
    return subtractVector2Vector2(a, vec2(b));
}

function subtractVector3Number(a, b) {
    return subtractVector3Vector3(a, vec3(b));
}

function subtractVector4Number(a, b) {
    return subtractVector4Vector4(a, vec4(b));
}

function subtractNumberMatrix4x4(a, b) {
    return mat4(a - b[0][0], a - b[0][1], a - b[0][2], a - b[0][3], a - b[1][0], a - b[1][1], a - b[1][2], a - b[1][3], a - b[2][0], a - b[2][1], a - b[2][2], a - b[2][3], a - b[3][0], a - b[3][1], a - b[3][2], a - b[3][3]);
}

function subtractNumberMatrix3x3(a, b) {
    return mat3(a - b[0][0], a - b[0][1], a - b[0][2], a - b[1][0], a - b[1][1], a - b[1][2], a - b[2][0], a - b[2][1], a - b[2][2]);
}

function subtractNumberMatrix2x2(a, b) {
    return mat2(a - b[0][0], a - b[0][1], a - b[1][0], a - b[1][1]);
}

function subtractMatrix4x4Number(a, b) {
    return mat4(a[0][0] - b, a[0][1] - b, a[0][2] - b, a[0][3] - b, a[1][0] - b, a[1][1] - b, a[1][2] - b, a[1][3] - b, a[2][0] - b, a[2][1] - b, a[2][2] - b, a[2][3] - b, a[3][0] - b, a[3][1] - b, a[3][2] - b, a[3][3] - b);
}

function subtractMatrix3x3Number(a, b) {
    return mat3(a[0][0] - b, a[0][1] - b, a[0][2] - b, a[1][0] - b, a[1][1] - b, a[1][2] - b, a[2][0] - b, a[2][1] - b, a[2][2] - b);
}

function subtractMatrix2x2Number(a, b) {
    return mat2(a[0][0] - b, a[0][1] - b, a[1][0] - b, a[1][1] - b);
}

function subtract(a, b) {
    if (typeof a === 'number') {
        if (typeof b === 'number')
            return a - b;
        if ('3' in b) {
            if (typeof b[3] === 'number')
                return subtractNumberVector4(a, b);
            return subtractNumberMatrix4x4(a, b);
        }
        if ('2' in b) {
            if (typeof b[2] === 'number')
                return subtractNumberVector3(a, b);
            return subtractNumberMatrix3x3(a, b);
        }
        if (typeof b[1] === 'number')
            return subtractNumberVector2(a, b);
        return subtractNumberMatrix2x2(a, b);
    }
    if ('3' in a) {
        if (typeof a[3] === 'number') {
            if (typeof b === 'number')
                return subtractVector4Number(a, b);
            if ('3' in b)
                return subtractVector4Vector4(a, b);
            if ('2' in b)
                return subtractVector3Vector3(a, b);
            return subtractVector2Vector2(a, b);
        }
        return subtractMatrix4x4Number(a, b);
    }
    if ('2' in a) {
        if (typeof a[2] === 'number') {
            if (typeof b === 'number')
                return subtractVector3Number(a, b);
            if ('2' in b)
                return subtractVector3Vector3(a, b);
            return subtractVector2Vector2(a, b);
        }
        return subtractMatrix3x3Number(a, b);
    }
    if (typeof a[1] === 'number') {
        if (typeof b === 'number')
            return subtractVector2Number(a, b);
        return subtractVector2Vector2(a, b);
    }
    return subtractMatrix2x2Number(a, b);
}

function multiplyVector2Vector2(a, b) {
    return vec2(a.x * b.x, a.y * b.y);
}

function multiplyNumberVector2(a, b) {
    return multiplyVector2Vector2(vec2(a), b);
}

function multiplyVector3Vector3(a, b) {
    return vec3(a.x * b.x, a.y * b.y, a.z * b.z);
}

function multiplyNumberVector3(a, b) {
    return multiplyVector3Vector3(vec3(a), b);
}

function multiplyVector4Vector4(a, b) {
    return vec4(a.x * b.x, a.y * b.y, a.z * b.z, a.w * b.w);
}

function multiplyNumberVector4(a, b) {
    return multiplyVector4Vector4(vec4(a), b);
}

function multiplyVector2Number(a, b) {
    return multiplyVector2Vector2(a, vec2(b));
}

function multiplyVector3Number(a, b) {
    return multiplyVector3Vector3(a, vec3(b));
}

function multiplyVector4Number(a, b) {
    return multiplyVector4Vector4(a, vec4(b));
}

function multiplyMatrix4x4Number(a, b) {
    return mat4(a[0][0] * b, a[0][1] * b, a[0][2] * b, a[0][3] * b, a[1][0] * b, a[1][1] * b, a[1][2] * b, a[1][3] * b, a[2][0] * b, a[2][1] * b, a[2][2] * b, a[2][3] * b, a[3][0] * b, a[3][1] * b, a[3][2] * b, a[3][3] * b);
}

function multiplyMatrix3x3Number(a, b) {
    return mat3(a[0][0] * b, a[0][1] * b, a[0][2] * b, a[1][0] * b, a[1][1] * b, a[1][2] * b, a[2][0] * b, a[2][1] * b, a[2][2] * b);
}

function multiplyMatrix2x2Number(a, b) {
    return mat2(a[0][0] * b, a[0][1] * b, a[1][0] * b, a[1][1] * b);
}

function dotVector4Vector4(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
}

function multiplyMatrix4x4Vector4(m, v) {
    return vec4(dotVector4Vector4(m.rows[0], v), dotVector4Vector4(m.rows[1], v), dotVector4Vector4(m.rows[2], v), dotVector4Vector4(m.rows[3], v));
}

function dotVector3Vector3(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
}

function multiplyMatrix3x3Vector3(m, v) {
    return vec3(dotVector3Vector3(m.rows[0], v), dotVector3Vector3(m.rows[1], v), dotVector3Vector3(m.rows[2], v));
}

function dotVector2Vector2(a, b) {
    return a.x * b.x + a.y * b.y;
}

function multiplyMatrix2x2Vector2(m, v) {
    return vec2(dotVector2Vector2(m.rows[0], v), dotVector2Vector2(m.rows[1], v));
}

function multiplyMatrix4x4Matrix4x4(a, b) {
    return mat4(dotVector4Vector4(a.rows[0], b.columns[0]), dotVector4Vector4(a.rows[1], b.columns[0]), dotVector4Vector4(a.rows[2], b.columns[0]), dotVector4Vector4(a.rows[3], b.columns[0]), dotVector4Vector4(a.rows[0], b.columns[1]), dotVector4Vector4(a.rows[1], b.columns[1]), dotVector4Vector4(a.rows[2], b.columns[1]), dotVector4Vector4(a.rows[3], b.columns[1]), dotVector4Vector4(a.rows[0], b.columns[2]), dotVector4Vector4(a.rows[1], b.columns[2]), dotVector4Vector4(a.rows[2], b.columns[2]), dotVector4Vector4(a.rows[3], b.columns[2]), dotVector4Vector4(a.rows[0], b.columns[3]), dotVector4Vector4(a.rows[1], b.columns[3]), dotVector4Vector4(a.rows[2], b.columns[3]), dotVector4Vector4(a.rows[3], b.columns[3]));
}

function multiplyMatrix3x3Matrix3x3(a, b) {
    return mat3(dotVector3Vector3(a.rows[0], b.columns[0]), dotVector3Vector3(a.rows[1], b.columns[0]), dotVector3Vector3(a.rows[2], b.columns[0]), dotVector3Vector3(a.rows[0], b.columns[1]), dotVector3Vector3(a.rows[1], b.columns[1]), dotVector3Vector3(a.rows[2], b.columns[1]), dotVector3Vector3(a.rows[0], b.columns[2]), dotVector3Vector3(a.rows[1], b.columns[2]), dotVector3Vector3(a.rows[2], b.columns[2]));
}

function multiplyMatrix2x2Matrix2x2(a, b) {
    return mat2(dotVector2Vector2(a.rows[0], b.columns[0]), dotVector2Vector2(a.rows[1], b.columns[0]), dotVector2Vector2(a.rows[0], b.columns[1]), dotVector2Vector2(a.rows[1], b.columns[1]));
}

function multiply(a, b) {
    if (typeof a === 'number') {
        if (typeof b === 'number')
            return a * b;
        if ('3' in b) {
            if (typeof b[3] === 'number')
                return multiplyNumberVector4(a, b);
            return multiplyNumberMatrix4x4(a, b);
        }
        if ('2' in b) {
            if (typeof b[2] === 'number')
                return multiplyNumberVector3(a, b);
            return multiplyNumberMatrix3x3(a, b);
        }
        if (typeof b[1] === 'number')
            return multiplyNumberVector2(a, b);
        return multiplyNumberMatrix2x2(a, b);
    }
    if ('3' in a) {
        if (typeof a[3] === 'number') {
            if (typeof b === 'number')
                return multiplyVector4Number(a, b);
            if ('3' in b)
                return multiplyVector4Vector4(a, b);
            if ('2' in b)
                return multiplyVector3Vector3(a, b);
            return multiplyVector2Vector2(a, b);
        }
        if (typeof b === 'number')
            return multiplyMatrix4x4Number(a, b);
        if (typeof b[3] === 'number')
            return multiplyMatrix4x4Vector4(a, b);
        return multiplyMatrix4x4Matrix4x4(a, b);
    }
    if ('2' in a) {
        if (typeof a[2] === 'number') {
            if (typeof b === 'number')
                return multiplyVector3Number(a, b);
            if ('2' in b)
                return multiplyVector3Vector3(a, b);
            return multiplyVector2Vector2(a, b);
        }
        if (typeof b === 'number')
            return multiplyMatrix3x3Number(a, b);
        if (typeof b[2] === 'number')
            return multiplyMatrix3x3Vector3(a, b);
        return multiplyMatrix3x3Matrix3x3(a, b);
    }
    if (typeof a[1] === 'number') {
        if (typeof b === 'number')
            return multiplyVector2Number(a, b);
        return multiplyVector2Vector2(a, b);
    }
    if (typeof b === 'number')
        return multiplyMatrix2x2Number(a, b);
    if (typeof b[1] === 'number')
        return multiplyMatrix2x2Vector2(a, b);
    return multiplyMatrix2x2Matrix2x2(a, b);
}

function divideVector2Vector2(a, b) {
    return vec2(a.x / b.x, a.y / b.y);
}

function divideNumberVector2(a, b) {
    return divideVector2Vector2(vec2(a), b);
}

function divideVector3Vector3(a, b) {
    return vec3(a.x / b.x, a.y / b.y, a.z / b.z);
}

function divideNumberVector3(a, b) {
    return divideVector3Vector3(vec3(a), b);
}

function divideVector4Vector4(a, b) {
    return vec4(a.x / b.x, a.y / b.y, a.z / b.z, a.w / b.w);
}

function divideNumberVector4(a, b) {
    return divideVector4Vector4(vec4(a), b);
}

function divideVector2Number(a, b) {
    return divideVector2Vector2(a, vec2(b));
}

function divideVector3Number(a, b) {
    return divideVector3Vector3(a, vec3(b));
}

function divideVector4Number(a, b) {
    return divideVector4Vector4(a, vec4(b));
}

function divideNumberMatrix4x4(a, b) {
    return mat4(a / b[0][0], a / b[0][1], a / b[0][2], a / b[0][3], a / b[1][0], a / b[1][1], a / b[1][2], a / b[1][3], a / b[2][0], a / b[2][1], a / b[2][2], a / b[2][3], a / b[3][0], a / b[3][1], a / b[3][2], a / b[3][3]);
}

function divideNumberMatrix3x3(a, b) {
    return mat3(a / b[0][0], a / b[0][1], a / b[0][2], a / b[1][0], a / b[1][1], a / b[1][2], a / b[2][0], a / b[2][1], a / b[2][2]);
}

function divideNumberMatrix2x2(a, b) {
    return mat2(a / b[0][0], a / b[0][1], a / b[1][0], a / b[1][1]);
}

function divideMatrix4x4Number(a, b) {
    return mat4(a[0][0] / b, a[0][1] / b, a[0][2] / b, a[0][3] / b, a[1][0] / b, a[1][1] / b, a[1][2] / b, a[1][3] / b, a[2][0] / b, a[2][1] / b, a[2][2] / b, a[2][3] / b, a[3][0] / b, a[3][1] / b, a[3][2] / b, a[3][3] / b);
}

function divideMatrix3x3Number(a, b) {
    return mat3(a[0][0] / b, a[0][1] / b, a[0][2] / b, a[1][0] / b, a[1][1] / b, a[1][2] / b, a[2][0] / b, a[2][1] / b, a[2][2] / b);
}

function divideMatrix2x2Number(a, b) {
    return mat2(a[0][0] / b, a[0][1] / b, a[1][0] / b, a[1][1] / b);
}

function divide(a, b) {
    if (typeof a === 'number') {
        if (typeof b === 'number')
            return a / b;
        if ('3' in b) {
            if (typeof b[3] === 'number')
                return divideNumberVector4(a, b);
            return divideNumberMatrix4x4(a, b);
        }
        if ('2' in b) {
            if (typeof b[2] === 'number')
                return divideNumberVector3(a, b);
            return divideNumberMatrix3x3(a, b);
        }
        if (typeof b[1] === 'number')
            return divideNumberVector2(a, b);
        return divideNumberMatrix2x2(a, b);
    }
    if ('3' in a) {
        if (typeof a[3] === 'number') {
            if (typeof b === 'number')
                return divideVector4Number(a, b);
            if ('3' in b)
                return divideVector4Vector4(a, b);
            if ('2' in b)
                return divideVector3Vector3(a, b);
            return divideVector2Vector2(a, b);
        }
        return divideMatrix4x4Number(a, b);
    }
    if ('2' in a) {
        if (typeof a[2] === 'number') {
            if (typeof b === 'number')
                return divideVector3Number(a, b);
            if ('2' in b)
                return divideVector3Vector3(a, b);
            return divideVector2Vector2(a, b);
        }
        return divideMatrix3x3Number(a, b);
    }
    if (typeof a[1] === 'number') {
        if (typeof b === 'number')
            return divideVector2Number(a, b);
        return divideVector2Vector2(a, b);
    }
    return divideMatrix2x2Number(a, b);
}

function dot(a, b) {
    if ('w' in a)
        return dotVector4Vector4(a, b);
    if ('z' in a)
        return dotVector3Vector3(a, b);
    return dotVector2Vector2(a, b);
}

function lengthVector4(v) {
    return Math.pow(dotVector4Vector4(v, v), (1 / 2));
}

function lengthVector3(v) {
    return Math.pow(dotVector3Vector3(v, v), (1 / 2));
}

function lengthVector2(v) {
    return Math.pow(dotVector2Vector2(v, v), (1 / 2));
}

function length(v) {
    if ('w' in v)
        return lengthVector4(v);
    if ('z' in v)
        return lengthVector3(v);
    return lengthVector2(v);
}

function inverse(m) {
    if ('3' in m)
        return inverseMatrix4x4(m);
    if ('2' in m)
        return inverseMatrix3x3(m);
    return inverseMatrix2x2(m);
}

function translate(v) {
    return mat4.transpose(mat4(1, 0, 0, v.x, 0, 1, 0, v.y, 0, 0, 1, v.z, 0, 0, 0, 1));
}

exports.ArrayMatrix2x2 = ArrayMatrix2x2;
exports.ArrayMatrix2x2Columns = ArrayMatrix2x2Columns;
exports.ArrayMatrix2x2Rows = ArrayMatrix2x2Rows;
exports.ArrayMatrix3x3 = ArrayMatrix3x3;
exports.ArrayMatrix3x3Columns = ArrayMatrix3x3Columns;
exports.ArrayMatrix3x3Rows = ArrayMatrix3x3Rows;
exports.ArrayMatrix4x4 = ArrayMatrix4x4;
exports.ArrayMatrix4x4Columns = ArrayMatrix4x4Columns;
exports.ArrayMatrix4x4Rows = ArrayMatrix4x4Rows;
exports.ArrayVector2 = ArrayVector2;
exports.ArrayVector3 = ArrayVector3;
exports.ArrayVector4 = ArrayVector4;
exports.Matrix2x2 = Matrix2x2;
exports.Matrix2x2Columns = Matrix2x2Columns;
exports.Matrix2x2Rows = Matrix2x2Rows;
exports.Matrix3x3 = Matrix3x3;
exports.Matrix3x3Columns = Matrix3x3Columns;
exports.Matrix3x3Rows = Matrix3x3Rows;
exports.Matrix4x4 = Matrix4x4;
exports.Matrix4x4Columns = Matrix4x4Columns;
exports.Matrix4x4Rows = Matrix4x4Rows;
exports.NumberVector2 = NumberVector2;
exports.NumberVector3 = NumberVector3;
exports.NumberVector4 = NumberVector4;
exports.Vector2 = Vector2;
exports.Vector3 = Vector3;
exports.Vector4 = Vector4;
exports.add = add;
exports.addMatrix2x2Number = addMatrix2x2Number;
exports.addMatrix3x3Number = addMatrix3x3Number;
exports.addMatrix4x4Number = addMatrix4x4Number;
exports.addNumberMatrix2x2 = addNumberMatrix2x2;
exports.addNumberMatrix3x3 = addNumberMatrix3x3;
exports.addNumberMatrix4x4 = addNumberMatrix4x4;
exports.addNumberVector2 = addNumberVector2;
exports.addNumberVector3 = addNumberVector3;
exports.addNumberVector4 = addNumberVector4;
exports.addVector2Number = addVector2Number;
exports.addVector2Vector2 = addVector2Vector2;
exports.addVector3Number = addVector3Number;
exports.addVector3Vector3 = addVector3Vector3;
exports.addVector4Number = addVector4Number;
exports.addVector4Vector4 = addVector4Vector4;
exports.div = divide;
exports.divide = divide;
exports.divideMatrix2x2Number = divideMatrix2x2Number;
exports.divideMatrix3x3Number = divideMatrix3x3Number;
exports.divideMatrix4x4Number = divideMatrix4x4Number;
exports.divideNumberMatrix2x2 = divideNumberMatrix2x2;
exports.divideNumberMatrix3x3 = divideNumberMatrix3x3;
exports.divideNumberMatrix4x4 = divideNumberMatrix4x4;
exports.divideNumberVector2 = divideNumberVector2;
exports.divideNumberVector3 = divideNumberVector3;
exports.divideNumberVector4 = divideNumberVector4;
exports.divideVector2Number = divideVector2Number;
exports.divideVector2Vector2 = divideVector2Vector2;
exports.divideVector3Number = divideVector3Number;
exports.divideVector3Vector3 = divideVector3Vector3;
exports.divideVector4Number = divideVector4Number;
exports.divideVector4Vector4 = divideVector4Vector4;
exports.dot = dot;
exports.dotVector2Vector2 = dotVector2Vector2;
exports.dotVector3Vector3 = dotVector3Vector3;
exports.dotVector4Vector4 = dotVector4Vector4;
exports.inv = inverse;
exports.inverse = inverse;
exports.inverseMatrix2x2 = inverseMatrix2x2;
exports.inverseMatrix3x3 = inverseMatrix3x3;
exports.inverseMatrix4x4 = inverseMatrix4x4;
exports.len = length;
exports.length = length;
exports.lengthVector2 = lengthVector2;
exports.lengthVector3 = lengthVector3;
exports.lengthVector4 = lengthVector4;
exports.mat2 = mat2;
exports.mat3 = mat3;
exports.mat4 = mat4;
exports.matrix2x2FromMatrix3x3 = matrix2x2FromMatrix4x4$1;
exports.matrix2x2FromMatrix4x4 = matrix2x2FromMatrix4x4;
exports.matrix3x3FromMatrix2x2 = matrix3x3FromMatrix2x2;
exports.matrix3x3FromMatrix4x4 = matrix3x3FromMatrix4x4;
exports.matrix4x4FromMatrix2x2 = matrix4x4FromMatrix2x2;
exports.matrix4x4FromMatrix3x3 = matrix4x4FromMatrix3x3;
exports.mul = multiply;
exports.multiply = multiply;
exports.multiplyMatrix2x2Matrix2x2 = multiplyMatrix2x2Matrix2x2;
exports.multiplyMatrix2x2Number = multiplyMatrix2x2Number;
exports.multiplyMatrix2x2Vector2 = multiplyMatrix2x2Vector2;
exports.multiplyMatrix3x3Matrix3x3 = multiplyMatrix3x3Matrix3x3;
exports.multiplyMatrix3x3Number = multiplyMatrix3x3Number;
exports.multiplyMatrix3x3Vector3 = multiplyMatrix3x3Vector3;
exports.multiplyMatrix4x4Matrix4x4 = multiplyMatrix4x4Matrix4x4;
exports.multiplyMatrix4x4Number = multiplyMatrix4x4Number;
exports.multiplyMatrix4x4Vector4 = multiplyMatrix4x4Vector4;
exports.multiplyNumberMatrix2x2 = multiplyNumberMatrix2x2;
exports.multiplyNumberMatrix3x3 = multiplyNumberMatrix3x3;
exports.multiplyNumberMatrix4x4 = multiplyNumberMatrix4x4;
exports.multiplyNumberVector2 = multiplyNumberVector2;
exports.multiplyNumberVector3 = multiplyNumberVector3;
exports.multiplyNumberVector4 = multiplyNumberVector4;
exports.multiplyVector2Number = multiplyVector2Number;
exports.multiplyVector2Vector2 = multiplyVector2Vector2;
exports.multiplyVector3Number = multiplyVector3Number;
exports.multiplyVector3Vector3 = multiplyVector3Vector3;
exports.multiplyVector4Number = multiplyVector4Number;
exports.multiplyVector4Vector4 = multiplyVector4Vector4;
exports.sub = subtract;
exports.subtract = subtract;
exports.subtractMatrix2x2Number = subtractMatrix2x2Number;
exports.subtractMatrix3x3Number = subtractMatrix3x3Number;
exports.subtractMatrix4x4Number = subtractMatrix4x4Number;
exports.subtractNumberMatrix2x2 = subtractNumberMatrix2x2;
exports.subtractNumberMatrix3x3 = subtractNumberMatrix3x3;
exports.subtractNumberMatrix4x4 = subtractNumberMatrix4x4;
exports.subtractNumberVector2 = subtractNumberVector2;
exports.subtractNumberVector3 = subtractNumberVector3;
exports.subtractNumberVector4 = subtractNumberVector4;
exports.subtractVector2Number = subtractVector2Number;
exports.subtractVector2Vector2 = subtractVector2Vector2;
exports.subtractVector3Number = subtractVector3Number;
exports.subtractVector3Vector3 = subtractVector3Vector3;
exports.subtractVector4Number = subtractVector4Number;
exports.subtractVector4Vector4 = subtractVector4Vector4;
exports.translate = translate;
exports.transposeMatrix2x2 = transposeMatrix2x2;
exports.transposeMatrix3x3 = transposeMatrix3x3;
exports.transposeMatrix4x4 = transposeMatrix4x4;
exports.vec2 = vec2;
exports.vec3 = vec3;
exports.vec4 = vec4;
