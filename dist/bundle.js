(() => {
    "use strict";
    var e;
    ! function () {
        Promise.resolve("1").then((e => {
            this.loading = !1, this.handleClose()
        })).catch((() => {
            this.loading = !1
        })), Promise.resolve("1").then((e => {
            this.loading = !1, this.handleClose()
        })).catch((e => {
            console.log(e)
        }))
    }(), e = function* () {
        yield new Promise(((e, o) => {
            setTimeout((() => {
                console.log("2000"), e("2000")
            }), 2e3)
        })), yield new Promise(((e, o) => {
            setTimeout((() => {
                console.log("5000"), e("5000")
            }), 5e3)
        }))
    }, new Promise(((o, t) => {
        const n = e();
        console.log(n, typeof n);
        const s = e => {
            let i;
            try {
                i = e()
            } catch (e) {
                return t(e)
            }
            if (i.done) return o(i.value);
            Promise.resolve(i.value).then((e => {
                s((() => n.next(e)))
            })).catch((e => {
                s((() => n.throw(e)))
            }))
        };
        s((() => n.next(void 0)))
    }))
})();