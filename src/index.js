class MultipleUploader {
    constructor (options) {
        let defaultOpts = {
            el: null
        }
        this.opts = Object.assign({}, defaultOpts, options)
        this.input = document.getElementById(this.opts.el)
        this.init()
    }

    init () {
        let _this = this
        this.input.addEventListener('change', this.inputChangeHandle.bind(this), false);
    }

    inputChangeHandle (event) {
        var _this = this
        console.log(_this);
        // console.log(Array.prototype.slice.call(event.target.files));
        _this.readFiles(event.target.files)
    }

    readFiles (files) {
        console.log(123);
        let fd = new FormData()
        if (files.length > 0) {
            for (var i = 0; i < files.length; i++) {
                fd.append('files', files[i])
            }
            let xhr = new XMLHttpRequest()
            xhr.open('POST', 'http://localhost:3000/image-upload')
            xhr.onreadystatechange = function(){
                if (xhr.readyState== 4&& xhr.status== 200){
                    console.log('上传成功'+xhr.responseText);
                }
            };
            xhr.send(fd)
        }
    }
}

export default MultipleUploader
