var _this = this;

this.axiosFetch(this.formData).then(res => {
    _this.loading = false;
    _this.handleClose();
});

this.axiosFetch(this.formData).then(res => {
    _this.loading = false;
    _this.handleClose();
}).catch(e => {
    console.log(e);
});
//# sourceMappingURL=use-promise-catch-plugin.js.map