declare type Vector2Like = (({
    x: number;
} | {
    0: number;
}) & ({
    y: number;
} | {
    1: number;
})) | [number, number];

declare type Vector2Array = [number, number];

declare abstract class Vector2 {
    static default: {
        x: number;
        y: number;
    };
    abstract get x(): number;
    abstract set x(x: number);
    abstract get y(): number;
    abstract set y(y: number);
    get [0](): number;
    set [0](x: number);
    get [1](): number;
    set [1](y: number);
    get length(): number;
    get len(): number;
    get magnitude(): number;
    get mag(): number;
    get norm(): number;
    get square(): number;
    get sqr(): any;
    get negate(): number;
    get neg(): any;
    set(x: number, y: number): void;
    clone(): Vector2;
    add(other: Vector2Like | number): Vector2;
    subtract(other: Vector2Like | number): Vector2;
    sub(other: Vector2Like | number): Vector2;
    multiply(other: Vector2Like | number): Vector2;
    mul(other: Vector2Like | number): Vector2;
    divide(other: Vector2Like | number): Vector2;
    div(other: Vector2Like | number): Vector2;
    toArray(): Vector2Array;
    toString(): string;
}

declare type Vector3Array = [number, number, number];

declare abstract class Vector3 {
    static default: {
        x: number;
        y: number;
        z: number;
    };
    abstract get x(): number;
    abstract set x(x: number);
    abstract get y(): number;
    abstract set y(y: number);
    abstract get z(): number;
    abstract set z(z: number);
    get [0](): number;
    set [0](x: number);
    get [1](): number;
    set [1](y: number);
    get [2](): number;
    set [2](z: number);
    get length(): number;
    get len(): number;
    get magnitude(): number;
    get mag(): number;
    get norm(): number;
    get square(): number;
    get sqr(): any;
    get negate(): number;
    get neg(): any;
    set(x: number, y: number, z: number): void;
    clone(): Vector3;
    add(other: Vector2Like | number): Vector3;
    subtract(other: Vector2Like | number): Vector3;
    sub(other: Vector2Like | number): Vector3;
    multiply(other: Vector2Like | number): Vector3;
    mul(other: Vector2Like | number): Vector3;
    divide(other: Vector2Like | number): Vector3;
    div(other: Vector2Like | number): Vector3;
    toArray(): Vector3Array;
    toString(): string;
}

declare type Vector4Array = [number, number, number, number];

declare abstract class Vector4 {
    static default: {
        x: number;
        y: number;
        z: number;
        w: number;
    };
    abstract get x(): number;
    abstract set x(x: number);
    abstract get y(): number;
    abstract set y(y: number);
    abstract get z(): number;
    abstract set z(z: number);
    abstract get w(): number;
    abstract set w(w: number);
    get [0](): number;
    set [0](x: number);
    get [1](): number;
    set [1](y: number);
    get [2](): number;
    set [2](z: number);
    get [3](): number;
    set [3](w: number);
    get length(): number;
    get len(): number;
    get magnitude(): number;
    get mag(): number;
    get norm(): number;
    get square(): number;
    get sqr(): number;
    get negate(): number;
    get neg(): number;
    set(x: number, y: number, z: number, w: number): void;
    clone(): Vector4;
    add(other: Vector2Like | number): Vector4;
    subtract(other: Vector2Like | number): Vector4;
    sub(other: Vector2Like | number): Vector4;
    multiply(other: Vector2Like | number): Vector4;
    mul(other: Vector2Like | number): Vector4;
    divide(other: Vector2Like | number): Vector4;
    div(other: Vector2Like | number): Vector4;
    toArray(): Vector4Array;
    toString(): string;
}

declare type Vector3Like = (({
    x: number;
} | {
    0: number;
}) & ({
    y: number;
} | {
    1: number;
}) & ({
    z: number;
} | {
    2: number;
})) | [number, number, number];

declare type Vector4Like = (({
    x: number;
} | {
    0: number;
}) & ({
    y: number;
} | {
    1: number;
}) & ({
    z: number;
} | {
    2: number;
}) & ({
    w: number;
} | {
    3: number;
})) | [number, number, number, number];

declare type Matrix2x2Array = [
    number,
    number,
    number,
    number
];

declare abstract class Matrix2x2Columns {
    abstract get [0](): Vector2;
    abstract get [1](): Vector2;
}

declare abstract class Matrix2x2Rows {
    abstract get [0](): Vector2;
    abstract get [1](): Vector2;
}

declare abstract class Matrix2x2 {
    abstract get columns(): Matrix2x2Columns;
    abstract get rows(): Matrix2x2Rows;
    get [0](): Vector2;
    get [1](): Vector2;
    clone(): Matrix2x2;
    toArray(): Matrix2x2Array;
    toString(): string;
}

declare type Matrix3x3Array = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
];

declare abstract class Matrix3x3Columns {
    abstract get [0](): Vector3;
    abstract get [1](): Vector3;
    abstract get [2](): Vector3;
}

declare abstract class Matrix3x3Rows {
    abstract get [0](): Vector3;
    abstract get [1](): Vector3;
    abstract get [2](): Vector3;
}

declare abstract class Matrix3x3 {
    abstract get columns(): Matrix3x3Columns;
    abstract get rows(): Matrix3x3Rows;
    get [0](): Vector3;
    get [1](): Vector3;
    get [2](): Vector3;
    clone(): Matrix3x3;
    toArray(): Matrix3x3Array;
    toString(): string;
}

declare type Matrix4x4Array = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
];

declare abstract class Matrix4x4Columns {
    abstract get [0](): Vector4;
    abstract get [1](): Vector4;
    abstract get [2](): Vector4;
    abstract get [3](): Vector4;
}

declare abstract class Matrix4x4Rows {
    abstract get [0](): Vector4;
    abstract get [1](): Vector4;
    abstract get [2](): Vector4;
    abstract get [3](): Vector4;
}

declare abstract class Matrix4x4 {
    abstract get columns(): Matrix4x4Columns;
    abstract get rows(): Matrix4x4Rows;
    get [0](): Vector4;
    get [1](): Vector4;
    get [2](): Vector4;
    get [3](): Vector4;
    clone(): Matrix4x4;
    toArray(): Matrix4x4Array;
    toString(): string;
}

declare type Matrix2x2Like = (({
    x: Vector2Like;
} | {
    0: Vector2Like;
}) & ({
    y: Vector2Like;
} | {
    1: Vector2Like;
})) | [Vector2Like, Vector2Like];

declare type Matrix3x3Like = (({
    x: Vector3Like;
} | {
    0: Vector3Like;
}) & ({
    y: Vector3Like;
} | {
    1: Vector3Like;
}) & ({
    z: Vector3Like;
} | {
    2: Vector3Like;
})) | [Vector3Like, Vector3Like, Vector3Like];

declare type Matrix4x4Like = (({
    x: Vector4Like;
} | {
    0: Vector4Like;
}) & ({
    y: Vector4Like;
} | {
    1: Vector4Like;
}) & ({
    z: Vector4Like;
} | {
    2: Vector4Like;
}) & ({
    w: Vector4Like;
} | {
    3: Vector4Like;
})) | [Vector4Like, Vector4Like, Vector4Like, Vector4Like];

declare class NumberVector2 extends Vector2 {
    private _x;
    private _y;
    constructor({ x, y }?: {
        x?: number;
        y?: number;
    });
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
}

declare class NumberVector3 extends Vector3 {
    private _x;
    private _y;
    private _z;
    constructor({ x, y, z }?: {
        x?: number;
        y?: number;
        z?: number;
    });
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    get z(): number;
    set z(z: number);
}

declare class NumberVector4 extends Vector4 {
    private _x;
    private _y;
    private _z;
    private _w;
    constructor({ x, y, z, w }?: {
        x?: number;
        y?: number;
        z?: number;
        w?: number;
    });
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    get z(): number;
    set z(z: number);
    get w(): number;
    set w(w: number);
}

declare type Values$5 = number[];
declare type Offset$2 = number;
declare type Stride$2 = number;
declare type Index$2 = 0 | 1;
declare class ArrayVector2 extends Vector2 {
    static default: {
        values: number[];
        offset: number;
        stride: number;
        x: number;
        y: number;
    };
    static index: {
        x: Index$2;
        y: Index$2;
    };
    private readonly values;
    private readonly offset;
    private readonly stride;
    constructor({ values, offset, stride }?: {
        values?: Values$5;
        offset?: Offset$2;
        stride?: Stride$2;
    });
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    private getByIndex;
    private setByIndex;
}

declare type Values$4 = number[];
declare type Offset$1 = number;
declare type Stride$1 = number;
declare type Index$1 = 0 | 1 | 2;
declare class ArrayVector3 extends Vector3 {
    static default: {
        values: number[];
        offset: number;
        stride: number;
        x: number;
        y: number;
        z: number;
    };
    static index: {
        x: Index$1;
        y: Index$1;
        z: Index$1;
    };
    private readonly values;
    private readonly offset;
    private readonly stride;
    constructor({ values, offset, stride }?: {
        values?: Values$4;
        offset?: Offset$1;
        stride?: Stride$1;
    });
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    get z(): number;
    set z(z: number);
    private getByIndex;
    private setByIndex;
}

declare type Values$3 = number[];
declare type Offset = number;
declare type Stride = number;
declare type Index = 0 | 1 | 2 | 3;
declare class ArrayVector4 extends Vector4 {
    static default: {
        values: number[];
        offset: number;
        stride: number;
        x: number;
        y: number;
        z: number;
        w: number;
    };
    static index: {
        x: Index;
        y: Index;
        z: Index;
        w: Index;
    };
    private readonly values;
    private readonly offset;
    private readonly stride;
    constructor({ values, offset, stride }?: {
        values?: Values$3;
        offset?: Offset;
        stride?: Stride;
    });
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    get z(): number;
    set z(z: number);
    get w(): number;
    set w(w: number);
    private getByIndex;
    private setByIndex;
}

declare class ArrayMatrix2x2Columns extends Matrix2x2Columns {
    private values;
    constructor({ values }: {
        values: number[];
    });
    get [0](): ArrayVector2;
    get [1](): ArrayVector2;
    private getByIndex;
}

declare class ArrayMatrix2x2Rows extends Matrix2x2Rows {
    private values;
    constructor({ values }: {
        values: number[];
    });
    get [0](): ArrayVector2;
    get [1](): ArrayVector2;
    private getByIndex;
}

declare type Values$2 = [number, number, number, number];
declare class ArrayMatrix2x2 extends Matrix2x2 {
    static default: {
        values: Values$2;
    };
    private values;
    constructor({ values }?: {
        values?: Values$2;
    });
    get columns(): ArrayMatrix2x2Columns;
    get rows(): ArrayMatrix2x2Rows;
}

declare class ArrayMatrix3x3Columns extends Matrix3x3Columns {
    private values;
    constructor({ values }: {
        values: number[];
    });
    get [0](): ArrayVector3;
    get [1](): ArrayVector3;
    get [2](): ArrayVector3;
    private getByIndex;
}

declare class ArrayMatrix3x3Rows extends Matrix3x3Rows {
    private values;
    constructor({ values }: {
        values: number[];
    });
    get [0](): ArrayVector3;
    get [1](): ArrayVector3;
    get [2](): ArrayVector3;
    private getByIndex;
}

declare type Values$1 = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
];
declare class ArrayMatrix3x3 extends Matrix3x3 {
    static default: {
        values: Values$1;
    };
    private values;
    constructor({ values }?: {
        values?: Values$1;
    });
    get columns(): ArrayMatrix3x3Columns;
    get rows(): ArrayMatrix3x3Rows;
}

declare class ArrayMatrix4x4Columns extends Matrix4x4Columns {
    private values;
    constructor({ values }: {
        values: number[];
    });
    get [0](): ArrayVector4;
    get [1](): ArrayVector4;
    get [2](): ArrayVector4;
    get [3](): ArrayVector4;
    private getByIndex;
}

declare class ArrayMatrix4x4Rows extends Matrix4x4Rows {
    private values;
    constructor({ values }: {
        values: number[];
    });
    get [0](): ArrayVector4;
    get [1](): ArrayVector4;
    get [2](): ArrayVector4;
    get [3](): ArrayVector4;
    private getByIndex;
}

declare type Values = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
];
declare class ArrayMatrix4x4 extends Matrix4x4 {
    static default: {
        values: Values;
    };
    private values;
    constructor({ values }?: {
        values?: Values;
    });
    get columns(): ArrayMatrix4x4Columns;
    get rows(): ArrayMatrix4x4Rows;
}

declare function vec2(): Vector2;
declare namespace vec2 {
    var _a: {
        x: number;
        y: number;
    };
    export { _a as default };
}
declare function vec2(scalar: any): Vector2;
declare namespace vec2 {
    var _a: {
        x: number;
        y: number;
    };
    export { _a as default };
}
declare function vec2(x: number, y: number): Vector2;
declare namespace vec2 {
    var _a: {
        x: number;
        y: number;
    };
    export { _a as default };
}

declare function vec3(): Vector3;
declare namespace vec3 {
    var _a: {
        x: number;
        y: number;
        z: number;
    };
    export { _a as default };
}
declare function vec3(scalar: number): Vector3;
declare namespace vec3 {
    var _a: {
        x: number;
        y: number;
        z: number;
    };
    export { _a as default };
}
declare function vec3(x: number, y: number, z: number): Vector3;
declare namespace vec3 {
    var _a: {
        x: number;
        y: number;
        z: number;
    };
    export { _a as default };
}

declare function vec4(): Vector4;
declare namespace vec4 {
    var _a: {
        x: number;
        y: number;
        z: number;
        w: number;
    };
    export { _a as default };
}
declare function vec4(scalar: number): Vector4;
declare namespace vec4 {
    var _a: {
        x: number;
        y: number;
        z: number;
        w: number;
    };
    export { _a as default };
}
declare function vec4(x: number, y: number, z: number, w: number): Vector4;
declare namespace vec4 {
    var _a: {
        x: number;
        y: number;
        z: number;
        w: number;
    };
    export { _a as default };
}

declare function transposeMatrix2x2(m: Matrix2x2): Matrix2x2;

declare function mat2(m00: number, m01: number, m10: number, m11: number): Matrix2x2;
declare namespace mat2 {
    var transpose: typeof transposeMatrix2x2;
}
declare function mat2(m: Matrix4x4): Matrix2x2;
declare namespace mat2 {
    var transpose: typeof transposeMatrix2x2;
}
declare function mat2(m: Matrix3x3): Matrix2x2;
declare namespace mat2 {
    var transpose: typeof transposeMatrix2x2;
}
declare function mat2(m: Matrix2x2): Matrix2x2;
declare namespace mat2 {
    var transpose: typeof transposeMatrix2x2;
}
declare function mat2(): Matrix2x2;
declare namespace mat2 {
    var transpose: typeof transposeMatrix2x2;
}

declare function transposeMatrix3x3(m: Matrix3x3): Matrix3x3;

declare function mat3(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): Matrix3x3;
declare namespace mat3 {
    var transpose: typeof transposeMatrix3x3;
}
declare function mat3(m: Matrix4x4): Matrix3x3;
declare namespace mat3 {
    var transpose: typeof transposeMatrix3x3;
}
declare function mat3(m: Matrix3x3): Matrix3x3;
declare namespace mat3 {
    var transpose: typeof transposeMatrix3x3;
}
declare function mat3(m: Matrix2x2): Matrix3x3;
declare namespace mat3 {
    var transpose: typeof transposeMatrix3x3;
}
declare function mat3(): Matrix3x3;
declare namespace mat3 {
    var transpose: typeof transposeMatrix3x3;
}

declare function transposeMatrix4x4(m: Matrix4x4): Matrix4x4;

declare function mat4(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): Matrix4x4;
declare namespace mat4 {
    var transpose: typeof transposeMatrix4x4;
}
declare function mat4(m: Matrix4x4): Matrix4x4;
declare namespace mat4 {
    var transpose: typeof transposeMatrix4x4;
}
declare function mat4(m: Matrix3x3): Matrix4x4;
declare namespace mat4 {
    var transpose: typeof transposeMatrix4x4;
}
declare function mat4(m: Matrix2x2): Matrix4x4;
declare namespace mat4 {
    var transpose: typeof transposeMatrix4x4;
}
declare function mat4(): Matrix4x4;
declare namespace mat4 {
    var transpose: typeof transposeMatrix4x4;
}

declare function matrix2x2FromMatrix4x4$1(m: Matrix4x4): Matrix2x2;

declare function matrix2x2FromMatrix4x4(m: Matrix3x3): Matrix2x2;

declare function matrix3x3FromMatrix2x2(m: Matrix2x2): Matrix3x3;

declare function matrix3x3FromMatrix4x4(m: Matrix4x4): Matrix3x3;

declare function matrix4x4FromMatrix2x2(m: Matrix2x2): Matrix4x4;

declare function matrix4x4FromMatrix3x3(m: Matrix3x3): Matrix4x4;

declare function inverseMatrix2x2(m: Matrix2x2): Matrix2x2;

declare function inverseMatrix3x3(m: Matrix3x3): Matrix3x3;

declare function inverseMatrix4x4(m: Matrix4x4): Matrix4x4;

declare function negate(v: Vector4Like): number;
declare function negate(v: Vector3Like): number;
declare function negate(v: Vector2Like): number;
declare function negate(v: number): number;

declare function add(a: Matrix4x4Like, b: number): Matrix4x4;
declare function add(a: Matrix3x3Like, b: number): Matrix3x3;
declare function add(a: Matrix2x2Like, b: number): Matrix2x2;
declare function add(a: Vector4Like, b: Vector4Like): Vector4;
declare function add(a: Vector4Like, b: number): Vector4;
declare function add(a: Vector3Like, b: Vector3Like): Vector3;
declare function add(a: Vector3Like, b: number): Vector3;
declare function add(a: Vector2Like, b: Vector2Like): Vector2;
declare function add(a: Vector2Like, b: number): Vector2;
declare function add(a: number, b: Matrix4x4Like): Matrix4x4;
declare function add(a: number, b: Matrix3x3Like): Matrix3x3;
declare function add(a: number, b: Matrix2x2Like): Matrix2x2;
declare function add(a: number, b: Vector4Like): Vector4;
declare function add(a: number, b: Vector3Like): Vector3;
declare function add(a: number, b: Vector2Like): Vector2;
declare function add(a: number, b: number): number;

declare function subtract(a: Matrix4x4Like, b: number): Matrix4x4;
declare function subtract(a: Matrix3x3Like, b: number): Matrix3x3;
declare function subtract(a: Matrix2x2Like, b: number): Matrix2x2;
declare function subtract(a: Vector4Like, b: Vector4Like): Vector4;
declare function subtract(a: Vector4Like, b: number): Vector4;
declare function subtract(a: Vector3Like, b: Vector3Like): Vector3;
declare function subtract(a: Vector3Like, b: number): Vector3;
declare function subtract(a: Vector2Like, b: Vector2Like): Vector2;
declare function subtract(a: Vector2Like, b: number): Vector2;
declare function subtract(a: number, b: Matrix4x4Like): Matrix4x4;
declare function subtract(a: number, b: Matrix3x3Like): Matrix3x3;
declare function subtract(a: number, b: Matrix2x2Like): Matrix2x2;
declare function subtract(a: number, b: Vector4Like): Vector4;
declare function subtract(a: number, b: Vector3Like): Vector3;
declare function subtract(a: number, b: Vector2Like): Vector2;
declare function subtract(a: number, b: number): number;

declare function multiply(a: Matrix4x4Like, b: Matrix4x4Like): Matrix4x4;
declare function multiply(a: Matrix4x4Like, b: Vector4Like): Vector4;
declare function multiply(a: Matrix4x4Like, b: number): Matrix4x4;
declare function multiply(a: Matrix3x3Like, b: Matrix3x3Like): Matrix3x3;
declare function multiply(a: Matrix3x3Like, b: Vector3Like): Vector3;
declare function multiply(a: Matrix3x3Like, b: number): Matrix3x3;
declare function multiply(a: Matrix2x2Like, b: Matrix2x2Like): Matrix2x2;
declare function multiply(a: Matrix2x2Like, b: Vector2Like): Vector2;
declare function multiply(a: Matrix2x2Like, b: number): Matrix2x2;
declare function multiply(a: Vector4Like, b: Vector4Like): Vector4;
declare function multiply(a: Vector4Like, b: number): Vector4;
declare function multiply(a: Vector3Like, b: Vector3Like): Vector3;
declare function multiply(a: Vector3Like, b: number): Vector3;
declare function multiply(a: Vector2Like, b: Vector2Like): Vector2;
declare function multiply(a: Vector2Like, b: number): Vector2;
declare function multiply(a: number, b: Matrix4x4Like): Matrix4x4;
declare function multiply(a: number, b: Matrix3x3Like): Matrix3x3;
declare function multiply(a: number, b: Matrix2x2Like): Matrix2x2;
declare function multiply(a: number, b: Vector4Like): Vector4;
declare function multiply(a: number, b: Vector3Like): Vector3;
declare function multiply(a: number, b: Vector2Like): Vector2;
declare function multiply(a: number, b: number): number;

declare function divide(a: Matrix4x4Like, b: number): Matrix4x4;
declare function divide(a: Matrix3x3Like, b: number): Matrix3x3;
declare function divide(a: Matrix2x2Like, b: number): Matrix2x2;
declare function divide(a: Vector4Like, b: Vector4Like): Vector4;
declare function divide(a: Vector4Like, b: number): Vector4;
declare function divide(a: Vector3Like, b: Vector3Like): Vector3;
declare function divide(a: Vector3Like, b: number): Vector3;
declare function divide(a: Vector2Like, b: Vector2Like): Vector2;
declare function divide(a: Vector2Like, b: number): Vector2;
declare function divide(a: number, b: Matrix4x4Like): Matrix4x4;
declare function divide(a: number, b: Matrix3x3Like): Matrix3x3;
declare function divide(a: number, b: Matrix2x2Like): Matrix2x2;
declare function divide(a: number, b: Vector4Like): Vector4;
declare function divide(a: number, b: Vector3Like): Vector3;
declare function divide(a: number, b: Vector2Like): Vector2;
declare function divide(a: number, b: number): number;

declare function dot(a: Vector2, b: Vector2): number;
declare function dot(a: Vector3, b: Vector3): number;
declare function dot(a: Vector4, b: Vector4): number;

declare function square(v: Vector4Like): number;
declare function square(v: Vector3Like): number;
declare function square(v: Vector2Like): number;
declare function square(v: number): number;

declare function length(v: Vector2): number;
declare function length(v: Vector3): number;
declare function length(v: Vector4): number;

declare function inverse(m: Matrix2x2): Matrix2x2;
declare function inverse(m: Matrix3x3): Matrix3x3;
declare function inverse(m: Matrix4x4): Matrix4x4;

declare function negateVector2(a: Vector2): Vector2;

declare function negateVector3(a: Vector3): Vector3;

declare function negateVector4(a: Vector4): Vector4;

declare function addNumberVector2(a: number, b: Vector2): Vector2;

declare function addNumberVector3(a: number, b: Vector3): Vector3;

declare function addNumberVector4(a: number, b: Vector4): Vector4;

declare function addNumberMatrix2x2(a: number, b: Matrix2x2): Matrix2x2;

declare function addNumberMatrix3x3(a: number, b: Matrix3x3): Matrix3x3;

declare function addNumberMatrix4x4(a: number, b: Matrix4x4): Matrix4x4;

declare function addVector2Number(a: Vector2, b: number): Vector2;

declare function addVector2Vector2(a: Vector2, b: Vector2): Vector2;

declare function addVector3Number(a: Vector3, b: number): Vector3;

declare function addVector3Vector3(a: Vector3, b: Vector3): Vector3;

declare function addVector4Number(a: Vector4, b: number): Vector4;

declare function addVector4Vector4(a: Vector4, b: Vector4): Vector4;

declare function addMatrix2x2Number(a: Matrix2x2, b: number): Matrix2x2;

declare function addMatrix3x3Number(a: Matrix3x3, b: number): Matrix3x3;

declare function addMatrix4x4Number(a: Matrix4x4, b: number): Matrix4x4;

declare function subtractNumberVector2(a: number, b: Vector2): Vector2;

declare function subtractNumberVector3(a: number, b: Vector3): Vector3;

declare function subtractNumberVector4(a: number, b: Vector4): Vector4;

declare function subtractNumberMatrix2x2(a: number, b: Matrix2x2): Matrix2x2;

declare function subtractNumberMatrix3x3(a: number, b: Matrix3x3): Matrix3x3;

declare function subtractNumberMatrix4x4(a: number, b: Matrix4x4): Matrix4x4;

declare function subtractVector2Number(a: Vector2, b: number): Vector2;

declare function subtractVector2Vector2(a: Vector2, b: Vector2): Vector2;

declare function subtractVector3Number(a: Vector3, b: number): Vector3;

declare function subtractVector3Vector3(a: Vector3, b: Vector3): Vector3;

declare function subtractVector4Number(a: Vector4, b: number): Vector4;

declare function subtractVector4Vector4(a: Vector4, b: Vector4): Vector4;

declare function subtractMatrix2x2Number(a: Matrix2x2, b: number): Matrix2x2;

declare function subtractMatrix3x3Number(a: Matrix3x3, b: number): Matrix3x3;

declare function subtractMatrix4x4Number(a: Matrix4x4, b: number): Matrix4x4;

declare function multiplyNumberVector2(a: number, b: Vector2): Vector2;

declare function multiplyNumberVector3(a: number, b: Vector3): Vector3;

declare function multiplyNumberVector4(a: number, b: Vector4): Vector4;

declare function multiplyNumberMatrix2x2(a: number, b: Matrix2x2): Matrix2x2;

declare function multiplyNumberMatrix3x3(a: number, b: Matrix3x3): Matrix3x3;

declare function multiplyNumberMatrix4x4(a: number, b: Matrix4x4): Matrix4x4;

declare function multiplyVector2Number(a: Vector2, b: number): Vector2;

declare function multiplyVector2Vector2(a: Vector2, b: Vector2): Vector2;

declare function multiplyVector3Number(a: Vector3, b: number): Vector3;

declare function multiplyVector3Vector3(a: Vector3, b: Vector3): Vector3;

declare function multiplyVector4Number(a: Vector4, b: number): Vector4;

declare function multiplyVector4Vector4(a: Vector4, b: Vector4): Vector4;

declare function multiplyMatrix2x2Number(a: Matrix2x2, b: number): Matrix2x2;

declare function multiplyMatrix2x2Vector2(m: Matrix2x2, v: Vector2): Vector2;

declare function multiplyMatrix2x2Matrix2x2(a: Matrix2x2, b: Matrix2x2): Matrix2x2;

declare function multiplyMatrix3x3Number(a: Matrix3x3, b: number): Matrix3x3;

declare function multiplyMatrix3x3Vector3(m: Matrix3x3, v: Vector3): Vector3;

declare function multiplyMatrix3x3Matrix3x3(a: Matrix3x3, b: Matrix3x3): Matrix3x3;

declare function multiplyMatrix4x4Number(a: Matrix4x4, b: number): Matrix4x4;

declare function multiplyMatrix4x4Vector4(m: Matrix4x4, v: Vector4): Vector4;

declare function multiplyMatrix4x4Matrix4x4(a: Matrix4x4, b: Matrix4x4): Matrix4x4;

declare function divideNumberVector2(a: number, b: Vector2): Vector2;

declare function divideNumberVector3(a: number, b: Vector3): Vector3;

declare function divideNumberVector4(a: number, b: Vector4): Vector4;

declare function divideNumberMatrix2x2(a: number, b: Matrix2x2): Matrix2x2;

declare function divideNumberMatrix3x3(a: number, b: Matrix3x3): Matrix3x3;

declare function divideNumberMatrix4x4(a: number, b: Matrix4x4): Matrix4x4;

declare function divideVector2Number(a: Vector2, b: number): Vector2;

declare function divideVector2Vector2(a: Vector2, b: Vector2): Vector2;

declare function divideVector3Number(a: Vector3, b: number): Vector3;

declare function divideVector3Vector3(a: Vector3, b: Vector3): Vector3;

declare function divideVector4Number(a: Vector4, b: number): Vector4;

declare function divideVector4Vector4(a: Vector4, b: Vector4): Vector4;

declare function divideMatrix2x2Number(a: Matrix2x2, b: number): Matrix2x2;

declare function divideMatrix3x3Number(a: Matrix3x3, b: number): Matrix3x3;

declare function divideMatrix4x4Number(a: Matrix4x4, b: number): Matrix4x4;

declare function dotVector2Vector2(a: Vector2, b: Vector2): number;

declare function dotVector3Vector3(a: Vector3, b: Vector3): number;

declare function dotVector4Vector4(a: Vector4, b: Vector4): number;

declare function squareVector2(a: Vector2): number;

declare function squareVector3(a: Vector3): number;

declare function squareVector4(a: Vector4): number;

declare function lengthVector2(v: Vector2): number;

declare function lengthVector3(v: Vector3): number;

declare function lengthVector4(v: Vector4): number;

declare function translate(v: Vector3): Matrix4x4;

export { ArrayMatrix2x2, ArrayMatrix2x2Columns, ArrayMatrix2x2Rows, ArrayMatrix3x3, ArrayMatrix3x3Columns, ArrayMatrix3x3Rows, ArrayMatrix4x4, ArrayMatrix4x4Columns, ArrayMatrix4x4Rows, ArrayVector2, ArrayVector3, ArrayVector4, Matrix2x2, Matrix2x2Array, Matrix2x2Columns, Matrix2x2Like, Matrix2x2Rows, Matrix3x3, Matrix3x3Array, Matrix3x3Columns, Matrix3x3Like, Matrix3x3Rows, Matrix4x4, Matrix4x4Array, Matrix4x4Columns, Matrix4x4Like, Matrix4x4Rows, NumberVector2, NumberVector3, NumberVector4, Vector2, Vector2Array, Vector2Like, Vector3, Vector3Array, Vector3Like, Vector4, Vector4Array, Vector4Like, add, addMatrix2x2Number, addMatrix3x3Number, addMatrix4x4Number, addNumberMatrix2x2, addNumberMatrix3x3, addNumberMatrix4x4, addNumberVector2, addNumberVector3, addNumberVector4, addVector2Number, addVector2Vector2, addVector3Number, addVector3Vector3, addVector4Number, addVector4Vector4, divide as div, divide, divideMatrix2x2Number, divideMatrix3x3Number, divideMatrix4x4Number, divideNumberMatrix2x2, divideNumberMatrix3x3, divideNumberMatrix4x4, divideNumberVector2, divideNumberVector3, divideNumberVector4, divideVector2Number, divideVector2Vector2, divideVector3Number, divideVector3Vector3, divideVector4Number, divideVector4Vector4, dot, dotVector2Vector2, dotVector3Vector3, dotVector4Vector4, inverse as inv, inverse, inverseMatrix2x2, inverseMatrix3x3, inverseMatrix4x4, length as len, length, lengthVector2, lengthVector3, lengthVector4, length as mag, length as magnitude, mat2, mat3, mat4, matrix2x2FromMatrix4x4 as matrix2x2FromMatrix3x3, matrix2x2FromMatrix4x4$1 as matrix2x2FromMatrix4x4, matrix3x3FromMatrix2x2, matrix3x3FromMatrix4x4, matrix4x4FromMatrix2x2, matrix4x4FromMatrix3x3, multiply as mul, multiply, multiplyMatrix2x2Matrix2x2, multiplyMatrix2x2Number, multiplyMatrix2x2Vector2, multiplyMatrix3x3Matrix3x3, multiplyMatrix3x3Number, multiplyMatrix3x3Vector3, multiplyMatrix4x4Matrix4x4, multiplyMatrix4x4Number, multiplyMatrix4x4Vector4, multiplyNumberMatrix2x2, multiplyNumberMatrix3x3, multiplyNumberMatrix4x4, multiplyNumberVector2, multiplyNumberVector3, multiplyNumberVector4, multiplyVector2Number, multiplyVector2Vector2, multiplyVector3Number, multiplyVector3Vector3, multiplyVector4Number, multiplyVector4Vector4, negate as neg, negate, negateVector2, negateVector3, negateVector4, length as norm, square as sqr, square, squareVector2, squareVector3, squareVector4, subtract as sub, subtract, subtractMatrix2x2Number, subtractMatrix3x3Number, subtractMatrix4x4Number, subtractNumberMatrix2x2, subtractNumberMatrix3x3, subtractNumberMatrix4x4, subtractNumberVector2, subtractNumberVector3, subtractNumberVector4, subtractVector2Number, subtractVector2Vector2, subtractVector3Number, subtractVector3Vector3, subtractVector4Number, subtractVector4Vector4, translate, transposeMatrix2x2, transposeMatrix3x3, transposeMatrix4x4, vec2, vec3, vec4 };
