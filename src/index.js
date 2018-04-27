class MultipleUploader {
    constructor(options) {
        this.opts = options
        this.input = document.getElementById(this.opts.el)
        this.init()
    }

    init () {
        let _this = this
        this.input.addEventListener('change', this.inputChangeHandle, false);
    }

    inputChangeHandle (event) {
        console.log(Array.prototype.slice.call(event.target.files));
    }
}

export default MultipleUploader
