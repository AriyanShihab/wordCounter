let inputTextArea = document.getElementById("input-textarea");
let inputTextArea2 = document.getElementById("input-textarea");
let characCount = document.getElementById("charac-count");
let spaceCount = document.getElementById("space-count");
let wordCount = document.getElementById("word-count");

let mainForm = document.getElementById(`mainForm`);

inputTextArea.addEventListener("input", () => {
    characCount.textContent = inputTextArea.value.length;

    let txt = inputTextArea.value.trim();
    wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
    spaceCount.textContent = txt.split(" ").length - 1;
});

// function for upper case.

const upper = document.getElementById(`upperCase`);
upper.addEventListener(`click`, () => {
    if (inputTextArea.value.length == 0) {
        alert(`before you transform to uppercase you maut have provide some text`);
    }
    let temp = inputTextArea.value.toUpperCase();
    inputTextArea.value = temp;
});

//function for lowercase

const lower = document.getElementById(`lowerCase`);
lower.addEventListener(`click`, () => {
    if (inputTextArea.value.length == 0) {
        alert(`before you transform to lowerCase you maut have provide some text`);
    }
    let temp = inputTextArea.value.toLowerCase();
    inputTextArea.value = temp;
});

//function for capitalise

const capitalise = document.getElementById(`capitalise`);
capitalise.addEventListener(`click`, () => {
    if (inputTextArea.value.length == 0) {
        alert(`before you transform to capitalise you maut have provide some text`);
    }
    let temp = inputTextArea.value;

    inputTextArea.value = temp
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(` `);
});

const letters = [
    `a`,
    `b`,
    `c`,
    `d`,
    `e`,
    `f`,
    `g`,
    `h`,
    `i`,
    `j`,
    `k`,
    `l`,
    `m`,
    `n`,
    `o`,
    `p`,
    `q`,
    `r`,
    `s`,
    `t`,
    `u`,
    `v`,
    `w`,
    `x`,
    `y`,
    `z`,
];

// ========>>>>>find the ocarence of an letter  in user given value;

function numberOfOccurrence(str, leter) {
    let length = str.length;
    let count = 0;
    for (let i = 0; i < length; i++) {
        if (str.charAt(i) == leter) {
            count += 1;
        }
    }
    return count;
}
let inputValue = inputTextArea.value;

// anylatics part ====================................

function getID(elmnt) {
    return document.getElementById(elmnt);
}
const anyl = document.getElementById(`anyl`);
const a = getID(`a`);
const b = getID(`b`);
const c = getID(`c`);
const d = getID(`d`);
const e = getID(`e`);
const f = getID(`f`);
const g = getID(`g`);
const h = getID(`h`);
const i1 = getID(`i`);
const j = getID(`j`);
const k = getID(`k`);
const l = getID(`l`);
const m = getID(`m`);
const n = getID(`n`);
const o = getID(`o`);
const p = getID(`p`);
const q = getID(`q`);
const r = getID(`r`);
const s = getID(`s`);
const t = getID(`t`);
const u = getID(`u`);
const v = getID(`v`);
const w = getID(`w`);
const x = getID(`x`);
const y = getID(`y`);
const z = getID(`z`);

let dt = document.getElementById(`dt`);
dt.style.transform = `scale(0)`;

anyl.addEventListener(`click`, () => {
    let arr = inputTextArea.value.toLowerCase().split(``);
    result = {};
    for (var i = 0; i < arr.length; ++i) {
        if (!result[arr[i]]) result[arr[i]] = 0;
        ++result[arr[i]];
    }

    // function printresult(objProperty, elementID, preInnerTExt) {}
    result.a ? (a.innerText = ` a: ${result.a}`) : (a.innerText = `a: 0`);
    result.b ? (b.innerText = ` b: ${result.b}`) : (b.innerText = `b: 0`);
    result.c ? (c.innerText = ` c: ${result.c}`) : (c.innerText = `c: 0`);
    result.d ? (d.innerText = ` d: ${result.d}`) : (d.innerText = `d: 0`);
    result.e ? (e.innerText = ` e: ${result.e}`) : (e.innerText = `e: 0`);
    result.f ? (f.innerText = ` f: ${result.f}`) : (f.innerText = `f: 0`);
    result.g ? (g.innerText = ` g: ${result.g}`) : (g.innerText = `g: 0`);
    result.h ? (h.innerText = ` h: ${result.h}`) : (h.innerText = `h: 0`);
    result.i ? (i1.innerText = ` i: ${result.i}`) : (i1.innerText = `i: 0`);
    result.j ? (j.innerText = ` j: ${result.j}`) : (g.innerText = `j: 0`);
    result.k ? (k.innerText = ` k: ${result.k}`) : (k.innerText = `k: 0`);
    result.l ? (l.innerText = ` l: ${result.l}`) : (l.innerText = `l: 0`);
    result.m ? (m.innerText = ` m: ${result.m}`) : (m.innerText = `m: 0`);
    result.n ? (n.innerText = ` n: ${result.n}`) : (n.innerText = `n: 0`);
    result.o ? (o.innerText = ` o: ${result.o}`) : (o.innerText = `o: 0`);
    result.p ? (p.innerText = ` p: ${result.p}`) : (p.innerText = `p: 0`);
    result.q ? (q.innerText = ` q: ${result.q}`) : (q.innerText = `q: 0`);
    result.r ? (r.innerText = ` r: ${result.r}`) : (r.innerText = `r: 0`);
    result.s ? (s.innerText = ` s: ${result.s}`) : (s.innerText = `s: 0`);
    result.t ? (t.innerText = ` t: ${result.t}`) : (t.innerText = `t: 0`);
    result.u ? (u.innerText = ` u: ${result.u}`) : (u.innerText = `u: 0`);
    result.v ? (v.innerText = ` v: ${result.v}`) : (v.innerText = `v: 0`);
    result.w ? (w.innerText = ` w: ${result.w}`) : (w.innerText = `w: 0`);
    result.x ? (x.innerText = ` x: ${result.x}`) : (x.innerText = `x: 0`);
    result.y ? (y.innerText = ` y: ${result.y}`) : (y.innerText = `y: 0`);
    result.z ? (z.innerText = ` z: ${result.z}`) : (z.innerText = `z: 0`);
    dt.style.transform = `scale(1)`;

    function seWidth(element, objProperty) {
        let test = (objProperty / inputTextArea.value.length) * 100 * 10;
        let n = Number(test);
        let add = n + 0;
        element.style.width = `${add}%`;
        console.log(add);

        if (add < 15 || isNaN(add)) {
            element.style.width = `24%`;
        }
    }

    seWidth(a, result[`a`]);
    seWidth(b, result[`b`]);
    seWidth(c, result[`c`]);
    seWidth(d, result[`d`]);
    seWidth(e, result[`e`]);
    seWidth(f, result[`f`]);
    seWidth(g, result[`g`]);
    seWidth(i1, result[`i`]);
    seWidth(j, result[`j`]);
    seWidth(k, result[`k`]);
    seWidth(l, result[`l`]);
    seWidth(m, result[`m`]);
    seWidth(n, result[`n`]);
    seWidth(n, result[`n`]);
    seWidth(o, result[`o`]);
    seWidth(p, result[`p`]);
    seWidth(q, result[`q`]);
    seWidth(q, result[`q`]);
    seWidth(r, result[`r`]);
    seWidth(s, result[`s`]);
    seWidth(t, result[`t`]);
    seWidth(u, result[`u`]);
    seWidth(v, result[`v`]);
    seWidth(w, result[`w`]);
    seWidth(x, result[`x`]);
    seWidth(y, result[`y`]);
    seWidth(z, result[`z`]);
    let minwidth1 = document.getElementsByClassName(`info`);
    console.log(minwidth1[2]);
    minwidth1.style.minWidth = `50px`;
});