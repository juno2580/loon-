/*
脚本作者：Maasea
引用地址：https://raw.githubusercontent.com/Maasea/sgmodule/master/Script/Youtube/youtube.beta.js
* 脚本作者：app2smile
* 引用地址：https://raw.githubusercontent.com/app2smile/rules/master/js/youtube.js
*/
// Build: 2023/4/15 13:11:58
(() =>
{
	function Vi (l)
	{
		"use strict";

		function e ()
		{}

		function t ()
		{}
		var n = String.fromCharCode,
			r = {}.toString,
			i = r.call (l.SharedArrayBuffer),
			u = r (),
			s = l.Uint8Array,
			o = s || Array,
			a = s ? ArrayBuffer : o,
			f = a.isView || function (B)
			{
				return B && "length" in B
			},
			x = r.call (a.prototype);
		a = t.prototype;
		var w = l.TextEncoder,
			m = new (s ? Uint16Array : o)(32);
		e.prototype.decode = function (B)
		{
			if (!f (B))
			{
				var j = r.call (B);
				if (j !== x && j !== i && j !== u) throw TypeError ("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
				B = s ? new o (B) : B || []
			}
			for (var R = j = "", k = 0, T = B.length | 0, re = T - 32 | 0, U, W, E = 0, v = 0, S, D = 0, _ = -1; k < T;)
			{
				for (U = k <= re ? 32 : T - k | 0; D < U; k = k + 1 | 0, D = D + 1 | 0)
				{
					switch (W = B [k] & 255, W >> 4)
					{
					case 15:
						if (S = B [k = k + 1 | 0] & 255, S >> 6 !== 2 || 247 < W)
						{
							k = k - 1 | 0;
							break
						}
						E = (W & 7) << 6 | S & 63, v = 5, W = 256;
					case 14:
						S = B [k = k + 1 | 0] & 255, E <<= 6, E |= (W & 15) << 6 | S & 63, v = S >> 6 === 2 ? v + 4 | 0 : 24, W = W + 256 & 768;
					case 13:
					case 12:
						S = B [k = k + 1 | 0] & 255, E <<= 6, E |= (W & 31) << 6 | S & 63, v = v + 7 | 0, k < T && S >> 6 === 2 && E >> v && 1114112 > E ? (W = E, E = E - 65536 | 0, 0 <= E && (_ = (E >> 10) + 55296 | 0, W = (E & 1023) + 56320 | 0, 31 > D ? (m [D] = _, D = D + 1 | 0, _ = -1) : (S = _, _ = W, W = S))) : (W >>= 8, k = k - W - 1 | 0, W = 65533), E = v = 0, U = k <= re ? 32 : T - k | 0;
					default:
						m [D] = W;
						continue;
					case 11:
					case 10:
					case 9:
					case 8:
					}
					m [D] = 65533
				}
				if (R += n (m [0], m [1], m [2], m [3], m [4], m [5], m [6], m [7], m [8], m [9], m [10], m [11], m [12], m [13], m [14], m [15], m [16], m [17], m [18], m [19], m [20], m [21], m [22], m [23], m [24], m [25], m [26], m [27], m [28], m [29], m [30], m [31]), 32 > D && (R = R.slice (0, D - 32 | 0)), k < T)
				{
					if (m [0] = _, D = ~_ >>> 31, _ = -1, R.length < j.length) continue
				}
				else _ !== -1 && (R += n (_));
				j += R, R = ""
			}
			return j
		}, a.encode = function (B)
		{
			B = B === void 0 ? "":"" + B;
			var j = B.length | 0,
				R = new o ((j << 1) + 8 | 0),
				k, T = 0,
				re = !s;
			for (k = 0; k < j; k = k + 1 | 0, T = T + 1 | 0)
			{
				var U = B.charCodeAt (k) | 0;
				if (127 >= U) R [T] = U;
				else
				{
					if (2047 >= U) R [T] = 192 | U >> 6;
					else
					{
						e:
						{
							if (55296 <= U)
								if (56319 >= U)
								{
									var W = B.charCodeAt (k = k + 1 | 0) | 0;
									if (56320 <= W && 57343 >= W)
									{
										if (U = (U << 10) + W - 56613888 | 0, 65535 < U)
										{
											R [T] = 240 | U >> 18, R [T = T + 1 | 0] = 128 | U >> 12 & 63, R [T = T + 1 | 0] = 128 | U >> 6 & 63, R [T = T + 1 | 0] = 128 | U & 63;
											continue
										}
										break e
									}
									U = 65533
								}
							else 57343 >= U && (U = 65533);!re && k << 1 < T && k << 1 < (T - 7 | 0) && (re = !0, W = new o (3 * j), W.set (R), R = W)
						}
						R [T] = 224 | U >> 12,
						R [T = T + 1 | 0] = 128 | U >> 6 & 63
					}
					R [T = T + 1 | 0] = 128 | U & 63
				}
			}
			return s ? R.subarray (0, T) : R.slice (0, T)
		}, l.TextDecoder = e, l.TextEncoder = t
	}
	var F = Vi (globalThis);

	function ue (l)
	{
		let e = typeof l;
		if (e == "object")
		{
			if (Array.isArray (l)) return "array";
			if (l === null) return "null"
		}
		return e
	}

	function mi (l)
	{
		return l !== null && typeof l == "object" && !Array.isArray (l)
	}
	var V = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split (""),
		fe = [];
	for (let l = 0; l < V.length; l++) fe [V [l].charCodeAt (0)] = l;
	fe ["-".charCodeAt (0)] = V.indexOf ("+");
	fe ["_".charCodeAt (0)] = V.indexOf ("/");

	function Fi (l)
	{
		let e = l.length * 3 / 4;
		l [l.length - 2] == "=" ? e -= 2 : l [l.length - 1] == "=" && (e -= 1);
		let t = new Uint8Array (e),
			n = 0,
			r = 0,
			i, u = 0;
		for (let s = 0; s < l.length; s++)
		{
			if (i = fe [l.charCodeAt (s)], i === void 0) switch (l [s])
			{
			case "=":
				r = 0;
			case `
`:
			case "\r":
			case "	":
			case " ":
				continue;
			default:
				throw Error ("invalid base64 string.")
			}
			switch (r)
			{
			case 0:
				u = i, r = 1;
				break;
			case 1:
				t [n++] = u << 2 | (i & 48) >> 4, u = i, r = 2;
				break;
			case 2:
				t [n++] = (u & 15) << 4 | (i & 60) >> 2, u = i, r = 3;
				break;
			case 3:
				t [n++] = (u & 3) << 6 | i, r = 0;
				break
			}
		}
		if (r == 1) throw Error ("invalid base64 string.");
		return t.subarray (0, n)
	}

	function ki (l)
	{
		let e = "",
			t = 0,
			n, r = 0;
		for (let i = 0; i < l.length; i++) switch (n = l [i], t)
		{
		case 0:
			e += V [n >> 2], r = (n & 3) << 4, t = 1;
			break;
		case 1:
			e += V [r | n >> 4], r = (n & 15) << 2, t = 2;
			break;
		case 2:
			e += V [r | n >> 6], e += V [n & 63], t = 0;
			break
		}
		return t && (e += V [r], e += "=", t == 1 && (e += "=")), e
	}
	var c;
	(function (l)
	{
		l.symbol = Symbol.for ("protobuf-ts/unknown"), l.onRead = (t, n, r, i, u) =>
		{
			(e (n) ? n [l.symbol] : n [l.symbol] = []).push (
			{
				no: r,
				wireType: i,
				data: u
			})
		}, l.onWrite = (t, n, r) =>
		{
			for (let
				{
					no: i,
					wireType: u,
					data: s
				} of l.list (n)) r.tag (i, u).raw (s)
		}, l.list = (t, n) =>
		{
			if (e (t))
			{
				let r = t [l.symbol];
				return n ? r.filter (i => i.no == n) : r
			}
			return []
		}, l.last = (t, n) => l.list (t, n).slice (-1)[0];
		let e = t => t && Array.isArray (t [l.symbol])
	})(c || (c = {}));
	var d;
	(function (l)
	{
		l [l.Varint = 0] = "Varint", l [l.Bit64 = 1] = "Bit64", l [l.LengthDelimited = 2] = "LengthDelimited", l [l.StartGroup = 3] = "StartGroup", l [l.EndGroup = 4] = "EndGroup", l [l.Bit32 = 5] = "Bit32"
	})(d || (d = {}));

	function bi ()
	{
		let l = 0,
			e = 0;
		for (let n = 0; n < 28; n += 7)
		{
			let r = this.buf [this.pos++];
			if (l |= (r & 127) << n, !(r & 128)) return this.assertBounds (), [l, e]
		}
		let t = this.buf [this.pos++];
		if (l |= (t & 15) << 28, e = (t & 112) >> 4, !(t & 128)) return this.assertBounds (), [l, e];
		for (let n = 3; n <= 31; n += 7)
		{
			let r = this.buf [this.pos++];
			if (e |= (r & 127) << n, !(r & 128)) return this.assertBounds (), [l, e]
		}
		throw new Error ("invalid varint")
	}

	function de (l, e, t)
	{
		for (let i = 0; i < 28; i = i + 7)
		{
			let u = l >>> i,
				s = !(!(u >>> 7) && e == 0),
				o = (s ? u | 128 : u) & 255;
			if (t.push (o), !s) return
		}
		let n = l >>> 28 & 15 | (e & 7) << 4,
			r = !!(e >> 3);
		if (t.push ((r ? n | 128 : n) & 255), !!r)
		{
			for (let i = 3; i < 31; i = i + 7)
			{
				let u = e >>> i,
					s = !!(u >>> 7),
					o = (s ? u | 128 : u) & 255;
				if (t.push (o), !s) return
			}
			t.push (e >>> 31 & 1)
		}
	}
	var ce = (1 << 16) * (1 << 16);

	function Ce (l)
	{
		let e = l [0] == "-";
		e && (l = l.slice (1));
		let t = 1e6,
			n = 0,
			r = 0;

		function i (u, s)
		{
			let o = Number (l.slice (u, s));
			r *= t, n = n * t + o, n >= ce && (r = r + (n /ce | 0), n = n % ce)
		}
		return i (-24, -18), i (-18, -12), i (-12, -6), i (-6), [e, n, r]
	}

	function he (l, e)
	{
		if (e <= 2097151) return "" + (ce * e + (l >>> 0));
		let t = l & 16777215,
			n = (l >>> 24 | e << 8) >>> 0 & 16777215,
			r = e >> 16 & 65535,
			i = t + n * 6777216 + r * 6710656,
			u = n + r * 8147497,
			s = r * 2,
			o = 1e7;
		i >= o && (u += Math.floor (i /o), i %= o), u >= o && (s += Math.floor (u /o), u %= o);

		function a (f, x)
		{
			let w = f ? String (f) : "";
			return x ? "0000000".slice (w.length) + w : w
		}
		return a (s, 0) + a (u, s) + a (i, 1)
	}

	function Pe (l, e)
	{
		if (l >= 0)
		{
			for (; l > 127;) e.push (l & 127 | 128), l = l >>> 7;
			e.push (l)
		}
		else
		{
			for (let t = 0; t < 9; t++) e.push (l & 127 | 128), l = l >> 7;
			e.push (1)
		}
	}

	function wi ()
	{
		let l = this.buf [this.pos++],
			e = l & 127;
		if (!(l & 128)) return this.assertBounds (), e;
		if (l = this.buf [this.pos++], e |= (l & 127) << 7, !(l & 128)) return this.assertBounds (), e;
		if (l = this.buf [this.pos++], e |= (l & 127) << 14, !(l & 128)) return this.assertBounds (), e;
		if (l = this.buf [this.pos++], e |= (l & 127) << 21, !(l & 128)) return this.assertBounds (), e;
		l = this.buf [this.pos++], e |= (l & 15) << 28;
		for (let t = 5; l & 128 && t < 10; t++) l = this.buf [this.pos++];
		if (l & 128) throw new Error ("invalid varint");
		return this.assertBounds (), e >>> 0
	}

	function Mi ()
	{
		let l = new DataView (new ArrayBuffer (8));
		return globalThis.BigInt !== void 0 && typeof l.getBigInt64 == "function" && typeof l.getBigUint64 == "function" && typeof l.setBigInt64 == "function" && typeof l.setBigUint64 == "function" ?
		{
			MIN: BigInt ("-9223372036854775808"),
			MAX: BigInt ("9223372036854775807"),
			UMIN: BigInt ("0"),
			UMAX: BigInt ("18446744073709551615"),
			C: BigInt,
			V: l
		} : void 0
	}
	var I = Mi ();

	function Bi (l)
	{
		if (!l) throw new Error ("BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support")
	}
	var Ni = /^-?[0-9]+$/,
		pe = (1 << 16) * (1 << 16),
		ge = class
		{
			constructor (e, t)
			{
				this.lo = e | 0, this.hi = t | 0
			}
			isZero ()
			{
				return this.lo == 0 && this.hi == 0
			}
			toNumber ()
			{
				let e = this.hi * pe + (this.lo >>> 0);
				if (!Number.isSafeInteger (e)) throw new Error ("cannot convert to safe number");
				return e
			}
		},
		O = class extends ge
		{
			static from (e)
			{
				if (I) switch (typeof e)
				{
				case "string":
					if (e == "0") return this.ZERO;
					if (e == "") throw new Error ("string is no integer");
					e = I.C (e);
				case "number":
					if (e === 0) return this.ZERO;
					e = I.C (e);
				case "bigint":
					if (!e) return this.ZERO;
					if (e < I.UMIN) throw new Error ("signed value for ulong");
					if (e > I.UMAX) throw new Error ("ulong too large");
					return I.V.setBigUint64 (0, e, !0), new O (I.V.getInt32 (0, !0), I.V.getInt32 (4, !0))
				}
				else switch (typeof e)
				{
				case "string":
					if (e == "0") return this.ZERO;
					if (e = e.trim (), !Ni.test (e)) throw new Error ("string is no integer");
					let [t, n, r] = Ce (e);
					if (t) throw new Error ("signed value");
					return new O (n, r);
				case "number":
					if (e == 0) return this.ZERO;
					if (!Number.isSafeInteger (e)) throw new Error ("number is no integer");
					if (e < 0) throw new Error ("signed value for ulong");
					return new O (e, e /pe)
				}
				throw new Error ("unknown value" + typeof e)
			}
			toString ()
			{
				return I ? this.toBigInt ().toString () : he (this.lo, this.hi)
			}
			toBigInt ()
			{
				return Bi (I), I.V.setInt32 (0, this.lo, !0), I.V.setInt32 (4, this.hi, !0), I.V.getBigUint64 (0, !0)
			}
		};
	O.ZERO = new O (0, 0);
	var N = class extends ge
	{
		static from (e)
		{
			if (I) switch (typeof e)
			{
			case "string":
				if (e == "0") return this.ZERO;
				if (e == "") throw new Error ("string is no integer");
				e = I.C (e);
			case "number":
				if (e === 0) return this.ZERO;
				e = I.C (e);
			case "bigint":
				if (!e) return this.ZERO;
				if (e < I.MIN) throw new Error ("ulong too small");
				if (e > I.MAX) throw new Error ("ulong too large");
				return I.V.setBigInt64 (0, e, !0), new N (I.V.getInt32 (0, !0), I.V.getInt32 (4, !0))
			}
			else switch (typeof e)
			{
			case "string":
				if (e == "0") return this.ZERO;
				if (e = e.trim (), !Ni.test (e)) throw new Error ("string is no integer");
				let [t, n, r] = Ce (e), i = new N (n, r);
				return t ? i.negate () : i;
			case "number":
				if (e == 0) return this.ZERO;
				if (!Number.isSafeInteger (e)) throw new Error ("number is no integer");
				return e > 0 ? new N (e, e /pe) : new N (-e, -e /pe).negate ()
			}
			throw new Error ("unknown value" + typeof e)
		}
		isNegative ()
		{
			return (this.hi & 2147483648) !== 0
		}
		negate ()
		{
			let e = ~this.hi,
				t = this.lo;
			return t ? t = ~t + 1 : e += 1, new N (t, e)
		}
		toString ()
		{
			if (I) return this.toBigInt ().toString ();
			if (this.isNegative ())
			{
				let e = this.negate ();
				return "-" + he (e.lo, e.hi)
			}
			return he (this.lo, this.hi)
		}
		toBigInt ()
		{
			return Bi (I), I.V.setInt32 (0, this.lo, !0), I.V.setInt32 (4, this.hi, !0), I.V.getBigInt64 (0, !0)
		}
	};
	N.ZERO = new N (0, 0);
	var xi = {
		readUnknownField: !0,
		readerFactory: l => new Ee (l)
	};

	function Ti (l)
	{
		return l ? Object.assign (Object.assign (
		{}, xi), l) : xi
	}
	var Ee = class
	{
		constructor (e, t)
		{
			this.varint64 = bi, this.uint32 = wi, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView (e.buffer, e.byteOffset, e.byteLength), this.textDecoder = t ?? new TextDecoder ("utf-8",
			{
				fatal: !0,
				ignoreBOM: !0
			})
		}
		tag ()
		{
			let e = this.uint32 (),
				t = e >>> 3,
				n = e & 7;
			if (t <= 0 || n < 0 || n > 5) throw new Error ("illegal tag: field no" + t + "wire type" + n);
			return [t, n]
		}
		skip (e)
		{
			let t = this.pos;
			switch (e)
			{
			case d.Varint:
				for (; this.buf [this.pos++] & 128;);
				break;
			case d.Bit64:
				this.pos += 4;
			case d.Bit32:
				this.pos += 4;
				break;
			case d.LengthDelimited:
				let n = this.uint32 ();
				this.pos += n;
				break;
			case d.StartGroup:
				let r;
				for (;
					(r = this.tag ()[1]) !== d.EndGroup;) this.skip (r);
				break;
			default:
				throw new Error ("cant skip wire type" + e)
			}
			return this.assertBounds (), this.buf.subarray (t, this.pos)
		}
		assertBounds ()
		{
			if (this.pos > this.len) throw new RangeError ("premature EOF")
		}
		int32 ()
		{
			return this.uint32 () | 0
		}
		sint32 ()
		{
			let e = this.uint32 ();
			return e >>> 1 ^ -(e & 1)
		}
		int64 ()
		{
			return new N (...this.varint64 ())
		}
		uint64 ()
		{
			return new O (...this.varint64 ())
		}
		sint64 ()
		{
			let [e, t] = this.varint64 (), n = -(e & 1);
			return e = (e >>> 1 | (t & 1) << 31) ^ n, t = t >>> 1 ^ n, new N (e, t)
		}
		bool ()
		{
			let [e, t] = this.varint64 ();
			return e !== 0 || t !== 0
		}
		fixed32 ()
		{
			return this.view.getUint32 ((this.pos += 4) - 4, !0)
		}
		sfixed32 ()
		{
			return this.view.getInt32 ((this.pos += 4) - 4, !0)
		}
		fixed64 ()
		{
			return new O (this.sfixed32 (), this.sfixed32 ())
		}
		sfixed64 ()
		{
			return new N (this.sfixed32 (), this.sfixed32 ())
		}
		float ()
		{
			return this.view.getFloat32 ((this.pos += 4) - 4, !0)
		}
		double ()
		{
			return this.view.getFloat64 ((this.pos += 8) - 8, !0)
		}
		bytes ()
		{
			let e = this.uint32 (),
				t = this.pos;
			return this.pos += e, this.assertBounds (), this.buf.subarray (t, t + e)
		}
		string ()
		{
			return this.textDecoder.decode (this.bytes ())
		}
	};

	function b (l, e)
	{
		if (!l) throw new Error (e)
	}
	var Ki = 34028234663852886e22,
		vi = -34028234663852886e22,
		Gi = 4294967295,
		Ji = 2147483647,
		Xi = -2147483648;

	function K (l)
	{
		if (typeof l != "number") throw new Error ("invalid int 32:" + typeof l);
		if (!Number.isInteger (l) || l > Ji || l < Xi) throw new Error ("invalid int 32:" + l)
	}

	function G (l)
	{
		if (typeof l != "number") throw new Error ("invalid uint 32:" + typeof l);
		if (!Number.isInteger (l) || l > Gi || l < 0) throw new Error ("invalid uint 32:" + l)
	}

	function J (l)
	{
		if (typeof l != "number") throw new Error ("invalid float 32:" + typeof l);
		if (Number.isFinite (l) && (l > Ki || l < vi)) throw new Error ("invalid float 32:" + l)
	}
	var Ri = {
		writeUnknownFields: !0,
		writerFactory: () => new $e
	};

	function Ii (l)
	{
		return l ? Object.assign (Object.assign (
		{}, Ri), l) : Ri
	}
	var $e = class
	{
		constructor (e)
		{
			this.stack = [], this.textEncoder = e ?? new TextEncoder, this.chunks = [], this.buf = []
		}
		finish ()
		{
			this.chunks.push (new Uint8Array (this.buf));
			let e = 0;
			for (let r = 0; r < this.chunks.length; r++) e += this.chunks [r].length;
			let t = new Uint8Array (e),
				n = 0;
			for (let r = 0; r < this.chunks.length; r++) t.set (this.chunks [r], n), n += this.chunks [r].length;
			return this.chunks = [], t
		}
		fork ()
		{
			return this.stack.push (
			{
				chunks: this.chunks,
				buf: this.buf
			}), this.chunks = [], this.buf = [], this
		}
		join ()
		{
			let e = this.finish (),
				t = this.stack.pop ();
			if (!t) throw new Error ("invalid state, fork stack empty");
			return this.chunks = t.chunks, this.buf = t.buf, this.uint32 (e.byteLength), this.raw (e)
		}
		tag (e, t)
		{
			return this.uint32 ((e << 3 | t) >>> 0)
		}
		raw (e)
		{
			return this.buf.length && (this.chunks.push (new Uint8Array (this.buf)), this.buf = []), this.chunks.push (e), this
		}
		uint32 (e)
		{
			for (G (e); e > 127;) this.buf.push (e & 127 | 128), e = e >>> 7;
			return this.buf.push (e), this
		}
		int32 (e)
		{
			return K (e), Pe (e, this.buf), this
		}
		bool (e)
		{
			return this.buf.push (e ? 1 : 0), this
		}
		bytes (e)
		{
			return this.uint32 (e.byteLength), this.raw (e)
		}
		string (e)
		{
			let t = this.textEncoder.encode (e);
			return this.uint32 (t.byteLength), this.raw (t)
		}
		float (e)
		{
			J (e);
			let t = new Uint8Array (4);
			return new DataView (t.buffer).setFloat32 (0, e, !0), this.raw (t)
		}
		double (e)
		{
			let t = new Uint8Array (8);
			return new DataView (t.buffer).setFloat64 (0, e, !0), this.raw (t)
		}
		fixed32 (e)
		{
			G (e);
			let t = new Uint8Array (4);
			return new DataView (t.buffer).setUint32 (0, e, !0), this.raw (t)
		}
		sfixed32 (e)
		{
			K (e);
			let t = new Uint8Array (4);
			return new DataView (t.buffer).setInt32 (0, e, !0), this.raw (t)
		}
		sint32 (e)
		{
			return K (e), e = (e << 1 ^ e >> 31) >>> 0, Pe (e, this.buf), this
		}
		sfixed64 (e)
		{
			let t = new Uint8Array (8),
				n = new DataView (t.buffer),
				r = N.from (e);
			return n.setInt32 (0, r.lo, !0), n.setInt32 (4, r.hi, !0), this.raw (t)
		}
		fixed64 (e)
		{
			let t = new Uint8Array (8),
				n = new DataView (t.buffer),
				r = O.from (e);
			return n.setInt32 (0, r.lo, !0), n.setInt32 (4, r.hi, !0), this.raw (t)
		}
		int64 (e)
		{
			let t = N.from (e);
			return de (t.lo, t.hi, this.buf), this
		}
		sint64 (e)
		{
			let t = N.from (e),
				n = t.hi >> 31,
				r = t.lo << 1 ^ n,
				i = (t.hi << 1 | t.lo >>> 31) ^ n;
			return de (r, i, this.buf), this
		}
		uint64 (e)
		{
			let t = O.from (e);
			return de (t.lo, t.hi, this.buf), this
		}
	};
	var Wi = {
			emitDefaultValues: !1,
			enumAsInteger: !1,
			useProtoFieldName: !1,
			prettySpaces: 0
		},
		Oi = {
			ignoreUnknownFields: !1
		};

	function Ui (l)
	{
		return l ? Object.assign (Object.assign (
		{}, Oi), l) : Oi
	}

	function Ci (l)
	{
		return l ? Object.assign (Object.assign (
		{}, Wi), l) : Wi
	}
	var g = Symbol.for ("protobuf-ts/message-type");

	function je (l)
	{
		let e = !1,
			t = [];
		for (let n = 0; n < l.length; n++)
		{
			let r = l.charAt (n);
			r == "_" ? e = !0 : /\d/.test (r) ? (t.push (r), e = !0) : e ? (t.push (r.toUpperCase ()), e = !1) : n == 0 ? t.push (r.toLowerCase ()) : t.push (r)
		}
		return t.join ("")
	}
	var h;
	(function (l)
	{
		l [l.DOUBLE = 1] = "DOUBLE", l [l.FLOAT = 2] = "FLOAT", l [l.INT64 = 3] = "INT64", l [l.UINT64 = 4] = "UINT64", l [l.INT32 = 5] = "INT32", l [l.FIXED64 = 6] = "FIXED64", l [l.FIXED32 = 7] = "FIXED32", l [l.BOOL = 8] = "BOOL", l [l.STRING = 9] = "STRING", l [l.BYTES = 12] = "BYTES", l [l.UINT32 = 13] = "UINT32", l [l.SFIXED32 = 15] = "SFIXED32", l [l.SFIXED64 = 16] = "SFIXED64", l [l.SINT32 = 17] = "SINT32", l [l.SINT64 = 18] = "SINT64"
	})(h || (h = {}));
	var C;
	(function (l)
	{
		l [l.BIGINT = 0] = "BIGINT", l [l.STRING = 1] = "STRING", l [l.NUMBER = 2] = "NUMBER"
	})(C || (C = {}));
	var ae;
	(function (l)
	{
		l [l.NO = 0] = "NO", l [l.PACKED = 1] = "PACKED", l [l.UNPACKED = 2] = "UNPACKED"
	})(ae || (ae = {}));

	function Pi (l)
	{
		var e, t, n, r;
		return l.localName = (e = l.localName) !== null && e !== void 0 ? e : je (l.name), l.jsonName = (t = l.jsonName) !== null && t !== void 0 ? t : je (l.name), l.repeat = (n = l.repeat) !== null && n !== void 0 ? n : ae.NO, l.opt = (r = l.opt) !== null && r !== void 0 ? r : l.repeat || l.oneof ? !1 : l.kind == "message", l
	}

	function Ei (l)
	{
		if (typeof l != "object" || l === null || !l.hasOwnProperty ("oneofKind")) return !1;
		switch (typeof l.oneofKind)
		{
		case "string":
			return l [l.oneofKind] === void 0 ? !1 : Object.keys (l).length == 2;
		case "undefined":
			return Object.keys (l).length == 1;
		default:
			return !1
		}
	}
	var ye = class
	{
		constructor (e)
		{
			var t;
			this.fields = (t = e.fields) !== null && t !== void 0 ? t : []
		}
		prepare ()
		{
			if (this.data) return;
			let e = [],
				t = [],
				n = [];
			for (let r of this.fields)
				if (r.oneof) n.includes (r.oneof) || (n.push (r.oneof), e.push (r.oneof), t.push (r.oneof));
				else switch (t.push (r.localName), r.kind)
				{
				case "scalar":
				case "enum":
					(!r.opt || r.repeat) && e.push (r.localName);
					break;
				case "message":
					r.repeat && e.push (r.localName);
					break;
				case "map":
					e.push (r.localName);
					break
				}
			this.data = {
				req: e,
				known: t,
				oneofs: Object.values (n)
			}
		}
		is (e, t, n = !1)
		{
			if (t < 0) return !0;
			if (e == null || typeof e != "object") return !1;
			this.prepare ();
			let r = Object.keys (e),
				i = this.data;
			if (r.length < i.req.length || i.req.some (u => !r.includes (u)) || !n && r.some (u => !i.known.includes (u))) return !1;
			if (t < 1) return !0;
			for (let u of i.oneofs)
			{
				let s = e [u];
				if (!Ei (s)) return !1;
				if (s.oneofKind === void 0) continue;
				let o = this.fields.find (a => a.localName === s.oneofKind);
				if (!o || !this.field (s [s.oneofKind], o, n, t)) return !1
			}
			for (let u of this.fields)
				if (u.oneof === void 0 && !this.field (e [u.localName], u, n, t)) return !1;
			return !0
		}
		field (e, t, n, r)
		{
			let i = t.repeat;
			switch (t.kind)
			{
			case "scalar":
				return e === void 0 ? t.opt : i ? this.scalars (e, t.T, r, t.L) : this.scalar (e, t.T, t.L);
			case "enum":
				return e === void 0 ? t.opt : i ? this.scalars (e, h.INT32, r) : this.scalar (e, h.INT32);
			case "message":
				return e === void 0 ? !0 : i ? this.messages (e, t.T (), n, r) : this.message (e, t.T (), n, r);
			case "map":
				if (typeof e != "object" || e === null) return !1;
				if (r < 2) return !0;
				if (!this.mapKeys (e, t.K, r)) return !1;
				switch (t.V.kind)
				{
				case "scalar":
					return this.scalars (Object.values (e), t.V.T, r, t.V.L);
				case "enum":
					return this.scalars (Object.values (e), h.INT32, r);
				case "message":
					return this.messages (Object.values (e), t.V.T (), n, r)
				}
				break
			}
			return !0
		}
		message (e, t, n, r)
		{
			return n ? t.isAssignable (e, r) : t.is (e, r)
		}
		messages (e, t, n, r)
		{
			if (!Array.isArray (e)) return !1;
			if (r < 2) return !0;
			if (n)
			{
				for (let i = 0; i < e.length && i < r; i++)
					if (!t.isAssignable (e [i], r - 1)) return !1
			}
			else
				for (let i = 0; i < e.length && i < r; i++)
					if (!t.is (e [i], r - 1)) return !1;
			return !0
		}
		scalar (e, t, n)
		{
			let r = typeof e;
			switch (t)
			{
			case h.UINT64:
			case h.FIXED64:
			case h.INT64:
			case h.SFIXED64:
			case h.SINT64:
				switch (n)
				{
				case C.BIGINT:
					return r == "bigint";
				case C.NUMBER:
					return r == "number" && !isNaN (e);
				default:
					return r == "string"
				}
			case h.BOOL:
				return r == "boolean";
			case h.STRING:
				return r == "string";
			case h.BYTES:
				return e instanceof Uint8Array;
			case h.DOUBLE:
			case h.FLOAT:
				return r == "number" && !isNaN (e);
			default:
				return r == "number" && Number.isInteger (e)
			}
		}
		scalars (e, t, n, r)
		{
			if (!Array.isArray (e)) return !1;
			if (n < 2) return !0;
			if (Array.isArray (e))
			{
				for (let i = 0; i < e.length && i < n; i++)
					if (!this.scalar (e [i], t, r)) return !1
			}
			return !0
		}
		mapKeys (e, t, n)
		{
			let r = Object.keys (e);
			switch (t)
			{
			case h.INT32:
			case h.FIXED32:
			case h.SFIXED32:
			case h.SINT32:
			case h.UINT32:
				return this.scalars (r.slice (0, n).map (i => parseInt (i)), t, n);
			case h.BOOL:
				return this.scalars (r.slice (0, n).map (i => i == "true" ? !0 : i == "false" ? !1 : i), t, n);
			default:
				return this.scalars (r, t, n, C.STRING)
			}
		}
	};

	function $(l, e)
	{
		switch (e)
		{
		case C.BIGINT:
			return l.toBigInt ();
		case C.NUMBER:
			return l.toNumber ();
		default:
			return l.toString ()
		}
	}
	var me = class
	{
		constructor (e)
		{
			this.info = e
		}
		prepare ()
		{
			var e;
			if (this.fMap === void 0)
			{
				this.fMap = {};
				let t = (e = this.info.fields) !== null && e !== void 0 ? e : [];
				for (let n of t) this.fMap [n.name] = n, this.fMap [n.jsonName] = n, this.fMap [n.localName] = n
			}
		}
		assert (e, t, n)
		{
			if (!e)
			{
				let r = ue (n);
				throw (r == "number" || r == "boolean") && (r = n.toString ()), new Error (`Cannot parse JSON ${r} for ${this.info.typeName}#${t}`)
			}
		}
		read (e, t, n)
		{
			this.prepare ();
			let r = [];
			for (let [i, u] of Object.entries (e))
			{
				let s = this.fMap [i];
				if (!s)
				{
					if (!n.ignoreUnknownFields) throw new Error (`Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${i}`);
					continue
				}
				let o = s.localName,
					a;
				if (s.oneof)
				{
					if (r.includes (s.oneof)) throw new Error (`Multiple members of the oneof group"${s.oneof}"of ${this.info.typeName} are present in JSON.`);
					r.push (s.oneof), a = t [s.oneof] = {
						oneofKind: o
					}
				}
				else a = t;
				if (s.kind == "map")
				{
					if (u === null) continue;
					this.assert (mi (u), s.name, u);
					let f = a [o];
					for (let [x, w] of Object.entries (u))
					{
						this.assert (w !== null, s.name + "map value", null);
						let m;
						switch (s.V.kind)
						{
						case "message":
							m = s.V.T ().internalJsonRead (w, n);
							break;
						case "enum":
							if (m = this.enum (s.V.T (), w, s.name, n.ignoreUnknownFields), m === !1) continue;
							break;
						case "scalar":
							m = this.scalar (w, s.V.T, s.V.L, s.name);
							break
						}
						this.assert (m !== void 0, s.name + "map value", w);
						let B = x;
						s.K == h.BOOL && (B = B == "true" ? !0 : B == "false" ? !1 : B), B = this.scalar (B, s.K, C.STRING, s.name).toString (), f [B] = m
					}
				}
				else if (s.repeat)
				{
					if (u === null) continue;
					this.assert (Array.isArray (u), s.name, u);
					let f = a [o];
					for (let x of u)
					{
						this.assert (x !== null, s.name, null);
						let w;
						switch (s.kind)
						{
						case "message":
							w = s.T ().internalJsonRead (x, n);
							break;
						case "enum":
							if (w = this.enum (s.T (), x, s.name, n.ignoreUnknownFields), w === !1) continue;
							break;
						case "scalar":
							w = this.scalar (x, s.T, s.L, s.name);
							break
						}
						this.assert (w !== void 0, s.name, u), f.push (w)
					}
				}
				else switch (s.kind)
				{
				case "message":
					if (u === null && s.T ().typeName != "google.protobuf.Value")
					{
						this.assert (s.oneof === void 0, s.name + "(oneof member)", null);
						continue
					}
					a [o] = s.T ().internalJsonRead (u, n, a [o]);
					break;
				case "enum":
					let f = this.enum (s.T (), u, s.name, n.ignoreUnknownFields);
					if (f === !1) continue;
					a [o] = f;
					break;
				case "scalar":
					a [o] = this.scalar (u, s.T, s.L, s.name);
					break
				}
			}
		}
		enum (e, t, n, r)
		{
			if (e [0] == "google.protobuf.NullValue" && b (t === null, `Unable to parse field ${this.info.typeName}#${n}, enum ${e [0]} only accepts null.`), t === null) return 0;
			switch (typeof t)
			{
			case "number":
				return b (Number.isInteger (t), `Unable to parse field ${this.info.typeName}#${n}, enum can only be integral number, got ${t}.`), t;
			case "string":
				let i = t;
				e [2] && t.substring (0, e [2].length) === e [2] && (i = t.substring (e [2].length));
				let u = e [1][i];
				return typeof u > "u" && r ? !1 : (b (typeof u == "number", `Unable to parse field ${this.info.typeName}#${n}, enum ${e [0]} has no value for"${t}".`), u)
			}
			b (!1, `Unable to parse field ${this.info.typeName}#${n}, cannot parse enum value from ${typeof t}".`)
		}
		scalar (e, t, n, r)
		{
			let i;
			try
			{
				switch (t)
				{
				case h.DOUBLE:
				case h.FLOAT:
					if (e === null) return 0;
					if (e === "NaN") return Number.NaN;
					if (e === "Infinity") return Number.POSITIVE_INFINITY;
					if (e === "-Infinity") return Number.NEGATIVE_INFINITY;
					if (e === "")
					{
						i = "empty string";
						break
					}
					if (typeof e == "string" && e.trim ().length !== e.length)
					{
						i = "extra whitespace";
						break
					}
					if (typeof e != "string" && typeof e != "number") break;
					let u = Number (e);
					if (Number.isNaN (u))
					{
						i = "not a number";
						break
					}
					if (!Number.isFinite (u))
					{
						i = "too large or small";
						break
					}
					return t == h.FLOAT && J (u), u;
				case h.INT32:
				case h.FIXED32:
				case h.SFIXED32:
				case h.SINT32:
				case h.UINT32:
					if (e === null) return 0;
					let s;
					if (typeof e == "number" ? s = e : e === ""? i ="empty string": typeof e =="string"&& (e.trim ().length !== e.length ? i ="extra whitespace" : s = Number (e)), s === void 0) break;
					return t == h.UINT32 ? G (s) : K (s), s;
				case h.INT64:
				case h.SFIXED64:
				case h.SINT64:
					if (e === null) return $(N.ZERO, n);
					if (typeof e != "number" && typeof e != "string") break;
					return $(N.from (e), n);
				case h.FIXED64:
				case h.UINT64:
					if (e === null) return $(O.ZERO, n);
					if (typeof e != "number" && typeof e != "string") break;
					return $(O.from (e), n);
				case h.BOOL:
					if (e === null) return !1;
					if (typeof e != "boolean") break;
					return e;
				case h.STRING:
					if (e === null) return "";
					if (typeof e != "string")
					{
						i = "extra whitespace";
						break
					}
					try
					{
						encodeURIComponent (e)
					}
					catch (o)
					{
						o = "invalid UTF8";
						break
					}
					return e;
				case h.BYTES:
					if (e === null || e === "") return new Uint8Array (0);
					if (typeof e != "string") break;
					return Fi (e)
				}
			}
			catch (u)
			{
				i = u.message
			}
			this.assert (!1, r + (i ? "-" + i : ""), e)
		}
	};
	var Fe = class
	{
		constructor (e)
		{
			var t;
			this.fields = (t = e.fields) !== null && t !== void 0 ? t : []
		}
		write (e, t)
		{
			let n = {},
				r = e;
			for (let i of this.fields)
			{
				if (!i.oneof)
				{
					let a = this.field (i, r [i.localName], t);
					a !== void 0 && (n [t.useProtoFieldName ? i.name : i.jsonName] = a);
					continue
				}
				let u = r [i.oneof];
				if (u.oneofKind !== i.localName) continue;
				let s = i.kind == "scalar" || i.kind == "enum" ? Object.assign (Object.assign (
					{}, t),
					{
						emitDefaultValues: !0
					}) : t,
					o = this.field (i, u [i.localName], s);
				b (o !== void 0), n [t.useProtoFieldName ? i.name : i.jsonName] = o
			}
			return n
		}
		field (e, t, n)
		{
			let r;
			if (e.kind == "map")
			{
				b (typeof t == "object" && t !== null);
				let i = {};
				switch (e.V.kind)
				{
				case "scalar":
					for (let [o, a] of Object.entries (t))
					{
						let f = this.scalar (e.V.T, a, e.name, !1, !0);
						b (f !== void 0), i [o.toString ()] = f
					}
					break;
				case "message":
					let u = e.V.T ();
					for (let [o, a] of Object.entries (t))
					{
						let f = this.message (u, a, e.name, n);
						b (f !== void 0), i [o.toString ()] = f
					}
					break;
				case "enum":
					let s = e.V.T ();
					for (let [o, a] of Object.entries (t))
					{
						b (a === void 0 || typeof a == "number");
						let f = this.enum (s, a, e.name, !1, !0, n.enumAsInteger);
						b (f !== void 0), i [o.toString ()] = f
					}
					break
				}(n.emitDefaultValues || Object.keys (i).length > 0) && (r = i)
			}
			else if (e.repeat)
			{
				b (Array.isArray (t));
				let i = [];
				switch (e.kind)
				{
				case "scalar":
					for (let o = 0; o < t.length; o++)
					{
						let a = this.scalar (e.T, t [o], e.name, e.opt, !0);
						b (a !== void 0), i.push (a)
					}
					break;
				case "enum":
					let u = e.T ();
					for (let o = 0; o < t.length; o++)
					{
						b (t [o] === void 0 || typeof t [o] == "number");
						let a = this.enum (u, t [o], e.name, e.opt, !0, n.enumAsInteger);
						b (a !== void 0), i.push (a)
					}
					break;
				case "message":
					let s = e.T ();
					for (let o = 0; o < t.length; o++)
					{
						let a = this.message (s, t [o], e.name, n);
						b (a !== void 0), i.push (a)
					}
					break
				}(n.emitDefaultValues || i.length > 0 || n.emitDefaultValues) && (r = i)
			}
			else switch (e.kind)
			{
			case "scalar":
				r = this.scalar (e.T, t, e.name, e.opt, n.emitDefaultValues);
				break;
			case "enum":
				r = this.enum (e.T (), t, e.name, e.opt, n.emitDefaultValues, n.enumAsInteger);
				break;
			case "message":
				r = this.message (e.T (), t, e.name, n);
				break
			}
			return r
		}
		enum (e, t, n, r, i, u)
		{
			if (e [0] == "google.protobuf.NullValue") return null;
			if (t === void 0)
			{
				b (r);
				return
			}
			if (!(t === 0 && !i && !r)) return b (typeof t == "number"), b (Number.isInteger (t)), u || !e [1].hasOwnProperty (t) ? t : e [2] ? e [2] + e [1][t] : e [1][t]
		}
		message (e, t, n, r)
		{
			return t === void 0 ? r.emitDefaultValues ? null : void 0 : e.internalJsonWrite (t, r)
		}
		scalar (e, t, n, r, i)
		{
			if (t === void 0)
			{
				b (r);
				return
			}
			let u = i || r;
			switch (e)
			{
			case h.INT32:
			case h.SFIXED32:
			case h.SINT32:
				return t === 0 ? u ? 0 : void 0 : (K (t), t);
			case h.FIXED32:
			case h.UINT32:
				return t === 0 ? u ? 0 : void 0 : (G (t), t);
			case h.FLOAT:
				J (t);
			case h.DOUBLE:
				return t === 0 ? u ? 0 : void 0 : (b (typeof t == "number"), Number.isNaN (t) ? "NaN" : t === Number.POSITIVE_INFINITY ? "Infinity" : t === Number.NEGATIVE_INFINITY ? "-Infinity" : t);
			case h.STRING:
				return t === ""? u ?"" : void 0 : (b (typeof t == "string"), t);
			case h.BOOL:
				return t === !1 ? u ? !1 : void 0 : (b (typeof t == "boolean"), t);
			case h.UINT64:
			case h.FIXED64:
				b (typeof t == "number" || typeof t == "string" || typeof t == "bigint");
				let s = O.from (t);
				return s.isZero () && !u ? void 0 : s.toString ();
			case h.INT64:
			case h.SFIXED64:
			case h.SINT64:
				b (typeof t == "number" || typeof t == "string" || typeof t == "bigint");
				let o = N.from (t);
				return o.isZero () && !u ? void 0 : o.toString ();
			case h.BYTES:
				return b (t instanceof Uint8Array), t.byteLength ? ki (t) : u ? "" : void 0
			}
		}
	};

	function se (l, e = C.STRING)
	{
		switch (l)
		{
		case h.BOOL:
			return !1;
		case h.UINT64:
		case h.FIXED64:
			return $(O.ZERO, e);
		case h.INT64:
		case h.SFIXED64:
		case h.SINT64:
			return $(N.ZERO, e);
		case h.DOUBLE:
		case h.FLOAT:
			return 0;
		case h.BYTES:
			return new Uint8Array (0);
		case h.STRING:
			return "";
		default:
			return 0
		}
	}
	var ke = class
	{
		constructor (e)
		{
			this.info = e
		}
		prepare ()
		{
			var e;
			if (!this.fieldNoToField)
			{
				let t = (e = this.info.fields) !== null && e !== void 0 ? e : [];
				this.fieldNoToField = new Map (t.map (n => [n.no, n]))
			}
		}
		read (e, t, n, r)
		{
			this.prepare ();
			let i = r === void 0 ? e.len : e.pos + r;
			for (; e.pos < i;)
			{
				let [u, s] = e.tag (), o = this.fieldNoToField.get (u);
				if (!o)
				{
					let w = n.readUnknownField;
					if (w == "throw") throw new Error (`Unknown field ${u} (wire type ${s}) for ${this.info.typeName}`);
					let m = e.skip (s);
					w !== !1 && (w === !0 ? c.onRead : w)(this.info.typeName, t, u, s, m);
					continue
				}
				let a = t,
					f = o.repeat,
					x = o.localName;
				switch (o.oneof && (a = a [o.oneof], a.oneofKind !== x && (a = t [o.oneof] = {
						oneofKind: x
					})), o.kind)
				{
				case "scalar":
				case "enum":
					let w = o.kind == "enum" ? h.INT32 : o.T,
						m = o.kind == "scalar" ? o.L : void 0;
					if (f)
					{
						let R = a [x];
						if (s == d.LengthDelimited && w != h.STRING && w != h.BYTES)
						{
							let k = e.uint32 () + e.pos;
							for (; e.pos < k;) R.push (this.scalar (e, w, m))
						}
						else R.push (this.scalar (e, w, m))
					}
					else a [x] = this.scalar (e, w, m);
					break;
				case "message":
					if (f)
					{
						let R = a [x],
							k = o.T ().internalBinaryRead (e, e.uint32 (), n);
						R.push (k)
					}
					else a [x] = o.T ().internalBinaryRead (e, e.uint32 (), n, a [x]);
					break;
				case "map":
					let [B, j] = this.mapEntry (o, e, n);
					a [x][B] = j;
					break
				}
			}
		}
		mapEntry (e, t, n)
		{
			let r = t.uint32 (),
				i = t.pos + r,
				u, s;
			for (; t.pos < i;)
			{
				let [o, a] = t.tag ();
				switch (o)
				{
				case 1:
					e.K == h.BOOL ? u = t.bool ().toString () : u = this.scalar (t, e.K, C.STRING);
					break;
				case 2:
					switch (e.V.kind)
					{
					case "scalar":
						s = this.scalar (t, e.V.T, e.V.L);
						break;
					case "enum":
						s = t.int32 ();
						break;
					case "message":
						s = e.V.T ().internalBinaryRead (t, t.uint32 (), n);
						break
					}
					break;
				default:
					throw new Error (`Unknown field ${o} (wire type ${a}) in map entry for ${this.info.typeName}#${e.name}`)
				}
			}
			if (u === void 0)
			{
				let o = se (e.K);
				u = e.K == h.BOOL ? o.toString () : o
			}
			if (s === void 0) switch (e.V.kind)
			{
			case "scalar":
				s = se (e.V.T, e.V.L);
				break;
			case "enum":
				s = 0;
				break;
			case "message":
				s = e.V.T ().create ();
				break
			}
			return [u, s]
		}
		scalar (e, t, n)
		{
			switch (t)
			{
			case h.INT32:
				return e.int32 ();
			case h.STRING:
				return e.string ();
			case h.BOOL:
				return e.bool ();
			case h.DOUBLE:
				return e.double ();
			case h.FLOAT:
				return e.float ();
			case h.INT64:
				return $(e.int64 (), n);
			case h.UINT64:
				return $(e.uint64 (), n);
			case h.FIXED64:
				return $(e.fixed64 (), n);
			case h.FIXED32:
				return e.fixed32 ();
			case h.BYTES:
				return e.bytes ();
			case h.UINT32:
				return e.uint32 ();
			case h.SFIXED32:
				return e.sfixed32 ();
			case h.SFIXED64:
				return $(e.sfixed64 (), n);
			case h.SINT32:
				return e.sint32 ();
			case h.SINT64:
				return $(e.sint64 (), n)
			}
		}
	};
	var be = class
	{
		constructor (e)
		{
			this.info = e
		}
		prepare ()
		{
			if (!this.fields)
			{
				let e = this.info.fields ? this.info.fields.concat () : [];
				this.fields = e.sort ((t, n) => t.no - n.no)
			}
		}
		write (e, t, n)
		{
			this.prepare ();
			for (let i of this.fields)
			{
				let u, s, o = i.repeat,
					a = i.localName;
				if (i.oneof)
				{
					let f = e [i.oneof];
					if (f.oneofKind !== a) continue;
					u = f [a], s = !0
				}
				else u = e [a], s = !1;
				switch (i.kind)
				{
				case "scalar":
				case "enum":
					let f = i.kind == "enum" ? h.INT32 : i.T;
					if (o)
						if (b (Array.isArray (u)), o == ae.PACKED) this.packed (t, f, i.no, u);
						else
							for (let x of u) this.scalar (t, f, i.no, x, !0);
					else u === void 0 ? b (i.opt) : this.scalar (t, f, i.no, u, s || i.opt);
					break;
				case "message":
					if (o)
					{
						b (Array.isArray (u));
						for (let x of u) this.message (t, n, i.T (), i.no, x)
					}
					else this.message (t, n, i.T (), i.no, u);
					break;
				case "map":
					b (typeof u == "object" && u !== null);
					for (let [x, w] of Object.entries (u)) this.mapEntry (t, n, i, x, w);
					break
				}
			}
			let r = n.writeUnknownFields;
			r !== !1 && (r === !0 ? c.onWrite : r)(this.info.typeName, e, t)
		}
		mapEntry (e, t, n, r, i)
		{
			e.tag (n.no, d.LengthDelimited), e.fork ();
			let u = r;
			switch (n.K)
			{
			case h.INT32:
			case h.FIXED32:
			case h.UINT32:
			case h.SFIXED32:
			case h.SINT32:
				u = Number.parseInt (r);
				break;
			case h.BOOL:
				b (r == "true" || r == "false"), u = r == "true";
				break
			}
			switch (this.scalar (e, n.K, 1, u, !0), n.V.kind)
			{
			case "scalar":
				this.scalar (e, n.V.T, 2, i, !0);
				break;
			case "enum":
				this.scalar (e, h.INT32, 2, i, !0);
				break;
			case "message":
				this.message (e, t, n.V.T (), 2, i);
				break
			}
			e.join ()
		}
		message (e, t, n, r, i)
		{
			i !== void 0 && (n.internalBinaryWrite (i, e.tag (r, d.LengthDelimited).fork (), t), e.join ())
		}
		scalar (e, t, n, r, i)
		{
			let [u, s, o] = this.scalarInfo (t, r);
			(!o || i) && (e.tag (n, u), e [s](r))
		}
		packed (e, t, n, r)
		{
			if (!r.length) return;
			b (t !== h.BYTES && t !== h.STRING), e.tag (n, d.LengthDelimited), e.fork ();
			let [, i] = this.scalarInfo (t);
			for (let u = 0; u < r.length; u++) e [i](r [u]);
			e.join ()
		}
		scalarInfo (e, t)
		{
			let n = d.Varint,
				r, i = t === void 0,
				u = t === 0;
			switch (e)
			{
			case h.INT32:
				r = "int32";
				break;
			case h.STRING:
				u = i || !t.length, n = d.LengthDelimited, r = "string";
				break;
			case h.BOOL:
				u = t === !1, r = "bool";
				break;
			case h.UINT32:
				r = "uint32";
				break;
			case h.DOUBLE:
				n = d.Bit64, r = "double";
				break;
			case h.FLOAT:
				n = d.Bit32, r = "float";
				break;
			case h.INT64:
				u = i || N.from (t).isZero (), r = "int64";
				break;
			case h.UINT64:
				u = i || O.from (t).isZero (), r = "uint64";
				break;
			case h.FIXED64:
				u = i || O.from (t).isZero (), n = d.Bit64, r = "fixed64";
				break;
			case h.BYTES:
				u = i || !t.byteLength, n = d.LengthDelimited, r = "bytes";
				break;
			case h.FIXED32:
				n = d.Bit32, r = "fixed32";
				break;
			case h.SFIXED32:
				n = d.Bit32, r = "sfixed32";
				break;
			case h.SFIXED64:
				u = i || N.from (t).isZero (), n = d.Bit64, r = "sfixed64";
				break;
			case h.SINT32:
				r = "sint32";
				break;
			case h.SINT64:
				u = i || N.from (t).isZero (), r = "sint64";
				break
			}
			return [n, r, i || u]
		}
	};

	function $i (l)
	{
		let e = {};
		Object.defineProperty (e, g,
		{
			enumerable: !1,
			value: l
		});
		for (let t of l.fields)
		{
			let n = t.localName;
			if (!t.opt)
				if (t.oneof) e [t.oneof] = {
					oneofKind: void 0
				};
				else if (t.repeat) e [n] = [];
			else switch (t.kind)
			{
			case "scalar":
				e [n] = se (t.T, t.L);
				break;
			case "enum":
				e [n] = 0;
				break;
			case "map":
				e [n] = {};
				break
			}
		}
		return e
	}

	function p (l, e, t)
	{
		let n, r = t,
			i;
		for (let u of l.fields)
		{
			let s = u.localName;
			if (u.oneof)
			{
				let o = r [u.oneof];
				if (o?.oneofKind == null) continue;
				if (n = o [s], i = e [u.oneof], i.oneofKind = o.oneofKind, n == null)
				{
					delete i [s];
					continue
				}
			}
			else if (n = r [s], i = e, n == null) continue;
			switch (u.repeat && (i [s].length = n.length), u.kind)
			{
			case "scalar":
			case "enum":
				if (u.repeat)
					for (let a = 0; a < n.length; a++) i [s][a] = n [a];
				else i [s] = n;
				break;
			case "message":
				let o = u.T ();
				if (u.repeat)
					for (let a = 0; a < n.length; a++) i [s][a] = o.create (n [a]);
				else i [s] === void 0 ? i [s] = o.create (n) : o.mergePartial (i [s], n);
				break;
			case "map":
				switch (u.V.kind)
				{
				case "scalar":
				case "enum":
					Object.assign (i [s], n);
					break;
				case "message":
					let a = u.V.T ();
					for (let f of Object.keys (n)) i [s][f] = a.create (n [f]);
					break
				}
				break
			}
		}
	}

	function Li (l, e, t)
	{
		if (e === t) return !0;
		if (!e || !t) return !1;
		for (let n of l.fields)
		{
			let r = n.localName,
				i = n.oneof ? e [n.oneof][r] : e [r],
				u = n.oneof ? t [n.oneof][r] : t [r];
			switch (n.kind)
			{
			case "enum":
			case "scalar":
				let s = n.kind == "enum" ? h.INT32 : n.T;
				if (!(n.repeat ? ji (s, i, u) : Si (s, i, u))) return !1;
				break;
			case "map":
				if (!(n.V.kind == "message" ? Di (n.V.T (), we (i), we (u)) : ji (n.V.kind == "enum" ? h.INT32 : n.V.T, we (i), we (u)))) return !1;
				break;
			case "message":
				let o = n.T ();
				if (!(n.repeat ? Di (o, i, u) : o.equals (i, u))) return !1;
				break
			}
		}
		return !0
	}
	var we = Object.values;

	function Si (l, e, t)
	{
		if (e === t) return !0;
		if (l !== h.BYTES) return !1;
		let n = e,
			r = t;
		if (n.length !== r.length) return !1;
		for (let i = 0; i < n.length; i++)
			if (n [i] != r [i]) return !1;
		return !0
	}

	function ji (l, e, t)
	{
		if (e.length !== t.length) return !1;
		for (let n = 0; n < e.length; n++)
			if (!Si (l, e [n], t [n])) return !1;
		return !0
	}

	function Di (l, e, t)
	{
		if (e.length !== t.length) return !1;
		for (let n = 0; n < e.length; n++)
			if (!l.equals (e [n], t [n])) return !1;
		return !0
	}
	var y = class
	{
		constructor (e, t, n)
		{
			this.defaultCheckDepth = 16, this.typeName = e, this.fields = t.map (Pi), this.options = n ??
			{}, this.refTypeCheck = new ye (this), this.refJsonReader = new me (this), this.refJsonWriter = new Fe (this), this.refBinReader = new ke (this), this.refBinWriter = new be (this)
		}
		create (e)
		{
			let t = $i (this);
			return e !== void 0 && p (this, t, e), t
		}
		clone (e)
		{
			let t = this.create ();
			return p (this, t, e), t
		}
		equals (e, t)
		{
			return Li (this, e, t)
		}
		is (e, t = this.defaultCheckDepth)
		{
			return this.refTypeCheck.is (e, t, !1)
		}
		isAssignable (e, t = this.defaultCheckDepth)
		{
			return this.refTypeCheck.is (e, t, !0)
		}
		mergePartial (e, t)
		{
			p (this, e, t)
		}
		fromBinary (e, t)
		{
			let n = Ti (t);
			return this.internalBinaryRead (n.readerFactory (e), e.byteLength, n)
		}
		fromJson (e, t)
		{
			return this.internalJsonRead (e, Ui (t))
		}
		fromJsonString (e, t)
		{
			let n = JSON.parse (e);
			return this.fromJson (n, t)
		}
		toJson (e, t)
		{
			return this.internalJsonWrite (e, Ci (t))
		}
		toJsonString (e, t)
		{
			var n;
			let r = this.toJson (e, t);
			return JSON.stringify (r, null, (n = t?.prettySpaces) !== null && n !== void 0 ? n : 0)
		}
		toBinary (e, t)
		{
			let n = Ii (t);
			return this.internalBinaryWrite (e, n.writerFactory (), n).finish ()
		}
		internalJsonRead (e, t, n)
		{
			if (e !== null && typeof e == "object" && !Array.isArray (e))
			{
				let r = n ?? this.create ();
				return this.refJsonReader.read (e, r, t), r
			}
			throw new Error (`Unable to parse message ${this.typeName} from JSON ${ue (e)}.`)
		}
		internalJsonWrite (e, t)
		{
			return this.refJsonWriter.write (e, t)
		}
		internalBinaryWrite (e, t, n)
		{
			return this.refBinWriter.write (e, t, n), t
		}
		internalBinaryRead (e, t, n, r)
		{
			let i = r ?? this.create ();
			return this.refBinReader.read (e, i, n, t), i
		}
	};
	var jt = class extends y
		{
			constructor ()
			{
				super ("Browse", [
				{
					no: 9,
					name: "n1F9",
					kind: "message",
					T: () => De
				},
				{
					no: 10,
					name: "n1F10",
					kind: "message",
					T: () => q
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 9:
						i.n1F9 = De.internalBinaryRead (e, e.uint32 (), n, i.n1F9);
						break;
					case 10:
						i.n1F10 = q.internalBinaryRead (e, e.uint32 (), n, i.n1F10);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.n1F9 && De.internalBinaryWrite (e.n1F9, t.tag (9, d.LengthDelimited).fork (), n).join (), e.n1F10 && q.internalBinaryWrite (e.n1F10, t.tag (10, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		ti = new jt,
		Dt = class extends y
		{
			constructor ()
			{
				super ("n1F9", [
				{
					no: 58173949,
					name: "m2F58173949",
					kind: "message",
					T: () => Le
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 58173949:
						i.m2F58173949 = Le.internalBinaryRead (e, e.uint32 (), n, i.m2F58173949);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.m2F58173949 && Le.internalBinaryWrite (e.m2F58173949, t.tag (58173949, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		De = new Dt,
		Lt = class extends y
		{
			constructor ()
			{
				super ("n1F10", [
				{
					no: 49399797,
					name: "n2F49399797",
					kind: "message",
					T: () => P
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 49399797:
						i.n2F49399797 = P.internalBinaryRead (e, e.uint32 (), n, i.n2F49399797);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.n2F49399797 && P.internalBinaryWrite (e.n2F49399797, t.tag (49399797, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		q = new Lt,
		St = class extends y
		{
			constructor ()
			{
				super ("m2F58173949", [
				{
					no: 1,
					name: "m3F1",
					kind: "message",
					repeat: 1,
					T: () => Se
				}])
			}
			create (e)
			{
				let t = {
					m3F1: []
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.m3F1.push (Se.internalBinaryRead (e, e.uint32 (), n));
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				for (let i = 0; i < e.m3F1.length; i++) Se.internalBinaryWrite (e.m3F1 [i], t.tag (1, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		Le = new St,
		_t = class extends y
		{
			constructor ()
			{
				super ("m3F1", [
				{
					no: 58174010,
					name: "m4F58174010",
					kind: "message",
					T: () => _e
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 58174010:
						i.m4F58174010 = _e.internalBinaryRead (e, e.uint32 (), n, i.m4F58174010);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.m4F58174010 && _e.internalBinaryWrite (e.m4F58174010, t.tag (58174010, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		Se = new _t,
		At = class extends y
		{
			constructor ()
			{
				super ("m4F58174010", [
				{
					no: 4,
					name: "n1F10",
					kind: "message",
					T: () => q
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 4:
						i.n1F10 = q.internalBinaryRead (e, e.uint32 (), n, i.n1F10);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.n1F10 && q.internalBinaryWrite (e.n1F10, t.tag (4, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		_e = new At,
		Vt = class extends y
		{
			constructor ()
			{
				super ("n2F49399797", [
				{
					no: 1,
					name: "n3F1",
					kind: "message",
					repeat: 1,
					T: () => Ae
				}])
			}
			create (e)
			{
				let t = {
					n3F1: []
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.n3F1.push (Ae.internalBinaryRead (e, e.uint32 (), n));
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				for (let i = 0; i < e.n3F1.length; i++) Ae.internalBinaryWrite (e.n3F1 [i], t.tag (1, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		P = new Vt,
		Mt = class extends y
		{
			constructor ()
			{
				super ("n3F1", [
				{
					no: 50195462,
					name: "n4F50195462",
					kind: "message",
					T: () => Y
				},
				{
					no: 51845067,
					name: "n4F51845067",
					kind: "message",
					T: () => Ve
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 50195462:
						i.n4F50195462 = Y.internalBinaryRead (e, e.uint32 (), n, i.n4F50195462);
						break;
					case 51845067:
						i.n4F51845067 = Ve.internalBinaryRead (e, e.uint32 (), n, i.n4F51845067);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.n4F50195462 && Y.internalBinaryWrite (e.n4F50195462, t.tag (50195462, d.LengthDelimited).fork (), n).join (), e.n4F51845067 && Ve.internalBinaryWrite (e.n4F51845067, t.tag (51845067, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		Ae = new Mt,
		Kt = class extends y
		{
			constructor ()
			{
				super ("n4F50195462", [
				{
					no: 1,
					name: "n5F1",
					kind: "message",
					repeat: 1,
					T: () => Z
				}])
			}
			create (e)
			{
				let t = {
					n5F1: []
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.n5F1.push (Z.internalBinaryRead (e, e.uint32 (), n));
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				for (let i = 0; i < e.n5F1.length; i++) Z.internalBinaryWrite (e.n5F1 [i], t.tag (1, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		Y = new Kt,
		vt = class extends y
		{
			constructor ()
			{
				super ("n4F51845067", [
				{
					no: 5,
					name: "n5F5",
					kind: "message",
					T: () => Me
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 5:
						i.n5F5 = Me.internalBinaryRead (e, e.uint32 (), n, i.n5F5);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.n5F5 && Me.internalBinaryWrite (e.n5F5, t.tag (5, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		Ve = new vt,
		Gt = class extends y
		{
			constructor ()
			{
				super ("n5F1", [
				{
					no: 153515154,
					name: "n6F153515154",
					kind: "message",
					T: () => Ke
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 153515154:
						i.n6F153515154 = Ke.internalBinaryRead (e, e.uint32 (), n, i.n6F153515154);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.n6F153515154 && Ke.internalBinaryWrite (e.n6F153515154, t.tag (153515154, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		Z = new Gt,
		Jt = class extends y
		{
			constructor ()
			{
				super ("n5F5", [
				{
					no: 51431404,
					name: "n6F51431404",
					kind: "message",
					T: () => ve
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 51431404:
						i.n6F51431404 = ve.internalBinaryRead (e, e.uint32 (), n, i.n6F51431404);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.n6F51431404 && ve.internalBinaryWrite (e.n6F51431404, t.tag (51431404, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		Me = new Jt,
		Xt = class extends y
		{
			constructor ()
			{
				super ("n6F153515154", [
				{
					no: 172660663,
					name: "n7F172660663",
					kind: "message",
					T: () => Ge
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 172660663:
						i.n7F172660663 = Ge.internalBinaryRead (e, e.uint32 (), n, i.n7F172660663);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.n7F172660663 && Ge.internalBinaryWrite (e.n7F172660663, t.tag (172660663, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		Ke = new Xt,
		qt = class extends y
		{
			constructor ()
			{
				super ("n6F51431404", [
				{
					no: 1,
					name: "n5F1",
					kind: "message",
					repeat: 1,
					T: () => Z
				}])
			}
			create (e)
			{
				let t = {
					n5F1: []
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.n5F1.push (Z.internalBinaryRead (e, e.uint32 (), n));
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				for (let i = 0; i < e.n5F1.length; i++) Z.internalBinaryWrite (e.n5F1 [i], t.tag (1, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		ve = new qt,
		Yt = class extends y
		{
			constructor ()
			{
				super ("n7F172660663", [
				{
					no: 1,
					name: "n8F1",
					kind: "message",
					T: () => z
				},
				{
					no: 2,
					name: "n8F2",
					kind: "message",
					T: () => Q
				},
				{
					no: 3,
					name: "n8F3",
					kind: "message",
					T: () => Je
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.n8F1 = z.internalBinaryRead (e, e.uint32 (), n, i.n8F1);
						break;
					case 2:
						i.n8F2 = Q.internalBinaryRead (e, e.uint32 (), n, i.n8F2);
						break;
					case 3:
						i.n8F3 = Je.internalBinaryRead (e, e.uint32 (), n, i.n8F3);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.n8F1 && z.internalBinaryWrite (e.n8F1, t.tag (1, d.LengthDelimited).fork (), n).join (), e.n8F2 && Q.internalBinaryWrite (e.n8F2, t.tag (2, d.LengthDelimited).fork (), n).join (), e.n8F3 && Je.internalBinaryWrite (e.n8F3, t.tag (3, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		Ge = new Yt,
		Zt = class extends y
		{
			constructor ()
			{
				super ("n8F1", [
				{
					no: 168777401,
					name: "n9F168777401",
					kind: "message",
					T: () => Xe
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 168777401:
						i.n9F168777401 = Xe.internalBinaryRead (e, e.uint32 (), n, i.n9F168777401);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.n9F168777401 && Xe.internalBinaryWrite (e.n9F168777401, t.tag (168777401, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		z = new Zt,
		zt = class extends y
		{
			constructor ()
			{
				super ("n8F2", [
				{
					no: 183314536,
					name: "n9F183314536",
					kind: "message",
					T: () => qe
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 183314536:
						i.n9F183314536 = qe.internalBinaryRead (e, e.uint32 (), n, i.n9F183314536);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.n9F183314536 && qe.internalBinaryWrite (e.n9F183314536, t.tag (183314536, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		Q = new zt,
		Qt = class extends y
		{
			constructor ()
			{
				super ("n8F3", [
				{
					no: 1,
					name: "n8F1",
					kind: "message",
					T: () => z
				},
				{
					no: 2,
					name: "n8F2",
					kind: "message",
					T: () => Q
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.n8F1 = z.internalBinaryRead (e, e.uint32 (), n, i.n8F1);
						break;
					case 2:
						i.n8F2 = Q.internalBinaryRead (e, e.uint32 (), n, i.n8F2);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.n8F1 && z.internalBinaryWrite (e.n8F1, t.tag (1, d.LengthDelimited).fork (), n).join (), e.n8F2 && Q.internalBinaryWrite (e.n8F2, t.tag (2, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		Je = new Qt,
		Ht = class extends y
		{
			constructor ()
			{
				super ("n9F168777401", [
				{
					no: 3,
					name: "n10F3",
					kind: "message",
					T: () => Ye
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 3:
						i.n10F3 = Ye.internalBinaryRead (e, e.uint32 (), n, i.n10F3);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.n10F3 && Ye.internalBinaryWrite (e.n10F3, t.tag (3, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		Xe = new Ht,
		en = class extends y
		{
			constructor ()
			{
				super ("n9F183314536", [
				{
					no: 1,
					name: "type",
					kind: "scalar",
					T: 9
				}])
			}
			create (e)
			{
				let t = {
					type: ""
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.type = e.string ();
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.type !== "" && t.tag (1, d.LengthDelimited).string (e.type);
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		qe = new en,
		tn = class extends y
		{
			constructor ()
			{
				super ("n10F3", [
				{
					no: 172035250,
					name: "n11F172035250",
					kind: "message",
					T: () => Ze
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 172035250:
						i.n11F172035250 = Ze.internalBinaryRead (e, e.uint32 (), n, i.n11F172035250);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.n11F172035250 && Ze.internalBinaryWrite (e.n11F172035250, t.tag (172035250, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		Ye = new tn,
		nn = class extends y
		{
			constructor ()
			{
				super ("n11F172035250", [
				{
					no: 1,
					name: "type",
					kind: "scalar",
					T: 9
				}])
			}
			create (e)
			{
				let t = {
					type: ""
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.type = e.string ();
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.type !== "" && t.tag (1, d.LengthDelimited).string (e.type);
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		Ze = new nn,
		rn = class extends y
		{
			constructor ()
			{
				super ("Next", [
				{
					no: 7,
					name: "a1F7",
					kind: "message",
					T: () => ze
				},
				{
					no: 8,
					name: "a1F8",
					kind: "message",
					T: () => Qe
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 7:
						i.a1F7 = ze.internalBinaryRead (e, e.uint32 (), n, i.a1F7);
						break;
					case 8:
						i.a1F8 = Qe.internalBinaryRead (e, e.uint32 (), n, i.a1F8);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.a1F7 && ze.internalBinaryWrite (e.a1F7, t.tag (7, d.LengthDelimited).fork (), n).join (), e.a1F8 && Qe.internalBinaryWrite (e.a1F8, t.tag (8, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		ni = new rn,
		an = class extends y
		{
			constructor ()
			{
				super ("a1F7", [
				{
					no: 51779735,
					name: "a2F51779735",
					kind: "message",
					T: () => He
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 51779735:
						i.a2F51779735 = He.internalBinaryRead (e, e.uint32 (), n, i.a2F51779735);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.a2F51779735 && He.internalBinaryWrite (e.a2F51779735, t.tag (51779735, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		ze = new an,
		sn = class extends y
		{
			constructor ()
			{
				super ("a1F8", [
				{
					no: 49399797,
					name: "n2F49399797",
					kind: "message",
					T: () => P
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 49399797:
						i.n2F49399797 = P.internalBinaryRead (e, e.uint32 (), n, i.n2F49399797);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.n2F49399797 && P.internalBinaryWrite (e.n2F49399797, t.tag (49399797, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		Qe = new sn,
		on = class extends y
		{
			constructor ()
			{
				super ("a2F51779735", [
				{
					no: 1,
					name: "a3F1",
					kind: "message",
					T: () => et
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.a3F1 = et.internalBinaryRead (e, e.uint32 (), n, i.a3F1);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.a3F1 && et.internalBinaryWrite (e.a3F1, t.tag (1, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		He = new on,
		ln = class extends y
		{
			constructor ()
			{
				super ("a3F1", [
				{
					no: 49399797,
					name: "n2F49399797",
					kind: "message",
					T: () => P
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 49399797:
						i.n2F49399797 = P.internalBinaryRead (e, e.uint32 (), n, i.n2F49399797);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.n2F49399797 && P.internalBinaryWrite (e.n2F49399797, t.tag (49399797, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		et = new ln,
		un = class extends y
		{
			constructor ()
			{
				super ("Search", [
				{
					no: 4,
					name: "s1F4",
					kind: "message",
					T: () => tt
				},
				{
					no: 7,
					name: "s1F7",
					kind: "message",
					T: () => nt
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 4:
						i.s1F4 = tt.internalBinaryRead (e, e.uint32 (), n, i.s1F4);
						break;
					case 7:
						i.s1F7 = nt.internalBinaryRead (e, e.uint32 (), n, i.s1F7);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.s1F4 && tt.internalBinaryWrite (e.s1F4, t.tag (4, d.LengthDelimited).fork (), n).join (), e.s1F7 && nt.internalBinaryWrite (e.s1F7, t.tag (7, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		ii = new un,
		fn = class extends y
		{
			constructor ()
			{
				super ("s1F4", [
				{
					no: 49399797,
					name: "n2F49399797",
					kind: "message",
					T: () => P
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 49399797:
						i.n2F49399797 = P.internalBinaryRead (e, e.uint32 (), n, i.n2F49399797);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.n2F49399797 && P.internalBinaryWrite (e.n2F49399797, t.tag (49399797, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		tt = new fn,
		cn = class extends y
		{
			constructor ()
			{
				super ("s1F7", [
				{
					no: 50195462,
					name: "n4F50195462",
					kind: "message",
					T: () => Y
				},
				{
					no: 49399797,
					name: "n2F49399797",
					kind: "message",
					T: () => P
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 50195462:
						i.n4F50195462 = Y.internalBinaryRead (e, e.uint32 (), n, i.n4F50195462);
						break;
					case 49399797:
						i.n2F49399797 = P.internalBinaryRead (e, e.uint32 (), n, i.n2F49399797);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.n4F50195462 && Y.internalBinaryWrite (e.n4F50195462, t.tag (50195462, d.LengthDelimited).fork (), n).join (), e.n2F49399797 && P.internalBinaryWrite (e.n2F49399797, t.tag (49399797, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		nt = new cn,
		dn = class extends y
		{
			constructor ()
			{
				super ("Shorts", [
				{
					no: 2,
					name: "t1F2",
					kind: "message",
					repeat: 1,
					T: () => it
				}])
			}
			create (e)
			{
				let t = {
					t1F2: []
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 2:
						i.t1F2.push (it.internalBinaryRead (e, e.uint32 (), n));
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				for (let i = 0; i < e.t1F2.length; i++) it.internalBinaryWrite (e.t1F2 [i], t.tag (2, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		ri = new dn,
		hn = class extends y
		{
			constructor ()
			{
				super ("t1F2", [
				{
					no: 1,
					name: "n2F1",
					kind: "message",
					T: () => rt
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.n2F1 = rt.internalBinaryRead (e, e.uint32 (), n, i.n2F1);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.n2F1 && rt.internalBinaryWrite (e.n2F1, t.tag (1, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		it = new hn,
		pn = class extends y
		{
			constructor ()
			{
				super ("n2F1", [
				{
					no: 139608561,
					name: "n3F139608561",
					kind: "message",
					T: () => at
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 139608561:
						i.n3F139608561 = at.internalBinaryRead (e, e.uint32 (), n, i.n3F139608561);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.n3F139608561 && at.internalBinaryWrite (e.n3F139608561, t.tag (139608561, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		rt = new pn,
		gn = class extends y
		{
			constructor ()
			{
				super ("n3F139608561", [
				{
					no: 8,
					name: "n4F8",
					kind: "message",
					T: () => st
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 8:
						i.n4F8 = st.internalBinaryRead (e, e.uint32 (), n, i.n4F8);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.n4F8 && st.internalBinaryWrite (e.n4F8, t.tag (8, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		at = new gn,
		yn = class extends y
		{
			constructor ()
			{
				super ("n4F8", [
				{
					no: 139970731,
					name: "n4F139970731",
					kind: "message",
					T: () => ot
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 139970731:
						i.n4F139970731 = ot.internalBinaryRead (e, e.uint32 (), n, i.n4F139970731);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.n4F139970731 && ot.internalBinaryWrite (e.n4F139970731, t.tag (139970731, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		st = new yn,
		mn = class extends y
		{
			constructor ()
			{
				super ("n4F139970731", [
				{
					no: 12,
					name: "f1",
					kind: "scalar",
					T: 5
				}])
			}
			create (e)
			{
				let t = {
					f1: 0
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 12:
						i.f1 = e.int32 ();
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.f1 !== 0 && t.tag (12, d.Varint).int32 (e.f1);
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		ot = new mn,
		Fn = class extends y
		{
			constructor ()
			{
				super ("Guide", [
				{
					no: 4,
					name: "g1F4",
					kind: "message",
					repeat: 1,
					T: () => lt
				},
				{
					no: 6,
					name: "g1F6",
					kind: "message",
					repeat: 1,
					T: () => ut
				}])
			}
			create (e)
			{
				let t = {
					g1F4: [],
					g1F6: []
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 4:
						i.g1F4.push (lt.internalBinaryRead (e, e.uint32 (), n));
						break;
					case 6:
						i.g1F6.push (ut.internalBinaryRead (e, e.uint32 (), n));
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				for (let i = 0; i < e.g1F4.length; i++) lt.internalBinaryWrite (e.g1F4 [i], t.tag (4, d.LengthDelimited).fork (), n).join ();
				for (let i = 0; i < e.g1F6.length; i++) ut.internalBinaryWrite (e.g1F6 [i], t.tag (6, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		ai = new Fn,
		kn = class extends y
		{
			constructor ()
			{
				super ("g1F4", [
				{
					no: 117866661,
					name: "g2F117866661",
					kind: "message",
					T: () => H
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 117866661:
						i.g2F117866661 = H.internalBinaryRead (e, e.uint32 (), n, i.g2F117866661);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.g2F117866661 && H.internalBinaryWrite (e.g2F117866661, t.tag (117866661, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		lt = new kn,
		bn = class extends y
		{
			constructor ()
			{
				super ("g1F6", [
				{
					no: 117866661,
					name: "g2F117866661",
					kind: "message",
					T: () => H
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 117866661:
						i.g2F117866661 = H.internalBinaryRead (e, e.uint32 (), n, i.g2F117866661);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.g2F117866661 && H.internalBinaryWrite (e.g2F117866661, t.tag (117866661, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		ut = new bn,
		wn = class extends y
		{
			constructor ()
			{
				super ("g2F117866661", [
				{
					no: 1,
					name: "g3F1",
					kind: "message",
					repeat: 1,
					T: () => ft
				}])
			}
			create (e)
			{
				let t = {
					g3F1: []
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.g3F1.push (ft.internalBinaryRead (e, e.uint32 (), n));
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				for (let i = 0; i < e.g3F1.length; i++) ft.internalBinaryWrite (e.g3F1 [i], t.tag (1, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		H = new wn,
		Bn = class extends y
		{
			constructor ()
			{
				super ("g3F1", [
				{
					no: 318370163,
					name: "g4F318370163",
					kind: "message",
					T: () => ct
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 318370163:
						i.g4F318370163 = ct.internalBinaryRead (e, e.uint32 (), n, i.g4F318370163);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.g4F318370163 && ct.internalBinaryWrite (e.g4F318370163, t.tag (318370163, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		ft = new Bn,
		Nn = class extends y
		{
			constructor ()
			{
				super ("g4F318370163", [
				{
					no: 1,
					name: "f1",
					kind: "scalar",
					T: 9
				}])
			}
			create (e)
			{
				let t = {
					f1: ""
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.f1 = e.string ();
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.f1 !== "" && t.tag (1, d.LengthDelimited).string (e.f1);
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		ct = new Nn,
		xn = class extends y
		{
			constructor ()
			{
				super ("Name", [
				{
					no: 1,
					name: "runs",
					kind: "message",
					repeat: 1,
					T: () => dt
				}])
			}
			create (e)
			{
				let t = {
					runs: []
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.runs.push (dt.internalBinaryRead (e, e.uint32 (), n));
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				for (let i = 0; i < e.runs.length; i++) dt.internalBinaryWrite (e.runs [i], t.tag (1, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		ee = new xn,
		Tn = class extends y
		{
			constructor ()
			{
				super ("Name.Runs", [
				{
					no: 1,
					name: "text",
					kind: "scalar",
					T: 9
				}])
			}
			create (e)
			{
				let t = {
					text: ""
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.text = e.string ();
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.text !== "" && t.tag (1, d.LengthDelimited).string (e.text);
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		dt = new Tn,
		Rn = class extends y
		{
			constructor ()
			{
				super ("Player", [
				{
					no: 7,
					name: "p1F7",
					kind: "message",
					repeat: 1,
					T: () => kt
				},
				{
					no: 2,
					name: "p1F2",
					kind: "message",
					T: () => Ft
				},
				{
					no: 10,
					name: "captions",
					kind: "message",
					T: () => ht
				}])
			}
			create (e)
			{
				let t = {
					p1F7: []
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 7:
						i.p1F7.push (kt.internalBinaryRead (e, e.uint32 (), n));
						break;
					case 2:
						i.p1F2 = Ft.internalBinaryRead (e, e.uint32 (), n, i.p1F2);
						break;
					case 10:
						i.captions = ht.internalBinaryRead (e, e.uint32 (), n, i.captions);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				for (let i = 0; i < e.p1F7.length; i++) kt.internalBinaryWrite (e.p1F7 [i], t.tag (7, d.LengthDelimited).fork (), n).join ();
				e.p1F2 && Ft.internalBinaryWrite (e.p1F2, t.tag (2, d.LengthDelimited).fork (), n).join (), e.captions && ht.internalBinaryWrite (e.captions, t.tag (10, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		si = new Rn,
		In = class extends y
		{
			constructor ()
			{
				super ("Player.Captions", [
				{
					no: 51621377,
					name: "playerCaptionsTracklistRenderer",
					kind: "message",
					T: () => pt
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 51621377:
						i.playerCaptionsTracklistRenderer = pt.internalBinaryRead (e, e.uint32 (), n, i.playerCaptionsTracklistRenderer);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.playerCaptionsTracklistRenderer && pt.internalBinaryWrite (e.playerCaptionsTracklistRenderer, t.tag (51621377, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		ht = new In,
		Wn = class extends y
		{
			constructor ()
			{
				super ("Player.Captions.PlayerCaptionsTracklistRenderer", [
				{
					no: 1,
					name: "captionTracks",
					kind: "message",
					repeat: 1,
					T: () => gt
				},
				{
					no: 2,
					name: "audioTracks",
					kind: "message",
					repeat: 1,
					T: () => yt
				},
				{
					no: 3,
					name: "translationLanguages",
					kind: "message",
					repeat: 1,
					T: () => mt
				},
				{
					no: 4,
					name: "defaultAudioTrackIndex",
					kind: "scalar",
					opt: !0,
					T: 5
				},
				{
					no: 6,
					name: "defaultCaptionTrackIndex",
					kind: "scalar",
					jsonName: "defaultAudioTrackIndex",
					opt: !0,
					T: 5
				}])
			}
			create (e)
			{
				let t = {
					captionTracks: [],
					audioTracks: [],
					translationLanguages: []
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.captionTracks.push (gt.internalBinaryRead (e, e.uint32 (), n));
						break;
					case 2:
						i.audioTracks.push (yt.internalBinaryRead (e, e.uint32 (), n));
						break;
					case 3:
						i.translationLanguages.push (mt.internalBinaryRead (e, e.uint32 (), n));
						break;
					case 4:
						i.defaultAudioTrackIndex = e.int32 ();
						break;
					case 6:
						i.defaultCaptionTrackIndex = e.int32 ();
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				for (let i = 0; i < e.captionTracks.length; i++) gt.internalBinaryWrite (e.captionTracks [i], t.tag (1, d.LengthDelimited).fork (), n).join ();
				for (let i = 0; i < e.audioTracks.length; i++) yt.internalBinaryWrite (e.audioTracks [i], t.tag (2, d.LengthDelimited).fork (), n).join ();
				for (let i = 0; i < e.translationLanguages.length; i++) mt.internalBinaryWrite (e.translationLanguages [i], t.tag (3, d.LengthDelimited).fork (), n).join ();
				e.defaultAudioTrackIndex !== void 0 && t.tag (4, d.Varint).int32 (e.defaultAudioTrackIndex), e.defaultCaptionTrackIndex !== void 0 && t.tag (6, d.Varint).int32 (e.defaultCaptionTrackIndex);
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		pt = new Wn,
		On = class extends y
		{
			constructor ()
			{
				super ("Player.Captions.PlayerCaptionsTracklistRenderer.CaptionTracks", [
				{
					no: 1,
					name: "baseUrl",
					kind: "scalar",
					T: 9
				},
				{
					no: 2,
					name: "name",
					kind: "message",
					T: () => ee
				},
				{
					no: 3,
					name: "vssId",
					kind: "scalar",
					T: 9
				},
				{
					no: 4,
					name: "languageCode",
					kind: "scalar",
					T: 9
				},
				{
					no: 5,
					name: "kind",
					kind: "scalar",
					opt: !0,
					T: 9
				},
				{
					no: 6,
					name: "rtl",
					kind: "scalar",
					opt: !0,
					T: 8
				},
				{
					no: 7,
					name: "isTranslatable",
					kind: "scalar",
					T: 8
				}])
			}
			create (e)
			{
				let t = {
					baseUrl: "",
					vssId: "",
					languageCode: "",
					isTranslatable: !1
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.baseUrl = e.string ();
						break;
					case 2:
						i.name = ee.internalBinaryRead (e, e.uint32 (), n, i.name);
						break;
					case 3:
						i.vssId = e.string ();
						break;
					case 4:
						i.languageCode = e.string ();
						break;
					case 5:
						i.kind = e.string ();
						break;
					case 6:
						i.rtl = e.bool ();
						break;
					case 7:
						i.isTranslatable = e.bool ();
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.baseUrl !== ""&& t.tag (1, d.LengthDelimited).string (e.baseUrl), e.name && ee.internalBinaryWrite (e.name, t.tag (2, d.LengthDelimited).fork (), n).join (), e.vssId !=="" && t.tag (3, d.LengthDelimited).string (e.vssId), e.languageCode !== "" && t.tag (4, d.LengthDelimited).string (e.languageCode), e.kind !== void 0 && t.tag (5, d.LengthDelimited).string (e.kind), e.rtl !== void 0 && t.tag (6, d.Varint).bool (e.rtl), e.isTranslatable !== !1 && t.tag (7, d.Varint).bool (e.isTranslatable);
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		gt = new On,
		Un = class extends y
		{
			constructor ()
			{
				super ("Player.Captions.PlayerCaptionsTracklistRenderer.AudioTracks", [
				{
					no: 2,
					name: "captionTrackIndices",
					kind: "scalar",
					repeat: 2,
					T: 5
				},
				{
					no: 3,
					name: "defaultCaptionTrackIndex",
					kind: "scalar",
					opt: !0,
					T: 5
				},
				{
					no: 4,
					name: "forcedCaptionTrackIndex",
					kind: "scalar",
					opt: !0,
					T: 5
				},
				{
					no: 5,
					name: "visibility",
					kind: "scalar",
					opt: !0,
					T: 5
				},
				{
					no: 6,
					name: "hasDefaultTrack",
					kind: "scalar",
					opt: !0,
					T: 8
				},
				{
					no: 7,
					name: "hasForcedTrack",
					kind: "scalar",
					opt: !0,
					T: 8
				},
				{
					no: 8,
					name: "audioTrackId",
					kind: "scalar",
					opt: !0,
					T: 9
				},
				{
					no: 11,
					name: "captionsInitialState",
					kind: "scalar",
					opt: !0,
					T: 5
				}])
			}
			create (e)
			{
				let t = {
					captionTrackIndices: []
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 2:
						if (o === d.LengthDelimited)
							for (let x = e.int32 () + e.pos; e.pos < x;) i.captionTrackIndices.push (e.int32 ());
						else i.captionTrackIndices.push (e.int32 ());
						break;
					case 3:
						i.defaultCaptionTrackIndex = e.int32 ();
						break;
					case 4:
						i.forcedCaptionTrackIndex = e.int32 ();
						break;
					case 5:
						i.visibility = e.int32 ();
						break;
					case 6:
						i.hasDefaultTrack = e.bool ();
						break;
					case 7:
						i.hasForcedTrack = e.bool ();
						break;
					case 8:
						i.audioTrackId = e.string ();
						break;
					case 11:
						i.captionsInitialState = e.int32 ();
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				for (let i = 0; i < e.captionTrackIndices.length; i++) t.tag (2, d.Varint).int32 (e.captionTrackIndices [i]);
				e.defaultCaptionTrackIndex !== void 0 && t.tag (3, d.Varint).int32 (e.defaultCaptionTrackIndex), e.forcedCaptionTrackIndex !== void 0 && t.tag (4, d.Varint).int32 (e.forcedCaptionTrackIndex), e.visibility !== void 0 && t.tag (5, d.Varint).int32 (e.visibility), e.hasDefaultTrack !== void 0 && t.tag (6, d.Varint).bool (e.hasDefaultTrack), e.hasForcedTrack !== void 0 && t.tag (7, d.Varint).bool (e.hasForcedTrack), e.audioTrackId !== void 0 && t.tag (8, d.LengthDelimited).string (e.audioTrackId), e.captionsInitialState !== void 0 && t.tag (11, d.Varint).int32 (e.captionsInitialState);
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		yt = new Un,
		Cn = class extends y
		{
			constructor ()
			{
				super ("Player.Captions.PlayerCaptionsTracklistRenderer.TranslationLanguages", [
				{
					no: 1,
					name: "languageCode",
					kind: "scalar",
					T: 9
				},
				{
					no: 2,
					name: "languageName",
					kind: "message",
					T: () => ee
				}])
			}
			create (e)
			{
				let t = {
					languageCode: ""
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.languageCode = e.string ();
						break;
					case 2:
						i.languageName = ee.internalBinaryRead (e, e.uint32 (), n, i.languageName);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.languageCode !== "" && t.tag (1, d.LengthDelimited).string (e.languageCode), e.languageName && ee.internalBinaryWrite (e.languageName, t.tag (2, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		mt = new Cn,
		Pn = class extends y
		{
			constructor ()
			{
				super ("p1F2", [
				{
					no: 21,
					name: "p2F21",
					kind: "message",
					T: () => wt
				},
				{
					no: 11,
					name: "p2F11",
					kind: "message",
					T: () => Bt
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 21:
						i.p2F21 = wt.internalBinaryRead (e, e.uint32 (), n, i.p2F21);
						break;
					case 11:
						i.p2F11 = Bt.internalBinaryRead (e, e.uint32 (), n, i.p2F11);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.p2F21 && wt.internalBinaryWrite (e.p2F21, t.tag (21, d.LengthDelimited).fork (), n).join (), e.p2F11 && Bt.internalBinaryWrite (e.p2F11, t.tag (11, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		Ft = new Pn,
		En = class extends y
		{
			constructor ()
			{
				super ("p1F7", [
				{
					no: 84813246,
					name: "p2F84813246",
					kind: "message",
					T: () => bt
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 84813246:
						i.p2F84813246 = bt.internalBinaryRead (e, e.uint32 (), n, i.p2F84813246);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.p2F84813246 && bt.internalBinaryWrite (e.p2F84813246, t.tag (84813246, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		kt = new En,
		$n = class extends y
		{
			constructor ()
			{
				super ("p2F84813246", [
				{
					no: 3,
					name: "v",
					kind: "scalar",
					T: 5
				}])
			}
			create (e)
			{
				let t = {
					v: 0
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 3:
						i.v = e.int32 ();
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.v !== 0 && t.tag (3, d.Varint).int32 (e.v);
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		bt = new $n,
		jn = class extends y
		{
			constructor ()
			{
				super ("p2F21", [
				{
					no: 151635310,
					name: "p3F151635310",
					kind: "message",
					T: () => Nt
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 151635310:
						i.p3F151635310 = Nt.internalBinaryRead (e, e.uint32 (), n, i.p3F151635310);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.p3F151635310 && Nt.internalBinaryWrite (e.p3F151635310, t.tag (151635310, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		wt = new jn,
		Dn = class extends y
		{
			constructor ()
			{
				super ("p2F11", [
				{
					no: 64657230,
					name: "p3F64657230",
					kind: "message",
					T: () => xt
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 64657230:
						i.p3F64657230 = xt.internalBinaryRead (e, e.uint32 (), n, i.p3F64657230);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.p3F64657230 && xt.internalBinaryWrite (e.p3F64657230, t.tag (64657230, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		Bt = new Dn,
		Ln = class extends y
		{
			constructor ()
			{
				super ("p3F151635310", [
				{
					no: 1,
					name: "pip",
					kind: "scalar",
					T: 5
				}])
			}
			create (e)
			{
				let t = {
					pip: 0
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.pip = e.int32 ();
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.pip !== 0 && t.tag (1, d.Varint).int32 (e.pip);
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		Nt = new Ln,
		Sn = class extends y
		{
			constructor ()
			{
				super ("p3F64657230", [
				{
					no: 1,
					name: "backPlay",
					kind: "scalar",
					T: 5
				}])
			}
			create (e)
			{
				let t = {
					backPlay: 0
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.backPlay = e.int32 ();
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.backPlay !== 0 && t.tag (1, d.Varint).int32 (e.backPlay);
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		xt = new Sn,
		_n = class extends y
		{
			constructor ()
			{
				super ("Setting", [
				{
					no: 6,
					name: "st1F6",
					kind: "message",
					repeat: 1,
					T: () => Tt
				},
				{
					no: 7,
					name: "st1F7",
					kind: "message",
					T: () => Rt
				},
				{
					no: 10,
					name: "st1F10",
					kind: "message",
					T: () => It
				}])
			}
			create (e)
			{
				let t = {
					st1F6: []
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 6:
						i.st1F6.push (Tt.internalBinaryRead (e, e.uint32 (), n));
						break;
					case 7:
						i.st1F7 = Rt.internalBinaryRead (e, e.uint32 (), n, i.st1F7);
						break;
					case 10:
						i.st1F10 = It.internalBinaryRead (e, e.uint32 (), n, i.st1F10);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				for (let i = 0; i < e.st1F6.length; i++) Tt.internalBinaryWrite (e.st1F6 [i], t.tag (6, d.LengthDelimited).fork (), n).join ();
				e.st1F7 && Rt.internalBinaryWrite (e.st1F7, t.tag (7, d.LengthDelimited).fork (), n).join (), e.st1F10 && It.internalBinaryWrite (e.st1F10, t.tag (10, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		oi = new _n,
		An = class extends y
		{
			constructor ()
			{
				super ("st1F6", [
				{
					no: 88478200,
					name: "st2F88478200",
					kind: "message",
					T: () => ne
				},
				{
					no: 66930374,
					name: "st2F66930374",
					kind: "message",
					T: () => Wt
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 88478200:
						i.st2F88478200 = ne.internalBinaryRead (e, e.uint32 (), n, i.st2F88478200);
						break;
					case 66930374:
						i.st2F66930374 = Wt.internalBinaryRead (e, e.uint32 (), n, i.st2F66930374);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.st2F88478200 && ne.internalBinaryWrite (e.st2F88478200, t.tag (88478200, d.LengthDelimited).fork (), n).join (), e.st2F66930374 && Wt.internalBinaryWrite (e.st2F66930374, t.tag (66930374, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		Tt = new An,
		Vn = class extends y
		{
			constructor ()
			{
				super ("st1F7", [
				{
					no: 88478200,
					name: "st2F88478200",
					kind: "message",
					T: () => ne
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 88478200:
						i.st2F88478200 = ne.internalBinaryRead (e, e.uint32 (), n, i.st2F88478200);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.st2F88478200 && ne.internalBinaryWrite (e.st2F88478200, t.tag (88478200, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		Rt = new Vn,
		Mn = class extends y
		{
			constructor ()
			{
				super ("st1F10", [
				{
					no: 4,
					name: "st2F4",
					kind: "message",
					T: () => te
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 4:
						i.st2F4 = te.internalBinaryRead (e, e.uint32 (), n, i.st2F4);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.st2F4 && te.internalBinaryWrite (e.st2F4, t.tag (4, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		It = new Mn,
		Kn = class extends y
		{
			constructor ()
			{
				super ("st2F4", [
				{
					no: 1,
					name: "f1",
					kind: "scalar",
					T: 4
				},
				{
					no: 2,
					name: "f2",
					kind: "scalar",
					T: 7
				},
				{
					no: 3,
					name: "f3",
					kind: "scalar",
					T: 7
				}])
			}
			create (e)
			{
				let t = {
					f1: "0",
					f2: 0,
					f3: 0
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.f1 = e.uint64 ().toString ();
						break;
					case 2:
						i.f2 = e.fixed32 ();
						break;
					case 3:
						i.f3 = e.fixed32 ();
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.f1 !== "0" && t.tag (1, d.Varint).uint64 (e.f1), e.f2 !== 0 && t.tag (2, d.Bit32).fixed32 (e.f2), e.f3 !== 0 && t.tag (3, d.Bit32).fixed32 (e.f3);
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		te = new Kn,
		vn = class extends y
		{
			constructor ()
			{
				super ("st2F88478200", [
				{
					no: 2,
					name: "f2",
					kind: "scalar",
					T: 5
				},
				{
					no: 3,
					name: "f3",
					kind: "scalar",
					T: 5
				},
				{
					no: 5,
					name: "st3F5",
					kind: "message",
					T: () => M
				},
				{
					no: 6,
					name: "f6",
					kind: "scalar",
					T: 5
				},
				{
					no: 7,
					name: "f7",
					kind: "scalar",
					T: 5
				},
				{
					no: 8,
					name: "f8",
					kind: "scalar",
					T: 5
				},
				{
					no: 9,
					name: "f9",
					kind: "scalar",
					T: 5
				},
				{
					no: 10,
					name: "f10",
					kind: "scalar",
					T: 5
				},
				{
					no: 12,
					name: "f12",
					kind: "scalar",
					T: 5
				}])
			}
			create (e)
			{
				let t = {
					f2: 0,
					f3: 0,
					f6: 0,
					f7: 0,
					f8: 0,
					f9: 0,
					f10: 0,
					f12: 0
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 2:
						i.f2 = e.int32 ();
						break;
					case 3:
						i.f3 = e.int32 ();
						break;
					case 5:
						i.st3F5 = M.internalBinaryRead (e, e.uint32 (), n, i.st3F5);
						break;
					case 6:
						i.f6 = e.int32 ();
						break;
					case 7:
						i.f7 = e.int32 ();
						break;
					case 8:
						i.f8 = e.int32 ();
						break;
					case 9:
						i.f9 = e.int32 ();
						break;
					case 10:
						i.f10 = e.int32 ();
						break;
					case 12:
						i.f12 = e.int32 ();
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.f2 !== 0 && t.tag (2, d.Varint).int32 (e.f2), e.f3 !== 0 && t.tag (3, d.Varint).int32 (e.f3), e.st3F5 && M.internalBinaryWrite (e.st3F5, t.tag (5, d.LengthDelimited).fork (), n).join (), e.f6 !== 0 && t.tag (6, d.Varint).int32 (e.f6), e.f7 !== 0 && t.tag (7, d.Varint).int32 (e.f7), e.f8 !== 0 && t.tag (8, d.Varint).int32 (e.f8), e.f9 !== 0 && t.tag (9, d.Varint).int32 (e.f9), e.f10 !== 0 && t.tag (10, d.Varint).int32 (e.f10), e.f12 !== 0 && t.tag (12, d.Varint).int32 (e.f12);
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		ne = new vn,
		Gn = class extends y
		{
			constructor ()
			{
				super ("st2F66930374", [
				{
					no: 3,
					name: "st3F3",
					kind: "message",
					repeat: 1,
					T: () => Ot
				},
				{
					no: 4,
					name: "num",
					kind: "scalar",
					T: 5
				}])
			}
			create (e)
			{
				let t = {
					st3F3: [],
					num: 0
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 3:
						i.st3F3.push (Ot.internalBinaryRead (e, e.uint32 (), n));
						break;
					case 4:
						i.num = e.int32 ();
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				for (let i = 0; i < e.st3F3.length; i++) Ot.internalBinaryWrite (e.st3F3 [i], t.tag (3, d.LengthDelimited).fork (), n).join ();
				e.num !== 0 && t.tag (4, d.Varint).int32 (e.num);
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		Wt = new Gn,
		Jn = class extends y
		{
			constructor ()
			{
				super ("st3F1", [
				{
					no: 1,
					name: "st4F1",
					kind: "message",
					T: () => Ut
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.st4F1 = Ut.internalBinaryRead (e, e.uint32 (), n, i.st4F1);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.st4F1 && Ut.internalBinaryWrite (e.st4F1, t.tag (1, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		es = new Jn,
		Xn = class extends y
		{
			constructor ()
			{
				super ("st3F3", [
				{
					no: 61331416,
					name: "st4F61331416",
					kind: "message",
					T: () => Ct
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 61331416:
						i.st4F61331416 = Ct.internalBinaryRead (e, e.uint32 (), n, i.st4F61331416);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.st4F61331416 && Ct.internalBinaryWrite (e.st4F61331416, t.tag (61331416, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		Ot = new Xn,
		qn = class extends y
		{
			constructor ()
			{
				super ("st3F5", [
				{
					no: 1,
					name: "f1",
					kind: "scalar",
					T: 5
				},
				{
					no: 2,
					name: "f2",
					kind: "scalar",
					T: 5
				},
				{
					no: 3,
					name: "f3",
					kind: "scalar",
					T: 5
				},
				{
					no: 4,
					name: "st2F4",
					kind: "message",
					T: () => te
				}])
			}
			create (e)
			{
				let t = {
					f1: 0,
					f2: 0,
					f3: 0
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.f1 = e.int32 ();
						break;
					case 2:
						i.f2 = e.int32 ();
						break;
					case 3:
						i.f3 = e.int32 ();
						break;
					case 4:
						i.st2F4 = te.internalBinaryRead (e, e.uint32 (), n, i.st2F4);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.f1 !== 0 && t.tag (1, d.Varint).int32 (e.f1), e.f2 !== 0 && t.tag (2, d.Varint).int32 (e.f2), e.f3 !== 0 && t.tag (3, d.Varint).int32 (e.f3), e.st2F4 && te.internalBinaryWrite (e.st2F4, t.tag (4, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		M = new qn,
		Yn = class extends y
		{
			constructor ()
			{
				super ("st4F1", [
				{
					no: 1,
					name: "title",
					kind: "scalar",
					T: 9
				}])
			}
			create (e)
			{
				let t = {
					title: ""
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.title = e.string ();
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.title !== "" && t.tag (1, d.LengthDelimited).string (e.title);
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		Ut = new Yn,
		Zn = class extends y
		{
			constructor ()
			{
				super ("st4F61331416", [
				{
					no: 5,
					name: "st5F5",
					kind: "message",
					T: () => X
				},
				{
					no: 6,
					name: "st5F6",
					kind: "message",
					T: () => X
				},
				{
					no: 13,
					name: "st3F5",
					kind: "message",
					T: () => M
				},
				{
					no: 15,
					name: "f15",
					kind: "scalar",
					T: 5
				}])
			}
			create (e)
			{
				let t = {
					f15: 0
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 5:
						i.st5F5 = X.internalBinaryRead (e, e.uint32 (), n, i.st5F5);
						break;
					case 6:
						i.st5F6 = X.internalBinaryRead (e, e.uint32 (), n, i.st5F6);
						break;
					case 13:
						i.st3F5 = M.internalBinaryRead (e, e.uint32 (), n, i.st3F5);
						break;
					case 15:
						i.f15 = e.int32 ();
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.st5F5 && X.internalBinaryWrite (e.st5F5, t.tag (5, d.LengthDelimited).fork (), n).join (), e.st5F6 && X.internalBinaryWrite (e.st5F6, t.tag (6, d.LengthDelimited).fork (), n).join (), e.st3F5 && M.internalBinaryWrite (e.st3F5, t.tag (13, d.LengthDelimited).fork (), n).join (), e.f15 !== 0 && t.tag (15, d.Varint).int32 (e.f15);
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		Ct = new Zn,
		zn = class extends y
		{
			constructor ()
			{
				super ("st5F5", [
				{
					no: 2,
					name: "st3F5",
					kind: "message",
					T: () => M
				},
				{
					no: 81212182,
					name: "st6F81212182",
					kind: "message",
					T: () => Pt
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 2:
						i.st3F5 = M.internalBinaryRead (e, e.uint32 (), n, i.st3F5);
						break;
					case 81212182:
						i.st6F81212182 = Pt.internalBinaryRead (e, e.uint32 (), n, i.st6F81212182);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.st3F5 && M.internalBinaryWrite (e.st3F5, t.tag (2, d.LengthDelimited).fork (), n).join (), e.st6F81212182 && Pt.internalBinaryWrite (e.st6F81212182, t.tag (81212182, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		X = new zn,
		Qn = class extends y
		{
			constructor ()
			{
				super ("st6F81212182", [
				{
					no: 1,
					name: "st7F1",
					kind: "message",
					T: () => Et
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.st7F1 = Et.internalBinaryRead (e, e.uint32 (), n, i.st7F1);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.st7F1 && Et.internalBinaryWrite (e.st7F1, t.tag (1, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		Pt = new Qn,
		Hn = class extends y
		{
			constructor ()
			{
				super ("st7F1", [
				{
					no: 1,
					name: "st8F1",
					kind: "message",
					T: () => $t
				},
				{
					no: 3,
					name: "f3",
					kind: "scalar",
					T: 5
				}])
			}
			create (e)
			{
				let t = {
					f3: 0
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.st8F1 = $t.internalBinaryRead (e, e.uint32 (), n, i.st8F1);
						break;
					case 3:
						i.f3 = e.int32 ();
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.st8F1 && $t.internalBinaryWrite (e.st8F1, t.tag (1, d.LengthDelimited).fork (), n).join (), e.f3 !== 0 && t.tag (3, d.Varint).int32 (e.f3);
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		Et = new Hn,
		ei = class extends y
		{
			constructor ()
			{
				super ("st8F1", [
				{
					no: 1,
					name: "f1",
					kind: "scalar",
					T: 5
				}])
			}
			create (e)
			{
				let t = {
					f1: 0
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.f1 = e.int32 ();
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.f1 !== 0 && t.tag (1, d.Varint).int32 (e.f1);
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		$t = new ei;
	var Be = class
		{
			constructor (e, t)
			{
				this.name = e || "", this.debug = t?.debug || !1, e && this.log (`${e} Start`)
			}
			getJSON (e, t = {})
			{
				let n = this.getVal (e);
				return n ? JSON.parse (n) : t
			}
			setJSON (e, t)
			{
				this.setVal (JSON.stringify (e), t)
			}
			msg (e = this.name, t = "", n ="", r)
			{}
			log (e)
			{
				this.debug && (typeof e == "object" && (e = JSON.stringify (e)), console.log (e))
			}
			done (e = {})
			{
				$done (e)
			}
		},
		oe = class extends Be
		{
			constructor (e, t)
			{
				super (e, t)
			}
			getVal (e)
			{
				return $persistentStore.read (e)
			}
			setVal (e, t)
			{
				$persistentStore.write (e, t)
			}
			msg (e = this.name, t = "", n ="", r)
			{
				let i = u => u && (typeof u == "string" ?
				{
					url: u
				} : typeof u == "object" ?
				{
					url: u.url || u.openUrl || u ["open-url"]
				} : void 0);
				$notification.post (e, t, n, i (r))
			}
		},
		Ne = class extends Be
		{
			constructor (e, t)
			{
				super (e, t)
			}
			getVal (e)
			{
				return $prefs.valueForKey (e)?.replace (/\0/g, "")
			}
			setVal (e, t)
			{
				$prefs.setValueForKey (e, t)
			}
			msg (e = this.name, t = "", n ="", r)
			{
				let i = u =>
				{
					if (!u) return u;
					if (typeof u == "string") return {
						"open-url": u
					};
					if (typeof u == "object")
					{
						let s = u ["open-url"] || u.url || u.openUrl,
							o = u ["media-url"] || u.mediaUrl,
							a = u ["update-pasteboard"] || u.updatePasteboard;
						return {
							"open-url": s,
							"media-url": o,
							"update-pasteboard": a
						}
					}
					else return
				};
				$notify (e, t, n, i (r))
			}
		},
		xe = class extends oe
		{
			msg (e = this.name, t = "", n ="", r)
			{
				let i = u =>
				{
					if (!u || typeof u == "string") return u;
					if (typeof u == "object")
					{
						let s = u.openUrl || u.url || u ["open-url"],
							o = u.mediaUrl || u ["media-url"];
						return {
							openUrl: s,
							mediaUrl: o
						}
					}
					else return
				};
				$notification.post (e, t, n, i (r))
			}
		};

	function qi (l, e)
	{
		return typeof $task < "u" ? new Ne (l, e) : typeof $loon < "u" ? new xe (l, e) : new oe (l, e)
	}
	var L = qi ("YouTube",
	{
		debug: !1
	});
	var A = class
	{
		constructor (e)
		{
			this.decoder = new TextDecoder ("utf-8",
			{
				fatal: !1,
				ignoreBOM: !0
			});
			L.log (e), Object.assign (this, L.getJSON ("YouTubeAdvertiseInfo",
			{
				whiteNo: [],
				blackNo: [],
				whiteEml: [],
				blackEml: ["cell_divider.eml"]
			}))
		}
		save ()
		{
			if (this.needSave)
			{
				L.log ("Update Config");
				let e = {
					whiteNo: this.whiteNo,
					blackNo: this.blackNo,
					whiteEml: this.whiteEml,
					blackEml: this.blackEml
				};
				L.setJSON (e, "YouTubeAdvertiseInfo")
			}
		}
		done (e, t)
		{
			this.save (), this.needProcess && (t = this.toBinary ()), e.headers ["Content-Encoding"] = "identity", e.headers ["Content-Length"] = t.length.toString (), L.done (
			{
				response:
				{
					...e,
					body: t
				}
			})
		}
		iterate (e = {}, t, n, r)
		{
			let i = [];
			for (i.push (e); i.length;)
			{
				let u = i.pop (),
					s = Object.keys (u);
				for (; s.length;)
				{
					let o = s.pop ();
					o === t ? n (u, i) : typeof u [o] == "object" && (i.push (u [o]), typeof r == "function" && r (u, i))
				}
			}
		}
		isAdvertise (e)
		{
			let t = c.list (e)[0],
				n = t ? this.handleFieldNo (t) : this.handleFieldEml (e);
			return n && (this.needProcess = !0), n
		}
		isUpload (e)
		{
			let t = e?.g4F318370163;
			return t && (this.needProcess = !0), t
		}
		handleFieldNo (e)
		{
			let t = e.no;
			if (this.whiteNo.includes (t)) return !1;
			if (this.blackNo.includes (t)) return !0;
			let r = this.decoder.decode (e.data).includes ("pagead");
			return r ? this.blackNo.push (t) : this.whiteNo.push (t), this.needSave = !0, r
		}
		handleFieldEml (e)
		{
			let t = !1,
				n = !0,
				r = "";
			return this.iterate (e, "type", (i, u) =>
			{
				r = i.type.split ("|")[0], this.whiteEml.includes (r) ? t = !1 : this.blackEml.includes (r) || /shorts (?!_pivot_item)/.test (r) ? t = !0 : n = !1, n && (u.length = 0)
			}), n || (this.iterate (e, "type", () =>
			{}, (i, u) =>
			{
				let s = c.list (i);
				for (let o of s)
					if (o.data.length > 1e3 && (t = this.decoder.decode (o.data).includes ("pagead"), t))
					{
						u.length = 0;
						break
					}
			}), t ? this.blackEml.push (r) : this.whiteEml.push (r), this.needSave = !0), t
		}
	};
	var ie = class extends A
		{
			constructor (e = "Browse")
			{
				super (e)
			}
			fromBinary (e)
			{
				return this.message = ti.fromBinary (e), this
			}
			pure ()
			{
				return this.iterate (this.message, "n5F1", e =>
				{
					for (let t = e.n5F1?.length - 1; t >= 0; t--) this.isAdvertise (e.n5F1 [t]) && e.n5F1.splice (t, 1)
				}), this
			}
			toBinary ()
			{
				return ti.toBinary (this.message)
			}
		},
		Te = class extends ie
		{
			constructor (e = "Next")
			{
				super (e)
			}
			fromBinary (e)
			{
				return this.message = ni.fromBinary (e), this
			}
			toBinary ()
			{
				return ni.toBinary (this.message)
			}
		},
		Re = class extends A
		{
			constructor (e = "Player")
			{
				super (e)
			}
			fromBinary (e)
			{
				return this.message = si.fromBinary (e), this
			}
			pure ()
			{
				this.message.p1F7?.length && (this.message.p1F7.length = 0);
				let e = this.message?.p1F2?.p2F21?.p3F151635310;
				typeof e == "object" && (e.pip = 1);
				let t = {
					p2F11:
					{
						p3F64657230:
						{
							backPlay: 1
						}
					}
				};
				return typeof this.message?.p1F2 == "object" && Object.assign (this.message.p1F2, t), this.iterate (this.message, "captionTracks", (n, r) =>
				{
					let i = n.captionTracks;
					if (Array.isArray (i))
						for (let u of i) u.isTranslatable = !0;
					n.translationLanguages = [
					{
						languageCode: "sq",
						languageName:
						{
							runs: [
							{
								text: "阿尔巴尼亚语"
							}]
						}
					},
					{
						languageCode: "ak",
						languageName:
						{
							runs: [
							{
								text: "阿肯语"
							}]
						}
					},
					{
						languageCode: "ar",
						languageName:
						{
							runs: [
							{
								text: "阿拉伯语"
							}]
						}
					},
					{
						languageCode: "am",
						languageName:
						{
							runs: [
							{
								text: "阿姆哈拉语"
							}]
						}
					},
					{
						languageCode: "as",
						languageName:
						{
							runs: [
							{
								text: "阿萨姆语"
							}]
						}
					},
					{
						languageCode: "az",
						languageName:
						{
							runs: [
							{
								text: "阿塞拜疆语"
							}]
						}
					},
					{
						languageCode: "ee",
						languageName:
						{
							runs: [
							{
								text: "埃维语"
							}]
						}
					},
					{
						languageCode: "ay",
						languageName:
						{
							runs: [
							{
								text: "艾马拉语"
							}]
						}
					},
					{
						languageCode: "ga",
						languageName:
						{
							runs: [
							{
								text: "爱尔兰语"
							}]
						}
					},
					{
						languageCode: "et",
						languageName:
						{
							runs: [
							{
								text: "爱沙尼亚语"
							}]
						}
					},
					{
						languageCode: "or",
						languageName:
						{
							runs: [
							{
								text: "奥里亚语"
							}]
						}
					},
					{
						languageCode: "om",
						languageName:
						{
							runs: [
							{
								text: "奥罗莫语"
							}]
						}
					},
					{
						languageCode: "eu",
						languageName:
						{
							runs: [
							{
								text: "巴斯克语"
							}]
						}
					},
					{
						languageCode: "be",
						languageName:
						{
							runs: [
							{
								text: "白俄罗斯语"
							}]
						}
					},
					{
						languageCode: "bg",
						languageName:
						{
							runs: [
							{
								text: "保加利亚语"
							}]
						}
					},
					{
						languageCode: "nso",
						languageName:
						{
							runs: [
							{
								text: "北索托语"
							}]
						}
					},
					{
						languageCode: "is",
						languageName:
						{
							runs: [
							{
								text: "冰岛语"
							}]
						}
					},
					{
						languageCode: "pl",
						languageName:
						{
							runs: [
							{
								text: "波兰语"
							}]
						}
					},
					{
						languageCode: "bs",
						languageName:
						{
							runs: [
							{
								text: "波斯尼亚语"
							}]
						}
					},
					{
						languageCode: "fa",
						languageName:
						{
							runs: [
							{
								text: "波斯语"
							}]
						}
					},
					{
						languageCode: "bho",
						languageName:
						{
							runs: [
							{
								text: "博杰普尔语"
							}]
						}
					},
					{
						languageCode: "ts",
						languageName:
						{
							runs: [
							{
								text: "聪加语"
							}]
						}
					},
					{
						languageCode: "tt",
						languageName:
						{
							runs: [
							{
								text: "鞑靼语"
							}]
						}
					},
					{
						languageCode: "da",
						languageName:
						{
							runs: [
							{
								text: "丹麦语"
							}]
						}
					},
					{
						languageCode: "de",
						languageName:
						{
							runs: [
							{
								text: "德语"
							}]
						}
					},
					{
						languageCode: "dv",
						languageName:
						{
							runs: [
							{
								text: "迪维希语"
							}]
						}
					},
					{
						languageCode: "ru",
						languageName:
						{
							runs: [
							{
								text: "俄语"
							}]
						}
					},
					{
						languageCode: "fr",
						languageName:
						{
							runs: [
							{
								text: "法语"
							}]
						}
					},
					{
						languageCode: "sa",
						languageName:
						{
							runs: [
							{
								text: "梵语"
							}]
						}
					},
					{
						languageCode: "fil",
						languageName:
						{
							runs: [
							{
								text: "菲律宾语"
							}]
						}
					},
					{
						languageCode: "fi",
						languageName:
						{
							runs: [
							{
								text: "芬兰语"
							}]
						}
					},
					{
						languageCode: "km",
						languageName:
						{
							runs: [
							{
								text: "高棉语"
							}]
						}
					},
					{
						languageCode: "ka",
						languageName:
						{
							runs: [
							{
								text: "格鲁吉亚语"
							}]
						}
					},
					{
						languageCode: "gu",
						languageName:
						{
							runs: [
							{
								text: "古吉拉特语"
							}]
						}
					},
					{
						languageCode: "gn",
						languageName:
						{
							runs: [
							{
								text: "瓜拉尼语"
							}]
						}
					},
					{
						languageCode: "kk",
						languageName:
						{
							runs: [
							{
								text: "哈萨克语"
							}]
						}
					},
					{
						languageCode: "ht",
						languageName:
						{
							runs: [
							{
								text: "海地克里奥尔语"
							}]
						}
					},
					{
						languageCode: "ko",
						languageName:
						{
							runs: [
							{
								text: "韩语"
							}]
						}
					},
					{
						languageCode: "ha",
						languageName:
						{
							runs: [
							{
								text: "豪萨语"
							}]
						}
					},
					{
						languageCode: "nl",
						languageName:
						{
							runs: [
							{
								text: "荷兰语"
							}]
						}
					},
					{
						languageCode: "gl",
						languageName:
						{
							runs: [
							{
								text: "加利西亚语"
							}]
						}
					},
					{
						languageCode: "ca",
						languageName:
						{
							runs: [
							{
								text: "加泰罗尼亚语"
							}]
						}
					},
					{
						languageCode: "cs",
						languageName:
						{
							runs: [
							{
								text: "捷克语"
							}]
						}
					},
					{
						languageCode: "kn",
						languageName:
						{
							runs: [
							{
								text: "卡纳达语"
							}]
						}
					},
					{
						languageCode: "ky",
						languageName:
						{
							runs: [
							{
								text: "柯尔克孜语"
							}]
						}
					},
					{
						languageCode: "xh",
						languageName:
						{
							runs: [
							{
								text: "科萨语"
							}]
						}
					},
					{
						languageCode: "co",
						languageName:
						{
							runs: [
							{
								text: "科西嘉语"
							}]
						}
					},
					{
						languageCode: "hr",
						languageName:
						{
							runs: [
							{
								text: "克罗地亚语"
							}]
						}
					},
					{
						languageCode: "qu",
						languageName:
						{
							runs: [
							{
								text: "克丘亚语"
							}]
						}
					},
					{
						languageCode: "ku",
						languageName:
						{
							runs: [
							{
								text: "库尔德语"
							}]
						}
					},
					{
						languageCode: "la",
						languageName:
						{
							runs: [
							{
								text: "拉丁语"
							}]
						}
					},
					{
						languageCode: "lv",
						languageName:
						{
							runs: [
							{
								text: "拉脱维亚语"
							}]
						}
					},
					{
						languageCode: "lo",
						languageName:
						{
							runs: [
							{
								text: "老挝语"
							}]
						}
					},
					{
						languageCode: "lt",
						languageName:
						{
							runs: [
							{
								text: "立陶宛语"
							}]
						}
					},
					{
						languageCode: "ln",
						languageName:
						{
							runs: [
							{
								text: "林加拉语"
							}]
						}
					},
					{
						languageCode: "lg",
						languageName:
						{
							runs: [
							{
								text: "卢干达语"
							}]
						}
					},
					{
						languageCode: "lb",
						languageName:
						{
							runs: [
							{
								text: "卢森堡语"
							}]
						}
					},
					{
						languageCode: "rw",
						languageName:
						{
							runs: [
							{
								text: "卢旺达语"
							}]
						}
					},
					{
						languageCode: "ro",
						languageName:
						{
							runs: [
							{
								text: "罗马尼亚语"
							}]
						}
					},
					{
						languageCode: "mt",
						languageName:
						{
							runs: [
							{
								text: "马耳他语"
							}]
						}
					},
					{
						languageCode: "mr",
						languageName:
						{
							runs: [
							{
								text: "马拉地语"
							}]
						}
					},
					{
						languageCode: "mg",
						languageName:
						{
							runs: [
							{
								text: "马拉加斯语"
							}]
						}
					},
					{
						languageCode: "ml",
						languageName:
						{
							runs: [
							{
								text: "马拉雅拉姆语"
							}]
						}
					},
					{
						languageCode: "ms",
						languageName:
						{
							runs: [
							{
								text: "马来语"
							}]
						}
					},
					{
						languageCode: "mk",
						languageName:
						{
							runs: [
							{
								text: "马其顿语"
							}]
						}
					},
					{
						languageCode: "mi",
						languageName:
						{
							runs: [
							{
								text: "毛利语"
							}]
						}
					},
					{
						languageCode: "mn",
						languageName:
						{
							runs: [
							{
								text: "蒙古语"
							}]
						}
					},
					{
						languageCode: "bn",
						languageName:
						{
							runs: [
							{
								text: "孟加拉语"
							}]
						}
					},
					{
						languageCode: "my",
						languageName:
						{
							runs: [
							{
								text: "缅甸语"
							}]
						}
					},
					{
						languageCode: "hmn",
						languageName:
						{
							runs: [
							{
								text: "苗语"
							}]
						}
					},
					{
						languageCode: "af",
						languageName:
						{
							runs: [
							{
								text: "南非荷兰语"
							}]
						}
					},
					{
						languageCode: "st",
						languageName:
						{
							runs: [
							{
								text: "南索托语"
							}]
						}
					},
					{
						languageCode: "ne",
						languageName:
						{
							runs: [
							{
								text: "尼泊尔语"
							}]
						}
					},
					{
						languageCode: "no",
						languageName:
						{
							runs: [
							{
								text: "挪威语"
							}]
						}
					},
					{
						languageCode: "pa",
						languageName:
						{
							runs: [
							{
								text: "旁遮普语"
							}]
						}
					},
					{
						languageCode: "pt",
						languageName:
						{
							runs: [
							{
								text: "葡萄牙语"
							}]
						}
					},
					{
						languageCode: "ps",
						languageName:
						{
							runs: [
							{
								text: "普什图语"
							}]
						}
					},
					{
						languageCode: "ny",
						languageName:
						{
							runs: [
							{
								text: "齐切瓦语"
							}]
						}
					},
					{
						languageCode: "ja",
						languageName:
						{
							runs: [
							{
								text: "日语"
							}]
						}
					},
					{
						languageCode: "sv",
						languageName:
						{
							runs: [
							{
								text: "瑞典语"
							}]
						}
					},
					{
						languageCode: "sm",
						languageName:
						{
							runs: [
							{
								text: "萨摩亚语"
							}]
						}
					},
					{
						languageCode: "sr",
						languageName:
						{
							runs: [
							{
								text: "塞尔维亚语"
							}]
						}
					},
					{
						languageCode: "si",
						languageName:
						{
							runs: [
							{
								text: "僧伽罗语"
							}]
						}
					},
					{
						languageCode: "sn",
						languageName:
						{
							runs: [
							{
								text: "绍纳语"
							}]
						}
					},
					{
						languageCode: "eo",
						languageName:
						{
							runs: [
							{
								text: "世界语"
							}]
						}
					},
					{
						languageCode: "sk",
						languageName:
						{
							runs: [
							{
								text: "斯洛伐克语"
							}]
						}
					},
					{
						languageCode: "sl",
						languageName:
						{
							runs: [
							{
								text: "斯洛文尼亚语"
							}]
						}
					},
					{
						languageCode: "sw",
						languageName:
						{
							runs: [
							{
								text: "斯瓦希里语"
							}]
						}
					},
					{
						languageCode: "gd",
						languageName:
						{
							runs: [
							{
								text: "苏格兰盖尔语"
							}]
						}
					},
					{
						languageCode: "ceb",
						languageName:
						{
							runs: [
							{
								text: "宿务语"
							}]
						}
					},
					{
						languageCode: "so",
						languageName:
						{
							runs: [
							{
								text: "索马里语"
							}]
						}
					},
					{
						languageCode: "tg",
						languageName:
						{
							runs: [
							{
								text: "塔吉克语"
							}]
						}
					},
					{
						languageCode: "te",
						languageName:
						{
							runs: [
							{
								text: "泰卢固语"
							}]
						}
					},
					{
						languageCode: "ta",
						languageName:
						{
							runs: [
							{
								text: "泰米尔语"
							}]
						}
					},
					{
						languageCode: "th",
						languageName:
						{
							runs: [
							{
								text: "泰语"
							}]
						}
					},
					{
						languageCode: "ti",
						languageName:
						{
							runs: [
							{
								text: "提格利尼亚语"
							}]
						}
					},
					{
						languageCode: "tr",
						languageName:
						{
							runs: [
							{
								text: "土耳其语"
							}]
						}
					},
					{
						languageCode: "tk",
						languageName:
						{
							runs: [
							{
								text: "土库曼语"
							}]
						}
					},
					{
						languageCode: "cy",
						languageName:
						{
							runs: [
							{
								text: "威尔士语"
							}]
						}
					},
					{
						languageCode: "ug",
						languageName:
						{
							runs: [
							{
								text: "维吾尔语"
							}]
						}
					},
					{
						languageCode: "und",
						languageName:
						{
							runs: [
							{
								text: "未知语言"
							}]
						}
					},
					{
						languageCode: "ur",
						languageName:
						{
							runs: [
							{
								text: "乌尔都语"
							}]
						}
					},
					{
						languageCode: "uk",
						languageName:
						{
							runs: [
							{
								text: "乌克兰语"
							}]
						}
					},
					{
						languageCode: "uz",
						languageName:
						{
							runs: [
							{
								text: "乌兹别克语"
							}]
						}
					},
					{
						languageCode: "es",
						languageName:
						{
							runs: [
							{
								text: "西班牙语"
							}]
						}
					},
					{
						languageCode: "fy",
						languageName:
						{
							runs: [
							{
								text: "西弗里西亚语"
							}]
						}
					},
					{
						languageCode: "iw",
						languageName:
						{
							runs: [
							{
								text: "希伯来语"
							}]
						}
					},
					{
						languageCode: "el",
						languageName:
						{
							runs: [
							{
								text: "希腊语"
							}]
						}
					},
					{
						languageCode: "haw",
						languageName:
						{
							runs: [
							{
								text: "夏威夷语"
							}]
						}
					},
					{
						languageCode: "sd",
						languageName:
						{
							runs: [
							{
								text: "信德语"
							}]
						}
					},
					{
						languageCode: "hu",
						languageName:
						{
							runs: [
							{
								text: "匈牙利语"
							}]
						}
					},
					{
						languageCode: "su",
						languageName:
						{
							runs: [
							{
								text: "巽他语"
							}]
						}
					},
					{
						languageCode: "hy",
						languageName:
						{
							runs: [
							{
								text: "亚美尼亚语"
							}]
						}
					},
					{
						languageCode: "ig",
						languageName:
						{
							runs: [
							{
								text: "伊博语"
							}]
						}
					},
					{
						languageCode: "it",
						languageName:
						{
							runs: [
							{
								text: "意大利语"
							}]
						}
					},
					{
						languageCode: "yi",
						languageName:
						{
							runs: [
							{
								text: "意第绪语"
							}]
						}
					},
					{
						languageCode: "hi",
						languageName:
						{
							runs: [
							{
								text: "印地语"
							}]
						}
					},
					{
						languageCode: "id",
						languageName:
						{
							runs: [
							{
								text: "印度尼西亚语"
							}]
						}
					},
					{
						languageCode: "en",
						languageName:
						{
							runs: [
							{
								text: "英语"
							}]
						}
					},
					{
						languageCode: "yo",
						languageName:
						{
							runs: [
							{
								text: "约鲁巴语"
							}]
						}
					},
					{
						languageCode: "vi",
						languageName:
						{
							runs: [
							{
								text: "越南语"
							}]
						}
					},
					{
						languageCode: "jv",
						languageName:
						{
							runs: [
							{
								text: "爪哇语"
							}]
						}
					},
					{
						languageCode: "zh-Hant",
						languageName:
						{
							runs: [
							{
								text: "中文（繁体）"
							}]
						}
					},
					{
						languageCode: "zh-Hans",
						languageName:
						{
							runs: [
							{
								text: "中文（简体）"
							}]
						}
					},
					{
						languageCode: "zu",
						languageName:
						{
							runs: [
							{
								text: "祖鲁语"
							}]
						}
					},
					{
						languageCode: "kri",
						languageName:
						{
							runs: [
							{
								text: "Kri"
							}]
						}
					}], n?.defaultCaptionTrackIndex || (n.defaultCaptionTrackIndex = 0), r.length = 0
				}), this.needProcess = !0, this
			}
			toBinary ()
			{
				return si.toBinary (this.message)
			}
		},
		Ie = class extends ie
		{
			constructor (e = "Search")
			{
				super (e)
			}
			fromBinary (e)
			{
				return this.message = ii.fromBinary (e), this
			}
			toBinary ()
			{
				return ii.toBinary (this.message)
			}
		},
		We = class extends A
		{
			constructor (e = "Shorts")
			{
				super (e)
			}
			fromBinary (e)
			{
				return this.message = ri.fromBinary (e), this
			}
			pure ()
			{
				let e = this.message.t1F2?.length;
				if (e)
					for (let t = e - 1; t >= 0; t--) this.message.t1F2 [t].n2F1?.n3F139608561?.n4F8 || (this.message.t1F2.splice (t, 1), this.needProcess = !0);
				return this
			}
			toBinary ()
			{
				return ri.toBinary (this.message)
			}
		},
		Oe = class extends A
		{
			constructor (e = "Guide")
			{
				super (e)
			}
			fromBinary (e)
			{
				return this.message = ai.fromBinary (e), this
			}
			pure ()
			{
				return this.iterate (this.message, "g3F1", e =>
				{
					for (let t = e.g3F1.length - 1; t >= 0; t--) this.isUpload (e.g3F1 [t]) && e.g3F1.splice (t, 1)
				}), this
			}
			toBinary ()
			{
				return ai.toBinary (this.message)
			}
		},
		Ue = class extends A
		{
			constructor (e = "Setting")
			{
				super (e)
			}
			fromBinary (e)
			{
				return this.message = oi.fromBinary (e), this
			}
			pure ()
			{
				this.iterate (this.message, "num", t =>
				{
					if (t.num === 10005)
					{
						let n = {
								f1: 135,
								f2: 20434,
								f3: 2,
								st2F4: this.message.st1F10.st2F4
							},
							r = {
								st4F61331416:
								{
									f15: 0,
									st5F5:
									{
										st3F5: n,
										st6F81212182:
										{
											st7F1:
											{
												st8F1:
												{
													f1: 151
												},
												f3: 1
											}
										}
									},
									st5F6:
									{
										st3F5: n,
										st6F81212182:
										{
											st7F1:
											{
												st8F1:
												{
													f1: 151
												},
												f3: 0
											}
										}
									},
									st3F5: n
								}
							};
						t.st3F3.push (r)
					}
				});
				let e = {
					st2F88478200:
					{
						f2: 1,
						f3: 1,
						st3F5:
						{
							f1: 2,
							f2: 20020,
							f3: 8,
							st2F4: this.message.st1F10.st2F4
						},
						f6: 0,
						f7: 1,
						f8: 1,
						f9: 1,
						f10: 1,
						f12: 1
					}
				};
				return this.message.st1F6.push (JSON.parse (JSON.stringify (e))), e.st2F88478200.st3F5.f1 = 1, e.st2F88478200.st3F5.f3 = 9, this.message.st1F7 = e, this.needProcess = !0, this
			}
			toBinary ()
			{
				return oi.toBinary (this.message)
			}
		};
	var Yi = new Map ([
		["browse", ie],
		["next", Te],
		["player", Re],
		["search", Ie],
		["reel_watch_sequence", We],
		["guide", Oe],
		["get_setting", Ue]
	]);

	function li (l)
	{
		for (let [e, t] of Yi.entries ())
			if (l.includes (e)) return new t;
		return null
	}
	var di = class extends y
		{
			constructor ()
			{
				super ("Request", [
				{
					no: 1,
					name: "context",
					kind: "message",
					T: () => ui
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.context = ui.internalBinaryRead (e, e.uint32 (), n, i.context);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.context && ui.internalBinaryWrite (e.context, t.tag (1, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		yi = new di,
		hi = class extends y
		{
			constructor ()
			{
				super ("Context", [
				{
					no: 9,
					name: "adSignalsInfo",
					kind: "message",
					T: () => fi
				}])
			}
			create (e)
			{
				let t = {};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 9:
						i.adSignalsInfo = fi.internalBinaryRead (e, e.uint32 (), n, i.adSignalsInfo);
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.adSignalsInfo && fi.internalBinaryWrite (e.adSignalsInfo, t.tag (9, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		ui = new hi,
		pi = class extends y
		{
			constructor ()
			{
				super ("AdSignalsInfo", [
				{
					no: 1,
					name: "params",
					kind: "message",
					repeat: 1,
					T: () => ci
				}])
			}
			create (e)
			{
				let t = {
					params: []
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.params.push (ci.internalBinaryRead (e, e.uint32 (), n));
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				for (let i = 0; i < e.params.length; i++) ci.internalBinaryWrite (e.params [i], t.tag (1, d.LengthDelimited).fork (), n).join ();
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		fi = new pi,
		gi = class extends y
		{
			constructor ()
			{
				super ("Params", [
				{
					no: 1,
					name: "key",
					kind: "scalar",
					T: 9
				},
				{
					no: 2,
					name: "value",
					kind: "scalar",
					T: 9
				}])
			}
			create (e)
			{
				let t = {
					key: "",
					value: ""
				};
				return globalThis.Object.defineProperty (t, g,
				{
					enumerable: !1,
					value: this
				}), e !== void 0 && p (this, t, e), t
			}
			internalBinaryRead (e, t, n, r)
			{
				let i = r ?? this.create (),
					u = e.pos + t;
				for (; e.pos < u;)
				{
					let [s, o] = e.tag ();
					switch (s)
					{
					case 1:
						i.key = e.string ();
						break;
					case 2:
						i.value = e.string ();
						break;
					default:
						let a = n.readUnknownField;
						if (a === "throw") throw new globalThis.Error (`Unknown field ${s} (wire type ${o}) for ${this.typeName}`);
						let f = e.skip (o);
						a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, i, s, o, f)
					}
				}
				return i
			}
			internalBinaryWrite (e, t, n)
			{
				e.key !== ""&& t.tag (1, d.LengthDelimited).string (e.key), e.value !=="" && t.tag (2, d.LengthDelimited).string (e.value);
				let r = n.writeUnknownFields;
				return r !== !1 && (r == !0 ? c.onWrite : r)(this.typeName, e, t), t
			}
		},
		ci = new gi;
	var le = class extends A
	{
		constructor (e = "Request")
		{
			super (e)
		}
		fromBinary (e)
		{
			return this.message = yi.fromBinary (e), this
		}
		pure ()
		{
			return this.message.context.adSignalsInfo.params.length = 0, this.needProcess = !0, this
		}
		toBinary ()
		{
			return yi.toBinary (this.message)
		}
	};
	var Zi = l =>
		{
			let e = new le;
			return l.body = e.fromBinary (l.body).pure ().toBinary (), l
		},
		zi = (l, e, t) =>
		{
			l && L.done ();
			let n = li ($request.url);
			n ? n.fromBinary (t).pure ().done (e, t) : (L.msg ("YouTubeAds", "脚本需要更新", "外部资源 -> 全部更新"), L.done ())
		},
		_i = () =>
		// {
		// 	parseInt ($environment?.["surge-build"]) < 2700 && (L.msg ("YouTubeAds Beta", "不支持该 Surge 版本", "点击通知可跳转旧版脚本",
		// 	{
		// 		url: "https://raw.githubusercontent.com/Maasea/sgmodule/master/YoutubeAds.sgmodule"
		// 	}), L.done ())
		// },
		Ai = () =>
		{
			let l = Zi ($request);
			$httpClient.post (
			{
				...l,
				"binary-mode": !0
			}, zi)
		};
	var Qi = () =>
	{
		_i (), Ai ()
	};
	Qi ();
})();