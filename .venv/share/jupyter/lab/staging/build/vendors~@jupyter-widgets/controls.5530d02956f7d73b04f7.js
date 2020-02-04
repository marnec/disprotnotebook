(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~@jupyter-widgets/controls"],{

/***/ "+RhG":
/*!*******************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_bool.js ***!
  \*******************************************************************/
/*! exports provided: BoolModel, CheckboxModel, CheckboxView, ToggleButtonModel, ToggleButtonView, ValidModel, ValidView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoolModel", function() { return BoolModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxModel", function() { return CheckboxModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxView", function() { return CheckboxView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonModel", function() { return ToggleButtonModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonView", function() { return ToggleButtonView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidModel", function() { return ValidModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidView", function() { return ValidView; });
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _widget_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_description */ "1OD8");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var BoolModel = /** @class */ (function (_super) {
    __extends(BoolModel, _super);
    function BoolModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoolModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            value: false,
            disabled: false,
            _model_name: 'BoolModel'
        });
    };
    return BoolModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDescriptionModel"]));

var CheckboxModel = /** @class */ (function (_super) {
    __extends(CheckboxModel, _super);
    function CheckboxModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            indent: true,
            _view_name: 'CheckboxView',
            _model_name: 'CheckboxModel'
        });
    };
    return CheckboxModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDescriptionModel"]));

var CheckboxView = /** @class */ (function (_super) {
    __extends(CheckboxView, _super);
    function CheckboxView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    CheckboxView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-checkbox');
        // adding a zero-width space to the label to help
        // the browser set the baseline correctly
        this.label.innerHTML = '&#8203;';
        // label containing the checkbox and description span
        this.checkboxLabel = document.createElement('label');
        this.checkboxLabel.classList.add('widget-label-basic');
        this.el.appendChild(this.checkboxLabel);
        // checkbox
        this.checkbox = document.createElement('input');
        this.checkbox.setAttribute('type', 'checkbox');
        this.checkboxLabel.appendChild(this.checkbox);
        // span to the right of the checkbox that will render the description
        this.descriptionSpan = document.createElement('span');
        this.checkboxLabel.appendChild(this.descriptionSpan);
        this.listenTo(this.model, 'change:indent', this.updateIndent);
        this.update(); // Set defaults.
        this.updateDescription();
        this.updateIndent();
    };
    /**
     * Overriden from super class
     *
     * Update the description span (rather than the label) since
     * we want the description to the right of the checkbox.
     */
    CheckboxView.prototype.updateDescription = function () {
        // can be called before the view is fully initialized
        if (this.checkboxLabel == null) {
            return;
        }
        var description = this.model.get('description');
        this.descriptionSpan.innerHTML = description;
        this.typeset(this.descriptionSpan);
        this.descriptionSpan.title = description;
        this.checkbox.title = description;
    };
    /**
     * Update the visibility of the label in the super class
     * to provide the optional indent.
     */
    CheckboxView.prototype.updateIndent = function () {
        var indent = this.model.get('indent');
        this.label.style.display = indent ? '' : 'none';
    };
    CheckboxView.prototype.events = function () {
        return {
            'click input[type="checkbox"]': '_handle_click'
        };
    };
    /**
     * Handles when the checkbox is clicked.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    CheckboxView.prototype._handle_click = function () {
        var value = this.model.get('value');
        this.model.set('value', !value, { updated_view: this });
        this.touch();
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed. The model may have been
     * changed by another view or by a state update from the back-end.
     */
    CheckboxView.prototype.update = function (options) {
        this.checkbox.checked = this.model.get('value');
        if (options === undefined || options.updated_view != this) {
            this.checkbox.disabled = this.model.get('disabled');
        }
        return _super.prototype.update.call(this);
    };
    return CheckboxView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var ToggleButtonModel = /** @class */ (function (_super) {
    __extends(ToggleButtonModel, _super);
    function ToggleButtonModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToggleButtonModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'ToggleButtonView',
            _model_name: 'ToggleButtonModel',
            tooltip: '',
            icon: '',
            button_style: ''
        });
    };
    return ToggleButtonModel;
}(BoolModel));

var ToggleButtonView = /** @class */ (function (_super) {
    __extends(ToggleButtonView, _super);
    function ToggleButtonView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    ToggleButtonView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('jupyter-button');
        this.el.classList.add('widget-toggle-button');
        this.listenTo(this.model, 'change:button_style', this.update_button_style);
        this.set_button_style();
        this.update(); // Set defaults.
    };
    ToggleButtonView.prototype.update_button_style = function () {
        this.update_mapped_classes(ToggleButtonView.class_map, 'button_style');
    };
    ToggleButtonView.prototype.set_button_style = function () {
        this.set_mapped_classes(ToggleButtonView.class_map, 'button_style');
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed. The model may have been
     * changed by another view or by a state update from the back-end.
     */
    ToggleButtonView.prototype.update = function (options) {
        if (this.model.get('value')) {
            this.el.classList.add('mod-active');
        }
        else {
            this.el.classList.remove('mod-active');
        }
        if (options === undefined || options.updated_view !== this) {
            this.el.disabled = this.model.get('disabled');
            this.el.setAttribute('title', this.model.get('tooltip'));
            var description = this.model.get('description');
            var icon = this.model.get('icon');
            if (description.trim().length === 0 && icon.trim().length === 0) {
                this.el.innerHTML = '&nbsp;'; // Preserve button height
            }
            else {
                this.el.textContent = '';
                if (icon.trim().length) {
                    var i = document.createElement('i');
                    this.el.appendChild(i);
                    i.classList.add('fa');
                    i.classList.add('fa-' + icon);
                }
                this.el.appendChild(document.createTextNode(description));
            }
        }
        return _super.prototype.update.call(this);
    };
    ToggleButtonView.prototype.events = function () {
        return {
            // Dictionary of events and their handlers.
            'click': '_handle_click'
        };
    };
    /**
     * Handles and validates user input.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    ToggleButtonView.prototype._handle_click = function (event) {
        event.preventDefault();
        var value = this.model.get('value');
        this.model.set('value', !value, { updated_view: this });
        this.touch();
    };
    Object.defineProperty(ToggleButtonView.prototype, "tagName", {
        /**
         * The default tag name.
         *
         * #### Notes
         * This is a read-only attribute.
         */
        get: function () {
            // We can't make this an attribute with a default value
            // since it would be set after it is needed in the
            // constructor.
            return 'button';
        },
        enumerable: true,
        configurable: true
    });
    ToggleButtonView.class_map = {
        primary: ['mod-primary'],
        success: ['mod-success'],
        info: ['mod-info'],
        warning: ['mod-warning'],
        danger: ['mod-danger']
    };
    return ToggleButtonView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_2__["DOMWidgetView"]));

var ValidModel = /** @class */ (function (_super) {
    __extends(ValidModel, _super);
    function ValidModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValidModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            readout: 'Invalid',
            _view_name: 'ValidView',
            _model_name: 'ValidModel'
        });
    };
    return ValidModel;
}(BoolModel));

var ValidView = /** @class */ (function (_super) {
    __extends(ValidView, _super);
    function ValidView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    ValidView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-valid');
        this.el.classList.add('widget-inline-hbox');
        var icon = document.createElement('i');
        this.el.appendChild(icon);
        this.readout = document.createElement('span');
        this.readout.classList.add('widget-valid-readout');
        this.readout.classList.add('widget-readout');
        this.el.appendChild(this.readout);
        this.update();
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    ValidView.prototype.update = function () {
        this.el.classList.remove('mod-valid');
        this.el.classList.remove('mod-invalid');
        this.readout.textContent = this.model.get('readout');
        if (this.model.get('value')) {
            this.el.classList.add('mod-valid');
        }
        else {
            this.el.classList.add('mod-invalid');
        }
    };
    return ValidView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));



/***/ }),

/***/ "01zH":
/*!*********************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_upload.js ***!
  \*********************************************************************/
/*! exports provided: FileUploadModel, FileUploadView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadModel", function() { return FileUploadModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadView", function() { return FileUploadView; });
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
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



var FileUploadModel = /** @class */ (function (_super) {
    __extends(FileUploadModel, _super);
    function FileUploadModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileUploadModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_2__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'FileUploadModel',
            _view_name: 'FileUploadView',
            _counter: 0,
            accept: '',
            description: 'Upload',
            tooltip: '',
            disabled: false,
            icon: 'upload',
            button_style: '',
            multiple: false,
            metadata: [],
            data: [],
            error: '',
            style: null
        });
    };
    FileUploadModel.serializers = __assign({}, _widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDOMWidgetModel"].serializers, { data: { serialize: function (buffers) { return buffers.slice(); } } });
    return FileUploadModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDOMWidgetModel"]));

var FileUploadView = /** @class */ (function (_super) {
    __extends(FileUploadView, _super);
    function FileUploadView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FileUploadView.prototype, "tagName", {
        get: function () {
            return 'button';
        },
        enumerable: true,
        configurable: true
    });
    FileUploadView.prototype.render = function () {
        var _this = this;
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-upload');
        this.el.classList.add('jupyter-button');
        this.fileInput = document.createElement('input');
        this.fileInput.type = 'file';
        this.fileInput.style.display = 'none';
        this.el.appendChild(this.fileInput);
        this.el.addEventListener('click', function () {
            _this.fileInput.click();
        });
        this.fileInput.addEventListener('click', function () {
            _this.fileInput.value = '';
        });
        this.fileInput.addEventListener('change', function () {
            var promisesFile = [];
            Array.from(_this.fileInput.files).forEach(function (file) {
                promisesFile.push(new Promise(function (resolve, reject) {
                    var metadata = {
                        name: file.name,
                        type: file.type,
                        size: file.size,
                        lastModified: file.lastModified,
                    };
                    _this.fileReader = new FileReader();
                    _this.fileReader.onload = function (event) {
                        var buffer = event.target.result;
                        resolve({
                            buffer: buffer,
                            metadata: metadata,
                            error: '',
                        });
                    };
                    _this.fileReader.onerror = function () {
                        reject();
                    };
                    _this.fileReader.onabort = _this.fileReader.onerror;
                    _this.fileReader.readAsArrayBuffer(file);
                }));
            });
            Promise.all(promisesFile)
                .then(function (contents) {
                var metadata = [];
                var li_buffer = [];
                contents.forEach(function (c) {
                    metadata.push(c.metadata);
                    li_buffer.push(c.buffer);
                });
                var counter = _this.model.get('_counter');
                _this.model.set({
                    _counter: counter + contents.length,
                    metadata: metadata,
                    data: li_buffer,
                    error: '',
                });
                _this.touch();
            })
                .catch(function (err) {
                console.error('error in file upload: %o', err);
                _this.model.set({
                    error: err,
                });
                _this.touch();
            });
        });
        this.listenTo(this.model, 'change:button_style', this.update_button_style);
        this.set_button_style();
        this.update(); // Set defaults.
    };
    FileUploadView.prototype.update = function () {
        this.el.disabled = this.model.get('disabled');
        this.el.setAttribute('title', this.model.get('tooltip'));
        var description = this.model.get('description') + " (" + this.model.get('_counter') + ")";
        var icon = this.model.get('icon');
        if (description.length || icon.length) {
            this.el.textContent = '';
            if (icon.length) {
                var i = document.createElement('i');
                i.classList.add('fa');
                i.classList.add('fa-' + icon);
                if (description.length === 0) {
                    i.classList.add('center');
                }
                this.el.appendChild(i);
            }
            this.el.appendChild(document.createTextNode(description));
        }
        this.fileInput.accept = this.model.get('accept');
        this.fileInput.multiple = this.model.get('multiple');
        return _super.prototype.update.call(this);
    };
    FileUploadView.prototype.update_button_style = function () {
        this.update_mapped_classes(FileUploadView.class_map, 'button_style', this.el);
    };
    FileUploadView.prototype.set_button_style = function () {
        this.set_mapped_classes(FileUploadView.class_map, 'button_style', this.el);
    };
    FileUploadView.class_map = {
        primary: ['mod-primary'],
        success: ['mod-success'],
        info: ['mod-info'],
        warning: ['mod-warning'],
        danger: ['mod-danger']
    };
    return FileUploadView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["DOMWidgetView"]));



/***/ }),

/***/ "0c3I":
/*!*******************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_core.js ***!
  \*******************************************************************/
/*! exports provided: CoreWidgetModel, CoreDOMWidgetModel, CoreDescriptionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreWidgetModel", function() { return CoreWidgetModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreDOMWidgetModel", function() { return CoreDOMWidgetModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreDescriptionModel", function() { return CoreDescriptionModel; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _widget_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_description */ "1OD8");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./version */ "VKie");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// widget_core implements some common patterns for the core widget collection
// that are not to be used directly by third-party widget authors.




var CoreWidgetModel = /** @class */ (function (_super) {
    __extends(CoreWidgetModel, _super);
    function CoreWidgetModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CoreWidgetModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'CoreWidgetModel',
            _view_module: '@jupyter-widgets/controls',
            _model_module: '@jupyter-widgets/controls',
            _view_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"],
            _model_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"],
        });
    };
    return CoreWidgetModel;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["WidgetModel"]));

var CoreDOMWidgetModel = /** @class */ (function (_super) {
    __extends(CoreDOMWidgetModel, _super);
    function CoreDOMWidgetModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CoreDOMWidgetModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'CoreDOMWidgetModel',
            _view_module: '@jupyter-widgets/controls',
            _model_module: '@jupyter-widgets/controls',
            _view_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"],
            _model_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"],
        });
    };
    return CoreDOMWidgetModel;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetModel"]));

var CoreDescriptionModel = /** @class */ (function (_super) {
    __extends(CoreDescriptionModel, _super);
    function CoreDescriptionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CoreDescriptionModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'CoreDescriptionModel',
            _view_module: '@jupyter-widgets/controls',
            _model_module: '@jupyter-widgets/controls',
            _view_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"],
            _model_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"],
        });
    };
    return CoreDescriptionModel;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionModel"]));



/***/ }),

/***/ "0pQw":
/*!*************************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_controller.js ***!
  \*************************************************************************/
/*! exports provided: ControllerButtonModel, ControllerButtonView, ControllerAxisModel, ControllerAxisView, ControllerModel, ControllerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerButtonModel", function() { return ControllerButtonModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerButtonView", function() { return ControllerButtonView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerAxisModel", function() { return ControllerAxisModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerAxisView", function() { return ControllerAxisView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerModel", function() { return ControllerModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerView", function() { return ControllerView; });
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @phosphor/widgets */ "pif5");
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @phosphor/algorithm */ "rqNV");
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
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







var ControllerButtonModel = /** @class */ (function (_super) {
    __extends(ControllerButtonModel, _super);
    function ControllerButtonModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerButtonModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_4__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'ControllerButtonModel',
            _view_name: 'ControllerButtonView',
            value: 0.0,
            pressed: false
        });
    };
    return ControllerButtonModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDOMWidgetModel"]));

/**
 * Very simple view for a gamepad button.
 */
var ControllerButtonView = /** @class */ (function (_super) {
    __extends(ControllerButtonView, _super);
    function ControllerButtonView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerButtonView.prototype.render = function () {
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-controller-button');
        this.el.style.width = 'fit-content';
        this.support = document.createElement('div');
        this.support.style.position = 'relative';
        this.support.style.margin = '1px';
        this.support.style.width = '16px';
        this.support.style.height = '16px';
        this.support.style.border = '1px solid black';
        this.support.style.background = 'lightgray';
        this.el.appendChild(this.support);
        this.bar = document.createElement('div');
        this.bar.style.position = 'absolute';
        this.bar.style.width = '100%';
        this.bar.style.bottom = '0px';
        this.bar.style.background = 'gray';
        this.support.appendChild(this.bar);
        this.update();
        this.label = document.createElement('div');
        this.label.textContent = this.model.get('description');
        this.label.style.textAlign = 'center';
        this.el.appendChild(this.label);
    };
    ControllerButtonView.prototype.update = function () {
        this.bar.style.height = (100 * this.model.get('value')) + '%';
    };
    return ControllerButtonView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["DOMWidgetView"]));

var ControllerAxisModel = /** @class */ (function (_super) {
    __extends(ControllerAxisModel, _super);
    function ControllerAxisModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerAxisModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_4__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'ControllerAxisModel',
            _view_name: 'ControllerAxisView',
            value: 0.0
        });
    };
    return ControllerAxisModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDOMWidgetModel"]));

/**
 * Very simple view for a gamepad axis.
 */
var ControllerAxisView = /** @class */ (function (_super) {
    __extends(ControllerAxisView, _super);
    function ControllerAxisView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerAxisView.prototype.render = function () {
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-controller-axis');
        this.el.style.width = '16px';
        this.el.style.padding = '4px';
        this.support = document.createElement('div');
        this.support.style.position = 'relative';
        this.support.style.margin = '1px';
        this.support.style.width = '4px';
        this.support.style.height = '64px';
        this.support.style.border = '1px solid black';
        this.support.style.background = 'lightgray';
        this.bullet = document.createElement('div');
        this.bullet.style.position = 'absolute';
        this.bullet.style.margin = '-3px';
        this.bullet.style.boxSizing = 'unset';
        this.bullet.style.width = '10px';
        this.bullet.style.height = '10px';
        this.bullet.style.background = 'gray';
        this.label = document.createElement('div');
        this.label.textContent = this.model.get('description');
        this.label.style.textAlign = 'center';
        this.support.appendChild(this.bullet);
        this.el.appendChild(this.support);
        this.el.appendChild(this.label);
        this.update();
    };
    ControllerAxisView.prototype.update = function () {
        this.bullet.style.top = (50 * (this.model.get('value') + 1)) + '%';
    };
    return ControllerAxisView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["DOMWidgetView"]));

var ControllerModel = /** @class */ (function (_super) {
    __extends(ControllerModel, _super);
    function ControllerModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_4__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'ControllerModel',
            _view_name: 'ControllerView',
            index: 0,
            name: '',
            mapping: '',
            connected: false,
            timestamp: 0,
            buttons: [],
            axes: []
        });
    };
    ControllerModel.prototype.initialize = function (attributes, options) {
        _super.prototype.initialize.call(this, attributes, options);
        if (navigator.getGamepads === void 0) {
            // Checks if the browser supports the gamepad API
            this.readout = 'This browser does not support gamepads.';
            console.error(this.readout);
        }
        else {
            // Start the wait loop, and listen to updates of the only
            // user-provided attribute, the gamepad index.
            this.readout = 'Connect gamepad and press any button.';
            if (this.get('connected')) {
                // No need to re-create Button and Axis widgets, re-use
                // the models provided by the backend which may already
                // be wired to other things.
                this.update_loop();
            }
            else {
                // Wait for a gamepad to be connected.
                this.wait_loop();
            }
        }
    };
    /**
     * Waits for a gamepad to be connected at the provided index.
     * Once one is connected, it will start the update loop, which
     * populates the update of axes and button values.
     */
    ControllerModel.prototype.wait_loop = function () {
        var index = this.get('index');
        var pad = navigator.getGamepads()[index];
        if (pad) {
            var that_1 = this;
            this.setup(pad).then(function (controls) {
                that_1.set(controls);
                that_1.save_changes();
                window.requestAnimationFrame(that_1.update_loop.bind(that_1));
            });
        }
        else {
            window.requestAnimationFrame(this.wait_loop.bind(this));
        }
    };
    /**
     * Given a native gamepad object, returns a promise for a dictionary of
     * controls, of the form
     * {
     *     buttons: list of Button models,
     *     axes: list of Axis models,
     * }
     */
    ControllerModel.prototype.setup = function (pad) {
        // Set up the main gamepad attributes
        this.set({
            name: pad.id,
            mapping: pad.mapping,
            connected: pad.connected,
            timestamp: pad.timestamp
        });
        // Create buttons and axes. When done, start the update loop
        var that = this;
        return _utils__WEBPACK_IMPORTED_MODULE_5__["resolvePromisesDict"]({
            buttons: Promise.all(pad.buttons.map(function (btn, index) {
                return that._create_button_model(index);
            })),
            axes: Promise.all(pad.axes.map(function (axis, index) {
                return that._create_axis_model(index);
            })),
        });
    };
    /**
     * Update axes and buttons values, until the gamepad is disconnected.
     * When the gamepad is disconnected, this.reset_gamepad is called.
     */
    ControllerModel.prototype.update_loop = function () {
        var index = this.get('index');
        var id = this.get('name');
        var pad = navigator.getGamepads()[index];
        if (pad && index === pad.index && id === pad.id) {
            this.set({
                timestamp: pad.timestamp,
                connected: pad.connected
            });
            this.save_changes();
            this.get('buttons').forEach(function (model, index) {
                model.set({
                    value: pad.buttons[index].value,
                    pressed: pad.buttons[index].pressed
                });
                model.save_changes();
            });
            this.get('axes').forEach(function (model, index) {
                model.set('value', pad.axes[index]);
                model.save_changes();
            });
            window.requestAnimationFrame(this.update_loop.bind(this));
        }
        else {
            this.reset_gamepad();
        }
    };
    /**
     * Resets the gamepad attributes, and start the wait_loop.
     */
    ControllerModel.prototype.reset_gamepad = function () {
        this.get('buttons').forEach(function (button) {
            button.close();
        });
        this.get('axes').forEach(function (axis) {
            axis.close();
        });
        this.set({
            name: '',
            mapping: '',
            connected: false,
            timestamp: 0.0,
            buttons: [],
            axes: []
        });
        this.save_changes();
        window.requestAnimationFrame(this.wait_loop.bind(this));
    };
    /**
     * Creates a gamepad button widget.
     */
    ControllerModel.prototype._create_button_model = function (index) {
        return this.widget_manager.new_widget({
            model_name: 'ControllerButtonModel',
            model_module: '@jupyter-widgets/controls',
            model_module_version: this.get('_model_module_version'),
            view_name: 'ControllerButtonView',
            view_module: '@jupyter-widgets/controls',
            view_module_version: this.get('_view_module_version'),
        }).then(function (model) {
            model.set('description', index);
            return model;
        });
    };
    /**
     * Creates a gamepad axis widget.
     */
    ControllerModel.prototype._create_axis_model = function (index) {
        return this.widget_manager.new_widget({
            model_name: 'ControllerAxisModel',
            model_module: '@jupyter-widgets/controls',
            model_module_version: this.get('_model_module_version'),
            view_name: 'ControllerAxisView',
            view_module: '@jupyter-widgets/controls',
            view_module_version: this.get('_view_module_version'),
        }).then(function (model) {
            model.set('description', index);
            return model;
        });
    };
    ControllerModel.serializers = __assign({}, _widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDOMWidgetModel"].serializers, { buttons: { deserialize: _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["unpack_models"] }, axes: { deserialize: _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["unpack_models"] } });
    return ControllerModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDOMWidgetModel"]));

/**
 * A simple view for a gamepad.
 */
var ControllerView = /** @class */ (function (_super) {
    __extends(ControllerView, _super);
    function ControllerView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerView.prototype._createElement = function (tagName) {
        this.pWidget = new _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["JupyterPhosphorPanelWidget"]({ view: this });
        return this.pWidget.node;
    };
    ControllerView.prototype._setElement = function (el) {
        if (this.el || el !== this.pWidget.node) {
            // Boxes don't allow setting the element beyond the initial creation.
            throw new Error('Cannot reset the DOM element.');
        }
        this.el = this.pWidget.node;
        this.$el = jquery__WEBPACK_IMPORTED_MODULE_6___default()(this.pWidget.node);
    };
    ControllerView.prototype.initialize = function (parameters) {
        _super.prototype.initialize.call(this, parameters);
        this.button_views = new _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["ViewList"](this.add_button, null, this);
        this.listenTo(this.model, 'change:buttons', function (model, value) {
            this.button_views.update(value);
        });
        this.axis_views = new _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["ViewList"](this.add_axis, null, this);
        this.listenTo(this.model, 'change:axes', function (model, value) {
            this.axis_views.update(value);
        });
        this.listenTo(this.model, 'change:name', this.update_label);
    };
    ControllerView.prototype.render = function () {
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-controller');
        this.label = document.createElement('div');
        this.el.appendChild(this.label);
        this.axis_box = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["Panel"]();
        this.axis_box.node.style.display = 'flex';
        this.pWidget.addWidget(this.axis_box);
        this.button_box = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["Panel"]();
        this.button_box.node.style.display = 'flex';
        this.pWidget.addWidget(this.button_box);
        this.button_views.update(this.model.get('buttons'));
        this.axis_views.update(this.model.get('axes'));
        this.update_label();
    };
    ControllerView.prototype.update_label = function () {
        this.label.textContent = this.model.get('name') || this.model.readout;
    };
    ControllerView.prototype.add_button = function (model) {
        var _this = this;
        // we insert a dummy element so the order is preserved when we add
        // the rendered content later.
        var dummy = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["Widget"]();
        this.button_box.addWidget(dummy);
        return this.create_child_view(model).then(function (view) {
            // replace the dummy widget with the new one.
            var i = _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3__["ArrayExt"].firstIndexOf(_this.button_box.widgets, dummy);
            _this.button_box.insertWidget(i, view.pWidget);
            dummy.dispose();
            return view;
        }).catch(_utils__WEBPACK_IMPORTED_MODULE_5__["reject"]('Could not add child button view to controller', true));
    };
    ControllerView.prototype.add_axis = function (model) {
        var _this = this;
        // we insert a dummy element so the order is preserved when we add
        // the rendered content later.
        var dummy = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["Widget"]();
        this.axis_box.addWidget(dummy);
        return this.create_child_view(model).then(function (view) {
            // replace the dummy widget with the new one.
            var i = _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3__["ArrayExt"].firstIndexOf(_this.axis_box.widgets, dummy);
            _this.axis_box.insertWidget(i, view.pWidget);
            dummy.dispose();
            return view;
        }).catch(_utils__WEBPACK_IMPORTED_MODULE_5__["reject"]('Could not add child axis view to controller', true));
    };
    ControllerView.prototype.remove = function () {
        _super.prototype.remove.call(this);
        this.button_views.remove();
        this.axis_views.remove();
    };
    return ControllerView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["DOMWidgetView"]));



/***/ }),

/***/ "1OD8":
/*!**************************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_description.js ***!
  \**************************************************************************/
/*! exports provided: DescriptionStyleModel, DescriptionModel, DescriptionView, LabeledDOMWidgetModel, LabeledDOMWidgetView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionStyleModel", function() { return DescriptionStyleModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionModel", function() { return DescriptionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionView", function() { return DescriptionView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabeledDOMWidgetModel", function() { return LabeledDOMWidgetModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabeledDOMWidgetView", function() { return LabeledDOMWidgetView; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./version */ "VKie");
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
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



var DescriptionStyleModel = /** @class */ (function (_super) {
    __extends(DescriptionStyleModel, _super);
    function DescriptionStyleModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DescriptionStyleModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'DescriptionStyleModel', _model_module: '@jupyter-widgets/controls', _model_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"] });
    };
    DescriptionStyleModel.styleProperties = {
        description_width: {
            selector: '.widget-label',
            attribute: 'width',
            default: null
        },
    };
    return DescriptionStyleModel;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["StyleModel"]));

var DescriptionModel = /** @class */ (function (_super) {
    __extends(DescriptionModel, _super);
    function DescriptionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DescriptionModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'DescriptionModel', _view_name: 'DescriptionView', _view_module: '@jupyter-widgets/controls', _model_module: '@jupyter-widgets/controls', _view_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"], _model_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"], description: '', description_tooltip: null });
    };
    return DescriptionModel;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetModel"]));

var DescriptionView = /** @class */ (function (_super) {
    __extends(DescriptionView, _super);
    function DescriptionView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DescriptionView.prototype.render = function () {
        this.label = document.createElement('label');
        this.el.appendChild(this.label);
        this.label.className = 'widget-label';
        this.label.style.display = 'none';
        this.listenTo(this.model, 'change:description', this.updateDescription);
        this.listenTo(this.model, 'change:description_tooltip', this.updateDescription);
        this.updateDescription();
    };
    DescriptionView.prototype.typeset = function (element, text) {
        this.displayed.then(function () { return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["typeset"])(element, text); });
    };
    DescriptionView.prototype.updateDescription = function () {
        var description = this.model.get('description');
        var description_tooltip = this.model.get('description_tooltip');
        if (description_tooltip === null) {
            description_tooltip = description;
        }
        if (description.length === 0) {
            this.label.style.display = 'none';
        }
        else {
            this.label.innerHTML = description;
            this.typeset(this.label);
            this.label.style.display = '';
        }
        this.label.title = description_tooltip;
    };
    return DescriptionView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetView"]));

/**
 * For backwards compatibility with jupyter-js-widgets 2.x.
 *
 * Use DescriptionModel instead.
 */
var LabeledDOMWidgetModel = /** @class */ (function (_super) {
    __extends(LabeledDOMWidgetModel, _super);
    function LabeledDOMWidgetModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LabeledDOMWidgetModel;
}(DescriptionModel));

/**
 * For backwards compatibility with jupyter-js-widgets 2.x.
 *
 * Use DescriptionView instead.
 */
var LabeledDOMWidgetView = /** @class */ (function (_super) {
    __extends(LabeledDOMWidgetView, _super);
    function LabeledDOMWidgetView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LabeledDOMWidgetView;
}(DescriptionView));



/***/ }),

/***/ "2TPD":
/*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionPrefix.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ "p/1U");


/* harmony default export */ __webpack_exports__["default"] = (function(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) / 3))) * 3 - Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(step)));
});


/***/ }),

/***/ "2Ynt":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionRound.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ "p/1U");


/* harmony default export */ __webpack_exports__["default"] = (function(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(max) - Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(step)) + 1;
});


/***/ }),

/***/ "2tFh":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionFixed.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ "p/1U");


/* harmony default export */ __webpack_exports__["default"] = (function(step) {
  return Math.max(0, -Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(step)));
});


/***/ }),

/***/ "4IhH":
/*!**************************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/phosphor/accordion.js ***!
  \**************************************************************************/
/*! exports provided: Collapse, Accordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return Collapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @phosphor/algorithm */ "rqNV");
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_phosphor_algorithm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @phosphor/signaling */ "qUp9");
/* harmony import */ var _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @phosphor/widgets */ "pif5");
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _currentselection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currentselection */ "XIYl");
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * The class name added to Collapse instances.
 */
var COLLAPSE_CLASS = 'p-Collapse';
/**
 * The class name added to a Collapse's header.
 */
var COLLAPSE_HEADER_CLASS = 'p-Collapse-header';
/**
 * The class name added to a Collapse's contents.
 */
var COLLAPSE_CONTENTS_CLASS = 'p-Collapse-contents';
/**
 * The class name added to a Collapse when it is opened
 */
var COLLAPSE_CLASS_OPEN = 'p-Collapse-open';
/**
 * A panel that supports a collapsible header, made from the widget's title.
 * Clicking on the title expands or contracts the widget.
 */
var Collapse = /** @class */ (function (_super) {
    __extends(Collapse, _super);
    function Collapse(options) {
        var _this = _super.call(this, options) || this;
        _this._collapseChanged = new _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__["Signal"](_this);
        _this.addClass(COLLAPSE_CLASS);
        _this._header = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["Widget"]();
        _this._header.addClass(COLLAPSE_HEADER_CLASS);
        _this._header.node.addEventListener('click', _this);
        _this._content = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["Panel"]();
        _this._content.addClass(COLLAPSE_CONTENTS_CLASS);
        var layout = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["PanelLayout"]();
        _this.layout = layout;
        layout.addWidget(_this._header);
        layout.addWidget(_this._content);
        if (options.widget) {
            _this.widget = options.widget;
        }
        _this.collapsed = false;
        return _this;
    }
    Collapse.prototype.dispose = function () {
        if (this.isDisposed) {
            return;
        }
        _super.prototype.dispose.call(this);
        this._header = null;
        this._widget = null;
        this._content = null;
    };
    Object.defineProperty(Collapse.prototype, "widget", {
        get: function () {
            return this._widget;
        },
        set: function (widget) {
            var oldWidget = this._widget;
            if (oldWidget) {
                oldWidget.disposed.disconnect(this._onChildDisposed, this);
                oldWidget.title.changed.disconnect(this._onTitleChanged, this);
                oldWidget.parent = null;
            }
            this._widget = widget;
            widget.disposed.connect(this._onChildDisposed, this);
            widget.title.changed.connect(this._onTitleChanged, this);
            this._onTitleChanged(widget.title);
            this._content.addWidget(widget);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collapse.prototype, "collapsed", {
        get: function () {
            return this._collapsed;
        },
        set: function (value) {
            // TODO: should we have this check here?
            if (value === this._collapsed) {
                return;
            }
            if (value) {
                this._collapse();
            }
            else {
                this._uncollapse();
            }
        },
        enumerable: true,
        configurable: true
    });
    Collapse.prototype.toggle = function () {
        this.collapsed = !this.collapsed;
    };
    Object.defineProperty(Collapse.prototype, "collapseChanged", {
        get: function () {
            return this._collapseChanged;
        },
        enumerable: true,
        configurable: true
    });
    Collapse.prototype._collapse = function () {
        this._collapsed = true;
        if (this._content) {
            this._content.hide();
        }
        this.removeClass(COLLAPSE_CLASS_OPEN);
        this._collapseChanged.emit(void 0);
    };
    Collapse.prototype._uncollapse = function () {
        this._collapsed = false;
        if (this._content) {
            this._content.show();
        }
        this.addClass(COLLAPSE_CLASS_OPEN);
        this._collapseChanged.emit(void 0);
    };
    /**
     * Handle the DOM events for the Collapse widget.
     *
     * @param event - The DOM event sent to the panel.
     *
     * #### Notes
     * This method implements the DOM `EventListener` interface and is
     * called in response to events on the panel's DOM node. It should
     * not be called directly by user code.
     */
    Collapse.prototype.handleEvent = function (event) {
        switch (event.type) {
            case 'click':
                this._evtClick(event);
                break;
            default:
                break;
        }
    };
    Collapse.prototype._evtClick = function (event) {
        this.toggle();
    };
    /**
     * Handle the `changed` signal of a title object.
     */
    Collapse.prototype._onTitleChanged = function (sender) {
        this._header.node.textContent = this._widget.title.label;
    };
    Collapse.prototype._onChildDisposed = function (sender) {
        this.dispose();
    };
    return Collapse;
}(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["Widget"]));

/**
 * The class name added to Accordion instances.
 */
var ACCORDION_CLASS = 'p-Accordion';
/**
 * The class name added to an Accordion child.
 */
var ACCORDION_CHILD_CLASS = 'p-Accordion-child';
var ACCORDION_CHILD_ACTIVE_CLASS = 'p-Accordion-child-active';
/**
 * A panel that supports a collapsible header, made from the widget's title.
 * Clicking on the title expands or contracts the widget.
 */
var Accordion = /** @class */ (function (_super) {
    __extends(Accordion, _super);
    function Accordion(options) {
        var _this = _super.call(this, options) || this;
        _this._selection = new _currentselection__WEBPACK_IMPORTED_MODULE_3__["Selection"](_this.widgets);
        _this._selection.selectionChanged.connect(_this._onSelectionChanged, _this);
        _this.addClass(ACCORDION_CLASS);
        return _this;
    }
    Object.defineProperty(Accordion.prototype, "collapseWidgets", {
        /**
         * A read-only sequence of the widgets in the panel.
         *
         * #### Notes
         * This is a read-only property.
         */
        /*  get widgets(): ISequence<Widget> {
            return new ArraySequence(toArray(map((this.layout as PanelLayout).widgets, (w: Collapse) => w.widget)));
          }
        */
        get: function () {
            return this.layout.widgets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Accordion.prototype, "selection", {
        get: function () {
            return this._selection;
        },
        enumerable: true,
        configurable: true
    });
    Accordion.prototype.indexOf = function (widget) {
        return _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_0__["ArrayExt"].findFirstIndex(this.collapseWidgets, function (w) { return w.widget === widget; });
    };
    /**
     * Add a widget to the end of the accordion.
     *
     * @param widget - The widget to add to the accordion.
     *
     * @returns The Collapse widget wrapping the added widget.
     *
     * #### Notes
     * The widget will be wrapped in a CollapsedWidget.
     */
    Accordion.prototype.addWidget = function (widget) {
        var collapse = this._wrapWidget(widget);
        collapse.collapsed = true;
        _super.prototype.addWidget.call(this, collapse);
        this._selection.adjustSelectionForInsert(this.widgets.length - 1, collapse);
        return collapse;
    };
    /**
     * Insert a widget at the specified index.
     *
     * @param index - The index at which to insert the widget.
     *
     * @param widget - The widget to insert into to the accordion.
     *
     * #### Notes
     * If the widget is already contained in the panel, it will be moved.
     */
    Accordion.prototype.insertWidget = function (index, widget) {
        var collapse = this._wrapWidget(widget);
        collapse.collapsed = true;
        _super.prototype.insertWidget.call(this, index, collapse);
        this._selection.adjustSelectionForInsert(index, collapse);
    };
    Accordion.prototype.removeWidget = function (widget) {
        var index = this.indexOf(widget);
        if (index >= 0) {
            var collapse = this.collapseWidgets[index];
            widget.parent = null;
            collapse.dispose();
            this._selection.adjustSelectionForRemove(index, null);
        }
    };
    Accordion.prototype._wrapWidget = function (widget) {
        var collapse = new Collapse({ widget: widget });
        collapse.addClass(ACCORDION_CHILD_CLASS);
        collapse.collapseChanged.connect(this._onCollapseChange, this);
        return collapse;
    };
    Accordion.prototype._onCollapseChange = function (sender) {
        if (!sender.collapsed) {
            this._selection.value = sender;
        }
        else if (this._selection.value === sender && sender.collapsed) {
            this._selection.value = null;
        }
    };
    Accordion.prototype._onSelectionChanged = function (sender, change) {
        // Collapse previous widget, open current widget
        var pv = change.previousValue;
        var cv = change.currentValue;
        if (pv) {
            pv.collapsed = true;
            pv.removeClass(ACCORDION_CHILD_ACTIVE_CLASS);
        }
        if (cv) {
            cv.collapsed = false;
            cv.addClass(ACCORDION_CHILD_ACTIVE_CLASS);
        }
    };
    return Accordion;
}(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["Panel"]));



/***/ }),

/***/ "AUoe":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/formatNumerals.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
});


/***/ }),

/***/ "CbjS":
/*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/formatSpecifier.js ***!
  \*******************************************************/
/*! exports provided: default, FormatSpecifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatSpecifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatSpecifier", function() { return FormatSpecifier; });
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width === undefined ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};


/***/ }),

/***/ "EUnC":
/*!************************************************!*\
  !*** ./node_modules/d3-format/src/identity.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "EjHT":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/defaultLocale.js ***!
  \*****************************************************/
/*! exports provided: format, formatPrefix, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return formatPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultLocale; });
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ "sXBl");


var locale;
var format;
var formatPrefix;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
  minus: "-"
});

function defaultLocale(definition) {
  locale = Object(_locale_js__WEBPACK_IMPORTED_MODULE_0__["default"])(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}


/***/ }),

/***/ "JMIS":
/*!*********************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_button.js ***!
  \*********************************************************************/
/*! exports provided: ButtonStyleModel, ButtonModel, ButtonView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonStyleModel", function() { return ButtonStyleModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonModel", function() { return ButtonModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonView", function() { return ButtonView; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./version */ "VKie");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ButtonStyleModel = /** @class */ (function (_super) {
    __extends(ButtonStyleModel, _super);
    function ButtonStyleModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonStyleModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'ButtonStyleModel',
            _model_module: '@jupyter-widgets/controls',
            _model_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"],
        });
    };
    ButtonStyleModel.styleProperties = {
        button_color: {
            selector: '',
            attribute: 'background-color',
            default: null
        },
        font_weight: {
            selector: '',
            attribute: 'font-weight',
            default: ''
        }
    };
    return ButtonStyleModel;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["StyleModel"]));

var ButtonModel = /** @class */ (function (_super) {
    __extends(ButtonModel, _super);
    function ButtonModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            description: '',
            tooltip: '',
            disabled: false,
            icon: '',
            button_style: '',
            _view_name: 'ButtonView',
            _model_name: 'ButtonModel',
            style: null
        });
    };
    return ButtonModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"]));

var ButtonView = /** @class */ (function (_super) {
    __extends(ButtonView, _super);
    function ButtonView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    ButtonView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('jupyter-button');
        this.el.classList.add('widget-button');
        this.listenTo(this.model, 'change:button_style', this.update_button_style);
        this.set_button_style();
        this.update(); // Set defaults.
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed. The model may have been
     * changed by another view or by a state update from the back-end.
     */
    ButtonView.prototype.update = function () {
        this.el.disabled = this.model.get('disabled');
        this.el.setAttribute('title', this.model.get('tooltip'));
        var description = this.model.get('description');
        var icon = this.model.get('icon');
        if (description.length || icon.length) {
            this.el.textContent = '';
            if (icon.length) {
                var i = document.createElement('i');
                i.classList.add('fa');
                i.classList.add('fa-' + icon);
                if (description.length === 0) {
                    i.classList.add('center');
                }
                this.el.appendChild(i);
            }
            this.el.appendChild(document.createTextNode(description));
        }
        return _super.prototype.update.call(this);
    };
    ButtonView.prototype.update_button_style = function () {
        this.update_mapped_classes(ButtonView.class_map, 'button_style');
    };
    ButtonView.prototype.set_button_style = function () {
        this.set_mapped_classes(ButtonView.class_map, 'button_style');
    };
    /**
     * Dictionary of events and handlers
     */
    ButtonView.prototype.events = function () {
        // TODO: return typing not needed in Typescript later than 1.8.x
        // See http://stackoverflow.com/questions/22077023/why-cant-i-indirectly-return-an-object-literal-to-satisfy-an-index-signature-re and https://github.com/Microsoft/TypeScript/pull/7029
        return { 'click': '_handle_click' };
    };
    /**
     * Handles when the button is clicked.
     */
    ButtonView.prototype._handle_click = function (event) {
        event.preventDefault();
        this.send({ event: 'click' });
    };
    Object.defineProperty(ButtonView.prototype, "tagName", {
        /**
         * The default tag name.
         *
         * #### Notes
         * This is a read-only attribute.
         */
        get: function () {
            // We can't make this an attribute with a default value
            // since it would be set after it is needed in the
            // constructor.
            return 'button';
        },
        enumerable: true,
        configurable: true
    });
    ButtonView.class_map = {
        primary: ['mod-primary'],
        success: ['mod-success'],
        info: ['mod-info'],
        warning: ['mod-warning'],
        danger: ['mod-danger']
    };
    return ButtonView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetView"]));



/***/ }),

/***/ "MIQu":
/*!*********************************************!*\
  !*** ./node_modules/jquery-ui/ui/widget.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Widget
//>>group: Core
//>>description: Provides a factory for creating stateful widgets with a common API.
//>>docs: http://api.jqueryui.com/jQuery.widget/
//>>demos: http://jqueryui.com/widget/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ "EVdn"), __webpack_require__(/*! ./version */ "Qwlt") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}( function( $ ) {

var widgetUuid = 0;
var widgetSlice = Array.prototype.slice;

$.cleanData = ( function( orig ) {
	return function( elems ) {
		var events, elem, i;
		for ( i = 0; ( elem = elems[ i ] ) != null; i++ ) {
			try {

				// Only trigger remove when necessary to save time
				events = $._data( elem, "events" );
				if ( events && events.remove ) {
					$( elem ).triggerHandler( "remove" );
				}

			// Http://bugs.jquery.com/ticket/8235
			} catch ( e ) {}
		}
		orig( elems );
	};
} )( $.cleanData );

$.widget = function( name, base, prototype ) {
	var existingConstructor, constructor, basePrototype;

	// ProxiedPrototype allows the provided prototype to remain unmodified
	// so that it can be used as a mixin for multiple widgets (#8876)
	var proxiedPrototype = {};

	var namespace = name.split( "." )[ 0 ];
	name = name.split( "." )[ 1 ];
	var fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	if ( $.isArray( prototype ) ) {
		prototype = $.extend.apply( null, [ {} ].concat( prototype ) );
	}

	// Create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {

		// Allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// Allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};

	// Extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,

		// Copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),

		// Track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	} );

	basePrototype = new base();

	// We need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = ( function() {
			function _super() {
				return base.prototype[ prop ].apply( this, arguments );
			}

			function _superApply( args ) {
				return base.prototype[ prop ].apply( this, args );
			}

			return function() {
				var __super = this._super;
				var __superApply = this._superApply;
				var returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		} )();
	} );
	constructor.prototype = $.widget.extend( basePrototype, {

		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? ( basePrototype.widgetEventPrefix || name ) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	} );

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// Redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor,
				child._proto );
		} );

		// Remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widgetSlice.call( arguments, 1 );
	var inputIndex = 0;
	var inputLength = input.length;
	var key;
	var value;

	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {

				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :

						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );

				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string";
		var args = widgetSlice.call( arguments, 1 );
		var returnValue = this;

		if ( isMethodCall ) {

			// If this is an empty collection, we need to have the instance method
			// return undefined instead of the jQuery instance
			if ( !this.length && options === "instance" ) {
				returnValue = undefined;
			} else {
				this.each( function() {
					var methodValue;
					var instance = $.data( this, fullName );

					if ( options === "instance" ) {
						returnValue = instance;
						return false;
					}

					if ( !instance ) {
						return $.error( "cannot call methods on " + name +
							" prior to initialization; " +
							"attempted to call method '" + options + "'" );
					}

					if ( !$.isFunction( instance[ options ] ) || options.charAt( 0 ) === "_" ) {
						return $.error( "no such method '" + options + "' for " + name +
							" widget instance" );
					}

					methodValue = instance[ options ].apply( instance, args );

					if ( methodValue !== instance && methodValue !== undefined ) {
						returnValue = methodValue && methodValue.jquery ?
							returnValue.pushStack( methodValue.get() ) :
							methodValue;
						return false;
					}
				} );
			}
		} else {

			// Allow multiple hashes to be passed on init
			if ( args.length ) {
				options = $.widget.extend.apply( null, [ options ].concat( args ) );
			}

			this.each( function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			} );
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",

	options: {
		classes: {},
		disabled: false,

		// Callbacks
		create: null
	},

	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widgetUuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();
		this.classesElementLookup = {};

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			} );
			this.document = $( element.style ?

				// Element within the document
				element.ownerDocument :

				// Element is window or document
				element.document || element );
			this.window = $( this.document[ 0 ].defaultView || this.document[ 0 ].parentWindow );
		}

		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this._create();

		if ( this.options.disabled ) {
			this._setOptionDisabled( this.options.disabled );
		}

		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},

	_getCreateOptions: function() {
		return {};
	},

	_getCreateEventData: $.noop,

	_create: $.noop,

	_init: $.noop,

	destroy: function() {
		var that = this;

		this._destroy();
		$.each( this.classesElementLookup, function( key, value ) {
			that._removeClass( value, key );
		} );

		// We can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.off( this.eventNamespace )
			.removeData( this.widgetFullName );
		this.widget()
			.off( this.eventNamespace )
			.removeAttr( "aria-disabled" );

		// Clean up events and states
		this.bindings.off( this.eventNamespace );
	},

	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key;
		var parts;
		var curOption;
		var i;

		if ( arguments.length === 0 ) {

			// Don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {

			// Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},

	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},

	_setOption: function( key, value ) {
		if ( key === "classes" ) {
			this._setOptionClasses( value );
		}

		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this._setOptionDisabled( value );
		}

		return this;
	},

	_setOptionClasses: function( value ) {
		var classKey, elements, currentElements;

		for ( classKey in value ) {
			currentElements = this.classesElementLookup[ classKey ];
			if ( value[ classKey ] === this.options.classes[ classKey ] ||
					!currentElements ||
					!currentElements.length ) {
				continue;
			}

			// We are doing this to create a new jQuery object because the _removeClass() call
			// on the next line is going to destroy the reference to the current elements being
			// tracked. We need to save a copy of this collection so that we can add the new classes
			// below.
			elements = $( currentElements.get() );
			this._removeClass( currentElements, classKey );

			// We don't use _addClass() here, because that uses this.options.classes
			// for generating the string of classes. We want to use the value passed in from
			// _setOption(), this is the new value of the classes option which was passed to
			// _setOption(). We pass this value directly to _classes().
			elements.addClass( this._classes( {
				element: elements,
				keys: classKey,
				classes: value,
				add: true
			} ) );
		}
	},

	_setOptionDisabled: function( value ) {
		this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null, !!value );

		// If the widget is becoming disabled, then nothing is interactive
		if ( value ) {
			this._removeClass( this.hoverable, null, "ui-state-hover" );
			this._removeClass( this.focusable, null, "ui-state-focus" );
		}
	},

	enable: function() {
		return this._setOptions( { disabled: false } );
	},

	disable: function() {
		return this._setOptions( { disabled: true } );
	},

	_classes: function( options ) {
		var full = [];
		var that = this;

		options = $.extend( {
			element: this.element,
			classes: this.options.classes || {}
		}, options );

		function processClassString( classes, checkOption ) {
			var current, i;
			for ( i = 0; i < classes.length; i++ ) {
				current = that.classesElementLookup[ classes[ i ] ] || $();
				if ( options.add ) {
					current = $( $.unique( current.get().concat( options.element.get() ) ) );
				} else {
					current = $( current.not( options.element ).get() );
				}
				that.classesElementLookup[ classes[ i ] ] = current;
				full.push( classes[ i ] );
				if ( checkOption && options.classes[ classes[ i ] ] ) {
					full.push( options.classes[ classes[ i ] ] );
				}
			}
		}

		this._on( options.element, {
			"remove": "_untrackClassesElement"
		} );

		if ( options.keys ) {
			processClassString( options.keys.match( /\S+/g ) || [], true );
		}
		if ( options.extra ) {
			processClassString( options.extra.match( /\S+/g ) || [] );
		}

		return full.join( " " );
	},

	_untrackClassesElement: function( event ) {
		var that = this;
		$.each( that.classesElementLookup, function( key, value ) {
			if ( $.inArray( event.target, value ) !== -1 ) {
				that.classesElementLookup[ key ] = $( value.not( event.target ).get() );
			}
		} );
	},

	_removeClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, false );
	},

	_addClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, true );
	},

	_toggleClass: function( element, keys, extra, add ) {
		add = ( typeof add === "boolean" ) ? add : extra;
		var shift = ( typeof element === "string" || element === null ),
			options = {
				extra: shift ? keys : extra,
				keys: shift ? element : keys,
				element: shift ? this.element : element,
				add: add
			};
		options.element.toggleClass( this._classes( options ), add );
		return this;
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement;
		var instance = this;

		// No suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// No element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {

				// Allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
						$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// Copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ );
			var eventName = match[ 1 ] + instance.eventNamespace;
			var selector = match[ 2 ];

			if ( selector ) {
				delegateElement.on( eventName, selector, handlerProxy );
			} else {
				element.on( eventName, handlerProxy );
			}
		} );
	},

	_off: function( element, eventName ) {
		eventName = ( eventName || "" ).split( " " ).join( this.eventNamespace + " " ) +
			this.eventNamespace;
		element.off( eventName ).off( eventName );

		// Clear the stack to avoid memory leaks (#10056)
		this.bindings = $( this.bindings.not( element ).get() );
		this.focusable = $( this.focusable.not( element ).get() );
		this.hoverable = $( this.hoverable.not( element ).get() );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-hover" );
			},
			mouseleave: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-hover" );
			}
		} );
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-focus" );
			},
			focusout: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-focus" );
			}
		} );
	},

	_trigger: function( type, event, data ) {
		var prop, orig;
		var callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();

		// The original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// Copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}

		var hasOptions;
		var effectName = !options ?
			method :
			options === true || typeof options === "number" ?
				defaultEffect :
				options.effect || defaultEffect;

		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}

		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;

		if ( options.delay ) {
			element.delay( options.delay );
		}

		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue( function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			} );
		}
	};
} );

return $.widget;

} ) );


/***/ }),

/***/ "NHgk":
/*!*****************************************!*\
  !*** ./node_modules/jquery-ui/ui/ie.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ "EVdn"), __webpack_require__(/*! ./version */ "Qwlt") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
} ( function( $ ) {

// This file is deprecated
return $.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );
} ) );


/***/ }),

/***/ "P3jZ":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatRounded.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ "qnQu");


/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  var d = Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
});


/***/ }),

/***/ "QBwY":
/*!*****************************************************!*\
  !*** ./node_modules/jquery-ui/ui/widgets/slider.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Slider 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Slider
//>>group: Widgets
//>>description: Displays a flexible slider with ranges and accessibility via keyboard.
//>>docs: http://api.jqueryui.com/slider/
//>>demos: http://jqueryui.com/slider/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/slider.css
//>>css.theme: ../../themes/base/theme.css

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(/*! jquery */ "EVdn"),
			__webpack_require__(/*! ./mouse */ "iGnl"),
			__webpack_require__(/*! ../keycode */ "vBzC"),
			__webpack_require__(/*! ../version */ "Qwlt"),
			__webpack_require__(/*! ../widget */ "MIQu")
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}( function( $ ) {

return $.widget( "ui.slider", $.ui.mouse, {
	version: "1.12.1",
	widgetEventPrefix: "slide",

	options: {
		animate: false,
		classes: {
			"ui-slider": "ui-corner-all",
			"ui-slider-handle": "ui-corner-all",

			// Note: ui-widget-header isn't the most fittingly semantic framework class for this
			// element, but worked best visually with a variety of themes
			"ui-slider-range": "ui-corner-all ui-widget-header"
		},
		distance: 0,
		max: 100,
		min: 0,
		orientation: "horizontal",
		range: false,
		step: 1,
		value: 0,
		values: null,

		// Callbacks
		change: null,
		slide: null,
		start: null,
		stop: null
	},

	// Number of pages in a slider
	// (how many times can you page up/down to go through the whole range)
	numPages: 5,

	_create: function() {
		this._keySliding = false;
		this._mouseSliding = false;
		this._animateOff = true;
		this._handleIndex = null;
		this._detectOrientation();
		this._mouseInit();
		this._calculateNewMax();

		this._addClass( "ui-slider ui-slider-" + this.orientation,
			"ui-widget ui-widget-content" );

		this._refresh();

		this._animateOff = false;
	},

	_refresh: function() {
		this._createRange();
		this._createHandles();
		this._setupEvents();
		this._refreshValue();
	},

	_createHandles: function() {
		var i, handleCount,
			options = this.options,
			existingHandles = this.element.find( ".ui-slider-handle" ),
			handle = "<span tabindex='0'></span>",
			handles = [];

		handleCount = ( options.values && options.values.length ) || 1;

		if ( existingHandles.length > handleCount ) {
			existingHandles.slice( handleCount ).remove();
			existingHandles = existingHandles.slice( 0, handleCount );
		}

		for ( i = existingHandles.length; i < handleCount; i++ ) {
			handles.push( handle );
		}

		this.handles = existingHandles.add( $( handles.join( "" ) ).appendTo( this.element ) );

		this._addClass( this.handles, "ui-slider-handle", "ui-state-default" );

		this.handle = this.handles.eq( 0 );

		this.handles.each( function( i ) {
			$( this )
				.data( "ui-slider-handle-index", i )
				.attr( "tabIndex", 0 );
		} );
	},

	_createRange: function() {
		var options = this.options;

		if ( options.range ) {
			if ( options.range === true ) {
				if ( !options.values ) {
					options.values = [ this._valueMin(), this._valueMin() ];
				} else if ( options.values.length && options.values.length !== 2 ) {
					options.values = [ options.values[ 0 ], options.values[ 0 ] ];
				} else if ( $.isArray( options.values ) ) {
					options.values = options.values.slice( 0 );
				}
			}

			if ( !this.range || !this.range.length ) {
				this.range = $( "<div>" )
					.appendTo( this.element );

				this._addClass( this.range, "ui-slider-range" );
			} else {
				this._removeClass( this.range, "ui-slider-range-min ui-slider-range-max" );

				// Handle range switching from true to min/max
				this.range.css( {
					"left": "",
					"bottom": ""
				} );
			}
			if ( options.range === "min" || options.range === "max" ) {
				this._addClass( this.range, "ui-slider-range-" + options.range );
			}
		} else {
			if ( this.range ) {
				this.range.remove();
			}
			this.range = null;
		}
	},

	_setupEvents: function() {
		this._off( this.handles );
		this._on( this.handles, this._handleEvents );
		this._hoverable( this.handles );
		this._focusable( this.handles );
	},

	_destroy: function() {
		this.handles.remove();
		if ( this.range ) {
			this.range.remove();
		}

		this._mouseDestroy();
	},

	_mouseCapture: function( event ) {
		var position, normValue, distance, closestHandle, index, allowed, offset, mouseOverHandle,
			that = this,
			o = this.options;

		if ( o.disabled ) {
			return false;
		}

		this.elementSize = {
			width: this.element.outerWidth(),
			height: this.element.outerHeight()
		};
		this.elementOffset = this.element.offset();

		position = { x: event.pageX, y: event.pageY };
		normValue = this._normValueFromMouse( position );
		distance = this._valueMax() - this._valueMin() + 1;
		this.handles.each( function( i ) {
			var thisDistance = Math.abs( normValue - that.values( i ) );
			if ( ( distance > thisDistance ) ||
				( distance === thisDistance &&
					( i === that._lastChangedValue || that.values( i ) === o.min ) ) ) {
				distance = thisDistance;
				closestHandle = $( this );
				index = i;
			}
		} );

		allowed = this._start( event, index );
		if ( allowed === false ) {
			return false;
		}
		this._mouseSliding = true;

		this._handleIndex = index;

		this._addClass( closestHandle, null, "ui-state-active" );
		closestHandle.trigger( "focus" );

		offset = closestHandle.offset();
		mouseOverHandle = !$( event.target ).parents().addBack().is( ".ui-slider-handle" );
		this._clickOffset = mouseOverHandle ? { left: 0, top: 0 } : {
			left: event.pageX - offset.left - ( closestHandle.width() / 2 ),
			top: event.pageY - offset.top -
				( closestHandle.height() / 2 ) -
				( parseInt( closestHandle.css( "borderTopWidth" ), 10 ) || 0 ) -
				( parseInt( closestHandle.css( "borderBottomWidth" ), 10 ) || 0 ) +
				( parseInt( closestHandle.css( "marginTop" ), 10 ) || 0 )
		};

		if ( !this.handles.hasClass( "ui-state-hover" ) ) {
			this._slide( event, index, normValue );
		}
		this._animateOff = true;
		return true;
	},

	_mouseStart: function() {
		return true;
	},

	_mouseDrag: function( event ) {
		var position = { x: event.pageX, y: event.pageY },
			normValue = this._normValueFromMouse( position );

		this._slide( event, this._handleIndex, normValue );

		return false;
	},

	_mouseStop: function( event ) {
		this._removeClass( this.handles, null, "ui-state-active" );
		this._mouseSliding = false;

		this._stop( event, this._handleIndex );
		this._change( event, this._handleIndex );

		this._handleIndex = null;
		this._clickOffset = null;
		this._animateOff = false;

		return false;
	},

	_detectOrientation: function() {
		this.orientation = ( this.options.orientation === "vertical" ) ? "vertical" : "horizontal";
	},

	_normValueFromMouse: function( position ) {
		var pixelTotal,
			pixelMouse,
			percentMouse,
			valueTotal,
			valueMouse;

		if ( this.orientation === "horizontal" ) {
			pixelTotal = this.elementSize.width;
			pixelMouse = position.x - this.elementOffset.left -
				( this._clickOffset ? this._clickOffset.left : 0 );
		} else {
			pixelTotal = this.elementSize.height;
			pixelMouse = position.y - this.elementOffset.top -
				( this._clickOffset ? this._clickOffset.top : 0 );
		}

		percentMouse = ( pixelMouse / pixelTotal );
		if ( percentMouse > 1 ) {
			percentMouse = 1;
		}
		if ( percentMouse < 0 ) {
			percentMouse = 0;
		}
		if ( this.orientation === "vertical" ) {
			percentMouse = 1 - percentMouse;
		}

		valueTotal = this._valueMax() - this._valueMin();
		valueMouse = this._valueMin() + percentMouse * valueTotal;

		return this._trimAlignValue( valueMouse );
	},

	_uiHash: function( index, value, values ) {
		var uiHash = {
			handle: this.handles[ index ],
			handleIndex: index,
			value: value !== undefined ? value : this.value()
		};

		if ( this._hasMultipleValues() ) {
			uiHash.value = value !== undefined ? value : this.values( index );
			uiHash.values = values || this.values();
		}

		return uiHash;
	},

	_hasMultipleValues: function() {
		return this.options.values && this.options.values.length;
	},

	_start: function( event, index ) {
		return this._trigger( "start", event, this._uiHash( index ) );
	},

	_slide: function( event, index, newVal ) {
		var allowed, otherVal,
			currentValue = this.value(),
			newValues = this.values();

		if ( this._hasMultipleValues() ) {
			otherVal = this.values( index ? 0 : 1 );
			currentValue = this.values( index );

			if ( this.options.values.length === 2 && this.options.range === true ) {
				newVal =  index === 0 ? Math.min( otherVal, newVal ) : Math.max( otherVal, newVal );
			}

			newValues[ index ] = newVal;
		}

		if ( newVal === currentValue ) {
			return;
		}

		allowed = this._trigger( "slide", event, this._uiHash( index, newVal, newValues ) );

		// A slide can be canceled by returning false from the slide callback
		if ( allowed === false ) {
			return;
		}

		if ( this._hasMultipleValues() ) {
			this.values( index, newVal );
		} else {
			this.value( newVal );
		}
	},

	_stop: function( event, index ) {
		this._trigger( "stop", event, this._uiHash( index ) );
	},

	_change: function( event, index ) {
		if ( !this._keySliding && !this._mouseSliding ) {

			//store the last changed value index for reference when handles overlap
			this._lastChangedValue = index;
			this._trigger( "change", event, this._uiHash( index ) );
		}
	},

	value: function( newValue ) {
		if ( arguments.length ) {
			this.options.value = this._trimAlignValue( newValue );
			this._refreshValue();
			this._change( null, 0 );
			return;
		}

		return this._value();
	},

	values: function( index, newValue ) {
		var vals,
			newValues,
			i;

		if ( arguments.length > 1 ) {
			this.options.values[ index ] = this._trimAlignValue( newValue );
			this._refreshValue();
			this._change( null, index );
			return;
		}

		if ( arguments.length ) {
			if ( $.isArray( arguments[ 0 ] ) ) {
				vals = this.options.values;
				newValues = arguments[ 0 ];
				for ( i = 0; i < vals.length; i += 1 ) {
					vals[ i ] = this._trimAlignValue( newValues[ i ] );
					this._change( null, i );
				}
				this._refreshValue();
			} else {
				if ( this._hasMultipleValues() ) {
					return this._values( index );
				} else {
					return this.value();
				}
			}
		} else {
			return this._values();
		}
	},

	_setOption: function( key, value ) {
		var i,
			valsLength = 0;

		if ( key === "range" && this.options.range === true ) {
			if ( value === "min" ) {
				this.options.value = this._values( 0 );
				this.options.values = null;
			} else if ( value === "max" ) {
				this.options.value = this._values( this.options.values.length - 1 );
				this.options.values = null;
			}
		}

		if ( $.isArray( this.options.values ) ) {
			valsLength = this.options.values.length;
		}

		this._super( key, value );

		switch ( key ) {
			case "orientation":
				this._detectOrientation();
				this._removeClass( "ui-slider-horizontal ui-slider-vertical" )
					._addClass( "ui-slider-" + this.orientation );
				this._refreshValue();
				if ( this.options.range ) {
					this._refreshRange( value );
				}

				// Reset positioning from previous orientation
				this.handles.css( value === "horizontal" ? "bottom" : "left", "" );
				break;
			case "value":
				this._animateOff = true;
				this._refreshValue();
				this._change( null, 0 );
				this._animateOff = false;
				break;
			case "values":
				this._animateOff = true;
				this._refreshValue();

				// Start from the last handle to prevent unreachable handles (#9046)
				for ( i = valsLength - 1; i >= 0; i-- ) {
					this._change( null, i );
				}
				this._animateOff = false;
				break;
			case "step":
			case "min":
			case "max":
				this._animateOff = true;
				this._calculateNewMax();
				this._refreshValue();
				this._animateOff = false;
				break;
			case "range":
				this._animateOff = true;
				this._refresh();
				this._animateOff = false;
				break;
		}
	},

	_setOptionDisabled: function( value ) {
		this._super( value );

		this._toggleClass( null, "ui-state-disabled", !!value );
	},

	//internal value getter
	// _value() returns value trimmed by min and max, aligned by step
	_value: function() {
		var val = this.options.value;
		val = this._trimAlignValue( val );

		return val;
	},

	//internal values getter
	// _values() returns array of values trimmed by min and max, aligned by step
	// _values( index ) returns single value trimmed by min and max, aligned by step
	_values: function( index ) {
		var val,
			vals,
			i;

		if ( arguments.length ) {
			val = this.options.values[ index ];
			val = this._trimAlignValue( val );

			return val;
		} else if ( this._hasMultipleValues() ) {

			// .slice() creates a copy of the array
			// this copy gets trimmed by min and max and then returned
			vals = this.options.values.slice();
			for ( i = 0; i < vals.length; i += 1 ) {
				vals[ i ] = this._trimAlignValue( vals[ i ] );
			}

			return vals;
		} else {
			return [];
		}
	},

	// Returns the step-aligned value that val is closest to, between (inclusive) min and max
	_trimAlignValue: function( val ) {
		if ( val <= this._valueMin() ) {
			return this._valueMin();
		}
		if ( val >= this._valueMax() ) {
			return this._valueMax();
		}
		var step = ( this.options.step > 0 ) ? this.options.step : 1,
			valModStep = ( val - this._valueMin() ) % step,
			alignValue = val - valModStep;

		if ( Math.abs( valModStep ) * 2 >= step ) {
			alignValue += ( valModStep > 0 ) ? step : ( -step );
		}

		// Since JavaScript has problems with large floats, round
		// the final value to 5 digits after the decimal point (see #4124)
		return parseFloat( alignValue.toFixed( 5 ) );
	},

	_calculateNewMax: function() {
		var max = this.options.max,
			min = this._valueMin(),
			step = this.options.step,
			aboveMin = Math.round( ( max - min ) / step ) * step;
		max = aboveMin + min;
		if ( max > this.options.max ) {

			//If max is not divisible by step, rounding off may increase its value
			max -= step;
		}
		this.max = parseFloat( max.toFixed( this._precision() ) );
	},

	_precision: function() {
		var precision = this._precisionOf( this.options.step );
		if ( this.options.min !== null ) {
			precision = Math.max( precision, this._precisionOf( this.options.min ) );
		}
		return precision;
	},

	_precisionOf: function( num ) {
		var str = num.toString(),
			decimal = str.indexOf( "." );
		return decimal === -1 ? 0 : str.length - decimal - 1;
	},

	_valueMin: function() {
		return this.options.min;
	},

	_valueMax: function() {
		return this.max;
	},

	_refreshRange: function( orientation ) {
		if ( orientation === "vertical" ) {
			this.range.css( { "width": "", "left": "" } );
		}
		if ( orientation === "horizontal" ) {
			this.range.css( { "height": "", "bottom": "" } );
		}
	},

	_refreshValue: function() {
		var lastValPercent, valPercent, value, valueMin, valueMax,
			oRange = this.options.range,
			o = this.options,
			that = this,
			animate = ( !this._animateOff ) ? o.animate : false,
			_set = {};

		if ( this._hasMultipleValues() ) {
			this.handles.each( function( i ) {
				valPercent = ( that.values( i ) - that._valueMin() ) / ( that._valueMax() -
					that._valueMin() ) * 100;
				_set[ that.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
				$( this ).stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );
				if ( that.options.range === true ) {
					if ( that.orientation === "horizontal" ) {
						if ( i === 0 ) {
							that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
								left: valPercent + "%"
							}, o.animate );
						}
						if ( i === 1 ) {
							that.range[ animate ? "animate" : "css" ]( {
								width: ( valPercent - lastValPercent ) + "%"
							}, {
								queue: false,
								duration: o.animate
							} );
						}
					} else {
						if ( i === 0 ) {
							that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
								bottom: ( valPercent ) + "%"
							}, o.animate );
						}
						if ( i === 1 ) {
							that.range[ animate ? "animate" : "css" ]( {
								height: ( valPercent - lastValPercent ) + "%"
							}, {
								queue: false,
								duration: o.animate
							} );
						}
					}
				}
				lastValPercent = valPercent;
			} );
		} else {
			value = this.value();
			valueMin = this._valueMin();
			valueMax = this._valueMax();
			valPercent = ( valueMax !== valueMin ) ?
					( value - valueMin ) / ( valueMax - valueMin ) * 100 :
					0;
			_set[ this.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
			this.handle.stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );

			if ( oRange === "min" && this.orientation === "horizontal" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
					width: valPercent + "%"
				}, o.animate );
			}
			if ( oRange === "max" && this.orientation === "horizontal" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
					width: ( 100 - valPercent ) + "%"
				}, o.animate );
			}
			if ( oRange === "min" && this.orientation === "vertical" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
					height: valPercent + "%"
				}, o.animate );
			}
			if ( oRange === "max" && this.orientation === "vertical" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
					height: ( 100 - valPercent ) + "%"
				}, o.animate );
			}
		}
	},

	_handleEvents: {
		keydown: function( event ) {
			var allowed, curVal, newVal, step,
				index = $( event.target ).data( "ui-slider-handle-index" );

			switch ( event.keyCode ) {
				case $.ui.keyCode.HOME:
				case $.ui.keyCode.END:
				case $.ui.keyCode.PAGE_UP:
				case $.ui.keyCode.PAGE_DOWN:
				case $.ui.keyCode.UP:
				case $.ui.keyCode.RIGHT:
				case $.ui.keyCode.DOWN:
				case $.ui.keyCode.LEFT:
					event.preventDefault();
					if ( !this._keySliding ) {
						this._keySliding = true;
						this._addClass( $( event.target ), null, "ui-state-active" );
						allowed = this._start( event, index );
						if ( allowed === false ) {
							return;
						}
					}
					break;
			}

			step = this.options.step;
			if ( this._hasMultipleValues() ) {
				curVal = newVal = this.values( index );
			} else {
				curVal = newVal = this.value();
			}

			switch ( event.keyCode ) {
				case $.ui.keyCode.HOME:
					newVal = this._valueMin();
					break;
				case $.ui.keyCode.END:
					newVal = this._valueMax();
					break;
				case $.ui.keyCode.PAGE_UP:
					newVal = this._trimAlignValue(
						curVal + ( ( this._valueMax() - this._valueMin() ) / this.numPages )
					);
					break;
				case $.ui.keyCode.PAGE_DOWN:
					newVal = this._trimAlignValue(
						curVal - ( ( this._valueMax() - this._valueMin() ) / this.numPages ) );
					break;
				case $.ui.keyCode.UP:
				case $.ui.keyCode.RIGHT:
					if ( curVal === this._valueMax() ) {
						return;
					}
					newVal = this._trimAlignValue( curVal + step );
					break;
				case $.ui.keyCode.DOWN:
				case $.ui.keyCode.LEFT:
					if ( curVal === this._valueMin() ) {
						return;
					}
					newVal = this._trimAlignValue( curVal - step );
					break;
			}

			this._slide( event, index, newVal );
		},
		keyup: function( event ) {
			var index = $( event.target ).data( "ui-slider-handle-index" );

			if ( this._keySliding ) {
				this._keySliding = false;
				this._stop( event, index );
				this._change( event, index );
				this._removeClass( $( event.target ), null, "ui-state-active" );
			}
		}
	}
} );

} ) );


/***/ }),

/***/ "Qwlt":
/*!**********************************************!*\
  !*** ./node_modules/jquery-ui/ui/version.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ "EVdn") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
} ( function( $ ) {

$.ui = $.ui || {};

return $.ui.version = "1.12.1";

} ) );


/***/ }),

/***/ "SisM":
/*!*************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/utils.js ***!
  \*************************************************************/
/*! exports provided: uuid, WrappedError, resolvePromisesDict, reject, typeset, escape_html */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return reject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeset", function() { return typeset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape_html", function() { return escape_html; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["uuid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WrappedError", function() { return _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["WrappedError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolvePromisesDict", function() { return _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["resolvePromisesDict"]; });

// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


/**
 * Creates a wrappable Promise rejection function.
 *
 * Creates a function that returns a Promise.reject with a new WrappedError
 * that has the provided message and wraps the original error that
 * caused the promise to reject.
 */
function reject(message, log) {
    return function promiseRejection(error) {
        var wrapped_error = new _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["WrappedError"](message, error);
        if (log) {
            console.error(wrapped_error);
        }
        return Promise.reject(wrapped_error);
    };
}
/**
 * Apply MathJax rendering to an element, and optionally set its text.
 *
 * If MathJax is not available, make no changes.
 *
 * Parameters
 * ----------
 * element: Node
 * text: optional string
 */
function typeset(element, text) {
    if (text !== void 0) {
        element.textContent = text;
    }
    if (window.MathJax !== void 0) {
        MathJax.Hub.Queue(['Typeset', MathJax.Hub, element]);
    }
}
/**
 * escape text to HTML
 */
function escape_html(text) {
    var esc = document.createElement('div');
    esc.textContent = text;
    return esc.innerHTML;
}


/***/ }),

/***/ "TtYL":
/*!******************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_int.js ***!
  \******************************************************************/
/*! exports provided: IntModel, BoundedIntModel, SliderStyleModel, IntSliderModel, IntRangeSliderModel, BaseIntSliderView, IntRangeSliderView, IntSliderView, IntTextModel, BoundedIntTextModel, IntTextView, ProgressStyleModel, IntProgressModel, ProgressView, PlayModel, PlayView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntModel", function() { return IntModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundedIntModel", function() { return BoundedIntModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderStyleModel", function() { return SliderStyleModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntSliderModel", function() { return IntSliderModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntRangeSliderModel", function() { return IntRangeSliderModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseIntSliderView", function() { return BaseIntSliderView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntRangeSliderView", function() { return IntRangeSliderView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntSliderView", function() { return IntSliderView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntTextModel", function() { return IntTextModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundedIntTextModel", function() { return BoundedIntTextModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntTextView", function() { return IntTextView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressStyleModel", function() { return ProgressStyleModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntProgressModel", function() { return IntProgressModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressView", function() { return ProgressView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayModel", function() { return PlayModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayView", function() { return PlayView; });
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _widget_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_description */ "1OD8");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-format */ "rWgG");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jquery_ui_ui_widgets_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery-ui/ui/widgets/slider */ "QBwY");
/* harmony import */ var jquery_ui_ui_widgets_slider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_slider__WEBPACK_IMPORTED_MODULE_7__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
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








var IntModel = /** @class */ (function (_super) {
    __extends(IntModel, _super);
    function IntModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_5__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'IntModel',
            value: 0,
        });
    };
    return IntModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDescriptionModel"]));

var BoundedIntModel = /** @class */ (function (_super) {
    __extends(BoundedIntModel, _super);
    function BoundedIntModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoundedIntModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_5__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'BoundedIntModel',
            max: 100,
            min: 0
        });
    };
    return BoundedIntModel;
}(IntModel));

var SliderStyleModel = /** @class */ (function (_super) {
    __extends(SliderStyleModel, _super);
    function SliderStyleModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SliderStyleModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'SliderStyleModel' });
    };
    SliderStyleModel.styleProperties = __assign({}, _widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyleModel"].styleProperties, { handle_color: {
            selector: '.ui-slider-handle',
            attribute: 'background-color',
            default: null
        } });
    return SliderStyleModel;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyleModel"]));

var IntSliderModel = /** @class */ (function (_super) {
    __extends(IntSliderModel, _super);
    function IntSliderModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntSliderModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_5__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'IntSliderModel',
            _view_name: 'IntSliderView',
            step: 1,
            orientation: 'horizontal',
            readout: true,
            readout_format: 'd',
            continuous_update: true,
            style: null,
            disabled: false,
        });
    };
    IntSliderModel.prototype.initialize = function (attributes, options) {
        _super.prototype.initialize.call(this, attributes, options);
        this.on('change:readout_format', this.update_readout_format, this);
        this.update_readout_format();
    };
    IntSliderModel.prototype.update_readout_format = function () {
        this.readout_formatter = Object(d3_format__WEBPACK_IMPORTED_MODULE_4__["format"])(this.get('readout_format'));
    };
    return IntSliderModel;
}(BoundedIntModel));

var IntRangeSliderModel = /** @class */ (function (_super) {
    __extends(IntRangeSliderModel, _super);
    function IntRangeSliderModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IntRangeSliderModel;
}(IntSliderModel));

var BaseIntSliderView = /** @class */ (function (_super) {
    __extends(BaseIntSliderView, _super);
    function BaseIntSliderView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._parse_value = parseInt;
        return _this;
    }
    BaseIntSliderView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-slider');
        this.el.classList.add('widget-hslider');
        (this.$slider = jquery__WEBPACK_IMPORTED_MODULE_6___default()('<div />'))
            .slider({
            slide: this.handleSliderChange.bind(this),
            stop: this.handleSliderChanged.bind(this)
        })
            .addClass('slider');
        // Put the slider in a container
        this.slider_container = document.createElement('div');
        this.slider_container.classList.add('slider-container');
        this.slider_container.appendChild(this.$slider[0]);
        this.el.appendChild(this.slider_container);
        this.readout = document.createElement('div');
        this.el.appendChild(this.readout);
        this.readout.classList.add('widget-readout');
        this.readout.contentEditable = 'true';
        this.readout.style.display = 'none';
        // Set defaults.
        this.update();
    };
    BaseIntSliderView.prototype.update = function (options) {
        /**
         * Update the contents of this view
         *
         * Called when the model is changed.  The model may have been
         * changed by another view or by a state update from the back-end.
         */
        if (options === undefined || options.updated_view !== this) {
            // JQuery slider option keys.  These keys happen to have a
            // one-to-one mapping with the corresponding keys of the model.
            var jquery_slider_keys = ['step', 'disabled'];
            var that_1 = this;
            that_1.$slider.slider({});
            jquery_slider_keys.forEach(function (key) {
                var model_value = that_1.model.get(key);
                if (model_value !== undefined) {
                    that_1.$slider.slider('option', key, model_value);
                }
            });
            if (this.model.get('disabled')) {
                this.readout.contentEditable = 'false';
            }
            else {
                this.readout.contentEditable = 'true';
            }
            var max = this.model.get('max');
            var min = this.model.get('min');
            if (min <= max) {
                if (max !== undefined) {
                    this.$slider.slider('option', 'max', max);
                }
                if (min !== undefined) {
                    this.$slider.slider('option', 'min', min);
                }
            }
            // WORKAROUND FOR JQUERY SLIDER BUG.
            // The horizontal position of the slider handle
            // depends on the value of the slider at the time
            // of orientation change.  Before applying the new
            // workaround, we set the value to the minimum to
            // make sure that the horizontal placement of the
            // handle in the vertical slider is always
            // consistent.
            var orientation_1 = this.model.get('orientation');
            this.$slider.slider('option', 'orientation', orientation_1);
            // Use the right CSS classes for vertical & horizontal sliders
            if (orientation_1 === 'vertical') {
                this.el.classList.remove('widget-hslider');
                this.el.classList.add('widget-vslider');
                this.el.classList.remove('widget-inline-hbox');
                this.el.classList.add('widget-inline-vbox');
            }
            else {
                this.el.classList.remove('widget-vslider');
                this.el.classList.add('widget-hslider');
                this.el.classList.remove('widget-inline-vbox');
                this.el.classList.add('widget-inline-hbox');
            }
            var readout = this.model.get('readout');
            if (readout) {
                this.readout.style.display = '';
                this.displayed.then(function () {
                    if (that_1.readout_overflow()) {
                        that_1.readout.classList.add('overflow');
                    }
                    else {
                        that_1.readout.classList.remove('overflow');
                    }
                });
            }
            else {
                this.readout.style.display = 'none';
            }
        }
        return _super.prototype.update.call(this);
    };
    /**
     * Returns true if the readout box content overflows.
     */
    BaseIntSliderView.prototype.readout_overflow = function () {
        return this.readout.scrollWidth > this.readout.clientWidth;
    };
    BaseIntSliderView.prototype.events = function () {
        return {
            // Dictionary of events and their handlers.
            'slide': 'handleSliderChange',
            'slidestop': 'handleSliderChanged',
            'blur [contentEditable=true]': 'handleTextChange',
            'keydown [contentEditable=true]': 'handleKeyDown'
        };
    };
    BaseIntSliderView.prototype.handleKeyDown = function (e) {
        if (e.keyCode === 13) { /* keyboard keycodes `enter` */
            e.preventDefault();
            this.handleTextChange();
        }
    };
    /**
     * Validate the value of the slider before sending it to the back-end
     * and applying it to the other views on the page.
     */
    BaseIntSliderView.prototype._validate_slide_value = function (x) {
        return Math.floor(x);
    };
    return BaseIntSliderView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var IntRangeSliderView = /** @class */ (function (_super) {
    __extends(IntRangeSliderView, _super);
    function IntRangeSliderView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // range numbers can be separated by a hyphen, colon, or an en-dash
        _this._range_regex = /^\s*([+-]?\d+)\s*[-:–]\s*([+-]?\d+)/;
        return _this;
    }
    IntRangeSliderView.prototype.update = function (options) {
        _super.prototype.update.call(this, options);
        this.$slider.slider('option', 'range', true);
        // values for the range case are validated python-side in
        // _Bounded{Int,Float}RangeWidget._validate
        var value = this.model.get('value');
        this.$slider.slider('option', 'values', value.slice());
        this.readout.textContent = this.valueToString(value);
        if (this.model.get('value') !== value) {
            this.model.set('value', value, { updated_view: this });
            this.touch();
        }
    };
    /**
     * Write value to a string
     */
    IntRangeSliderView.prototype.valueToString = function (value) {
        var format = this.model.readout_formatter;
        return value.map(function (v) {
            return format(v);
        }).join(' – ');
    };
    /**
     * Parse value from a string
     */
    IntRangeSliderView.prototype.stringToValue = function (text) {
        // ranges can be expressed either 'val-val' or 'val:val' (+spaces)
        var match = this._range_regex.exec(text);
        if (match) {
            return [this._parse_value(match[1]), this._parse_value(match[2])];
        }
        else {
            return null;
        }
    };
    /**
     * this handles the entry of text into the contentEditable label first, the
     * value is checked if it contains a parseable value then it is clamped
     * within the min-max range of the slider finally, the model is updated if
     * the value is to be changed
     *
     * if any of these conditions are not met, the text is reset
     */
    IntRangeSliderView.prototype.handleTextChange = function () {
        var value = this.stringToValue(this.readout.textContent);
        var vmin = this.model.get('min');
        var vmax = this.model.get('max');
        // reject input where NaN or lower > upper
        if (value === null ||
            isNaN(value[0]) ||
            isNaN(value[1]) ||
            (value[0] > value[1])) {
            this.readout.textContent = this.valueToString(this.model.get('value'));
        }
        else {
            // clamp to range
            value = [Math.max(Math.min(value[0], vmax), vmin),
                Math.max(Math.min(value[1], vmax), vmin)];
            if ((value[0] !== this.model.get('value')[0]) ||
                (value[1] !== this.model.get('value')[1])) {
                this.readout.textContent = this.valueToString(value);
                this.model.set('value', value, { updated_view: this });
                this.touch();
            }
            else {
                this.readout.textContent = this.valueToString(this.model.get('value'));
            }
        }
    };
    /**
     * Called when the slider value is changing.
     */
    IntRangeSliderView.prototype.handleSliderChange = function (e, ui) {
        var actual_value = ui.values.map(this._validate_slide_value);
        this.readout.textContent = this.valueToString(actual_value);
        // Only persist the value while sliding if the continuous_update
        // trait is set to true.
        if (this.model.get('continuous_update')) {
            this.handleSliderChanged(e, ui);
        }
    };
    /**
     * Called when the slider value has changed.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    IntRangeSliderView.prototype.handleSliderChanged = function (e, ui) {
        var actual_value = ui.values.map(this._validate_slide_value);
        this.model.set('value', actual_value, { updated_view: this });
        this.touch();
    };
    return IntRangeSliderView;
}(BaseIntSliderView));

var IntSliderView = /** @class */ (function (_super) {
    __extends(IntSliderView, _super);
    function IntSliderView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntSliderView.prototype.update = function (options) {
        _super.prototype.update.call(this, options);
        var min = this.model.get('min');
        var max = this.model.get('max');
        var value = this.model.get('value');
        if (value > max) {
            value = max;
        }
        else if (value < min) {
            value = min;
        }
        this.$slider.slider('option', 'value', value);
        this.readout.textContent = this.valueToString(value);
        if (this.model.get('value') !== value) {
            this.model.set('value', value, { updated_view: this });
            this.touch();
        }
    };
    /**
     * Write value to a string
     */
    IntSliderView.prototype.valueToString = function (value) {
        var format = this.model.readout_formatter;
        return format(value);
    };
    /**
     * Parse value from a string
     */
    IntSliderView.prototype.stringToValue = function (text) {
        return this._parse_value(text);
    };
    /**
     * this handles the entry of text into the contentEditable label first, the
     * value is checked if it contains a parseable value then it is clamped
     * within the min-max range of the slider finally, the model is updated if
     * the value is to be changed
     *
     * if any of these conditions are not met, the text is reset
     */
    IntSliderView.prototype.handleTextChange = function () {
        var value = this.stringToValue(this.readout.textContent);
        var vmin = this.model.get('min');
        var vmax = this.model.get('max');
        if (isNaN(value)) {
            this.readout.textContent = this.valueToString(this.model.get('value'));
        }
        else {
            value = Math.max(Math.min(value, vmax), vmin);
            if (value !== this.model.get('value')) {
                this.readout.textContent = this.valueToString(value);
                this.model.set('value', value, { updated_view: this });
                this.touch();
            }
            else {
                this.readout.textContent = this.valueToString(this.model.get('value'));
            }
        }
    };
    /**
     * Called when the slider value is changing.
     */
    IntSliderView.prototype.handleSliderChange = function (e, ui) {
        var actual_value = this._validate_slide_value(ui.value);
        this.readout.textContent = this.valueToString(actual_value);
        // Only persist the value while sliding if the continuous_update
        // trait is set to true.
        if (this.model.get('continuous_update')) {
            this.handleSliderChanged(e, ui);
        }
    };
    /**
     * Called when the slider value has changed.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    IntSliderView.prototype.handleSliderChanged = function (e, ui) {
        var actual_value = this._validate_slide_value(ui.value);
        this.model.set('value', actual_value, { updated_view: this });
        this.touch();
    };
    return IntSliderView;
}(BaseIntSliderView));

var IntTextModel = /** @class */ (function (_super) {
    __extends(IntTextModel, _super);
    function IntTextModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntTextModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_5__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'IntTextModel',
            _view_name: 'IntTextView',
            disabled: false,
            continuous_update: false,
        });
    };
    return IntTextModel;
}(IntModel));

var BoundedIntTextModel = /** @class */ (function (_super) {
    __extends(BoundedIntTextModel, _super);
    function BoundedIntTextModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoundedIntTextModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_5__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'BoundedIntTextModel',
            _view_name: 'IntTextView',
            disabled: false,
            continuous_update: false,
            step: 1,
        });
    };
    return BoundedIntTextModel;
}(BoundedIntModel));

var IntTextView = /** @class */ (function (_super) {
    __extends(IntTextView, _super);
    function IntTextView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._parse_value = parseInt;
        _this._default_step = '1';
        return _this;
    }
    IntTextView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-text');
        this.textbox = document.createElement('input');
        this.textbox.type = 'number';
        this.textbox.required = true;
        this.textbox.id = this.label.htmlFor = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["uuid"])();
        this.el.appendChild(this.textbox);
        this.update(); // Set defaults.
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    IntTextView.prototype.update = function (options) {
        if (options === undefined || options.updated_view !== this) {
            var value = this.model.get('value');
            if (this._parse_value(this.textbox.value) !== value) {
                this.textbox.value = value.toString();
            }
            if (this.model.get('min') !== undefined) {
                this.textbox.min = this.model.get('min');
            }
            if (this.model.get('max') !== undefined) {
                this.textbox.max = this.model.get('max');
            }
            if (this.model.get('step') !== undefined
                && this.model.get('step') !== null) {
                this.textbox.step = this.model.get('step');
            }
            else {
                this.textbox.step = this._default_step;
            }
            this.textbox.disabled = this.model.get('disabled');
        }
        return _super.prototype.update.call(this);
    };
    IntTextView.prototype.events = function () {
        return {
            'keydown input': 'handleKeyDown',
            'keypress input': 'handleKeypress',
            'keyup input': 'handleKeyUp',
            'input input': 'handleChanging',
            'change input': 'handleChanged'
        };
    };
    /**
     * Handle key down
     *
     * Stop propagation so the event isn't sent to the application.
     */
    IntTextView.prototype.handleKeyDown = function (e) {
        e.stopPropagation();
    };
    /**
     * Handles key press
     */
    IntTextView.prototype.handleKeypress = function (e) {
        if (/[e,.\s]/.test(String.fromCharCode(e.keyCode))) {
            e.preventDefault();
        }
    };
    /**
     * Handle key up
     */
    IntTextView.prototype.handleKeyUp = function (e) {
        if (e.altKey || e.ctrlKey) {
            return;
        }
        var target = e.target;
        /* remove invalid characters */
        var value = target.value;
        value = value.replace(/[e,.\s]/g, "");
        if (value.length >= 1) {
            var subvalue = value.substr(1);
            value = value[0] + subvalue.replace(/[+-]/g, "");
        }
        if (target.value != value) {
            e.preventDefault();
            target.value = value;
        }
    };
    /**
     * Call the submit handler if continuous update is true and we are not
     * obviously incomplete.
     */
    IntTextView.prototype.handleChanging = function (e) {
        var target = e.target;
        var trimmed = target.value.trim();
        if (trimmed === '' || (['-', '-.', '.', '+.', '+'].indexOf(trimmed) >= 0)) {
            // incomplete number
            return;
        }
        if (this.model.get('continuous_update')) {
            this.handleChanged(e);
        }
    };
    /**
     * Applies validated input.
     */
    IntTextView.prototype.handleChanged = function (e) {
        var target = e.target;
        var numericalValue = this._parse_value(target.value);
        // If parse failed, reset value to value stored in model.
        if (isNaN(numericalValue)) {
            target.value = this.model.get('value');
        }
        else {
            // Handle both the unbounded and bounded case by
            // checking to see if the max/min properties are defined
            var boundedValue = numericalValue;
            if (this.model.get('max') !== undefined) {
                boundedValue = Math.min(this.model.get('max'), boundedValue);
            }
            if (this.model.get('min') !== undefined) {
                boundedValue = Math.max(this.model.get('min'), boundedValue);
            }
            if (boundedValue !== numericalValue) {
                target.value = boundedValue;
                numericalValue = boundedValue;
            }
            // Apply the value if it has changed.
            if (numericalValue !== this.model.get('value')) {
                this.model.set('value', numericalValue, { updated_view: this });
                this.touch();
            }
        }
    };
    return IntTextView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var ProgressStyleModel = /** @class */ (function (_super) {
    __extends(ProgressStyleModel, _super);
    function ProgressStyleModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressStyleModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'ProgressStyleModel' });
    };
    ProgressStyleModel.styleProperties = __assign({}, _widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyleModel"].styleProperties, { bar_color: {
            selector: '.progress-bar',
            attribute: 'background-color',
            default: null
        } });
    return ProgressStyleModel;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyleModel"]));

var IntProgressModel = /** @class */ (function (_super) {
    __extends(IntProgressModel, _super);
    function IntProgressModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntProgressModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_5__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'IntProgressModel',
            _view_name: 'ProgressView',
            orientation: 'horizontal',
            bar_style: '',
            style: null
        });
    };
    return IntProgressModel;
}(BoundedIntModel));

var ProgressView = /** @class */ (function (_super) {
    __extends(ProgressView, _super);
    function ProgressView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressView.prototype.initialize = function (parameters) {
        _super.prototype.initialize.call(this, parameters);
        this.listenTo(this.model, 'change:bar_style', this.update_bar_style);
        this.pWidget.addClass('jupyter-widgets');
    };
    ProgressView.prototype.render = function () {
        _super.prototype.render.call(this);
        var orientation = this.model.get('orientation');
        var className = orientation === 'horizontal' ?
            'widget-hprogress' : 'widget-vprogress';
        this.el.classList.add(className);
        this.progress = document.createElement('div');
        this.progress.classList.add('progress');
        this.progress.style.position = 'relative';
        this.el.appendChild(this.progress);
        this.bar = document.createElement('div');
        this.bar.classList.add('progress-bar');
        this.bar.style.position = 'absolute';
        this.bar.style.bottom = '0px';
        this.bar.style.left = '0px';
        this.progress.appendChild(this.bar);
        // Set defaults.
        this.update();
        this.set_bar_style();
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    ProgressView.prototype.update = function () {
        var value = this.model.get('value');
        var max = this.model.get('max');
        var min = this.model.get('min');
        var orientation = this.model.get('orientation');
        var percent = 100.0 * (value - min) / (max - min);
        if (orientation === 'horizontal') {
            this.el.classList.remove('widget-inline-vbox');
            this.el.classList.remove('widget-vprogress');
            this.el.classList.add('widget-inline-hbox');
            this.el.classList.add('widget-hprogress');
            this.bar.style.width = percent + '%';
            this.bar.style.height = '100%';
        }
        else {
            this.el.classList.remove('widget-inline-hbox');
            this.el.classList.remove('widget-hprogress');
            this.el.classList.add('widget-inline-vbox');
            this.el.classList.add('widget-vprogress');
            this.bar.style.width = '100%';
            this.bar.style.height = percent + '%';
        }
        return _super.prototype.update.call(this);
    };
    ProgressView.prototype.update_bar_style = function () {
        this.update_mapped_classes(ProgressView.class_map, 'bar_style', this.bar);
    };
    ProgressView.prototype.set_bar_style = function () {
        this.set_mapped_classes(ProgressView.class_map, 'bar_style', this.bar);
    };
    ProgressView.class_map = {
        success: ['progress-bar-success'],
        info: ['progress-bar-info'],
        warning: ['progress-bar-warning'],
        danger: ['progress-bar-danger']
    };
    return ProgressView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var PlayModel = /** @class */ (function (_super) {
    __extends(PlayModel, _super);
    function PlayModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_5__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'PlayModel',
            _view_name: 'PlayView',
            _playing: false,
            _repeat: false,
            show_repeat: true,
            interval: 100,
            step: 1,
            disabled: false,
        });
    };
    PlayModel.prototype.initialize = function (attributes, options) {
        _super.prototype.initialize.call(this, attributes, options);
    };
    PlayModel.prototype.loop = function () {
        if (this.get('_playing')) {
            var next_value = this.get('value') + this.get('step');
            if (next_value <= this.get('max')) {
                this.set('value', next_value);
                this.schedule_next();
            }
            else {
                if (this.get('_repeat')) {
                    this.set('value', this.get('min'));
                    this.schedule_next();
                }
                else {
                    this.set('_playing', false);
                }
            }
            this.save_changes();
        }
    };
    PlayModel.prototype.schedule_next = function () {
        window.setTimeout(this.loop.bind(this), this.get('interval'));
    };
    PlayModel.prototype.stop = function () {
        this.set('_playing', false);
        this.set('value', this.get('min'));
        this.save_changes();
    };
    PlayModel.prototype.pause = function () {
        this.set('_playing', false);
        this.save_changes();
    };
    PlayModel.prototype.play = function () {
        this.set('_playing', true);
        if (this.get('value') == this.get('max')) {
            // if the value is at the end, reset if first, and then schedule the next
            this.set('value', this.get('min'));
            this.schedule_next();
            this.save_changes();
        }
        else {
            // otherwise directly start with the next value
            // loop will call save_changes in this case
            this.loop();
        }
    };
    PlayModel.prototype.repeat = function () {
        this.set('_repeat', !this.get('_repeat'));
        this.save_changes();
    };
    return PlayModel;
}(BoundedIntModel));

var PlayView = /** @class */ (function (_super) {
    __extends(PlayView, _super);
    function PlayView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-play');
        this.playButton = document.createElement('button');
        this.pauseButton = document.createElement('button');
        this.stopButton = document.createElement('button');
        this.repeatButton = document.createElement('button');
        this.playButton.className = 'jupyter-button';
        this.pauseButton.className = 'jupyter-button';
        this.stopButton.className = 'jupyter-button';
        this.repeatButton.className = 'jupyter-button';
        this.el.appendChild(this.playButton); // Toggle button with playing
        this.el.appendChild(this.pauseButton); // Disable if not playing
        this.el.appendChild(this.stopButton); // Disable if not playing
        this.el.appendChild(this.repeatButton); // Always enabled, but may be hidden
        var playIcon = document.createElement('i');
        playIcon.className = 'fa fa-play';
        this.playButton.appendChild(playIcon);
        var pauseIcon = document.createElement('i');
        pauseIcon.className = 'fa fa-pause';
        this.pauseButton.appendChild(pauseIcon);
        var stopIcon = document.createElement('i');
        stopIcon.className = 'fa fa-stop';
        this.stopButton.appendChild(stopIcon);
        var repeatIcon = document.createElement('i');
        repeatIcon.className = 'fa fa-retweet';
        this.repeatButton.appendChild(repeatIcon);
        this.playButton.onclick = this.model.play.bind(this.model);
        this.pauseButton.onclick = this.model.pause.bind(this.model);
        this.stopButton.onclick = this.model.stop.bind(this.model);
        this.repeatButton.onclick = this.model.repeat.bind(this.model);
        this.listenTo(this.model, 'change:_playing', this.update_playing);
        this.listenTo(this.model, 'change:_repeat', this.update_repeat);
        this.listenTo(this.model, 'change:show_repeat', this.update_repeat);
        this.update_playing();
        this.update_repeat();
        this.update();
    };
    PlayView.prototype.update = function () {
        var disabled = this.model.get('disabled');
        this.playButton.disabled = disabled;
        this.pauseButton.disabled = disabled;
        this.stopButton.disabled = disabled;
        this.repeatButton.disabled = disabled;
        this.update_playing();
    };
    PlayView.prototype.update_playing = function () {
        var playing = this.model.get('_playing');
        var disabled = this.model.get('disabled');
        if (playing) {
            if (!disabled) {
                this.pauseButton.disabled = false;
            }
            this.playButton.classList.add('mod-active');
        }
        else {
            if (!disabled) {
                this.pauseButton.disabled = true;
            }
            this.playButton.classList.remove('mod-active');
        }
    };
    PlayView.prototype.update_repeat = function () {
        var repeat = this.model.get('_repeat');
        this.repeatButton.style.display = this.model.get('show_repeat') ? this.playButton.style.display : 'none';
        if (repeat) {
            this.repeatButton.classList.add('mod-active');
        }
        else {
            this.repeatButton.classList.remove('mod-active');
        }
    };
    return PlayView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_2__["DOMWidgetView"]));



/***/ }),

/***/ "WSRZ":
/*!*******************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_link.js ***!
  \*******************************************************************/
/*! exports provided: DirectionalLinkModel, LinkModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionalLinkModel", function() { return DirectionalLinkModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkModel", function() { return LinkModel; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
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



var DirectionalLinkModel = /** @class */ (function (_super) {
    __extends(DirectionalLinkModel, _super);
    function DirectionalLinkModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DirectionalLinkModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_2__["extend"](_super.prototype.defaults.call(this), {
            target: undefined,
            source: undefined,
            _model_name: 'DirectionalLinkModel'
        });
    };
    DirectionalLinkModel.prototype.initialize = function (attributes, options) {
        _super.prototype.initialize.call(this, attributes, options);
        this.on('change', this.updateBindings, this);
        this.updateBindings();
    };
    DirectionalLinkModel.prototype.updateValue = function (sourceModel, sourceAttr, targetModel, targetAttr) {
        if (this._updating) {
            return;
        }
        this._updating = true;
        try {
            if (targetModel) {
                targetModel.set(targetAttr, sourceModel.get(sourceAttr));
                targetModel.save_changes();
            }
        }
        finally {
            this._updating = false;
        }
    };
    DirectionalLinkModel.prototype.updateBindings = function () {
        var _a, _b;
        var _this = this;
        this.cleanup();
        _a = this.get('source') || [null, null], this.sourceModel = _a[0], this.sourceAttr = _a[1];
        _b = this.get('target') || [null, null], this.targetModel = _b[0], this.targetAttr = _b[1];
        if (this.sourceModel) {
            this.listenTo(this.sourceModel, 'change:' + this.sourceAttr, function () {
                _this.updateValue(_this.sourceModel, _this.sourceAttr, _this.targetModel, _this.targetAttr);
            });
            this.updateValue(this.sourceModel, this.sourceAttr, this.targetModel, this.targetAttr);
            this.listenToOnce(this.sourceModel, 'destroy', this.cleanup);
        }
        if (this.targetModel) {
            this.listenToOnce(this.targetModel, 'destroy', this.cleanup);
        }
    };
    DirectionalLinkModel.prototype.cleanup = function () {
        // Stop listening to 'change' and 'destroy' events of the source and target
        if (this.sourceModel) {
            this.stopListening(this.sourceModel, 'change:' + this.sourceAttr, null);
            this.stopListening(this.sourceModel, 'destroy', null);
        }
        if (this.targetModel) {
            this.stopListening(this.targetModel, 'destroy', null);
        }
    };
    DirectionalLinkModel.serializers = __assign({}, _widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreWidgetModel"].serializers, { target: { deserialize: _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["unpack_models"] }, source: { deserialize: _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["unpack_models"] } });
    return DirectionalLinkModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreWidgetModel"]));

var LinkModel = /** @class */ (function (_super) {
    __extends(LinkModel, _super);
    function LinkModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LinkModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_2__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'LinkModel'
        });
    };
    LinkModel.prototype.updateBindings = function () {
        var _this = this;
        _super.prototype.updateBindings.call(this);
        if (this.targetModel) {
            this.listenTo(this.targetModel, 'change:' + this.targetAttr, function () {
                _this.updateValue(_this.targetModel, _this.targetAttr, _this.sourceModel, _this.sourceAttr);
            });
        }
    };
    LinkModel.prototype.cleanup = function () {
        _super.prototype.cleanup.call(this);
        if (this.targetModel) {
            this.stopListening(this.targetModel, 'change:' + this.targetAttr, null);
        }
    };
    return LinkModel;
}(DirectionalLinkModel));



/***/ }),

/***/ "XIYl":
/*!*********************************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/phosphor/currentselection.js ***!
  \*********************************************************************************/
/*! exports provided: Selection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @phosphor/algorithm */ "rqNV");
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_phosphor_algorithm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @phosphor/signaling */ "qUp9");
/* harmony import */ var _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
/**
 * A variety of convenience methods for maintaining a current selection
 */


var Selection = /** @class */ (function () {
    function Selection(sequence, options) {
        if (options === void 0) { options = {}; }
        this._array = null;
        this._value = null;
        this._previousValue = null;
        this._selectionChanged = new _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__["Signal"](this);
        this._array = sequence;
        this._insertBehavior = options.insertBehavior || 'select-item-if-needed';
        this._removeBehavior = options.removeBehavior || 'select-item-after';
    }
    Object.defineProperty(Selection.prototype, "selectionChanged", {
        /**
         * A signal emitted when the current item is changed.
         *
         * #### Notes
         * This signal is emitted when the currently selected item is changed either
         * through user or programmatic interaction.
         *
         * Notably, this signal is not emitted when the index of the current item
         * changes due to other items being inserted, removed, or moved, but the
         * current item remains the same. It is only emitted when the actual current
         * item is changed.
         */
        get: function () {
            return this._selectionChanged;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adjust for setting an item.
     *
     * This should be called *after* the set.
     *
     * @param index - The index set.
     * @param oldValue - The old value at the index.
     */
    Selection.prototype.adjustSelectionForSet = function (index) {
        // We just need to send a signal if the currentValue changed.
        // Get the current index and value.
        var pi = this.index;
        var pv = this.value;
        // Exit early if this doesn't affect the selection
        if (index !== pi) {
            return;
        }
        this._updateSelectedValue();
        var cv = this.value;
        // The previous item is now null, since it is no longer in the array.
        this._previousValue = null;
        // Send signal if there was a change
        if (pv !== cv) {
            // Emit the current changed signal.
            this._selectionChanged.emit({
                previousIndex: pi, previousValue: pv,
                currentIndex: pi, currentValue: cv
            });
        }
    };
    Object.defineProperty(Selection.prototype, "value", {
        /**
         * Get the currently selected item.
         *
         * #### Notes
         * This will be `null` if no item is selected.
         */
        get: function () {
            return this._value;
        },
        /**
         * Set the currently selected item.
         *
         * #### Notes
         * If the item does not exist in the vector, the currentValue will be set to
         * `null`. This selects the first entry equal to the desired item.
         */
        set: function (value) {
            if (value === null) {
                this.index = null;
            }
            else {
                this.index = _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_0__["ArrayExt"].firstIndexOf(this._array, value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "index", {
        /**
         * Get the index of the currently selected item.
         *
         * #### Notes
         * This will be `null` if no item is selected.
         */
        get: function () {
            return this._index;
        },
        /**
         * Set the index of the currently selected tab.
         *
         * @param index - The index to select.
         *
         * #### Notes
         * If the value is out of range, the index will be set to `null`, which
         * indicates no item is selected.
         */
        set: function (index) {
            // Coerce the value to an index.
            var i;
            if (index !== null) {
                i = Math.floor(index);
                if (i < 0 || i >= this._array.length) {
                    i = null;
                }
            }
            else {
                i = null;
            }
            // Bail early if the index will not change.
            if (this._index === i) {
                return;
            }
            // Look up the previous index and item.
            var pi = this._index;
            var pv = this._value;
            // Update the state
            this._index = i;
            this._updateSelectedValue();
            this._previousValue = pv;
            // Emit the current changed signal.
            this._selectionChanged.emit({
                previousIndex: pi, previousValue: pv,
                currentIndex: i, currentValue: this._value
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "insertBehavior", {
        /**
         * Get the selection behavior when inserting a tab.
         */
        get: function () {
            return this._insertBehavior;
        },
        /**
         * Set the selection behavior when inserting a tab.
         */
        set: function (value) {
            this._insertBehavior = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "removeBehavior", {
        /**
         * Get the selection behavior when removing a tab.
         */
        get: function () {
            return this._removeBehavior;
        },
        /**
         * Set the selection behavior when removing a tab.
         */
        set: function (value) {
            this._removeBehavior = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adjust the current index for a tab insert operation.
     *
     * @param i - The new index of the inserted item.
     * @param j - The inserted item.
     *
     * #### Notes
     * This method accounts for the tab bar's insertion behavior when adjusting
     * the current index and emitting the changed signal. This should be called
     * after the insertion.
     */
    Selection.prototype.adjustSelectionForInsert = function (i, item) {
        // Lookup commonly used variables.
        var cv = this._value;
        var ci = this._index;
        var bh = this._insertBehavior;
        // Handle the behavior where the new item is always selected,
        // or the behavior where the new item is selected if needed.
        if (bh === 'select-item' || (bh === 'select-item-if-needed' && ci === null)) {
            this._index = i;
            this._value = item;
            this._previousValue = cv;
            this._selectionChanged.emit({
                previousIndex: ci, previousValue: cv,
                currentIndex: i, currentValue: item
            });
            return;
        }
        // Otherwise, silently adjust the current index if needed.
        if (ci >= i) {
            this._index++;
        }
    };
    /**
     * Adjust the current index for move operation.
     *
     * @param i - The previous index of the item.
     * @param j - The new index of the item.
     *
     * #### Notes
     * This method will not cause the actual current item to change. It silently
     * adjusts the current index to account for the given move.
     */
    Selection.prototype.adjustSelectionForMove = function (i, j) {
        if (this._index === i) {
            this._index = j;
        }
        else if (this._index < i && this._index >= j) {
            this._index++;
        }
        else if (this._index > i && this._index <= j) {
            this._index--;
        }
    };
    /**
     * Clear the selection and history.
     */
    Selection.prototype.clearSelection = function () {
        // Get the current index and item.
        var pi = this._index;
        var pv = this._value;
        // Reset the current index and previous item.
        this._index = null;
        this._value = null;
        this._previousValue = null;
        // If no item was selected, there's nothing else to do.
        if (pi === null) {
            return;
        }
        // Emit the current changed signal.
        this._selectionChanged.emit({
            previousIndex: pi, previousValue: pv,
            currentIndex: this._index, currentValue: this._value
        });
    };
    /**
     * Adjust the current index for an item remove operation.
     *
     * @param i - The former index of the removed item.
     * @param item - The removed item.
     *
     * #### Notes
     * This method accounts for the remove behavior when adjusting the current
     * index and emitting the changed signal. It should be called after the item
     * is removed.
     */
    Selection.prototype.adjustSelectionForRemove = function (i, item) {
        // Lookup commonly used variables.
        var ci = this._index;
        var bh = this._removeBehavior;
        // Silently adjust the index if the current item is not removed.
        if (ci !== i) {
            if (ci > i) {
                this._index--;
            }
            return;
        }
        // No item gets selected if the vector is empty.
        if (this._array.length === 0) {
            // Reset the current index and previous item.
            this._index = null;
            this._value = null;
            this._previousValue = null;
            this._selectionChanged.emit({
                previousIndex: i, previousValue: item,
                currentIndex: this._index, currentValue: this._value
            });
            return;
        }
        // Handle behavior where the next sibling item is selected.
        if (bh === 'select-item-after') {
            this._index = Math.min(i, this._array.length - 1);
            this._updateSelectedValue();
            this._previousValue = null;
            this._selectionChanged.emit({
                previousIndex: i, previousValue: item,
                currentIndex: this._index, currentValue: this._value
            });
            return;
        }
        // Handle behavior where the previous sibling item is selected.
        if (bh === 'select-item-before') {
            this._index = Math.max(0, i - 1);
            this._updateSelectedValue();
            this._previousValue = null;
            this._selectionChanged.emit({
                previousIndex: i, previousValue: item,
                currentIndex: this._index, currentValue: this._value
            });
            return;
        }
        // Handle behavior where the previous history item is selected.
        if (bh === 'select-previous-item') {
            if (this._previousValue) {
                this.value = this._previousValue;
            }
            else {
                this._index = Math.min(i, this._array.length - 1);
                this._updateSelectedValue();
            }
            this._previousValue = null;
            this._selectionChanged.emit({
                previousIndex: i, previousValue: item,
                currentIndex: this._index, currentValue: this.value
            });
            return;
        }
        // Otherwise, no item gets selected.
        this._index = null;
        this._value = null;
        this._previousValue = null;
        this._selectionChanged.emit({
            previousIndex: i, previousValue: item,
            currentIndex: this._index, currentValue: this._value
        });
    };
    /**
     * Set the current value based on the current index.
     */
    Selection.prototype._updateSelectedValue = function () {
        var i = this._index;
        this._value = i !== null ? this._array[i] : null;
    };
    return Selection;
}());



/***/ }),

/***/ "XPeQ":
/*!*************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/index.js ***!
  \*************************************************************/
/*! exports provided: uuid, WrappedError, resolvePromisesDict, reject, typeset, escape_html, JUPYTER_CONTROLS_VERSION, DirectionalLinkModel, LinkModel, BoolModel, CheckboxModel, CheckboxView, ToggleButtonModel, ToggleButtonView, ValidModel, ValidView, ButtonStyleModel, ButtonModel, ButtonView, BoxModel, HBoxModel, VBoxModel, BoxView, HBoxView, VBoxView, GridBoxView, GridBoxModel, ImageModel, ImageView, VideoModel, VideoView, AudioModel, AudioView, ColorPickerModel, ColorPickerView, serialize_date, deserialize_date, DatePickerModel, DatePickerView, IntModel, BoundedIntModel, SliderStyleModel, IntSliderModel, IntRangeSliderModel, BaseIntSliderView, IntRangeSliderView, IntSliderView, IntTextModel, BoundedIntTextModel, IntTextView, ProgressStyleModel, IntProgressModel, ProgressView, PlayModel, PlayView, FloatModel, BoundedFloatModel, FloatSliderModel, FloatLogSliderModel, FloatRangeSliderModel, FloatSliderView, FloatLogSliderView, FloatRangeSliderView, FloatTextModel, BoundedFloatTextModel, FloatTextView, FloatProgressModel, ControllerButtonModel, ControllerButtonView, ControllerAxisModel, ControllerAxisView, ControllerModel, ControllerView, SelectionModel, DropdownModel, DropdownView, SelectModel, SelectView, RadioButtonsModel, RadioButtonsView, ToggleButtonsStyleModel, ToggleButtonsModel, ToggleButtonsView, SelectionSliderModel, SelectionSliderView, MultipleSelectionModel, SelectMultipleModel, SelectMultipleView, SelectionRangeSliderModel, SelectionRangeSliderView, SelectionContainerModel, AccordionModel, JupyterPhosphorAccordionWidget, AccordionView, TabModel, JupyterPhosphorTabPanelWidget, TabView, StringModel, HTMLModel, HTMLView, HTMLMathModel, HTMLMathView, LabelModel, LabelView, TextareaModel, TextareaView, TextModel, TextView, PasswordModel, PasswordView, ComboboxModel, ComboboxView, DescriptionStyleModel, DescriptionModel, DescriptionView, LabeledDOMWidgetModel, LabeledDOMWidgetView, FileUploadModel, FileUploadView, version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["uuid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WrappedError", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["WrappedError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolvePromisesDict", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["resolvePromisesDict"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["reject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeset", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["typeset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "escape_html", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["escape_html"]; });

/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./version */ "VKie");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JUPYTER_CONTROLS_VERSION", function() { return _version__WEBPACK_IMPORTED_MODULE_1__["JUPYTER_CONTROLS_VERSION"]; });

/* harmony import */ var _widget_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widget_link */ "WSRZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectionalLinkModel", function() { return _widget_link__WEBPACK_IMPORTED_MODULE_2__["DirectionalLinkModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkModel", function() { return _widget_link__WEBPACK_IMPORTED_MODULE_2__["LinkModel"]; });

/* harmony import */ var _widget_bool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widget_bool */ "+RhG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoolModel", function() { return _widget_bool__WEBPACK_IMPORTED_MODULE_3__["BoolModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxModel", function() { return _widget_bool__WEBPACK_IMPORTED_MODULE_3__["CheckboxModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxView", function() { return _widget_bool__WEBPACK_IMPORTED_MODULE_3__["CheckboxView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonModel", function() { return _widget_bool__WEBPACK_IMPORTED_MODULE_3__["ToggleButtonModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonView", function() { return _widget_bool__WEBPACK_IMPORTED_MODULE_3__["ToggleButtonView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidModel", function() { return _widget_bool__WEBPACK_IMPORTED_MODULE_3__["ValidModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidView", function() { return _widget_bool__WEBPACK_IMPORTED_MODULE_3__["ValidView"]; });

/* harmony import */ var _widget_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widget_button */ "JMIS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonStyleModel", function() { return _widget_button__WEBPACK_IMPORTED_MODULE_4__["ButtonStyleModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonModel", function() { return _widget_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonView", function() { return _widget_button__WEBPACK_IMPORTED_MODULE_4__["ButtonView"]; });

/* harmony import */ var _widget_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widget_box */ "jSVB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoxModel", function() { return _widget_box__WEBPACK_IMPORTED_MODULE_5__["BoxModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HBoxModel", function() { return _widget_box__WEBPACK_IMPORTED_MODULE_5__["HBoxModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VBoxModel", function() { return _widget_box__WEBPACK_IMPORTED_MODULE_5__["VBoxModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoxView", function() { return _widget_box__WEBPACK_IMPORTED_MODULE_5__["BoxView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HBoxView", function() { return _widget_box__WEBPACK_IMPORTED_MODULE_5__["HBoxView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VBoxView", function() { return _widget_box__WEBPACK_IMPORTED_MODULE_5__["VBoxView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridBoxView", function() { return _widget_box__WEBPACK_IMPORTED_MODULE_5__["GridBoxView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridBoxModel", function() { return _widget_box__WEBPACK_IMPORTED_MODULE_5__["GridBoxModel"]; });

/* harmony import */ var _widget_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widget_image */ "uhLQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageModel", function() { return _widget_image__WEBPACK_IMPORTED_MODULE_6__["ImageModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageView", function() { return _widget_image__WEBPACK_IMPORTED_MODULE_6__["ImageView"]; });

/* harmony import */ var _widget_video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widget_video */ "abMj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoModel", function() { return _widget_video__WEBPACK_IMPORTED_MODULE_7__["VideoModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoView", function() { return _widget_video__WEBPACK_IMPORTED_MODULE_7__["VideoView"]; });

/* harmony import */ var _widget_audio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widget_audio */ "iBkU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudioModel", function() { return _widget_audio__WEBPACK_IMPORTED_MODULE_8__["AudioModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudioView", function() { return _widget_audio__WEBPACK_IMPORTED_MODULE_8__["AudioView"]; });

/* harmony import */ var _widget_color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widget_color */ "lGQ9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerModel", function() { return _widget_color__WEBPACK_IMPORTED_MODULE_9__["ColorPickerModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerView", function() { return _widget_color__WEBPACK_IMPORTED_MODULE_9__["ColorPickerView"]; });

/* harmony import */ var _widget_date__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./widget_date */ "XZ5k");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serialize_date", function() { return _widget_date__WEBPACK_IMPORTED_MODULE_10__["serialize_date"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deserialize_date", function() { return _widget_date__WEBPACK_IMPORTED_MODULE_10__["deserialize_date"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePickerModel", function() { return _widget_date__WEBPACK_IMPORTED_MODULE_10__["DatePickerModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePickerView", function() { return _widget_date__WEBPACK_IMPORTED_MODULE_10__["DatePickerView"]; });

/* harmony import */ var _widget_int__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./widget_int */ "TtYL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["IntModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoundedIntModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["BoundedIntModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliderStyleModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["SliderStyleModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntSliderModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["IntSliderModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntRangeSliderModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["IntRangeSliderModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseIntSliderView", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["BaseIntSliderView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntRangeSliderView", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["IntRangeSliderView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntSliderView", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["IntSliderView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntTextModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["IntTextModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoundedIntTextModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["BoundedIntTextModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntTextView", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["IntTextView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressStyleModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["ProgressStyleModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntProgressModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["IntProgressModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressView", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["ProgressView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["PlayModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayView", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["PlayView"]; });

/* harmony import */ var _widget_float__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./widget_float */ "xOfY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatModel", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoundedFloatModel", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["BoundedFloatModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatSliderModel", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatSliderModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatLogSliderModel", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatLogSliderModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatRangeSliderModel", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatRangeSliderModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatSliderView", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatSliderView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatLogSliderView", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatLogSliderView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatRangeSliderView", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatRangeSliderView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatTextModel", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatTextModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoundedFloatTextModel", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["BoundedFloatTextModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatTextView", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatTextView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatProgressModel", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatProgressModel"]; });

/* harmony import */ var _widget_controller__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./widget_controller */ "0pQw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerButtonModel", function() { return _widget_controller__WEBPACK_IMPORTED_MODULE_13__["ControllerButtonModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerButtonView", function() { return _widget_controller__WEBPACK_IMPORTED_MODULE_13__["ControllerButtonView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerAxisModel", function() { return _widget_controller__WEBPACK_IMPORTED_MODULE_13__["ControllerAxisModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerAxisView", function() { return _widget_controller__WEBPACK_IMPORTED_MODULE_13__["ControllerAxisView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerModel", function() { return _widget_controller__WEBPACK_IMPORTED_MODULE_13__["ControllerModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerView", function() { return _widget_controller__WEBPACK_IMPORTED_MODULE_13__["ControllerView"]; });

/* harmony import */ var _widget_selection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./widget_selection */ "d61g");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectionModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["DropdownModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownView", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["DropdownView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectView", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonsModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["RadioButtonsModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonsView", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["RadioButtonsView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonsStyleModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["ToggleButtonsStyleModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonsModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["ToggleButtonsModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonsView", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["ToggleButtonsView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionSliderModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectionSliderModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionSliderView", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectionSliderView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultipleSelectionModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["MultipleSelectionModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectMultipleModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleView", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectMultipleView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionRangeSliderModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectionRangeSliderModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionRangeSliderView", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectionRangeSliderView"]; });

/* harmony import */ var _widget_selectioncontainer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./widget_selectioncontainer */ "rCYf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionContainerModel", function() { return _widget_selectioncontainer__WEBPACK_IMPORTED_MODULE_15__["SelectionContainerModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionModel", function() { return _widget_selectioncontainer__WEBPACK_IMPORTED_MODULE_15__["AccordionModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JupyterPhosphorAccordionWidget", function() { return _widget_selectioncontainer__WEBPACK_IMPORTED_MODULE_15__["JupyterPhosphorAccordionWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionView", function() { return _widget_selectioncontainer__WEBPACK_IMPORTED_MODULE_15__["AccordionView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabModel", function() { return _widget_selectioncontainer__WEBPACK_IMPORTED_MODULE_15__["TabModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JupyterPhosphorTabPanelWidget", function() { return _widget_selectioncontainer__WEBPACK_IMPORTED_MODULE_15__["JupyterPhosphorTabPanelWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabView", function() { return _widget_selectioncontainer__WEBPACK_IMPORTED_MODULE_15__["TabView"]; });

/* harmony import */ var _widget_string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./widget_string */ "Y/0+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringModel", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["StringModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLModel", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["HTMLModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLView", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["HTMLView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLMathModel", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["HTMLMathModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLMathView", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["HTMLMathView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelModel", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["LabelModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelView", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["LabelView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextareaModel", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["TextareaModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextareaView", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["TextareaView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextModel", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["TextModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextView", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["TextView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordModel", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["PasswordModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordView", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["PasswordView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComboboxModel", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["ComboboxModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComboboxView", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["ComboboxView"]; });

/* harmony import */ var _widget_description__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./widget_description */ "1OD8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DescriptionStyleModel", function() { return _widget_description__WEBPACK_IMPORTED_MODULE_17__["DescriptionStyleModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DescriptionModel", function() { return _widget_description__WEBPACK_IMPORTED_MODULE_17__["DescriptionModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DescriptionView", function() { return _widget_description__WEBPACK_IMPORTED_MODULE_17__["DescriptionView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabeledDOMWidgetModel", function() { return _widget_description__WEBPACK_IMPORTED_MODULE_17__["LabeledDOMWidgetModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabeledDOMWidgetView", function() { return _widget_description__WEBPACK_IMPORTED_MODULE_17__["LabeledDOMWidgetView"]; });

/* harmony import */ var _widget_upload__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./widget_upload */ "01zH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileUploadModel", function() { return _widget_upload__WEBPACK_IMPORTED_MODULE_18__["FileUploadModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileUploadView", function() { return _widget_upload__WEBPACK_IMPORTED_MODULE_18__["FileUploadView"]; });

// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.



















var version = __webpack_require__(/*! ../package.json */ "iPdL").version;


/***/ }),

/***/ "XZ5k":
/*!*******************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_date.js ***!
  \*******************************************************************/
/*! exports provided: serialize_date, deserialize_date, DatePickerModel, DatePickerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serialize_date", function() { return serialize_date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserialize_date", function() { return deserialize_date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerModel", function() { return DatePickerModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerView", function() { return DatePickerView; });
/* harmony import */ var _widget_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_description */ "1OD8");
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
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




function serialize_date(value) {
    if (value === null) {
        return null;
    }
    else {
        return {
            year: value.getUTCFullYear(),
            month: value.getUTCMonth(),
            date: value.getUTCDate()
        };
    }
}
function deserialize_date(value) {
    if (value === null) {
        return null;
    }
    else {
        var date = new Date();
        date.setUTCFullYear(value.year, value.month, value.date);
        date.setUTCHours(0, 0, 0, 0);
        return date;
    }
}
var DatePickerModel = /** @class */ (function (_super) {
    __extends(DatePickerModel, _super);
    function DatePickerModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatePickerModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            value: null,
            _model_name: 'DatePickerModel',
            _view_name: 'DatePickerView'
        });
    };
    DatePickerModel.serializers = __assign({}, _widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDescriptionModel"].serializers, { value: {
            serialize: serialize_date,
            deserialize: deserialize_date
        } });
    return DatePickerModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDescriptionModel"]));

var DatePickerView = /** @class */ (function (_super) {
    __extends(DatePickerView, _super);
    function DatePickerView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatePickerView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-datepicker');
        this._datepicker = document.createElement('input');
        this._datepicker.setAttribute('type', 'date');
        this._datepicker.id = this.label.htmlFor = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])();
        this.el.appendChild(this._datepicker);
        this.listenTo(this.model, 'change:value', this._update_value);
        this._update_value();
        this.update();
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed. The model may have been
     * changed by another view or by a state update from the back-end.
     */
    DatePickerView.prototype.update = function (options) {
        if (options === undefined || options.updated_view !== this) {
            this._datepicker.disabled = this.model.get('disabled');
        }
        return _super.prototype.update.call(this);
    };
    DatePickerView.prototype.events = function () {
        // Typescript doesn't understand that these functions are called, so we
        // specifically use them here so it knows they are being used.
        void this._picker_change;
        void this._picker_focusout;
        return {
            'change [type="date"]': '_picker_change',
            'focusout [type="date"]': '_picker_focusout'
        };
    };
    DatePickerView.prototype._update_value = function () {
        var value = this.model.get('value');
        this._datepicker.valueAsDate = value;
    };
    DatePickerView.prototype._picker_change = function () {
        if (!this._datepicker.validity.badInput) {
            this.model.set('value', this._datepicker.valueAsDate);
            this.touch();
        }
    };
    DatePickerView.prototype._picker_focusout = function () {
        if (this._datepicker.validity.badInput) {
            this.model.set('value', null);
            this.touch();
        }
    };
    return DatePickerView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_0__["DescriptionView"]));



/***/ }),

/***/ "Y/0+":
/*!*********************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_string.js ***!
  \*********************************************************************/
/*! exports provided: StringModel, HTMLModel, HTMLView, HTMLMathModel, HTMLMathView, LabelModel, LabelView, TextareaModel, TextareaView, TextModel, TextView, PasswordModel, PasswordView, ComboboxModel, ComboboxView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringModel", function() { return StringModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLModel", function() { return HTMLModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLView", function() { return HTMLView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLMathModel", function() { return HTMLMathModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLMathView", function() { return HTMLMathView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelModel", function() { return LabelModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelView", function() { return LabelView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaModel", function() { return TextareaModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaView", function() { return TextareaView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextModel", function() { return TextModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextView", function() { return TextView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordModel", function() { return PasswordModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordView", function() { return PasswordView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboboxModel", function() { return ComboboxModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboboxView", function() { return ComboboxView; });
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _widget_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_description */ "1OD8");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
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




/**
 * Class name for a combobox with an invlid value.
 */
var INVALID_VALUE_CLASS = 'jpwidgets-invalidComboValue';
var StringModel = /** @class */ (function (_super) {
    __extends(StringModel, _super);
    function StringModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            value: '',
            disabled: false,
            placeholder: '\u200b',
            _model_name: 'StringModel'
        });
    };
    return StringModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDescriptionModel"]));

var HTMLModel = /** @class */ (function (_super) {
    __extends(HTMLModel, _super);
    function HTMLModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'HTMLView',
            _model_name: 'HTMLModel'
        });
    };
    return HTMLModel;
}(StringModel));

var HTMLView = /** @class */ (function (_super) {
    __extends(HTMLView, _super);
    function HTMLView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    HTMLView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-html');
        this.content = document.createElement('div');
        this.content.classList.add('widget-html-content');
        this.el.appendChild(this.content);
        this.update(); // Set defaults.
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    HTMLView.prototype.update = function () {
        this.content.innerHTML = this.model.get('value');
        return _super.prototype.update.call(this);
    };
    return HTMLView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var HTMLMathModel = /** @class */ (function (_super) {
    __extends(HTMLMathModel, _super);
    function HTMLMathModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLMathModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'HTMLMathView',
            _model_name: 'HTMLMathModel'
        });
    };
    return HTMLMathModel;
}(StringModel));

var HTMLMathView = /** @class */ (function (_super) {
    __extends(HTMLMathView, _super);
    function HTMLMathView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    HTMLMathView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-htmlmath');
        this.content = document.createElement('div');
        this.content.classList.add('widget-htmlmath-content');
        this.el.appendChild(this.content);
        this.update(); // Set defaults.
    };
    /**
     * Update the contents of this view
     */
    HTMLMathView.prototype.update = function () {
        this.content.innerHTML = this.model.get('value');
        this.typeset(this.content);
        return _super.prototype.update.call(this);
    };
    return HTMLMathView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var LabelModel = /** @class */ (function (_super) {
    __extends(LabelModel, _super);
    function LabelModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LabelModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'LabelView',
            _model_name: 'LabelModel'
        });
    };
    return LabelModel;
}(StringModel));

var LabelView = /** @class */ (function (_super) {
    __extends(LabelView, _super);
    function LabelView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    LabelView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-label');
        this.update(); // Set defaults.
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    LabelView.prototype.update = function () {
        this.typeset(this.el, this.model.get('value'));
        return _super.prototype.update.call(this);
    };
    return LabelView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var TextareaModel = /** @class */ (function (_super) {
    __extends(TextareaModel, _super);
    function TextareaModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextareaModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'TextareaView',
            _model_name: 'TextareaModel',
            rows: null,
            continuous_update: true,
        });
    };
    return TextareaModel;
}(StringModel));

var TextareaView = /** @class */ (function (_super) {
    __extends(TextareaView, _super);
    function TextareaView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    TextareaView.prototype.render = function () {
        var _this = this;
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-textarea');
        this.textbox = document.createElement('textarea');
        this.textbox.setAttribute('rows', '5');
        this.textbox.id = this.label.htmlFor = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])();
        this.el.appendChild(this.textbox);
        this.update(); // Set defaults.
        this.listenTo(this.model, 'change:placeholder', function (model, value, options) {
            _this.update_placeholder(value);
        });
        this.update_placeholder();
    };
    TextareaView.prototype.update_placeholder = function (value) {
        value = value || this.model.get('placeholder');
        this.textbox.setAttribute('placeholder', value.toString());
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    TextareaView.prototype.update = function (options) {
        if (options === undefined || options.updated_view != this) {
            this.textbox.value = this.model.get('value');
            var rows = this.model.get('rows');
            if (rows === null) {
                rows = '';
            }
            this.textbox.setAttribute('rows', rows);
            this.textbox.disabled = this.model.get('disabled');
        }
        return _super.prototype.update.call(this);
    };
    TextareaView.prototype.events = function () {
        return {
            'keydown input': 'handleKeyDown',
            'keypress input': 'handleKeypress',
            'input textarea': 'handleChanging',
            'change textarea': 'handleChanged'
        };
    };
    /**
     * Handle key down
     *
     * Stop propagation so the event isn't sent to the application.
     */
    TextareaView.prototype.handleKeyDown = function (e) {
        e.stopPropagation();
    };
    /**
     * Handles key press
     *
     * Stop propagation so the keypress isn't sent to the application.
     */
    TextareaView.prototype.handleKeypress = function (e) {
        e.stopPropagation();
    };
    /**
     * Triggered on input change
     */
    TextareaView.prototype.handleChanging = function (e) {
        if (this.model.get('continuous_update')) {
            this.handleChanged(e);
        }
    };
    /**
     * Sync the value with the kernel.
     *
     * @param e Event
     */
    TextareaView.prototype.handleChanged = function (e) {
        var target = e.target;
        this.model.set('value', target.value, { updated_view: this });
        this.touch();
    };
    return TextareaView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var TextModel = /** @class */ (function (_super) {
    __extends(TextModel, _super);
    function TextModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'TextView',
            _model_name: 'TextModel',
            continuous_update: true,
        });
    };
    return TextModel;
}(StringModel));

var TextView = /** @class */ (function (_super) {
    __extends(TextView, _super);
    function TextView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputType = 'text';
        return _this;
    }
    /**
     * Called when view is rendered.
     */
    TextView.prototype.render = function () {
        var _this = this;
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-text');
        this.textbox = document.createElement('input');
        this.textbox.setAttribute('type', this.inputType);
        this.textbox.id = this.label.htmlFor = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])();
        this.el.appendChild(this.textbox);
        this.update(); // Set defaults.
        this.listenTo(this.model, 'change:placeholder', function (model, value, options) {
            _this.update_placeholder(value);
        });
        this.listenTo(this.model, 'change:description_tooltip', this.update_title);
        this.listenTo(this.model, 'change:description', this.update_title);
        this.update_placeholder();
        this.update_title();
    };
    TextView.prototype.update_placeholder = function (value) {
        this.textbox.setAttribute('placeholder', value || this.model.get('placeholder'));
    };
    TextView.prototype.update_title = function () {
        var title = this.model.get('description_tooltip');
        if (!title) {
            this.textbox.removeAttribute('title');
        }
        else if (this.model.get('description').length === 0) {
            this.textbox.setAttribute('title', title);
        }
    };
    TextView.prototype.update = function (options) {
        /**
         * Update the contents of this view
         *
         * Called when the model is changed.  The model may have been
         * changed by another view or by a state update from the back-end.
         */
        if (options === undefined || options.updated_view !== this) {
            if (this.textbox.value !== this.model.get('value')) {
                this.textbox.value = this.model.get('value');
            }
            this.textbox.disabled = this.model.get('disabled');
        }
        return _super.prototype.update.call(this);
    };
    TextView.prototype.events = function () {
        return {
            'keydown input': 'handleKeyDown',
            'keypress input': 'handleKeypress',
            'input input': 'handleChanging',
            'change input': 'handleChanged'
        };
    };
    /**
     * Handle key down
     *
     * Stop propagation so the keypress isn't sent to the application.
     */
    TextView.prototype.handleKeyDown = function (e) {
        e.stopPropagation();
    };
    /**
     * Handles text submission
     */
    TextView.prototype.handleKeypress = function (e) {
        e.stopPropagation();
        // The submit message is deprecated in widgets 7
        if (e.keyCode === 13) { // Return key
            this.send({ event: 'submit' });
        }
    };
    /**
     * Handles user input.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    TextView.prototype.handleChanging = function (e) {
        if (this.model.get('continuous_update')) {
            this.handleChanged(e);
        }
    };
    /**
     * Handles user input.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    TextView.prototype.handleChanged = function (e) {
        var target = e.target;
        this.model.set('value', target.value, { updated_view: this });
        this.touch();
    };
    return TextView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var PasswordModel = /** @class */ (function (_super) {
    __extends(PasswordModel, _super);
    function PasswordModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PasswordModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'PasswordView',
            _model_name: 'PasswordModel'
        });
    };
    return PasswordModel;
}(TextModel));

var PasswordView = /** @class */ (function (_super) {
    __extends(PasswordView, _super);
    function PasswordView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputType = 'password';
        return _this;
    }
    return PasswordView;
}(TextView));

/**
 * Combobox widget model class.
 */
var ComboboxModel = /** @class */ (function (_super) {
    __extends(ComboboxModel, _super);
    function ComboboxModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComboboxModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'ComboboxModel', _view_name: 'ComboboxView', options: [], ensure_options: false });
    };
    return ComboboxModel;
}(TextModel));

/**
 * Combobox widget view class.
 */
var ComboboxView = /** @class */ (function (_super) {
    __extends(ComboboxView, _super);
    function ComboboxView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isInitialRender = true;
        return _this;
    }
    ComboboxView.prototype.render = function () {
        this.datalist = document.createElement('datalist');
        this.datalist.id = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])();
        _super.prototype.render.call(this);
        this.textbox.setAttribute('list', this.datalist.id);
        this.el.appendChild(this.datalist);
    };
    ComboboxView.prototype.update = function (options) {
        _super.prototype.update.call(this, options);
        if (!this.datalist) {
            return;
        }
        var valid = this.isValid(this.model.get('value'));
        this.highlightValidState(valid);
        // Check if we need to update options
        if ((options !== undefined && options.updated_view) || (!this.model.hasChanged('options') &&
            !this.isInitialRender)) {
            // Value update only, keep current options
            return;
        }
        this.isInitialRender = false;
        var opts = this.model.get('options');
        var optLines = opts.map(function (o) {
            return "<option value=\"" + o + "\"></option>";
        });
        this.datalist.innerHTML = optLines.join('\n');
    };
    ComboboxView.prototype.isValid = function (value) {
        if (true === this.model.get('ensure_option')) {
            var options = this.model.get('options');
            if (options.indexOf(value) === -1) {
                return false;
            }
        }
        return true;
    };
    ComboboxView.prototype.handleChanging = function (e) {
        // Override to validate value
        var target = e.target;
        var valid = this.isValid(target.value);
        this.highlightValidState(valid);
        if (valid) {
            _super.prototype.handleChanging.call(this, e);
        }
    };
    ComboboxView.prototype.handleChanged = function (e) {
        // Override to validate value
        var target = e.target;
        var valid = this.isValid(target.value);
        this.highlightValidState(valid);
        if (valid) {
            _super.prototype.handleChanged.call(this, e);
        }
    };
    ComboboxView.prototype.highlightValidState = function (valid) {
        this.textbox.classList.toggle(INVALID_VALUE_CLASS, !valid);
    };
    return ComboboxView;
}(TextView));



/***/ }),

/***/ "abMj":
/*!********************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_video.js ***!
  \********************************************************************/
/*! exports provided: VideoModel, VideoView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoModel", function() { return VideoModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoView", function() { return VideoView; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
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



var VideoModel = /** @class */ (function (_super) {
    __extends(VideoModel, _super);
    function VideoModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_2__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'VideoModel',
            _view_name: 'VideoView',
            format: 'mp4',
            width: '',
            height: '',
            autoplay: true,
            loop: true,
            controls: true,
            value: new DataView(new ArrayBuffer(0))
        });
    };
    VideoModel.serializers = __assign({}, _widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"].serializers, { value: { serialize: function (value) {
                return new DataView(value.buffer.slice(0));
            } } });
    return VideoModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"]));

var VideoView = /** @class */ (function (_super) {
    __extends(VideoView, _super);
    function VideoView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoView.prototype.render = function () {
        /**
         * Called when view is rendered.
         */
        _super.prototype.render.call(this);
        this.pWidget.addClass('jupyter-widgets');
        this.pWidget.addClass('widget-image');
        this.update(); // Set defaults.
    };
    VideoView.prototype.update = function () {
        /**
         * Update the contents of this view
         *
         * Called when the model is changed.  The model may have been
         * changed by another view or by a state update from the back-end.
         */
        var url;
        var format = this.model.get('format');
        var value = this.model.get('value');
        if (format !== 'url') {
            var blob = new Blob([value], { type: "video/" + this.model.get('format') });
            url = URL.createObjectURL(blob);
        }
        else {
            url = (new TextDecoder('utf-8')).decode(value.buffer);
        }
        // Clean up the old objectURL
        var oldurl = this.el.src;
        this.el.src = url;
        if (oldurl && typeof oldurl !== 'string') {
            URL.revokeObjectURL(oldurl);
        }
        // Height and width
        var width = this.model.get('width');
        if (width !== undefined && width.length > 0) {
            this.el.setAttribute('width', width);
        }
        else {
            this.el.removeAttribute('width');
        }
        var height = this.model.get('height');
        if (height !== undefined && height.length > 0) {
            this.el.setAttribute('height', height);
        }
        else {
            this.el.removeAttribute('height');
        }
        // Video attributes
        this.el.loop = this.model.get('loop');
        this.el.autoplay = this.model.get('autoplay');
        this.el.controls = this.model.get('controls');
        return _super.prototype.update.call(this);
    };
    VideoView.prototype.remove = function () {
        if (this.el.src) {
            URL.revokeObjectURL(this.el.src);
        }
        _super.prototype.remove.call(this);
    };
    Object.defineProperty(VideoView.prototype, "tagName", {
        /**
         * The default tag name.
         *
         * #### Notes
         * This is a read-only attribute.
         */
        get: function () {
            // We can't make this an attribute with a default value
            // since it would be set after it is needed in the
            // constructor.
            return 'video';
        },
        enumerable: true,
        configurable: true
    });
    return VideoView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetView"]));



/***/ }),

/***/ "d61g":
/*!************************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_selection.js ***!
  \************************************************************************/
/*! exports provided: SelectionModel, DropdownModel, DropdownView, SelectModel, SelectView, RadioButtonsModel, RadioButtonsView, ToggleButtonsStyleModel, ToggleButtonsModel, ToggleButtonsView, SelectionSliderModel, SelectionSliderView, MultipleSelectionModel, SelectMultipleModel, SelectMultipleView, SelectionRangeSliderModel, SelectionRangeSliderView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionModel", function() { return SelectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownModel", function() { return DropdownModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownView", function() { return DropdownView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectModel", function() { return SelectModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectView", function() { return SelectView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonsModel", function() { return RadioButtonsModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonsView", function() { return RadioButtonsView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonsStyleModel", function() { return ToggleButtonsStyleModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonsModel", function() { return ToggleButtonsModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonsView", function() { return ToggleButtonsView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionSliderModel", function() { return SelectionSliderModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionSliderView", function() { return SelectionSliderView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleSelectionModel", function() { return MultipleSelectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleModel", function() { return SelectMultipleModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleView", function() { return SelectMultipleView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionRangeSliderModel", function() { return SelectionRangeSliderModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionRangeSliderView", function() { return SelectionRangeSliderView; });
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _widget_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_description */ "1OD8");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
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






var SelectionModel = /** @class */ (function (_super) {
    __extends(SelectionModel, _super);
    function SelectionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectionModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'SelectionModel', index: '', _options_labels: [], disabled: false });
    };
    return SelectionModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDescriptionModel"]));

var DropdownModel = /** @class */ (function (_super) {
    __extends(DropdownModel, _super);
    function DropdownModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'DropdownModel', _view_name: 'DropdownView', button_style: '' });
    };
    return DropdownModel;
}(SelectionModel));

// TODO: Make a phosphor dropdown control, wrapped in DropdownView. Also, fix
// bugs in keyboard handling. See
// https://github.com/jupyter-widgets/ipywidgets/issues/1055 and
// https://github.com/jupyter-widgets/ipywidgets/issues/1049
// For now, we subclass SelectView to provide DropdownView
// For the old code, see commit f68bfbc566f3a78a8f3350b438db8ed523ce3642
var DropdownView = /** @class */ (function (_super) {
    __extends(DropdownView, _super);
    function DropdownView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Public constructor.
     */
    DropdownView.prototype.initialize = function (parameters) {
        var _this = this;
        _super.prototype.initialize.call(this, parameters);
        this.listenTo(this.model, 'change:_options_labels', function () { return _this._updateOptions(); });
    };
    /**
     * Called when view is rendered.
     */
    DropdownView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-dropdown');
        this.listbox = document.createElement('select');
        this.listbox.id = this.label.htmlFor = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])();
        this.el.appendChild(this.listbox);
        this._updateOptions();
        this.update();
    };
    /**
     * Update the contents of this view
     */
    DropdownView.prototype.update = function () {
        // Disable listbox if needed
        this.listbox.disabled = this.model.get('disabled');
        // Select the correct element
        var index = this.model.get('index');
        this.listbox.selectedIndex = index === null ? -1 : index;
        return _super.prototype.update.call(this);
    };
    DropdownView.prototype._updateOptions = function () {
        this.listbox.textContent = '';
        var items = this.model.get('_options_labels');
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var option = document.createElement('option');
            option.textContent = item.replace(/ /g, '\xa0'); // space -> &nbsp;
            option.setAttribute('data-value', encodeURIComponent(item));
            option.value = item;
            this.listbox.appendChild(option);
        }
    };
    DropdownView.prototype.events = function () {
        return {
            'change select': '_handle_change'
        };
    };
    /**
     * Handle when a new value is selected.
     */
    DropdownView.prototype._handle_change = function () {
        this.model.set('index', this.listbox.selectedIndex === -1 ? null : this.listbox.selectedIndex);
        this.touch();
    };
    return DropdownView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var SelectModel = /** @class */ (function (_super) {
    __extends(SelectModel, _super);
    function SelectModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'SelectModel', _view_name: 'SelectView', rows: 5 });
    };
    return SelectModel;
}(SelectionModel));

var SelectView = /** @class */ (function (_super) {
    __extends(SelectView, _super);
    function SelectView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Public constructor.
     */
    SelectView.prototype.initialize = function (parameters) {
        var _this = this;
        _super.prototype.initialize.call(this, parameters);
        this.listenTo(this.model, 'change:_options_labels', function () { return _this._updateOptions(); });
        this.listenTo(this.model, 'change:index', function (model, value, options) { return _this.updateSelection(options); });
        // Create listbox here so that subclasses can modify it before it is populated in render()
        this.listbox = document.createElement('select');
    };
    /**
     * Called when view is rendered.
     */
    SelectView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-select');
        this.listbox.id = this.label.htmlFor = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])();
        this.el.appendChild(this.listbox);
        this._updateOptions();
        this.update();
        this.updateSelection();
    };
    /**
     * Update the contents of this view
     */
    SelectView.prototype.update = function () {
        _super.prototype.update.call(this);
        this.listbox.disabled = this.model.get('disabled');
        var rows = this.model.get('rows');
        if (rows === null) {
            rows = '';
        }
        this.listbox.setAttribute('size', rows);
    };
    SelectView.prototype.updateSelection = function (options) {
        if (options === void 0) { options = {}; }
        if (options.updated_view === this) {
            return;
        }
        var index = this.model.get('index');
        this.listbox.selectedIndex = index === null ? -1 : index;
    };
    SelectView.prototype._updateOptions = function () {
        this.listbox.textContent = '';
        var items = this.model.get('_options_labels');
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var option = document.createElement('option');
            option.textContent = item.replace(/ /g, '\xa0'); // space -> &nbsp;
            option.setAttribute('data-value', encodeURIComponent(item));
            option.value = item;
            this.listbox.appendChild(option);
        }
    };
    SelectView.prototype.events = function () {
        return {
            'change select': '_handle_change'
        };
    };
    /**
     * Handle when a new value is selected.
     */
    SelectView.prototype._handle_change = function () {
        this.model.set('index', this.listbox.selectedIndex, { updated_view: this });
        this.touch();
    };
    return SelectView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var RadioButtonsModel = /** @class */ (function (_super) {
    __extends(RadioButtonsModel, _super);
    function RadioButtonsModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadioButtonsModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'RadioButtonsModel', _view_name: 'RadioButtonsView', tooltips: [], icons: [], button_style: '' });
    };
    return RadioButtonsModel;
}(SelectionModel));

var RadioButtonsView = /** @class */ (function (_super) {
    __extends(RadioButtonsView, _super);
    function RadioButtonsView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    RadioButtonsView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-radio');
        this.container = document.createElement('div');
        this.el.appendChild(this.container);
        this.container.classList.add('widget-radio-box');
        this.update();
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    RadioButtonsView.prototype.update = function (options) {
        var view = this;
        var items = this.model.get('_options_labels');
        var radios = underscore__WEBPACK_IMPORTED_MODULE_3__["pluck"](this.container.querySelectorAll('input[type="radio"]'), 'value');
        var stale = items.length != radios.length;
        if (!stale) {
            for (var i = 0, len = items.length; i < len; ++i) {
                if (radios[i] !== items[i]) {
                    stale = true;
                    break;
                }
            }
        }
        if (stale && (options === undefined || options.updated_view !== this)) {
            // Add items to the DOM.
            this.container.textContent = '';
            items.forEach(function (item, index) {
                var label = document.createElement('label');
                label.textContent = item;
                view.container.appendChild(label);
                var radio = document.createElement('input');
                radio.setAttribute('type', 'radio');
                radio.value = index.toString();
                radio.setAttribute('data-value', encodeURIComponent(item));
                label.appendChild(radio);
            });
        }
        items.forEach(function (item, index) {
            var item_query = 'input[data-value="' +
                encodeURIComponent(item) + '"]';
            var radio = view.container.querySelectorAll(item_query);
            if (radio.length > 0) {
                var radio_el = radio[0];
                radio_el.checked = view.model.get('index') === index;
                radio_el.disabled = view.model.get('disabled');
            }
        });
        // Schedule adjustPadding asynchronously to
        // allow dom elements to be created properly
        setTimeout(this.adjustPadding, 0, this);
        return _super.prototype.update.call(this, options);
    };
    /**
     * Adjust Padding to Multiple of Line Height
     *
     * Adjust margins so that the overall height
     * is a multiple of a single line height.
     *
     * This widget needs it because radio options
     * are spaced tighter than individual widgets
     * yet we would like the full widget line up properly
     * when displayed side-by-side with other widgets.
     */
    RadioButtonsView.prototype.adjustPadding = function (e) {
        // Vertical margins on a widget
        var elStyles = window.getComputedStyle(e.el);
        var margins = parseInt(elStyles.marginTop, 10) + parseInt(elStyles.marginBottom, 10);
        // Total spaces taken by a single-line widget
        var lineHeight = e.label.offsetHeight + margins;
        // Current adjustment value on this widget
        var cStyles = window.getComputedStyle(e.container);
        var containerMargin = parseInt(cStyles.marginBottom);
        // How far we are off from a multiple of single windget lines
        var diff = (e.el.offsetHeight + margins - containerMargin) % lineHeight;
        // Apply the new adjustment
        var extraMargin = diff == 0 ? 0 : (lineHeight - diff);
        e.container.style.marginBottom = extraMargin + 'px';
    };
    RadioButtonsView.prototype.events = function () {
        return {
            'click input[type="radio"]': '_handle_click'
        };
    };
    /**
     * Handle when a value is clicked.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    RadioButtonsView.prototype._handle_click = function (event) {
        var target = event.target;
        this.model.set('index', parseInt(target.value), { updated_view: this });
        this.touch();
    };
    return RadioButtonsView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var ToggleButtonsStyleModel = /** @class */ (function (_super) {
    __extends(ToggleButtonsStyleModel, _super);
    function ToggleButtonsStyleModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToggleButtonsStyleModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'ToggleButtonsStyleModel',
        });
    };
    ToggleButtonsStyleModel.styleProperties = __assign({}, _widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyleModel"].styleProperties, { button_width: {
            selector: '.widget-toggle-button',
            attribute: 'width',
            default: null
        }, font_weight: {
            selector: '.widget-toggle-button',
            attribute: 'font-weight',
            default: ''
        } });
    return ToggleButtonsStyleModel;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyleModel"]));

var ToggleButtonsModel = /** @class */ (function (_super) {
    __extends(ToggleButtonsModel, _super);
    function ToggleButtonsModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToggleButtonsModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'ToggleButtonsModel', _view_name: 'ToggleButtonsView' });
    };
    return ToggleButtonsModel;
}(SelectionModel));

var ToggleButtonsView = /** @class */ (function (_super) {
    __extends(ToggleButtonsView, _super);
    function ToggleButtonsView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToggleButtonsView.prototype.initialize = function (options) {
        this._css_state = {};
        _super.prototype.initialize.call(this, options);
        this.listenTo(this.model, 'change:button_style', this.update_button_style);
    };
    /**
     * Called when view is rendered.
     */
    ToggleButtonsView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-toggle-buttons');
        this.buttongroup = document.createElement('div');
        this.el.appendChild(this.buttongroup);
        this.update();
        this.set_button_style();
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    ToggleButtonsView.prototype.update = function (options) {
        var view = this;
        var items = this.model.get('_options_labels');
        var icons = this.model.get('icons') || [];
        var previous_icons = this.model.previous('icons') || [];
        var previous_bstyle = ToggleButtonsView.classMap[this.model.previous('button_style')] || '';
        var tooltips = view.model.get('tooltips') || [];
        var disabled = this.model.get('disabled');
        var buttons = this.buttongroup.querySelectorAll('button');
        var values = underscore__WEBPACK_IMPORTED_MODULE_3__["pluck"](buttons, 'value');
        var stale = false;
        for (var i = 0, len = items.length; i < len; ++i) {
            if (values[i] !== items[i] || icons[i] !== previous_icons[i]) {
                stale = true;
                break;
            }
        }
        if (stale && (options === undefined || options.updated_view !== this)) {
            // Add items to the DOM.
            this.buttongroup.textContent = '';
            items.forEach(function (item, index) {
                var item_html;
                var empty = item.trim().length === 0 &&
                    (!icons[index] || icons[index].trim().length === 0);
                if (empty) {
                    item_html = '&nbsp;';
                }
                else {
                    item_html = _utils__WEBPACK_IMPORTED_MODULE_2__["escape_html"](item);
                }
                var icon = document.createElement('i');
                var button = document.createElement('button');
                if (icons[index]) {
                    icon.className = 'fa fa-' + icons[index];
                }
                button.setAttribute('type', 'button');
                button.className = 'widget-toggle-button jupyter-button';
                if (previous_bstyle) {
                    button.classList.add(previous_bstyle);
                }
                button.innerHTML = item_html;
                button.setAttribute('data-value', encodeURIComponent(item));
                button.setAttribute('value', index.toString());
                button.appendChild(icon);
                button.disabled = disabled;
                if (tooltips[index]) {
                    button.setAttribute('title', tooltips[index]);
                }
                view.update_style_traits(button);
                view.buttongroup.appendChild(button);
            });
        }
        // Select active button.
        items.forEach(function (item, index) {
            var item_query = '[data-value="' + encodeURIComponent(item) + '"]';
            var button = view.buttongroup.querySelector(item_query);
            if (view.model.get('index') === index) {
                button.classList.add('mod-active');
            }
            else {
                button.classList.remove('mod-active');
            }
        });
        this.stylePromise.then(function (style) {
            if (style) {
                style.style();
            }
        });
        return _super.prototype.update.call(this, options);
    };
    ToggleButtonsView.prototype.update_style_traits = function (button) {
        for (var name_1 in this._css_state) {
            if (this._css_state.hasOwnProperty(name_1)) {
                if (name_1 === 'margin') {
                    this.buttongroup.style[name_1] = this._css_state[name_1];
                }
                else if (name_1 !== 'width') {
                    if (button) {
                        button.style[name_1] = this._css_state[name_1];
                    }
                    else {
                        var buttons = this.buttongroup
                            .querySelectorAll('button');
                        if (buttons.length) {
                            (buttons[0]).style[name_1] = this._css_state[name_1];
                        }
                    }
                }
            }
        }
    };
    ToggleButtonsView.prototype.update_button_style = function () {
        var buttons = this.buttongroup.querySelectorAll('button');
        for (var i = 0; i < buttons.length; i++) {
            this.update_mapped_classes(ToggleButtonsView.classMap, 'button_style', buttons[i]);
        }
    };
    ToggleButtonsView.prototype.set_button_style = function () {
        var buttons = this.buttongroup.querySelectorAll('button');
        for (var i = 0; i < buttons.length; i++) {
            this.set_mapped_classes(ToggleButtonsView.classMap, 'button_style', buttons[i]);
        }
    };
    ToggleButtonsView.prototype.events = function () {
        return {
            'click button': '_handle_click'
        };
    };
    /**
     * Handle when a value is clicked.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    ToggleButtonsView.prototype._handle_click = function (event) {
        var target = event.target;
        this.model.set('index', parseInt(target.value, 10), { updated_view: this });
        this.touch();
        // We also send a clicked event, since the value is only set if it changed.
        // See https://github.com/jupyter-widgets/ipywidgets/issues/763
        this.send({ event: 'click' });
    };
    return ToggleButtonsView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

(function (ToggleButtonsView) {
    ToggleButtonsView.classMap = {
        primary: ['mod-primary'],
        success: ['mod-success'],
        info: ['mod-info'],
        warning: ['mod-warning'],
        danger: ['mod-danger']
    };
})(ToggleButtonsView || (ToggleButtonsView = {}));
var SelectionSliderModel = /** @class */ (function (_super) {
    __extends(SelectionSliderModel, _super);
    function SelectionSliderModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectionSliderModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'SelectionSliderModel', _view_name: 'SelectionSliderView', orientation: 'horizontal', readout: true, continuous_update: true });
    };
    return SelectionSliderModel;
}(SelectionModel));

var SelectionSliderView = /** @class */ (function (_super) {
    __extends(SelectionSliderView, _super);
    function SelectionSliderView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    SelectionSliderView.prototype.render = function () {
        var _this = this;
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-hslider');
        this.el.classList.add('widget-slider');
        (this.$slider = jquery__WEBPACK_IMPORTED_MODULE_4___default()('<div />'))
            .slider({
            slide: this.handleSliderChange.bind(this),
            stop: this.handleSliderChanged.bind(this)
        })
            .addClass('slider');
        // Put the slider in a container
        this.slider_container = document.createElement('div');
        this.slider_container.classList.add('slider-container');
        this.slider_container.appendChild(this.$slider[0]);
        this.el.appendChild(this.slider_container);
        this.readout = document.createElement('div');
        this.el.appendChild(this.readout);
        this.readout.classList.add('widget-readout');
        this.readout.style.display = 'none';
        this.listenTo(this.model, 'change:slider_color', function (sender, value) {
            _this.$slider.find('a').css('background', value);
        });
        this.$slider.find('a').css('background', this.model.get('slider_color'));
        // Set defaults.
        this.update();
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    SelectionSliderView.prototype.update = function (options) {
        if (options === undefined || options.updated_view !== this) {
            var labels = this.model.get('_options_labels');
            var max = labels.length - 1;
            var min = 0;
            this.$slider.slider('option', 'step', 1);
            this.$slider.slider('option', 'max', max);
            this.$slider.slider('option', 'min', min);
            // WORKAROUND FOR JQUERY SLIDER BUG.
            // The horizontal position of the slider handle
            // depends on the value of the slider at the time
            // of orientation change.  Before applying the new
            // workaround, we set the value to the minimum to
            // make sure that the horizontal placement of the
            // handle in the vertical slider is always
            // consistent.
            var orientation_1 = this.model.get('orientation');
            this.$slider.slider('option', 'value', min);
            this.$slider.slider('option', 'orientation', orientation_1);
            var disabled = this.model.get('disabled');
            this.$slider.slider('option', 'disabled', disabled);
            if (disabled) {
                this.readout.contentEditable = 'false';
            }
            else {
                this.readout.contentEditable = 'true';
            }
            // Use the right CSS classes for vertical & horizontal sliders
            if (orientation_1 === 'vertical') {
                this.el.classList.remove('widget-hslider');
                this.el.classList.remove('widget-inline-hbox');
                this.el.classList.add('widget-vslider');
                this.el.classList.add('widget-inline-vbox');
            }
            else {
                this.el.classList.remove('widget-vslider');
                this.el.classList.remove('widget-inline-vbox');
                this.el.classList.add('widget-hslider');
                this.el.classList.add('widget-inline-hbox');
            }
            var readout = this.model.get('readout');
            if (readout) {
                // this.$readout.show();
                this.readout.style.display = '';
            }
            else {
                // this.$readout.hide();
                this.readout.style.display = 'none';
            }
            this.updateSelection();
        }
        return _super.prototype.update.call(this, options);
    };
    SelectionSliderView.prototype.events = function () {
        return {
            'slide': 'handleSliderChange',
            'slidestop': 'handleSliderChanged'
        };
    };
    SelectionSliderView.prototype.updateSelection = function () {
        var index = this.model.get('index');
        this.$slider.slider('option', 'value', index);
        this.updateReadout(index);
    };
    SelectionSliderView.prototype.updateReadout = function (index) {
        var value = this.model.get('_options_labels')[index];
        this.readout.textContent = value;
    };
    /**
     * Called when the slider value is changing.
     */
    SelectionSliderView.prototype.handleSliderChange = function (e, ui) {
        this.updateReadout(ui.value);
        // Only persist the value while sliding if the continuous_update
        // trait is set to true.
        if (this.model.get('continuous_update')) {
            this.handleSliderChanged(e, ui);
        }
    };
    /**
     * Called when the slider value has changed.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    SelectionSliderView.prototype.handleSliderChanged = function (e, ui) {
        this.updateReadout(ui.value);
        this.model.set('index', ui.value, { updated_view: this });
        this.touch();
    };
    return SelectionSliderView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var MultipleSelectionModel = /** @class */ (function (_super) {
    __extends(MultipleSelectionModel, _super);
    function MultipleSelectionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultipleSelectionModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'MultipleSelectionModel' });
    };
    return MultipleSelectionModel;
}(SelectionModel));

var SelectMultipleModel = /** @class */ (function (_super) {
    __extends(SelectMultipleModel, _super);
    function SelectMultipleModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectMultipleModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'SelectMultipleModel', _view_name: 'SelectMultipleView', rows: null });
    };
    return SelectMultipleModel;
}(MultipleSelectionModel));

var SelectMultipleView = /** @class */ (function (_super) {
    __extends(SelectMultipleView, _super);
    function SelectMultipleView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Public constructor.
     */
    SelectMultipleView.prototype.initialize = function (parameters) {
        _super.prototype.initialize.call(this, parameters);
        this.listbox.multiple = true;
    };
    /**
     * Called when view is rendered.
     */
    SelectMultipleView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('widget-select-multiple');
    };
    SelectMultipleView.prototype.updateSelection = function (options) {
        if (options === void 0) { options = {}; }
        if (options.updated_view === this) {
            return;
        }
        var selected = this.model.get('index') || [];
        var listboxOptions = this.listbox.options;
        // Clear the selection
        this.listbox.selectedIndex = -1;
        // Select the appropriate options
        selected.forEach(function (i) {
            listboxOptions[i].selected = true;
        });
    };
    /**
     * Handle when a new value is selected.
     */
    SelectMultipleView.prototype._handle_change = function () {
        var index = Array.prototype.map
            .call(this.listbox.selectedOptions || [], function (option) {
            return option.index;
        });
        this.model.set('index', index, { updated_view: this });
        this.touch();
    };
    return SelectMultipleView;
}(SelectView));

var SelectionRangeSliderModel = /** @class */ (function (_super) {
    __extends(SelectionRangeSliderModel, _super);
    function SelectionRangeSliderModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectionRangeSliderModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'SelectionSliderModel', _view_name: 'SelectionSliderView', orientation: 'horizontal', readout: true, continuous_update: true });
    };
    return SelectionRangeSliderModel;
}(MultipleSelectionModel));

var SelectionRangeSliderView = /** @class */ (function (_super) {
    __extends(SelectionRangeSliderView, _super);
    function SelectionRangeSliderView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    SelectionRangeSliderView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.$slider.slider('option', 'range', true);
    };
    SelectionRangeSliderView.prototype.updateSelection = function () {
        var index = this.model.get('index');
        this.$slider.slider('option', 'values', index.slice());
        this.updateReadout(index);
    };
    SelectionRangeSliderView.prototype.updateReadout = function (index) {
        var labels = this.model.get('_options_labels');
        var minValue = labels[index[0]];
        var maxValue = labels[index[1]];
        this.readout.textContent = minValue + "-" + maxValue;
    };
    /**
     * Called when the slider value is changing.
     */
    SelectionRangeSliderView.prototype.handleSliderChange = function (e, ui) {
        this.updateReadout(ui.values);
        // Only persist the value while sliding if the continuous_update
        // trait is set to true.
        if (this.model.get('continuous_update')) {
            this.handleSliderChanged(e, ui);
        }
    };
    /**
     * Called when the slider value has changed.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    SelectionRangeSliderView.prototype.handleSliderChanged = function (e, ui) {
        // The jqueryui documentation indicates ui.values doesn't exist on the slidestop event,
        // but it appears that it actually does: https://github.com/jquery/jquery-ui/blob/ae31f2b3b478975f70526bdf3299464b9afa8bb1/ui/widgets/slider.js#L313
        this.updateReadout(ui.values);
        this.model.set('index', ui.values.slice(), { updated_view: this });
        this.touch();
    };
    return SelectionRangeSliderView;
}(SelectionSliderView));



/***/ }),

/***/ "dpys":
/*!*************************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/phosphor/tabpanel.js ***!
  \*************************************************************************/
/*! exports provided: EventedPanel, TabPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventedPanel", function() { return EventedPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPanel", function() { return TabPanel; });
/* harmony import */ var _phosphor_messaging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @phosphor/messaging */ "hpl1");
/* harmony import */ var _phosphor_messaging__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_phosphor_messaging__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @phosphor/signaling */ "qUp9");
/* harmony import */ var _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _phosphor_domutils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @phosphor/domutils */ "XWTc");
/* harmony import */ var _phosphor_domutils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_phosphor_domutils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @phosphor/widgets */ "pif5");
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_3__);
/* This file has code derived from PhosphorJS. The license for this PhosphorJS code is:

Copyright (c) 2014-2017, PhosphorJS Contributors
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * A panel where visible widgets are stacked atop one another.
 *
 * #### Notes
 * This class provides a convenience wrapper around a [[PanelLayout]].
 */
var EventedPanel = /** @class */ (function (_super) {
    __extends(EventedPanel, _super);
    function EventedPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._widgetRemoved = new _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__["Signal"](_this);
        return _this;
    }
    Object.defineProperty(EventedPanel.prototype, "widgetRemoved", {
        /**
         * A signal emitted when a widget is removed from the panel.
         */
        get: function () {
            return this._widgetRemoved;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * A message handler invoked on a `'child-removed'` message.
     */
    EventedPanel.prototype.onChildRemoved = function (msg) {
        this._widgetRemoved.emit(msg.child);
    };
    return EventedPanel;
}(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_3__["Panel"]));

/**
 * A widget which combines a `TabBar` and a `EventedPanel`.
 *
 * #### Notes
 * This is a simple panel which handles the common case of a tab bar
 * placed next to a content area. The selected tab controls the widget
 * which is shown in the content area.
 *
 * For use cases which require more control than is provided by this
 * panel, the `TabBar` widget may be used independently.
 *
 * TODO: Support setting the direction??
 */
var TabPanel = /** @class */ (function (_super) {
    __extends(TabPanel, _super);
    /**
     * Construct a new tab panel.
     *
     * @param options - The options for initializing the tab panel.
     */
    function TabPanel(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        _this._currentChanged = new _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__["Signal"](_this);
        _this.addClass('p-TabPanel');
        // Create the tab bar and contents panel.
        _this.tabBar = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_3__["TabBar"](options);
        _this.tabBar.addClass('p-TabPanel-tabBar');
        _this.tabContents = new EventedPanel();
        _this.tabContents.addClass('p-TabPanel-tabContents');
        // Connect the tab bar signal handlers.
        _this.tabBar.tabMoved.connect(_this._onTabMoved, _this);
        _this.tabBar.currentChanged.connect(_this._onCurrentChanged, _this);
        _this.tabBar.tabCloseRequested.connect(_this._onTabCloseRequested, _this);
        _this.tabBar.tabActivateRequested.connect(_this._onTabActivateRequested, _this);
        // Connect the evented panel signal handlers.
        _this.tabContents.widgetRemoved.connect(_this._onWidgetRemoved, _this);
        // Create the layout.
        var layout = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_3__["PanelLayout"]();
        // Add the child widgets to the layout.
        layout.addWidget(_this.tabBar);
        layout.addWidget(_this.tabContents);
        // Install the layout on the tab panel.
        _this.layout = layout;
        return _this;
    }
    Object.defineProperty(TabPanel.prototype, "currentChanged", {
        /**
         * A signal emitted when the current tab is changed.
         *
         * #### Notes
         * This signal is emitted when the currently selected tab is changed
         * either through user or programmatic interaction.
         *
         * Notably, this signal is not emitted when the index of the current
         * tab changes due to tabs being inserted, removed, or moved. It is
         * only emitted when the actual current tab node is changed.
         */
        get: function () {
            return this._currentChanged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabPanel.prototype, "currentIndex", {
        /**
         * Get the index of the currently selected tab.
         *
         * #### Notes
         * This will be `null` if no tab is selected.
         */
        get: function () {
            var currentIndex = this.tabBar.currentIndex;
            // Phosphor tab bars have an index of -1 if no tab is selected
            return (currentIndex === -1 ? null : currentIndex);
        },
        /**
         * Set the index of the currently selected tab.
         *
         * #### Notes
         * If the index is out of range, it will be set to `null`.
         */
        set: function (value) {
            this.tabBar.currentIndex = (value === null ? -1 : value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabPanel.prototype, "currentWidget", {
        /**
         * Get the currently selected widget.
         *
         * #### Notes
         * This will be `null` if there is no selected tab.
         */
        get: function () {
            var title = this.tabBar.currentTitle;
            return title ? title.owner : null;
        },
        /**
         * Set the currently selected widget.
         *
         * #### Notes
         * If the widget is not in the panel, it will be set to `null`.
         */
        set: function (value) {
            this.tabBar.currentTitle = value ? value.title : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabPanel.prototype, "tabsMovable", {
        /**
         * Get the whether the tabs are movable by the user.
         *
         * #### Notes
         * Tabs can always be moved programmatically.
         */
        get: function () {
            return this.tabBar.tabsMovable;
        },
        /**
         * Set the whether the tabs are movable by the user.
         *
         * #### Notes
         * Tabs can always be moved programmatically.
         */
        set: function (value) {
            this.tabBar.tabsMovable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabPanel.prototype, "widgets", {
        /**
         * A read-only array of the widgets in the panel.
         */
        get: function () {
            return this.tabContents.widgets;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Add a widget to the end of the tab panel.
     *
     * @param widget - The widget to add to the tab panel.
     *
     * #### Notes
     * If the widget is already contained in the panel, it will be moved.
     *
     * The widget's `title` is used to populate the tab.
     */
    TabPanel.prototype.addWidget = function (widget) {
        this.insertWidget(this.widgets.length, widget);
    };
    /**
     * Insert a widget into the tab panel at a specified index.
     *
     * @param index - The index at which to insert the widget.
     *
     * @param widget - The widget to insert into to the tab panel.
     *
     * #### Notes
     * If the widget is already contained in the panel, it will be moved.
     *
     * The widget's `title` is used to populate the tab.
     */
    TabPanel.prototype.insertWidget = function (index, widget) {
        if (widget !== this.currentWidget) {
            widget.hide();
        }
        this.tabContents.insertWidget(index, widget);
        this.tabBar.insertTab(index, widget.title);
    };
    /**
     * Handle the `currentChanged` signal from the tab bar.
     */
    TabPanel.prototype._onCurrentChanged = function (sender, args) {
        // Extract the previous and current title from the args.
        var previousIndex = args.previousIndex, previousTitle = args.previousTitle, currentIndex = args.currentIndex, currentTitle = args.currentTitle;
        // Extract the widgets from the titles.
        var previousWidget = previousTitle ? previousTitle.owner : null;
        var currentWidget = currentTitle ? currentTitle.owner : null;
        // Hide the previous widget.
        if (previousWidget) {
            previousWidget.hide();
        }
        // Show the current widget.
        if (currentWidget) {
            currentWidget.show();
        }
        // Emit the `currentChanged` signal for the tab panel.
        this._currentChanged.emit({
            previousIndex: previousIndex, previousWidget: previousWidget, currentIndex: currentIndex, currentWidget: currentWidget
        });
        // Flush the message loop on IE and Edge to prevent flicker.
        if (_phosphor_domutils__WEBPACK_IMPORTED_MODULE_2__["Platform"].IS_EDGE || _phosphor_domutils__WEBPACK_IMPORTED_MODULE_2__["Platform"].IS_IE) {
            _phosphor_messaging__WEBPACK_IMPORTED_MODULE_0__["MessageLoop"].flush();
        }
    };
    /**
     * Handle the `tabActivateRequested` signal from the tab bar.
     */
    TabPanel.prototype._onTabActivateRequested = function (sender, args) {
        args.title.owner.activate();
    };
    /**
     * Handle the `tabCloseRequested` signal from the tab bar.
     */
    TabPanel.prototype._onTabCloseRequested = function (sender, args) {
        args.title.owner.close();
    };
    /**
     * Handle the `tabMoved` signal from the tab bar.
     */
    TabPanel.prototype._onTabMoved = function (sender, args) {
        this.tabContents.insertWidget(args.toIndex, args.title.owner);
    };
    /**
     * Handle the `widgetRemoved` signal from the stacked panel.
     */
    TabPanel.prototype._onWidgetRemoved = function (sender, widget) {
        this.tabBar.removeTab(widget.title);
    };
    return TabPanel;
}(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_3__["Widget"]));



/***/ }),

/***/ "iBkU":
/*!********************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_audio.js ***!
  \********************************************************************/
/*! exports provided: AudioModel, AudioView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioModel", function() { return AudioModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioView", function() { return AudioView; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
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



var AudioModel = /** @class */ (function (_super) {
    __extends(AudioModel, _super);
    function AudioModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AudioModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_2__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'AudioModel',
            _view_name: 'AudioView',
            format: 'mp3',
            autoplay: true,
            loop: true,
            controls: true,
            value: new DataView(new ArrayBuffer(0))
        });
    };
    AudioModel.serializers = __assign({}, _widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"].serializers, { value: { serialize: function (value) {
                return new DataView(value.buffer.slice(0));
            } } });
    return AudioModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"]));

var AudioView = /** @class */ (function (_super) {
    __extends(AudioView, _super);
    function AudioView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AudioView.prototype.render = function () {
        /**
         * Called when view is rendered.
         */
        _super.prototype.render.call(this);
        this.pWidget.addClass('jupyter-widgets');
        this.update(); // Set defaults.
    };
    AudioView.prototype.update = function () {
        /**
         * Update the contents of this view
         *
         * Called when the model is changed.  The model may have been
         * changed by another view or by a state update from the back-end.
         */
        var url;
        var format = this.model.get('format');
        var value = this.model.get('value');
        if (format !== 'url') {
            var blob = new Blob([value], { type: "audio/" + this.model.get('format') });
            url = URL.createObjectURL(blob);
        }
        else {
            url = (new TextDecoder('utf-8')).decode(value.buffer);
        }
        // Clean up the old objectURL
        var oldurl = this.el.src;
        this.el.src = url;
        if (oldurl && typeof oldurl !== 'string') {
            URL.revokeObjectURL(oldurl);
        }
        // Audio attributes
        this.el.loop = this.model.get('loop');
        this.el.autoplay = this.model.get('autoplay');
        this.el.controls = this.model.get('controls');
        return _super.prototype.update.call(this);
    };
    AudioView.prototype.remove = function () {
        if (this.el.src) {
            URL.revokeObjectURL(this.el.src);
        }
        _super.prototype.remove.call(this);
    };
    Object.defineProperty(AudioView.prototype, "tagName", {
        /**
         * The default tag name.
         *
         * #### Notes
         * This is a read-only attribute.
         */
        get: function () {
            // We can't make this an attribute with a default value
            // since it would be set after it is needed in the
            // constructor.
            return 'audio';
        },
        enumerable: true,
        configurable: true
    });
    return AudioView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetView"]));



/***/ }),

/***/ "iGnl":
/*!****************************************************!*\
  !*** ./node_modules/jquery-ui/ui/widgets/mouse.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Mouse
//>>group: Widgets
//>>description: Abstracts mouse-based interactions to assist in creating certain widgets.
//>>docs: http://api.jqueryui.com/mouse/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(/*! jquery */ "EVdn"),
			__webpack_require__(/*! ../ie */ "NHgk"),
			__webpack_require__(/*! ../version */ "Qwlt"),
			__webpack_require__(/*! ../widget */ "MIQu")
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}( function( $ ) {

var mouseHandled = false;
$( document ).on( "mouseup", function() {
	mouseHandled = false;
} );

return $.widget( "ui.mouse", {
	version: "1.12.1",
	options: {
		cancel: "input, textarea, button, select, option",
		distance: 1,
		delay: 0
	},
	_mouseInit: function() {
		var that = this;

		this.element
			.on( "mousedown." + this.widgetName, function( event ) {
				return that._mouseDown( event );
			} )
			.on( "click." + this.widgetName, function( event ) {
				if ( true === $.data( event.target, that.widgetName + ".preventClickEvent" ) ) {
					$.removeData( event.target, that.widgetName + ".preventClickEvent" );
					event.stopImmediatePropagation();
					return false;
				}
			} );

		this.started = false;
	},

	// TODO: make sure destroying one instance of mouse doesn't mess with
	// other instances of mouse
	_mouseDestroy: function() {
		this.element.off( "." + this.widgetName );
		if ( this._mouseMoveDelegate ) {
			this.document
				.off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
				.off( "mouseup." + this.widgetName, this._mouseUpDelegate );
		}
	},

	_mouseDown: function( event ) {

		// don't let more than one widget handle mouseStart
		if ( mouseHandled ) {
			return;
		}

		this._mouseMoved = false;

		// We may have missed mouseup (out of window)
		( this._mouseStarted && this._mouseUp( event ) );

		this._mouseDownEvent = event;

		var that = this,
			btnIsLeft = ( event.which === 1 ),

			// event.target.nodeName works around a bug in IE 8 with
			// disabled inputs (#7620)
			elIsCancel = ( typeof this.options.cancel === "string" && event.target.nodeName ?
				$( event.target ).closest( this.options.cancel ).length : false );
		if ( !btnIsLeft || elIsCancel || !this._mouseCapture( event ) ) {
			return true;
		}

		this.mouseDelayMet = !this.options.delay;
		if ( !this.mouseDelayMet ) {
			this._mouseDelayTimer = setTimeout( function() {
				that.mouseDelayMet = true;
			}, this.options.delay );
		}

		if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
			this._mouseStarted = ( this._mouseStart( event ) !== false );
			if ( !this._mouseStarted ) {
				event.preventDefault();
				return true;
			}
		}

		// Click event may never have fired (Gecko & Opera)
		if ( true === $.data( event.target, this.widgetName + ".preventClickEvent" ) ) {
			$.removeData( event.target, this.widgetName + ".preventClickEvent" );
		}

		// These delegates are required to keep context
		this._mouseMoveDelegate = function( event ) {
			return that._mouseMove( event );
		};
		this._mouseUpDelegate = function( event ) {
			return that._mouseUp( event );
		};

		this.document
			.on( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.on( "mouseup." + this.widgetName, this._mouseUpDelegate );

		event.preventDefault();

		mouseHandled = true;
		return true;
	},

	_mouseMove: function( event ) {

		// Only check for mouseups outside the document if you've moved inside the document
		// at least once. This prevents the firing of mouseup in the case of IE<9, which will
		// fire a mousemove event if content is placed under the cursor. See #7778
		// Support: IE <9
		if ( this._mouseMoved ) {

			// IE mouseup check - mouseup happened when mouse was out of window
			if ( $.ui.ie && ( !document.documentMode || document.documentMode < 9 ) &&
					!event.button ) {
				return this._mouseUp( event );

			// Iframe mouseup check - mouseup occurred in another document
			} else if ( !event.which ) {

				// Support: Safari <=8 - 9
				// Safari sets which to 0 if you press any of the following keys
				// during a drag (#14461)
				if ( event.originalEvent.altKey || event.originalEvent.ctrlKey ||
						event.originalEvent.metaKey || event.originalEvent.shiftKey ) {
					this.ignoreMissingWhich = true;
				} else if ( !this.ignoreMissingWhich ) {
					return this._mouseUp( event );
				}
			}
		}

		if ( event.which || event.button ) {
			this._mouseMoved = true;
		}

		if ( this._mouseStarted ) {
			this._mouseDrag( event );
			return event.preventDefault();
		}

		if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
			this._mouseStarted =
				( this._mouseStart( this._mouseDownEvent, event ) !== false );
			( this._mouseStarted ? this._mouseDrag( event ) : this._mouseUp( event ) );
		}

		return !this._mouseStarted;
	},

	_mouseUp: function( event ) {
		this.document
			.off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.off( "mouseup." + this.widgetName, this._mouseUpDelegate );

		if ( this._mouseStarted ) {
			this._mouseStarted = false;

			if ( event.target === this._mouseDownEvent.target ) {
				$.data( event.target, this.widgetName + ".preventClickEvent", true );
			}

			this._mouseStop( event );
		}

		if ( this._mouseDelayTimer ) {
			clearTimeout( this._mouseDelayTimer );
			delete this._mouseDelayTimer;
		}

		this.ignoreMissingWhich = false;
		mouseHandled = false;
		event.preventDefault();
	},

	_mouseDistanceMet: function( event ) {
		return ( Math.max(
				Math.abs( this._mouseDownEvent.pageX - event.pageX ),
				Math.abs( this._mouseDownEvent.pageY - event.pageY )
			) >= this.options.distance
		);
	},

	_mouseDelayMet: function( /* event */ ) {
		return this.mouseDelayMet;
	},

	// These are placeholder methods, to be overriden by extending plugin
	_mouseStart: function( /* event */ ) {},
	_mouseDrag: function( /* event */ ) {},
	_mouseStop: function( /* event */ ) {},
	_mouseCapture: function( /* event */ ) { return true; }
} );

} ) );


/***/ }),

/***/ "iPdL":
/*!*************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/package.json ***!
  \*************************************************************/
/*! exports provided: name, version, description, repository, license, author, files, main, typings, scripts, dependencies, devDependencies, gitHead, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"@jupyter-widgets/controls\",\"version\":\"1.5.3\",\"description\":\"Jupyter interactive widgets\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/jupyter-widgets/ipywidgets.git\"},\"license\":\"BSD-3-Clause\",\"author\":\"Project Jupyter\",\"files\":[\"lib/**/*.d.ts\",\"lib/**/*.js\",\"css/*.css\",\"dist/\"],\"main\":\"lib/index.js\",\"typings\":\"lib/index.d.ts\",\"scripts\":{\"build\":\"npm run build:src && npm run build:css\",\"build:css\":\"postcss --use postcss-import --use postcss-cssnext -o css/widgets.built.css css/widgets.css\",\"build:src\":\"tsc\",\"build:test\":\"tsc --project test && webpack --config test/webpack.conf.js\",\"clean\":\"npm run clean:src\",\"clean:src\":\"rimraf lib && rimraf tsconfig.tsbuildinfo\",\"lint\":\"tslint --project tslint.json --format stylish\",\"prepublish\":\"npm run clean && npm run build\",\"test\":\"npm run test:unit\",\"test:coverage\":\"npm run build:test && webpack --config test/webpack-cov.conf.js && karma start test/karma-cov.conf.js\",\"test:unit\":\"npm run test:unit:firefox && npm run test:unit:chrome\",\"test:unit:chrome\":\"npm run test:unit:default -- --browsers=Chrome\",\"test:unit:default\":\"npm run build:test && karma start test/karma.conf.js --log-level debug\",\"test:unit:firefox\":\"npm run test:unit:default -- --browsers=Firefox\",\"test:unit:ie\":\"npm run test:unit:default -- --browsers=IE\"},\"dependencies\":{\"@jupyter-widgets/base\":\"^2.0.2\",\"@phosphor/algorithm\":\"^1.1.0\",\"@phosphor/domutils\":\"^1.1.0\",\"@phosphor/messaging\":\"^1.2.1\",\"@phosphor/signaling\":\"^1.2.0\",\"@phosphor/widgets\":\"^1.3.0\",\"d3-format\":\"^1.3.0\",\"jquery\":\"^3.1.1\",\"jquery-ui\":\"^1.12.1\",\"underscore\":\"^1.8.3\"},\"devDependencies\":{\"@jupyterlab/services\":\"^2.0.0 || ^3.0.0 || ^4.0.0\",\"@types/d3-format\":\"^1.3.1\",\"@types/expect.js\":\"^0.3.29\",\"@types/mathjax\":\"^0.0.35\",\"@types/mocha\":\"^5.2.7\",\"@types/node\":\"^12.0.10\",\"chai\":\"^4.0.0\",\"css-loader\":\"^3.0.0\",\"expect.js\":\"^0.3.1\",\"file-loader\":\"^4.0.0\",\"istanbul-instrumenter-loader\":\"^3.0.1\",\"json-loader\":\"^0.5.7\",\"karma\":\"^4.1.0\",\"karma-chrome-launcher\":\"^2.2.0\",\"karma-coverage\":\"^1.1.2\",\"karma-firefox-launcher\":\"^1.1.0\",\"karma-ie-launcher\":\"^1.0.0\",\"karma-mocha\":\"^1.3.0\",\"karma-mocha-reporter\":\"^2.2.5\",\"karma-webpack\":\"^4.0.2\",\"mocha\":\"^6.1.4\",\"npm-run-all\":\"^4.1.5\",\"postcss-cli\":\"^6.1.2\",\"postcss-cssnext\":\"^3.1.0\",\"postcss-import\":\"^12.0.1\",\"postcss-loader\":\"^3.0.0\",\"rimraf\":\"^2.6.1\",\"sinon\":\"^7.3.2\",\"sinon-chai\":\"^3.3.0\",\"style-loader\":\"^0.23.1\",\"tslint\":\"^5.18.0\",\"typescript\":\"~3.5.2\",\"url-loader\":\"^2.0.0\",\"webpack\":\"^4.35.0\"},\"gitHead\":\"92d7d42c00a1b0d9ce921533acb08beefdea3eb2\"}");

/***/ }),

/***/ "jSVB":
/*!******************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_box.js ***!
  \******************************************************************/
/*! exports provided: BoxModel, HBoxModel, VBoxModel, BoxView, HBoxView, VBoxView, GridBoxView, GridBoxModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxModel", function() { return BoxModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HBoxModel", function() { return HBoxModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VBoxModel", function() { return VBoxModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxView", function() { return BoxView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HBoxView", function() { return HBoxView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VBoxView", function() { return VBoxView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridBoxView", function() { return GridBoxView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridBoxModel", function() { return GridBoxModel; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @phosphor/algorithm */ "rqNV");
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _phosphor_messaging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @phosphor/messaging */ "hpl1");
/* harmony import */ var _phosphor_messaging__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_phosphor_messaging__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @phosphor/widgets */ "pif5");
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
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








var BoxModel = /** @class */ (function (_super) {
    __extends(BoxModel, _super);
    function BoxModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoxModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_6__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'BoxView',
            _model_name: 'BoxModel',
            children: [],
            box_style: ''
        });
    };
    BoxModel.serializers = __assign({}, _widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"].serializers, { children: { deserialize: _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["unpack_models"] } });
    return BoxModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"]));

var HBoxModel = /** @class */ (function (_super) {
    __extends(HBoxModel, _super);
    function HBoxModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HBoxModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_6__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'HBoxView',
            _model_name: 'HBoxModel',
        });
    };
    return HBoxModel;
}(BoxModel));

var VBoxModel = /** @class */ (function (_super) {
    __extends(VBoxModel, _super);
    function VBoxModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VBoxModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_6__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'VBoxView',
            _model_name: 'VBoxModel',
        });
    };
    return VBoxModel;
}(BoxModel));

var BoxView = /** @class */ (function (_super) {
    __extends(BoxView, _super);
    function BoxView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoxView.prototype._createElement = function (tagName) {
        this.pWidget = new _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["JupyterPhosphorPanelWidget"]({ view: this });
        return this.pWidget.node;
    };
    BoxView.prototype._setElement = function (el) {
        if (this.el || el !== this.pWidget.node) {
            // Boxes don't allow setting the element beyond the initial creation.
            throw new Error('Cannot reset the DOM element.');
        }
        this.el = this.pWidget.node;
        this.$el = jquery__WEBPACK_IMPORTED_MODULE_7___default()(this.pWidget.node);
    };
    BoxView.prototype.initialize = function (parameters) {
        _super.prototype.initialize.call(this, parameters);
        this.children_views = new _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["ViewList"](this.add_child_model, null, this);
        this.listenTo(this.model, 'change:children', this.update_children);
        this.listenTo(this.model, 'change:box_style', this.update_box_style);
        this.pWidget.addClass('jupyter-widgets');
        this.pWidget.addClass('widget-container');
        this.pWidget.addClass('widget-box');
    };
    BoxView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.update_children();
        this.set_box_style();
    };
    BoxView.prototype.update_children = function () {
        this.children_views.update(this.model.get('children')).then(function (views) {
            // Notify all children that their sizes may have changed.
            views.forEach(function (view) {
                _phosphor_messaging__WEBPACK_IMPORTED_MODULE_4__["MessageLoop"].postMessage(view.pWidget, _phosphor_widgets__WEBPACK_IMPORTED_MODULE_5__["Widget"].ResizeMessage.UnknownSize);
            });
        });
    };
    BoxView.prototype.update_box_style = function () {
        this.update_mapped_classes(BoxView.class_map, 'box_style');
    };
    BoxView.prototype.set_box_style = function () {
        this.set_mapped_classes(BoxView.class_map, 'box_style');
    };
    BoxView.prototype.add_child_model = function (model) {
        var _this = this;
        // we insert a dummy element so the order is preserved when we add
        // the rendered content later.
        var dummy = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_5__["Widget"]();
        this.pWidget.addWidget(dummy);
        return this.create_child_view(model).then(function (view) {
            // replace the dummy widget with the new one.
            var i = _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3__["ArrayExt"].firstIndexOf(_this.pWidget.widgets, dummy);
            _this.pWidget.insertWidget(i, view.pWidget);
            dummy.dispose();
            return view;
        }).catch(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["reject"])('Could not add child view to box', true));
    };
    BoxView.prototype.remove = function () {
        this.children_views = null;
        _super.prototype.remove.call(this);
    };
    BoxView.class_map = {
        success: ['alert', 'alert-success'],
        info: ['alert', 'alert-info'],
        warning: ['alert', 'alert-warning'],
        danger: ['alert', 'alert-danger']
    };
    return BoxView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetView"]));

var HBoxView = /** @class */ (function (_super) {
    __extends(HBoxView, _super);
    function HBoxView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Public constructor
     */
    HBoxView.prototype.initialize = function (parameters) {
        _super.prototype.initialize.call(this, parameters);
        this.pWidget.addClass('widget-hbox');
    };
    return HBoxView;
}(BoxView));

var VBoxView = /** @class */ (function (_super) {
    __extends(VBoxView, _super);
    function VBoxView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Public constructor
     */
    VBoxView.prototype.initialize = function (parameters) {
        _super.prototype.initialize.call(this, parameters);
        this.pWidget.addClass('widget-vbox');
    };
    return VBoxView;
}(BoxView));

var GridBoxView = /** @class */ (function (_super) {
    __extends(GridBoxView, _super);
    function GridBoxView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Public constructor
     */
    GridBoxView.prototype.initialize = function (parameters) {
        _super.prototype.initialize.call(this, parameters);
        this.pWidget.addClass('widget-gridbox');
        // display needn't be set to flex and grid 
        this.pWidget.removeClass('widget-box');
    };
    return GridBoxView;
}(BoxView));

var GridBoxModel = /** @class */ (function (_super) {
    __extends(GridBoxModel, _super);
    function GridBoxModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridBoxModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_6__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'GridBoxView',
            _model_name: 'GridBoxModel',
        });
    };
    return GridBoxModel;
}(BoxModel));



/***/ }),

/***/ "kds9":
/*!**************************************************!*\
  !*** ./node_modules/d3-format/src/formatTrim.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
/* harmony default export */ __webpack_exports__["default"] = (function(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
});


/***/ }),

/***/ "lGQ9":
/*!********************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_color.js ***!
  \********************************************************************/
/*! exports provided: ColorPickerModel, ColorPickerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerModel", function() { return ColorPickerModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerView", function() { return ColorPickerView; });
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _widget_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_description */ "1OD8");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ColorPickerModel = /** @class */ (function (_super) {
    __extends(ColorPickerModel, _super);
    function ColorPickerModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorPickerModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            value: 'black',
            concise: false,
            _model_name: 'ColorPickerModel',
            _view_name: 'ColorPickerView'
        });
    };
    return ColorPickerModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDescriptionModel"]));

var ColorPickerView = /** @class */ (function (_super) {
    __extends(ColorPickerView, _super);
    function ColorPickerView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorPickerView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-colorpicker');
        this._color_container = document.createElement('div');
        this._color_container.className = 'widget-inline-hbox widget-colorpicker-input';
        this.el.appendChild(this._color_container);
        this._textbox = document.createElement('input');
        this._textbox.setAttribute('type', 'text');
        this._textbox.id = this.label.htmlFor = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])();
        this._color_container.appendChild(this._textbox);
        this._textbox.value = this.model.get('value');
        this._colorpicker = document.createElement('input');
        this._colorpicker.setAttribute('type', 'color');
        this._color_container.appendChild(this._colorpicker);
        this.listenTo(this.model, 'change:value', this._update_value);
        this.listenTo(this.model, 'change:concise', this._update_concise);
        this._update_concise();
        this._update_value();
        this.update();
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed. The model may have been
     * changed by another view or by a state update from the back-end.
     */
    ColorPickerView.prototype.update = function (options) {
        if (options === undefined || options.updated_view != this) {
            var disabled = this.model.get('disabled');
            this._textbox.disabled = disabled;
            this._colorpicker.disabled = disabled;
        }
        return _super.prototype.update.call(this);
    };
    ColorPickerView.prototype.events = function () {
        // Typescript doesn't understand that these functions are called, so we
        // specifically use them here so it knows they are being used.
        void this._picker_change;
        void this._text_change;
        return {
            'change [type="color"]': '_picker_change',
            'change [type="text"]': '_text_change'
        };
    };
    ColorPickerView.prototype._update_value = function () {
        var value = this.model.get('value');
        this._colorpicker.value = color2hex(value);
        this._textbox.value = value;
    };
    ColorPickerView.prototype._update_concise = function () {
        var concise = this.model.get('concise');
        if (concise) {
            this.el.classList.add('concise');
            this._textbox.style.display = 'none';
        }
        else {
            this.el.classList.remove('concise');
            this._textbox.style.display = '';
        }
    };
    ColorPickerView.prototype._picker_change = function () {
        this.model.set('value', this._colorpicker.value);
        this.touch();
    };
    ColorPickerView.prototype._text_change = function () {
        var value = this._validate_color(this._textbox.value, this.model.get('value'));
        this.model.set('value', value);
        this.touch();
    };
    ColorPickerView.prototype._validate_color = function (color, fallback) {
        return color.match(/#[a-fA-F0-9]{3}(?:[a-fA-F0-9]{3})?$/) ||
            named_colors[color.toLowerCase()] ? color : fallback;
    };
    return ColorPickerView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var named_colors = { aliceblue: '#f0f8ff', antiquewhite: '#faebd7', aqua: '#00ffff', aquamarine: '#7fffd4', azure: '#f0ffff', beige: '#f5f5dc', bisque: '#ffe4c4', black: '#000000', blanchedalmond: '#ffebcd', blue: '#0000ff', blueviolet: '#8a2be2', brown: '#a52a2a', burlywood: '#deb887', cadetblue: '#5f9ea0', chartreuse: '#7fff00', chocolate: '#d2691e', coral: '#ff7f50', cornflowerblue: '#6495ed', cornsilk: '#fff8dc', crimson: '#dc143c', cyan: '#00ffff', darkblue: '#00008b', darkcyan: '#008b8b', darkgoldenrod: '#b8860b', darkgray: '#a9a9a9', darkgrey: '#a9a9a9', darkgreen: '#006400', darkkhaki: '#bdb76b', darkmagenta: '#8b008b', darkolivegreen: '#556b2f', darkorange: '#ff8c00', darkorchid: '#9932cc', darkred: '#8b0000', darksalmon: '#e9967a', darkseagreen: '#8fbc8f', darkslateblue: '#483d8b', darkslategray: '#2f4f4f', darkslategrey: '#2f4f4f', darkturquoise: '#00ced1', darkviolet: '#9400d3', deeppink: '#ff1493', deepskyblue: '#00bfff', dimgray: '#696969', dimgrey: '#696969', dodgerblue: '#1e90ff', firebrick: '#b22222', floralwhite: '#fffaf0', forestgreen: '#228b22', fuchsia: '#ff00ff', gainsboro: '#dcdcdc', ghostwhite: '#f8f8ff', gold: '#ffd700', goldenrod: '#daa520', gray: '#808080', grey: '#808080', green: '#008000', greenyellow: '#adff2f', honeydew: '#f0fff0', hotpink: '#ff69b4', indianred: '#cd5c5c', indigo: '#4b0082', ivory: '#fffff0', khaki: '#f0e68c', lavender: '#e6e6fa', lavenderblush: '#fff0f5', lawngreen: '#7cfc00', lemonchiffon: '#fffacd', lightblue: '#add8e6', lightcoral: '#f08080', lightcyan: '#e0ffff', lightgoldenrodyellow: '#fafad2', lightgreen: '#90ee90', lightgray: '#d3d3d3', lightgrey: '#d3d3d3', lightpink: '#ffb6c1', lightsalmon: '#ffa07a', lightseagreen: '#20b2aa', lightskyblue: '#87cefa', lightslategray: '#778899', lightslategrey: '#778899', lightsteelblue: '#b0c4de', lightyellow: '#ffffe0', lime: '#00ff00', limegreen: '#32cd32', linen: '#faf0e6', magenta: '#ff00ff', maroon: '#800000', mediumaquamarine: '#66cdaa', mediumblue: '#0000cd', mediumorchid: '#ba55d3', mediumpurple: '#9370db', mediumseagreen: '#3cb371', mediumslateblue: '#7b68ee', mediumspringgreen: '#00fa9a', mediumturquoise: '#48d1cc', mediumvioletred: '#c71585', midnightblue: '#191970', mintcream: '#f5fffa', mistyrose: '#ffe4e1', moccasin: '#ffe4b5', navajowhite: '#ffdead', navy: '#000080', oldlace: '#fdf5e6', olive: '#808000', olivedrab: '#6b8e23', orange: '#ffa500', orangered: '#ff4500', orchid: '#da70d6', palegoldenrod: '#eee8aa', palegreen: '#98fb98', paleturquoise: '#afeeee', palevioletred: '#db7093', papayawhip: '#ffefd5', peachpuff: '#ffdab9', peru: '#cd853f', pink: '#ffc0cb', plum: '#dda0dd', powderblue: '#b0e0e6', purple: '#800080', red: '#ff0000', rosybrown: '#bc8f8f', royalblue: '#4169e1', saddlebrown: '#8b4513', salmon: '#fa8072', sandybrown: '#f4a460', seagreen: '#2e8b57', seashell: '#fff5ee', sienna: '#a0522d', silver: '#c0c0c0', skyblue: '#87ceeb', slateblue: '#6a5acd', slategray: '#708090', slategrey: '#708090', snow: '#fffafa', springgreen: '#00ff7f', steelblue: '#4682b4', tan: '#d2b48c', teal: '#008080', thistle: '#d8bfd8', tomato: '#ff6347', turquoise: '#40e0d0', violet: '#ee82ee', wheat: '#f5deb3', white: '#ffffff', whitesmoke: '#f5f5f5', yellow: '#ffff00', yellowgreen: '#9acd32', };
/*
 * From a valid html color (named color, 6-digits or 3-digits hex format)
 * return a 6-digits hexadecimal color #rrggbb.
 */
function color2hex(color) {
    return named_colors[color.toLowerCase()] || rgb3_to_rgb6(color);
}
function rgb3_to_rgb6(rgb) {
    if (rgb.length === 7) {
        return rgb;
    }
    else {
        return '#' + rgb.charAt(1) + rgb.charAt(1) +
            rgb.charAt(2) + rgb.charAt(2) +
            rgb.charAt(3) + rgb.charAt(3);
    }
}


/***/ }),

/***/ "mHFb":
/*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatGroup.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
});


/***/ }),

/***/ "p/1U":
/*!************************************************!*\
  !*** ./node_modules/d3-format/src/exponent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ "qnQu");


/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x = Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(x)), x ? x[1] : NaN;
});


/***/ }),

/***/ "qnQu":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatDecimal.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
});


/***/ }),

/***/ "rCYf":
/*!*********************************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_selectioncontainer.js ***!
  \*********************************************************************************/
/*! exports provided: SelectionContainerModel, AccordionModel, JupyterPhosphorAccordionWidget, AccordionView, TabModel, JupyterPhosphorTabPanelWidget, TabView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionContainerModel", function() { return SelectionContainerModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionModel", function() { return AccordionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JupyterPhosphorAccordionWidget", function() { return JupyterPhosphorAccordionWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionView", function() { return AccordionView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabModel", function() { return TabModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JupyterPhosphorTabPanelWidget", function() { return JupyterPhosphorTabPanelWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabView", function() { return TabView; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _widget_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_box */ "jSVB");
/* harmony import */ var _phosphor_tabpanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phosphor/tabpanel */ "dpys");
/* harmony import */ var _phosphor_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phosphor/accordion */ "4IhH");
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @phosphor/widgets */ "pif5");
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @phosphor/algorithm */ "rqNV");
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_phosphor_algorithm__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _phosphor_messaging__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @phosphor/messaging */ "hpl1");
/* harmony import */ var _phosphor_messaging__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_phosphor_messaging__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();










var SelectionContainerModel = /** @class */ (function (_super) {
    __extends(SelectionContainerModel, _super);
    function SelectionContainerModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectionContainerModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_7__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'SelectionContainerModel',
            selected_index: 0,
            _titles: {}
        });
    };
    return SelectionContainerModel;
}(_widget_box__WEBPACK_IMPORTED_MODULE_1__["BoxModel"]));

var AccordionModel = /** @class */ (function (_super) {
    __extends(AccordionModel, _super);
    function AccordionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccordionModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_7__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'AccordionModel',
            _view_name: 'AccordionView'
        });
    };
    return AccordionModel;
}(SelectionContainerModel));

// We implement our own tab widget since Phoshpor's TabPanel uses an absolute
// positioning BoxLayout, but we want a more an html/css-based Panel layout.
var JupyterPhosphorAccordionWidget = /** @class */ (function (_super) {
    __extends(JupyterPhosphorAccordionWidget, _super);
    function JupyterPhosphorAccordionWidget(options) {
        var _this = this;
        var view = options.view;
        delete options.view;
        _this = _super.call(this, options) || this;
        _this._view = view;
        return _this;
    }
    /**
     * Process the phosphor message.
     *
     * Any custom phosphor widget used inside a Jupyter widget should override
     * the processMessage function like this.
     */
    JupyterPhosphorAccordionWidget.prototype.processMessage = function (msg) {
        _super.prototype.processMessage.call(this, msg);
        this._view.processPhosphorMessage(msg);
    };
    /**
     * Dispose the widget.
     *
     * This causes the view to be destroyed as well with 'remove'
     */
    JupyterPhosphorAccordionWidget.prototype.dispose = function () {
        if (this.isDisposed) {
            return;
        }
        _super.prototype.dispose.call(this);
        if (this._view) {
            this._view.remove();
        }
        this._view = null;
    };
    return JupyterPhosphorAccordionWidget;
}(_phosphor_accordion__WEBPACK_IMPORTED_MODULE_3__["Accordion"]));

var AccordionView = /** @class */ (function (_super) {
    __extends(AccordionView, _super);
    function AccordionView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccordionView.prototype._createElement = function (tagName) {
        this.pWidget = new JupyterPhosphorAccordionWidget({ view: this });
        return this.pWidget.node;
    };
    AccordionView.prototype._setElement = function (el) {
        if (this.el || el !== this.pWidget.node) {
            // Accordions don't allow setting the element beyond the initial creation.
            throw new Error('Cannot reset the DOM element.');
        }
        this.el = this.pWidget.node;
        this.$el = jquery__WEBPACK_IMPORTED_MODULE_9___default()(this.pWidget.node);
    };
    AccordionView.prototype.initialize = function (parameters) {
        var _this = this;
        _super.prototype.initialize.call(this, parameters);
        this.children_views = new _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["ViewList"](this.add_child_view, this.remove_child_view, this);
        this.listenTo(this.model, 'change:children', function () { return _this.updateChildren(); });
        this.listenTo(this.model, 'change:selected_index', function () { return _this.update_selected_index(); });
        this.listenTo(this.model, 'change:_titles', function () { return _this.update_titles(); });
    };
    /**
     * Called when view is rendered.
     */
    AccordionView.prototype.render = function () {
        var _this = this;
        _super.prototype.render.call(this);
        var accordion = this.pWidget;
        accordion.addClass('jupyter-widgets');
        accordion.addClass('widget-accordion');
        accordion.addClass('widget-container');
        accordion.selection.selectionChanged.connect(function (sender) {
            if (!_this.updatingChildren) {
                _this.model.set('selected_index', accordion.selection.index);
                _this.touch();
            }
        });
        this.children_views.update(this.model.get('children'));
        this.update_titles();
        this.update_selected_index();
    };
    /**
     * Update children
     */
    AccordionView.prototype.updateChildren = function () {
        // While we are updating, the index may not be valid, so deselect the
        // tabs before updating so we don't get spurious changes in the index,
        // which would then set off another sync cycle.
        this.updatingChildren = true;
        this.pWidget.selection.index = null;
        this.children_views.update(this.model.get('children'));
        this.update_selected_index();
        this.updatingChildren = false;
    };
    /**
     * Set header titles
     */
    AccordionView.prototype.update_titles = function () {
        var collapsed = this.pWidget.collapseWidgets;
        var titles = this.model.get('_titles');
        for (var i = 0; i < collapsed.length; i++) {
            if (titles[i] !== void 0) {
                collapsed[i].widget.title.label = titles[i];
            }
        }
    };
    /**
     * Make the rendering and selected index consistent.
     */
    AccordionView.prototype.update_selected_index = function () {
        this.pWidget.selection.index = this.model.get('selected_index');
    };
    /**
     * Called when a child is removed from children list.
     */
    AccordionView.prototype.remove_child_view = function (view) {
        this.pWidget.removeWidget(view.pWidget);
        view.remove();
    };
    /**
     * Called when a child is added to children list.
     */
    AccordionView.prototype.add_child_view = function (model, index) {
        // Placeholder widget to keep our position in the tab panel while we create the view.
        var accordion = this.pWidget;
        var placeholder = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_4__["Widget"]();
        placeholder.title.label = this.model.get('_titles')[index] || '';
        accordion.addWidget(placeholder);
        return this.create_child_view(model).then(function (view) {
            var widget = view.pWidget;
            widget.title.label = placeholder.title.label;
            var collapse = accordion.collapseWidgets[accordion.indexOf(placeholder)];
            collapse.widget = widget;
            placeholder.dispose();
            return view;
        }).catch(_utils__WEBPACK_IMPORTED_MODULE_8__["reject"]('Could not add child view to box', true));
    };
    AccordionView.prototype.remove = function () {
        this.children_views = null;
        _super.prototype.remove.call(this);
    };
    return AccordionView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetView"]));

var TabModel = /** @class */ (function (_super) {
    __extends(TabModel, _super);
    function TabModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_7__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'TabModel',
            _view_name: 'TabView'
        });
    };
    return TabModel;
}(SelectionContainerModel));

// We implement our own tab widget since Phoshpor's TabPanel uses an absolute
// positioning BoxLayout, but we want a more an html/css-based Panel layout.
var JupyterPhosphorTabPanelWidget = /** @class */ (function (_super) {
    __extends(JupyterPhosphorTabPanelWidget, _super);
    function JupyterPhosphorTabPanelWidget(options) {
        var _this = this;
        var view = options.view;
        delete options.view;
        _this = _super.call(this, options) || this;
        _this._view = view;
        // We want the view's messages to be the messages the tabContents panel
        // gets.
        _phosphor_messaging__WEBPACK_IMPORTED_MODULE_6__["MessageLoop"].installMessageHook(_this.tabContents, function (handler, msg) {
            // There may be times when we want the view's handler to be called
            // *after* the message has been processed by the widget, in which
            // case we'll need to revisit using a message hook.
            _this._view.processPhosphorMessage(msg);
            return true;
        });
        return _this;
    }
    /**
     * Dispose the widget.
     *
     * This causes the view to be destroyed as well with 'remove'
     */
    JupyterPhosphorTabPanelWidget.prototype.dispose = function () {
        if (this.isDisposed) {
            return;
        }
        _super.prototype.dispose.call(this);
        if (this._view) {
            this._view.remove();
        }
        this._view = null;
    };
    return JupyterPhosphorTabPanelWidget;
}(_phosphor_tabpanel__WEBPACK_IMPORTED_MODULE_2__["TabPanel"]));

var TabView = /** @class */ (function (_super) {
    __extends(TabView, _super);
    function TabView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.updatingTabs = false;
        return _this;
    }
    TabView.prototype._createElement = function (tagName) {
        this.pWidget = new JupyterPhosphorTabPanelWidget({
            view: this,
        });
        return this.pWidget.node;
    };
    TabView.prototype._setElement = function (el) {
        if (this.el || el !== this.pWidget.node) {
            // TabViews don't allow setting the element beyond the initial creation.
            throw new Error('Cannot reset the DOM element.');
        }
        this.el = this.pWidget.node;
        this.$el = jquery__WEBPACK_IMPORTED_MODULE_9___default()(this.pWidget.node);
    };
    /**
     * Public constructor.
     */
    TabView.prototype.initialize = function (parameters) {
        var _this = this;
        _super.prototype.initialize.call(this, parameters);
        this.childrenViews = new _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["ViewList"](this.addChildView, function (view) { view.remove(); }, this);
        this.listenTo(this.model, 'change:children', function () { return _this.updateTabs(); });
        this.listenTo(this.model, 'change:_titles', function () { return _this.updateTitles(); });
    };
    /**
     * Called when view is rendered.
     */
    TabView.prototype.render = function () {
        _super.prototype.render.call(this);
        var tabs = this.pWidget;
        tabs.addClass('jupyter-widgets');
        tabs.addClass('widget-container');
        tabs.addClass('widget-tab');
        tabs.tabsMovable = true;
        tabs.tabBar.insertBehavior = 'none'; // needed for insert behavior, see below.
        tabs.tabBar.currentChanged.connect(this._onTabChanged, this);
        tabs.tabBar.tabMoved.connect(this._onTabMoved, this);
        tabs.tabBar.addClass('widget-tab-bar');
        tabs.tabContents.addClass('widget-tab-contents');
        // TODO: expose this option in python
        tabs.tabBar.tabsMovable = false;
        this.updateTabs();
        this.update();
    };
    /**
     * Render tab views based on the current model's children.
     */
    TabView.prototype.updateTabs = function () {
        // While we are updating, the index may not be valid, so deselect the
        // tabs before updating so we don't get spurious changes in the index,
        // which would then set off another sync cycle.
        this.updatingTabs = true;
        this.pWidget.currentIndex = null;
        this.childrenViews.update(this.model.get('children'));
        this.pWidget.currentIndex = this.model.get('selected_index');
        this.updatingTabs = false;
    };
    /**
     * Called when a child is added to children list.
     */
    TabView.prototype.addChildView = function (model, index) {
        // Placeholder widget to keep our position in the tab panel while we create the view.
        var label = this.model.get('_titles')[index] || '';
        var tabs = this.pWidget;
        var placeholder = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_4__["Widget"]();
        placeholder.title.label = label;
        tabs.addWidget(placeholder);
        return this.create_child_view(model).then(function (view) {
            var widget = view.pWidget;
            widget.title.label = placeholder.title.label;
            widget.title.closable = false;
            var i = _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_5__["ArrayExt"].firstIndexOf(tabs.widgets, placeholder);
            // insert after placeholder so that if placholder is selected, the
            // real widget will be selected now (this depends on the tab bar
            // insert behavior)
            tabs.insertWidget(i + 1, widget);
            placeholder.dispose();
            return view;
        }).catch(_utils__WEBPACK_IMPORTED_MODULE_8__["reject"]('Could not add child view to box', true));
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    TabView.prototype.update = function () {
        // Update the selected index in the overall update method because it
        // should be run after the tabs have been updated. Otherwise the
        // selected index may not be a valid tab in the tab bar.
        this.updateSelectedIndex();
        return _super.prototype.update.call(this);
    };
    /**
     * Updates the tab page titles.
     */
    TabView.prototype.updateTitles = function () {
        var titles = this.model.get('_titles') || {};
        Object(_phosphor_algorithm__WEBPACK_IMPORTED_MODULE_5__["each"])(this.pWidget.widgets, function (widget, i) {
            widget.title.label = titles[i] || '';
        });
    };
    /**
     * Updates the selected index.
     */
    TabView.prototype.updateSelectedIndex = function () {
        this.pWidget.currentIndex = this.model.get('selected_index');
    };
    TabView.prototype.remove = function () {
        this.childrenViews = null;
        _super.prototype.remove.call(this);
    };
    TabView.prototype._onTabChanged = function (sender, args) {
        if (!this.updatingTabs) {
            var i = args.currentIndex;
            this.model.set('selected_index', i === -1 ? null : i);
            this.touch();
        }
    };
    /**
     * Handle the `tabMoved` signal from the tab bar.
     */
    TabView.prototype._onTabMoved = function (sender, args) {
        var children = this.model.get('children').slice();
        _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_5__["ArrayExt"].move(children, args.fromIndex, args.toIndex);
        this.model.set('children', children);
        this.touch();
    };
    return TabView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetView"]));



/***/ }),

/***/ "rWgG":
/*!*********************************************!*\
  !*** ./node_modules/d3-format/src/index.js ***!
  \*********************************************/
/*! exports provided: formatDefaultLocale, format, formatPrefix, formatLocale, formatSpecifier, FormatSpecifier, precisionFixed, precisionPrefix, precisionRound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLocale.js */ "EjHT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDefaultLocale", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["format"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["formatPrefix"]; });

/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale.js */ "sXBl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatLocale", function() { return _locale_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatSpecifier.js */ "CbjS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatSpecifier", function() { return _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormatSpecifier", function() { return _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_2__["FormatSpecifier"]; });

/* harmony import */ var _precisionFixed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./precisionFixed.js */ "2tFh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionFixed", function() { return _precisionFixed_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _precisionPrefix_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./precisionPrefix.js */ "2TPD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionPrefix", function() { return _precisionPrefix_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _precisionRound_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./precisionRound.js */ "2Ynt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionRound", function() { return _precisionRound_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "sXBl":
/*!**********************************************!*\
  !*** ./node_modules/d3-format/src/locale.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ "p/1U");
/* harmony import */ var _formatGroup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatGroup.js */ "mHFb");
/* harmony import */ var _formatNumerals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatNumerals.js */ "AUoe");
/* harmony import */ var _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatSpecifier.js */ "CbjS");
/* harmony import */ var _formatTrim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formatTrim.js */ "kds9");
/* harmony import */ var _formatTypes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatTypes.js */ "tO8Z");
/* harmony import */ var _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formatPrefixAuto.js */ "ze3m");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./identity.js */ "EUnC");









var map = Array.prototype.map,
    prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ __webpack_exports__["default"] = (function(locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? _identity_js__WEBPACK_IMPORTED_MODULE_7__["default"] : Object(_formatGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"])(map.call(locale.grouping, Number), locale.thousands + ""),
      currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
      currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
      decimal = locale.decimal === undefined ? "." : locale.decimal + "",
      numerals = locale.numerals === undefined ? _identity_js__WEBPACK_IMPORTED_MODULE_7__["default"] : Object(_formatNumerals_js__WEBPACK_IMPORTED_MODULE_2__["default"])(map.call(locale.numerals, String)),
      percent = locale.percent === undefined ? "%" : locale.percent + "",
      minus = locale.minus === undefined ? "-" : locale.minus + "",
      nan = locale.nan === undefined ? "NaN" : locale.nan + "";

  function newFormat(specifier) {
    specifier = Object(_formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__["default"])(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!_formatTypes_js__WEBPACK_IMPORTED_MODULE_5__["default"][type]) precision === undefined && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = _formatTypes_js__WEBPACK_IMPORTED_MODULE_5__["default"][type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision === undefined ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Perform the initial formatting.
        var valueNegative = value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = Object(_formatTrim_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value);

        // If a negative value rounds to zero during formatting, treat as positive.
        if (valueNegative && +value === 0) valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;

        valueSuffix = (type === "s" ? prefixes[8 + _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_6__["prefixExponent"] / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = Object(_formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__["default"])(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
});


/***/ }),

/***/ "tO8Z":
/*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatTypes.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatPrefixAuto.js */ "ze3m");
/* harmony import */ var _formatRounded_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatRounded.js */ "P3jZ");



/* harmony default export */ __webpack_exports__["default"] = ({
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return Object(_formatRounded_js__WEBPACK_IMPORTED_MODULE_1__["default"])(x * 100, p); },
  "r": _formatRounded_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  "s": _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
});


/***/ }),

/***/ "uhLQ":
/*!********************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_image.js ***!
  \********************************************************************/
/*! exports provided: ImageModel, ImageView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageModel", function() { return ImageModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageView", function() { return ImageView; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
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



var ImageModel = /** @class */ (function (_super) {
    __extends(ImageModel, _super);
    function ImageModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_2__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'ImageModel',
            _view_name: 'ImageView',
            format: 'png',
            width: '',
            height: '',
            value: new DataView(new ArrayBuffer(0))
        });
    };
    ImageModel.serializers = __assign({}, _widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"].serializers, { value: { serialize: function (value) {
                return new DataView(value.buffer.slice(0));
            } } });
    return ImageModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"]));

var ImageView = /** @class */ (function (_super) {
    __extends(ImageView, _super);
    function ImageView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageView.prototype.render = function () {
        /**
         * Called when view is rendered.
         */
        _super.prototype.render.call(this);
        this.pWidget.addClass('jupyter-widgets');
        this.pWidget.addClass('widget-image');
        this.update(); // Set defaults.
    };
    ImageView.prototype.update = function () {
        /**
         * Update the contents of this view
         *
         * Called when the model is changed.  The model may have been
         * changed by another view or by a state update from the back-end.
         */
        var url;
        var format = this.model.get('format');
        var value = this.model.get('value');
        if (format !== 'url') {
            var blob = new Blob([value], { type: "image/" + this.model.get('format') });
            url = URL.createObjectURL(blob);
        }
        else {
            url = (new TextDecoder('utf-8')).decode(value.buffer);
        }
        // Clean up the old objectURL
        var oldurl = this.el.src;
        this.el.src = url;
        if (oldurl && typeof oldurl !== 'string') {
            URL.revokeObjectURL(oldurl);
        }
        var width = this.model.get('width');
        if (width !== undefined && width.length > 0) {
            this.el.setAttribute('width', width);
        }
        else {
            this.el.removeAttribute('width');
        }
        var height = this.model.get('height');
        if (height !== undefined && height.length > 0) {
            this.el.setAttribute('height', height);
        }
        else {
            this.el.removeAttribute('height');
        }
        return _super.prototype.update.call(this);
    };
    ImageView.prototype.remove = function () {
        if (this.el.src) {
            URL.revokeObjectURL(this.el.src);
        }
        _super.prototype.remove.call(this);
    };
    Object.defineProperty(ImageView.prototype, "tagName", {
        /**
         * The default tag name.
         *
         * #### Notes
         * This is a read-only attribute.
         */
        get: function () {
            // We can't make this an attribute with a default value
            // since it would be set after it is needed in the
            // constructor.
            return 'img';
        },
        enumerable: true,
        configurable: true
    });
    return ImageView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetView"]));



/***/ }),

/***/ "vBzC":
/*!**********************************************!*\
  !*** ./node_modules/jquery-ui/ui/keycode.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Keycode
//>>group: Core
//>>description: Provide keycodes as keynames
//>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ "EVdn"), __webpack_require__(/*! ./version */ "Qwlt") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
} ( function( $ ) {
return $.ui.keyCode = {
	BACKSPACE: 8,
	COMMA: 188,
	DELETE: 46,
	DOWN: 40,
	END: 35,
	ENTER: 13,
	ESCAPE: 27,
	HOME: 36,
	LEFT: 37,
	PAGE_DOWN: 34,
	PAGE_UP: 33,
	PERIOD: 190,
	RIGHT: 39,
	SPACE: 32,
	TAB: 9,
	UP: 38
};

} ) );


/***/ }),

/***/ "xOfY":
/*!********************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_float.js ***!
  \********************************************************************/
/*! exports provided: FloatModel, BoundedFloatModel, FloatSliderModel, FloatLogSliderModel, FloatRangeSliderModel, FloatSliderView, FloatLogSliderView, FloatRangeSliderView, FloatTextModel, BoundedFloatTextModel, FloatTextView, FloatProgressModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatModel", function() { return FloatModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundedFloatModel", function() { return BoundedFloatModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatSliderModel", function() { return FloatSliderModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatLogSliderModel", function() { return FloatLogSliderModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatRangeSliderModel", function() { return FloatRangeSliderModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatSliderView", function() { return FloatSliderView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatLogSliderView", function() { return FloatLogSliderView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatRangeSliderView", function() { return FloatRangeSliderView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatTextModel", function() { return FloatTextModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundedFloatTextModel", function() { return BoundedFloatTextModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatTextView", function() { return FloatTextView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatProgressModel", function() { return FloatProgressModel; });
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _widget_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widget_int */ "TtYL");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-format */ "rWgG");
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var FloatModel = /** @class */ (function (_super) {
    __extends(FloatModel, _super);
    function FloatModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FloatModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_1__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'FloatModel',
            value: 0,
        });
    };
    return FloatModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDescriptionModel"]));

var BoundedFloatModel = /** @class */ (function (_super) {
    __extends(BoundedFloatModel, _super);
    function BoundedFloatModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoundedFloatModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_1__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'BoundedFloatModel',
            max: 100.0,
            min: 0.0
        });
    };
    return BoundedFloatModel;
}(FloatModel));

var FloatSliderModel = /** @class */ (function (_super) {
    __extends(FloatSliderModel, _super);
    function FloatSliderModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FloatSliderModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_1__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'FloatSliderModel',
            _view_name: 'FloatSliderView',
            step: 1.0,
            orientation: 'horizontal',
            _range: false,
            readout: true,
            readout_format: '.2f',
            slider_color: null,
            continuous_update: true,
            disabled: false,
        });
    };
    FloatSliderModel.prototype.initialize = function (attributes, options) {
        _super.prototype.initialize.call(this, attributes, options);
        this.on('change:readout_format', this.update_readout_format, this);
        this.update_readout_format();
    };
    FloatSliderModel.prototype.update_readout_format = function () {
        this.readout_formatter = Object(d3_format__WEBPACK_IMPORTED_MODULE_3__["format"])(this.get('readout_format'));
    };
    return FloatSliderModel;
}(BoundedFloatModel));

var FloatLogSliderModel = /** @class */ (function (_super) {
    __extends(FloatLogSliderModel, _super);
    function FloatLogSliderModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FloatLogSliderModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_1__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'FloatLogSliderModel',
            _view_name: 'FloatLogSliderView',
            step: 0.1,
            orientation: 'horizontal',
            _range: false,
            readout: true,
            readout_format: '.3g',
            slider_color: null,
            continuous_update: true,
            disabled: false,
            base: 10.,
            value: 1.0,
            min: 0,
            max: 4
        });
    };
    FloatLogSliderModel.prototype.initialize = function (attributes, options) {
        _super.prototype.initialize.call(this, attributes, options);
        this.on('change:readout_format', this.update_readout_format, this);
        this.update_readout_format();
    };
    FloatLogSliderModel.prototype.update_readout_format = function () {
        this.readout_formatter = Object(d3_format__WEBPACK_IMPORTED_MODULE_3__["format"])(this.get('readout_format'));
    };
    return FloatLogSliderModel;
}(BoundedFloatModel));

var FloatRangeSliderModel = /** @class */ (function (_super) {
    __extends(FloatRangeSliderModel, _super);
    function FloatRangeSliderModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FloatRangeSliderModel;
}(FloatSliderModel));

var FloatSliderView = /** @class */ (function (_super) {
    __extends(FloatSliderView, _super);
    function FloatSliderView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._parse_value = parseFloat;
        return _this;
    }
    /**
     * Validate the value of the slider before sending it to the back-end
     * and applying it to the other views on the page.
     */
    FloatSliderView.prototype._validate_slide_value = function (x) {
        return x;
    };
    return FloatSliderView;
}(_widget_int__WEBPACK_IMPORTED_MODULE_2__["IntSliderView"]));

var FloatLogSliderView = /** @class */ (function (_super) {
    __extends(FloatLogSliderView, _super);
    function FloatLogSliderView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._parse_value = parseFloat;
        return _this;
    }
    FloatLogSliderView.prototype.update = function (options) {
        _super.prototype.update.call(this, options);
        var min = this.model.get('min');
        var max = this.model.get('max');
        var value = this.model.get('value');
        var base = this.model.get('base');
        var log_value = Math.log(value) / Math.log(base);
        if (log_value > max) {
            log_value = max;
        }
        else if (log_value < min) {
            log_value = min;
        }
        this.$slider.slider('option', 'value', log_value);
        this.readout.textContent = this.valueToString(value);
        if (this.model.get('value') !== value) {
            this.model.set('value', value, { updated_view: this });
            this.touch();
        }
    };
    /**
     * Write value to a string
     */
    FloatLogSliderView.prototype.valueToString = function (value) {
        var format = this.model.readout_formatter;
        return format(value);
    };
    /**
     * Parse value from a string
     */
    FloatLogSliderView.prototype.stringToValue = function (text) {
        return this._parse_value(text);
    };
    /**
     * this handles the entry of text into the contentEditable label first, the
     * value is checked if it contains a parseable value then it is clamped
     * within the min-max range of the slider finally, the model is updated if
     * the value is to be changed
     *
     * if any of these conditions are not met, the text is reset
     */
    FloatLogSliderView.prototype.handleTextChange = function () {
        var value = this.stringToValue(this.readout.textContent);
        var vmin = this.model.get('min');
        var vmax = this.model.get('max');
        var base = this.model.get('base');
        if (isNaN(value)) {
            this.readout.textContent = this.valueToString(this.model.get('value'));
        }
        else {
            value = Math.max(Math.min(value, Math.pow(base, vmax)), Math.pow(base, vmin));
            if (value !== this.model.get('value')) {
                this.readout.textContent = this.valueToString(value);
                this.model.set('value', value, { updated_view: this });
                this.touch();
            }
            else {
                this.readout.textContent = this.valueToString(this.model.get('value'));
            }
        }
    };
    /**
     * Called when the slider value is changing.
     */
    FloatLogSliderView.prototype.handleSliderChange = function (e, ui) {
        var base = this.model.get('base');
        var actual_value = Math.pow(base, this._validate_slide_value(ui.value));
        this.readout.textContent = this.valueToString(actual_value);
        // Only persist the value while sliding if the continuous_update
        // trait is set to true.
        if (this.model.get('continuous_update')) {
            this.handleSliderChanged(e, ui);
        }
    };
    /**
     * Called when the slider value has changed.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    FloatLogSliderView.prototype.handleSliderChanged = function (e, ui) {
        var base = this.model.get('base');
        var actual_value = Math.pow(base, this._validate_slide_value(ui.value));
        this.model.set('value', actual_value, { updated_view: this });
        this.touch();
    };
    FloatLogSliderView.prototype._validate_slide_value = function (x) {
        return x;
    };
    return FloatLogSliderView;
}(_widget_int__WEBPACK_IMPORTED_MODULE_2__["BaseIntSliderView"]));

var FloatRangeSliderView = /** @class */ (function (_super) {
    __extends(FloatRangeSliderView, _super);
    function FloatRangeSliderView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._parse_value = parseFloat;
        // matches: whitespace?, float, whitespace?, (hyphen, colon, or en-dash), whitespace?, float
        _this._range_regex = /^\s*([+-]?(?:\d*\.?\d+|\d+\.)(?:[eE][-:]?\d+)?)\s*[-:–]\s*([+-]?(?:\d*\.?\d+|\d+\.)(?:[eE][+-]?\d+)?)/;
        return _this;
    }
    /**
     * Validate the value of the slider before sending it to the back-end
     * and applying it to the other views on the page.
     */
    FloatRangeSliderView.prototype._validate_slide_value = function (x) {
        return x;
    };
    return FloatRangeSliderView;
}(_widget_int__WEBPACK_IMPORTED_MODULE_2__["IntRangeSliderView"]));

var FloatTextModel = /** @class */ (function (_super) {
    __extends(FloatTextModel, _super);
    function FloatTextModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FloatTextModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_1__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'FloatTextModel',
            _view_name: 'FloatTextView',
            disabled: false,
            continuous_update: false,
        });
    };
    return FloatTextModel;
}(FloatModel));

var BoundedFloatTextModel = /** @class */ (function (_super) {
    __extends(BoundedFloatTextModel, _super);
    function BoundedFloatTextModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoundedFloatTextModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_1__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'BoundedFloatTextModel',
            _view_name: 'FloatTextView',
            disabled: false,
            continuous_update: false,
            step: 0.1
        });
    };
    return BoundedFloatTextModel;
}(BoundedFloatModel));

var FloatTextView = /** @class */ (function (_super) {
    __extends(FloatTextView, _super);
    function FloatTextView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._parse_value = parseFloat;
        _this._default_step = 'any';
        return _this;
    }
    /**
     * Handle key press
     */
    FloatTextView.prototype.handleKeypress = function (e) {
        // Overwrite IntTextView's handleKeypress
        // which prevents decimal points.
        e.stopPropagation();
    };
    /**
     * Handle key up
     */
    FloatTextView.prototype.handleKeyUp = function (e) {
        // Overwrite IntTextView's handleKeyUp
        // which prevents decimal points.
    };
    return FloatTextView;
}(_widget_int__WEBPACK_IMPORTED_MODULE_2__["IntTextView"]));

var FloatProgressModel = /** @class */ (function (_super) {
    __extends(FloatProgressModel, _super);
    function FloatProgressModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FloatProgressModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_1__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'FloatProgressModel',
            _view_name: 'ProgressView',
            orientation: 'horizontal',
            bar_style: '',
            style: null
        });
    };
    return FloatProgressModel;
}(BoundedFloatModel));



/***/ }),

/***/ "ze3m":
/*!********************************************************!*\
  !*** ./node_modules/d3-format/src/formatPrefixAuto.js ***!
  \********************************************************/
/*! exports provided: prefixExponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixExponent", function() { return prefixExponent; });
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ "qnQu");


var prefixExponent;

/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  var d = Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x, Math.max(0, p + i - 1))[0]; // less than 1y!
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scy9saWIvd2lkZ2V0X2Jvb2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF91cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF9jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanVweXRlci13aWRnZXRzL2NvbnRyb2xzL2xpYi93aWRnZXRfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scy9saWIvd2lkZ2V0X2Rlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL3ByZWNpc2lvblByZWZpeC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9wcmVjaXNpb25Sb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9wcmVjaXNpb25GaXhlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scy9saWIvcGhvc3Bob3IvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdE51bWVyYWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdFNwZWNpZmllci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9kZWZhdWx0TG9jYWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanVweXRlci13aWRnZXRzL2NvbnRyb2xzL2xpYi93aWRnZXRfYnV0dG9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdWkvd2lkZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdWkvaWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0Um91bmRlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanF1ZXJ5LXVpL3VpL3dpZGdldHMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdWkvdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanVweXRlci13aWRnZXRzL2NvbnRyb2xzL2xpYi9waG9zcGhvci9jdXJyZW50c2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanVweXRlci13aWRnZXRzL2NvbnRyb2xzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scy9saWIvd2lkZ2V0X2RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF92aWRlby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scy9saWIvd2lkZ2V0X3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scy9saWIvcGhvc3Bob3IvdGFicGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF9hdWRpby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanF1ZXJ5LXVpL3VpL3dpZGdldHMvbW91c2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF9ib3guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0VHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scy9saWIvd2lkZ2V0X2NvbG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdEdyb3VwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2V4cG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdERlY2ltYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF9zZWxlY3Rpb25jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvbG9jYWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanVweXRlci13aWRnZXRzL2NvbnRyb2xzL2xpYi93aWRnZXRfaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pxdWVyeS11aS91aS9rZXljb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanVweXRlci13aWRnZXRzL2NvbnRyb2xzL2xpYi93aWRnZXRfZmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0UHJlZml4QXV0by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDb0Q7QUFDRTtBQUNEO0FBQ3RCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaURBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDLENBQUMsaUVBQW9CO0FBQ0Q7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpREFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUMsQ0FBQyxpRUFBb0I7QUFDRztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7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Q0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGVBQWUsMERBQXlCO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNkNBQTZD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QUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDLHdEQUFNO0FBQ1k7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwyREFBUztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxlQUFlLDREQUFRLG9EQUFvRCw0QkFBNEIsRUFBRTtBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGlCQUFpQjtBQUN0RDtBQUNB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RUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLGtDQUFrQztBQUMzQztBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtB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O0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLFFBQVE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUM7QUFDQTtBQUNBLG9CQUFvQiw2QkFBNkI7QUFDakQ7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBQyxtRUFBZTtBQUNZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixVQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxxQkFBcUI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHFCQUFxQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQzZCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHFCQUFxQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MscUJBQXFCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDd0I7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpREFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUN1QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlEQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsbURBQUk7QUFDbkQ7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxxQkFBcUI7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBQyxtRUFBZTtBQUNNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix5Q0FBeUMsb0NBQW9DO0FBQ3ZHO0FBQ0Esb0RBQW9ELEVBQUUseUVBQXFCLG1CQUFtQjtBQUM5RjtBQUNBO0FBQ0E7QUFDQSxTQUFTLEVBQUU7QUFDWDtBQUNBLENBQUMsQ0FBQyx5RUFBcUI7QUFDTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlEQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDMkI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUMsbUVBQWU7QUFDTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlEQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNvQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsOENBQThDO0FBQzlDLDZDQUE2QztBQUM3QywrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUMsbUVBQWE7QUFDSzs7Ozs7Ozs7Ozs7OztBQ3AzQnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QjtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzRDtBQUNOO0FBQ2hCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaURBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELEVBQUUsNERBQWUsZUFBZSxVQUFVLGNBQWMsbUVBQWEsRUFBRSxXQUFXLGNBQWMsbUVBQWEsRUFBRSxFQUFFO0FBQ25LO0FBQ0EsQ0FBQyxDQUFDLDREQUFlO0FBQ2U7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpREFBUTtBQUN2QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ29COzs7Ozs7Ozs7Ozs7O0FDdkhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytDO0FBQ0Y7QUFDN0M7QUFDQTtBQUNBLGlDQUFpQyxjQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQywwREFBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw0REFBUTtBQUNyQztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDb0I7Ozs7Ozs7Ozs7Ozs7QUN2VnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN3QjtBQUNFO0FBQ0k7QUFDQTtBQUNFO0FBQ0g7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBQ0Q7QUFDRTtBQUNLO0FBQ0Q7QUFDUztBQUNaO0FBQ0s7QUFDTDtBQUN6QixjQUFjLG1CQUFPLENBQUMsNkJBQWlCOzs7Ozs7Ozs7Ozs7O0FDckI5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxxQkFBcUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDLG1FQUFlO0FBQ2M7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlDQUF5Qyx3Q0FBd0M7QUFDM0c7QUFDQTtBQUNBLENBQUM7QUFDaUM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlDQUF5QyxtRkFBbUY7QUFDdEo7QUFDQTtBQUNBLENBQUM7QUFDOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxjQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLHdDQUF3QztBQUN4Qyx1Q0FBdUM7QUFDdkMsdUNBQXVDO0FBQ3ZDLHlDQUF5QyxhQUFhO0FBQ3RELENBQUM7O0FBRUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7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aUI7QUFDVztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDLDhEQUFrQjtBQUNZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaURBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDeUI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpREFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ2dDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBQyx1REFBVztBQUNZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaURBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUM2Qjs7Ozs7Ozs7Ozs7OztBQzFVOUI7QUFBQTtBQUFBO0FBQStDOztBQUV4Qzs7QUFFUTtBQUNmLFVBQVUsaUVBQWE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxpRUFBYSwrQkFBK0I7QUFDeEYsQ0FBQyIsImZpbGUiOiJ2ZW5kb3JzfkBqdXB5dGVyLXdpZGdldHMvY29udHJvbHMuNTUzMGQwMjk1NmY3ZDczYjA0ZjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIEp1cHl0ZXIgRGV2ZWxvcG1lbnQgVGVhbS5cbi8vIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTW9kaWZpZWQgQlNEIExpY2Vuc2UuXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IENvcmVEZXNjcmlwdGlvbk1vZGVsIH0gZnJvbSAnLi93aWRnZXRfY29yZSc7XG5pbXBvcnQgeyBEZXNjcmlwdGlvblZpZXcgfSBmcm9tICcuL3dpZGdldF9kZXNjcmlwdGlvbic7XG5pbXBvcnQgeyBET01XaWRnZXRWaWV3IH0gZnJvbSAnQGp1cHl0ZXItd2lkZ2V0cy9iYXNlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG52YXIgQm9vbE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCb29sTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQm9vbE1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEJvb2xNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnQm9vbE1vZGVsJ1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBCb29sTW9kZWw7XG59KENvcmVEZXNjcmlwdGlvbk1vZGVsKSk7XG5leHBvcnQgeyBCb29sTW9kZWwgfTtcbnZhciBDaGVja2JveE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDaGVja2JveE1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENoZWNrYm94TW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQ2hlY2tib3hNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIGluZGVudDogdHJ1ZSxcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdDaGVja2JveFZpZXcnLFxuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdDaGVja2JveE1vZGVsJ1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBDaGVja2JveE1vZGVsO1xufShDb3JlRGVzY3JpcHRpb25Nb2RlbCkpO1xuZXhwb3J0IHsgQ2hlY2tib3hNb2RlbCB9O1xudmFyIENoZWNrYm94VmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ2hlY2tib3hWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENoZWNrYm94VmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB2aWV3IGlzIHJlbmRlcmVkLlxuICAgICAqL1xuICAgIENoZWNrYm94Vmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItd2lkZ2V0cycpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1pbmxpbmUtaGJveCcpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1jaGVja2JveCcpO1xuICAgICAgICAvLyBhZGRpbmcgYSB6ZXJvLXdpZHRoIHNwYWNlIHRvIHRoZSBsYWJlbCB0byBoZWxwXG4gICAgICAgIC8vIHRoZSBicm93c2VyIHNldCB0aGUgYmFzZWxpbmUgY29ycmVjdGx5XG4gICAgICAgIHRoaXMubGFiZWwuaW5uZXJIVE1MID0gJyYjODIwMzsnO1xuICAgICAgICAvLyBsYWJlbCBjb250YWluaW5nIHRoZSBjaGVja2JveCBhbmQgZGVzY3JpcHRpb24gc3BhblxuICAgICAgICB0aGlzLmNoZWNrYm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0aGlzLmNoZWNrYm94TGFiZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWxhYmVsLWJhc2ljJyk7XG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jaGVja2JveExhYmVsKTtcbiAgICAgICAgLy8gY2hlY2tib3hcbiAgICAgICAgdGhpcy5jaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRoaXMuY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIHRoaXMuY2hlY2tib3hMYWJlbC5hcHBlbmRDaGlsZCh0aGlzLmNoZWNrYm94KTtcbiAgICAgICAgLy8gc3BhbiB0byB0aGUgcmlnaHQgb2YgdGhlIGNoZWNrYm94IHRoYXQgd2lsbCByZW5kZXIgdGhlIGRlc2NyaXB0aW9uXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0aGlzLmNoZWNrYm94TGFiZWwuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvblNwYW4pO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6aW5kZW50JywgdGhpcy51cGRhdGVJbmRlbnQpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpOyAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICAgIHRoaXMudXBkYXRlRGVzY3JpcHRpb24oKTtcbiAgICAgICAgdGhpcy51cGRhdGVJbmRlbnQoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlbiBmcm9tIHN1cGVyIGNsYXNzXG4gICAgICpcbiAgICAgKiBVcGRhdGUgdGhlIGRlc2NyaXB0aW9uIHNwYW4gKHJhdGhlciB0aGFuIHRoZSBsYWJlbCkgc2luY2VcbiAgICAgKiB3ZSB3YW50IHRoZSBkZXNjcmlwdGlvbiB0byB0aGUgcmlnaHQgb2YgdGhlIGNoZWNrYm94LlxuICAgICAqL1xuICAgIENoZWNrYm94Vmlldy5wcm90b3R5cGUudXBkYXRlRGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGNhbiBiZSBjYWxsZWQgYmVmb3JlIHRoZSB2aWV3IGlzIGZ1bGx5IGluaXRpYWxpemVkXG4gICAgICAgIGlmICh0aGlzLmNoZWNrYm94TGFiZWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMubW9kZWwuZ2V0KCdkZXNjcmlwdGlvbicpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uU3Bhbi5pbm5lckhUTUwgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy50eXBlc2V0KHRoaXMuZGVzY3JpcHRpb25TcGFuKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblNwYW4udGl0bGUgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jaGVja2JveC50aXRsZSA9IGRlc2NyaXB0aW9uO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBsYWJlbCBpbiB0aGUgc3VwZXIgY2xhc3NcbiAgICAgKiB0byBwcm92aWRlIHRoZSBvcHRpb25hbCBpbmRlbnQuXG4gICAgICovXG4gICAgQ2hlY2tib3hWaWV3LnByb3RvdHlwZS51cGRhdGVJbmRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbmRlbnQgPSB0aGlzLm1vZGVsLmdldCgnaW5kZW50Jyk7XG4gICAgICAgIHRoaXMubGFiZWwuc3R5bGUuZGlzcGxheSA9IGluZGVudCA/ICcnIDogJ25vbmUnO1xuICAgIH07XG4gICAgQ2hlY2tib3hWaWV3LnByb3RvdHlwZS5ldmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnY2xpY2sgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJzogJ19oYW5kbGVfY2xpY2snXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHdoZW4gdGhlIGNoZWNrYm94IGlzIGNsaWNrZWQuXG4gICAgICpcbiAgICAgKiBDYWxsaW5nIG1vZGVsLnNldCB3aWxsIHRyaWdnZXIgYWxsIG9mIHRoZSBvdGhlciB2aWV3cyBvZiB0aGVcbiAgICAgKiBtb2RlbCB0byB1cGRhdGUuXG4gICAgICovXG4gICAgQ2hlY2tib3hWaWV3LnByb3RvdHlwZS5faGFuZGxlX2NsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLm1vZGVsLmdldCgndmFsdWUnKTtcbiAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ3ZhbHVlJywgIXZhbHVlLCB7IHVwZGF0ZWRfdmlldzogdGhpcyB9KTtcbiAgICAgICAgdGhpcy50b3VjaCgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcbiAgICAgKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBtb2RlbCBpcyBjaGFuZ2VkLiBUaGUgbW9kZWwgbWF5IGhhdmUgYmVlblxuICAgICAqIGNoYW5nZWQgYnkgYW5vdGhlciB2aWV3IG9yIGJ5IGEgc3RhdGUgdXBkYXRlIGZyb20gdGhlIGJhY2stZW5kLlxuICAgICAqL1xuICAgIENoZWNrYm94Vmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jaGVja2JveC5jaGVja2VkID0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJyk7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy51cGRhdGVkX3ZpZXcgIT0gdGhpcykge1xuICAgICAgICAgICAgdGhpcy5jaGVja2JveC5kaXNhYmxlZCA9IHRoaXMubW9kZWwuZ2V0KCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgcmV0dXJuIENoZWNrYm94Vmlldztcbn0oRGVzY3JpcHRpb25WaWV3KSk7XG5leHBvcnQgeyBDaGVja2JveFZpZXcgfTtcbnZhciBUb2dnbGVCdXR0b25Nb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVG9nZ2xlQnV0dG9uTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVG9nZ2xlQnV0dG9uTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgVG9nZ2xlQnV0dG9uTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBfdmlld19uYW1lOiAnVG9nZ2xlQnV0dG9uVmlldycsXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ1RvZ2dsZUJ1dHRvbk1vZGVsJyxcbiAgICAgICAgICAgIHRvb2x0aXA6ICcnLFxuICAgICAgICAgICAgaWNvbjogJycsXG4gICAgICAgICAgICBidXR0b25fc3R5bGU6ICcnXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFRvZ2dsZUJ1dHRvbk1vZGVsO1xufShCb29sTW9kZWwpKTtcbmV4cG9ydCB7IFRvZ2dsZUJ1dHRvbk1vZGVsIH07XG52YXIgVG9nZ2xlQnV0dG9uVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVG9nZ2xlQnV0dG9uVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUb2dnbGVCdXR0b25WaWV3KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHZpZXcgaXMgcmVuZGVyZWQuXG4gICAgICovXG4gICAgVG9nZ2xlQnV0dG9uVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItd2lkZ2V0cycpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItYnV0dG9uJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LXRvZ2dsZS1idXR0b24nKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOmJ1dHRvbl9zdHlsZScsIHRoaXMudXBkYXRlX2J1dHRvbl9zdHlsZSk7XG4gICAgICAgIHRoaXMuc2V0X2J1dHRvbl9zdHlsZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpOyAvLyBTZXQgZGVmYXVsdHMuXG4gICAgfTtcbiAgICBUb2dnbGVCdXR0b25WaWV3LnByb3RvdHlwZS51cGRhdGVfYnV0dG9uX3N0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZV9tYXBwZWRfY2xhc3NlcyhUb2dnbGVCdXR0b25WaWV3LmNsYXNzX21hcCwgJ2J1dHRvbl9zdHlsZScpO1xuICAgIH07XG4gICAgVG9nZ2xlQnV0dG9uVmlldy5wcm90b3R5cGUuc2V0X2J1dHRvbl9zdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZXRfbWFwcGVkX2NsYXNzZXMoVG9nZ2xlQnV0dG9uVmlldy5jbGFzc19tYXAsICdidXR0b25fc3R5bGUnKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY29udGVudHMgb2YgdGhpcyB2aWV3XG4gICAgICpcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgbW9kZWwgaXMgY2hhbmdlZC4gVGhlIG1vZGVsIG1heSBoYXZlIGJlZW5cbiAgICAgKiBjaGFuZ2VkIGJ5IGFub3RoZXIgdmlldyBvciBieSBhIHN0YXRlIHVwZGF0ZSBmcm9tIHRoZSBiYWNrLWVuZC5cbiAgICAgKi9cbiAgICBUb2dnbGVCdXR0b25WaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnbW9kLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2QtYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnVwZGF0ZWRfdmlldyAhPT0gdGhpcykge1xuICAgICAgICAgICAgdGhpcy5lbC5kaXNhYmxlZCA9IHRoaXMubW9kZWwuZ2V0KCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgdGhpcy5tb2RlbC5nZXQoJ3Rvb2x0aXAnKSk7XG4gICAgICAgICAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLm1vZGVsLmdldCgnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgIHZhciBpY29uID0gdGhpcy5tb2RlbC5nZXQoJ2ljb24nKTtcbiAgICAgICAgICAgIGlmIChkZXNjcmlwdGlvbi50cmltKCkubGVuZ3RoID09PSAwICYmIGljb24udHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyZuYnNwOyc7IC8vIFByZXNlcnZlIGJ1dHRvbiBoZWlnaHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAoaWNvbi50cmltKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGkpO1xuICAgICAgICAgICAgICAgICAgICBpLmNsYXNzTGlzdC5hZGQoJ2ZhJyk7XG4gICAgICAgICAgICAgICAgICAgIGkuY2xhc3NMaXN0LmFkZCgnZmEtJyArIGljb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRlc2NyaXB0aW9uKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBUb2dnbGVCdXR0b25WaWV3LnByb3RvdHlwZS5ldmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBEaWN0aW9uYXJ5IG9mIGV2ZW50cyBhbmQgdGhlaXIgaGFuZGxlcnMuXG4gICAgICAgICAgICAnY2xpY2snOiAnX2hhbmRsZV9jbGljaydcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgYW5kIHZhbGlkYXRlcyB1c2VyIGlucHV0LlxuICAgICAqXG4gICAgICogQ2FsbGluZyBtb2RlbC5zZXQgd2lsbCB0cmlnZ2VyIGFsbCBvZiB0aGUgb3RoZXIgdmlld3Mgb2YgdGhlXG4gICAgICogbW9kZWwgdG8gdXBkYXRlLlxuICAgICAqL1xuICAgIFRvZ2dsZUJ1dHRvblZpZXcucHJvdG90eXBlLl9oYW5kbGVfY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJyk7XG4gICAgICAgIHRoaXMubW9kZWwuc2V0KCd2YWx1ZScsICF2YWx1ZSwgeyB1cGRhdGVkX3ZpZXc6IHRoaXMgfSk7XG4gICAgICAgIHRoaXMudG91Y2goKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUb2dnbGVCdXR0b25WaWV3LnByb3RvdHlwZSwgXCJ0YWdOYW1lXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkZWZhdWx0IHRhZyBuYW1lLlxuICAgICAgICAgKlxuICAgICAgICAgKiAjIyMjIE5vdGVzXG4gICAgICAgICAqIFRoaXMgaXMgYSByZWFkLW9ubHkgYXR0cmlidXRlLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBXZSBjYW4ndCBtYWtlIHRoaXMgYW4gYXR0cmlidXRlIHdpdGggYSBkZWZhdWx0IHZhbHVlXG4gICAgICAgICAgICAvLyBzaW5jZSBpdCB3b3VsZCBiZSBzZXQgYWZ0ZXIgaXQgaXMgbmVlZGVkIGluIHRoZVxuICAgICAgICAgICAgLy8gY29uc3RydWN0b3IuXG4gICAgICAgICAgICByZXR1cm4gJ2J1dHRvbic7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFRvZ2dsZUJ1dHRvblZpZXcuY2xhc3NfbWFwID0ge1xuICAgICAgICBwcmltYXJ5OiBbJ21vZC1wcmltYXJ5J10sXG4gICAgICAgIHN1Y2Nlc3M6IFsnbW9kLXN1Y2Nlc3MnXSxcbiAgICAgICAgaW5mbzogWydtb2QtaW5mbyddLFxuICAgICAgICB3YXJuaW5nOiBbJ21vZC13YXJuaW5nJ10sXG4gICAgICAgIGRhbmdlcjogWydtb2QtZGFuZ2VyJ11cbiAgICB9O1xuICAgIHJldHVybiBUb2dnbGVCdXR0b25WaWV3O1xufShET01XaWRnZXRWaWV3KSk7XG5leHBvcnQgeyBUb2dnbGVCdXR0b25WaWV3IH07XG52YXIgVmFsaWRNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVmFsaWRNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBWYWxpZE1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFZhbGlkTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICByZWFkb3V0OiAnSW52YWxpZCcsXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnVmFsaWRWaWV3JyxcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnVmFsaWRNb2RlbCdcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gVmFsaWRNb2RlbDtcbn0oQm9vbE1vZGVsKSk7XG5leHBvcnQgeyBWYWxpZE1vZGVsIH07XG52YXIgVmFsaWRWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhWYWxpZFZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVmFsaWRWaWV3KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHZpZXcgaXMgcmVuZGVyZWQuXG4gICAgICovXG4gICAgVmFsaWRWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnanVweXRlci13aWRnZXRzJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LXZhbGlkJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XG4gICAgICAgIHZhciBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICB0aGlzLnJlYWRvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRoaXMucmVhZG91dC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtdmFsaWQtcmVhZG91dCcpO1xuICAgICAgICB0aGlzLnJlYWRvdXQuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LXJlYWRvdXQnKTtcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLnJlYWRvdXQpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcbiAgICAgKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBtb2RlbCBpcyBjaGFuZ2VkLiAgVGhlIG1vZGVsIG1heSBoYXZlIGJlZW5cbiAgICAgKiBjaGFuZ2VkIGJ5IGFub3RoZXIgdmlldyBvciBieSBhIHN0YXRlIHVwZGF0ZSBmcm9tIHRoZSBiYWNrLWVuZC5cbiAgICAgKi9cbiAgICBWYWxpZFZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2QtdmFsaWQnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2QtaW52YWxpZCcpO1xuICAgICAgICB0aGlzLnJlYWRvdXQudGV4dENvbnRlbnQgPSB0aGlzLm1vZGVsLmdldCgncmVhZG91dCcpO1xuICAgICAgICBpZiAodGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnbW9kLXZhbGlkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ21vZC1pbnZhbGlkJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBWYWxpZFZpZXc7XG59KERlc2NyaXB0aW9uVmlldykpO1xuZXhwb3J0IHsgVmFsaWRWaWV3IH07XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEp1cHl0ZXIgRGV2ZWxvcG1lbnQgVGVhbS5cbi8vIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTW9kaWZpZWQgQlNEIExpY2Vuc2UuXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBDb3JlRE9NV2lkZ2V0TW9kZWwgfSBmcm9tICcuL3dpZGdldF9jb3JlJztcbmltcG9ydCB7IERPTVdpZGdldFZpZXcgfSBmcm9tICdAanVweXRlci13aWRnZXRzL2Jhc2UnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbnZhciBGaWxlVXBsb2FkTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZpbGVVcGxvYWRNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGaWxlVXBsb2FkTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgRmlsZVVwbG9hZE1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdGaWxlVXBsb2FkTW9kZWwnLFxuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ0ZpbGVVcGxvYWRWaWV3JyxcbiAgICAgICAgICAgIF9jb3VudGVyOiAwLFxuICAgICAgICAgICAgYWNjZXB0OiAnJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVXBsb2FkJyxcbiAgICAgICAgICAgIHRvb2x0aXA6ICcnLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaWNvbjogJ3VwbG9hZCcsXG4gICAgICAgICAgICBidXR0b25fc3R5bGU6ICcnLFxuICAgICAgICAgICAgbXVsdGlwbGU6IGZhbHNlLFxuICAgICAgICAgICAgbWV0YWRhdGE6IFtdLFxuICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICBlcnJvcjogJycsXG4gICAgICAgICAgICBzdHlsZTogbnVsbFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEZpbGVVcGxvYWRNb2RlbC5zZXJpYWxpemVycyA9IF9fYXNzaWduKHt9LCBDb3JlRE9NV2lkZ2V0TW9kZWwuc2VyaWFsaXplcnMsIHsgZGF0YTogeyBzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXJzKSB7IHJldHVybiBidWZmZXJzLnNsaWNlKCk7IH0gfSB9KTtcbiAgICByZXR1cm4gRmlsZVVwbG9hZE1vZGVsO1xufShDb3JlRE9NV2lkZ2V0TW9kZWwpKTtcbmV4cG9ydCB7IEZpbGVVcGxvYWRNb2RlbCB9O1xudmFyIEZpbGVVcGxvYWRWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGaWxlVXBsb2FkVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGaWxlVXBsb2FkVmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmlsZVVwbG9hZFZpZXcucHJvdG90eXBlLCBcInRhZ05hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnYnV0dG9uJztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgRmlsZVVwbG9hZFZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLXdpZGdldHMnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtdXBsb2FkJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnanVweXRlci1idXR0b24nKTtcbiAgICAgICAgdGhpcy5maWxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aGlzLmZpbGVJbnB1dC50eXBlID0gJ2ZpbGUnO1xuICAgICAgICB0aGlzLmZpbGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuZmlsZUlucHV0KTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmZpbGVJbnB1dC5jbGljaygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5maWxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5maWxlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlc0ZpbGUgPSBbXTtcbiAgICAgICAgICAgIEFycmF5LmZyb20oX3RoaXMuZmlsZUlucHV0LmZpbGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZXNGaWxlLnB1c2gobmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWV0YWRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBmaWxlLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0TW9kaWZpZWQ6IGZpbGUubGFzdE1vZGlmaWVkLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5maWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZmlsZVJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBidWZmZXIgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiBidWZmZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGE6IG1ldGFkYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5maWxlUmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZmlsZVJlYWRlci5vbmFib3J0ID0gX3RoaXMuZmlsZVJlYWRlci5vbmVycm9yO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5maWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXNGaWxlKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChjb250ZW50cykge1xuICAgICAgICAgICAgICAgIHZhciBtZXRhZGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBsaV9idWZmZXIgPSBbXTtcbiAgICAgICAgICAgICAgICBjb250ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhLnB1c2goYy5tZXRhZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGxpX2J1ZmZlci5wdXNoKGMuYnVmZmVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgY291bnRlciA9IF90aGlzLm1vZGVsLmdldCgnX2NvdW50ZXInKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5tb2RlbC5zZXQoe1xuICAgICAgICAgICAgICAgICAgICBfY291bnRlcjogY291bnRlciArIGNvbnRlbnRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGE6IG1ldGFkYXRhLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBsaV9idWZmZXIsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAnJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBfdGhpcy50b3VjaCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yIGluIGZpbGUgdXBsb2FkOiAlbycsIGVycik7XG4gICAgICAgICAgICAgICAgX3RoaXMubW9kZWwuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBfdGhpcy50b3VjaCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6YnV0dG9uX3N0eWxlJywgdGhpcy51cGRhdGVfYnV0dG9uX3N0eWxlKTtcbiAgICAgICAgdGhpcy5zZXRfYnV0dG9uX3N0eWxlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7IC8vIFNldCBkZWZhdWx0cy5cbiAgICB9O1xuICAgIEZpbGVVcGxvYWRWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWwuZGlzYWJsZWQgPSB0aGlzLm1vZGVsLmdldCgnZGlzYWJsZWQnKTtcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgdGhpcy5tb2RlbC5nZXQoJ3Rvb2x0aXAnKSk7XG4gICAgICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMubW9kZWwuZ2V0KCdkZXNjcmlwdGlvbicpICsgXCIgKFwiICsgdGhpcy5tb2RlbC5nZXQoJ19jb3VudGVyJykgKyBcIilcIjtcbiAgICAgICAgdmFyIGljb24gPSB0aGlzLm1vZGVsLmdldCgnaWNvbicpO1xuICAgICAgICBpZiAoZGVzY3JpcHRpb24ubGVuZ3RoIHx8IGljb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmVsLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICBpZiAoaWNvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgICAgICBpLmNsYXNzTGlzdC5hZGQoJ2ZhJyk7XG4gICAgICAgICAgICAgICAgaS5jbGFzc0xpc3QuYWRkKCdmYS0nICsgaWNvbik7XG4gICAgICAgICAgICAgICAgaWYgKGRlc2NyaXB0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpLmNsYXNzTGlzdC5hZGQoJ2NlbnRlcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkZXNjcmlwdGlvbikpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlsZUlucHV0LmFjY2VwdCA9IHRoaXMubW9kZWwuZ2V0KCdhY2NlcHQnKTtcbiAgICAgICAgdGhpcy5maWxlSW5wdXQubXVsdGlwbGUgPSB0aGlzLm1vZGVsLmdldCgnbXVsdGlwbGUnKTtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBGaWxlVXBsb2FkVmlldy5wcm90b3R5cGUudXBkYXRlX2J1dHRvbl9zdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVfbWFwcGVkX2NsYXNzZXMoRmlsZVVwbG9hZFZpZXcuY2xhc3NfbWFwLCAnYnV0dG9uX3N0eWxlJywgdGhpcy5lbCk7XG4gICAgfTtcbiAgICBGaWxlVXBsb2FkVmlldy5wcm90b3R5cGUuc2V0X2J1dHRvbl9zdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZXRfbWFwcGVkX2NsYXNzZXMoRmlsZVVwbG9hZFZpZXcuY2xhc3NfbWFwLCAnYnV0dG9uX3N0eWxlJywgdGhpcy5lbCk7XG4gICAgfTtcbiAgICBGaWxlVXBsb2FkVmlldy5jbGFzc19tYXAgPSB7XG4gICAgICAgIHByaW1hcnk6IFsnbW9kLXByaW1hcnknXSxcbiAgICAgICAgc3VjY2VzczogWydtb2Qtc3VjY2VzcyddLFxuICAgICAgICBpbmZvOiBbJ21vZC1pbmZvJ10sXG4gICAgICAgIHdhcm5pbmc6IFsnbW9kLXdhcm5pbmcnXSxcbiAgICAgICAgZGFuZ2VyOiBbJ21vZC1kYW5nZXInXVxuICAgIH07XG4gICAgcmV0dXJuIEZpbGVVcGxvYWRWaWV3O1xufShET01XaWRnZXRWaWV3KSk7XG5leHBvcnQgeyBGaWxlVXBsb2FkVmlldyB9O1xuIiwiLy8gQ29weXJpZ2h0IChjKSBKdXB5dGVyIERldmVsb3BtZW50IFRlYW0uXG4vLyBEaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1vZGlmaWVkIEJTRCBMaWNlbnNlLlxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG4vLyB3aWRnZXRfY29yZSBpbXBsZW1lbnRzIHNvbWUgY29tbW9uIHBhdHRlcm5zIGZvciB0aGUgY29yZSB3aWRnZXQgY29sbGVjdGlvblxuLy8gdGhhdCBhcmUgbm90IHRvIGJlIHVzZWQgZGlyZWN0bHkgYnkgdGhpcmQtcGFydHkgd2lkZ2V0IGF1dGhvcnMuXG5pbXBvcnQgeyBET01XaWRnZXRNb2RlbCwgV2lkZ2V0TW9kZWwgfSBmcm9tICdAanVweXRlci13aWRnZXRzL2Jhc2UnO1xuaW1wb3J0IHsgRGVzY3JpcHRpb25Nb2RlbCB9IGZyb20gJy4vd2lkZ2V0X2Rlc2NyaXB0aW9uJztcbmltcG9ydCB7IEpVUFlURVJfQ09OVFJPTFNfVkVSU0lPTiB9IGZyb20gJy4vdmVyc2lvbic7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xudmFyIENvcmVXaWRnZXRNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ29yZVdpZGdldE1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvcmVXaWRnZXRNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBDb3JlV2lkZ2V0TW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0NvcmVXaWRnZXRNb2RlbCcsXG4gICAgICAgICAgICBfdmlld19tb2R1bGU6ICdAanVweXRlci13aWRnZXRzL2NvbnRyb2xzJyxcbiAgICAgICAgICAgIF9tb2RlbF9tb2R1bGU6ICdAanVweXRlci13aWRnZXRzL2NvbnRyb2xzJyxcbiAgICAgICAgICAgIF92aWV3X21vZHVsZV92ZXJzaW9uOiBKVVBZVEVSX0NPTlRST0xTX1ZFUlNJT04sXG4gICAgICAgICAgICBfbW9kZWxfbW9kdWxlX3ZlcnNpb246IEpVUFlURVJfQ09OVFJPTFNfVkVSU0lPTixcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQ29yZVdpZGdldE1vZGVsO1xufShXaWRnZXRNb2RlbCkpO1xuZXhwb3J0IHsgQ29yZVdpZGdldE1vZGVsIH07XG52YXIgQ29yZURPTVdpZGdldE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb3JlRE9NV2lkZ2V0TW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29yZURPTVdpZGdldE1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIENvcmVET01XaWRnZXRNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnQ29yZURPTVdpZGdldE1vZGVsJyxcbiAgICAgICAgICAgIF92aWV3X21vZHVsZTogJ0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMnLFxuICAgICAgICAgICAgX21vZGVsX21vZHVsZTogJ0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMnLFxuICAgICAgICAgICAgX3ZpZXdfbW9kdWxlX3ZlcnNpb246IEpVUFlURVJfQ09OVFJPTFNfVkVSU0lPTixcbiAgICAgICAgICAgIF9tb2RlbF9tb2R1bGVfdmVyc2lvbjogSlVQWVRFUl9DT05UUk9MU19WRVJTSU9OLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBDb3JlRE9NV2lkZ2V0TW9kZWw7XG59KERPTVdpZGdldE1vZGVsKSk7XG5leHBvcnQgeyBDb3JlRE9NV2lkZ2V0TW9kZWwgfTtcbnZhciBDb3JlRGVzY3JpcHRpb25Nb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ29yZURlc2NyaXB0aW9uTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29yZURlc2NyaXB0aW9uTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQ29yZURlc2NyaXB0aW9uTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0NvcmVEZXNjcmlwdGlvbk1vZGVsJyxcbiAgICAgICAgICAgIF92aWV3X21vZHVsZTogJ0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMnLFxuICAgICAgICAgICAgX21vZGVsX21vZHVsZTogJ0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMnLFxuICAgICAgICAgICAgX3ZpZXdfbW9kdWxlX3ZlcnNpb246IEpVUFlURVJfQ09OVFJPTFNfVkVSU0lPTixcbiAgICAgICAgICAgIF9tb2RlbF9tb2R1bGVfdmVyc2lvbjogSlVQWVRFUl9DT05UUk9MU19WRVJTSU9OLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBDb3JlRGVzY3JpcHRpb25Nb2RlbDtcbn0oRGVzY3JpcHRpb25Nb2RlbCkpO1xuZXhwb3J0IHsgQ29yZURlc2NyaXB0aW9uTW9kZWwgfTtcbiIsIi8vIENvcHlyaWdodCAoYykgSnVweXRlciBEZXZlbG9wbWVudCBUZWFtLlxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNb2RpZmllZCBCU0QgTGljZW5zZS5cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IENvcmVET01XaWRnZXRNb2RlbCB9IGZyb20gJy4vd2lkZ2V0X2NvcmUnO1xuaW1wb3J0IHsgRE9NV2lkZ2V0VmlldywgdW5wYWNrX21vZGVscywgVmlld0xpc3QsIEp1cHl0ZXJQaG9zcGhvclBhbmVsV2lkZ2V0IH0gZnJvbSAnQGp1cHl0ZXItd2lkZ2V0cy9iYXNlJztcbmltcG9ydCB7IFdpZGdldCwgUGFuZWwgfSBmcm9tICdAcGhvc3Bob3Ivd2lkZ2V0cyc7XG5pbXBvcnQgeyBBcnJheUV4dCB9IGZyb20gJ0BwaG9zcGhvci9hbGdvcml0aG0nO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbnZhciBDb250cm9sbGVyQnV0dG9uTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvbnRyb2xsZXJCdXR0b25Nb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb250cm9sbGVyQnV0dG9uTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQ29udHJvbGxlckJ1dHRvbk1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdDb250cm9sbGVyQnV0dG9uTW9kZWwnLFxuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ0NvbnRyb2xsZXJCdXR0b25WaWV3JyxcbiAgICAgICAgICAgIHZhbHVlOiAwLjAsXG4gICAgICAgICAgICBwcmVzc2VkOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBDb250cm9sbGVyQnV0dG9uTW9kZWw7XG59KENvcmVET01XaWRnZXRNb2RlbCkpO1xuZXhwb3J0IHsgQ29udHJvbGxlckJ1dHRvbk1vZGVsIH07XG4vKipcbiAqIFZlcnkgc2ltcGxlIHZpZXcgZm9yIGEgZ2FtZXBhZCBidXR0b24uXG4gKi9cbnZhciBDb250cm9sbGVyQnV0dG9uVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ29udHJvbGxlckJ1dHRvblZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29udHJvbGxlckJ1dHRvblZpZXcoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQ29udHJvbGxlckJ1dHRvblZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLXdpZGdldHMnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtY29udHJvbGxlci1idXR0b24nKTtcbiAgICAgICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9ICdmaXQtY29udGVudCc7XG4gICAgICAgIHRoaXMuc3VwcG9ydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLnN1cHBvcnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICB0aGlzLnN1cHBvcnQuc3R5bGUubWFyZ2luID0gJzFweCc7XG4gICAgICAgIHRoaXMuc3VwcG9ydC5zdHlsZS53aWR0aCA9ICcxNnB4JztcbiAgICAgICAgdGhpcy5zdXBwb3J0LnN0eWxlLmhlaWdodCA9ICcxNnB4JztcbiAgICAgICAgdGhpcy5zdXBwb3J0LnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgYmxhY2snO1xuICAgICAgICB0aGlzLnN1cHBvcnQuc3R5bGUuYmFja2dyb3VuZCA9ICdsaWdodGdyYXknO1xuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuc3VwcG9ydCk7XG4gICAgICAgIHRoaXMuYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuYmFyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgdGhpcy5iYXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIHRoaXMuYmFyLnN0eWxlLmJvdHRvbSA9ICcwcHgnO1xuICAgICAgICB0aGlzLmJhci5zdHlsZS5iYWNrZ3JvdW5kID0gJ2dyYXknO1xuICAgICAgICB0aGlzLnN1cHBvcnQuYXBwZW5kQ2hpbGQodGhpcy5iYXIpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLmxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMubGFiZWwudGV4dENvbnRlbnQgPSB0aGlzLm1vZGVsLmdldCgnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgdGhpcy5sYWJlbC5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmxhYmVsKTtcbiAgICB9O1xuICAgIENvbnRyb2xsZXJCdXR0b25WaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYmFyLnN0eWxlLmhlaWdodCA9ICgxMDAgKiB0aGlzLm1vZGVsLmdldCgndmFsdWUnKSkgKyAnJSc7XG4gICAgfTtcbiAgICByZXR1cm4gQ29udHJvbGxlckJ1dHRvblZpZXc7XG59KERPTVdpZGdldFZpZXcpKTtcbmV4cG9ydCB7IENvbnRyb2xsZXJCdXR0b25WaWV3IH07XG52YXIgQ29udHJvbGxlckF4aXNNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ29udHJvbGxlckF4aXNNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb250cm9sbGVyQXhpc01vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIENvbnRyb2xsZXJBeGlzTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0NvbnRyb2xsZXJBeGlzTW9kZWwnLFxuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ0NvbnRyb2xsZXJBeGlzVmlldycsXG4gICAgICAgICAgICB2YWx1ZTogMC4wXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIENvbnRyb2xsZXJBeGlzTW9kZWw7XG59KENvcmVET01XaWRnZXRNb2RlbCkpO1xuZXhwb3J0IHsgQ29udHJvbGxlckF4aXNNb2RlbCB9O1xuLyoqXG4gKiBWZXJ5IHNpbXBsZSB2aWV3IGZvciBhIGdhbWVwYWQgYXhpcy5cbiAqL1xudmFyIENvbnRyb2xsZXJBeGlzVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ29udHJvbGxlckF4aXNWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvbnRyb2xsZXJBeGlzVmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBDb250cm9sbGVyQXhpc1ZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLXdpZGdldHMnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtY29udHJvbGxlci1heGlzJyk7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUud2lkdGggPSAnMTZweCc7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUucGFkZGluZyA9ICc0cHgnO1xuICAgICAgICB0aGlzLnN1cHBvcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5zdXBwb3J0LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgdGhpcy5zdXBwb3J0LnN0eWxlLm1hcmdpbiA9ICcxcHgnO1xuICAgICAgICB0aGlzLnN1cHBvcnQuc3R5bGUud2lkdGggPSAnNHB4JztcbiAgICAgICAgdGhpcy5zdXBwb3J0LnN0eWxlLmhlaWdodCA9ICc2NHB4JztcbiAgICAgICAgdGhpcy5zdXBwb3J0LnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgYmxhY2snO1xuICAgICAgICB0aGlzLnN1cHBvcnQuc3R5bGUuYmFja2dyb3VuZCA9ICdsaWdodGdyYXknO1xuICAgICAgICB0aGlzLmJ1bGxldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmJ1bGxldC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHRoaXMuYnVsbGV0LnN0eWxlLm1hcmdpbiA9ICctM3B4JztcbiAgICAgICAgdGhpcy5idWxsZXQuc3R5bGUuYm94U2l6aW5nID0gJ3Vuc2V0JztcbiAgICAgICAgdGhpcy5idWxsZXQuc3R5bGUud2lkdGggPSAnMTBweCc7XG4gICAgICAgIHRoaXMuYnVsbGV0LnN0eWxlLmhlaWdodCA9ICcxMHB4JztcbiAgICAgICAgdGhpcy5idWxsZXQuc3R5bGUuYmFja2dyb3VuZCA9ICdncmF5JztcbiAgICAgICAgdGhpcy5sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmxhYmVsLnRleHRDb250ZW50ID0gdGhpcy5tb2RlbC5nZXQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIHRoaXMubGFiZWwuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgIHRoaXMuc3VwcG9ydC5hcHBlbmRDaGlsZCh0aGlzLmJ1bGxldCk7XG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5zdXBwb3J0KTtcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmxhYmVsKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9O1xuICAgIENvbnRyb2xsZXJBeGlzVmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmJ1bGxldC5zdHlsZS50b3AgPSAoNTAgKiAodGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJykgKyAxKSkgKyAnJSc7XG4gICAgfTtcbiAgICByZXR1cm4gQ29udHJvbGxlckF4aXNWaWV3O1xufShET01XaWRnZXRWaWV3KSk7XG5leHBvcnQgeyBDb250cm9sbGVyQXhpc1ZpZXcgfTtcbnZhciBDb250cm9sbGVyTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvbnRyb2xsZXJNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb250cm9sbGVyTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQ29udHJvbGxlck1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdDb250cm9sbGVyTW9kZWwnLFxuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ0NvbnRyb2xsZXJWaWV3JyxcbiAgICAgICAgICAgIGluZGV4OiAwLFxuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBtYXBwaW5nOiAnJyxcbiAgICAgICAgICAgIGNvbm5lY3RlZDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IDAsXG4gICAgICAgICAgICBidXR0b25zOiBbXSxcbiAgICAgICAgICAgIGF4ZXM6IFtdXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ29udHJvbGxlck1vZGVsLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKGF0dHJpYnV0ZXMsIG9wdGlvbnMpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcywgYXR0cmlidXRlcywgb3B0aW9ucyk7XG4gICAgICAgIGlmIChuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgLy8gQ2hlY2tzIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIHRoZSBnYW1lcGFkIEFQSVxuICAgICAgICAgICAgdGhpcy5yZWFkb3V0ID0gJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGdhbWVwYWRzLic7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMucmVhZG91dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBTdGFydCB0aGUgd2FpdCBsb29wLCBhbmQgbGlzdGVuIHRvIHVwZGF0ZXMgb2YgdGhlIG9ubHlcbiAgICAgICAgICAgIC8vIHVzZXItcHJvdmlkZWQgYXR0cmlidXRlLCB0aGUgZ2FtZXBhZCBpbmRleC5cbiAgICAgICAgICAgIHRoaXMucmVhZG91dCA9ICdDb25uZWN0IGdhbWVwYWQgYW5kIHByZXNzIGFueSBidXR0b24uJztcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnY29ubmVjdGVkJykpIHtcbiAgICAgICAgICAgICAgICAvLyBObyBuZWVkIHRvIHJlLWNyZWF0ZSBCdXR0b24gYW5kIEF4aXMgd2lkZ2V0cywgcmUtdXNlXG4gICAgICAgICAgICAgICAgLy8gdGhlIG1vZGVscyBwcm92aWRlZCBieSB0aGUgYmFja2VuZCB3aGljaCBtYXkgYWxyZWFkeVxuICAgICAgICAgICAgICAgIC8vIGJlIHdpcmVkIHRvIG90aGVyIHRoaW5ncy5cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZV9sb29wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBXYWl0IGZvciBhIGdhbWVwYWQgdG8gYmUgY29ubmVjdGVkLlxuICAgICAgICAgICAgICAgIHRoaXMud2FpdF9sb29wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFdhaXRzIGZvciBhIGdhbWVwYWQgdG8gYmUgY29ubmVjdGVkIGF0IHRoZSBwcm92aWRlZCBpbmRleC5cbiAgICAgKiBPbmNlIG9uZSBpcyBjb25uZWN0ZWQsIGl0IHdpbGwgc3RhcnQgdGhlIHVwZGF0ZSBsb29wLCB3aGljaFxuICAgICAqIHBvcHVsYXRlcyB0aGUgdXBkYXRlIG9mIGF4ZXMgYW5kIGJ1dHRvbiB2YWx1ZXMuXG4gICAgICovXG4gICAgQ29udHJvbGxlck1vZGVsLnByb3RvdHlwZS53YWl0X2xvb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0KCdpbmRleCcpO1xuICAgICAgICB2YXIgcGFkID0gbmF2aWdhdG9yLmdldEdhbWVwYWRzKClbaW5kZXhdO1xuICAgICAgICBpZiAocGFkKSB7XG4gICAgICAgICAgICB2YXIgdGhhdF8xID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuc2V0dXAocGFkKS50aGVuKGZ1bmN0aW9uIChjb250cm9scykge1xuICAgICAgICAgICAgICAgIHRoYXRfMS5zZXQoY29udHJvbHMpO1xuICAgICAgICAgICAgICAgIHRoYXRfMS5zYXZlX2NoYW5nZXMoKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoYXRfMS51cGRhdGVfbG9vcC5iaW5kKHRoYXRfMSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMud2FpdF9sb29wLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIG5hdGl2ZSBnYW1lcGFkIG9iamVjdCwgcmV0dXJucyBhIHByb21pc2UgZm9yIGEgZGljdGlvbmFyeSBvZlxuICAgICAqIGNvbnRyb2xzLCBvZiB0aGUgZm9ybVxuICAgICAqIHtcbiAgICAgKiAgICAgYnV0dG9uczogbGlzdCBvZiBCdXR0b24gbW9kZWxzLFxuICAgICAqICAgICBheGVzOiBsaXN0IG9mIEF4aXMgbW9kZWxzLFxuICAgICAqIH1cbiAgICAgKi9cbiAgICBDb250cm9sbGVyTW9kZWwucHJvdG90eXBlLnNldHVwID0gZnVuY3Rpb24gKHBhZCkge1xuICAgICAgICAvLyBTZXQgdXAgdGhlIG1haW4gZ2FtZXBhZCBhdHRyaWJ1dGVzXG4gICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgIG5hbWU6IHBhZC5pZCxcbiAgICAgICAgICAgIG1hcHBpbmc6IHBhZC5tYXBwaW5nLFxuICAgICAgICAgICAgY29ubmVjdGVkOiBwYWQuY29ubmVjdGVkLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBwYWQudGltZXN0YW1wXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBDcmVhdGUgYnV0dG9ucyBhbmQgYXhlcy4gV2hlbiBkb25lLCBzdGFydCB0aGUgdXBkYXRlIGxvb3BcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICByZXR1cm4gdXRpbHMucmVzb2x2ZVByb21pc2VzRGljdCh7XG4gICAgICAgICAgICBidXR0b25zOiBQcm9taXNlLmFsbChwYWQuYnV0dG9ucy5tYXAoZnVuY3Rpb24gKGJ0biwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhhdC5fY3JlYXRlX2J1dHRvbl9tb2RlbChpbmRleCk7XG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBheGVzOiBQcm9taXNlLmFsbChwYWQuYXhlcy5tYXAoZnVuY3Rpb24gKGF4aXMsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQuX2NyZWF0ZV9heGlzX21vZGVsKGluZGV4KTtcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgYXhlcyBhbmQgYnV0dG9ucyB2YWx1ZXMsIHVudGlsIHRoZSBnYW1lcGFkIGlzIGRpc2Nvbm5lY3RlZC5cbiAgICAgKiBXaGVuIHRoZSBnYW1lcGFkIGlzIGRpc2Nvbm5lY3RlZCwgdGhpcy5yZXNldF9nYW1lcGFkIGlzIGNhbGxlZC5cbiAgICAgKi9cbiAgICBDb250cm9sbGVyTW9kZWwucHJvdG90eXBlLnVwZGF0ZV9sb29wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldCgnaW5kZXgnKTtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5nZXQoJ25hbWUnKTtcbiAgICAgICAgdmFyIHBhZCA9IG5hdmlnYXRvci5nZXRHYW1lcGFkcygpW2luZGV4XTtcbiAgICAgICAgaWYgKHBhZCAmJiBpbmRleCA9PT0gcGFkLmluZGV4ICYmIGlkID09PSBwYWQuaWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHBhZC50aW1lc3RhbXAsXG4gICAgICAgICAgICAgICAgY29ubmVjdGVkOiBwYWQuY29ubmVjdGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZV9jaGFuZ2VzKCk7XG4gICAgICAgICAgICB0aGlzLmdldCgnYnV0dG9ucycpLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIG1vZGVsLnNldCh7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwYWQuYnV0dG9uc1tpbmRleF0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHByZXNzZWQ6IHBhZC5idXR0b25zW2luZGV4XS5wcmVzc2VkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbW9kZWwuc2F2ZV9jaGFuZ2VzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZ2V0KCdheGVzJykuZm9yRWFjaChmdW5jdGlvbiAobW9kZWwsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgbW9kZWwuc2V0KCd2YWx1ZScsIHBhZC5heGVzW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgbW9kZWwuc2F2ZV9jaGFuZ2VzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVfbG9vcC5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRfZ2FtZXBhZCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIGdhbWVwYWQgYXR0cmlidXRlcywgYW5kIHN0YXJ0IHRoZSB3YWl0X2xvb3AuXG4gICAgICovXG4gICAgQ29udHJvbGxlck1vZGVsLnByb3RvdHlwZS5yZXNldF9nYW1lcGFkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmdldCgnYnV0dG9ucycpLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgICAgICAgICAgYnV0dG9uLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdldCgnYXhlcycpLmZvckVhY2goZnVuY3Rpb24gKGF4aXMpIHtcbiAgICAgICAgICAgIGF4aXMuY2xvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgbWFwcGluZzogJycsXG4gICAgICAgICAgICBjb25uZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZXN0YW1wOiAwLjAsXG4gICAgICAgICAgICBidXR0b25zOiBbXSxcbiAgICAgICAgICAgIGF4ZXM6IFtdXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNhdmVfY2hhbmdlcygpO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMud2FpdF9sb29wLmJpbmQodGhpcykpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGdhbWVwYWQgYnV0dG9uIHdpZGdldC5cbiAgICAgKi9cbiAgICBDb250cm9sbGVyTW9kZWwucHJvdG90eXBlLl9jcmVhdGVfYnV0dG9uX21vZGVsID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLndpZGdldF9tYW5hZ2VyLm5ld193aWRnZXQoe1xuICAgICAgICAgICAgbW9kZWxfbmFtZTogJ0NvbnRyb2xsZXJCdXR0b25Nb2RlbCcsXG4gICAgICAgICAgICBtb2RlbF9tb2R1bGU6ICdAanVweXRlci13aWRnZXRzL2NvbnRyb2xzJyxcbiAgICAgICAgICAgIG1vZGVsX21vZHVsZV92ZXJzaW9uOiB0aGlzLmdldCgnX21vZGVsX21vZHVsZV92ZXJzaW9uJyksXG4gICAgICAgICAgICB2aWV3X25hbWU6ICdDb250cm9sbGVyQnV0dG9uVmlldycsXG4gICAgICAgICAgICB2aWV3X21vZHVsZTogJ0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMnLFxuICAgICAgICAgICAgdmlld19tb2R1bGVfdmVyc2lvbjogdGhpcy5nZXQoJ192aWV3X21vZHVsZV92ZXJzaW9uJyksXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgICAgICBtb2RlbC5zZXQoJ2Rlc2NyaXB0aW9uJywgaW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuIG1vZGVsO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBnYW1lcGFkIGF4aXMgd2lkZ2V0LlxuICAgICAqL1xuICAgIENvbnRyb2xsZXJNb2RlbC5wcm90b3R5cGUuX2NyZWF0ZV9heGlzX21vZGVsID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLndpZGdldF9tYW5hZ2VyLm5ld193aWRnZXQoe1xuICAgICAgICAgICAgbW9kZWxfbmFtZTogJ0NvbnRyb2xsZXJBeGlzTW9kZWwnLFxuICAgICAgICAgICAgbW9kZWxfbW9kdWxlOiAnQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scycsXG4gICAgICAgICAgICBtb2RlbF9tb2R1bGVfdmVyc2lvbjogdGhpcy5nZXQoJ19tb2RlbF9tb2R1bGVfdmVyc2lvbicpLFxuICAgICAgICAgICAgdmlld19uYW1lOiAnQ29udHJvbGxlckF4aXNWaWV3JyxcbiAgICAgICAgICAgIHZpZXdfbW9kdWxlOiAnQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scycsXG4gICAgICAgICAgICB2aWV3X21vZHVsZV92ZXJzaW9uOiB0aGlzLmdldCgnX3ZpZXdfbW9kdWxlX3ZlcnNpb24nKSxcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgICAgICAgIG1vZGVsLnNldCgnZGVzY3JpcHRpb24nLCBpbmRleCk7XG4gICAgICAgICAgICByZXR1cm4gbW9kZWw7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ29udHJvbGxlck1vZGVsLnNlcmlhbGl6ZXJzID0gX19hc3NpZ24oe30sIENvcmVET01XaWRnZXRNb2RlbC5zZXJpYWxpemVycywgeyBidXR0b25zOiB7IGRlc2VyaWFsaXplOiB1bnBhY2tfbW9kZWxzIH0sIGF4ZXM6IHsgZGVzZXJpYWxpemU6IHVucGFja19tb2RlbHMgfSB9KTtcbiAgICByZXR1cm4gQ29udHJvbGxlck1vZGVsO1xufShDb3JlRE9NV2lkZ2V0TW9kZWwpKTtcbmV4cG9ydCB7IENvbnRyb2xsZXJNb2RlbCB9O1xuLyoqXG4gKiBBIHNpbXBsZSB2aWV3IGZvciBhIGdhbWVwYWQuXG4gKi9cbnZhciBDb250cm9sbGVyVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ29udHJvbGxlclZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29udHJvbGxlclZpZXcoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQ29udHJvbGxlclZpZXcucHJvdG90eXBlLl9jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHRhZ05hbWUpIHtcbiAgICAgICAgdGhpcy5wV2lkZ2V0ID0gbmV3IEp1cHl0ZXJQaG9zcGhvclBhbmVsV2lkZ2V0KHsgdmlldzogdGhpcyB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMucFdpZGdldC5ub2RlO1xuICAgIH07XG4gICAgQ29udHJvbGxlclZpZXcucHJvdG90eXBlLl9zZXRFbGVtZW50ID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGlmICh0aGlzLmVsIHx8IGVsICE9PSB0aGlzLnBXaWRnZXQubm9kZSkge1xuICAgICAgICAgICAgLy8gQm94ZXMgZG9uJ3QgYWxsb3cgc2V0dGluZyB0aGUgZWxlbWVudCBiZXlvbmQgdGhlIGluaXRpYWwgY3JlYXRpb24uXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCByZXNldCB0aGUgRE9NIGVsZW1lbnQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbCA9IHRoaXMucFdpZGdldC5ub2RlO1xuICAgICAgICB0aGlzLiRlbCA9ICQodGhpcy5wV2lkZ2V0Lm5vZGUpO1xuICAgIH07XG4gICAgQ29udHJvbGxlclZpZXcucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAocGFyYW1ldGVycykge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmluaXRpYWxpemUuY2FsbCh0aGlzLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgdGhpcy5idXR0b25fdmlld3MgPSBuZXcgVmlld0xpc3QodGhpcy5hZGRfYnV0dG9uLCBudWxsLCB0aGlzKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOmJ1dHRvbnMnLCBmdW5jdGlvbiAobW9kZWwsIHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbl92aWV3cy51cGRhdGUodmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5heGlzX3ZpZXdzID0gbmV3IFZpZXdMaXN0KHRoaXMuYWRkX2F4aXMsIG51bGwsIHRoaXMpO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6YXhlcycsIGZ1bmN0aW9uIChtb2RlbCwgdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuYXhpc192aWV3cy51cGRhdGUodmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOm5hbWUnLCB0aGlzLnVwZGF0ZV9sYWJlbCk7XG4gICAgfTtcbiAgICBDb250cm9sbGVyVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItd2lkZ2V0cycpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1jb250cm9sbGVyJyk7XG4gICAgICAgIHRoaXMubGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmxhYmVsKTtcbiAgICAgICAgdGhpcy5heGlzX2JveCA9IG5ldyBQYW5lbCgpO1xuICAgICAgICB0aGlzLmF4aXNfYm94Lm5vZGUuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgdGhpcy5wV2lkZ2V0LmFkZFdpZGdldCh0aGlzLmF4aXNfYm94KTtcbiAgICAgICAgdGhpcy5idXR0b25fYm94ID0gbmV3IFBhbmVsKCk7XG4gICAgICAgIHRoaXMuYnV0dG9uX2JveC5ub2RlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHRoaXMucFdpZGdldC5hZGRXaWRnZXQodGhpcy5idXR0b25fYm94KTtcbiAgICAgICAgdGhpcy5idXR0b25fdmlld3MudXBkYXRlKHRoaXMubW9kZWwuZ2V0KCdidXR0b25zJykpO1xuICAgICAgICB0aGlzLmF4aXNfdmlld3MudXBkYXRlKHRoaXMubW9kZWwuZ2V0KCdheGVzJykpO1xuICAgICAgICB0aGlzLnVwZGF0ZV9sYWJlbCgpO1xuICAgIH07XG4gICAgQ29udHJvbGxlclZpZXcucHJvdG90eXBlLnVwZGF0ZV9sYWJlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sYWJlbC50ZXh0Q29udGVudCA9IHRoaXMubW9kZWwuZ2V0KCduYW1lJykgfHwgdGhpcy5tb2RlbC5yZWFkb3V0O1xuICAgIH07XG4gICAgQ29udHJvbGxlclZpZXcucHJvdG90eXBlLmFkZF9idXR0b24gPSBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gd2UgaW5zZXJ0IGEgZHVtbXkgZWxlbWVudCBzbyB0aGUgb3JkZXIgaXMgcHJlc2VydmVkIHdoZW4gd2UgYWRkXG4gICAgICAgIC8vIHRoZSByZW5kZXJlZCBjb250ZW50IGxhdGVyLlxuICAgICAgICB2YXIgZHVtbXkgPSBuZXcgV2lkZ2V0KCk7XG4gICAgICAgIHRoaXMuYnV0dG9uX2JveC5hZGRXaWRnZXQoZHVtbXkpO1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVfY2hpbGRfdmlldyhtb2RlbCkudGhlbihmdW5jdGlvbiAodmlldykge1xuICAgICAgICAgICAgLy8gcmVwbGFjZSB0aGUgZHVtbXkgd2lkZ2V0IHdpdGggdGhlIG5ldyBvbmUuXG4gICAgICAgICAgICB2YXIgaSA9IEFycmF5RXh0LmZpcnN0SW5kZXhPZihfdGhpcy5idXR0b25fYm94LndpZGdldHMsIGR1bW15KTtcbiAgICAgICAgICAgIF90aGlzLmJ1dHRvbl9ib3guaW5zZXJ0V2lkZ2V0KGksIHZpZXcucFdpZGdldCk7XG4gICAgICAgICAgICBkdW1teS5kaXNwb3NlKCk7XG4gICAgICAgICAgICByZXR1cm4gdmlldztcbiAgICAgICAgfSkuY2F0Y2godXRpbHMucmVqZWN0KCdDb3VsZCBub3QgYWRkIGNoaWxkIGJ1dHRvbiB2aWV3IHRvIGNvbnRyb2xsZXInLCB0cnVlKSk7XG4gICAgfTtcbiAgICBDb250cm9sbGVyVmlldy5wcm90b3R5cGUuYWRkX2F4aXMgPSBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gd2UgaW5zZXJ0IGEgZHVtbXkgZWxlbWVudCBzbyB0aGUgb3JkZXIgaXMgcHJlc2VydmVkIHdoZW4gd2UgYWRkXG4gICAgICAgIC8vIHRoZSByZW5kZXJlZCBjb250ZW50IGxhdGVyLlxuICAgICAgICB2YXIgZHVtbXkgPSBuZXcgV2lkZ2V0KCk7XG4gICAgICAgIHRoaXMuYXhpc19ib3guYWRkV2lkZ2V0KGR1bW15KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlX2NoaWxkX3ZpZXcobW9kZWwpLnRoZW4oZnVuY3Rpb24gKHZpZXcpIHtcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgdGhlIGR1bW15IHdpZGdldCB3aXRoIHRoZSBuZXcgb25lLlxuICAgICAgICAgICAgdmFyIGkgPSBBcnJheUV4dC5maXJzdEluZGV4T2YoX3RoaXMuYXhpc19ib3gud2lkZ2V0cywgZHVtbXkpO1xuICAgICAgICAgICAgX3RoaXMuYXhpc19ib3guaW5zZXJ0V2lkZ2V0KGksIHZpZXcucFdpZGdldCk7XG4gICAgICAgICAgICBkdW1teS5kaXNwb3NlKCk7XG4gICAgICAgICAgICByZXR1cm4gdmlldztcbiAgICAgICAgfSkuY2F0Y2godXRpbHMucmVqZWN0KCdDb3VsZCBub3QgYWRkIGNoaWxkIGF4aXMgdmlldyB0byBjb250cm9sbGVyJywgdHJ1ZSkpO1xuICAgIH07XG4gICAgQ29udHJvbGxlclZpZXcucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW1vdmUuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5idXR0b25fdmlld3MucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuYXhpc192aWV3cy5yZW1vdmUoKTtcbiAgICB9O1xuICAgIHJldHVybiBDb250cm9sbGVyVmlldztcbn0oRE9NV2lkZ2V0VmlldykpO1xuZXhwb3J0IHsgQ29udHJvbGxlclZpZXcgfTtcbiIsIi8vIENvcHlyaWdodCAoYykgSnVweXRlciBEZXZlbG9wbWVudCBUZWFtLlxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNb2RpZmllZCBCU0QgTGljZW5zZS5cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IERPTVdpZGdldE1vZGVsLCBET01XaWRnZXRWaWV3LCBTdHlsZU1vZGVsIH0gZnJvbSAnQGp1cHl0ZXItd2lkZ2V0cy9iYXNlJztcbmltcG9ydCB7IHR5cGVzZXQgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IEpVUFlURVJfQ09OVFJPTFNfVkVSU0lPTiB9IGZyb20gJy4vdmVyc2lvbic7XG52YXIgRGVzY3JpcHRpb25TdHlsZU1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEZXNjcmlwdGlvblN0eWxlTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGVzY3JpcHRpb25TdHlsZU1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIERlc2NyaXB0aW9uU3R5bGVNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7IF9tb2RlbF9uYW1lOiAnRGVzY3JpcHRpb25TdHlsZU1vZGVsJywgX21vZGVsX21vZHVsZTogJ0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMnLCBfbW9kZWxfbW9kdWxlX3ZlcnNpb246IEpVUFlURVJfQ09OVFJPTFNfVkVSU0lPTiB9KTtcbiAgICB9O1xuICAgIERlc2NyaXB0aW9uU3R5bGVNb2RlbC5zdHlsZVByb3BlcnRpZXMgPSB7XG4gICAgICAgIGRlc2NyaXB0aW9uX3dpZHRoOiB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJy53aWRnZXQtbGFiZWwnLFxuICAgICAgICAgICAgYXR0cmlidXRlOiAnd2lkdGgnLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIERlc2NyaXB0aW9uU3R5bGVNb2RlbDtcbn0oU3R5bGVNb2RlbCkpO1xuZXhwb3J0IHsgRGVzY3JpcHRpb25TdHlsZU1vZGVsIH07XG52YXIgRGVzY3JpcHRpb25Nb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRGVzY3JpcHRpb25Nb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEZXNjcmlwdGlvbk1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIERlc2NyaXB0aW9uTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwgeyBfbW9kZWxfbmFtZTogJ0Rlc2NyaXB0aW9uTW9kZWwnLCBfdmlld19uYW1lOiAnRGVzY3JpcHRpb25WaWV3JywgX3ZpZXdfbW9kdWxlOiAnQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scycsIF9tb2RlbF9tb2R1bGU6ICdAanVweXRlci13aWRnZXRzL2NvbnRyb2xzJywgX3ZpZXdfbW9kdWxlX3ZlcnNpb246IEpVUFlURVJfQ09OVFJPTFNfVkVSU0lPTiwgX21vZGVsX21vZHVsZV92ZXJzaW9uOiBKVVBZVEVSX0NPTlRST0xTX1ZFUlNJT04sIGRlc2NyaXB0aW9uOiAnJywgZGVzY3JpcHRpb25fdG9vbHRpcDogbnVsbCB9KTtcbiAgICB9O1xuICAgIHJldHVybiBEZXNjcmlwdGlvbk1vZGVsO1xufShET01XaWRnZXRNb2RlbCkpO1xuZXhwb3J0IHsgRGVzY3JpcHRpb25Nb2RlbCB9O1xudmFyIERlc2NyaXB0aW9uVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRGVzY3JpcHRpb25WaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERlc2NyaXB0aW9uVmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBEZXNjcmlwdGlvblZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbCk7XG4gICAgICAgIHRoaXMubGFiZWwuY2xhc3NOYW1lID0gJ3dpZGdldC1sYWJlbCc7XG4gICAgICAgIHRoaXMubGFiZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOmRlc2NyaXB0aW9uJywgdGhpcy51cGRhdGVEZXNjcmlwdGlvbik7XG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpkZXNjcmlwdGlvbl90b29sdGlwJywgdGhpcy51cGRhdGVEZXNjcmlwdGlvbik7XG4gICAgICAgIHRoaXMudXBkYXRlRGVzY3JpcHRpb24oKTtcbiAgICB9O1xuICAgIERlc2NyaXB0aW9uVmlldy5wcm90b3R5cGUudHlwZXNldCA9IGZ1bmN0aW9uIChlbGVtZW50LCB0ZXh0KSB7XG4gICAgICAgIHRoaXMuZGlzcGxheWVkLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gdHlwZXNldChlbGVtZW50LCB0ZXh0KTsgfSk7XG4gICAgfTtcbiAgICBEZXNjcmlwdGlvblZpZXcucHJvdG90eXBlLnVwZGF0ZURlc2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLm1vZGVsLmdldCgnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgdmFyIGRlc2NyaXB0aW9uX3Rvb2x0aXAgPSB0aGlzLm1vZGVsLmdldCgnZGVzY3JpcHRpb25fdG9vbHRpcCcpO1xuICAgICAgICBpZiAoZGVzY3JpcHRpb25fdG9vbHRpcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZGVzY3JpcHRpb25fdG9vbHRpcCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZXNjcmlwdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGFiZWwuaW5uZXJIVE1MID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgICB0aGlzLnR5cGVzZXQodGhpcy5sYWJlbCk7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhYmVsLnRpdGxlID0gZGVzY3JpcHRpb25fdG9vbHRpcDtcbiAgICB9O1xuICAgIHJldHVybiBEZXNjcmlwdGlvblZpZXc7XG59KERPTVdpZGdldFZpZXcpKTtcbmV4cG9ydCB7IERlc2NyaXB0aW9uVmlldyB9O1xuLyoqXG4gKiBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCBqdXB5dGVyLWpzLXdpZGdldHMgMi54LlxuICpcbiAqIFVzZSBEZXNjcmlwdGlvbk1vZGVsIGluc3RlYWQuXG4gKi9cbnZhciBMYWJlbGVkRE9NV2lkZ2V0TW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExhYmVsZWRET01XaWRnZXRNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMYWJlbGVkRE9NV2lkZ2V0TW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIExhYmVsZWRET01XaWRnZXRNb2RlbDtcbn0oRGVzY3JpcHRpb25Nb2RlbCkpO1xuZXhwb3J0IHsgTGFiZWxlZERPTVdpZGdldE1vZGVsIH07XG4vKipcbiAqIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIGp1cHl0ZXItanMtd2lkZ2V0cyAyLnguXG4gKlxuICogVXNlIERlc2NyaXB0aW9uVmlldyBpbnN0ZWFkLlxuICovXG52YXIgTGFiZWxlZERPTVdpZGdldFZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExhYmVsZWRET01XaWRnZXRWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExhYmVsZWRET01XaWRnZXRWaWV3KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBMYWJlbGVkRE9NV2lkZ2V0Vmlldztcbn0oRGVzY3JpcHRpb25WaWV3KSk7XG5leHBvcnQgeyBMYWJlbGVkRE9NV2lkZ2V0VmlldyB9O1xuIiwiaW1wb3J0IGV4cG9uZW50IGZyb20gXCIuL2V4cG9uZW50LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0ZXAsIHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1heCgtOCwgTWF0aC5taW4oOCwgTWF0aC5mbG9vcihleHBvbmVudCh2YWx1ZSkgLyAzKSkpICogMyAtIGV4cG9uZW50KE1hdGguYWJzKHN0ZXApKSk7XG59XG4iLCJpbXBvcnQgZXhwb25lbnQgZnJvbSBcIi4vZXhwb25lbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RlcCwgbWF4KSB7XG4gIHN0ZXAgPSBNYXRoLmFicyhzdGVwKSwgbWF4ID0gTWF0aC5hYnMobWF4KSAtIHN0ZXA7XG4gIHJldHVybiBNYXRoLm1heCgwLCBleHBvbmVudChtYXgpIC0gZXhwb25lbnQoc3RlcCkpICsgMTtcbn1cbiIsImltcG9ydCBleHBvbmVudCBmcm9tIFwiLi9leHBvbmVudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGVwKSB7XG4gIHJldHVybiBNYXRoLm1heCgwLCAtZXhwb25lbnQoTWF0aC5hYnMoc3RlcCkpKTtcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgSnVweXRlciBEZXZlbG9wbWVudCBUZWFtLlxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNb2RpZmllZCBCU0QgTGljZW5zZS5cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IHsgQXJyYXlFeHQgfSBmcm9tICdAcGhvc3Bob3IvYWxnb3JpdGhtJztcbmltcG9ydCB7IFNpZ25hbCB9IGZyb20gJ0BwaG9zcGhvci9zaWduYWxpbmcnO1xuaW1wb3J0IHsgUGFuZWwsIFBhbmVsTGF5b3V0LCBXaWRnZXQgfSBmcm9tICdAcGhvc3Bob3Ivd2lkZ2V0cyc7XG5pbXBvcnQgeyBTZWxlY3Rpb24gfSBmcm9tICcuL2N1cnJlbnRzZWxlY3Rpb24nO1xuLyoqXG4gKiBUaGUgY2xhc3MgbmFtZSBhZGRlZCB0byBDb2xsYXBzZSBpbnN0YW5jZXMuXG4gKi9cbnZhciBDT0xMQVBTRV9DTEFTUyA9ICdwLUNvbGxhcHNlJztcbi8qKlxuICogVGhlIGNsYXNzIG5hbWUgYWRkZWQgdG8gYSBDb2xsYXBzZSdzIGhlYWRlci5cbiAqL1xudmFyIENPTExBUFNFX0hFQURFUl9DTEFTUyA9ICdwLUNvbGxhcHNlLWhlYWRlcic7XG4vKipcbiAqIFRoZSBjbGFzcyBuYW1lIGFkZGVkIHRvIGEgQ29sbGFwc2UncyBjb250ZW50cy5cbiAqL1xudmFyIENPTExBUFNFX0NPTlRFTlRTX0NMQVNTID0gJ3AtQ29sbGFwc2UtY29udGVudHMnO1xuLyoqXG4gKiBUaGUgY2xhc3MgbmFtZSBhZGRlZCB0byBhIENvbGxhcHNlIHdoZW4gaXQgaXMgb3BlbmVkXG4gKi9cbnZhciBDT0xMQVBTRV9DTEFTU19PUEVOID0gJ3AtQ29sbGFwc2Utb3Blbic7XG4vKipcbiAqIEEgcGFuZWwgdGhhdCBzdXBwb3J0cyBhIGNvbGxhcHNpYmxlIGhlYWRlciwgbWFkZSBmcm9tIHRoZSB3aWRnZXQncyB0aXRsZS5cbiAqIENsaWNraW5nIG9uIHRoZSB0aXRsZSBleHBhbmRzIG9yIGNvbnRyYWN0cyB0aGUgd2lkZ2V0LlxuICovXG52YXIgQ29sbGFwc2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvbGxhcHNlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvbGxhcHNlKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX2NvbGxhcHNlQ2hhbmdlZCA9IG5ldyBTaWduYWwoX3RoaXMpO1xuICAgICAgICBfdGhpcy5hZGRDbGFzcyhDT0xMQVBTRV9DTEFTUyk7XG4gICAgICAgIF90aGlzLl9oZWFkZXIgPSBuZXcgV2lkZ2V0KCk7XG4gICAgICAgIF90aGlzLl9oZWFkZXIuYWRkQ2xhc3MoQ09MTEFQU0VfSEVBREVSX0NMQVNTKTtcbiAgICAgICAgX3RoaXMuX2hlYWRlci5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RoaXMpO1xuICAgICAgICBfdGhpcy5fY29udGVudCA9IG5ldyBQYW5lbCgpO1xuICAgICAgICBfdGhpcy5fY29udGVudC5hZGRDbGFzcyhDT0xMQVBTRV9DT05URU5UU19DTEFTUyk7XG4gICAgICAgIHZhciBsYXlvdXQgPSBuZXcgUGFuZWxMYXlvdXQoKTtcbiAgICAgICAgX3RoaXMubGF5b3V0ID0gbGF5b3V0O1xuICAgICAgICBsYXlvdXQuYWRkV2lkZ2V0KF90aGlzLl9oZWFkZXIpO1xuICAgICAgICBsYXlvdXQuYWRkV2lkZ2V0KF90aGlzLl9jb250ZW50KTtcbiAgICAgICAgaWYgKG9wdGlvbnMud2lkZ2V0KSB7XG4gICAgICAgICAgICBfdGhpcy53aWRnZXQgPSBvcHRpb25zLndpZGdldDtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBDb2xsYXBzZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGlzcG9zZS5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLl9oZWFkZXIgPSBudWxsO1xuICAgICAgICB0aGlzLl93aWRnZXQgPSBudWxsO1xuICAgICAgICB0aGlzLl9jb250ZW50ID0gbnVsbDtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb2xsYXBzZS5wcm90b3R5cGUsIFwid2lkZ2V0XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2lkZ2V0O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh3aWRnZXQpIHtcbiAgICAgICAgICAgIHZhciBvbGRXaWRnZXQgPSB0aGlzLl93aWRnZXQ7XG4gICAgICAgICAgICBpZiAob2xkV2lkZ2V0KSB7XG4gICAgICAgICAgICAgICAgb2xkV2lkZ2V0LmRpc3Bvc2VkLmRpc2Nvbm5lY3QodGhpcy5fb25DaGlsZERpc3Bvc2VkLCB0aGlzKTtcbiAgICAgICAgICAgICAgICBvbGRXaWRnZXQudGl0bGUuY2hhbmdlZC5kaXNjb25uZWN0KHRoaXMuX29uVGl0bGVDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgICAgICAgICBvbGRXaWRnZXQucGFyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3dpZGdldCA9IHdpZGdldDtcbiAgICAgICAgICAgIHdpZGdldC5kaXNwb3NlZC5jb25uZWN0KHRoaXMuX29uQ2hpbGREaXNwb3NlZCwgdGhpcyk7XG4gICAgICAgICAgICB3aWRnZXQudGl0bGUuY2hhbmdlZC5jb25uZWN0KHRoaXMuX29uVGl0bGVDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuX29uVGl0bGVDaGFuZ2VkKHdpZGdldC50aXRsZSk7XG4gICAgICAgICAgICB0aGlzLl9jb250ZW50LmFkZFdpZGdldCh3aWRnZXQpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29sbGFwc2UucHJvdG90eXBlLCBcImNvbGxhcHNlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbGxhcHNlZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHNob3VsZCB3ZSBoYXZlIHRoaXMgY2hlY2sgaGVyZT9cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5fY29sbGFwc2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGFwc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VuY29sbGFwc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQ29sbGFwc2UucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWQgPSAhdGhpcy5jb2xsYXBzZWQ7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29sbGFwc2UucHJvdG90eXBlLCBcImNvbGxhcHNlQ2hhbmdlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbGxhcHNlQ2hhbmdlZDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQ29sbGFwc2UucHJvdG90eXBlLl9jb2xsYXBzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fY29sbGFwc2VkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnQuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoQ09MTEFQU0VfQ0xBU1NfT1BFTik7XG4gICAgICAgIHRoaXMuX2NvbGxhcHNlQ2hhbmdlZC5lbWl0KHZvaWQgMCk7XG4gICAgfTtcbiAgICBDb2xsYXBzZS5wcm90b3R5cGUuX3VuY29sbGFwc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2NvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5fY29udGVudC5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRDbGFzcyhDT0xMQVBTRV9DTEFTU19PUEVOKTtcbiAgICAgICAgdGhpcy5fY29sbGFwc2VDaGFuZ2VkLmVtaXQodm9pZCAwKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZSB0aGUgRE9NIGV2ZW50cyBmb3IgdGhlIENvbGxhcHNlIHdpZGdldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldmVudCAtIFRoZSBET00gZXZlbnQgc2VudCB0byB0aGUgcGFuZWwuXG4gICAgICpcbiAgICAgKiAjIyMjIE5vdGVzXG4gICAgICogVGhpcyBtZXRob2QgaW1wbGVtZW50cyB0aGUgRE9NIGBFdmVudExpc3RlbmVyYCBpbnRlcmZhY2UgYW5kIGlzXG4gICAgICogY2FsbGVkIGluIHJlc3BvbnNlIHRvIGV2ZW50cyBvbiB0aGUgcGFuZWwncyBET00gbm9kZS4gSXQgc2hvdWxkXG4gICAgICogbm90IGJlIGNhbGxlZCBkaXJlY3RseSBieSB1c2VyIGNvZGUuXG4gICAgICovXG4gICAgQ29sbGFwc2UucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnY2xpY2snOlxuICAgICAgICAgICAgICAgIHRoaXMuX2V2dENsaWNrKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbGxhcHNlLnByb3RvdHlwZS5fZXZ0Q2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZSB0aGUgYGNoYW5nZWRgIHNpZ25hbCBvZiBhIHRpdGxlIG9iamVjdC5cbiAgICAgKi9cbiAgICBDb2xsYXBzZS5wcm90b3R5cGUuX29uVGl0bGVDaGFuZ2VkID0gZnVuY3Rpb24gKHNlbmRlcikge1xuICAgICAgICB0aGlzLl9oZWFkZXIubm9kZS50ZXh0Q29udGVudCA9IHRoaXMuX3dpZGdldC50aXRsZS5sYWJlbDtcbiAgICB9O1xuICAgIENvbGxhcHNlLnByb3RvdHlwZS5fb25DaGlsZERpc3Bvc2VkID0gZnVuY3Rpb24gKHNlbmRlcikge1xuICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgICB9O1xuICAgIHJldHVybiBDb2xsYXBzZTtcbn0oV2lkZ2V0KSk7XG5leHBvcnQgeyBDb2xsYXBzZSB9O1xuLyoqXG4gKiBUaGUgY2xhc3MgbmFtZSBhZGRlZCB0byBBY2NvcmRpb24gaW5zdGFuY2VzLlxuICovXG52YXIgQUNDT1JESU9OX0NMQVNTID0gJ3AtQWNjb3JkaW9uJztcbi8qKlxuICogVGhlIGNsYXNzIG5hbWUgYWRkZWQgdG8gYW4gQWNjb3JkaW9uIGNoaWxkLlxuICovXG52YXIgQUNDT1JESU9OX0NISUxEX0NMQVNTID0gJ3AtQWNjb3JkaW9uLWNoaWxkJztcbnZhciBBQ0NPUkRJT05fQ0hJTERfQUNUSVZFX0NMQVNTID0gJ3AtQWNjb3JkaW9uLWNoaWxkLWFjdGl2ZSc7XG4vKipcbiAqIEEgcGFuZWwgdGhhdCBzdXBwb3J0cyBhIGNvbGxhcHNpYmxlIGhlYWRlciwgbWFkZSBmcm9tIHRoZSB3aWRnZXQncyB0aXRsZS5cbiAqIENsaWNraW5nIG9uIHRoZSB0aXRsZSBleHBhbmRzIG9yIGNvbnRyYWN0cyB0aGUgd2lkZ2V0LlxuICovXG52YXIgQWNjb3JkaW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBY2NvcmRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQWNjb3JkaW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3NlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb24oX3RoaXMud2lkZ2V0cyk7XG4gICAgICAgIF90aGlzLl9zZWxlY3Rpb24uc2VsZWN0aW9uQ2hhbmdlZC5jb25uZWN0KF90aGlzLl9vblNlbGVjdGlvbkNoYW5nZWQsIF90aGlzKTtcbiAgICAgICAgX3RoaXMuYWRkQ2xhc3MoQUNDT1JESU9OX0NMQVNTKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWNjb3JkaW9uLnByb3RvdHlwZSwgXCJjb2xsYXBzZVdpZGdldHNcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQSByZWFkLW9ubHkgc2VxdWVuY2Ugb2YgdGhlIHdpZGdldHMgaW4gdGhlIHBhbmVsLlxuICAgICAgICAgKlxuICAgICAgICAgKiAjIyMjIE5vdGVzXG4gICAgICAgICAqIFRoaXMgaXMgYSByZWFkLW9ubHkgcHJvcGVydHkuXG4gICAgICAgICAqL1xuICAgICAgICAvKiAgZ2V0IHdpZGdldHMoKTogSVNlcXVlbmNlPFdpZGdldD4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheVNlcXVlbmNlKHRvQXJyYXkobWFwKCh0aGlzLmxheW91dCBhcyBQYW5lbExheW91dCkud2lkZ2V0cywgKHc6IENvbGxhcHNlKSA9PiB3LndpZGdldCkpKTtcbiAgICAgICAgICB9XG4gICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGF5b3V0LndpZGdldHM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBY2NvcmRpb24ucHJvdG90eXBlLCBcInNlbGVjdGlvblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGlvbjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQWNjb3JkaW9uLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gKHdpZGdldCkge1xuICAgICAgICByZXR1cm4gQXJyYXlFeHQuZmluZEZpcnN0SW5kZXgodGhpcy5jb2xsYXBzZVdpZGdldHMsIGZ1bmN0aW9uICh3KSB7IHJldHVybiB3LndpZGdldCA9PT0gd2lkZ2V0OyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZCBhIHdpZGdldCB0byB0aGUgZW5kIG9mIHRoZSBhY2NvcmRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gd2lkZ2V0IC0gVGhlIHdpZGdldCB0byBhZGQgdG8gdGhlIGFjY29yZGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRoZSBDb2xsYXBzZSB3aWRnZXQgd3JhcHBpbmcgdGhlIGFkZGVkIHdpZGdldC5cbiAgICAgKlxuICAgICAqICMjIyMgTm90ZXNcbiAgICAgKiBUaGUgd2lkZ2V0IHdpbGwgYmUgd3JhcHBlZCBpbiBhIENvbGxhcHNlZFdpZGdldC5cbiAgICAgKi9cbiAgICBBY2NvcmRpb24ucHJvdG90eXBlLmFkZFdpZGdldCA9IGZ1bmN0aW9uICh3aWRnZXQpIHtcbiAgICAgICAgdmFyIGNvbGxhcHNlID0gdGhpcy5fd3JhcFdpZGdldCh3aWRnZXQpO1xuICAgICAgICBjb2xsYXBzZS5jb2xsYXBzZWQgPSB0cnVlO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmFkZFdpZGdldC5jYWxsKHRoaXMsIGNvbGxhcHNlKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uLmFkanVzdFNlbGVjdGlvbkZvckluc2VydCh0aGlzLndpZGdldHMubGVuZ3RoIC0gMSwgY29sbGFwc2UpO1xuICAgICAgICByZXR1cm4gY29sbGFwc2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbnNlcnQgYSB3aWRnZXQgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBpbmRleCAtIFRoZSBpbmRleCBhdCB3aGljaCB0byBpbnNlcnQgdGhlIHdpZGdldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB3aWRnZXQgLSBUaGUgd2lkZ2V0IHRvIGluc2VydCBpbnRvIHRvIHRoZSBhY2NvcmRpb24uXG4gICAgICpcbiAgICAgKiAjIyMjIE5vdGVzXG4gICAgICogSWYgdGhlIHdpZGdldCBpcyBhbHJlYWR5IGNvbnRhaW5lZCBpbiB0aGUgcGFuZWwsIGl0IHdpbGwgYmUgbW92ZWQuXG4gICAgICovXG4gICAgQWNjb3JkaW9uLnByb3RvdHlwZS5pbnNlcnRXaWRnZXQgPSBmdW5jdGlvbiAoaW5kZXgsIHdpZGdldCkge1xuICAgICAgICB2YXIgY29sbGFwc2UgPSB0aGlzLl93cmFwV2lkZ2V0KHdpZGdldCk7XG4gICAgICAgIGNvbGxhcHNlLmNvbGxhcHNlZCA9IHRydWU7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5zZXJ0V2lkZ2V0LmNhbGwodGhpcywgaW5kZXgsIGNvbGxhcHNlKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uLmFkanVzdFNlbGVjdGlvbkZvckluc2VydChpbmRleCwgY29sbGFwc2UpO1xuICAgIH07XG4gICAgQWNjb3JkaW9uLnByb3RvdHlwZS5yZW1vdmVXaWRnZXQgPSBmdW5jdGlvbiAod2lkZ2V0KSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXhPZih3aWRnZXQpO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdmFyIGNvbGxhcHNlID0gdGhpcy5jb2xsYXBzZVdpZGdldHNbaW5kZXhdO1xuICAgICAgICAgICAgd2lkZ2V0LnBhcmVudCA9IG51bGw7XG4gICAgICAgICAgICBjb2xsYXBzZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb24uYWRqdXN0U2VsZWN0aW9uRm9yUmVtb3ZlKGluZGV4LCBudWxsKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQWNjb3JkaW9uLnByb3RvdHlwZS5fd3JhcFdpZGdldCA9IGZ1bmN0aW9uICh3aWRnZXQpIHtcbiAgICAgICAgdmFyIGNvbGxhcHNlID0gbmV3IENvbGxhcHNlKHsgd2lkZ2V0OiB3aWRnZXQgfSk7XG4gICAgICAgIGNvbGxhcHNlLmFkZENsYXNzKEFDQ09SRElPTl9DSElMRF9DTEFTUyk7XG4gICAgICAgIGNvbGxhcHNlLmNvbGxhcHNlQ2hhbmdlZC5jb25uZWN0KHRoaXMuX29uQ29sbGFwc2VDaGFuZ2UsIHRoaXMpO1xuICAgICAgICByZXR1cm4gY29sbGFwc2U7XG4gICAgfTtcbiAgICBBY2NvcmRpb24ucHJvdG90eXBlLl9vbkNvbGxhcHNlQ2hhbmdlID0gZnVuY3Rpb24gKHNlbmRlcikge1xuICAgICAgICBpZiAoIXNlbmRlci5jb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbi52YWx1ZSA9IHNlbmRlcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9zZWxlY3Rpb24udmFsdWUgPT09IHNlbmRlciAmJiBzZW5kZXIuY29sbGFwc2VkKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb24udmFsdWUgPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBY2NvcmRpb24ucHJvdG90eXBlLl9vblNlbGVjdGlvbkNoYW5nZWQgPSBmdW5jdGlvbiAoc2VuZGVyLCBjaGFuZ2UpIHtcbiAgICAgICAgLy8gQ29sbGFwc2UgcHJldmlvdXMgd2lkZ2V0LCBvcGVuIGN1cnJlbnQgd2lkZ2V0XG4gICAgICAgIHZhciBwdiA9IGNoYW5nZS5wcmV2aW91c1ZhbHVlO1xuICAgICAgICB2YXIgY3YgPSBjaGFuZ2UuY3VycmVudFZhbHVlO1xuICAgICAgICBpZiAocHYpIHtcbiAgICAgICAgICAgIHB2LmNvbGxhcHNlZCA9IHRydWU7XG4gICAgICAgICAgICBwdi5yZW1vdmVDbGFzcyhBQ0NPUkRJT05fQ0hJTERfQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3YpIHtcbiAgICAgICAgICAgIGN2LmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgY3YuYWRkQ2xhc3MoQUNDT1JESU9OX0NISUxEX0FDVElWRV9DTEFTUyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBBY2NvcmRpb247XG59KFBhbmVsKSk7XG5leHBvcnQgeyBBY2NvcmRpb24gfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG51bWVyYWxzKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9bMC05XS9nLCBmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gbnVtZXJhbHNbK2ldO1xuICAgIH0pO1xuICB9O1xufVxuIiwiLy8gW1tmaWxsXWFsaWduXVtzaWduXVtzeW1ib2xdWzBdW3dpZHRoXVssXVsucHJlY2lzaW9uXVt+XVt0eXBlXVxudmFyIHJlID0gL14oPzooLik/KFs8Pj1eXSkpPyhbK1xcLSggXSk/KFskI10pPygwKT8oXFxkKyk/KCwpPyhcXC5cXGQrKT8ofik/KFthLXolXSk/JC9pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRTcGVjaWZpZXIoc3BlY2lmaWVyKSB7XG4gIGlmICghKG1hdGNoID0gcmUuZXhlYyhzcGVjaWZpZXIpKSkgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBmb3JtYXQ6IFwiICsgc3BlY2lmaWVyKTtcbiAgdmFyIG1hdGNoO1xuICByZXR1cm4gbmV3IEZvcm1hdFNwZWNpZmllcih7XG4gICAgZmlsbDogbWF0Y2hbMV0sXG4gICAgYWxpZ246IG1hdGNoWzJdLFxuICAgIHNpZ246IG1hdGNoWzNdLFxuICAgIHN5bWJvbDogbWF0Y2hbNF0sXG4gICAgemVybzogbWF0Y2hbNV0sXG4gICAgd2lkdGg6IG1hdGNoWzZdLFxuICAgIGNvbW1hOiBtYXRjaFs3XSxcbiAgICBwcmVjaXNpb246IG1hdGNoWzhdICYmIG1hdGNoWzhdLnNsaWNlKDEpLFxuICAgIHRyaW06IG1hdGNoWzldLFxuICAgIHR5cGU6IG1hdGNoWzEwXVxuICB9KTtcbn1cblxuZm9ybWF0U3BlY2lmaWVyLnByb3RvdHlwZSA9IEZvcm1hdFNwZWNpZmllci5wcm90b3R5cGU7IC8vIGluc3RhbmNlb2ZcblxuZXhwb3J0IGZ1bmN0aW9uIEZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIpIHtcbiAgdGhpcy5maWxsID0gc3BlY2lmaWVyLmZpbGwgPT09IHVuZGVmaW5lZCA/IFwiIFwiIDogc3BlY2lmaWVyLmZpbGwgKyBcIlwiO1xuICB0aGlzLmFsaWduID0gc3BlY2lmaWVyLmFsaWduID09PSB1bmRlZmluZWQgPyBcIj5cIiA6IHNwZWNpZmllci5hbGlnbiArIFwiXCI7XG4gIHRoaXMuc2lnbiA9IHNwZWNpZmllci5zaWduID09PSB1bmRlZmluZWQgPyBcIi1cIiA6IHNwZWNpZmllci5zaWduICsgXCJcIjtcbiAgdGhpcy5zeW1ib2wgPSBzcGVjaWZpZXIuc3ltYm9sID09PSB1bmRlZmluZWQgPyBcIlwiIDogc3BlY2lmaWVyLnN5bWJvbCArIFwiXCI7XG4gIHRoaXMuemVybyA9ICEhc3BlY2lmaWVyLnplcm87XG4gIHRoaXMud2lkdGggPSBzcGVjaWZpZXIud2lkdGggPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6ICtzcGVjaWZpZXIud2lkdGg7XG4gIHRoaXMuY29tbWEgPSAhIXNwZWNpZmllci5jb21tYTtcbiAgdGhpcy5wcmVjaXNpb24gPSBzcGVjaWZpZXIucHJlY2lzaW9uID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiArc3BlY2lmaWVyLnByZWNpc2lvbjtcbiAgdGhpcy50cmltID0gISFzcGVjaWZpZXIudHJpbTtcbiAgdGhpcy50eXBlID0gc3BlY2lmaWVyLnR5cGUgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBzcGVjaWZpZXIudHlwZSArIFwiXCI7XG59XG5cbkZvcm1hdFNwZWNpZmllci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZmlsbFxuICAgICAgKyB0aGlzLmFsaWduXG4gICAgICArIHRoaXMuc2lnblxuICAgICAgKyB0aGlzLnN5bWJvbFxuICAgICAgKyAodGhpcy56ZXJvID8gXCIwXCIgOiBcIlwiKVxuICAgICAgKyAodGhpcy53aWR0aCA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IE1hdGgubWF4KDEsIHRoaXMud2lkdGggfCAwKSlcbiAgICAgICsgKHRoaXMuY29tbWEgPyBcIixcIiA6IFwiXCIpXG4gICAgICArICh0aGlzLnByZWNpc2lvbiA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IFwiLlwiICsgTWF0aC5tYXgoMCwgdGhpcy5wcmVjaXNpb24gfCAwKSlcbiAgICAgICsgKHRoaXMudHJpbSA/IFwiflwiIDogXCJcIilcbiAgICAgICsgdGhpcy50eXBlO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHg7XG59XG4iLCJpbXBvcnQgZm9ybWF0TG9jYWxlIGZyb20gXCIuL2xvY2FsZS5qc1wiO1xuXG52YXIgbG9jYWxlO1xuZXhwb3J0IHZhciBmb3JtYXQ7XG5leHBvcnQgdmFyIGZvcm1hdFByZWZpeDtcblxuZGVmYXVsdExvY2FsZSh7XG4gIGRlY2ltYWw6IFwiLlwiLFxuICB0aG91c2FuZHM6IFwiLFwiLFxuICBncm91cGluZzogWzNdLFxuICBjdXJyZW5jeTogW1wiJFwiLCBcIlwiXSxcbiAgbWludXM6IFwiLVwiXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVmYXVsdExvY2FsZShkZWZpbml0aW9uKSB7XG4gIGxvY2FsZSA9IGZvcm1hdExvY2FsZShkZWZpbml0aW9uKTtcbiAgZm9ybWF0ID0gbG9jYWxlLmZvcm1hdDtcbiAgZm9ybWF0UHJlZml4ID0gbG9jYWxlLmZvcm1hdFByZWZpeDtcbiAgcmV0dXJuIGxvY2FsZTtcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgSnVweXRlciBEZXZlbG9wbWVudCBUZWFtLlxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNb2RpZmllZCBCU0QgTGljZW5zZS5cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IHsgRE9NV2lkZ2V0VmlldywgU3R5bGVNb2RlbCB9IGZyb20gJ0BqdXB5dGVyLXdpZGdldHMvYmFzZSc7XG5pbXBvcnQgeyBDb3JlRE9NV2lkZ2V0TW9kZWwgfSBmcm9tICcuL3dpZGdldF9jb3JlJztcbmltcG9ydCB7IEpVUFlURVJfQ09OVFJPTFNfVkVSU0lPTiB9IGZyb20gJy4vdmVyc2lvbic7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xudmFyIEJ1dHRvblN0eWxlTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJ1dHRvblN0eWxlTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQnV0dG9uU3R5bGVNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBCdXR0b25TdHlsZU1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdCdXR0b25TdHlsZU1vZGVsJyxcbiAgICAgICAgICAgIF9tb2RlbF9tb2R1bGU6ICdAanVweXRlci13aWRnZXRzL2NvbnRyb2xzJyxcbiAgICAgICAgICAgIF9tb2RlbF9tb2R1bGVfdmVyc2lvbjogSlVQWVRFUl9DT05UUk9MU19WRVJTSU9OLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEJ1dHRvblN0eWxlTW9kZWwuc3R5bGVQcm9wZXJ0aWVzID0ge1xuICAgICAgICBidXR0b25fY29sb3I6IHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogJ2JhY2tncm91bmQtY29sb3InLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBmb250X3dlaWdodDoge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcnLFxuICAgICAgICAgICAgYXR0cmlidXRlOiAnZm9udC13ZWlnaHQnLFxuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEJ1dHRvblN0eWxlTW9kZWw7XG59KFN0eWxlTW9kZWwpKTtcbmV4cG9ydCB7IEJ1dHRvblN0eWxlTW9kZWwgfTtcbnZhciBCdXR0b25Nb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQnV0dG9uTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQnV0dG9uTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQnV0dG9uTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgICAgICB0b29sdGlwOiAnJyxcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGljb246ICcnLFxuICAgICAgICAgICAgYnV0dG9uX3N0eWxlOiAnJyxcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdCdXR0b25WaWV3JyxcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnQnV0dG9uTW9kZWwnLFxuICAgICAgICAgICAgc3R5bGU6IG51bGxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQnV0dG9uTW9kZWw7XG59KENvcmVET01XaWRnZXRNb2RlbCkpO1xuZXhwb3J0IHsgQnV0dG9uTW9kZWwgfTtcbnZhciBCdXR0b25WaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCdXR0b25WaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJ1dHRvblZpZXcoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gdmlldyBpcyByZW5kZXJlZC5cbiAgICAgKi9cbiAgICBCdXR0b25WaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnanVweXRlci13aWRnZXRzJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnanVweXRlci1idXR0b24nKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtYnV0dG9uJyk7XG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpidXR0b25fc3R5bGUnLCB0aGlzLnVwZGF0ZV9idXR0b25fc3R5bGUpO1xuICAgICAgICB0aGlzLnNldF9idXR0b25fc3R5bGUoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTsgLy8gU2V0IGRlZmF1bHRzLlxuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcbiAgICAgKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBtb2RlbCBpcyBjaGFuZ2VkLiBUaGUgbW9kZWwgbWF5IGhhdmUgYmVlblxuICAgICAqIGNoYW5nZWQgYnkgYW5vdGhlciB2aWV3IG9yIGJ5IGEgc3RhdGUgdXBkYXRlIGZyb20gdGhlIGJhY2stZW5kLlxuICAgICAqL1xuICAgIEJ1dHRvblZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbC5kaXNhYmxlZCA9IHRoaXMubW9kZWwuZ2V0KCdkaXNhYmxlZCcpO1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgndGl0bGUnLCB0aGlzLm1vZGVsLmdldCgndG9vbHRpcCcpKTtcbiAgICAgICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5tb2RlbC5nZXQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIHZhciBpY29uID0gdGhpcy5tb2RlbC5nZXQoJ2ljb24nKTtcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uLmxlbmd0aCB8fCBpY29uLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5lbC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgaWYgKGljb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICAgICAgICAgaS5jbGFzc0xpc3QuYWRkKCdmYScpO1xuICAgICAgICAgICAgICAgIGkuY2xhc3NMaXN0LmFkZCgnZmEtJyArIGljb24pO1xuICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaS5jbGFzc0xpc3QuYWRkKCdjZW50ZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGVzY3JpcHRpb24pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIEJ1dHRvblZpZXcucHJvdG90eXBlLnVwZGF0ZV9idXR0b25fc3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlX21hcHBlZF9jbGFzc2VzKEJ1dHRvblZpZXcuY2xhc3NfbWFwLCAnYnV0dG9uX3N0eWxlJyk7XG4gICAgfTtcbiAgICBCdXR0b25WaWV3LnByb3RvdHlwZS5zZXRfYnV0dG9uX3N0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNldF9tYXBwZWRfY2xhc3NlcyhCdXR0b25WaWV3LmNsYXNzX21hcCwgJ2J1dHRvbl9zdHlsZScpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGljdGlvbmFyeSBvZiBldmVudHMgYW5kIGhhbmRsZXJzXG4gICAgICovXG4gICAgQnV0dG9uVmlldy5wcm90b3R5cGUuZXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUT0RPOiByZXR1cm4gdHlwaW5nIG5vdCBuZWVkZWQgaW4gVHlwZXNjcmlwdCBsYXRlciB0aGFuIDEuOC54XG4gICAgICAgIC8vIFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIyMDc3MDIzL3doeS1jYW50LWktaW5kaXJlY3RseS1yZXR1cm4tYW4tb2JqZWN0LWxpdGVyYWwtdG8tc2F0aXNmeS1hbi1pbmRleC1zaWduYXR1cmUtcmUgYW5kIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9wdWxsLzcwMjlcbiAgICAgICAgcmV0dXJuIHsgJ2NsaWNrJzogJ19oYW5kbGVfY2xpY2snIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgICAqL1xuICAgIEJ1dHRvblZpZXcucHJvdG90eXBlLl9oYW5kbGVfY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZW5kKHsgZXZlbnQ6ICdjbGljaycgfSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uVmlldy5wcm90b3R5cGUsIFwidGFnTmFtZVwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZGVmYXVsdCB0YWcgbmFtZS5cbiAgICAgICAgICpcbiAgICAgICAgICogIyMjIyBOb3Rlc1xuICAgICAgICAgKiBUaGlzIGlzIGEgcmVhZC1vbmx5IGF0dHJpYnV0ZS5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gV2UgY2FuJ3QgbWFrZSB0aGlzIGFuIGF0dHJpYnV0ZSB3aXRoIGEgZGVmYXVsdCB2YWx1ZVxuICAgICAgICAgICAgLy8gc2luY2UgaXQgd291bGQgYmUgc2V0IGFmdGVyIGl0IGlzIG5lZWRlZCBpbiB0aGVcbiAgICAgICAgICAgIC8vIGNvbnN0cnVjdG9yLlxuICAgICAgICAgICAgcmV0dXJuICdidXR0b24nO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBCdXR0b25WaWV3LmNsYXNzX21hcCA9IHtcbiAgICAgICAgcHJpbWFyeTogWydtb2QtcHJpbWFyeSddLFxuICAgICAgICBzdWNjZXNzOiBbJ21vZC1zdWNjZXNzJ10sXG4gICAgICAgIGluZm86IFsnbW9kLWluZm8nXSxcbiAgICAgICAgd2FybmluZzogWydtb2Qtd2FybmluZyddLFxuICAgICAgICBkYW5nZXI6IFsnbW9kLWRhbmdlciddXG4gICAgfTtcbiAgICByZXR1cm4gQnV0dG9uVmlldztcbn0oRE9NV2lkZ2V0VmlldykpO1xuZXhwb3J0IHsgQnV0dG9uVmlldyB9O1xuIiwiLyohXG4gKiBqUXVlcnkgVUkgV2lkZ2V0IDEuMTIuMVxuICogaHR0cDovL2pxdWVyeXVpLmNvbVxuICpcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKi9cblxuLy8+PmxhYmVsOiBXaWRnZXRcbi8vPj5ncm91cDogQ29yZVxuLy8+PmRlc2NyaXB0aW9uOiBQcm92aWRlcyBhIGZhY3RvcnkgZm9yIGNyZWF0aW5nIHN0YXRlZnVsIHdpZGdldHMgd2l0aCBhIGNvbW1vbiBBUEkuXG4vLz4+ZG9jczogaHR0cDovL2FwaS5qcXVlcnl1aS5jb20valF1ZXJ5LndpZGdldC9cbi8vPj5kZW1vczogaHR0cDovL2pxdWVyeXVpLmNvbS93aWRnZXQvXG5cbiggZnVuY3Rpb24oIGZhY3RvcnkgKSB7XG5cdGlmICggdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQgKSB7XG5cblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKCBbIFwianF1ZXJ5XCIsIFwiLi92ZXJzaW9uXCIgXSwgZmFjdG9yeSApO1xuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gQnJvd3NlciBnbG9iYWxzXG5cdFx0ZmFjdG9yeSggalF1ZXJ5ICk7XG5cdH1cbn0oIGZ1bmN0aW9uKCAkICkge1xuXG52YXIgd2lkZ2V0VXVpZCA9IDA7XG52YXIgd2lkZ2V0U2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbiQuY2xlYW5EYXRhID0gKCBmdW5jdGlvbiggb3JpZyApIHtcblx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtcyApIHtcblx0XHR2YXIgZXZlbnRzLCBlbGVtLCBpO1xuXHRcdGZvciAoIGkgPSAwOyAoIGVsZW0gPSBlbGVtc1sgaSBdICkgIT0gbnVsbDsgaSsrICkge1xuXHRcdFx0dHJ5IHtcblxuXHRcdFx0XHQvLyBPbmx5IHRyaWdnZXIgcmVtb3ZlIHdoZW4gbmVjZXNzYXJ5IHRvIHNhdmUgdGltZVxuXHRcdFx0XHRldmVudHMgPSAkLl9kYXRhKCBlbGVtLCBcImV2ZW50c1wiICk7XG5cdFx0XHRcdGlmICggZXZlbnRzICYmIGV2ZW50cy5yZW1vdmUgKSB7XG5cdFx0XHRcdFx0JCggZWxlbSApLnRyaWdnZXJIYW5kbGVyKCBcInJlbW92ZVwiICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0Ly8gSHR0cDovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvODIzNVxuXHRcdFx0fSBjYXRjaCAoIGUgKSB7fVxuXHRcdH1cblx0XHRvcmlnKCBlbGVtcyApO1xuXHR9O1xufSApKCAkLmNsZWFuRGF0YSApO1xuXG4kLndpZGdldCA9IGZ1bmN0aW9uKCBuYW1lLCBiYXNlLCBwcm90b3R5cGUgKSB7XG5cdHZhciBleGlzdGluZ0NvbnN0cnVjdG9yLCBjb25zdHJ1Y3RvciwgYmFzZVByb3RvdHlwZTtcblxuXHQvLyBQcm94aWVkUHJvdG90eXBlIGFsbG93cyB0aGUgcHJvdmlkZWQgcHJvdG90eXBlIHRvIHJlbWFpbiB1bm1vZGlmaWVkXG5cdC8vIHNvIHRoYXQgaXQgY2FuIGJlIHVzZWQgYXMgYSBtaXhpbiBmb3IgbXVsdGlwbGUgd2lkZ2V0cyAoIzg4NzYpXG5cdHZhciBwcm94aWVkUHJvdG90eXBlID0ge307XG5cblx0dmFyIG5hbWVzcGFjZSA9IG5hbWUuc3BsaXQoIFwiLlwiIClbIDAgXTtcblx0bmFtZSA9IG5hbWUuc3BsaXQoIFwiLlwiIClbIDEgXTtcblx0dmFyIGZ1bGxOYW1lID0gbmFtZXNwYWNlICsgXCItXCIgKyBuYW1lO1xuXG5cdGlmICggIXByb3RvdHlwZSApIHtcblx0XHRwcm90b3R5cGUgPSBiYXNlO1xuXHRcdGJhc2UgPSAkLldpZGdldDtcblx0fVxuXG5cdGlmICggJC5pc0FycmF5KCBwcm90b3R5cGUgKSApIHtcblx0XHRwcm90b3R5cGUgPSAkLmV4dGVuZC5hcHBseSggbnVsbCwgWyB7fSBdLmNvbmNhdCggcHJvdG90eXBlICkgKTtcblx0fVxuXG5cdC8vIENyZWF0ZSBzZWxlY3RvciBmb3IgcGx1Z2luXG5cdCQuZXhwclsgXCI6XCIgXVsgZnVsbE5hbWUudG9Mb3dlckNhc2UoKSBdID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuICEhJC5kYXRhKCBlbGVtLCBmdWxsTmFtZSApO1xuXHR9O1xuXG5cdCRbIG5hbWVzcGFjZSBdID0gJFsgbmFtZXNwYWNlIF0gfHwge307XG5cdGV4aXN0aW5nQ29uc3RydWN0b3IgPSAkWyBuYW1lc3BhY2UgXVsgbmFtZSBdO1xuXHRjb25zdHJ1Y3RvciA9ICRbIG5hbWVzcGFjZSBdWyBuYW1lIF0gPSBmdW5jdGlvbiggb3B0aW9ucywgZWxlbWVudCApIHtcblxuXHRcdC8vIEFsbG93IGluc3RhbnRpYXRpb24gd2l0aG91dCBcIm5ld1wiIGtleXdvcmRcblx0XHRpZiAoICF0aGlzLl9jcmVhdGVXaWRnZXQgKSB7XG5cdFx0XHRyZXR1cm4gbmV3IGNvbnN0cnVjdG9yKCBvcHRpb25zLCBlbGVtZW50ICk7XG5cdFx0fVxuXG5cdFx0Ly8gQWxsb3cgaW5zdGFudGlhdGlvbiB3aXRob3V0IGluaXRpYWxpemluZyBmb3Igc2ltcGxlIGluaGVyaXRhbmNlXG5cdFx0Ly8gbXVzdCB1c2UgXCJuZXdcIiBrZXl3b3JkICh0aGUgY29kZSBhYm92ZSBhbHdheXMgcGFzc2VzIGFyZ3MpXG5cdFx0aWYgKCBhcmd1bWVudHMubGVuZ3RoICkge1xuXHRcdFx0dGhpcy5fY3JlYXRlV2lkZ2V0KCBvcHRpb25zLCBlbGVtZW50ICk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIEV4dGVuZCB3aXRoIHRoZSBleGlzdGluZyBjb25zdHJ1Y3RvciB0byBjYXJyeSBvdmVyIGFueSBzdGF0aWMgcHJvcGVydGllc1xuXHQkLmV4dGVuZCggY29uc3RydWN0b3IsIGV4aXN0aW5nQ29uc3RydWN0b3IsIHtcblx0XHR2ZXJzaW9uOiBwcm90b3R5cGUudmVyc2lvbixcblxuXHRcdC8vIENvcHkgdGhlIG9iamVjdCB1c2VkIHRvIGNyZWF0ZSB0aGUgcHJvdG90eXBlIGluIGNhc2Ugd2UgbmVlZCB0b1xuXHRcdC8vIHJlZGVmaW5lIHRoZSB3aWRnZXQgbGF0ZXJcblx0XHRfcHJvdG86ICQuZXh0ZW5kKCB7fSwgcHJvdG90eXBlICksXG5cblx0XHQvLyBUcmFjayB3aWRnZXRzIHRoYXQgaW5oZXJpdCBmcm9tIHRoaXMgd2lkZ2V0IGluIGNhc2UgdGhpcyB3aWRnZXQgaXNcblx0XHQvLyByZWRlZmluZWQgYWZ0ZXIgYSB3aWRnZXQgaW5oZXJpdHMgZnJvbSBpdFxuXHRcdF9jaGlsZENvbnN0cnVjdG9yczogW11cblx0fSApO1xuXG5cdGJhc2VQcm90b3R5cGUgPSBuZXcgYmFzZSgpO1xuXG5cdC8vIFdlIG5lZWQgdG8gbWFrZSB0aGUgb3B0aW9ucyBoYXNoIGEgcHJvcGVydHkgZGlyZWN0bHkgb24gdGhlIG5ldyBpbnN0YW5jZVxuXHQvLyBvdGhlcndpc2Ugd2UnbGwgbW9kaWZ5IHRoZSBvcHRpb25zIGhhc2ggb24gdGhlIHByb3RvdHlwZSB0aGF0IHdlJ3JlXG5cdC8vIGluaGVyaXRpbmcgZnJvbVxuXHRiYXNlUHJvdG90eXBlLm9wdGlvbnMgPSAkLndpZGdldC5leHRlbmQoIHt9LCBiYXNlUHJvdG90eXBlLm9wdGlvbnMgKTtcblx0JC5lYWNoKCBwcm90b3R5cGUsIGZ1bmN0aW9uKCBwcm9wLCB2YWx1ZSApIHtcblx0XHRpZiAoICEkLmlzRnVuY3Rpb24oIHZhbHVlICkgKSB7XG5cdFx0XHRwcm94aWVkUHJvdG90eXBlWyBwcm9wIF0gPSB2YWx1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cHJveGllZFByb3RvdHlwZVsgcHJvcCBdID0gKCBmdW5jdGlvbigpIHtcblx0XHRcdGZ1bmN0aW9uIF9zdXBlcigpIHtcblx0XHRcdFx0cmV0dXJuIGJhc2UucHJvdG90eXBlWyBwcm9wIF0uYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBfc3VwZXJBcHBseSggYXJncyApIHtcblx0XHRcdFx0cmV0dXJuIGJhc2UucHJvdG90eXBlWyBwcm9wIF0uYXBwbHkoIHRoaXMsIGFyZ3MgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgX19zdXBlciA9IHRoaXMuX3N1cGVyO1xuXHRcdFx0XHR2YXIgX19zdXBlckFwcGx5ID0gdGhpcy5fc3VwZXJBcHBseTtcblx0XHRcdFx0dmFyIHJldHVyblZhbHVlO1xuXG5cdFx0XHRcdHRoaXMuX3N1cGVyID0gX3N1cGVyO1xuXHRcdFx0XHR0aGlzLl9zdXBlckFwcGx5ID0gX3N1cGVyQXBwbHk7XG5cblx0XHRcdFx0cmV0dXJuVmFsdWUgPSB2YWx1ZS5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cblx0XHRcdFx0dGhpcy5fc3VwZXIgPSBfX3N1cGVyO1xuXHRcdFx0XHR0aGlzLl9zdXBlckFwcGx5ID0gX19zdXBlckFwcGx5O1xuXG5cdFx0XHRcdHJldHVybiByZXR1cm5WYWx1ZTtcblx0XHRcdH07XG5cdFx0fSApKCk7XG5cdH0gKTtcblx0Y29uc3RydWN0b3IucHJvdG90eXBlID0gJC53aWRnZXQuZXh0ZW5kKCBiYXNlUHJvdG90eXBlLCB7XG5cblx0XHQvLyBUT0RPOiByZW1vdmUgc3VwcG9ydCBmb3Igd2lkZ2V0RXZlbnRQcmVmaXhcblx0XHQvLyBhbHdheXMgdXNlIHRoZSBuYW1lICsgYSBjb2xvbiBhcyB0aGUgcHJlZml4LCBlLmcuLCBkcmFnZ2FibGU6c3RhcnRcblx0XHQvLyBkb24ndCBwcmVmaXggZm9yIHdpZGdldHMgdGhhdCBhcmVuJ3QgRE9NLWJhc2VkXG5cdFx0d2lkZ2V0RXZlbnRQcmVmaXg6IGV4aXN0aW5nQ29uc3RydWN0b3IgPyAoIGJhc2VQcm90b3R5cGUud2lkZ2V0RXZlbnRQcmVmaXggfHwgbmFtZSApIDogbmFtZVxuXHR9LCBwcm94aWVkUHJvdG90eXBlLCB7XG5cdFx0Y29uc3RydWN0b3I6IGNvbnN0cnVjdG9yLFxuXHRcdG5hbWVzcGFjZTogbmFtZXNwYWNlLFxuXHRcdHdpZGdldE5hbWU6IG5hbWUsXG5cdFx0d2lkZ2V0RnVsbE5hbWU6IGZ1bGxOYW1lXG5cdH0gKTtcblxuXHQvLyBJZiB0aGlzIHdpZGdldCBpcyBiZWluZyByZWRlZmluZWQgdGhlbiB3ZSBuZWVkIHRvIGZpbmQgYWxsIHdpZGdldHMgdGhhdFxuXHQvLyBhcmUgaW5oZXJpdGluZyBmcm9tIGl0IGFuZCByZWRlZmluZSBhbGwgb2YgdGhlbSBzbyB0aGF0IHRoZXkgaW5oZXJpdCBmcm9tXG5cdC8vIHRoZSBuZXcgdmVyc2lvbiBvZiB0aGlzIHdpZGdldC4gV2UncmUgZXNzZW50aWFsbHkgdHJ5aW5nIHRvIHJlcGxhY2Ugb25lXG5cdC8vIGxldmVsIGluIHRoZSBwcm90b3R5cGUgY2hhaW4uXG5cdGlmICggZXhpc3RpbmdDb25zdHJ1Y3RvciApIHtcblx0XHQkLmVhY2goIGV4aXN0aW5nQ29uc3RydWN0b3IuX2NoaWxkQ29uc3RydWN0b3JzLCBmdW5jdGlvbiggaSwgY2hpbGQgKSB7XG5cdFx0XHR2YXIgY2hpbGRQcm90b3R5cGUgPSBjaGlsZC5wcm90b3R5cGU7XG5cblx0XHRcdC8vIFJlZGVmaW5lIHRoZSBjaGlsZCB3aWRnZXQgdXNpbmcgdGhlIHNhbWUgcHJvdG90eXBlIHRoYXQgd2FzXG5cdFx0XHQvLyBvcmlnaW5hbGx5IHVzZWQsIGJ1dCBpbmhlcml0IGZyb20gdGhlIG5ldyB2ZXJzaW9uIG9mIHRoZSBiYXNlXG5cdFx0XHQkLndpZGdldCggY2hpbGRQcm90b3R5cGUubmFtZXNwYWNlICsgXCIuXCIgKyBjaGlsZFByb3RvdHlwZS53aWRnZXROYW1lLCBjb25zdHJ1Y3Rvcixcblx0XHRcdFx0Y2hpbGQuX3Byb3RvICk7XG5cdFx0fSApO1xuXG5cdFx0Ly8gUmVtb3ZlIHRoZSBsaXN0IG9mIGV4aXN0aW5nIGNoaWxkIGNvbnN0cnVjdG9ycyBmcm9tIHRoZSBvbGQgY29uc3RydWN0b3Jcblx0XHQvLyBzbyB0aGUgb2xkIGNoaWxkIGNvbnN0cnVjdG9ycyBjYW4gYmUgZ2FyYmFnZSBjb2xsZWN0ZWRcblx0XHRkZWxldGUgZXhpc3RpbmdDb25zdHJ1Y3Rvci5fY2hpbGRDb25zdHJ1Y3RvcnM7XG5cdH0gZWxzZSB7XG5cdFx0YmFzZS5fY2hpbGRDb25zdHJ1Y3RvcnMucHVzaCggY29uc3RydWN0b3IgKTtcblx0fVxuXG5cdCQud2lkZ2V0LmJyaWRnZSggbmFtZSwgY29uc3RydWN0b3IgKTtcblxuXHRyZXR1cm4gY29uc3RydWN0b3I7XG59O1xuXG4kLndpZGdldC5leHRlbmQgPSBmdW5jdGlvbiggdGFyZ2V0ICkge1xuXHR2YXIgaW5wdXQgPSB3aWRnZXRTbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKTtcblx0dmFyIGlucHV0SW5kZXggPSAwO1xuXHR2YXIgaW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG5cdHZhciBrZXk7XG5cdHZhciB2YWx1ZTtcblxuXHRmb3IgKCA7IGlucHV0SW5kZXggPCBpbnB1dExlbmd0aDsgaW5wdXRJbmRleCsrICkge1xuXHRcdGZvciAoIGtleSBpbiBpbnB1dFsgaW5wdXRJbmRleCBdICkge1xuXHRcdFx0dmFsdWUgPSBpbnB1dFsgaW5wdXRJbmRleCBdWyBrZXkgXTtcblx0XHRcdGlmICggaW5wdXRbIGlucHV0SW5kZXggXS5oYXNPd25Qcm9wZXJ0eSgga2V5ICkgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHQvLyBDbG9uZSBvYmplY3RzXG5cdFx0XHRcdGlmICggJC5pc1BsYWluT2JqZWN0KCB2YWx1ZSApICkge1xuXHRcdFx0XHRcdHRhcmdldFsga2V5IF0gPSAkLmlzUGxhaW5PYmplY3QoIHRhcmdldFsga2V5IF0gKSA/XG5cdFx0XHRcdFx0XHQkLndpZGdldC5leHRlbmQoIHt9LCB0YXJnZXRbIGtleSBdLCB2YWx1ZSApIDpcblxuXHRcdFx0XHRcdFx0Ly8gRG9uJ3QgZXh0ZW5kIHN0cmluZ3MsIGFycmF5cywgZXRjLiB3aXRoIG9iamVjdHNcblx0XHRcdFx0XHRcdCQud2lkZ2V0LmV4dGVuZCgge30sIHZhbHVlICk7XG5cblx0XHRcdFx0Ly8gQ29weSBldmVyeXRoaW5nIGVsc2UgYnkgcmVmZXJlbmNlXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGFyZ2V0WyBrZXkgXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0YXJnZXQ7XG59O1xuXG4kLndpZGdldC5icmlkZ2UgPSBmdW5jdGlvbiggbmFtZSwgb2JqZWN0ICkge1xuXHR2YXIgZnVsbE5hbWUgPSBvYmplY3QucHJvdG90eXBlLndpZGdldEZ1bGxOYW1lIHx8IG5hbWU7XG5cdCQuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXHRcdHZhciBpc01ldGhvZENhbGwgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIjtcblx0XHR2YXIgYXJncyA9IHdpZGdldFNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMSApO1xuXHRcdHZhciByZXR1cm5WYWx1ZSA9IHRoaXM7XG5cblx0XHRpZiAoIGlzTWV0aG9kQ2FsbCApIHtcblxuXHRcdFx0Ly8gSWYgdGhpcyBpcyBhbiBlbXB0eSBjb2xsZWN0aW9uLCB3ZSBuZWVkIHRvIGhhdmUgdGhlIGluc3RhbmNlIG1ldGhvZFxuXHRcdFx0Ly8gcmV0dXJuIHVuZGVmaW5lZCBpbnN0ZWFkIG9mIHRoZSBqUXVlcnkgaW5zdGFuY2Vcblx0XHRcdGlmICggIXRoaXMubGVuZ3RoICYmIG9wdGlvbnMgPT09IFwiaW5zdGFuY2VcIiApIHtcblx0XHRcdFx0cmV0dXJuVmFsdWUgPSB1bmRlZmluZWQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciBtZXRob2RWYWx1ZTtcblx0XHRcdFx0XHR2YXIgaW5zdGFuY2UgPSAkLmRhdGEoIHRoaXMsIGZ1bGxOYW1lICk7XG5cblx0XHRcdFx0XHRpZiAoIG9wdGlvbnMgPT09IFwiaW5zdGFuY2VcIiApIHtcblx0XHRcdFx0XHRcdHJldHVyblZhbHVlID0gaW5zdGFuY2U7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCAhaW5zdGFuY2UgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJC5lcnJvciggXCJjYW5ub3QgY2FsbCBtZXRob2RzIG9uIFwiICsgbmFtZSArXG5cdFx0XHRcdFx0XHRcdFwiIHByaW9yIHRvIGluaXRpYWxpemF0aW9uOyBcIiArXG5cdFx0XHRcdFx0XHRcdFwiYXR0ZW1wdGVkIHRvIGNhbGwgbWV0aG9kICdcIiArIG9wdGlvbnMgKyBcIidcIiApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICggISQuaXNGdW5jdGlvbiggaW5zdGFuY2VbIG9wdGlvbnMgXSApIHx8IG9wdGlvbnMuY2hhckF0KCAwICkgPT09IFwiX1wiICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuICQuZXJyb3IoIFwibm8gc3VjaCBtZXRob2QgJ1wiICsgb3B0aW9ucyArIFwiJyBmb3IgXCIgKyBuYW1lICtcblx0XHRcdFx0XHRcdFx0XCIgd2lkZ2V0IGluc3RhbmNlXCIgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRtZXRob2RWYWx1ZSA9IGluc3RhbmNlWyBvcHRpb25zIF0uYXBwbHkoIGluc3RhbmNlLCBhcmdzICk7XG5cblx0XHRcdFx0XHRpZiAoIG1ldGhvZFZhbHVlICE9PSBpbnN0YW5jZSAmJiBtZXRob2RWYWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuVmFsdWUgPSBtZXRob2RWYWx1ZSAmJiBtZXRob2RWYWx1ZS5qcXVlcnkgP1xuXHRcdFx0XHRcdFx0XHRyZXR1cm5WYWx1ZS5wdXNoU3RhY2soIG1ldGhvZFZhbHVlLmdldCgpICkgOlxuXHRcdFx0XHRcdFx0XHRtZXRob2RWYWx1ZTtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBBbGxvdyBtdWx0aXBsZSBoYXNoZXMgdG8gYmUgcGFzc2VkIG9uIGluaXRcblx0XHRcdGlmICggYXJncy5sZW5ndGggKSB7XG5cdFx0XHRcdG9wdGlvbnMgPSAkLndpZGdldC5leHRlbmQuYXBwbHkoIG51bGwsIFsgb3B0aW9ucyBdLmNvbmNhdCggYXJncyApICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBpbnN0YW5jZSA9ICQuZGF0YSggdGhpcywgZnVsbE5hbWUgKTtcblx0XHRcdFx0aWYgKCBpbnN0YW5jZSApIHtcblx0XHRcdFx0XHRpbnN0YW5jZS5vcHRpb24oIG9wdGlvbnMgfHwge30gKTtcblx0XHRcdFx0XHRpZiAoIGluc3RhbmNlLl9pbml0ICkge1xuXHRcdFx0XHRcdFx0aW5zdGFuY2UuX2luaXQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JC5kYXRhKCB0aGlzLCBmdWxsTmFtZSwgbmV3IG9iamVjdCggb3B0aW9ucywgdGhpcyApICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmV0dXJuVmFsdWU7XG5cdH07XG59O1xuXG4kLldpZGdldCA9IGZ1bmN0aW9uKCAvKiBvcHRpb25zLCBlbGVtZW50ICovICkge307XG4kLldpZGdldC5fY2hpbGRDb25zdHJ1Y3RvcnMgPSBbXTtcblxuJC5XaWRnZXQucHJvdG90eXBlID0ge1xuXHR3aWRnZXROYW1lOiBcIndpZGdldFwiLFxuXHR3aWRnZXRFdmVudFByZWZpeDogXCJcIixcblx0ZGVmYXVsdEVsZW1lbnQ6IFwiPGRpdj5cIixcblxuXHRvcHRpb25zOiB7XG5cdFx0Y2xhc3Nlczoge30sXG5cdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXG5cdFx0Ly8gQ2FsbGJhY2tzXG5cdFx0Y3JlYXRlOiBudWxsXG5cdH0sXG5cblx0X2NyZWF0ZVdpZGdldDogZnVuY3Rpb24oIG9wdGlvbnMsIGVsZW1lbnQgKSB7XG5cdFx0ZWxlbWVudCA9ICQoIGVsZW1lbnQgfHwgdGhpcy5kZWZhdWx0RWxlbWVudCB8fCB0aGlzIClbIDAgXTtcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCBlbGVtZW50ICk7XG5cdFx0dGhpcy51dWlkID0gd2lkZ2V0VXVpZCsrO1xuXHRcdHRoaXMuZXZlbnROYW1lc3BhY2UgPSBcIi5cIiArIHRoaXMud2lkZ2V0TmFtZSArIHRoaXMudXVpZDtcblxuXHRcdHRoaXMuYmluZGluZ3MgPSAkKCk7XG5cdFx0dGhpcy5ob3ZlcmFibGUgPSAkKCk7XG5cdFx0dGhpcy5mb2N1c2FibGUgPSAkKCk7XG5cdFx0dGhpcy5jbGFzc2VzRWxlbWVudExvb2t1cCA9IHt9O1xuXG5cdFx0aWYgKCBlbGVtZW50ICE9PSB0aGlzICkge1xuXHRcdFx0JC5kYXRhKCBlbGVtZW50LCB0aGlzLndpZGdldEZ1bGxOYW1lLCB0aGlzICk7XG5cdFx0XHR0aGlzLl9vbiggdHJ1ZSwgdGhpcy5lbGVtZW50LCB7XG5cdFx0XHRcdHJlbW92ZTogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0XHRcdGlmICggZXZlbnQudGFyZ2V0ID09PSBlbGVtZW50ICkge1xuXHRcdFx0XHRcdFx0dGhpcy5kZXN0cm95KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0XHR0aGlzLmRvY3VtZW50ID0gJCggZWxlbWVudC5zdHlsZSA/XG5cblx0XHRcdFx0Ly8gRWxlbWVudCB3aXRoaW4gdGhlIGRvY3VtZW50XG5cdFx0XHRcdGVsZW1lbnQub3duZXJEb2N1bWVudCA6XG5cblx0XHRcdFx0Ly8gRWxlbWVudCBpcyB3aW5kb3cgb3IgZG9jdW1lbnRcblx0XHRcdFx0ZWxlbWVudC5kb2N1bWVudCB8fCBlbGVtZW50ICk7XG5cdFx0XHR0aGlzLndpbmRvdyA9ICQoIHRoaXMuZG9jdW1lbnRbIDAgXS5kZWZhdWx0VmlldyB8fCB0aGlzLmRvY3VtZW50WyAwIF0ucGFyZW50V2luZG93ICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5vcHRpb25zID0gJC53aWRnZXQuZXh0ZW5kKCB7fSxcblx0XHRcdHRoaXMub3B0aW9ucyxcblx0XHRcdHRoaXMuX2dldENyZWF0ZU9wdGlvbnMoKSxcblx0XHRcdG9wdGlvbnMgKTtcblxuXHRcdHRoaXMuX2NyZWF0ZSgpO1xuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuZGlzYWJsZWQgKSB7XG5cdFx0XHR0aGlzLl9zZXRPcHRpb25EaXNhYmxlZCggdGhpcy5vcHRpb25zLmRpc2FibGVkICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fdHJpZ2dlciggXCJjcmVhdGVcIiwgbnVsbCwgdGhpcy5fZ2V0Q3JlYXRlRXZlbnREYXRhKCkgKTtcblx0XHR0aGlzLl9pbml0KCk7XG5cdH0sXG5cblx0X2dldENyZWF0ZU9wdGlvbnM6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB7fTtcblx0fSxcblxuXHRfZ2V0Q3JlYXRlRXZlbnREYXRhOiAkLm5vb3AsXG5cblx0X2NyZWF0ZTogJC5ub29wLFxuXG5cdF9pbml0OiAkLm5vb3AsXG5cblx0ZGVzdHJveTogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xuXG5cdFx0dGhpcy5fZGVzdHJveSgpO1xuXHRcdCQuZWFjaCggdGhpcy5jbGFzc2VzRWxlbWVudExvb2t1cCwgZnVuY3Rpb24oIGtleSwgdmFsdWUgKSB7XG5cdFx0XHR0aGF0Ll9yZW1vdmVDbGFzcyggdmFsdWUsIGtleSApO1xuXHRcdH0gKTtcblxuXHRcdC8vIFdlIGNhbiBwcm9iYWJseSByZW1vdmUgdGhlIHVuYmluZCBjYWxscyBpbiAyLjBcblx0XHQvLyBhbGwgZXZlbnQgYmluZGluZ3Mgc2hvdWxkIGdvIHRocm91Z2ggdGhpcy5fb24oKVxuXHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0Lm9mZiggdGhpcy5ldmVudE5hbWVzcGFjZSApXG5cdFx0XHQucmVtb3ZlRGF0YSggdGhpcy53aWRnZXRGdWxsTmFtZSApO1xuXHRcdHRoaXMud2lkZ2V0KClcblx0XHRcdC5vZmYoIHRoaXMuZXZlbnROYW1lc3BhY2UgKVxuXHRcdFx0LnJlbW92ZUF0dHIoIFwiYXJpYS1kaXNhYmxlZFwiICk7XG5cblx0XHQvLyBDbGVhbiB1cCBldmVudHMgYW5kIHN0YXRlc1xuXHRcdHRoaXMuYmluZGluZ3Mub2ZmKCB0aGlzLmV2ZW50TmFtZXNwYWNlICk7XG5cdH0sXG5cblx0X2Rlc3Ryb3k6ICQubm9vcCxcblxuXHR3aWRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH0sXG5cblx0b3B0aW9uOiBmdW5jdGlvbigga2V5LCB2YWx1ZSApIHtcblx0XHR2YXIgb3B0aW9ucyA9IGtleTtcblx0XHR2YXIgcGFydHM7XG5cdFx0dmFyIGN1ck9wdGlvbjtcblx0XHR2YXIgaTtcblxuXHRcdGlmICggYXJndW1lbnRzLmxlbmd0aCA9PT0gMCApIHtcblxuXHRcdFx0Ly8gRG9uJ3QgcmV0dXJuIGEgcmVmZXJlbmNlIHRvIHRoZSBpbnRlcm5hbCBoYXNoXG5cdFx0XHRyZXR1cm4gJC53aWRnZXQuZXh0ZW5kKCB7fSwgdGhpcy5vcHRpb25zICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiICkge1xuXG5cdFx0XHQvLyBIYW5kbGUgbmVzdGVkIGtleXMsIGUuZy4sIFwiZm9vLmJhclwiID0+IHsgZm9vOiB7IGJhcjogX19fIH0gfVxuXHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdFx0cGFydHMgPSBrZXkuc3BsaXQoIFwiLlwiICk7XG5cdFx0XHRrZXkgPSBwYXJ0cy5zaGlmdCgpO1xuXHRcdFx0aWYgKCBwYXJ0cy5sZW5ndGggKSB7XG5cdFx0XHRcdGN1ck9wdGlvbiA9IG9wdGlvbnNbIGtleSBdID0gJC53aWRnZXQuZXh0ZW5kKCB7fSwgdGhpcy5vcHRpb25zWyBrZXkgXSApO1xuXHRcdFx0XHRmb3IgKCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aCAtIDE7IGkrKyApIHtcblx0XHRcdFx0XHRjdXJPcHRpb25bIHBhcnRzWyBpIF0gXSA9IGN1ck9wdGlvblsgcGFydHNbIGkgXSBdIHx8IHt9O1xuXHRcdFx0XHRcdGN1ck9wdGlvbiA9IGN1ck9wdGlvblsgcGFydHNbIGkgXSBdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGtleSA9IHBhcnRzLnBvcCgpO1xuXHRcdFx0XHRpZiAoIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGN1ck9wdGlvblsga2V5IF0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjdXJPcHRpb25bIGtleSBdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN1ck9wdGlvblsga2V5IF0gPSB2YWx1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICggYXJndW1lbnRzLmxlbmd0aCA9PT0gMSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25zWyBrZXkgXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IHRoaXMub3B0aW9uc1sga2V5IF07XG5cdFx0XHRcdH1cblx0XHRcdFx0b3B0aW9uc1sga2V5IF0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLl9zZXRPcHRpb25zKCBvcHRpb25zICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRfc2V0T3B0aW9uczogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cdFx0dmFyIGtleTtcblxuXHRcdGZvciAoIGtleSBpbiBvcHRpb25zICkge1xuXHRcdFx0dGhpcy5fc2V0T3B0aW9uKCBrZXksIG9wdGlvbnNbIGtleSBdICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0X3NldE9wdGlvbjogZnVuY3Rpb24oIGtleSwgdmFsdWUgKSB7XG5cdFx0aWYgKCBrZXkgPT09IFwiY2xhc3Nlc1wiICkge1xuXHRcdFx0dGhpcy5fc2V0T3B0aW9uQ2xhc3NlcyggdmFsdWUgKTtcblx0XHR9XG5cblx0XHR0aGlzLm9wdGlvbnNbIGtleSBdID0gdmFsdWU7XG5cblx0XHRpZiAoIGtleSA9PT0gXCJkaXNhYmxlZFwiICkge1xuXHRcdFx0dGhpcy5fc2V0T3B0aW9uRGlzYWJsZWQoIHZhbHVlICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0X3NldE9wdGlvbkNsYXNzZXM6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHR2YXIgY2xhc3NLZXksIGVsZW1lbnRzLCBjdXJyZW50RWxlbWVudHM7XG5cblx0XHRmb3IgKCBjbGFzc0tleSBpbiB2YWx1ZSApIHtcblx0XHRcdGN1cnJlbnRFbGVtZW50cyA9IHRoaXMuY2xhc3Nlc0VsZW1lbnRMb29rdXBbIGNsYXNzS2V5IF07XG5cdFx0XHRpZiAoIHZhbHVlWyBjbGFzc0tleSBdID09PSB0aGlzLm9wdGlvbnMuY2xhc3Nlc1sgY2xhc3NLZXkgXSB8fFxuXHRcdFx0XHRcdCFjdXJyZW50RWxlbWVudHMgfHxcblx0XHRcdFx0XHQhY3VycmVudEVsZW1lbnRzLmxlbmd0aCApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFdlIGFyZSBkb2luZyB0aGlzIHRvIGNyZWF0ZSBhIG5ldyBqUXVlcnkgb2JqZWN0IGJlY2F1c2UgdGhlIF9yZW1vdmVDbGFzcygpIGNhbGxcblx0XHRcdC8vIG9uIHRoZSBuZXh0IGxpbmUgaXMgZ29pbmcgdG8gZGVzdHJveSB0aGUgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IGVsZW1lbnRzIGJlaW5nXG5cdFx0XHQvLyB0cmFja2VkLiBXZSBuZWVkIHRvIHNhdmUgYSBjb3B5IG9mIHRoaXMgY29sbGVjdGlvbiBzbyB0aGF0IHdlIGNhbiBhZGQgdGhlIG5ldyBjbGFzc2VzXG5cdFx0XHQvLyBiZWxvdy5cblx0XHRcdGVsZW1lbnRzID0gJCggY3VycmVudEVsZW1lbnRzLmdldCgpICk7XG5cdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyggY3VycmVudEVsZW1lbnRzLCBjbGFzc0tleSApO1xuXG5cdFx0XHQvLyBXZSBkb24ndCB1c2UgX2FkZENsYXNzKCkgaGVyZSwgYmVjYXVzZSB0aGF0IHVzZXMgdGhpcy5vcHRpb25zLmNsYXNzZXNcblx0XHRcdC8vIGZvciBnZW5lcmF0aW5nIHRoZSBzdHJpbmcgb2YgY2xhc3Nlcy4gV2Ugd2FudCB0byB1c2UgdGhlIHZhbHVlIHBhc3NlZCBpbiBmcm9tXG5cdFx0XHQvLyBfc2V0T3B0aW9uKCksIHRoaXMgaXMgdGhlIG5ldyB2YWx1ZSBvZiB0aGUgY2xhc3NlcyBvcHRpb24gd2hpY2ggd2FzIHBhc3NlZCB0b1xuXHRcdFx0Ly8gX3NldE9wdGlvbigpLiBXZSBwYXNzIHRoaXMgdmFsdWUgZGlyZWN0bHkgdG8gX2NsYXNzZXMoKS5cblx0XHRcdGVsZW1lbnRzLmFkZENsYXNzKCB0aGlzLl9jbGFzc2VzKCB7XG5cdFx0XHRcdGVsZW1lbnQ6IGVsZW1lbnRzLFxuXHRcdFx0XHRrZXlzOiBjbGFzc0tleSxcblx0XHRcdFx0Y2xhc3NlczogdmFsdWUsXG5cdFx0XHRcdGFkZDogdHJ1ZVxuXHRcdFx0fSApICk7XG5cdFx0fVxuXHR9LFxuXG5cdF9zZXRPcHRpb25EaXNhYmxlZDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHRoaXMuX3RvZ2dsZUNsYXNzKCB0aGlzLndpZGdldCgpLCB0aGlzLndpZGdldEZ1bGxOYW1lICsgXCItZGlzYWJsZWRcIiwgbnVsbCwgISF2YWx1ZSApO1xuXG5cdFx0Ly8gSWYgdGhlIHdpZGdldCBpcyBiZWNvbWluZyBkaXNhYmxlZCwgdGhlbiBub3RoaW5nIGlzIGludGVyYWN0aXZlXG5cdFx0aWYgKCB2YWx1ZSApIHtcblx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKCB0aGlzLmhvdmVyYWJsZSwgbnVsbCwgXCJ1aS1zdGF0ZS1ob3ZlclwiICk7XG5cdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyggdGhpcy5mb2N1c2FibGUsIG51bGwsIFwidWktc3RhdGUtZm9jdXNcIiApO1xuXHRcdH1cblx0fSxcblxuXHRlbmFibGU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLl9zZXRPcHRpb25zKCB7IGRpc2FibGVkOiBmYWxzZSB9ICk7XG5cdH0sXG5cblx0ZGlzYWJsZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3NldE9wdGlvbnMoIHsgZGlzYWJsZWQ6IHRydWUgfSApO1xuXHR9LFxuXG5cdF9jbGFzc2VzOiBmdW5jdGlvbiggb3B0aW9ucyApIHtcblx0XHR2YXIgZnVsbCA9IFtdO1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblxuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCgge1xuXHRcdFx0ZWxlbWVudDogdGhpcy5lbGVtZW50LFxuXHRcdFx0Y2xhc3NlczogdGhpcy5vcHRpb25zLmNsYXNzZXMgfHwge31cblx0XHR9LCBvcHRpb25zICk7XG5cblx0XHRmdW5jdGlvbiBwcm9jZXNzQ2xhc3NTdHJpbmcoIGNsYXNzZXMsIGNoZWNrT3B0aW9uICkge1xuXHRcdFx0dmFyIGN1cnJlbnQsIGk7XG5cdFx0XHRmb3IgKCBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdGN1cnJlbnQgPSB0aGF0LmNsYXNzZXNFbGVtZW50TG9va3VwWyBjbGFzc2VzWyBpIF0gXSB8fCAkKCk7XG5cdFx0XHRcdGlmICggb3B0aW9ucy5hZGQgKSB7XG5cdFx0XHRcdFx0Y3VycmVudCA9ICQoICQudW5pcXVlKCBjdXJyZW50LmdldCgpLmNvbmNhdCggb3B0aW9ucy5lbGVtZW50LmdldCgpICkgKSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGN1cnJlbnQgPSAkKCBjdXJyZW50Lm5vdCggb3B0aW9ucy5lbGVtZW50ICkuZ2V0KCkgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGF0LmNsYXNzZXNFbGVtZW50TG9va3VwWyBjbGFzc2VzWyBpIF0gXSA9IGN1cnJlbnQ7XG5cdFx0XHRcdGZ1bGwucHVzaCggY2xhc3Nlc1sgaSBdICk7XG5cdFx0XHRcdGlmICggY2hlY2tPcHRpb24gJiYgb3B0aW9ucy5jbGFzc2VzWyBjbGFzc2VzWyBpIF0gXSApIHtcblx0XHRcdFx0XHRmdWxsLnB1c2goIG9wdGlvbnMuY2xhc3Nlc1sgY2xhc3Nlc1sgaSBdIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuX29uKCBvcHRpb25zLmVsZW1lbnQsIHtcblx0XHRcdFwicmVtb3ZlXCI6IFwiX3VudHJhY2tDbGFzc2VzRWxlbWVudFwiXG5cdFx0fSApO1xuXG5cdFx0aWYgKCBvcHRpb25zLmtleXMgKSB7XG5cdFx0XHRwcm9jZXNzQ2xhc3NTdHJpbmcoIG9wdGlvbnMua2V5cy5tYXRjaCggL1xcUysvZyApIHx8IFtdLCB0cnVlICk7XG5cdFx0fVxuXHRcdGlmICggb3B0aW9ucy5leHRyYSApIHtcblx0XHRcdHByb2Nlc3NDbGFzc1N0cmluZyggb3B0aW9ucy5leHRyYS5tYXRjaCggL1xcUysvZyApIHx8IFtdICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZ1bGwuam9pbiggXCIgXCIgKTtcblx0fSxcblxuXHRfdW50cmFja0NsYXNzZXNFbGVtZW50OiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdCQuZWFjaCggdGhhdC5jbGFzc2VzRWxlbWVudExvb2t1cCwgZnVuY3Rpb24oIGtleSwgdmFsdWUgKSB7XG5cdFx0XHRpZiAoICQuaW5BcnJheSggZXZlbnQudGFyZ2V0LCB2YWx1ZSApICE9PSAtMSApIHtcblx0XHRcdFx0dGhhdC5jbGFzc2VzRWxlbWVudExvb2t1cFsga2V5IF0gPSAkKCB2YWx1ZS5ub3QoIGV2ZW50LnRhcmdldCApLmdldCgpICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdF9yZW1vdmVDbGFzczogZnVuY3Rpb24oIGVsZW1lbnQsIGtleXMsIGV4dHJhICkge1xuXHRcdHJldHVybiB0aGlzLl90b2dnbGVDbGFzcyggZWxlbWVudCwga2V5cywgZXh0cmEsIGZhbHNlICk7XG5cdH0sXG5cblx0X2FkZENsYXNzOiBmdW5jdGlvbiggZWxlbWVudCwga2V5cywgZXh0cmEgKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3RvZ2dsZUNsYXNzKCBlbGVtZW50LCBrZXlzLCBleHRyYSwgdHJ1ZSApO1xuXHR9LFxuXG5cdF90b2dnbGVDbGFzczogZnVuY3Rpb24oIGVsZW1lbnQsIGtleXMsIGV4dHJhLCBhZGQgKSB7XG5cdFx0YWRkID0gKCB0eXBlb2YgYWRkID09PSBcImJvb2xlYW5cIiApID8gYWRkIDogZXh0cmE7XG5cdFx0dmFyIHNoaWZ0ID0gKCB0eXBlb2YgZWxlbWVudCA9PT0gXCJzdHJpbmdcIiB8fCBlbGVtZW50ID09PSBudWxsICksXG5cdFx0XHRvcHRpb25zID0ge1xuXHRcdFx0XHRleHRyYTogc2hpZnQgPyBrZXlzIDogZXh0cmEsXG5cdFx0XHRcdGtleXM6IHNoaWZ0ID8gZWxlbWVudCA6IGtleXMsXG5cdFx0XHRcdGVsZW1lbnQ6IHNoaWZ0ID8gdGhpcy5lbGVtZW50IDogZWxlbWVudCxcblx0XHRcdFx0YWRkOiBhZGRcblx0XHRcdH07XG5cdFx0b3B0aW9ucy5lbGVtZW50LnRvZ2dsZUNsYXNzKCB0aGlzLl9jbGFzc2VzKCBvcHRpb25zICksIGFkZCApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdF9vbjogZnVuY3Rpb24oIHN1cHByZXNzRGlzYWJsZWRDaGVjaywgZWxlbWVudCwgaGFuZGxlcnMgKSB7XG5cdFx0dmFyIGRlbGVnYXRlRWxlbWVudDtcblx0XHR2YXIgaW5zdGFuY2UgPSB0aGlzO1xuXG5cdFx0Ly8gTm8gc3VwcHJlc3NEaXNhYmxlZENoZWNrIGZsYWcsIHNodWZmbGUgYXJndW1lbnRzXG5cdFx0aWYgKCB0eXBlb2Ygc3VwcHJlc3NEaXNhYmxlZENoZWNrICE9PSBcImJvb2xlYW5cIiApIHtcblx0XHRcdGhhbmRsZXJzID0gZWxlbWVudDtcblx0XHRcdGVsZW1lbnQgPSBzdXBwcmVzc0Rpc2FibGVkQ2hlY2s7XG5cdFx0XHRzdXBwcmVzc0Rpc2FibGVkQ2hlY2sgPSBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBObyBlbGVtZW50IGFyZ3VtZW50LCBzaHVmZmxlIGFuZCB1c2UgdGhpcy5lbGVtZW50XG5cdFx0aWYgKCAhaGFuZGxlcnMgKSB7XG5cdFx0XHRoYW5kbGVycyA9IGVsZW1lbnQ7XG5cdFx0XHRlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuXHRcdFx0ZGVsZWdhdGVFbGVtZW50ID0gdGhpcy53aWRnZXQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbWVudCA9IGRlbGVnYXRlRWxlbWVudCA9ICQoIGVsZW1lbnQgKTtcblx0XHRcdHRoaXMuYmluZGluZ3MgPSB0aGlzLmJpbmRpbmdzLmFkZCggZWxlbWVudCApO1xuXHRcdH1cblxuXHRcdCQuZWFjaCggaGFuZGxlcnMsIGZ1bmN0aW9uKCBldmVudCwgaGFuZGxlciApIHtcblx0XHRcdGZ1bmN0aW9uIGhhbmRsZXJQcm94eSgpIHtcblxuXHRcdFx0XHQvLyBBbGxvdyB3aWRnZXRzIHRvIGN1c3RvbWl6ZSB0aGUgZGlzYWJsZWQgaGFuZGxpbmdcblx0XHRcdFx0Ly8gLSBkaXNhYmxlZCBhcyBhbiBhcnJheSBpbnN0ZWFkIG9mIGJvb2xlYW5cblx0XHRcdFx0Ly8gLSBkaXNhYmxlZCBjbGFzcyBhcyBtZXRob2QgZm9yIGRpc2FibGluZyBpbmRpdmlkdWFsIHBhcnRzXG5cdFx0XHRcdGlmICggIXN1cHByZXNzRGlzYWJsZWRDaGVjayAmJlxuXHRcdFx0XHRcdFx0KCBpbnN0YW5jZS5vcHRpb25zLmRpc2FibGVkID09PSB0cnVlIHx8XG5cdFx0XHRcdFx0XHQkKCB0aGlzICkuaGFzQ2xhc3MoIFwidWktc3RhdGUtZGlzYWJsZWRcIiApICkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAoIHR5cGVvZiBoYW5kbGVyID09PSBcInN0cmluZ1wiID8gaW5zdGFuY2VbIGhhbmRsZXIgXSA6IGhhbmRsZXIgKVxuXHRcdFx0XHRcdC5hcHBseSggaW5zdGFuY2UsIGFyZ3VtZW50cyApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDb3B5IHRoZSBndWlkIHNvIGRpcmVjdCB1bmJpbmRpbmcgd29ya3Ncblx0XHRcdGlmICggdHlwZW9mIGhhbmRsZXIgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRcdGhhbmRsZXJQcm94eS5ndWlkID0gaGFuZGxlci5ndWlkID1cblx0XHRcdFx0XHRoYW5kbGVyLmd1aWQgfHwgaGFuZGxlclByb3h5Lmd1aWQgfHwgJC5ndWlkKys7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBtYXRjaCA9IGV2ZW50Lm1hdGNoKCAvXihbXFx3Oi1dKilcXHMqKC4qKSQvICk7XG5cdFx0XHR2YXIgZXZlbnROYW1lID0gbWF0Y2hbIDEgXSArIGluc3RhbmNlLmV2ZW50TmFtZXNwYWNlO1xuXHRcdFx0dmFyIHNlbGVjdG9yID0gbWF0Y2hbIDIgXTtcblxuXHRcdFx0aWYgKCBzZWxlY3RvciApIHtcblx0XHRcdFx0ZGVsZWdhdGVFbGVtZW50Lm9uKCBldmVudE5hbWUsIHNlbGVjdG9yLCBoYW5kbGVyUHJveHkgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnQub24oIGV2ZW50TmFtZSwgaGFuZGxlclByb3h5ICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdF9vZmY6IGZ1bmN0aW9uKCBlbGVtZW50LCBldmVudE5hbWUgKSB7XG5cdFx0ZXZlbnROYW1lID0gKCBldmVudE5hbWUgfHwgXCJcIiApLnNwbGl0KCBcIiBcIiApLmpvaW4oIHRoaXMuZXZlbnROYW1lc3BhY2UgKyBcIiBcIiApICtcblx0XHRcdHRoaXMuZXZlbnROYW1lc3BhY2U7XG5cdFx0ZWxlbWVudC5vZmYoIGV2ZW50TmFtZSApLm9mZiggZXZlbnROYW1lICk7XG5cblx0XHQvLyBDbGVhciB0aGUgc3RhY2sgdG8gYXZvaWQgbWVtb3J5IGxlYWtzICgjMTAwNTYpXG5cdFx0dGhpcy5iaW5kaW5ncyA9ICQoIHRoaXMuYmluZGluZ3Mubm90KCBlbGVtZW50ICkuZ2V0KCkgKTtcblx0XHR0aGlzLmZvY3VzYWJsZSA9ICQoIHRoaXMuZm9jdXNhYmxlLm5vdCggZWxlbWVudCApLmdldCgpICk7XG5cdFx0dGhpcy5ob3ZlcmFibGUgPSAkKCB0aGlzLmhvdmVyYWJsZS5ub3QoIGVsZW1lbnQgKS5nZXQoKSApO1xuXHR9LFxuXG5cdF9kZWxheTogZnVuY3Rpb24oIGhhbmRsZXIsIGRlbGF5ICkge1xuXHRcdGZ1bmN0aW9uIGhhbmRsZXJQcm94eSgpIHtcblx0XHRcdHJldHVybiAoIHR5cGVvZiBoYW5kbGVyID09PSBcInN0cmluZ1wiID8gaW5zdGFuY2VbIGhhbmRsZXIgXSA6IGhhbmRsZXIgKVxuXHRcdFx0XHQuYXBwbHkoIGluc3RhbmNlLCBhcmd1bWVudHMgKTtcblx0XHR9XG5cdFx0dmFyIGluc3RhbmNlID0gdGhpcztcblx0XHRyZXR1cm4gc2V0VGltZW91dCggaGFuZGxlclByb3h5LCBkZWxheSB8fCAwICk7XG5cdH0sXG5cblx0X2hvdmVyYWJsZTogZnVuY3Rpb24oIGVsZW1lbnQgKSB7XG5cdFx0dGhpcy5ob3ZlcmFibGUgPSB0aGlzLmhvdmVyYWJsZS5hZGQoIGVsZW1lbnQgKTtcblx0XHR0aGlzLl9vbiggZWxlbWVudCwge1xuXHRcdFx0bW91c2VlbnRlcjogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0XHR0aGlzLl9hZGRDbGFzcyggJCggZXZlbnQuY3VycmVudFRhcmdldCApLCBudWxsLCBcInVpLXN0YXRlLWhvdmVyXCIgKTtcblx0XHRcdH0sXG5cdFx0XHRtb3VzZWxlYXZlOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKCAkKCBldmVudC5jdXJyZW50VGFyZ2V0ICksIG51bGwsIFwidWktc3RhdGUtaG92ZXJcIiApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRfZm9jdXNhYmxlOiBmdW5jdGlvbiggZWxlbWVudCApIHtcblx0XHR0aGlzLmZvY3VzYWJsZSA9IHRoaXMuZm9jdXNhYmxlLmFkZCggZWxlbWVudCApO1xuXHRcdHRoaXMuX29uKCBlbGVtZW50LCB7XG5cdFx0XHRmb2N1c2luOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRcdHRoaXMuX2FkZENsYXNzKCAkKCBldmVudC5jdXJyZW50VGFyZ2V0ICksIG51bGwsIFwidWktc3RhdGUtZm9jdXNcIiApO1xuXHRcdFx0fSxcblx0XHRcdGZvY3Vzb3V0OiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKCAkKCBldmVudC5jdXJyZW50VGFyZ2V0ICksIG51bGwsIFwidWktc3RhdGUtZm9jdXNcIiApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRfdHJpZ2dlcjogZnVuY3Rpb24oIHR5cGUsIGV2ZW50LCBkYXRhICkge1xuXHRcdHZhciBwcm9wLCBvcmlnO1xuXHRcdHZhciBjYWxsYmFjayA9IHRoaXMub3B0aW9uc1sgdHlwZSBdO1xuXG5cdFx0ZGF0YSA9IGRhdGEgfHwge307XG5cdFx0ZXZlbnQgPSAkLkV2ZW50KCBldmVudCApO1xuXHRcdGV2ZW50LnR5cGUgPSAoIHR5cGUgPT09IHRoaXMud2lkZ2V0RXZlbnRQcmVmaXggP1xuXHRcdFx0dHlwZSA6XG5cdFx0XHR0aGlzLndpZGdldEV2ZW50UHJlZml4ICsgdHlwZSApLnRvTG93ZXJDYXNlKCk7XG5cblx0XHQvLyBUaGUgb3JpZ2luYWwgZXZlbnQgbWF5IGNvbWUgZnJvbSBhbnkgZWxlbWVudFxuXHRcdC8vIHNvIHdlIG5lZWQgdG8gcmVzZXQgdGhlIHRhcmdldCBvbiB0aGUgbmV3IGV2ZW50XG5cdFx0ZXZlbnQudGFyZ2V0ID0gdGhpcy5lbGVtZW50WyAwIF07XG5cblx0XHQvLyBDb3B5IG9yaWdpbmFsIGV2ZW50IHByb3BlcnRpZXMgb3ZlciB0byB0aGUgbmV3IGV2ZW50XG5cdFx0b3JpZyA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQ7XG5cdFx0aWYgKCBvcmlnICkge1xuXHRcdFx0Zm9yICggcHJvcCBpbiBvcmlnICkge1xuXHRcdFx0XHRpZiAoICEoIHByb3AgaW4gZXZlbnQgKSApIHtcblx0XHRcdFx0XHRldmVudFsgcHJvcCBdID0gb3JpZ1sgcHJvcCBdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoIGV2ZW50LCBkYXRhICk7XG5cdFx0cmV0dXJuICEoICQuaXNGdW5jdGlvbiggY2FsbGJhY2sgKSAmJlxuXHRcdFx0Y2FsbGJhY2suYXBwbHkoIHRoaXMuZWxlbWVudFsgMCBdLCBbIGV2ZW50IF0uY29uY2F0KCBkYXRhICkgKSA9PT0gZmFsc2UgfHxcblx0XHRcdGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpICk7XG5cdH1cbn07XG5cbiQuZWFjaCggeyBzaG93OiBcImZhZGVJblwiLCBoaWRlOiBcImZhZGVPdXRcIiB9LCBmdW5jdGlvbiggbWV0aG9kLCBkZWZhdWx0RWZmZWN0ICkge1xuXHQkLldpZGdldC5wcm90b3R5cGVbIFwiX1wiICsgbWV0aG9kIF0gPSBmdW5jdGlvbiggZWxlbWVudCwgb3B0aW9ucywgY2FsbGJhY2sgKSB7XG5cdFx0aWYgKCB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdG9wdGlvbnMgPSB7IGVmZmVjdDogb3B0aW9ucyB9O1xuXHRcdH1cblxuXHRcdHZhciBoYXNPcHRpb25zO1xuXHRcdHZhciBlZmZlY3ROYW1lID0gIW9wdGlvbnMgP1xuXHRcdFx0bWV0aG9kIDpcblx0XHRcdG9wdGlvbnMgPT09IHRydWUgfHwgdHlwZW9mIG9wdGlvbnMgPT09IFwibnVtYmVyXCIgP1xuXHRcdFx0XHRkZWZhdWx0RWZmZWN0IDpcblx0XHRcdFx0b3B0aW9ucy5lZmZlY3QgfHwgZGVmYXVsdEVmZmVjdDtcblxuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRcdGlmICggdHlwZW9mIG9wdGlvbnMgPT09IFwibnVtYmVyXCIgKSB7XG5cdFx0XHRvcHRpb25zID0geyBkdXJhdGlvbjogb3B0aW9ucyB9O1xuXHRcdH1cblxuXHRcdGhhc09wdGlvbnMgPSAhJC5pc0VtcHR5T2JqZWN0KCBvcHRpb25zICk7XG5cdFx0b3B0aW9ucy5jb21wbGV0ZSA9IGNhbGxiYWNrO1xuXG5cdFx0aWYgKCBvcHRpb25zLmRlbGF5ICkge1xuXHRcdFx0ZWxlbWVudC5kZWxheSggb3B0aW9ucy5kZWxheSApO1xuXHRcdH1cblxuXHRcdGlmICggaGFzT3B0aW9ucyAmJiAkLmVmZmVjdHMgJiYgJC5lZmZlY3RzLmVmZmVjdFsgZWZmZWN0TmFtZSBdICkge1xuXHRcdFx0ZWxlbWVudFsgbWV0aG9kIF0oIG9wdGlvbnMgKTtcblx0XHR9IGVsc2UgaWYgKCBlZmZlY3ROYW1lICE9PSBtZXRob2QgJiYgZWxlbWVudFsgZWZmZWN0TmFtZSBdICkge1xuXHRcdFx0ZWxlbWVudFsgZWZmZWN0TmFtZSBdKCBvcHRpb25zLmR1cmF0aW9uLCBvcHRpb25zLmVhc2luZywgY2FsbGJhY2sgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbWVudC5xdWV1ZSggZnVuY3Rpb24oIG5leHQgKSB7XG5cdFx0XHRcdCQoIHRoaXMgKVsgbWV0aG9kIF0oKTtcblx0XHRcdFx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRcdFx0XHRjYWxsYmFjay5jYWxsKCBlbGVtZW50WyAwIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRuZXh0KCk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9O1xufSApO1xuXG5yZXR1cm4gJC53aWRnZXQ7XG5cbn0gKSApO1xuIiwiKCBmdW5jdGlvbiggZmFjdG9yeSApIHtcblx0aWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcblxuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoIFsgXCJqcXVlcnlcIiwgXCIuL3ZlcnNpb25cIiBdLCBmYWN0b3J5ICk7XG5cdH0gZWxzZSB7XG5cblx0XHQvLyBCcm93c2VyIGdsb2JhbHNcblx0XHRmYWN0b3J5KCBqUXVlcnkgKTtcblx0fVxufSAoIGZ1bmN0aW9uKCAkICkge1xuXG4vLyBUaGlzIGZpbGUgaXMgZGVwcmVjYXRlZFxucmV0dXJuICQudWkuaWUgPSAhIS9tc2llIFtcXHcuXSsvLmV4ZWMoIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSApO1xufSApICk7XG4iLCJpbXBvcnQgZm9ybWF0RGVjaW1hbCBmcm9tIFwiLi9mb3JtYXREZWNpbWFsLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgsIHApIHtcbiAgdmFyIGQgPSBmb3JtYXREZWNpbWFsKHgsIHApO1xuICBpZiAoIWQpIHJldHVybiB4ICsgXCJcIjtcbiAgdmFyIGNvZWZmaWNpZW50ID0gZFswXSxcbiAgICAgIGV4cG9uZW50ID0gZFsxXTtcbiAgcmV0dXJuIGV4cG9uZW50IDwgMCA/IFwiMC5cIiArIG5ldyBBcnJheSgtZXhwb25lbnQpLmpvaW4oXCIwXCIpICsgY29lZmZpY2llbnRcbiAgICAgIDogY29lZmZpY2llbnQubGVuZ3RoID4gZXhwb25lbnQgKyAxID8gY29lZmZpY2llbnQuc2xpY2UoMCwgZXhwb25lbnQgKyAxKSArIFwiLlwiICsgY29lZmZpY2llbnQuc2xpY2UoZXhwb25lbnQgKyAxKVxuICAgICAgOiBjb2VmZmljaWVudCArIG5ldyBBcnJheShleHBvbmVudCAtIGNvZWZmaWNpZW50Lmxlbmd0aCArIDIpLmpvaW4oXCIwXCIpO1xufVxuIiwiLyohXG4gKiBqUXVlcnkgVUkgU2xpZGVyIDEuMTIuMVxuICogaHR0cDovL2pxdWVyeXVpLmNvbVxuICpcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKi9cblxuLy8+PmxhYmVsOiBTbGlkZXJcbi8vPj5ncm91cDogV2lkZ2V0c1xuLy8+PmRlc2NyaXB0aW9uOiBEaXNwbGF5cyBhIGZsZXhpYmxlIHNsaWRlciB3aXRoIHJhbmdlcyBhbmQgYWNjZXNzaWJpbGl0eSB2aWEga2V5Ym9hcmQuXG4vLz4+ZG9jczogaHR0cDovL2FwaS5qcXVlcnl1aS5jb20vc2xpZGVyL1xuLy8+PmRlbW9zOiBodHRwOi8vanF1ZXJ5dWkuY29tL3NsaWRlci9cbi8vPj5jc3Muc3RydWN0dXJlOiAuLi8uLi90aGVtZXMvYmFzZS9jb3JlLmNzc1xuLy8+PmNzcy5zdHJ1Y3R1cmU6IC4uLy4uL3RoZW1lcy9iYXNlL3NsaWRlci5jc3Ncbi8vPj5jc3MudGhlbWU6IC4uLy4uL3RoZW1lcy9iYXNlL3RoZW1lLmNzc1xuXG4oIGZ1bmN0aW9uKCBmYWN0b3J5ICkge1xuXHRpZiAoIHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kICkge1xuXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZSggW1xuXHRcdFx0XCJqcXVlcnlcIixcblx0XHRcdFwiLi9tb3VzZVwiLFxuXHRcdFx0XCIuLi9rZXljb2RlXCIsXG5cdFx0XHRcIi4uL3ZlcnNpb25cIixcblx0XHRcdFwiLi4vd2lkZ2V0XCJcblx0XHRdLCBmYWN0b3J5ICk7XG5cdH0gZWxzZSB7XG5cblx0XHQvLyBCcm93c2VyIGdsb2JhbHNcblx0XHRmYWN0b3J5KCBqUXVlcnkgKTtcblx0fVxufSggZnVuY3Rpb24oICQgKSB7XG5cbnJldHVybiAkLndpZGdldCggXCJ1aS5zbGlkZXJcIiwgJC51aS5tb3VzZSwge1xuXHR2ZXJzaW9uOiBcIjEuMTIuMVwiLFxuXHR3aWRnZXRFdmVudFByZWZpeDogXCJzbGlkZVwiLFxuXG5cdG9wdGlvbnM6IHtcblx0XHRhbmltYXRlOiBmYWxzZSxcblx0XHRjbGFzc2VzOiB7XG5cdFx0XHRcInVpLXNsaWRlclwiOiBcInVpLWNvcm5lci1hbGxcIixcblx0XHRcdFwidWktc2xpZGVyLWhhbmRsZVwiOiBcInVpLWNvcm5lci1hbGxcIixcblxuXHRcdFx0Ly8gTm90ZTogdWktd2lkZ2V0LWhlYWRlciBpc24ndCB0aGUgbW9zdCBmaXR0aW5nbHkgc2VtYW50aWMgZnJhbWV3b3JrIGNsYXNzIGZvciB0aGlzXG5cdFx0XHQvLyBlbGVtZW50LCBidXQgd29ya2VkIGJlc3QgdmlzdWFsbHkgd2l0aCBhIHZhcmlldHkgb2YgdGhlbWVzXG5cdFx0XHRcInVpLXNsaWRlci1yYW5nZVwiOiBcInVpLWNvcm5lci1hbGwgdWktd2lkZ2V0LWhlYWRlclwiXG5cdFx0fSxcblx0XHRkaXN0YW5jZTogMCxcblx0XHRtYXg6IDEwMCxcblx0XHRtaW46IDAsXG5cdFx0b3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxuXHRcdHJhbmdlOiBmYWxzZSxcblx0XHRzdGVwOiAxLFxuXHRcdHZhbHVlOiAwLFxuXHRcdHZhbHVlczogbnVsbCxcblxuXHRcdC8vIENhbGxiYWNrc1xuXHRcdGNoYW5nZTogbnVsbCxcblx0XHRzbGlkZTogbnVsbCxcblx0XHRzdGFydDogbnVsbCxcblx0XHRzdG9wOiBudWxsXG5cdH0sXG5cblx0Ly8gTnVtYmVyIG9mIHBhZ2VzIGluIGEgc2xpZGVyXG5cdC8vIChob3cgbWFueSB0aW1lcyBjYW4geW91IHBhZ2UgdXAvZG93biB0byBnbyB0aHJvdWdoIHRoZSB3aG9sZSByYW5nZSlcblx0bnVtUGFnZXM6IDUsXG5cblx0X2NyZWF0ZTogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5fa2V5U2xpZGluZyA9IGZhbHNlO1xuXHRcdHRoaXMuX21vdXNlU2xpZGluZyA9IGZhbHNlO1xuXHRcdHRoaXMuX2FuaW1hdGVPZmYgPSB0cnVlO1xuXHRcdHRoaXMuX2hhbmRsZUluZGV4ID0gbnVsbDtcblx0XHR0aGlzLl9kZXRlY3RPcmllbnRhdGlvbigpO1xuXHRcdHRoaXMuX21vdXNlSW5pdCgpO1xuXHRcdHRoaXMuX2NhbGN1bGF0ZU5ld01heCgpO1xuXG5cdFx0dGhpcy5fYWRkQ2xhc3MoIFwidWktc2xpZGVyIHVpLXNsaWRlci1cIiArIHRoaXMub3JpZW50YXRpb24sXG5cdFx0XHRcInVpLXdpZGdldCB1aS13aWRnZXQtY29udGVudFwiICk7XG5cblx0XHR0aGlzLl9yZWZyZXNoKCk7XG5cblx0XHR0aGlzLl9hbmltYXRlT2ZmID0gZmFsc2U7XG5cdH0sXG5cblx0X3JlZnJlc2g6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuX2NyZWF0ZVJhbmdlKCk7XG5cdFx0dGhpcy5fY3JlYXRlSGFuZGxlcygpO1xuXHRcdHRoaXMuX3NldHVwRXZlbnRzKCk7XG5cdFx0dGhpcy5fcmVmcmVzaFZhbHVlKCk7XG5cdH0sXG5cblx0X2NyZWF0ZUhhbmRsZXM6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBpLCBoYW5kbGVDb3VudCxcblx0XHRcdG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG5cdFx0XHRleGlzdGluZ0hhbmRsZXMgPSB0aGlzLmVsZW1lbnQuZmluZCggXCIudWktc2xpZGVyLWhhbmRsZVwiICksXG5cdFx0XHRoYW5kbGUgPSBcIjxzcGFuIHRhYmluZGV4PScwJz48L3NwYW4+XCIsXG5cdFx0XHRoYW5kbGVzID0gW107XG5cblx0XHRoYW5kbGVDb3VudCA9ICggb3B0aW9ucy52YWx1ZXMgJiYgb3B0aW9ucy52YWx1ZXMubGVuZ3RoICkgfHwgMTtcblxuXHRcdGlmICggZXhpc3RpbmdIYW5kbGVzLmxlbmd0aCA+IGhhbmRsZUNvdW50ICkge1xuXHRcdFx0ZXhpc3RpbmdIYW5kbGVzLnNsaWNlKCBoYW5kbGVDb3VudCApLnJlbW92ZSgpO1xuXHRcdFx0ZXhpc3RpbmdIYW5kbGVzID0gZXhpc3RpbmdIYW5kbGVzLnNsaWNlKCAwLCBoYW5kbGVDb3VudCApO1xuXHRcdH1cblxuXHRcdGZvciAoIGkgPSBleGlzdGluZ0hhbmRsZXMubGVuZ3RoOyBpIDwgaGFuZGxlQ291bnQ7IGkrKyApIHtcblx0XHRcdGhhbmRsZXMucHVzaCggaGFuZGxlICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5oYW5kbGVzID0gZXhpc3RpbmdIYW5kbGVzLmFkZCggJCggaGFuZGxlcy5qb2luKCBcIlwiICkgKS5hcHBlbmRUbyggdGhpcy5lbGVtZW50ICkgKTtcblxuXHRcdHRoaXMuX2FkZENsYXNzKCB0aGlzLmhhbmRsZXMsIFwidWktc2xpZGVyLWhhbmRsZVwiLCBcInVpLXN0YXRlLWRlZmF1bHRcIiApO1xuXG5cdFx0dGhpcy5oYW5kbGUgPSB0aGlzLmhhbmRsZXMuZXEoIDAgKTtcblxuXHRcdHRoaXMuaGFuZGxlcy5lYWNoKCBmdW5jdGlvbiggaSApIHtcblx0XHRcdCQoIHRoaXMgKVxuXHRcdFx0XHQuZGF0YSggXCJ1aS1zbGlkZXItaGFuZGxlLWluZGV4XCIsIGkgKVxuXHRcdFx0XHQuYXR0ciggXCJ0YWJJbmRleFwiLCAwICk7XG5cdFx0fSApO1xuXHR9LFxuXG5cdF9jcmVhdGVSYW5nZTogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cblx0XHRpZiAoIG9wdGlvbnMucmFuZ2UgKSB7XG5cdFx0XHRpZiAoIG9wdGlvbnMucmFuZ2UgPT09IHRydWUgKSB7XG5cdFx0XHRcdGlmICggIW9wdGlvbnMudmFsdWVzICkge1xuXHRcdFx0XHRcdG9wdGlvbnMudmFsdWVzID0gWyB0aGlzLl92YWx1ZU1pbigpLCB0aGlzLl92YWx1ZU1pbigpIF07XG5cdFx0XHRcdH0gZWxzZSBpZiAoIG9wdGlvbnMudmFsdWVzLmxlbmd0aCAmJiBvcHRpb25zLnZhbHVlcy5sZW5ndGggIT09IDIgKSB7XG5cdFx0XHRcdFx0b3B0aW9ucy52YWx1ZXMgPSBbIG9wdGlvbnMudmFsdWVzWyAwIF0sIG9wdGlvbnMudmFsdWVzWyAwIF0gXTtcblx0XHRcdFx0fSBlbHNlIGlmICggJC5pc0FycmF5KCBvcHRpb25zLnZhbHVlcyApICkge1xuXHRcdFx0XHRcdG9wdGlvbnMudmFsdWVzID0gb3B0aW9ucy52YWx1ZXMuc2xpY2UoIDAgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICF0aGlzLnJhbmdlIHx8ICF0aGlzLnJhbmdlLmxlbmd0aCApIHtcblx0XHRcdFx0dGhpcy5yYW5nZSA9ICQoIFwiPGRpdj5cIiApXG5cdFx0XHRcdFx0LmFwcGVuZFRvKCB0aGlzLmVsZW1lbnQgKTtcblxuXHRcdFx0XHR0aGlzLl9hZGRDbGFzcyggdGhpcy5yYW5nZSwgXCJ1aS1zbGlkZXItcmFuZ2VcIiApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3MoIHRoaXMucmFuZ2UsIFwidWktc2xpZGVyLXJhbmdlLW1pbiB1aS1zbGlkZXItcmFuZ2UtbWF4XCIgKTtcblxuXHRcdFx0XHQvLyBIYW5kbGUgcmFuZ2Ugc3dpdGNoaW5nIGZyb20gdHJ1ZSB0byBtaW4vbWF4XG5cdFx0XHRcdHRoaXMucmFuZ2UuY3NzKCB7XG5cdFx0XHRcdFx0XCJsZWZ0XCI6IFwiXCIsXG5cdFx0XHRcdFx0XCJib3R0b21cIjogXCJcIlxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIG9wdGlvbnMucmFuZ2UgPT09IFwibWluXCIgfHwgb3B0aW9ucy5yYW5nZSA9PT0gXCJtYXhcIiApIHtcblx0XHRcdFx0dGhpcy5fYWRkQ2xhc3MoIHRoaXMucmFuZ2UsIFwidWktc2xpZGVyLXJhbmdlLVwiICsgb3B0aW9ucy5yYW5nZSApO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIHRoaXMucmFuZ2UgKSB7XG5cdFx0XHRcdHRoaXMucmFuZ2UucmVtb3ZlKCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnJhbmdlID0gbnVsbDtcblx0XHR9XG5cdH0sXG5cblx0X3NldHVwRXZlbnRzOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLl9vZmYoIHRoaXMuaGFuZGxlcyApO1xuXHRcdHRoaXMuX29uKCB0aGlzLmhhbmRsZXMsIHRoaXMuX2hhbmRsZUV2ZW50cyApO1xuXHRcdHRoaXMuX2hvdmVyYWJsZSggdGhpcy5oYW5kbGVzICk7XG5cdFx0dGhpcy5fZm9jdXNhYmxlKCB0aGlzLmhhbmRsZXMgKTtcblx0fSxcblxuXHRfZGVzdHJveTogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5oYW5kbGVzLnJlbW92ZSgpO1xuXHRcdGlmICggdGhpcy5yYW5nZSApIHtcblx0XHRcdHRoaXMucmFuZ2UucmVtb3ZlKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fbW91c2VEZXN0cm95KCk7XG5cdH0sXG5cblx0X21vdXNlQ2FwdHVyZTogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdHZhciBwb3NpdGlvbiwgbm9ybVZhbHVlLCBkaXN0YW5jZSwgY2xvc2VzdEhhbmRsZSwgaW5kZXgsIGFsbG93ZWQsIG9mZnNldCwgbW91c2VPdmVySGFuZGxlLFxuXHRcdFx0dGhhdCA9IHRoaXMsXG5cdFx0XHRvID0gdGhpcy5vcHRpb25zO1xuXG5cdFx0aWYgKCBvLmRpc2FibGVkICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudFNpemUgPSB7XG5cdFx0XHR3aWR0aDogdGhpcy5lbGVtZW50Lm91dGVyV2lkdGgoKSxcblx0XHRcdGhlaWdodDogdGhpcy5lbGVtZW50Lm91dGVySGVpZ2h0KClcblx0XHR9O1xuXHRcdHRoaXMuZWxlbWVudE9mZnNldCA9IHRoaXMuZWxlbWVudC5vZmZzZXQoKTtcblxuXHRcdHBvc2l0aW9uID0geyB4OiBldmVudC5wYWdlWCwgeTogZXZlbnQucGFnZVkgfTtcblx0XHRub3JtVmFsdWUgPSB0aGlzLl9ub3JtVmFsdWVGcm9tTW91c2UoIHBvc2l0aW9uICk7XG5cdFx0ZGlzdGFuY2UgPSB0aGlzLl92YWx1ZU1heCgpIC0gdGhpcy5fdmFsdWVNaW4oKSArIDE7XG5cdFx0dGhpcy5oYW5kbGVzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0dmFyIHRoaXNEaXN0YW5jZSA9IE1hdGguYWJzKCBub3JtVmFsdWUgLSB0aGF0LnZhbHVlcyggaSApICk7XG5cdFx0XHRpZiAoICggZGlzdGFuY2UgPiB0aGlzRGlzdGFuY2UgKSB8fFxuXHRcdFx0XHQoIGRpc3RhbmNlID09PSB0aGlzRGlzdGFuY2UgJiZcblx0XHRcdFx0XHQoIGkgPT09IHRoYXQuX2xhc3RDaGFuZ2VkVmFsdWUgfHwgdGhhdC52YWx1ZXMoIGkgKSA9PT0gby5taW4gKSApICkge1xuXHRcdFx0XHRkaXN0YW5jZSA9IHRoaXNEaXN0YW5jZTtcblx0XHRcdFx0Y2xvc2VzdEhhbmRsZSA9ICQoIHRoaXMgKTtcblx0XHRcdFx0aW5kZXggPSBpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdGFsbG93ZWQgPSB0aGlzLl9zdGFydCggZXZlbnQsIGluZGV4ICk7XG5cdFx0aWYgKCBhbGxvd2VkID09PSBmYWxzZSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5fbW91c2VTbGlkaW5nID0gdHJ1ZTtcblxuXHRcdHRoaXMuX2hhbmRsZUluZGV4ID0gaW5kZXg7XG5cblx0XHR0aGlzLl9hZGRDbGFzcyggY2xvc2VzdEhhbmRsZSwgbnVsbCwgXCJ1aS1zdGF0ZS1hY3RpdmVcIiApO1xuXHRcdGNsb3Nlc3RIYW5kbGUudHJpZ2dlciggXCJmb2N1c1wiICk7XG5cblx0XHRvZmZzZXQgPSBjbG9zZXN0SGFuZGxlLm9mZnNldCgpO1xuXHRcdG1vdXNlT3ZlckhhbmRsZSA9ICEkKCBldmVudC50YXJnZXQgKS5wYXJlbnRzKCkuYWRkQmFjaygpLmlzKCBcIi51aS1zbGlkZXItaGFuZGxlXCIgKTtcblx0XHR0aGlzLl9jbGlja09mZnNldCA9IG1vdXNlT3ZlckhhbmRsZSA/IHsgbGVmdDogMCwgdG9wOiAwIH0gOiB7XG5cdFx0XHRsZWZ0OiBldmVudC5wYWdlWCAtIG9mZnNldC5sZWZ0IC0gKCBjbG9zZXN0SGFuZGxlLndpZHRoKCkgLyAyICksXG5cdFx0XHR0b3A6IGV2ZW50LnBhZ2VZIC0gb2Zmc2V0LnRvcCAtXG5cdFx0XHRcdCggY2xvc2VzdEhhbmRsZS5oZWlnaHQoKSAvIDIgKSAtXG5cdFx0XHRcdCggcGFyc2VJbnQoIGNsb3Nlc3RIYW5kbGUuY3NzKCBcImJvcmRlclRvcFdpZHRoXCIgKSwgMTAgKSB8fCAwICkgLVxuXHRcdFx0XHQoIHBhcnNlSW50KCBjbG9zZXN0SGFuZGxlLmNzcyggXCJib3JkZXJCb3R0b21XaWR0aFwiICksIDEwICkgfHwgMCApICtcblx0XHRcdFx0KCBwYXJzZUludCggY2xvc2VzdEhhbmRsZS5jc3MoIFwibWFyZ2luVG9wXCIgKSwgMTAgKSB8fCAwIClcblx0XHR9O1xuXG5cdFx0aWYgKCAhdGhpcy5oYW5kbGVzLmhhc0NsYXNzKCBcInVpLXN0YXRlLWhvdmVyXCIgKSApIHtcblx0XHRcdHRoaXMuX3NsaWRlKCBldmVudCwgaW5kZXgsIG5vcm1WYWx1ZSApO1xuXHRcdH1cblx0XHR0aGlzLl9hbmltYXRlT2ZmID0gdHJ1ZTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHRfbW91c2VTdGFydDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0X21vdXNlRHJhZzogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdHZhciBwb3NpdGlvbiA9IHsgeDogZXZlbnQucGFnZVgsIHk6IGV2ZW50LnBhZ2VZIH0sXG5cdFx0XHRub3JtVmFsdWUgPSB0aGlzLl9ub3JtVmFsdWVGcm9tTW91c2UoIHBvc2l0aW9uICk7XG5cblx0XHR0aGlzLl9zbGlkZSggZXZlbnQsIHRoaXMuX2hhbmRsZUluZGV4LCBub3JtVmFsdWUgKTtcblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblxuXHRfbW91c2VTdG9wOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0dGhpcy5fcmVtb3ZlQ2xhc3MoIHRoaXMuaGFuZGxlcywgbnVsbCwgXCJ1aS1zdGF0ZS1hY3RpdmVcIiApO1xuXHRcdHRoaXMuX21vdXNlU2xpZGluZyA9IGZhbHNlO1xuXG5cdFx0dGhpcy5fc3RvcCggZXZlbnQsIHRoaXMuX2hhbmRsZUluZGV4ICk7XG5cdFx0dGhpcy5fY2hhbmdlKCBldmVudCwgdGhpcy5faGFuZGxlSW5kZXggKTtcblxuXHRcdHRoaXMuX2hhbmRsZUluZGV4ID0gbnVsbDtcblx0XHR0aGlzLl9jbGlja09mZnNldCA9IG51bGw7XG5cdFx0dGhpcy5fYW5pbWF0ZU9mZiA9IGZhbHNlO1xuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXG5cdF9kZXRlY3RPcmllbnRhdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5vcmllbnRhdGlvbiA9ICggdGhpcy5vcHRpb25zLm9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgKSA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiO1xuXHR9LFxuXG5cdF9ub3JtVmFsdWVGcm9tTW91c2U6IGZ1bmN0aW9uKCBwb3NpdGlvbiApIHtcblx0XHR2YXIgcGl4ZWxUb3RhbCxcblx0XHRcdHBpeGVsTW91c2UsXG5cdFx0XHRwZXJjZW50TW91c2UsXG5cdFx0XHR2YWx1ZVRvdGFsLFxuXHRcdFx0dmFsdWVNb3VzZTtcblxuXHRcdGlmICggdGhpcy5vcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgKSB7XG5cdFx0XHRwaXhlbFRvdGFsID0gdGhpcy5lbGVtZW50U2l6ZS53aWR0aDtcblx0XHRcdHBpeGVsTW91c2UgPSBwb3NpdGlvbi54IC0gdGhpcy5lbGVtZW50T2Zmc2V0LmxlZnQgLVxuXHRcdFx0XHQoIHRoaXMuX2NsaWNrT2Zmc2V0ID8gdGhpcy5fY2xpY2tPZmZzZXQubGVmdCA6IDAgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGl4ZWxUb3RhbCA9IHRoaXMuZWxlbWVudFNpemUuaGVpZ2h0O1xuXHRcdFx0cGl4ZWxNb3VzZSA9IHBvc2l0aW9uLnkgLSB0aGlzLmVsZW1lbnRPZmZzZXQudG9wIC1cblx0XHRcdFx0KCB0aGlzLl9jbGlja09mZnNldCA/IHRoaXMuX2NsaWNrT2Zmc2V0LnRvcCA6IDAgKTtcblx0XHR9XG5cblx0XHRwZXJjZW50TW91c2UgPSAoIHBpeGVsTW91c2UgLyBwaXhlbFRvdGFsICk7XG5cdFx0aWYgKCBwZXJjZW50TW91c2UgPiAxICkge1xuXHRcdFx0cGVyY2VudE1vdXNlID0gMTtcblx0XHR9XG5cdFx0aWYgKCBwZXJjZW50TW91c2UgPCAwICkge1xuXHRcdFx0cGVyY2VudE1vdXNlID0gMDtcblx0XHR9XG5cdFx0aWYgKCB0aGlzLm9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgKSB7XG5cdFx0XHRwZXJjZW50TW91c2UgPSAxIC0gcGVyY2VudE1vdXNlO1xuXHRcdH1cblxuXHRcdHZhbHVlVG90YWwgPSB0aGlzLl92YWx1ZU1heCgpIC0gdGhpcy5fdmFsdWVNaW4oKTtcblx0XHR2YWx1ZU1vdXNlID0gdGhpcy5fdmFsdWVNaW4oKSArIHBlcmNlbnRNb3VzZSAqIHZhbHVlVG90YWw7XG5cblx0XHRyZXR1cm4gdGhpcy5fdHJpbUFsaWduVmFsdWUoIHZhbHVlTW91c2UgKTtcblx0fSxcblxuXHRfdWlIYXNoOiBmdW5jdGlvbiggaW5kZXgsIHZhbHVlLCB2YWx1ZXMgKSB7XG5cdFx0dmFyIHVpSGFzaCA9IHtcblx0XHRcdGhhbmRsZTogdGhpcy5oYW5kbGVzWyBpbmRleCBdLFxuXHRcdFx0aGFuZGxlSW5kZXg6IGluZGV4LFxuXHRcdFx0dmFsdWU6IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHRoaXMudmFsdWUoKVxuXHRcdH07XG5cblx0XHRpZiAoIHRoaXMuX2hhc011bHRpcGxlVmFsdWVzKCkgKSB7XG5cdFx0XHR1aUhhc2gudmFsdWUgPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB0aGlzLnZhbHVlcyggaW5kZXggKTtcblx0XHRcdHVpSGFzaC52YWx1ZXMgPSB2YWx1ZXMgfHwgdGhpcy52YWx1ZXMoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdWlIYXNoO1xuXHR9LFxuXG5cdF9oYXNNdWx0aXBsZVZhbHVlczogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9ucy52YWx1ZXMgJiYgdGhpcy5vcHRpb25zLnZhbHVlcy5sZW5ndGg7XG5cdH0sXG5cblx0X3N0YXJ0OiBmdW5jdGlvbiggZXZlbnQsIGluZGV4ICkge1xuXHRcdHJldHVybiB0aGlzLl90cmlnZ2VyKCBcInN0YXJ0XCIsIGV2ZW50LCB0aGlzLl91aUhhc2goIGluZGV4ICkgKTtcblx0fSxcblxuXHRfc2xpZGU6IGZ1bmN0aW9uKCBldmVudCwgaW5kZXgsIG5ld1ZhbCApIHtcblx0XHR2YXIgYWxsb3dlZCwgb3RoZXJWYWwsXG5cdFx0XHRjdXJyZW50VmFsdWUgPSB0aGlzLnZhbHVlKCksXG5cdFx0XHRuZXdWYWx1ZXMgPSB0aGlzLnZhbHVlcygpO1xuXG5cdFx0aWYgKCB0aGlzLl9oYXNNdWx0aXBsZVZhbHVlcygpICkge1xuXHRcdFx0b3RoZXJWYWwgPSB0aGlzLnZhbHVlcyggaW5kZXggPyAwIDogMSApO1xuXHRcdFx0Y3VycmVudFZhbHVlID0gdGhpcy52YWx1ZXMoIGluZGV4ICk7XG5cblx0XHRcdGlmICggdGhpcy5vcHRpb25zLnZhbHVlcy5sZW5ndGggPT09IDIgJiYgdGhpcy5vcHRpb25zLnJhbmdlID09PSB0cnVlICkge1xuXHRcdFx0XHRuZXdWYWwgPSAgaW5kZXggPT09IDAgPyBNYXRoLm1pbiggb3RoZXJWYWwsIG5ld1ZhbCApIDogTWF0aC5tYXgoIG90aGVyVmFsLCBuZXdWYWwgKTtcblx0XHRcdH1cblxuXHRcdFx0bmV3VmFsdWVzWyBpbmRleCBdID0gbmV3VmFsO1xuXHRcdH1cblxuXHRcdGlmICggbmV3VmFsID09PSBjdXJyZW50VmFsdWUgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0YWxsb3dlZCA9IHRoaXMuX3RyaWdnZXIoIFwic2xpZGVcIiwgZXZlbnQsIHRoaXMuX3VpSGFzaCggaW5kZXgsIG5ld1ZhbCwgbmV3VmFsdWVzICkgKTtcblxuXHRcdC8vIEEgc2xpZGUgY2FuIGJlIGNhbmNlbGVkIGJ5IHJldHVybmluZyBmYWxzZSBmcm9tIHRoZSBzbGlkZSBjYWxsYmFja1xuXHRcdGlmICggYWxsb3dlZCA9PT0gZmFsc2UgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLl9oYXNNdWx0aXBsZVZhbHVlcygpICkge1xuXHRcdFx0dGhpcy52YWx1ZXMoIGluZGV4LCBuZXdWYWwgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy52YWx1ZSggbmV3VmFsICk7XG5cdFx0fVxuXHR9LFxuXG5cdF9zdG9wOiBmdW5jdGlvbiggZXZlbnQsIGluZGV4ICkge1xuXHRcdHRoaXMuX3RyaWdnZXIoIFwic3RvcFwiLCBldmVudCwgdGhpcy5fdWlIYXNoKCBpbmRleCApICk7XG5cdH0sXG5cblx0X2NoYW5nZTogZnVuY3Rpb24oIGV2ZW50LCBpbmRleCApIHtcblx0XHRpZiAoICF0aGlzLl9rZXlTbGlkaW5nICYmICF0aGlzLl9tb3VzZVNsaWRpbmcgKSB7XG5cblx0XHRcdC8vc3RvcmUgdGhlIGxhc3QgY2hhbmdlZCB2YWx1ZSBpbmRleCBmb3IgcmVmZXJlbmNlIHdoZW4gaGFuZGxlcyBvdmVybGFwXG5cdFx0XHR0aGlzLl9sYXN0Q2hhbmdlZFZhbHVlID0gaW5kZXg7XG5cdFx0XHR0aGlzLl90cmlnZ2VyKCBcImNoYW5nZVwiLCBldmVudCwgdGhpcy5fdWlIYXNoKCBpbmRleCApICk7XG5cdFx0fVxuXHR9LFxuXG5cdHZhbHVlOiBmdW5jdGlvbiggbmV3VmFsdWUgKSB7XG5cdFx0aWYgKCBhcmd1bWVudHMubGVuZ3RoICkge1xuXHRcdFx0dGhpcy5vcHRpb25zLnZhbHVlID0gdGhpcy5fdHJpbUFsaWduVmFsdWUoIG5ld1ZhbHVlICk7XG5cdFx0XHR0aGlzLl9yZWZyZXNoVmFsdWUoKTtcblx0XHRcdHRoaXMuX2NoYW5nZSggbnVsbCwgMCApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLl92YWx1ZSgpO1xuXHR9LFxuXG5cdHZhbHVlczogZnVuY3Rpb24oIGluZGV4LCBuZXdWYWx1ZSApIHtcblx0XHR2YXIgdmFscyxcblx0XHRcdG5ld1ZhbHVlcyxcblx0XHRcdGk7XG5cblx0XHRpZiAoIGFyZ3VtZW50cy5sZW5ndGggPiAxICkge1xuXHRcdFx0dGhpcy5vcHRpb25zLnZhbHVlc1sgaW5kZXggXSA9IHRoaXMuX3RyaW1BbGlnblZhbHVlKCBuZXdWYWx1ZSApO1xuXHRcdFx0dGhpcy5fcmVmcmVzaFZhbHVlKCk7XG5cdFx0XHR0aGlzLl9jaGFuZ2UoIG51bGwsIGluZGV4ICk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCBhcmd1bWVudHMubGVuZ3RoICkge1xuXHRcdFx0aWYgKCAkLmlzQXJyYXkoIGFyZ3VtZW50c1sgMCBdICkgKSB7XG5cdFx0XHRcdHZhbHMgPSB0aGlzLm9wdGlvbnMudmFsdWVzO1xuXHRcdFx0XHRuZXdWYWx1ZXMgPSBhcmd1bWVudHNbIDAgXTtcblx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCB2YWxzLmxlbmd0aDsgaSArPSAxICkge1xuXHRcdFx0XHRcdHZhbHNbIGkgXSA9IHRoaXMuX3RyaW1BbGlnblZhbHVlKCBuZXdWYWx1ZXNbIGkgXSApO1xuXHRcdFx0XHRcdHRoaXMuX2NoYW5nZSggbnVsbCwgaSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX3JlZnJlc2hWYWx1ZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKCB0aGlzLl9oYXNNdWx0aXBsZVZhbHVlcygpICkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLl92YWx1ZXMoIGluZGV4ICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fdmFsdWVzKCk7XG5cdFx0fVxuXHR9LFxuXG5cdF9zZXRPcHRpb246IGZ1bmN0aW9uKCBrZXksIHZhbHVlICkge1xuXHRcdHZhciBpLFxuXHRcdFx0dmFsc0xlbmd0aCA9IDA7XG5cblx0XHRpZiAoIGtleSA9PT0gXCJyYW5nZVwiICYmIHRoaXMub3B0aW9ucy5yYW5nZSA9PT0gdHJ1ZSApIHtcblx0XHRcdGlmICggdmFsdWUgPT09IFwibWluXCIgKSB7XG5cdFx0XHRcdHRoaXMub3B0aW9ucy52YWx1ZSA9IHRoaXMuX3ZhbHVlcyggMCApO1xuXHRcdFx0XHR0aGlzLm9wdGlvbnMudmFsdWVzID0gbnVsbDtcblx0XHRcdH0gZWxzZSBpZiAoIHZhbHVlID09PSBcIm1heFwiICkge1xuXHRcdFx0XHR0aGlzLm9wdGlvbnMudmFsdWUgPSB0aGlzLl92YWx1ZXMoIHRoaXMub3B0aW9ucy52YWx1ZXMubGVuZ3RoIC0gMSApO1xuXHRcdFx0XHR0aGlzLm9wdGlvbnMudmFsdWVzID0gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoICQuaXNBcnJheSggdGhpcy5vcHRpb25zLnZhbHVlcyApICkge1xuXHRcdFx0dmFsc0xlbmd0aCA9IHRoaXMub3B0aW9ucy52YWx1ZXMubGVuZ3RoO1xuXHRcdH1cblxuXHRcdHRoaXMuX3N1cGVyKCBrZXksIHZhbHVlICk7XG5cblx0XHRzd2l0Y2ggKCBrZXkgKSB7XG5cdFx0XHRjYXNlIFwib3JpZW50YXRpb25cIjpcblx0XHRcdFx0dGhpcy5fZGV0ZWN0T3JpZW50YXRpb24oKTtcblx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3MoIFwidWktc2xpZGVyLWhvcml6b250YWwgdWktc2xpZGVyLXZlcnRpY2FsXCIgKVxuXHRcdFx0XHRcdC5fYWRkQ2xhc3MoIFwidWktc2xpZGVyLVwiICsgdGhpcy5vcmllbnRhdGlvbiApO1xuXHRcdFx0XHR0aGlzLl9yZWZyZXNoVmFsdWUoKTtcblx0XHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMucmFuZ2UgKSB7XG5cdFx0XHRcdFx0dGhpcy5fcmVmcmVzaFJhbmdlKCB2YWx1ZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmVzZXQgcG9zaXRpb25pbmcgZnJvbSBwcmV2aW91cyBvcmllbnRhdGlvblxuXHRcdFx0XHR0aGlzLmhhbmRsZXMuY3NzKCB2YWx1ZSA9PT0gXCJob3Jpem9udGFsXCIgPyBcImJvdHRvbVwiIDogXCJsZWZ0XCIsIFwiXCIgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwidmFsdWVcIjpcblx0XHRcdFx0dGhpcy5fYW5pbWF0ZU9mZiA9IHRydWU7XG5cdFx0XHRcdHRoaXMuX3JlZnJlc2hWYWx1ZSgpO1xuXHRcdFx0XHR0aGlzLl9jaGFuZ2UoIG51bGwsIDAgKTtcblx0XHRcdFx0dGhpcy5fYW5pbWF0ZU9mZiA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJ2YWx1ZXNcIjpcblx0XHRcdFx0dGhpcy5fYW5pbWF0ZU9mZiA9IHRydWU7XG5cdFx0XHRcdHRoaXMuX3JlZnJlc2hWYWx1ZSgpO1xuXG5cdFx0XHRcdC8vIFN0YXJ0IGZyb20gdGhlIGxhc3QgaGFuZGxlIHRvIHByZXZlbnQgdW5yZWFjaGFibGUgaGFuZGxlcyAoIzkwNDYpXG5cdFx0XHRcdGZvciAoIGkgPSB2YWxzTGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKSB7XG5cdFx0XHRcdFx0dGhpcy5fY2hhbmdlKCBudWxsLCBpICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fYW5pbWF0ZU9mZiA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJzdGVwXCI6XG5cdFx0XHRjYXNlIFwibWluXCI6XG5cdFx0XHRjYXNlIFwibWF4XCI6XG5cdFx0XHRcdHRoaXMuX2FuaW1hdGVPZmYgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLl9jYWxjdWxhdGVOZXdNYXgoKTtcblx0XHRcdFx0dGhpcy5fcmVmcmVzaFZhbHVlKCk7XG5cdFx0XHRcdHRoaXMuX2FuaW1hdGVPZmYgPSBmYWxzZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwicmFuZ2VcIjpcblx0XHRcdFx0dGhpcy5fYW5pbWF0ZU9mZiA9IHRydWU7XG5cdFx0XHRcdHRoaXMuX3JlZnJlc2goKTtcblx0XHRcdFx0dGhpcy5fYW5pbWF0ZU9mZiA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH0sXG5cblx0X3NldE9wdGlvbkRpc2FibGVkOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dGhpcy5fc3VwZXIoIHZhbHVlICk7XG5cblx0XHR0aGlzLl90b2dnbGVDbGFzcyggbnVsbCwgXCJ1aS1zdGF0ZS1kaXNhYmxlZFwiLCAhIXZhbHVlICk7XG5cdH0sXG5cblx0Ly9pbnRlcm5hbCB2YWx1ZSBnZXR0ZXJcblx0Ly8gX3ZhbHVlKCkgcmV0dXJucyB2YWx1ZSB0cmltbWVkIGJ5IG1pbiBhbmQgbWF4LCBhbGlnbmVkIGJ5IHN0ZXBcblx0X3ZhbHVlOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgdmFsID0gdGhpcy5vcHRpb25zLnZhbHVlO1xuXHRcdHZhbCA9IHRoaXMuX3RyaW1BbGlnblZhbHVlKCB2YWwgKTtcblxuXHRcdHJldHVybiB2YWw7XG5cdH0sXG5cblx0Ly9pbnRlcm5hbCB2YWx1ZXMgZ2V0dGVyXG5cdC8vIF92YWx1ZXMoKSByZXR1cm5zIGFycmF5IG9mIHZhbHVlcyB0cmltbWVkIGJ5IG1pbiBhbmQgbWF4LCBhbGlnbmVkIGJ5IHN0ZXBcblx0Ly8gX3ZhbHVlcyggaW5kZXggKSByZXR1cm5zIHNpbmdsZSB2YWx1ZSB0cmltbWVkIGJ5IG1pbiBhbmQgbWF4LCBhbGlnbmVkIGJ5IHN0ZXBcblx0X3ZhbHVlczogZnVuY3Rpb24oIGluZGV4ICkge1xuXHRcdHZhciB2YWwsXG5cdFx0XHR2YWxzLFxuXHRcdFx0aTtcblxuXHRcdGlmICggYXJndW1lbnRzLmxlbmd0aCApIHtcblx0XHRcdHZhbCA9IHRoaXMub3B0aW9ucy52YWx1ZXNbIGluZGV4IF07XG5cdFx0XHR2YWwgPSB0aGlzLl90cmltQWxpZ25WYWx1ZSggdmFsICk7XG5cblx0XHRcdHJldHVybiB2YWw7XG5cdFx0fSBlbHNlIGlmICggdGhpcy5faGFzTXVsdGlwbGVWYWx1ZXMoKSApIHtcblxuXHRcdFx0Ly8gLnNsaWNlKCkgY3JlYXRlcyBhIGNvcHkgb2YgdGhlIGFycmF5XG5cdFx0XHQvLyB0aGlzIGNvcHkgZ2V0cyB0cmltbWVkIGJ5IG1pbiBhbmQgbWF4IGFuZCB0aGVuIHJldHVybmVkXG5cdFx0XHR2YWxzID0gdGhpcy5vcHRpb25zLnZhbHVlcy5zbGljZSgpO1xuXHRcdFx0Zm9yICggaSA9IDA7IGkgPCB2YWxzLmxlbmd0aDsgaSArPSAxICkge1xuXHRcdFx0XHR2YWxzWyBpIF0gPSB0aGlzLl90cmltQWxpZ25WYWx1ZSggdmFsc1sgaSBdICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB2YWxzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHR9LFxuXG5cdC8vIFJldHVybnMgdGhlIHN0ZXAtYWxpZ25lZCB2YWx1ZSB0aGF0IHZhbCBpcyBjbG9zZXN0IHRvLCBiZXR3ZWVuIChpbmNsdXNpdmUpIG1pbiBhbmQgbWF4XG5cdF90cmltQWxpZ25WYWx1ZTogZnVuY3Rpb24oIHZhbCApIHtcblx0XHRpZiAoIHZhbCA8PSB0aGlzLl92YWx1ZU1pbigpICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX3ZhbHVlTWluKCk7XG5cdFx0fVxuXHRcdGlmICggdmFsID49IHRoaXMuX3ZhbHVlTWF4KCkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fdmFsdWVNYXgoKTtcblx0XHR9XG5cdFx0dmFyIHN0ZXAgPSAoIHRoaXMub3B0aW9ucy5zdGVwID4gMCApID8gdGhpcy5vcHRpb25zLnN0ZXAgOiAxLFxuXHRcdFx0dmFsTW9kU3RlcCA9ICggdmFsIC0gdGhpcy5fdmFsdWVNaW4oKSApICUgc3RlcCxcblx0XHRcdGFsaWduVmFsdWUgPSB2YWwgLSB2YWxNb2RTdGVwO1xuXG5cdFx0aWYgKCBNYXRoLmFicyggdmFsTW9kU3RlcCApICogMiA+PSBzdGVwICkge1xuXHRcdFx0YWxpZ25WYWx1ZSArPSAoIHZhbE1vZFN0ZXAgPiAwICkgPyBzdGVwIDogKCAtc3RlcCApO1xuXHRcdH1cblxuXHRcdC8vIFNpbmNlIEphdmFTY3JpcHQgaGFzIHByb2JsZW1zIHdpdGggbGFyZ2UgZmxvYXRzLCByb3VuZFxuXHRcdC8vIHRoZSBmaW5hbCB2YWx1ZSB0byA1IGRpZ2l0cyBhZnRlciB0aGUgZGVjaW1hbCBwb2ludCAoc2VlICM0MTI0KVxuXHRcdHJldHVybiBwYXJzZUZsb2F0KCBhbGlnblZhbHVlLnRvRml4ZWQoIDUgKSApO1xuXHR9LFxuXG5cdF9jYWxjdWxhdGVOZXdNYXg6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBtYXggPSB0aGlzLm9wdGlvbnMubWF4LFxuXHRcdFx0bWluID0gdGhpcy5fdmFsdWVNaW4oKSxcblx0XHRcdHN0ZXAgPSB0aGlzLm9wdGlvbnMuc3RlcCxcblx0XHRcdGFib3ZlTWluID0gTWF0aC5yb3VuZCggKCBtYXggLSBtaW4gKSAvIHN0ZXAgKSAqIHN0ZXA7XG5cdFx0bWF4ID0gYWJvdmVNaW4gKyBtaW47XG5cdFx0aWYgKCBtYXggPiB0aGlzLm9wdGlvbnMubWF4ICkge1xuXG5cdFx0XHQvL0lmIG1heCBpcyBub3QgZGl2aXNpYmxlIGJ5IHN0ZXAsIHJvdW5kaW5nIG9mZiBtYXkgaW5jcmVhc2UgaXRzIHZhbHVlXG5cdFx0XHRtYXggLT0gc3RlcDtcblx0XHR9XG5cdFx0dGhpcy5tYXggPSBwYXJzZUZsb2F0KCBtYXgudG9GaXhlZCggdGhpcy5fcHJlY2lzaW9uKCkgKSApO1xuXHR9LFxuXG5cdF9wcmVjaXNpb246IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBwcmVjaXNpb24gPSB0aGlzLl9wcmVjaXNpb25PZiggdGhpcy5vcHRpb25zLnN0ZXAgKTtcblx0XHRpZiAoIHRoaXMub3B0aW9ucy5taW4gIT09IG51bGwgKSB7XG5cdFx0XHRwcmVjaXNpb24gPSBNYXRoLm1heCggcHJlY2lzaW9uLCB0aGlzLl9wcmVjaXNpb25PZiggdGhpcy5vcHRpb25zLm1pbiApICk7XG5cdFx0fVxuXHRcdHJldHVybiBwcmVjaXNpb247XG5cdH0sXG5cblx0X3ByZWNpc2lvbk9mOiBmdW5jdGlvbiggbnVtICkge1xuXHRcdHZhciBzdHIgPSBudW0udG9TdHJpbmcoKSxcblx0XHRcdGRlY2ltYWwgPSBzdHIuaW5kZXhPZiggXCIuXCIgKTtcblx0XHRyZXR1cm4gZGVjaW1hbCA9PT0gLTEgPyAwIDogc3RyLmxlbmd0aCAtIGRlY2ltYWwgLSAxO1xuXHR9LFxuXG5cdF92YWx1ZU1pbjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9ucy5taW47XG5cdH0sXG5cblx0X3ZhbHVlTWF4OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXg7XG5cdH0sXG5cblx0X3JlZnJlc2hSYW5nZTogZnVuY3Rpb24oIG9yaWVudGF0aW9uICkge1xuXHRcdGlmICggb3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiApIHtcblx0XHRcdHRoaXMucmFuZ2UuY3NzKCB7IFwid2lkdGhcIjogXCJcIiwgXCJsZWZ0XCI6IFwiXCIgfSApO1xuXHRcdH1cblx0XHRpZiAoIG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiApIHtcblx0XHRcdHRoaXMucmFuZ2UuY3NzKCB7IFwiaGVpZ2h0XCI6IFwiXCIsIFwiYm90dG9tXCI6IFwiXCIgfSApO1xuXHRcdH1cblx0fSxcblxuXHRfcmVmcmVzaFZhbHVlOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgbGFzdFZhbFBlcmNlbnQsIHZhbFBlcmNlbnQsIHZhbHVlLCB2YWx1ZU1pbiwgdmFsdWVNYXgsXG5cdFx0XHRvUmFuZ2UgPSB0aGlzLm9wdGlvbnMucmFuZ2UsXG5cdFx0XHRvID0gdGhpcy5vcHRpb25zLFxuXHRcdFx0dGhhdCA9IHRoaXMsXG5cdFx0XHRhbmltYXRlID0gKCAhdGhpcy5fYW5pbWF0ZU9mZiApID8gby5hbmltYXRlIDogZmFsc2UsXG5cdFx0XHRfc2V0ID0ge307XG5cblx0XHRpZiAoIHRoaXMuX2hhc011bHRpcGxlVmFsdWVzKCkgKSB7XG5cdFx0XHR0aGlzLmhhbmRsZXMuZWFjaCggZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHRcdHZhbFBlcmNlbnQgPSAoIHRoYXQudmFsdWVzKCBpICkgLSB0aGF0Ll92YWx1ZU1pbigpICkgLyAoIHRoYXQuX3ZhbHVlTWF4KCkgLVxuXHRcdFx0XHRcdHRoYXQuX3ZhbHVlTWluKCkgKSAqIDEwMDtcblx0XHRcdFx0X3NldFsgdGhhdC5vcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBcImxlZnRcIiA6IFwiYm90dG9tXCIgXSA9IHZhbFBlcmNlbnQgKyBcIiVcIjtcblx0XHRcdFx0JCggdGhpcyApLnN0b3AoIDEsIDEgKVsgYW5pbWF0ZSA/IFwiYW5pbWF0ZVwiIDogXCJjc3NcIiBdKCBfc2V0LCBvLmFuaW1hdGUgKTtcblx0XHRcdFx0aWYgKCB0aGF0Lm9wdGlvbnMucmFuZ2UgPT09IHRydWUgKSB7XG5cdFx0XHRcdFx0aWYgKCB0aGF0Lm9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiApIHtcblx0XHRcdFx0XHRcdGlmICggaSA9PT0gMCApIHtcblx0XHRcdFx0XHRcdFx0dGhhdC5yYW5nZS5zdG9wKCAxLCAxIClbIGFuaW1hdGUgPyBcImFuaW1hdGVcIiA6IFwiY3NzXCIgXSgge1xuXHRcdFx0XHRcdFx0XHRcdGxlZnQ6IHZhbFBlcmNlbnQgKyBcIiVcIlxuXHRcdFx0XHRcdFx0XHR9LCBvLmFuaW1hdGUgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICggaSA9PT0gMSApIHtcblx0XHRcdFx0XHRcdFx0dGhhdC5yYW5nZVsgYW5pbWF0ZSA/IFwiYW5pbWF0ZVwiIDogXCJjc3NcIiBdKCB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6ICggdmFsUGVyY2VudCAtIGxhc3RWYWxQZXJjZW50ICkgKyBcIiVcIlxuXHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0cXVldWU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiBvLmFuaW1hdGVcblx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAoIGkgPT09IDAgKSB7XG5cdFx0XHRcdFx0XHRcdHRoYXQucmFuZ2Uuc3RvcCggMSwgMSApWyBhbmltYXRlID8gXCJhbmltYXRlXCIgOiBcImNzc1wiIF0oIHtcblx0XHRcdFx0XHRcdFx0XHRib3R0b206ICggdmFsUGVyY2VudCApICsgXCIlXCJcblx0XHRcdFx0XHRcdFx0fSwgby5hbmltYXRlICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoIGkgPT09IDEgKSB7XG5cdFx0XHRcdFx0XHRcdHRoYXQucmFuZ2VbIGFuaW1hdGUgPyBcImFuaW1hdGVcIiA6IFwiY3NzXCIgXSgge1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogKCB2YWxQZXJjZW50IC0gbGFzdFZhbFBlcmNlbnQgKSArIFwiJVwiXG5cdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRxdWV1ZTogZmFsc2UsXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IG8uYW5pbWF0ZVxuXHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGxhc3RWYWxQZXJjZW50ID0gdmFsUGVyY2VudDtcblx0XHRcdH0gKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsdWUgPSB0aGlzLnZhbHVlKCk7XG5cdFx0XHR2YWx1ZU1pbiA9IHRoaXMuX3ZhbHVlTWluKCk7XG5cdFx0XHR2YWx1ZU1heCA9IHRoaXMuX3ZhbHVlTWF4KCk7XG5cdFx0XHR2YWxQZXJjZW50ID0gKCB2YWx1ZU1heCAhPT0gdmFsdWVNaW4gKSA/XG5cdFx0XHRcdFx0KCB2YWx1ZSAtIHZhbHVlTWluICkgLyAoIHZhbHVlTWF4IC0gdmFsdWVNaW4gKSAqIDEwMCA6XG5cdFx0XHRcdFx0MDtcblx0XHRcdF9zZXRbIHRoaXMub3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gXCJsZWZ0XCIgOiBcImJvdHRvbVwiIF0gPSB2YWxQZXJjZW50ICsgXCIlXCI7XG5cdFx0XHR0aGlzLmhhbmRsZS5zdG9wKCAxLCAxIClbIGFuaW1hdGUgPyBcImFuaW1hdGVcIiA6IFwiY3NzXCIgXSggX3NldCwgby5hbmltYXRlICk7XG5cblx0XHRcdGlmICggb1JhbmdlID09PSBcIm1pblwiICYmIHRoaXMub3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiICkge1xuXHRcdFx0XHR0aGlzLnJhbmdlLnN0b3AoIDEsIDEgKVsgYW5pbWF0ZSA/IFwiYW5pbWF0ZVwiIDogXCJjc3NcIiBdKCB7XG5cdFx0XHRcdFx0d2lkdGg6IHZhbFBlcmNlbnQgKyBcIiVcIlxuXHRcdFx0XHR9LCBvLmFuaW1hdGUgKTtcblx0XHRcdH1cblx0XHRcdGlmICggb1JhbmdlID09PSBcIm1heFwiICYmIHRoaXMub3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiICkge1xuXHRcdFx0XHR0aGlzLnJhbmdlLnN0b3AoIDEsIDEgKVsgYW5pbWF0ZSA/IFwiYW5pbWF0ZVwiIDogXCJjc3NcIiBdKCB7XG5cdFx0XHRcdFx0d2lkdGg6ICggMTAwIC0gdmFsUGVyY2VudCApICsgXCIlXCJcblx0XHRcdFx0fSwgby5hbmltYXRlICk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIG9SYW5nZSA9PT0gXCJtaW5cIiAmJiB0aGlzLm9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgKSB7XG5cdFx0XHRcdHRoaXMucmFuZ2Uuc3RvcCggMSwgMSApWyBhbmltYXRlID8gXCJhbmltYXRlXCIgOiBcImNzc1wiIF0oIHtcblx0XHRcdFx0XHRoZWlnaHQ6IHZhbFBlcmNlbnQgKyBcIiVcIlxuXHRcdFx0XHR9LCBvLmFuaW1hdGUgKTtcblx0XHRcdH1cblx0XHRcdGlmICggb1JhbmdlID09PSBcIm1heFwiICYmIHRoaXMub3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiApIHtcblx0XHRcdFx0dGhpcy5yYW5nZS5zdG9wKCAxLCAxIClbIGFuaW1hdGUgPyBcImFuaW1hdGVcIiA6IFwiY3NzXCIgXSgge1xuXHRcdFx0XHRcdGhlaWdodDogKCAxMDAgLSB2YWxQZXJjZW50ICkgKyBcIiVcIlxuXHRcdFx0XHR9LCBvLmFuaW1hdGUgKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0X2hhbmRsZUV2ZW50czoge1xuXHRcdGtleWRvd246IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdHZhciBhbGxvd2VkLCBjdXJWYWwsIG5ld1ZhbCwgc3RlcCxcblx0XHRcdFx0aW5kZXggPSAkKCBldmVudC50YXJnZXQgKS5kYXRhKCBcInVpLXNsaWRlci1oYW5kbGUtaW5kZXhcIiApO1xuXG5cdFx0XHRzd2l0Y2ggKCBldmVudC5rZXlDb2RlICkge1xuXHRcdFx0XHRjYXNlICQudWkua2V5Q29kZS5IT01FOlxuXHRcdFx0XHRjYXNlICQudWkua2V5Q29kZS5FTkQ6XG5cdFx0XHRcdGNhc2UgJC51aS5rZXlDb2RlLlBBR0VfVVA6XG5cdFx0XHRcdGNhc2UgJC51aS5rZXlDb2RlLlBBR0VfRE9XTjpcblx0XHRcdFx0Y2FzZSAkLnVpLmtleUNvZGUuVVA6XG5cdFx0XHRcdGNhc2UgJC51aS5rZXlDb2RlLlJJR0hUOlxuXHRcdFx0XHRjYXNlICQudWkua2V5Q29kZS5ET1dOOlxuXHRcdFx0XHRjYXNlICQudWkua2V5Q29kZS5MRUZUOlxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0aWYgKCAhdGhpcy5fa2V5U2xpZGluZyApIHtcblx0XHRcdFx0XHRcdHRoaXMuX2tleVNsaWRpbmcgPSB0cnVlO1xuXHRcdFx0XHRcdFx0dGhpcy5fYWRkQ2xhc3MoICQoIGV2ZW50LnRhcmdldCApLCBudWxsLCBcInVpLXN0YXRlLWFjdGl2ZVwiICk7XG5cdFx0XHRcdFx0XHRhbGxvd2VkID0gdGhpcy5fc3RhcnQoIGV2ZW50LCBpbmRleCApO1xuXHRcdFx0XHRcdFx0aWYgKCBhbGxvd2VkID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0c3RlcCA9IHRoaXMub3B0aW9ucy5zdGVwO1xuXHRcdFx0aWYgKCB0aGlzLl9oYXNNdWx0aXBsZVZhbHVlcygpICkge1xuXHRcdFx0XHRjdXJWYWwgPSBuZXdWYWwgPSB0aGlzLnZhbHVlcyggaW5kZXggKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN1clZhbCA9IG5ld1ZhbCA9IHRoaXMudmFsdWUoKTtcblx0XHRcdH1cblxuXHRcdFx0c3dpdGNoICggZXZlbnQua2V5Q29kZSApIHtcblx0XHRcdFx0Y2FzZSAkLnVpLmtleUNvZGUuSE9NRTpcblx0XHRcdFx0XHRuZXdWYWwgPSB0aGlzLl92YWx1ZU1pbigpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICQudWkua2V5Q29kZS5FTkQ6XG5cdFx0XHRcdFx0bmV3VmFsID0gdGhpcy5fdmFsdWVNYXgoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAkLnVpLmtleUNvZGUuUEFHRV9VUDpcblx0XHRcdFx0XHRuZXdWYWwgPSB0aGlzLl90cmltQWxpZ25WYWx1ZShcblx0XHRcdFx0XHRcdGN1clZhbCArICggKCB0aGlzLl92YWx1ZU1heCgpIC0gdGhpcy5fdmFsdWVNaW4oKSApIC8gdGhpcy5udW1QYWdlcyApXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAkLnVpLmtleUNvZGUuUEFHRV9ET1dOOlxuXHRcdFx0XHRcdG5ld1ZhbCA9IHRoaXMuX3RyaW1BbGlnblZhbHVlKFxuXHRcdFx0XHRcdFx0Y3VyVmFsIC0gKCAoIHRoaXMuX3ZhbHVlTWF4KCkgLSB0aGlzLl92YWx1ZU1pbigpICkgLyB0aGlzLm51bVBhZ2VzICkgKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAkLnVpLmtleUNvZGUuVVA6XG5cdFx0XHRcdGNhc2UgJC51aS5rZXlDb2RlLlJJR0hUOlxuXHRcdFx0XHRcdGlmICggY3VyVmFsID09PSB0aGlzLl92YWx1ZU1heCgpICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRuZXdWYWwgPSB0aGlzLl90cmltQWxpZ25WYWx1ZSggY3VyVmFsICsgc3RlcCApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICQudWkua2V5Q29kZS5ET1dOOlxuXHRcdFx0XHRjYXNlICQudWkua2V5Q29kZS5MRUZUOlxuXHRcdFx0XHRcdGlmICggY3VyVmFsID09PSB0aGlzLl92YWx1ZU1pbigpICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRuZXdWYWwgPSB0aGlzLl90cmltQWxpZ25WYWx1ZSggY3VyVmFsIC0gc3RlcCApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9zbGlkZSggZXZlbnQsIGluZGV4LCBuZXdWYWwgKTtcblx0XHR9LFxuXHRcdGtleXVwOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHR2YXIgaW5kZXggPSAkKCBldmVudC50YXJnZXQgKS5kYXRhKCBcInVpLXNsaWRlci1oYW5kbGUtaW5kZXhcIiApO1xuXG5cdFx0XHRpZiAoIHRoaXMuX2tleVNsaWRpbmcgKSB7XG5cdFx0XHRcdHRoaXMuX2tleVNsaWRpbmcgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5fc3RvcCggZXZlbnQsIGluZGV4ICk7XG5cdFx0XHRcdHRoaXMuX2NoYW5nZSggZXZlbnQsIGluZGV4ICk7XG5cdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKCAkKCBldmVudC50YXJnZXQgKSwgbnVsbCwgXCJ1aS1zdGF0ZS1hY3RpdmVcIiApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSApO1xuXG59ICkgKTtcbiIsIiggZnVuY3Rpb24oIGZhY3RvcnkgKSB7XG5cdGlmICggdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQgKSB7XG5cblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKCBbIFwianF1ZXJ5XCIgXSwgZmFjdG9yeSApO1xuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gQnJvd3NlciBnbG9iYWxzXG5cdFx0ZmFjdG9yeSggalF1ZXJ5ICk7XG5cdH1cbn0gKCBmdW5jdGlvbiggJCApIHtcblxuJC51aSA9ICQudWkgfHwge307XG5cbnJldHVybiAkLnVpLnZlcnNpb24gPSBcIjEuMTIuMVwiO1xuXG59ICkgKTtcbiIsIi8vIENvcHlyaWdodCAoYykgSnVweXRlciBEZXZlbG9wbWVudCBUZWFtLlxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNb2RpZmllZCBCU0QgTGljZW5zZS5cbmV4cG9ydCB7IHV1aWQsIFdyYXBwZWRFcnJvciwgcmVzb2x2ZVByb21pc2VzRGljdCB9IGZyb20gJ0BqdXB5dGVyLXdpZGdldHMvYmFzZSc7XG5pbXBvcnQgeyBXcmFwcGVkRXJyb3IgfSBmcm9tICdAanVweXRlci13aWRnZXRzL2Jhc2UnO1xuLyoqXG4gKiBDcmVhdGVzIGEgd3JhcHBhYmxlIFByb21pc2UgcmVqZWN0aW9uIGZ1bmN0aW9uLlxuICpcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlLnJlamVjdCB3aXRoIGEgbmV3IFdyYXBwZWRFcnJvclxuICogdGhhdCBoYXMgdGhlIHByb3ZpZGVkIG1lc3NhZ2UgYW5kIHdyYXBzIHRoZSBvcmlnaW5hbCBlcnJvciB0aGF0XG4gKiBjYXVzZWQgdGhlIHByb21pc2UgdG8gcmVqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVqZWN0KG1lc3NhZ2UsIGxvZykge1xuICAgIHJldHVybiBmdW5jdGlvbiBwcm9taXNlUmVqZWN0aW9uKGVycm9yKSB7XG4gICAgICAgIHZhciB3cmFwcGVkX2Vycm9yID0gbmV3IFdyYXBwZWRFcnJvcihtZXNzYWdlLCBlcnJvcik7XG4gICAgICAgIGlmIChsb2cpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3Iod3JhcHBlZF9lcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHdyYXBwZWRfZXJyb3IpO1xuICAgIH07XG59XG4vKipcbiAqIEFwcGx5IE1hdGhKYXggcmVuZGVyaW5nIHRvIGFuIGVsZW1lbnQsIGFuZCBvcHRpb25hbGx5IHNldCBpdHMgdGV4dC5cbiAqXG4gKiBJZiBNYXRoSmF4IGlzIG5vdCBhdmFpbGFibGUsIG1ha2Ugbm8gY2hhbmdlcy5cbiAqXG4gKiBQYXJhbWV0ZXJzXG4gKiAtLS0tLS0tLS0tXG4gKiBlbGVtZW50OiBOb2RlXG4gKiB0ZXh0OiBvcHRpb25hbCBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHR5cGVzZXQoZWxlbWVudCwgdGV4dCkge1xuICAgIGlmICh0ZXh0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgfVxuICAgIGlmICh3aW5kb3cuTWF0aEpheCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIE1hdGhKYXguSHViLlF1ZXVlKFsnVHlwZXNldCcsIE1hdGhKYXguSHViLCBlbGVtZW50XSk7XG4gICAgfVxufVxuLyoqXG4gKiBlc2NhcGUgdGV4dCB0byBIVE1MXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVfaHRtbCh0ZXh0KSB7XG4gICAgdmFyIGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVzYy50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIGVzYy5pbm5lckhUTUw7XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEp1cHl0ZXIgRGV2ZWxvcG1lbnQgVGVhbS5cbi8vIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTW9kaWZpZWQgQlNEIExpY2Vuc2UuXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBDb3JlRGVzY3JpcHRpb25Nb2RlbCB9IGZyb20gJy4vd2lkZ2V0X2NvcmUnO1xuaW1wb3J0IHsgRGVzY3JpcHRpb25WaWV3LCBEZXNjcmlwdGlvblN0eWxlTW9kZWwgfSBmcm9tICcuL3dpZGdldF9kZXNjcmlwdGlvbic7XG5pbXBvcnQgeyBET01XaWRnZXRWaWV3IH0gZnJvbSAnQGp1cHl0ZXItd2lkZ2V0cy9iYXNlJztcbmltcG9ydCB7IHV1aWQgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2QzLWZvcm1hdCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAnanF1ZXJ5LXVpL3VpL3dpZGdldHMvc2xpZGVyJztcbnZhciBJbnRNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSW50TW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSW50TW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgSW50TW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0ludE1vZGVsJyxcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBJbnRNb2RlbDtcbn0oQ29yZURlc2NyaXB0aW9uTW9kZWwpKTtcbmV4cG9ydCB7IEludE1vZGVsIH07XG52YXIgQm91bmRlZEludE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCb3VuZGVkSW50TW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQm91bmRlZEludE1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEJvdW5kZWRJbnRNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnQm91bmRlZEludE1vZGVsJyxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgICAgbWluOiAwXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEJvdW5kZWRJbnRNb2RlbDtcbn0oSW50TW9kZWwpKTtcbmV4cG9ydCB7IEJvdW5kZWRJbnRNb2RlbCB9O1xudmFyIFNsaWRlclN0eWxlTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNsaWRlclN0eWxlTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2xpZGVyU3R5bGVNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBTbGlkZXJTdHlsZU1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKHt9LCBfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHsgX21vZGVsX25hbWU6ICdTbGlkZXJTdHlsZU1vZGVsJyB9KTtcbiAgICB9O1xuICAgIFNsaWRlclN0eWxlTW9kZWwuc3R5bGVQcm9wZXJ0aWVzID0gX19hc3NpZ24oe30sIERlc2NyaXB0aW9uU3R5bGVNb2RlbC5zdHlsZVByb3BlcnRpZXMsIHsgaGFuZGxlX2NvbG9yOiB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJy51aS1zbGlkZXItaGFuZGxlJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogJ2JhY2tncm91bmQtY29sb3InLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9IH0pO1xuICAgIHJldHVybiBTbGlkZXJTdHlsZU1vZGVsO1xufShEZXNjcmlwdGlvblN0eWxlTW9kZWwpKTtcbmV4cG9ydCB7IFNsaWRlclN0eWxlTW9kZWwgfTtcbnZhciBJbnRTbGlkZXJNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSW50U2xpZGVyTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSW50U2xpZGVyTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgSW50U2xpZGVyTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0ludFNsaWRlck1vZGVsJyxcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdJbnRTbGlkZXJWaWV3JyxcbiAgICAgICAgICAgIHN0ZXA6IDEsXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgICAgICAgcmVhZG91dDogdHJ1ZSxcbiAgICAgICAgICAgIHJlYWRvdXRfZm9ybWF0OiAnZCcsXG4gICAgICAgICAgICBjb250aW51b3VzX3VwZGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHN0eWxlOiBudWxsLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEludFNsaWRlck1vZGVsLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKGF0dHJpYnV0ZXMsIG9wdGlvbnMpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcywgYXR0cmlidXRlcywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMub24oJ2NoYW5nZTpyZWFkb3V0X2Zvcm1hdCcsIHRoaXMudXBkYXRlX3JlYWRvdXRfZm9ybWF0LCB0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVfcmVhZG91dF9mb3JtYXQoKTtcbiAgICB9O1xuICAgIEludFNsaWRlck1vZGVsLnByb3RvdHlwZS51cGRhdGVfcmVhZG91dF9mb3JtYXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVhZG91dF9mb3JtYXR0ZXIgPSBmb3JtYXQodGhpcy5nZXQoJ3JlYWRvdXRfZm9ybWF0JykpO1xuICAgIH07XG4gICAgcmV0dXJuIEludFNsaWRlck1vZGVsO1xufShCb3VuZGVkSW50TW9kZWwpKTtcbmV4cG9ydCB7IEludFNsaWRlck1vZGVsIH07XG52YXIgSW50UmFuZ2VTbGlkZXJNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSW50UmFuZ2VTbGlkZXJNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBJbnRSYW5nZVNsaWRlck1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBJbnRSYW5nZVNsaWRlck1vZGVsO1xufShJbnRTbGlkZXJNb2RlbCkpO1xuZXhwb3J0IHsgSW50UmFuZ2VTbGlkZXJNb2RlbCB9O1xudmFyIEJhc2VJbnRTbGlkZXJWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCYXNlSW50U2xpZGVyVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCYXNlSW50U2xpZGVyVmlldygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9wYXJzZV92YWx1ZSA9IHBhcnNlSW50O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEJhc2VJbnRTbGlkZXJWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnanVweXRlci13aWRnZXRzJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LXNsaWRlcicpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1oc2xpZGVyJyk7XG4gICAgICAgICh0aGlzLiRzbGlkZXIgPSAkKCc8ZGl2IC8+JykpXG4gICAgICAgICAgICAuc2xpZGVyKHtcbiAgICAgICAgICAgIHNsaWRlOiB0aGlzLmhhbmRsZVNsaWRlckNoYW5nZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgc3RvcDogdGhpcy5oYW5kbGVTbGlkZXJDaGFuZ2VkLmJpbmQodGhpcylcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpZGVyJyk7XG4gICAgICAgIC8vIFB1dCB0aGUgc2xpZGVyIGluIGEgY29udGFpbmVyXG4gICAgICAgIHRoaXMuc2xpZGVyX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLnNsaWRlcl9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2xpZGVyLWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLnNsaWRlcl9jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kc2xpZGVyWzBdKTtcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLnNsaWRlcl9jb250YWluZXIpO1xuICAgICAgICB0aGlzLnJlYWRvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLnJlYWRvdXQpO1xuICAgICAgICB0aGlzLnJlYWRvdXQuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LXJlYWRvdXQnKTtcbiAgICAgICAgdGhpcy5yZWFkb3V0LmNvbnRlbnRFZGl0YWJsZSA9ICd0cnVlJztcbiAgICAgICAgdGhpcy5yZWFkb3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9O1xuICAgIEJhc2VJbnRTbGlkZXJWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAvKipcbiAgICAgICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcbiAgICAgICAgICpcbiAgICAgICAgICogQ2FsbGVkIHdoZW4gdGhlIG1vZGVsIGlzIGNoYW5nZWQuICBUaGUgbW9kZWwgbWF5IGhhdmUgYmVlblxuICAgICAgICAgKiBjaGFuZ2VkIGJ5IGFub3RoZXIgdmlldyBvciBieSBhIHN0YXRlIHVwZGF0ZSBmcm9tIHRoZSBiYWNrLWVuZC5cbiAgICAgICAgICovXG4gICAgICAgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy51cGRhdGVkX3ZpZXcgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIC8vIEpRdWVyeSBzbGlkZXIgb3B0aW9uIGtleXMuICBUaGVzZSBrZXlzIGhhcHBlbiB0byBoYXZlIGFcbiAgICAgICAgICAgIC8vIG9uZS10by1vbmUgbWFwcGluZyB3aXRoIHRoZSBjb3JyZXNwb25kaW5nIGtleXMgb2YgdGhlIG1vZGVsLlxuICAgICAgICAgICAgdmFyIGpxdWVyeV9zbGlkZXJfa2V5cyA9IFsnc3RlcCcsICdkaXNhYmxlZCddO1xuICAgICAgICAgICAgdmFyIHRoYXRfMSA9IHRoaXM7XG4gICAgICAgICAgICB0aGF0XzEuJHNsaWRlci5zbGlkZXIoe30pO1xuICAgICAgICAgICAganF1ZXJ5X3NsaWRlcl9rZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIHZhciBtb2RlbF92YWx1ZSA9IHRoYXRfMS5tb2RlbC5nZXQoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAobW9kZWxfdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGF0XzEuJHNsaWRlci5zbGlkZXIoJ29wdGlvbicsIGtleSwgbW9kZWxfdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMubW9kZWwuZ2V0KCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkb3V0LmNvbnRlbnRFZGl0YWJsZSA9ICdmYWxzZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRvdXQuY29udGVudEVkaXRhYmxlID0gJ3RydWUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG1heCA9IHRoaXMubW9kZWwuZ2V0KCdtYXgnKTtcbiAgICAgICAgICAgIHZhciBtaW4gPSB0aGlzLm1vZGVsLmdldCgnbWluJyk7XG4gICAgICAgICAgICBpZiAobWluIDw9IG1heCkge1xuICAgICAgICAgICAgICAgIGlmIChtYXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzbGlkZXIuc2xpZGVyKCdvcHRpb24nLCAnbWF4JywgbWF4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1pbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNsaWRlci5zbGlkZXIoJ29wdGlvbicsICdtaW4nLCBtaW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFdPUktBUk9VTkQgRk9SIEpRVUVSWSBTTElERVIgQlVHLlxuICAgICAgICAgICAgLy8gVGhlIGhvcml6b250YWwgcG9zaXRpb24gb2YgdGhlIHNsaWRlciBoYW5kbGVcbiAgICAgICAgICAgIC8vIGRlcGVuZHMgb24gdGhlIHZhbHVlIG9mIHRoZSBzbGlkZXIgYXQgdGhlIHRpbWVcbiAgICAgICAgICAgIC8vIG9mIG9yaWVudGF0aW9uIGNoYW5nZS4gIEJlZm9yZSBhcHBseWluZyB0aGUgbmV3XG4gICAgICAgICAgICAvLyB3b3JrYXJvdW5kLCB3ZSBzZXQgdGhlIHZhbHVlIHRvIHRoZSBtaW5pbXVtIHRvXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCB0aGUgaG9yaXpvbnRhbCBwbGFjZW1lbnQgb2YgdGhlXG4gICAgICAgICAgICAvLyBoYW5kbGUgaW4gdGhlIHZlcnRpY2FsIHNsaWRlciBpcyBhbHdheXNcbiAgICAgICAgICAgIC8vIGNvbnNpc3RlbnQuXG4gICAgICAgICAgICB2YXIgb3JpZW50YXRpb25fMSA9IHRoaXMubW9kZWwuZ2V0KCdvcmllbnRhdGlvbicpO1xuICAgICAgICAgICAgdGhpcy4kc2xpZGVyLnNsaWRlcignb3B0aW9uJywgJ29yaWVudGF0aW9uJywgb3JpZW50YXRpb25fMSk7XG4gICAgICAgICAgICAvLyBVc2UgdGhlIHJpZ2h0IENTUyBjbGFzc2VzIGZvciB2ZXJ0aWNhbCAmIGhvcml6b250YWwgc2xpZGVyc1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uXzEgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3dpZGdldC1oc2xpZGVyJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtdnNsaWRlcicpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtaW5saW5lLXZib3gnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnd2lkZ2V0LXZzbGlkZXInKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1oc2xpZGVyJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd3aWRnZXQtaW5saW5lLXZib3gnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1pbmxpbmUtaGJveCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlYWRvdXQgPSB0aGlzLm1vZGVsLmdldCgncmVhZG91dCcpO1xuICAgICAgICAgICAgaWYgKHJlYWRvdXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRvdXQuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheWVkLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhhdF8xLnJlYWRvdXRfb3ZlcmZsb3coKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdF8xLnJlYWRvdXQuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXRfMS5yZWFkb3V0LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZG91dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSByZWFkb3V0IGJveCBjb250ZW50IG92ZXJmbG93cy5cbiAgICAgKi9cbiAgICBCYXNlSW50U2xpZGVyVmlldy5wcm90b3R5cGUucmVhZG91dF9vdmVyZmxvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZG91dC5zY3JvbGxXaWR0aCA+IHRoaXMucmVhZG91dC5jbGllbnRXaWR0aDtcbiAgICB9O1xuICAgIEJhc2VJbnRTbGlkZXJWaWV3LnByb3RvdHlwZS5ldmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBEaWN0aW9uYXJ5IG9mIGV2ZW50cyBhbmQgdGhlaXIgaGFuZGxlcnMuXG4gICAgICAgICAgICAnc2xpZGUnOiAnaGFuZGxlU2xpZGVyQ2hhbmdlJyxcbiAgICAgICAgICAgICdzbGlkZXN0b3AnOiAnaGFuZGxlU2xpZGVyQ2hhbmdlZCcsXG4gICAgICAgICAgICAnYmx1ciBbY29udGVudEVkaXRhYmxlPXRydWVdJzogJ2hhbmRsZVRleHRDaGFuZ2UnLFxuICAgICAgICAgICAgJ2tleWRvd24gW2NvbnRlbnRFZGl0YWJsZT10cnVlXSc6ICdoYW5kbGVLZXlEb3duJ1xuICAgICAgICB9O1xuICAgIH07XG4gICAgQmFzZUludFNsaWRlclZpZXcucHJvdG90eXBlLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykgeyAvKiBrZXlib2FyZCBrZXljb2RlcyBgZW50ZXJgICovXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRleHRDaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgdGhlIHZhbHVlIG9mIHRoZSBzbGlkZXIgYmVmb3JlIHNlbmRpbmcgaXQgdG8gdGhlIGJhY2stZW5kXG4gICAgICogYW5kIGFwcGx5aW5nIGl0IHRvIHRoZSBvdGhlciB2aWV3cyBvbiB0aGUgcGFnZS5cbiAgICAgKi9cbiAgICBCYXNlSW50U2xpZGVyVmlldy5wcm90b3R5cGUuX3ZhbGlkYXRlX3NsaWRlX3ZhbHVlID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoeCk7XG4gICAgfTtcbiAgICByZXR1cm4gQmFzZUludFNsaWRlclZpZXc7XG59KERlc2NyaXB0aW9uVmlldykpO1xuZXhwb3J0IHsgQmFzZUludFNsaWRlclZpZXcgfTtcbnZhciBJbnRSYW5nZVNsaWRlclZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEludFJhbmdlU2xpZGVyVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBJbnRSYW5nZVNsaWRlclZpZXcoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICAvLyByYW5nZSBudW1iZXJzIGNhbiBiZSBzZXBhcmF0ZWQgYnkgYSBoeXBoZW4sIGNvbG9uLCBvciBhbiBlbi1kYXNoXG4gICAgICAgIF90aGlzLl9yYW5nZV9yZWdleCA9IC9eXFxzKihbKy1dP1xcZCspXFxzKlstOuKAk11cXHMqKFsrLV0/XFxkKykvO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEludFJhbmdlU2xpZGVyVmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy4kc2xpZGVyLnNsaWRlcignb3B0aW9uJywgJ3JhbmdlJywgdHJ1ZSk7XG4gICAgICAgIC8vIHZhbHVlcyBmb3IgdGhlIHJhbmdlIGNhc2UgYXJlIHZhbGlkYXRlZCBweXRob24tc2lkZSBpblxuICAgICAgICAvLyBfQm91bmRlZHtJbnQsRmxvYXR9UmFuZ2VXaWRnZXQuX3ZhbGlkYXRlXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpO1xuICAgICAgICB0aGlzLiRzbGlkZXIuc2xpZGVyKCdvcHRpb24nLCAndmFsdWVzJywgdmFsdWUuc2xpY2UoKSk7XG4gICAgICAgIHRoaXMucmVhZG91dC50ZXh0Q29udGVudCA9IHRoaXMudmFsdWVUb1N0cmluZyh2YWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgndmFsdWUnKSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuc2V0KCd2YWx1ZScsIHZhbHVlLCB7IHVwZGF0ZWRfdmlldzogdGhpcyB9KTtcbiAgICAgICAgICAgIHRoaXMudG91Y2goKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogV3JpdGUgdmFsdWUgdG8gYSBzdHJpbmdcbiAgICAgKi9cbiAgICBJbnRSYW5nZVNsaWRlclZpZXcucHJvdG90eXBlLnZhbHVlVG9TdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGZvcm1hdCA9IHRoaXMubW9kZWwucmVhZG91dF9mb3JtYXR0ZXI7XG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXQodik7XG4gICAgICAgIH0pLmpvaW4oJyDigJMgJyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQYXJzZSB2YWx1ZSBmcm9tIGEgc3RyaW5nXG4gICAgICovXG4gICAgSW50UmFuZ2VTbGlkZXJWaWV3LnByb3RvdHlwZS5zdHJpbmdUb1ZhbHVlID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgLy8gcmFuZ2VzIGNhbiBiZSBleHByZXNzZWQgZWl0aGVyICd2YWwtdmFsJyBvciAndmFsOnZhbCcgKCtzcGFjZXMpXG4gICAgICAgIHZhciBtYXRjaCA9IHRoaXMuX3JhbmdlX3JlZ2V4LmV4ZWModGV4dCk7XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIFt0aGlzLl9wYXJzZV92YWx1ZShtYXRjaFsxXSksIHRoaXMuX3BhcnNlX3ZhbHVlKG1hdGNoWzJdKV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogdGhpcyBoYW5kbGVzIHRoZSBlbnRyeSBvZiB0ZXh0IGludG8gdGhlIGNvbnRlbnRFZGl0YWJsZSBsYWJlbCBmaXJzdCwgdGhlXG4gICAgICogdmFsdWUgaXMgY2hlY2tlZCBpZiBpdCBjb250YWlucyBhIHBhcnNlYWJsZSB2YWx1ZSB0aGVuIGl0IGlzIGNsYW1wZWRcbiAgICAgKiB3aXRoaW4gdGhlIG1pbi1tYXggcmFuZ2Ugb2YgdGhlIHNsaWRlciBmaW5hbGx5LCB0aGUgbW9kZWwgaXMgdXBkYXRlZCBpZlxuICAgICAqIHRoZSB2YWx1ZSBpcyB0byBiZSBjaGFuZ2VkXG4gICAgICpcbiAgICAgKiBpZiBhbnkgb2YgdGhlc2UgY29uZGl0aW9ucyBhcmUgbm90IG1ldCwgdGhlIHRleHQgaXMgcmVzZXRcbiAgICAgKi9cbiAgICBJbnRSYW5nZVNsaWRlclZpZXcucHJvdG90eXBlLmhhbmRsZVRleHRDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuc3RyaW5nVG9WYWx1ZSh0aGlzLnJlYWRvdXQudGV4dENvbnRlbnQpO1xuICAgICAgICB2YXIgdm1pbiA9IHRoaXMubW9kZWwuZ2V0KCdtaW4nKTtcbiAgICAgICAgdmFyIHZtYXggPSB0aGlzLm1vZGVsLmdldCgnbWF4Jyk7XG4gICAgICAgIC8vIHJlamVjdCBpbnB1dCB3aGVyZSBOYU4gb3IgbG93ZXIgPiB1cHBlclxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHxcbiAgICAgICAgICAgIGlzTmFOKHZhbHVlWzBdKSB8fFxuICAgICAgICAgICAgaXNOYU4odmFsdWVbMV0pIHx8XG4gICAgICAgICAgICAodmFsdWVbMF0gPiB2YWx1ZVsxXSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZG91dC50ZXh0Q29udGVudCA9IHRoaXMudmFsdWVUb1N0cmluZyh0aGlzLm1vZGVsLmdldCgndmFsdWUnKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBjbGFtcCB0byByYW5nZVxuICAgICAgICAgICAgdmFsdWUgPSBbTWF0aC5tYXgoTWF0aC5taW4odmFsdWVbMF0sIHZtYXgpLCB2bWluKSxcbiAgICAgICAgICAgICAgICBNYXRoLm1heChNYXRoLm1pbih2YWx1ZVsxXSwgdm1heCksIHZtaW4pXTtcbiAgICAgICAgICAgIGlmICgodmFsdWVbMF0gIT09IHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpWzBdKSB8fFxuICAgICAgICAgICAgICAgICh2YWx1ZVsxXSAhPT0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJylbMV0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkb3V0LnRleHRDb250ZW50ID0gdGhpcy52YWx1ZVRvU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLnNldCgndmFsdWUnLCB2YWx1ZSwgeyB1cGRhdGVkX3ZpZXc6IHRoaXMgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkb3V0LnRleHRDb250ZW50ID0gdGhpcy52YWx1ZVRvU3RyaW5nKHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIHNsaWRlciB2YWx1ZSBpcyBjaGFuZ2luZy5cbiAgICAgKi9cbiAgICBJbnRSYW5nZVNsaWRlclZpZXcucHJvdG90eXBlLmhhbmRsZVNsaWRlckNoYW5nZSA9IGZ1bmN0aW9uIChlLCB1aSkge1xuICAgICAgICB2YXIgYWN0dWFsX3ZhbHVlID0gdWkudmFsdWVzLm1hcCh0aGlzLl92YWxpZGF0ZV9zbGlkZV92YWx1ZSk7XG4gICAgICAgIHRoaXMucmVhZG91dC50ZXh0Q29udGVudCA9IHRoaXMudmFsdWVUb1N0cmluZyhhY3R1YWxfdmFsdWUpO1xuICAgICAgICAvLyBPbmx5IHBlcnNpc3QgdGhlIHZhbHVlIHdoaWxlIHNsaWRpbmcgaWYgdGhlIGNvbnRpbnVvdXNfdXBkYXRlXG4gICAgICAgIC8vIHRyYWl0IGlzIHNldCB0byB0cnVlLlxuICAgICAgICBpZiAodGhpcy5tb2RlbC5nZXQoJ2NvbnRpbnVvdXNfdXBkYXRlJykpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU2xpZGVyQ2hhbmdlZChlLCB1aSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBzbGlkZXIgdmFsdWUgaGFzIGNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBDYWxsaW5nIG1vZGVsLnNldCB3aWxsIHRyaWdnZXIgYWxsIG9mIHRoZSBvdGhlciB2aWV3cyBvZiB0aGVcbiAgICAgKiBtb2RlbCB0byB1cGRhdGUuXG4gICAgICovXG4gICAgSW50UmFuZ2VTbGlkZXJWaWV3LnByb3RvdHlwZS5oYW5kbGVTbGlkZXJDaGFuZ2VkID0gZnVuY3Rpb24gKGUsIHVpKSB7XG4gICAgICAgIHZhciBhY3R1YWxfdmFsdWUgPSB1aS52YWx1ZXMubWFwKHRoaXMuX3ZhbGlkYXRlX3NsaWRlX3ZhbHVlKTtcbiAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ3ZhbHVlJywgYWN0dWFsX3ZhbHVlLCB7IHVwZGF0ZWRfdmlldzogdGhpcyB9KTtcbiAgICAgICAgdGhpcy50b3VjaCgpO1xuICAgIH07XG4gICAgcmV0dXJuIEludFJhbmdlU2xpZGVyVmlldztcbn0oQmFzZUludFNsaWRlclZpZXcpKTtcbmV4cG9ydCB7IEludFJhbmdlU2xpZGVyVmlldyB9O1xudmFyIEludFNsaWRlclZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEludFNsaWRlclZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSW50U2xpZGVyVmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBJbnRTbGlkZXJWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB2YXIgbWluID0gdGhpcy5tb2RlbC5nZXQoJ21pbicpO1xuICAgICAgICB2YXIgbWF4ID0gdGhpcy5tb2RlbC5nZXQoJ21heCcpO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLm1vZGVsLmdldCgndmFsdWUnKTtcbiAgICAgICAgaWYgKHZhbHVlID4gbWF4KSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG1heDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA8IG1pbikge1xuICAgICAgICAgICAgdmFsdWUgPSBtaW47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kc2xpZGVyLnNsaWRlcignb3B0aW9uJywgJ3ZhbHVlJywgdmFsdWUpO1xuICAgICAgICB0aGlzLnJlYWRvdXQudGV4dENvbnRlbnQgPSB0aGlzLnZhbHVlVG9TdHJpbmcodmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJykgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnNldCgndmFsdWUnLCB2YWx1ZSwgeyB1cGRhdGVkX3ZpZXc6IHRoaXMgfSk7XG4gICAgICAgICAgICB0aGlzLnRvdWNoKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFdyaXRlIHZhbHVlIHRvIGEgc3RyaW5nXG4gICAgICovXG4gICAgSW50U2xpZGVyVmlldy5wcm90b3R5cGUudmFsdWVUb1N0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgZm9ybWF0ID0gdGhpcy5tb2RlbC5yZWFkb3V0X2Zvcm1hdHRlcjtcbiAgICAgICAgcmV0dXJuIGZvcm1hdCh2YWx1ZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQYXJzZSB2YWx1ZSBmcm9tIGEgc3RyaW5nXG4gICAgICovXG4gICAgSW50U2xpZGVyVmlldy5wcm90b3R5cGUuc3RyaW5nVG9WYWx1ZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJzZV92YWx1ZSh0ZXh0KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIHRoaXMgaGFuZGxlcyB0aGUgZW50cnkgb2YgdGV4dCBpbnRvIHRoZSBjb250ZW50RWRpdGFibGUgbGFiZWwgZmlyc3QsIHRoZVxuICAgICAqIHZhbHVlIGlzIGNoZWNrZWQgaWYgaXQgY29udGFpbnMgYSBwYXJzZWFibGUgdmFsdWUgdGhlbiBpdCBpcyBjbGFtcGVkXG4gICAgICogd2l0aGluIHRoZSBtaW4tbWF4IHJhbmdlIG9mIHRoZSBzbGlkZXIgZmluYWxseSwgdGhlIG1vZGVsIGlzIHVwZGF0ZWQgaWZcbiAgICAgKiB0aGUgdmFsdWUgaXMgdG8gYmUgY2hhbmdlZFxuICAgICAqXG4gICAgICogaWYgYW55IG9mIHRoZXNlIGNvbmRpdGlvbnMgYXJlIG5vdCBtZXQsIHRoZSB0ZXh0IGlzIHJlc2V0XG4gICAgICovXG4gICAgSW50U2xpZGVyVmlldy5wcm90b3R5cGUuaGFuZGxlVGV4dENoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5zdHJpbmdUb1ZhbHVlKHRoaXMucmVhZG91dC50ZXh0Q29udGVudCk7XG4gICAgICAgIHZhciB2bWluID0gdGhpcy5tb2RlbC5nZXQoJ21pbicpO1xuICAgICAgICB2YXIgdm1heCA9IHRoaXMubW9kZWwuZ2V0KCdtYXgnKTtcbiAgICAgICAgaWYgKGlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5yZWFkb3V0LnRleHRDb250ZW50ID0gdGhpcy52YWx1ZVRvU3RyaW5nKHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5tYXgoTWF0aC5taW4odmFsdWUsIHZtYXgpLCB2bWluKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRvdXQudGV4dENvbnRlbnQgPSB0aGlzLnZhbHVlVG9TdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuc2V0KCd2YWx1ZScsIHZhbHVlLCB7IHVwZGF0ZWRfdmlldzogdGhpcyB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRvdXQudGV4dENvbnRlbnQgPSB0aGlzLnZhbHVlVG9TdHJpbmcodGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgc2xpZGVyIHZhbHVlIGlzIGNoYW5naW5nLlxuICAgICAqL1xuICAgIEludFNsaWRlclZpZXcucHJvdG90eXBlLmhhbmRsZVNsaWRlckNoYW5nZSA9IGZ1bmN0aW9uIChlLCB1aSkge1xuICAgICAgICB2YXIgYWN0dWFsX3ZhbHVlID0gdGhpcy5fdmFsaWRhdGVfc2xpZGVfdmFsdWUodWkudmFsdWUpO1xuICAgICAgICB0aGlzLnJlYWRvdXQudGV4dENvbnRlbnQgPSB0aGlzLnZhbHVlVG9TdHJpbmcoYWN0dWFsX3ZhbHVlKTtcbiAgICAgICAgLy8gT25seSBwZXJzaXN0IHRoZSB2YWx1ZSB3aGlsZSBzbGlkaW5nIGlmIHRoZSBjb250aW51b3VzX3VwZGF0ZVxuICAgICAgICAvLyB0cmFpdCBpcyBzZXQgdG8gdHJ1ZS5cbiAgICAgICAgaWYgKHRoaXMubW9kZWwuZ2V0KCdjb250aW51b3VzX3VwZGF0ZScpKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNsaWRlckNoYW5nZWQoZSwgdWkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgc2xpZGVyIHZhbHVlIGhhcyBjaGFuZ2VkLlxuICAgICAqXG4gICAgICogQ2FsbGluZyBtb2RlbC5zZXQgd2lsbCB0cmlnZ2VyIGFsbCBvZiB0aGUgb3RoZXIgdmlld3Mgb2YgdGhlXG4gICAgICogbW9kZWwgdG8gdXBkYXRlLlxuICAgICAqL1xuICAgIEludFNsaWRlclZpZXcucHJvdG90eXBlLmhhbmRsZVNsaWRlckNoYW5nZWQgPSBmdW5jdGlvbiAoZSwgdWkpIHtcbiAgICAgICAgdmFyIGFjdHVhbF92YWx1ZSA9IHRoaXMuX3ZhbGlkYXRlX3NsaWRlX3ZhbHVlKHVpLnZhbHVlKTtcbiAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ3ZhbHVlJywgYWN0dWFsX3ZhbHVlLCB7IHVwZGF0ZWRfdmlldzogdGhpcyB9KTtcbiAgICAgICAgdGhpcy50b3VjaCgpO1xuICAgIH07XG4gICAgcmV0dXJuIEludFNsaWRlclZpZXc7XG59KEJhc2VJbnRTbGlkZXJWaWV3KSk7XG5leHBvcnQgeyBJbnRTbGlkZXJWaWV3IH07XG52YXIgSW50VGV4dE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhJbnRUZXh0TW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSW50VGV4dE1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEludFRleHRNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnSW50VGV4dE1vZGVsJyxcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdJbnRUZXh0VmlldycsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBjb250aW51b3VzX3VwZGF0ZTogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEludFRleHRNb2RlbDtcbn0oSW50TW9kZWwpKTtcbmV4cG9ydCB7IEludFRleHRNb2RlbCB9O1xudmFyIEJvdW5kZWRJbnRUZXh0TW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJvdW5kZWRJbnRUZXh0TW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQm91bmRlZEludFRleHRNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBCb3VuZGVkSW50VGV4dE1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdCb3VuZGVkSW50VGV4dE1vZGVsJyxcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdJbnRUZXh0VmlldycsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBjb250aW51b3VzX3VwZGF0ZTogZmFsc2UsXG4gICAgICAgICAgICBzdGVwOiAxLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBCb3VuZGVkSW50VGV4dE1vZGVsO1xufShCb3VuZGVkSW50TW9kZWwpKTtcbmV4cG9ydCB7IEJvdW5kZWRJbnRUZXh0TW9kZWwgfTtcbnZhciBJbnRUZXh0VmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSW50VGV4dFZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSW50VGV4dFZpZXcoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fcGFyc2VfdmFsdWUgPSBwYXJzZUludDtcbiAgICAgICAgX3RoaXMuX2RlZmF1bHRfc3RlcCA9ICcxJztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBJbnRUZXh0Vmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItd2lkZ2V0cycpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1pbmxpbmUtaGJveCcpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC10ZXh0Jyk7XG4gICAgICAgIHRoaXMudGV4dGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRoaXMudGV4dGJveC50eXBlID0gJ251bWJlcic7XG4gICAgICAgIHRoaXMudGV4dGJveC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudGV4dGJveC5pZCA9IHRoaXMubGFiZWwuaHRtbEZvciA9IHV1aWQoKTtcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLnRleHRib3gpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpOyAvLyBTZXQgZGVmYXVsdHMuXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGNvbnRlbnRzIG9mIHRoaXMgdmlld1xuICAgICAqXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIG1vZGVsIGlzIGNoYW5nZWQuICBUaGUgbW9kZWwgbWF5IGhhdmUgYmVlblxuICAgICAqIGNoYW5nZWQgYnkgYW5vdGhlciB2aWV3IG9yIGJ5IGEgc3RhdGUgdXBkYXRlIGZyb20gdGhlIGJhY2stZW5kLlxuICAgICAqL1xuICAgIEludFRleHRWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMudXBkYXRlZF92aWV3ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLm1vZGVsLmdldCgndmFsdWUnKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wYXJzZV92YWx1ZSh0aGlzLnRleHRib3gudmFsdWUpICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dGJveC52YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlbC5nZXQoJ21pbicpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRib3gubWluID0gdGhpcy5tb2RlbC5nZXQoJ21pbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubW9kZWwuZ2V0KCdtYXgnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0Ym94Lm1heCA9IHRoaXMubW9kZWwuZ2V0KCdtYXgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgnc3RlcCcpICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAmJiB0aGlzLm1vZGVsLmdldCgnc3RlcCcpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0Ym94LnN0ZXAgPSB0aGlzLm1vZGVsLmdldCgnc3RlcCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0Ym94LnN0ZXAgPSB0aGlzLl9kZWZhdWx0X3N0ZXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRleHRib3guZGlzYWJsZWQgPSB0aGlzLm1vZGVsLmdldCgnZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIEludFRleHRWaWV3LnByb3RvdHlwZS5ldmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAna2V5ZG93biBpbnB1dCc6ICdoYW5kbGVLZXlEb3duJyxcbiAgICAgICAgICAgICdrZXlwcmVzcyBpbnB1dCc6ICdoYW5kbGVLZXlwcmVzcycsXG4gICAgICAgICAgICAna2V5dXAgaW5wdXQnOiAnaGFuZGxlS2V5VXAnLFxuICAgICAgICAgICAgJ2lucHV0IGlucHV0JzogJ2hhbmRsZUNoYW5naW5nJyxcbiAgICAgICAgICAgICdjaGFuZ2UgaW5wdXQnOiAnaGFuZGxlQ2hhbmdlZCdcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZSBrZXkgZG93blxuICAgICAqXG4gICAgICogU3RvcCBwcm9wYWdhdGlvbiBzbyB0aGUgZXZlbnQgaXNuJ3Qgc2VudCB0byB0aGUgYXBwbGljYXRpb24uXG4gICAgICovXG4gICAgSW50VGV4dFZpZXcucHJvdG90eXBlLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBrZXkgcHJlc3NcbiAgICAgKi9cbiAgICBJbnRUZXh0Vmlldy5wcm90b3R5cGUuaGFuZGxlS2V5cHJlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoL1tlLC5cXHNdLy50ZXN0KFN0cmluZy5mcm9tQ2hhckNvZGUoZS5rZXlDb2RlKSkpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlIGtleSB1cFxuICAgICAqL1xuICAgIEludFRleHRWaWV3LnByb3RvdHlwZS5oYW5kbGVLZXlVcCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLmFsdEtleSB8fCBlLmN0cmxLZXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIC8qIHJlbW92ZSBpbnZhbGlkIGNoYXJhY3RlcnMgKi9cbiAgICAgICAgdmFyIHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1tlLC5cXHNdL2csIFwiXCIpO1xuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICAgIHZhciBzdWJ2YWx1ZSA9IHZhbHVlLnN1YnN0cigxKTtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWVbMF0gKyBzdWJ2YWx1ZS5yZXBsYWNlKC9bKy1dL2csIFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXQudmFsdWUgIT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRhcmdldC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxsIHRoZSBzdWJtaXQgaGFuZGxlciBpZiBjb250aW51b3VzIHVwZGF0ZSBpcyB0cnVlIGFuZCB3ZSBhcmUgbm90XG4gICAgICogb2J2aW91c2x5IGluY29tcGxldGUuXG4gICAgICovXG4gICAgSW50VGV4dFZpZXcucHJvdG90eXBlLmhhbmRsZUNoYW5naW5nID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICB2YXIgdHJpbW1lZCA9IHRhcmdldC52YWx1ZS50cmltKCk7XG4gICAgICAgIGlmICh0cmltbWVkID09PSAnJyB8fCAoWyctJywgJy0uJywgJy4nLCAnKy4nLCAnKyddLmluZGV4T2YodHJpbW1lZCkgPj0gMCkpIHtcbiAgICAgICAgICAgIC8vIGluY29tcGxldGUgbnVtYmVyXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubW9kZWwuZ2V0KCdjb250aW51b3VzX3VwZGF0ZScpKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZWQoZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgdmFsaWRhdGVkIGlucHV0LlxuICAgICAqL1xuICAgIEludFRleHRWaWV3LnByb3RvdHlwZS5oYW5kbGVDaGFuZ2VkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICB2YXIgbnVtZXJpY2FsVmFsdWUgPSB0aGlzLl9wYXJzZV92YWx1ZSh0YXJnZXQudmFsdWUpO1xuICAgICAgICAvLyBJZiBwYXJzZSBmYWlsZWQsIHJlc2V0IHZhbHVlIHRvIHZhbHVlIHN0b3JlZCBpbiBtb2RlbC5cbiAgICAgICAgaWYgKGlzTmFOKG51bWVyaWNhbFZhbHVlKSkge1xuICAgICAgICAgICAgdGFyZ2V0LnZhbHVlID0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgYm90aCB0aGUgdW5ib3VuZGVkIGFuZCBib3VuZGVkIGNhc2UgYnlcbiAgICAgICAgICAgIC8vIGNoZWNraW5nIHRvIHNlZSBpZiB0aGUgbWF4L21pbiBwcm9wZXJ0aWVzIGFyZSBkZWZpbmVkXG4gICAgICAgICAgICB2YXIgYm91bmRlZFZhbHVlID0gbnVtZXJpY2FsVmFsdWU7XG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlbC5nZXQoJ21heCcpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBib3VuZGVkVmFsdWUgPSBNYXRoLm1pbih0aGlzLm1vZGVsLmdldCgnbWF4JyksIGJvdW5kZWRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlbC5nZXQoJ21pbicpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBib3VuZGVkVmFsdWUgPSBNYXRoLm1heCh0aGlzLm1vZGVsLmdldCgnbWluJyksIGJvdW5kZWRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYm91bmRlZFZhbHVlICE9PSBudW1lcmljYWxWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldC52YWx1ZSA9IGJvdW5kZWRWYWx1ZTtcbiAgICAgICAgICAgICAgICBudW1lcmljYWxWYWx1ZSA9IGJvdW5kZWRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFwcGx5IHRoZSB2YWx1ZSBpZiBpdCBoYXMgY2hhbmdlZC5cbiAgICAgICAgICAgIGlmIChudW1lcmljYWxWYWx1ZSAhPT0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLnNldCgndmFsdWUnLCBudW1lcmljYWxWYWx1ZSwgeyB1cGRhdGVkX3ZpZXc6IHRoaXMgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSW50VGV4dFZpZXc7XG59KERlc2NyaXB0aW9uVmlldykpO1xuZXhwb3J0IHsgSW50VGV4dFZpZXcgfTtcbnZhciBQcm9ncmVzc1N0eWxlTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFByb2dyZXNzU3R5bGVNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBQcm9ncmVzc1N0eWxlTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgUHJvZ3Jlc3NTdHlsZU1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKHt9LCBfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHsgX21vZGVsX25hbWU6ICdQcm9ncmVzc1N0eWxlTW9kZWwnIH0pO1xuICAgIH07XG4gICAgUHJvZ3Jlc3NTdHlsZU1vZGVsLnN0eWxlUHJvcGVydGllcyA9IF9fYXNzaWduKHt9LCBEZXNjcmlwdGlvblN0eWxlTW9kZWwuc3R5bGVQcm9wZXJ0aWVzLCB7IGJhcl9jb2xvcjoge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcucHJvZ3Jlc3MtYmFyJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogJ2JhY2tncm91bmQtY29sb3InLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9IH0pO1xuICAgIHJldHVybiBQcm9ncmVzc1N0eWxlTW9kZWw7XG59KERlc2NyaXB0aW9uU3R5bGVNb2RlbCkpO1xuZXhwb3J0IHsgUHJvZ3Jlc3NTdHlsZU1vZGVsIH07XG52YXIgSW50UHJvZ3Jlc3NNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSW50UHJvZ3Jlc3NNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBJbnRQcm9ncmVzc01vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEludFByb2dyZXNzTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0ludFByb2dyZXNzTW9kZWwnLFxuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ1Byb2dyZXNzVmlldycsXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgICAgICAgYmFyX3N0eWxlOiAnJyxcbiAgICAgICAgICAgIHN0eWxlOiBudWxsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEludFByb2dyZXNzTW9kZWw7XG59KEJvdW5kZWRJbnRNb2RlbCkpO1xuZXhwb3J0IHsgSW50UHJvZ3Jlc3NNb2RlbCB9O1xudmFyIFByb2dyZXNzVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUHJvZ3Jlc3NWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFByb2dyZXNzVmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBQcm9ncmVzc1ZpZXcucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAocGFyYW1ldGVycykge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmluaXRpYWxpemUuY2FsbCh0aGlzLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOmJhcl9zdHlsZScsIHRoaXMudXBkYXRlX2Jhcl9zdHlsZSk7XG4gICAgICAgIHRoaXMucFdpZGdldC5hZGRDbGFzcygnanVweXRlci13aWRnZXRzJyk7XG4gICAgfTtcbiAgICBQcm9ncmVzc1ZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdmFyIG9yaWVudGF0aW9uID0gdGhpcy5tb2RlbC5nZXQoJ29yaWVudGF0aW9uJyk7XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID9cbiAgICAgICAgICAgICd3aWRnZXQtaHByb2dyZXNzJyA6ICd3aWRnZXQtdnByb2dyZXNzJztcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzcy5jbGFzc0xpc3QuYWRkKCdwcm9ncmVzcycpO1xuICAgICAgICB0aGlzLnByb2dyZXNzLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLnByb2dyZXNzKTtcbiAgICAgICAgdGhpcy5iYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5iYXIuY2xhc3NMaXN0LmFkZCgncHJvZ3Jlc3MtYmFyJyk7XG4gICAgICAgIHRoaXMuYmFyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgdGhpcy5iYXIuc3R5bGUuYm90dG9tID0gJzBweCc7XG4gICAgICAgIHRoaXMuYmFyLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgdGhpcy5wcm9ncmVzcy5hcHBlbmRDaGlsZCh0aGlzLmJhcik7XG4gICAgICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5zZXRfYmFyX3N0eWxlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGNvbnRlbnRzIG9mIHRoaXMgdmlld1xuICAgICAqXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIG1vZGVsIGlzIGNoYW5nZWQuICBUaGUgbW9kZWwgbWF5IGhhdmUgYmVlblxuICAgICAqIGNoYW5nZWQgYnkgYW5vdGhlciB2aWV3IG9yIGJ5IGEgc3RhdGUgdXBkYXRlIGZyb20gdGhlIGJhY2stZW5kLlxuICAgICAqL1xuICAgIFByb2dyZXNzVmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLm1vZGVsLmdldCgndmFsdWUnKTtcbiAgICAgICAgdmFyIG1heCA9IHRoaXMubW9kZWwuZ2V0KCdtYXgnKTtcbiAgICAgICAgdmFyIG1pbiA9IHRoaXMubW9kZWwuZ2V0KCdtaW4nKTtcbiAgICAgICAgdmFyIG9yaWVudGF0aW9uID0gdGhpcy5tb2RlbC5nZXQoJ29yaWVudGF0aW9uJyk7XG4gICAgICAgIHZhciBwZXJjZW50ID0gMTAwLjAgKiAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbik7XG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3dpZGdldC1pbmxpbmUtdmJveCcpO1xuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd3aWRnZXQtdnByb2dyZXNzJyk7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1pbmxpbmUtaGJveCcpO1xuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtaHByb2dyZXNzJyk7XG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS53aWR0aCA9IHBlcmNlbnQgKyAnJSc7XG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3dpZGdldC1pbmxpbmUtaGJveCcpO1xuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd3aWRnZXQtaHByb2dyZXNzJyk7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1pbmxpbmUtdmJveCcpO1xuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtdnByb2dyZXNzJyk7XG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLmhlaWdodCA9IHBlcmNlbnQgKyAnJSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBQcm9ncmVzc1ZpZXcucHJvdG90eXBlLnVwZGF0ZV9iYXJfc3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlX21hcHBlZF9jbGFzc2VzKFByb2dyZXNzVmlldy5jbGFzc19tYXAsICdiYXJfc3R5bGUnLCB0aGlzLmJhcik7XG4gICAgfTtcbiAgICBQcm9ncmVzc1ZpZXcucHJvdG90eXBlLnNldF9iYXJfc3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2V0X21hcHBlZF9jbGFzc2VzKFByb2dyZXNzVmlldy5jbGFzc19tYXAsICdiYXJfc3R5bGUnLCB0aGlzLmJhcik7XG4gICAgfTtcbiAgICBQcm9ncmVzc1ZpZXcuY2xhc3NfbWFwID0ge1xuICAgICAgICBzdWNjZXNzOiBbJ3Byb2dyZXNzLWJhci1zdWNjZXNzJ10sXG4gICAgICAgIGluZm86IFsncHJvZ3Jlc3MtYmFyLWluZm8nXSxcbiAgICAgICAgd2FybmluZzogWydwcm9ncmVzcy1iYXItd2FybmluZyddLFxuICAgICAgICBkYW5nZXI6IFsncHJvZ3Jlc3MtYmFyLWRhbmdlciddXG4gICAgfTtcbiAgICByZXR1cm4gUHJvZ3Jlc3NWaWV3O1xufShEZXNjcmlwdGlvblZpZXcpKTtcbmV4cG9ydCB7IFByb2dyZXNzVmlldyB9O1xudmFyIFBsYXlNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUGxheU1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFBsYXlNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBQbGF5TW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ1BsYXlNb2RlbCcsXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnUGxheVZpZXcnLFxuICAgICAgICAgICAgX3BsYXlpbmc6IGZhbHNlLFxuICAgICAgICAgICAgX3JlcGVhdDogZmFsc2UsXG4gICAgICAgICAgICBzaG93X3JlcGVhdDogdHJ1ZSxcbiAgICAgICAgICAgIGludGVydmFsOiAxMDAsXG4gICAgICAgICAgICBzdGVwOiAxLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFBsYXlNb2RlbC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChhdHRyaWJ1dGVzLCBvcHRpb25zKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIGF0dHJpYnV0ZXMsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgUGxheU1vZGVsLnByb3RvdHlwZS5sb29wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5nZXQoJ19wbGF5aW5nJykpIHtcbiAgICAgICAgICAgIHZhciBuZXh0X3ZhbHVlID0gdGhpcy5nZXQoJ3ZhbHVlJykgKyB0aGlzLmdldCgnc3RlcCcpO1xuICAgICAgICAgICAgaWYgKG5leHRfdmFsdWUgPD0gdGhpcy5nZXQoJ21heCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgbmV4dF92YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZV9uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXQoJ19yZXBlYXQnKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldCgndmFsdWUnLCB0aGlzLmdldCgnbWluJykpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlX25leHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KCdfcGxheWluZycsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNhdmVfY2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQbGF5TW9kZWwucHJvdG90eXBlLnNjaGVkdWxlX25leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMubG9vcC5iaW5kKHRoaXMpLCB0aGlzLmdldCgnaW50ZXJ2YWwnKSk7XG4gICAgfTtcbiAgICBQbGF5TW9kZWwucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2V0KCdfcGxheWluZycsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgdGhpcy5nZXQoJ21pbicpKTtcbiAgICAgICAgdGhpcy5zYXZlX2NoYW5nZXMoKTtcbiAgICB9O1xuICAgIFBsYXlNb2RlbC5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2V0KCdfcGxheWluZycsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5zYXZlX2NoYW5nZXMoKTtcbiAgICB9O1xuICAgIFBsYXlNb2RlbC5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZXQoJ19wbGF5aW5nJywgdHJ1ZSk7XG4gICAgICAgIGlmICh0aGlzLmdldCgndmFsdWUnKSA9PSB0aGlzLmdldCgnbWF4JykpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBpcyBhdCB0aGUgZW5kLCByZXNldCBpZiBmaXJzdCwgYW5kIHRoZW4gc2NoZWR1bGUgdGhlIG5leHRcbiAgICAgICAgICAgIHRoaXMuc2V0KCd2YWx1ZScsIHRoaXMuZ2V0KCdtaW4nKSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlX25leHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZV9jaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZGlyZWN0bHkgc3RhcnQgd2l0aCB0aGUgbmV4dCB2YWx1ZVxuICAgICAgICAgICAgLy8gbG9vcCB3aWxsIGNhbGwgc2F2ZV9jaGFuZ2VzIGluIHRoaXMgY2FzZVxuICAgICAgICAgICAgdGhpcy5sb29wKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFBsYXlNb2RlbC5wcm90b3R5cGUucmVwZWF0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNldCgnX3JlcGVhdCcsICF0aGlzLmdldCgnX3JlcGVhdCcpKTtcbiAgICAgICAgdGhpcy5zYXZlX2NoYW5nZXMoKTtcbiAgICB9O1xuICAgIHJldHVybiBQbGF5TW9kZWw7XG59KEJvdW5kZWRJbnRNb2RlbCkpO1xuZXhwb3J0IHsgUGxheU1vZGVsIH07XG52YXIgUGxheVZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFBsYXlWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFBsYXlWaWV3KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFBsYXlWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnanVweXRlci13aWRnZXRzJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LXBsYXknKTtcbiAgICAgICAgdGhpcy5wbGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRoaXMucGF1c2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGhpcy5zdG9wQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRoaXMucmVwZWF0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRoaXMucGxheUJ1dHRvbi5jbGFzc05hbWUgPSAnanVweXRlci1idXR0b24nO1xuICAgICAgICB0aGlzLnBhdXNlQnV0dG9uLmNsYXNzTmFtZSA9ICdqdXB5dGVyLWJ1dHRvbic7XG4gICAgICAgIHRoaXMuc3RvcEJ1dHRvbi5jbGFzc05hbWUgPSAnanVweXRlci1idXR0b24nO1xuICAgICAgICB0aGlzLnJlcGVhdEJ1dHRvbi5jbGFzc05hbWUgPSAnanVweXRlci1idXR0b24nO1xuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMucGxheUJ1dHRvbik7IC8vIFRvZ2dsZSBidXR0b24gd2l0aCBwbGF5aW5nXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5wYXVzZUJ1dHRvbik7IC8vIERpc2FibGUgaWYgbm90IHBsYXlpbmdcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLnN0b3BCdXR0b24pOyAvLyBEaXNhYmxlIGlmIG5vdCBwbGF5aW5nXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5yZXBlYXRCdXR0b24pOyAvLyBBbHdheXMgZW5hYmxlZCwgYnV0IG1heSBiZSBoaWRkZW5cbiAgICAgICAgdmFyIHBsYXlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICBwbGF5SWNvbi5jbGFzc05hbWUgPSAnZmEgZmEtcGxheSc7XG4gICAgICAgIHRoaXMucGxheUJ1dHRvbi5hcHBlbmRDaGlsZChwbGF5SWNvbik7XG4gICAgICAgIHZhciBwYXVzZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIHBhdXNlSWNvbi5jbGFzc05hbWUgPSAnZmEgZmEtcGF1c2UnO1xuICAgICAgICB0aGlzLnBhdXNlQnV0dG9uLmFwcGVuZENoaWxkKHBhdXNlSWNvbik7XG4gICAgICAgIHZhciBzdG9wSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgc3RvcEljb24uY2xhc3NOYW1lID0gJ2ZhIGZhLXN0b3AnO1xuICAgICAgICB0aGlzLnN0b3BCdXR0b24uYXBwZW5kQ2hpbGQoc3RvcEljb24pO1xuICAgICAgICB2YXIgcmVwZWF0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgcmVwZWF0SWNvbi5jbGFzc05hbWUgPSAnZmEgZmEtcmV0d2VldCc7XG4gICAgICAgIHRoaXMucmVwZWF0QnV0dG9uLmFwcGVuZENoaWxkKHJlcGVhdEljb24pO1xuICAgICAgICB0aGlzLnBsYXlCdXR0b24ub25jbGljayA9IHRoaXMubW9kZWwucGxheS5iaW5kKHRoaXMubW9kZWwpO1xuICAgICAgICB0aGlzLnBhdXNlQnV0dG9uLm9uY2xpY2sgPSB0aGlzLm1vZGVsLnBhdXNlLmJpbmQodGhpcy5tb2RlbCk7XG4gICAgICAgIHRoaXMuc3RvcEJ1dHRvbi5vbmNsaWNrID0gdGhpcy5tb2RlbC5zdG9wLmJpbmQodGhpcy5tb2RlbCk7XG4gICAgICAgIHRoaXMucmVwZWF0QnV0dG9uLm9uY2xpY2sgPSB0aGlzLm1vZGVsLnJlcGVhdC5iaW5kKHRoaXMubW9kZWwpO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6X3BsYXlpbmcnLCB0aGlzLnVwZGF0ZV9wbGF5aW5nKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOl9yZXBlYXQnLCB0aGlzLnVwZGF0ZV9yZXBlYXQpO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6c2hvd19yZXBlYXQnLCB0aGlzLnVwZGF0ZV9yZXBlYXQpO1xuICAgICAgICB0aGlzLnVwZGF0ZV9wbGF5aW5nKCk7XG4gICAgICAgIHRoaXMudXBkYXRlX3JlcGVhdCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH07XG4gICAgUGxheVZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRpc2FibGVkID0gdGhpcy5tb2RlbC5nZXQoJ2Rpc2FibGVkJyk7XG4gICAgICAgIHRoaXMucGxheUJ1dHRvbi5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgICAgICB0aGlzLnBhdXNlQnV0dG9uLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICAgIHRoaXMuc3RvcEJ1dHRvbi5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgICAgICB0aGlzLnJlcGVhdEJ1dHRvbi5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgICAgICB0aGlzLnVwZGF0ZV9wbGF5aW5nKCk7XG4gICAgfTtcbiAgICBQbGF5Vmlldy5wcm90b3R5cGUudXBkYXRlX3BsYXlpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwbGF5aW5nID0gdGhpcy5tb2RlbC5nZXQoJ19wbGF5aW5nJyk7XG4gICAgICAgIHZhciBkaXNhYmxlZCA9IHRoaXMubW9kZWwuZ2V0KCdkaXNhYmxlZCcpO1xuICAgICAgICBpZiAocGxheWluZykge1xuICAgICAgICAgICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGxheUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtb2QtYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBsYXlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbW9kLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQbGF5Vmlldy5wcm90b3R5cGUudXBkYXRlX3JlcGVhdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlcGVhdCA9IHRoaXMubW9kZWwuZ2V0KCdfcmVwZWF0Jyk7XG4gICAgICAgIHRoaXMucmVwZWF0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSB0aGlzLm1vZGVsLmdldCgnc2hvd19yZXBlYXQnKSA/IHRoaXMucGxheUJ1dHRvbi5zdHlsZS5kaXNwbGF5IDogJ25vbmUnO1xuICAgICAgICBpZiAocmVwZWF0KSB7XG4gICAgICAgICAgICB0aGlzLnJlcGVhdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtb2QtYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlcGVhdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdtb2QtYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBQbGF5Vmlldztcbn0oRE9NV2lkZ2V0VmlldykpO1xuZXhwb3J0IHsgUGxheVZpZXcgfTtcbiIsIi8vIENvcHlyaWdodCAoYykgSnVweXRlciBEZXZlbG9wbWVudCBUZWFtLlxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNb2RpZmllZCBCU0QgTGljZW5zZS5cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IHVucGFja19tb2RlbHMgfSBmcm9tICdAanVweXRlci13aWRnZXRzL2Jhc2UnO1xuaW1wb3J0IHsgQ29yZVdpZGdldE1vZGVsIH0gZnJvbSAnLi93aWRnZXRfY29yZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xudmFyIERpcmVjdGlvbmFsTGlua01vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEaXJlY3Rpb25hbExpbmtNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEaXJlY3Rpb25hbExpbmtNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBEaXJlY3Rpb25hbExpbmtNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIHRhcmdldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc291cmNlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0RpcmVjdGlvbmFsTGlua01vZGVsJ1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIERpcmVjdGlvbmFsTGlua01vZGVsLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKGF0dHJpYnV0ZXMsIG9wdGlvbnMpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcywgYXR0cmlidXRlcywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMub24oJ2NoYW5nZScsIHRoaXMudXBkYXRlQmluZGluZ3MsIHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUJpbmRpbmdzKCk7XG4gICAgfTtcbiAgICBEaXJlY3Rpb25hbExpbmtNb2RlbC5wcm90b3R5cGUudXBkYXRlVmFsdWUgPSBmdW5jdGlvbiAoc291cmNlTW9kZWwsIHNvdXJjZUF0dHIsIHRhcmdldE1vZGVsLCB0YXJnZXRBdHRyKSB7XG4gICAgICAgIGlmICh0aGlzLl91cGRhdGluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3VwZGF0aW5nID0gdHJ1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0YXJnZXRNb2RlbCkge1xuICAgICAgICAgICAgICAgIHRhcmdldE1vZGVsLnNldCh0YXJnZXRBdHRyLCBzb3VyY2VNb2RlbC5nZXQoc291cmNlQXR0cikpO1xuICAgICAgICAgICAgICAgIHRhcmdldE1vZGVsLnNhdmVfY2hhbmdlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRGlyZWN0aW9uYWxMaW5rTW9kZWwucHJvdG90eXBlLnVwZGF0ZUJpbmRpbmdzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgICAgX2EgPSB0aGlzLmdldCgnc291cmNlJykgfHwgW251bGwsIG51bGxdLCB0aGlzLnNvdXJjZU1vZGVsID0gX2FbMF0sIHRoaXMuc291cmNlQXR0ciA9IF9hWzFdO1xuICAgICAgICBfYiA9IHRoaXMuZ2V0KCd0YXJnZXQnKSB8fCBbbnVsbCwgbnVsbF0sIHRoaXMudGFyZ2V0TW9kZWwgPSBfYlswXSwgdGhpcy50YXJnZXRBdHRyID0gX2JbMV07XG4gICAgICAgIGlmICh0aGlzLnNvdXJjZU1vZGVsKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMuc291cmNlTW9kZWwsICdjaGFuZ2U6JyArIHRoaXMuc291cmNlQXR0ciwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVZhbHVlKF90aGlzLnNvdXJjZU1vZGVsLCBfdGhpcy5zb3VyY2VBdHRyLCBfdGhpcy50YXJnZXRNb2RlbCwgX3RoaXMudGFyZ2V0QXR0cik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5zb3VyY2VNb2RlbCwgdGhpcy5zb3VyY2VBdHRyLCB0aGlzLnRhcmdldE1vZGVsLCB0aGlzLnRhcmdldEF0dHIpO1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5Ub09uY2UodGhpcy5zb3VyY2VNb2RlbCwgJ2Rlc3Ryb3knLCB0aGlzLmNsZWFudXApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRhcmdldE1vZGVsKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlblRvT25jZSh0aGlzLnRhcmdldE1vZGVsLCAnZGVzdHJveScsIHRoaXMuY2xlYW51cCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERpcmVjdGlvbmFsTGlua01vZGVsLnByb3RvdHlwZS5jbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdG9wIGxpc3RlbmluZyB0byAnY2hhbmdlJyBhbmQgJ2Rlc3Ryb3knIGV2ZW50cyBvZiB0aGUgc291cmNlIGFuZCB0YXJnZXRcbiAgICAgICAgaWYgKHRoaXMuc291cmNlTW9kZWwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcExpc3RlbmluZyh0aGlzLnNvdXJjZU1vZGVsLCAnY2hhbmdlOicgKyB0aGlzLnNvdXJjZUF0dHIsIG51bGwpO1xuICAgICAgICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nKHRoaXMuc291cmNlTW9kZWwsICdkZXN0cm95JywgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0TW9kZWwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcExpc3RlbmluZyh0aGlzLnRhcmdldE1vZGVsLCAnZGVzdHJveScsIG51bGwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEaXJlY3Rpb25hbExpbmtNb2RlbC5zZXJpYWxpemVycyA9IF9fYXNzaWduKHt9LCBDb3JlV2lkZ2V0TW9kZWwuc2VyaWFsaXplcnMsIHsgdGFyZ2V0OiB7IGRlc2VyaWFsaXplOiB1bnBhY2tfbW9kZWxzIH0sIHNvdXJjZTogeyBkZXNlcmlhbGl6ZTogdW5wYWNrX21vZGVscyB9IH0pO1xuICAgIHJldHVybiBEaXJlY3Rpb25hbExpbmtNb2RlbDtcbn0oQ29yZVdpZGdldE1vZGVsKSk7XG5leHBvcnQgeyBEaXJlY3Rpb25hbExpbmtNb2RlbCB9O1xudmFyIExpbmtNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTGlua01vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExpbmtNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBMaW5rTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0xpbmtNb2RlbCdcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBMaW5rTW9kZWwucHJvdG90eXBlLnVwZGF0ZUJpbmRpbmdzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZUJpbmRpbmdzLmNhbGwodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldE1vZGVsKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMudGFyZ2V0TW9kZWwsICdjaGFuZ2U6JyArIHRoaXMudGFyZ2V0QXR0ciwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVZhbHVlKF90aGlzLnRhcmdldE1vZGVsLCBfdGhpcy50YXJnZXRBdHRyLCBfdGhpcy5zb3VyY2VNb2RlbCwgX3RoaXMuc291cmNlQXR0cik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTGlua01vZGVsLnByb3RvdHlwZS5jbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmNsZWFudXAuY2FsbCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0TW9kZWwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcExpc3RlbmluZyh0aGlzLnRhcmdldE1vZGVsLCAnY2hhbmdlOicgKyB0aGlzLnRhcmdldEF0dHIsIG51bGwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTGlua01vZGVsO1xufShEaXJlY3Rpb25hbExpbmtNb2RlbCkpO1xuZXhwb3J0IHsgTGlua01vZGVsIH07XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEp1cHl0ZXIgRGV2ZWxvcG1lbnQgVGVhbS5cbi8vIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTW9kaWZpZWQgQlNEIExpY2Vuc2UuXG4vKipcbiAqIEEgdmFyaWV0eSBvZiBjb252ZW5pZW5jZSBtZXRob2RzIGZvciBtYWludGFpbmluZyBhIGN1cnJlbnQgc2VsZWN0aW9uXG4gKi9cbmltcG9ydCB7IEFycmF5RXh0IH0gZnJvbSAnQHBob3NwaG9yL2FsZ29yaXRobSc7XG5pbXBvcnQgeyBTaWduYWwgfSBmcm9tICdAcGhvc3Bob3Ivc2lnbmFsaW5nJztcbnZhciBTZWxlY3Rpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VsZWN0aW9uKHNlcXVlbmNlLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHRoaXMuX2FycmF5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uQ2hhbmdlZCA9IG5ldyBTaWduYWwodGhpcyk7XG4gICAgICAgIHRoaXMuX2FycmF5ID0gc2VxdWVuY2U7XG4gICAgICAgIHRoaXMuX2luc2VydEJlaGF2aW9yID0gb3B0aW9ucy5pbnNlcnRCZWhhdmlvciB8fCAnc2VsZWN0LWl0ZW0taWYtbmVlZGVkJztcbiAgICAgICAgdGhpcy5fcmVtb3ZlQmVoYXZpb3IgPSBvcHRpb25zLnJlbW92ZUJlaGF2aW9yIHx8ICdzZWxlY3QtaXRlbS1hZnRlcic7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWxlY3Rpb24ucHJvdG90eXBlLCBcInNlbGVjdGlvbkNoYW5nZWRcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBzaWduYWwgZW1pdHRlZCB3aGVuIHRoZSBjdXJyZW50IGl0ZW0gaXMgY2hhbmdlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogIyMjIyBOb3Rlc1xuICAgICAgICAgKiBUaGlzIHNpZ25hbCBpcyBlbWl0dGVkIHdoZW4gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtIGlzIGNoYW5nZWQgZWl0aGVyXG4gICAgICAgICAqIHRocm91Z2ggdXNlciBvciBwcm9ncmFtbWF0aWMgaW50ZXJhY3Rpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIE5vdGFibHksIHRoaXMgc2lnbmFsIGlzIG5vdCBlbWl0dGVkIHdoZW4gdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IGl0ZW1cbiAgICAgICAgICogY2hhbmdlcyBkdWUgdG8gb3RoZXIgaXRlbXMgYmVpbmcgaW5zZXJ0ZWQsIHJlbW92ZWQsIG9yIG1vdmVkLCBidXQgdGhlXG4gICAgICAgICAqIGN1cnJlbnQgaXRlbSByZW1haW5zIHRoZSBzYW1lLiBJdCBpcyBvbmx5IGVtaXR0ZWQgd2hlbiB0aGUgYWN0dWFsIGN1cnJlbnRcbiAgICAgICAgICogaXRlbSBpcyBjaGFuZ2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uQ2hhbmdlZDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQWRqdXN0IGZvciBzZXR0aW5nIGFuIGl0ZW0uXG4gICAgICpcbiAgICAgKiBUaGlzIHNob3VsZCBiZSBjYWxsZWQgKmFmdGVyKiB0aGUgc2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIGluZGV4IC0gVGhlIGluZGV4IHNldC5cbiAgICAgKiBAcGFyYW0gb2xkVmFsdWUgLSBUaGUgb2xkIHZhbHVlIGF0IHRoZSBpbmRleC5cbiAgICAgKi9cbiAgICBTZWxlY3Rpb24ucHJvdG90eXBlLmFkanVzdFNlbGVjdGlvbkZvclNldCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAvLyBXZSBqdXN0IG5lZWQgdG8gc2VuZCBhIHNpZ25hbCBpZiB0aGUgY3VycmVudFZhbHVlIGNoYW5nZWQuXG4gICAgICAgIC8vIEdldCB0aGUgY3VycmVudCBpbmRleCBhbmQgdmFsdWUuXG4gICAgICAgIHZhciBwaSA9IHRoaXMuaW5kZXg7XG4gICAgICAgIHZhciBwdiA9IHRoaXMudmFsdWU7XG4gICAgICAgIC8vIEV4aXQgZWFybHkgaWYgdGhpcyBkb2Vzbid0IGFmZmVjdCB0aGUgc2VsZWN0aW9uXG4gICAgICAgIGlmIChpbmRleCAhPT0gcGkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl91cGRhdGVTZWxlY3RlZFZhbHVlKCk7XG4gICAgICAgIHZhciBjdiA9IHRoaXMudmFsdWU7XG4gICAgICAgIC8vIFRoZSBwcmV2aW91cyBpdGVtIGlzIG5vdyBudWxsLCBzaW5jZSBpdCBpcyBubyBsb25nZXIgaW4gdGhlIGFycmF5LlxuICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gbnVsbDtcbiAgICAgICAgLy8gU2VuZCBzaWduYWwgaWYgdGhlcmUgd2FzIGEgY2hhbmdlXG4gICAgICAgIGlmIChwdiAhPT0gY3YpIHtcbiAgICAgICAgICAgIC8vIEVtaXQgdGhlIGN1cnJlbnQgY2hhbmdlZCBzaWduYWwuXG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25DaGFuZ2VkLmVtaXQoe1xuICAgICAgICAgICAgICAgIHByZXZpb3VzSW5kZXg6IHBpLCBwcmV2aW91c1ZhbHVlOiBwdixcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXg6IHBpLCBjdXJyZW50VmFsdWU6IGN2XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlbGVjdGlvbi5wcm90b3R5cGUsIFwidmFsdWVcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgICAgICpcbiAgICAgICAgICogIyMjIyBOb3Rlc1xuICAgICAgICAgKiBUaGlzIHdpbGwgYmUgYG51bGxgIGlmIG5vIGl0ZW0gaXMgc2VsZWN0ZWQuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0uXG4gICAgICAgICAqXG4gICAgICAgICAqICMjIyMgTm90ZXNcbiAgICAgICAgICogSWYgdGhlIGl0ZW0gZG9lcyBub3QgZXhpc3QgaW4gdGhlIHZlY3RvciwgdGhlIGN1cnJlbnRWYWx1ZSB3aWxsIGJlIHNldCB0b1xuICAgICAgICAgKiBgbnVsbGAuIFRoaXMgc2VsZWN0cyB0aGUgZmlyc3QgZW50cnkgZXF1YWwgdG8gdGhlIGRlc2lyZWQgaXRlbS5cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSBBcnJheUV4dC5maXJzdEluZGV4T2YodGhpcy5fYXJyYXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlbGVjdGlvbi5wcm90b3R5cGUsIFwiaW5kZXhcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBpbmRleCBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0uXG4gICAgICAgICAqXG4gICAgICAgICAqICMjIyMgTm90ZXNcbiAgICAgICAgICogVGhpcyB3aWxsIGJlIGBudWxsYCBpZiBubyBpdGVtIGlzIHNlbGVjdGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5kZXg7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdGFiLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gaW5kZXggLSBUaGUgaW5kZXggdG8gc2VsZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiAjIyMjIE5vdGVzXG4gICAgICAgICAqIElmIHRoZSB2YWx1ZSBpcyBvdXQgb2YgcmFuZ2UsIHRoZSBpbmRleCB3aWxsIGJlIHNldCB0byBgbnVsbGAsIHdoaWNoXG4gICAgICAgICAqIGluZGljYXRlcyBubyBpdGVtIGlzIHNlbGVjdGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIC8vIENvZXJjZSB0aGUgdmFsdWUgdG8gYW4gaW5kZXguXG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGkgPSBNYXRoLmZsb29yKGluZGV4KTtcbiAgICAgICAgICAgICAgICBpZiAoaSA8IDAgfHwgaSA+PSB0aGlzLl9hcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBCYWlsIGVhcmx5IGlmIHRoZSBpbmRleCB3aWxsIG5vdCBjaGFuZ2UuXG4gICAgICAgICAgICBpZiAodGhpcy5faW5kZXggPT09IGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBMb29rIHVwIHRoZSBwcmV2aW91cyBpbmRleCBhbmQgaXRlbS5cbiAgICAgICAgICAgIHZhciBwaSA9IHRoaXMuX2luZGV4O1xuICAgICAgICAgICAgdmFyIHB2ID0gdGhpcy5fdmFsdWU7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHN0YXRlXG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGk7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVTZWxlY3RlZFZhbHVlKCk7XG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gcHY7XG4gICAgICAgICAgICAvLyBFbWl0IHRoZSBjdXJyZW50IGNoYW5nZWQgc2lnbmFsLlxuICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uQ2hhbmdlZC5lbWl0KHtcbiAgICAgICAgICAgICAgICBwcmV2aW91c0luZGV4OiBwaSwgcHJldmlvdXNWYWx1ZTogcHYsXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4OiBpLCBjdXJyZW50VmFsdWU6IHRoaXMuX3ZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlbGVjdGlvbi5wcm90b3R5cGUsIFwiaW5zZXJ0QmVoYXZpb3JcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBzZWxlY3Rpb24gYmVoYXZpb3Igd2hlbiBpbnNlcnRpbmcgYSB0YWIuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnNlcnRCZWhhdmlvcjtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGUgc2VsZWN0aW9uIGJlaGF2aW9yIHdoZW4gaW5zZXJ0aW5nIGEgdGFiLlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc2VydEJlaGF2aW9yID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWxlY3Rpb24ucHJvdG90eXBlLCBcInJlbW92ZUJlaGF2aW9yXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgc2VsZWN0aW9uIGJlaGF2aW9yIHdoZW4gcmVtb3ZpbmcgYSB0YWIuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW1vdmVCZWhhdmlvcjtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGUgc2VsZWN0aW9uIGJlaGF2aW9yIHdoZW4gcmVtb3ZpbmcgYSB0YWIuXG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVtb3ZlQmVoYXZpb3IgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQWRqdXN0IHRoZSBjdXJyZW50IGluZGV4IGZvciBhIHRhYiBpbnNlcnQgb3BlcmF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIGkgLSBUaGUgbmV3IGluZGV4IG9mIHRoZSBpbnNlcnRlZCBpdGVtLlxuICAgICAqIEBwYXJhbSBqIC0gVGhlIGluc2VydGVkIGl0ZW0uXG4gICAgICpcbiAgICAgKiAjIyMjIE5vdGVzXG4gICAgICogVGhpcyBtZXRob2QgYWNjb3VudHMgZm9yIHRoZSB0YWIgYmFyJ3MgaW5zZXJ0aW9uIGJlaGF2aW9yIHdoZW4gYWRqdXN0aW5nXG4gICAgICogdGhlIGN1cnJlbnQgaW5kZXggYW5kIGVtaXR0aW5nIHRoZSBjaGFuZ2VkIHNpZ25hbC4gVGhpcyBzaG91bGQgYmUgY2FsbGVkXG4gICAgICogYWZ0ZXIgdGhlIGluc2VydGlvbi5cbiAgICAgKi9cbiAgICBTZWxlY3Rpb24ucHJvdG90eXBlLmFkanVzdFNlbGVjdGlvbkZvckluc2VydCA9IGZ1bmN0aW9uIChpLCBpdGVtKSB7XG4gICAgICAgIC8vIExvb2t1cCBjb21tb25seSB1c2VkIHZhcmlhYmxlcy5cbiAgICAgICAgdmFyIGN2ID0gdGhpcy5fdmFsdWU7XG4gICAgICAgIHZhciBjaSA9IHRoaXMuX2luZGV4O1xuICAgICAgICB2YXIgYmggPSB0aGlzLl9pbnNlcnRCZWhhdmlvcjtcbiAgICAgICAgLy8gSGFuZGxlIHRoZSBiZWhhdmlvciB3aGVyZSB0aGUgbmV3IGl0ZW0gaXMgYWx3YXlzIHNlbGVjdGVkLFxuICAgICAgICAvLyBvciB0aGUgYmVoYXZpb3Igd2hlcmUgdGhlIG5ldyBpdGVtIGlzIHNlbGVjdGVkIGlmIG5lZWRlZC5cbiAgICAgICAgaWYgKGJoID09PSAnc2VsZWN0LWl0ZW0nIHx8IChiaCA9PT0gJ3NlbGVjdC1pdGVtLWlmLW5lZWRlZCcgJiYgY2kgPT09IG51bGwpKSB7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGk7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IGl0ZW07XG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gY3Y7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25DaGFuZ2VkLmVtaXQoe1xuICAgICAgICAgICAgICAgIHByZXZpb3VzSW5kZXg6IGNpLCBwcmV2aW91c1ZhbHVlOiBjdixcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXg6IGksIGN1cnJlbnRWYWx1ZTogaXRlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBzaWxlbnRseSBhZGp1c3QgdGhlIGN1cnJlbnQgaW5kZXggaWYgbmVlZGVkLlxuICAgICAgICBpZiAoY2kgPj0gaSkge1xuICAgICAgICAgICAgdGhpcy5faW5kZXgrKztcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRqdXN0IHRoZSBjdXJyZW50IGluZGV4IGZvciBtb3ZlIG9wZXJhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBpIC0gVGhlIHByZXZpb3VzIGluZGV4IG9mIHRoZSBpdGVtLlxuICAgICAqIEBwYXJhbSBqIC0gVGhlIG5ldyBpbmRleCBvZiB0aGUgaXRlbS5cbiAgICAgKlxuICAgICAqICMjIyMgTm90ZXNcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIG5vdCBjYXVzZSB0aGUgYWN0dWFsIGN1cnJlbnQgaXRlbSB0byBjaGFuZ2UuIEl0IHNpbGVudGx5XG4gICAgICogYWRqdXN0cyB0aGUgY3VycmVudCBpbmRleCB0byBhY2NvdW50IGZvciB0aGUgZ2l2ZW4gbW92ZS5cbiAgICAgKi9cbiAgICBTZWxlY3Rpb24ucHJvdG90eXBlLmFkanVzdFNlbGVjdGlvbkZvck1vdmUgPSBmdW5jdGlvbiAoaSwgaikge1xuICAgICAgICBpZiAodGhpcy5faW5kZXggPT09IGkpIHtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gajtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9pbmRleCA8IGkgJiYgdGhpcy5faW5kZXggPj0gaikge1xuICAgICAgICAgICAgdGhpcy5faW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9pbmRleCA+IGkgJiYgdGhpcy5faW5kZXggPD0gaikge1xuICAgICAgICAgICAgdGhpcy5faW5kZXgtLTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2xlYXIgdGhlIHNlbGVjdGlvbiBhbmQgaGlzdG9yeS5cbiAgICAgKi9cbiAgICBTZWxlY3Rpb24ucHJvdG90eXBlLmNsZWFyU2VsZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgaW5kZXggYW5kIGl0ZW0uXG4gICAgICAgIHZhciBwaSA9IHRoaXMuX2luZGV4O1xuICAgICAgICB2YXIgcHYgPSB0aGlzLl92YWx1ZTtcbiAgICAgICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgaW5kZXggYW5kIHByZXZpb3VzIGl0ZW0uXG4gICAgICAgIHRoaXMuX2luZGV4ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gbnVsbDtcbiAgICAgICAgLy8gSWYgbm8gaXRlbSB3YXMgc2VsZWN0ZWQsIHRoZXJlJ3Mgbm90aGluZyBlbHNlIHRvIGRvLlxuICAgICAgICBpZiAocGkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBFbWl0IHRoZSBjdXJyZW50IGNoYW5nZWQgc2lnbmFsLlxuICAgICAgICB0aGlzLl9zZWxlY3Rpb25DaGFuZ2VkLmVtaXQoe1xuICAgICAgICAgICAgcHJldmlvdXNJbmRleDogcGksIHByZXZpb3VzVmFsdWU6IHB2LFxuICAgICAgICAgICAgY3VycmVudEluZGV4OiB0aGlzLl9pbmRleCwgY3VycmVudFZhbHVlOiB0aGlzLl92YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkanVzdCB0aGUgY3VycmVudCBpbmRleCBmb3IgYW4gaXRlbSByZW1vdmUgb3BlcmF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIGkgLSBUaGUgZm9ybWVyIGluZGV4IG9mIHRoZSByZW1vdmVkIGl0ZW0uXG4gICAgICogQHBhcmFtIGl0ZW0gLSBUaGUgcmVtb3ZlZCBpdGVtLlxuICAgICAqXG4gICAgICogIyMjIyBOb3Rlc1xuICAgICAqIFRoaXMgbWV0aG9kIGFjY291bnRzIGZvciB0aGUgcmVtb3ZlIGJlaGF2aW9yIHdoZW4gYWRqdXN0aW5nIHRoZSBjdXJyZW50XG4gICAgICogaW5kZXggYW5kIGVtaXR0aW5nIHRoZSBjaGFuZ2VkIHNpZ25hbC4gSXQgc2hvdWxkIGJlIGNhbGxlZCBhZnRlciB0aGUgaXRlbVxuICAgICAqIGlzIHJlbW92ZWQuXG4gICAgICovXG4gICAgU2VsZWN0aW9uLnByb3RvdHlwZS5hZGp1c3RTZWxlY3Rpb25Gb3JSZW1vdmUgPSBmdW5jdGlvbiAoaSwgaXRlbSkge1xuICAgICAgICAvLyBMb29rdXAgY29tbW9ubHkgdXNlZCB2YXJpYWJsZXMuXG4gICAgICAgIHZhciBjaSA9IHRoaXMuX2luZGV4O1xuICAgICAgICB2YXIgYmggPSB0aGlzLl9yZW1vdmVCZWhhdmlvcjtcbiAgICAgICAgLy8gU2lsZW50bHkgYWRqdXN0IHRoZSBpbmRleCBpZiB0aGUgY3VycmVudCBpdGVtIGlzIG5vdCByZW1vdmVkLlxuICAgICAgICBpZiAoY2kgIT09IGkpIHtcbiAgICAgICAgICAgIGlmIChjaSA+IGkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbmRleC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vIGl0ZW0gZ2V0cyBzZWxlY3RlZCBpZiB0aGUgdmVjdG9yIGlzIGVtcHR5LlxuICAgICAgICBpZiAodGhpcy5fYXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBSZXNldCB0aGUgY3VycmVudCBpbmRleCBhbmQgcHJldmlvdXMgaXRlbS5cbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uQ2hhbmdlZC5lbWl0KHtcbiAgICAgICAgICAgICAgICBwcmV2aW91c0luZGV4OiBpLCBwcmV2aW91c1ZhbHVlOiBpdGVtLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleDogdGhpcy5faW5kZXgsIGN1cnJlbnRWYWx1ZTogdGhpcy5fdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZSBiZWhhdmlvciB3aGVyZSB0aGUgbmV4dCBzaWJsaW5nIGl0ZW0gaXMgc2VsZWN0ZWQuXG4gICAgICAgIGlmIChiaCA9PT0gJ3NlbGVjdC1pdGVtLWFmdGVyJykge1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBNYXRoLm1pbihpLCB0aGlzLl9hcnJheS5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVNlbGVjdGVkVmFsdWUoKTtcbiAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uQ2hhbmdlZC5lbWl0KHtcbiAgICAgICAgICAgICAgICBwcmV2aW91c0luZGV4OiBpLCBwcmV2aW91c1ZhbHVlOiBpdGVtLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleDogdGhpcy5faW5kZXgsIGN1cnJlbnRWYWx1ZTogdGhpcy5fdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZSBiZWhhdmlvciB3aGVyZSB0aGUgcHJldmlvdXMgc2libGluZyBpdGVtIGlzIHNlbGVjdGVkLlxuICAgICAgICBpZiAoYmggPT09ICdzZWxlY3QtaXRlbS1iZWZvcmUnKSB7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IE1hdGgubWF4KDAsIGkgLSAxKTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVNlbGVjdGVkVmFsdWUoKTtcbiAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uQ2hhbmdlZC5lbWl0KHtcbiAgICAgICAgICAgICAgICBwcmV2aW91c0luZGV4OiBpLCBwcmV2aW91c1ZhbHVlOiBpdGVtLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleDogdGhpcy5faW5kZXgsIGN1cnJlbnRWYWx1ZTogdGhpcy5fdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZSBiZWhhdmlvciB3aGVyZSB0aGUgcHJldmlvdXMgaGlzdG9yeSBpdGVtIGlzIHNlbGVjdGVkLlxuICAgICAgICBpZiAoYmggPT09ICdzZWxlY3QtcHJldmlvdXMtaXRlbScpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wcmV2aW91c1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuX3ByZXZpb3VzVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbmRleCA9IE1hdGgubWluKGksIHRoaXMuX2FycmF5Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVNlbGVjdGVkVmFsdWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uQ2hhbmdlZC5lbWl0KHtcbiAgICAgICAgICAgICAgICBwcmV2aW91c0luZGV4OiBpLCBwcmV2aW91c1ZhbHVlOiBpdGVtLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleDogdGhpcy5faW5kZXgsIGN1cnJlbnRWYWx1ZTogdGhpcy52YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBubyBpdGVtIGdldHMgc2VsZWN0ZWQuXG4gICAgICAgIHRoaXMuX2luZGV4ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uQ2hhbmdlZC5lbWl0KHtcbiAgICAgICAgICAgIHByZXZpb3VzSW5kZXg6IGksIHByZXZpb3VzVmFsdWU6IGl0ZW0sXG4gICAgICAgICAgICBjdXJyZW50SW5kZXg6IHRoaXMuX2luZGV4LCBjdXJyZW50VmFsdWU6IHRoaXMuX3ZhbHVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBjdXJyZW50IHZhbHVlIGJhc2VkIG9uIHRoZSBjdXJyZW50IGluZGV4LlxuICAgICAqL1xuICAgIFNlbGVjdGlvbi5wcm90b3R5cGUuX3VwZGF0ZVNlbGVjdGVkVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5faW5kZXg7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gaSAhPT0gbnVsbCA/IHRoaXMuX2FycmF5W2ldIDogbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBTZWxlY3Rpb247XG59KCkpO1xuZXhwb3J0IHsgU2VsZWN0aW9uIH07XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEp1cHl0ZXIgRGV2ZWxvcG1lbnQgVGVhbS5cbi8vIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTW9kaWZpZWQgQlNEIExpY2Vuc2UuXG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vdmVyc2lvbic7XG5leHBvcnQgKiBmcm9tICcuL3dpZGdldF9saW5rJztcbmV4cG9ydCAqIGZyb20gJy4vd2lkZ2V0X2Jvb2wnO1xuZXhwb3J0ICogZnJvbSAnLi93aWRnZXRfYnV0dG9uJztcbmV4cG9ydCAqIGZyb20gJy4vd2lkZ2V0X2JveCc7XG5leHBvcnQgKiBmcm9tICcuL3dpZGdldF9pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL3dpZGdldF92aWRlbyc7XG5leHBvcnQgKiBmcm9tICcuL3dpZGdldF9hdWRpbyc7XG5leHBvcnQgKiBmcm9tICcuL3dpZGdldF9jb2xvcic7XG5leHBvcnQgKiBmcm9tICcuL3dpZGdldF9kYXRlJztcbmV4cG9ydCAqIGZyb20gJy4vd2lkZ2V0X2ludCc7XG5leHBvcnQgKiBmcm9tICcuL3dpZGdldF9mbG9hdCc7XG5leHBvcnQgKiBmcm9tICcuL3dpZGdldF9jb250cm9sbGVyJztcbmV4cG9ydCAqIGZyb20gJy4vd2lkZ2V0X3NlbGVjdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3dpZGdldF9zZWxlY3Rpb25jb250YWluZXInO1xuZXhwb3J0ICogZnJvbSAnLi93aWRnZXRfc3RyaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vd2lkZ2V0X2Rlc2NyaXB0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vd2lkZ2V0X3VwbG9hZCc7XG5leHBvcnQgdmFyIHZlcnNpb24gPSByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uO1xuIiwiLy8gQ29weXJpZ2h0IChjKSBKdXB5dGVyIERldmVsb3BtZW50IFRlYW0uXG4vLyBEaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1vZGlmaWVkIEJTRCBMaWNlbnNlLlxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsgRGVzY3JpcHRpb25WaWV3IH0gZnJvbSAnLi93aWRnZXRfZGVzY3JpcHRpb24nO1xuaW1wb3J0IHsgQ29yZURlc2NyaXB0aW9uTW9kZWwgfSBmcm9tICcuL3dpZGdldF9jb3JlJztcbmltcG9ydCB7IHV1aWQgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplX2RhdGUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeWVhcjogdmFsdWUuZ2V0VVRDRnVsbFllYXIoKSxcbiAgICAgICAgICAgIG1vbnRoOiB2YWx1ZS5nZXRVVENNb250aCgpLFxuICAgICAgICAgICAgZGF0ZTogdmFsdWUuZ2V0VVRDRGF0ZSgpXG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGRlc2VyaWFsaXplX2RhdGUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGRhdGUuc2V0VVRDRnVsbFllYXIodmFsdWUueWVhciwgdmFsdWUubW9udGgsIHZhbHVlLmRhdGUpO1xuICAgICAgICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG59XG52YXIgRGF0ZVBpY2tlck1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEYXRlUGlja2VyTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGF0ZVBpY2tlck1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIERhdGVQaWNrZXJNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdEYXRlUGlja2VyTW9kZWwnLFxuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ0RhdGVQaWNrZXJWaWV3J1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIERhdGVQaWNrZXJNb2RlbC5zZXJpYWxpemVycyA9IF9fYXNzaWduKHt9LCBDb3JlRGVzY3JpcHRpb25Nb2RlbC5zZXJpYWxpemVycywgeyB2YWx1ZToge1xuICAgICAgICAgICAgc2VyaWFsaXplOiBzZXJpYWxpemVfZGF0ZSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplOiBkZXNlcmlhbGl6ZV9kYXRlXG4gICAgICAgIH0gfSk7XG4gICAgcmV0dXJuIERhdGVQaWNrZXJNb2RlbDtcbn0oQ29yZURlc2NyaXB0aW9uTW9kZWwpKTtcbmV4cG9ydCB7IERhdGVQaWNrZXJNb2RlbCB9O1xudmFyIERhdGVQaWNrZXJWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEYXRlUGlja2VyVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEYXRlUGlja2VyVmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBEYXRlUGlja2VyVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItd2lkZ2V0cycpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1pbmxpbmUtaGJveCcpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1kYXRlcGlja2VyJyk7XG4gICAgICAgIHRoaXMuX2RhdGVwaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aGlzLl9kYXRlcGlja2VyLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICAgIHRoaXMuX2RhdGVwaWNrZXIuaWQgPSB0aGlzLmxhYmVsLmh0bWxGb3IgPSB1dWlkKCk7XG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5fZGF0ZXBpY2tlcik7XG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTp2YWx1ZScsIHRoaXMuX3VwZGF0ZV92YWx1ZSk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZV92YWx1ZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcbiAgICAgKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBtb2RlbCBpcyBjaGFuZ2VkLiBUaGUgbW9kZWwgbWF5IGhhdmUgYmVlblxuICAgICAqIGNoYW5nZWQgYnkgYW5vdGhlciB2aWV3IG9yIGJ5IGEgc3RhdGUgdXBkYXRlIGZyb20gdGhlIGJhY2stZW5kLlxuICAgICAqL1xuICAgIERhdGVQaWNrZXJWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMudXBkYXRlZF92aWV3ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICB0aGlzLl9kYXRlcGlja2VyLmRpc2FibGVkID0gdGhpcy5tb2RlbC5nZXQoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBEYXRlUGlja2VyVmlldy5wcm90b3R5cGUuZXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUeXBlc2NyaXB0IGRvZXNuJ3QgdW5kZXJzdGFuZCB0aGF0IHRoZXNlIGZ1bmN0aW9ucyBhcmUgY2FsbGVkLCBzbyB3ZVxuICAgICAgICAvLyBzcGVjaWZpY2FsbHkgdXNlIHRoZW0gaGVyZSBzbyBpdCBrbm93cyB0aGV5IGFyZSBiZWluZyB1c2VkLlxuICAgICAgICB2b2lkIHRoaXMuX3BpY2tlcl9jaGFuZ2U7XG4gICAgICAgIHZvaWQgdGhpcy5fcGlja2VyX2ZvY3Vzb3V0O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ2NoYW5nZSBbdHlwZT1cImRhdGVcIl0nOiAnX3BpY2tlcl9jaGFuZ2UnLFxuICAgICAgICAgICAgJ2ZvY3Vzb3V0IFt0eXBlPVwiZGF0ZVwiXSc6ICdfcGlja2VyX2ZvY3Vzb3V0J1xuICAgICAgICB9O1xuICAgIH07XG4gICAgRGF0ZVBpY2tlclZpZXcucHJvdG90eXBlLl91cGRhdGVfdmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpO1xuICAgICAgICB0aGlzLl9kYXRlcGlja2VyLnZhbHVlQXNEYXRlID0gdmFsdWU7XG4gICAgfTtcbiAgICBEYXRlUGlja2VyVmlldy5wcm90b3R5cGUuX3BpY2tlcl9jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5fZGF0ZXBpY2tlci52YWxpZGl0eS5iYWRJbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ3ZhbHVlJywgdGhpcy5fZGF0ZXBpY2tlci52YWx1ZUFzRGF0ZSk7XG4gICAgICAgICAgICB0aGlzLnRvdWNoKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERhdGVQaWNrZXJWaWV3LnByb3RvdHlwZS5fcGlja2VyX2ZvY3Vzb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fZGF0ZXBpY2tlci52YWxpZGl0eS5iYWRJbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ3ZhbHVlJywgbnVsbCk7XG4gICAgICAgICAgICB0aGlzLnRvdWNoKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBEYXRlUGlja2VyVmlldztcbn0oRGVzY3JpcHRpb25WaWV3KSk7XG5leHBvcnQgeyBEYXRlUGlja2VyVmlldyB9O1xuIiwiLy8gQ29weXJpZ2h0IChjKSBKdXB5dGVyIERldmVsb3BtZW50IFRlYW0uXG4vLyBEaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1vZGlmaWVkIEJTRCBMaWNlbnNlLlxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsgQ29yZURlc2NyaXB0aW9uTW9kZWwgfSBmcm9tICcuL3dpZGdldF9jb3JlJztcbmltcG9ydCB7IERlc2NyaXB0aW9uVmlldyB9IGZyb20gJy4vd2lkZ2V0X2Rlc2NyaXB0aW9uJztcbmltcG9ydCB7IHV1aWQgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG4vKipcbiAqIENsYXNzIG5hbWUgZm9yIGEgY29tYm9ib3ggd2l0aCBhbiBpbnZsaWQgdmFsdWUuXG4gKi9cbnZhciBJTlZBTElEX1ZBTFVFX0NMQVNTID0gJ2pwd2lkZ2V0cy1pbnZhbGlkQ29tYm9WYWx1ZSc7XG52YXIgU3RyaW5nTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFN0cmluZ01vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN0cmluZ01vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFN0cmluZ01vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdcXHUyMDBiJyxcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnU3RyaW5nTW9kZWwnXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFN0cmluZ01vZGVsO1xufShDb3JlRGVzY3JpcHRpb25Nb2RlbCkpO1xuZXhwb3J0IHsgU3RyaW5nTW9kZWwgfTtcbnZhciBIVE1MTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEhUTUxNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBIVE1MTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgSFRNTE1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ0hUTUxWaWV3JyxcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnSFRNTE1vZGVsJ1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBIVE1MTW9kZWw7XG59KFN0cmluZ01vZGVsKSk7XG5leHBvcnQgeyBIVE1MTW9kZWwgfTtcbnZhciBIVE1MVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSFRNTFZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSFRNTFZpZXcoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gdmlldyBpcyByZW5kZXJlZC5cbiAgICAgKi9cbiAgICBIVE1MVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItd2lkZ2V0cycpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1pbmxpbmUtaGJveCcpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1odG1sJyk7XG4gICAgICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWh0bWwtY29udGVudCcpO1xuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY29udGVudCk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7IC8vIFNldCBkZWZhdWx0cy5cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY29udGVudHMgb2YgdGhpcyB2aWV3XG4gICAgICpcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgbW9kZWwgaXMgY2hhbmdlZC4gIFRoZSBtb2RlbCBtYXkgaGF2ZSBiZWVuXG4gICAgICogY2hhbmdlZCBieSBhbm90aGVyIHZpZXcgb3IgYnkgYSBzdGF0ZSB1cGRhdGUgZnJvbSB0aGUgYmFjay1lbmQuXG4gICAgICovXG4gICAgSFRNTFZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpO1xuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIHJldHVybiBIVE1MVmlldztcbn0oRGVzY3JpcHRpb25WaWV3KSk7XG5leHBvcnQgeyBIVE1MVmlldyB9O1xudmFyIEhUTUxNYXRoTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEhUTUxNYXRoTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSFRNTE1hdGhNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBIVE1MTWF0aE1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ0hUTUxNYXRoVmlldycsXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0hUTUxNYXRoTW9kZWwnXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEhUTUxNYXRoTW9kZWw7XG59KFN0cmluZ01vZGVsKSk7XG5leHBvcnQgeyBIVE1MTWF0aE1vZGVsIH07XG52YXIgSFRNTE1hdGhWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhIVE1MTWF0aFZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSFRNTE1hdGhWaWV3KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHZpZXcgaXMgcmVuZGVyZWQuXG4gICAgICovXG4gICAgSFRNTE1hdGhWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnanVweXRlci13aWRnZXRzJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWh0bWxtYXRoJyk7XG4gICAgICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWh0bWxtYXRoLWNvbnRlbnQnKTtcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpOyAvLyBTZXQgZGVmYXVsdHMuXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGNvbnRlbnRzIG9mIHRoaXMgdmlld1xuICAgICAqL1xuICAgIEhUTUxNYXRoVmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJyk7XG4gICAgICAgIHRoaXMudHlwZXNldCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIHJldHVybiBIVE1MTWF0aFZpZXc7XG59KERlc2NyaXB0aW9uVmlldykpO1xuZXhwb3J0IHsgSFRNTE1hdGhWaWV3IH07XG52YXIgTGFiZWxNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTGFiZWxNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMYWJlbE1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIExhYmVsTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBfdmlld19uYW1lOiAnTGFiZWxWaWV3JyxcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnTGFiZWxNb2RlbCdcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gTGFiZWxNb2RlbDtcbn0oU3RyaW5nTW9kZWwpKTtcbmV4cG9ydCB7IExhYmVsTW9kZWwgfTtcbnZhciBMYWJlbFZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExhYmVsVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMYWJlbFZpZXcoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gdmlldyBpcyByZW5kZXJlZC5cbiAgICAgKi9cbiAgICBMYWJlbFZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLXdpZGdldHMnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtbGFiZWwnKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTsgLy8gU2V0IGRlZmF1bHRzLlxuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcbiAgICAgKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBtb2RlbCBpcyBjaGFuZ2VkLiAgVGhlIG1vZGVsIG1heSBoYXZlIGJlZW5cbiAgICAgKiBjaGFuZ2VkIGJ5IGFub3RoZXIgdmlldyBvciBieSBhIHN0YXRlIHVwZGF0ZSBmcm9tIHRoZSBiYWNrLWVuZC5cbiAgICAgKi9cbiAgICBMYWJlbFZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50eXBlc2V0KHRoaXMuZWwsIHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpKTtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICByZXR1cm4gTGFiZWxWaWV3O1xufShEZXNjcmlwdGlvblZpZXcpKTtcbmV4cG9ydCB7IExhYmVsVmlldyB9O1xudmFyIFRleHRhcmVhTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRleHRhcmVhTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVGV4dGFyZWFNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBUZXh0YXJlYU1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ1RleHRhcmVhVmlldycsXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ1RleHRhcmVhTW9kZWwnLFxuICAgICAgICAgICAgcm93czogbnVsbCxcbiAgICAgICAgICAgIGNvbnRpbnVvdXNfdXBkYXRlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBUZXh0YXJlYU1vZGVsO1xufShTdHJpbmdNb2RlbCkpO1xuZXhwb3J0IHsgVGV4dGFyZWFNb2RlbCB9O1xudmFyIFRleHRhcmVhVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVGV4dGFyZWFWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRleHRhcmVhVmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB2aWV3IGlzIHJlbmRlcmVkLlxuICAgICAqL1xuICAgIFRleHRhcmVhVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItd2lkZ2V0cycpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1pbmxpbmUtaGJveCcpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC10ZXh0YXJlYScpO1xuICAgICAgICB0aGlzLnRleHRib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICB0aGlzLnRleHRib3guc2V0QXR0cmlidXRlKCdyb3dzJywgJzUnKTtcbiAgICAgICAgdGhpcy50ZXh0Ym94LmlkID0gdGhpcy5sYWJlbC5odG1sRm9yID0gdXVpZCgpO1xuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMudGV4dGJveCk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7IC8vIFNldCBkZWZhdWx0cy5cbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOnBsYWNlaG9sZGVyJywgZnVuY3Rpb24gKG1vZGVsLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgICAgICAgX3RoaXMudXBkYXRlX3BsYWNlaG9sZGVyKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudXBkYXRlX3BsYWNlaG9sZGVyKCk7XG4gICAgfTtcbiAgICBUZXh0YXJlYVZpZXcucHJvdG90eXBlLnVwZGF0ZV9wbGFjZWhvbGRlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlIHx8IHRoaXMubW9kZWwuZ2V0KCdwbGFjZWhvbGRlcicpO1xuICAgICAgICB0aGlzLnRleHRib3guc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHZhbHVlLnRvU3RyaW5nKCkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcbiAgICAgKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBtb2RlbCBpcyBjaGFuZ2VkLiAgVGhlIG1vZGVsIG1heSBoYXZlIGJlZW5cbiAgICAgKiBjaGFuZ2VkIGJ5IGFub3RoZXIgdmlldyBvciBieSBhIHN0YXRlIHVwZGF0ZSBmcm9tIHRoZSBiYWNrLWVuZC5cbiAgICAgKi9cbiAgICBUZXh0YXJlYVZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy51cGRhdGVkX3ZpZXcgIT0gdGhpcykge1xuICAgICAgICAgICAgdGhpcy50ZXh0Ym94LnZhbHVlID0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJyk7XG4gICAgICAgICAgICB2YXIgcm93cyA9IHRoaXMubW9kZWwuZ2V0KCdyb3dzJyk7XG4gICAgICAgICAgICBpZiAocm93cyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJvd3MgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudGV4dGJveC5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCByb3dzKTtcbiAgICAgICAgICAgIHRoaXMudGV4dGJveC5kaXNhYmxlZCA9IHRoaXMubW9kZWwuZ2V0KCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgVGV4dGFyZWFWaWV3LnByb3RvdHlwZS5ldmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAna2V5ZG93biBpbnB1dCc6ICdoYW5kbGVLZXlEb3duJyxcbiAgICAgICAgICAgICdrZXlwcmVzcyBpbnB1dCc6ICdoYW5kbGVLZXlwcmVzcycsXG4gICAgICAgICAgICAnaW5wdXQgdGV4dGFyZWEnOiAnaGFuZGxlQ2hhbmdpbmcnLFxuICAgICAgICAgICAgJ2NoYW5nZSB0ZXh0YXJlYSc6ICdoYW5kbGVDaGFuZ2VkJ1xuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlIGtleSBkb3duXG4gICAgICpcbiAgICAgKiBTdG9wIHByb3BhZ2F0aW9uIHNvIHRoZSBldmVudCBpc24ndCBzZW50IHRvIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgKi9cbiAgICBUZXh0YXJlYVZpZXcucHJvdG90eXBlLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBrZXkgcHJlc3NcbiAgICAgKlxuICAgICAqIFN0b3AgcHJvcGFnYXRpb24gc28gdGhlIGtleXByZXNzIGlzbid0IHNlbnQgdG8gdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqL1xuICAgIFRleHRhcmVhVmlldy5wcm90b3R5cGUuaGFuZGxlS2V5cHJlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIG9uIGlucHV0IGNoYW5nZVxuICAgICAqL1xuICAgIFRleHRhcmVhVmlldy5wcm90b3R5cGUuaGFuZGxlQ2hhbmdpbmcgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAodGhpcy5tb2RlbC5nZXQoJ2NvbnRpbnVvdXNfdXBkYXRlJykpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlZChlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU3luYyB0aGUgdmFsdWUgd2l0aCB0aGUga2VybmVsLlxuICAgICAqXG4gICAgICogQHBhcmFtIGUgRXZlbnRcbiAgICAgKi9cbiAgICBUZXh0YXJlYVZpZXcucHJvdG90eXBlLmhhbmRsZUNoYW5nZWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIHRoaXMubW9kZWwuc2V0KCd2YWx1ZScsIHRhcmdldC52YWx1ZSwgeyB1cGRhdGVkX3ZpZXc6IHRoaXMgfSk7XG4gICAgICAgIHRoaXMudG91Y2goKTtcbiAgICB9O1xuICAgIHJldHVybiBUZXh0YXJlYVZpZXc7XG59KERlc2NyaXB0aW9uVmlldykpO1xuZXhwb3J0IHsgVGV4dGFyZWFWaWV3IH07XG52YXIgVGV4dE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUZXh0TW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVGV4dE1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFRleHRNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdUZXh0VmlldycsXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ1RleHRNb2RlbCcsXG4gICAgICAgICAgICBjb250aW51b3VzX3VwZGF0ZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gVGV4dE1vZGVsO1xufShTdHJpbmdNb2RlbCkpO1xuZXhwb3J0IHsgVGV4dE1vZGVsIH07XG52YXIgVGV4dFZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRleHRWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRleHRWaWV3KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaW5wdXRUeXBlID0gJ3RleHQnO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHZpZXcgaXMgcmVuZGVyZWQuXG4gICAgICovXG4gICAgVGV4dFZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLXdpZGdldHMnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtaW5saW5lLWhib3gnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtdGV4dCcpO1xuICAgICAgICB0aGlzLnRleHRib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aGlzLnRleHRib3guc2V0QXR0cmlidXRlKCd0eXBlJywgdGhpcy5pbnB1dFR5cGUpO1xuICAgICAgICB0aGlzLnRleHRib3guaWQgPSB0aGlzLmxhYmVsLmh0bWxGb3IgPSB1dWlkKCk7XG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy50ZXh0Ym94KTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTsgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6cGxhY2Vob2xkZXInLCBmdW5jdGlvbiAobW9kZWwsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVfcGxhY2Vob2xkZXIodmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOmRlc2NyaXB0aW9uX3Rvb2x0aXAnLCB0aGlzLnVwZGF0ZV90aXRsZSk7XG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpkZXNjcmlwdGlvbicsIHRoaXMudXBkYXRlX3RpdGxlKTtcbiAgICAgICAgdGhpcy51cGRhdGVfcGxhY2Vob2xkZXIoKTtcbiAgICAgICAgdGhpcy51cGRhdGVfdGl0bGUoKTtcbiAgICB9O1xuICAgIFRleHRWaWV3LnByb3RvdHlwZS51cGRhdGVfcGxhY2Vob2xkZXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy50ZXh0Ym94LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCB2YWx1ZSB8fCB0aGlzLm1vZGVsLmdldCgncGxhY2Vob2xkZXInKSk7XG4gICAgfTtcbiAgICBUZXh0Vmlldy5wcm90b3R5cGUudXBkYXRlX3RpdGxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGl0bGUgPSB0aGlzLm1vZGVsLmdldCgnZGVzY3JpcHRpb25fdG9vbHRpcCcpO1xuICAgICAgICBpZiAoIXRpdGxlKSB7XG4gICAgICAgICAgICB0aGlzLnRleHRib3gucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMubW9kZWwuZ2V0KCdkZXNjcmlwdGlvbicpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy50ZXh0Ym94LnNldEF0dHJpYnV0ZSgndGl0bGUnLCB0aXRsZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRleHRWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAvKipcbiAgICAgICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcbiAgICAgICAgICpcbiAgICAgICAgICogQ2FsbGVkIHdoZW4gdGhlIG1vZGVsIGlzIGNoYW5nZWQuICBUaGUgbW9kZWwgbWF5IGhhdmUgYmVlblxuICAgICAgICAgKiBjaGFuZ2VkIGJ5IGFub3RoZXIgdmlldyBvciBieSBhIHN0YXRlIHVwZGF0ZSBmcm9tIHRoZSBiYWNrLWVuZC5cbiAgICAgICAgICovXG4gICAgICAgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy51cGRhdGVkX3ZpZXcgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRleHRib3gudmFsdWUgIT09IHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0Ym94LnZhbHVlID0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRleHRib3guZGlzYWJsZWQgPSB0aGlzLm1vZGVsLmdldCgnZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIFRleHRWaWV3LnByb3RvdHlwZS5ldmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAna2V5ZG93biBpbnB1dCc6ICdoYW5kbGVLZXlEb3duJyxcbiAgICAgICAgICAgICdrZXlwcmVzcyBpbnB1dCc6ICdoYW5kbGVLZXlwcmVzcycsXG4gICAgICAgICAgICAnaW5wdXQgaW5wdXQnOiAnaGFuZGxlQ2hhbmdpbmcnLFxuICAgICAgICAgICAgJ2NoYW5nZSBpbnB1dCc6ICdoYW5kbGVDaGFuZ2VkJ1xuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlIGtleSBkb3duXG4gICAgICpcbiAgICAgKiBTdG9wIHByb3BhZ2F0aW9uIHNvIHRoZSBrZXlwcmVzcyBpc24ndCBzZW50IHRvIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgKi9cbiAgICBUZXh0Vmlldy5wcm90b3R5cGUuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRleHQgc3VibWlzc2lvblxuICAgICAqL1xuICAgIFRleHRWaWV3LnByb3RvdHlwZS5oYW5kbGVLZXlwcmVzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIC8vIFRoZSBzdWJtaXQgbWVzc2FnZSBpcyBkZXByZWNhdGVkIGluIHdpZGdldHMgN1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykgeyAvLyBSZXR1cm4ga2V5XG4gICAgICAgICAgICB0aGlzLnNlbmQoeyBldmVudDogJ3N1Ym1pdCcgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdXNlciBpbnB1dC5cbiAgICAgKlxuICAgICAqIENhbGxpbmcgbW9kZWwuc2V0IHdpbGwgdHJpZ2dlciBhbGwgb2YgdGhlIG90aGVyIHZpZXdzIG9mIHRoZVxuICAgICAqIG1vZGVsIHRvIHVwZGF0ZS5cbiAgICAgKi9cbiAgICBUZXh0Vmlldy5wcm90b3R5cGUuaGFuZGxlQ2hhbmdpbmcgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAodGhpcy5tb2RlbC5nZXQoJ2NvbnRpbnVvdXNfdXBkYXRlJykpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlZChlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB1c2VyIGlucHV0LlxuICAgICAqXG4gICAgICogQ2FsbGluZyBtb2RlbC5zZXQgd2lsbCB0cmlnZ2VyIGFsbCBvZiB0aGUgb3RoZXIgdmlld3Mgb2YgdGhlXG4gICAgICogbW9kZWwgdG8gdXBkYXRlLlxuICAgICAqL1xuICAgIFRleHRWaWV3LnByb3RvdHlwZS5oYW5kbGVDaGFuZ2VkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICB0aGlzLm1vZGVsLnNldCgndmFsdWUnLCB0YXJnZXQudmFsdWUsIHsgdXBkYXRlZF92aWV3OiB0aGlzIH0pO1xuICAgICAgICB0aGlzLnRvdWNoKCk7XG4gICAgfTtcbiAgICByZXR1cm4gVGV4dFZpZXc7XG59KERlc2NyaXB0aW9uVmlldykpO1xuZXhwb3J0IHsgVGV4dFZpZXcgfTtcbnZhciBQYXNzd29yZE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhQYXNzd29yZE1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFBhc3N3b3JkTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgUGFzc3dvcmRNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdQYXNzd29yZFZpZXcnLFxuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdQYXNzd29yZE1vZGVsJ1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBQYXNzd29yZE1vZGVsO1xufShUZXh0TW9kZWwpKTtcbmV4cG9ydCB7IFBhc3N3b3JkTW9kZWwgfTtcbnZhciBQYXNzd29yZFZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFBhc3N3b3JkVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBQYXNzd29yZFZpZXcoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pbnB1dFR5cGUgPSAncGFzc3dvcmQnO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBQYXNzd29yZFZpZXc7XG59KFRleHRWaWV3KSk7XG5leHBvcnQgeyBQYXNzd29yZFZpZXcgfTtcbi8qKlxuICogQ29tYm9ib3ggd2lkZ2V0IG1vZGVsIGNsYXNzLlxuICovXG52YXIgQ29tYm9ib3hNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ29tYm9ib3hNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb21ib2JveE1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIENvbWJvYm94TW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwgeyBfbW9kZWxfbmFtZTogJ0NvbWJvYm94TW9kZWwnLCBfdmlld19uYW1lOiAnQ29tYm9ib3hWaWV3Jywgb3B0aW9uczogW10sIGVuc3VyZV9vcHRpb25zOiBmYWxzZSB9KTtcbiAgICB9O1xuICAgIHJldHVybiBDb21ib2JveE1vZGVsO1xufShUZXh0TW9kZWwpKTtcbmV4cG9ydCB7IENvbWJvYm94TW9kZWwgfTtcbi8qKlxuICogQ29tYm9ib3ggd2lkZ2V0IHZpZXcgY2xhc3MuXG4gKi9cbnZhciBDb21ib2JveFZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvbWJvYm94VmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb21ib2JveFZpZXcoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pc0luaXRpYWxSZW5kZXIgPSB0cnVlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIENvbWJvYm94Vmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRhdGFsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGF0YWxpc3QnKTtcbiAgICAgICAgdGhpcy5kYXRhbGlzdC5pZCA9IHV1aWQoKTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy50ZXh0Ym94LnNldEF0dHJpYnV0ZSgnbGlzdCcsIHRoaXMuZGF0YWxpc3QuaWQpO1xuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuZGF0YWxpc3QpO1xuICAgIH07XG4gICAgQ29tYm9ib3hWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICBpZiAoIXRoaXMuZGF0YWxpc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsaWQgPSB0aGlzLmlzVmFsaWQodGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJykpO1xuICAgICAgICB0aGlzLmhpZ2hsaWdodFZhbGlkU3RhdGUodmFsaWQpO1xuICAgICAgICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIHVwZGF0ZSBvcHRpb25zXG4gICAgICAgIGlmICgob3B0aW9ucyAhPT0gdW5kZWZpbmVkICYmIG9wdGlvbnMudXBkYXRlZF92aWV3KSB8fCAoIXRoaXMubW9kZWwuaGFzQ2hhbmdlZCgnb3B0aW9ucycpICYmXG4gICAgICAgICAgICAhdGhpcy5pc0luaXRpYWxSZW5kZXIpKSB7XG4gICAgICAgICAgICAvLyBWYWx1ZSB1cGRhdGUgb25seSwga2VlcCBjdXJyZW50IG9wdGlvbnNcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzSW5pdGlhbFJlbmRlciA9IGZhbHNlO1xuICAgICAgICB2YXIgb3B0cyA9IHRoaXMubW9kZWwuZ2V0KCdvcHRpb25zJyk7XG4gICAgICAgIHZhciBvcHRMaW5lcyA9IG9wdHMubWFwKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICByZXR1cm4gXCI8b3B0aW9uIHZhbHVlPVxcXCJcIiArIG8gKyBcIlxcXCI+PC9vcHRpb24+XCI7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRhdGFsaXN0LmlubmVySFRNTCA9IG9wdExpbmVzLmpvaW4oJ1xcbicpO1xuICAgIH07XG4gICAgQ29tYm9ib3hWaWV3LnByb3RvdHlwZS5pc1ZhbGlkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0cnVlID09PSB0aGlzLm1vZGVsLmdldCgnZW5zdXJlX29wdGlvbicpKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHRoaXMubW9kZWwuZ2V0KCdvcHRpb25zJyk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5pbmRleE9mKHZhbHVlKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBDb21ib2JveFZpZXcucHJvdG90eXBlLmhhbmRsZUNoYW5naW5nID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgdG8gdmFsaWRhdGUgdmFsdWVcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICB2YXIgdmFsaWQgPSB0aGlzLmlzVmFsaWQodGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRWYWxpZFN0YXRlKHZhbGlkKTtcbiAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmhhbmRsZUNoYW5naW5nLmNhbGwodGhpcywgZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbWJvYm94Vmlldy5wcm90b3R5cGUuaGFuZGxlQ2hhbmdlZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIE92ZXJyaWRlIHRvIHZhbGlkYXRlIHZhbHVlXG4gICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgdmFyIHZhbGlkID0gdGhpcy5pc1ZhbGlkKHRhcmdldC52YWx1ZSk7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0VmFsaWRTdGF0ZSh2YWxpZCk7XG4gICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5oYW5kbGVDaGFuZ2VkLmNhbGwodGhpcywgZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbWJvYm94Vmlldy5wcm90b3R5cGUuaGlnaGxpZ2h0VmFsaWRTdGF0ZSA9IGZ1bmN0aW9uICh2YWxpZCkge1xuICAgICAgICB0aGlzLnRleHRib3guY2xhc3NMaXN0LnRvZ2dsZShJTlZBTElEX1ZBTFVFX0NMQVNTLCAhdmFsaWQpO1xuICAgIH07XG4gICAgcmV0dXJuIENvbWJvYm94Vmlldztcbn0oVGV4dFZpZXcpKTtcbmV4cG9ydCB7IENvbWJvYm94VmlldyB9O1xuIiwiLy8gQ29weXJpZ2h0IChjKSBKdXB5dGVyIERldmVsb3BtZW50IFRlYW0uXG4vLyBEaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1vZGlmaWVkIEJTRCBMaWNlbnNlLlxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsgRE9NV2lkZ2V0VmlldyB9IGZyb20gJ0BqdXB5dGVyLXdpZGdldHMvYmFzZSc7XG5pbXBvcnQgeyBDb3JlRE9NV2lkZ2V0TW9kZWwgfSBmcm9tICcuL3dpZGdldF9jb3JlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG52YXIgVmlkZW9Nb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVmlkZW9Nb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBWaWRlb01vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFZpZGVvTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ1ZpZGVvTW9kZWwnLFxuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ1ZpZGVvVmlldycsXG4gICAgICAgICAgICBmb3JtYXQ6ICdtcDQnLFxuICAgICAgICAgICAgd2lkdGg6ICcnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnJyxcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRyb2xzOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMCkpXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVmlkZW9Nb2RlbC5zZXJpYWxpemVycyA9IF9fYXNzaWduKHt9LCBDb3JlRE9NV2lkZ2V0TW9kZWwuc2VyaWFsaXplcnMsIHsgdmFsdWU6IHsgc2VyaWFsaXplOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGFWaWV3KHZhbHVlLmJ1ZmZlci5zbGljZSgwKSk7XG4gICAgICAgICAgICB9IH0gfSk7XG4gICAgcmV0dXJuIFZpZGVvTW9kZWw7XG59KENvcmVET01XaWRnZXRNb2RlbCkpO1xuZXhwb3J0IHsgVmlkZW9Nb2RlbCB9O1xudmFyIFZpZGVvVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVmlkZW9WaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFZpZGVvVmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBWaWRlb1ZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCB3aGVuIHZpZXcgaXMgcmVuZGVyZWQuXG4gICAgICAgICAqL1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLnBXaWRnZXQuYWRkQ2xhc3MoJ2p1cHl0ZXItd2lkZ2V0cycpO1xuICAgICAgICB0aGlzLnBXaWRnZXQuYWRkQ2xhc3MoJ3dpZGdldC1pbWFnZScpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpOyAvLyBTZXQgZGVmYXVsdHMuXG4gICAgfTtcbiAgICBWaWRlb1ZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVwZGF0ZSB0aGUgY29udGVudHMgb2YgdGhpcyB2aWV3XG4gICAgICAgICAqXG4gICAgICAgICAqIENhbGxlZCB3aGVuIHRoZSBtb2RlbCBpcyBjaGFuZ2VkLiAgVGhlIG1vZGVsIG1heSBoYXZlIGJlZW5cbiAgICAgICAgICogY2hhbmdlZCBieSBhbm90aGVyIHZpZXcgb3IgYnkgYSBzdGF0ZSB1cGRhdGUgZnJvbSB0aGUgYmFjay1lbmQuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgdXJsO1xuICAgICAgICB2YXIgZm9ybWF0ID0gdGhpcy5tb2RlbC5nZXQoJ2Zvcm1hdCcpO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLm1vZGVsLmdldCgndmFsdWUnKTtcbiAgICAgICAgaWYgKGZvcm1hdCAhPT0gJ3VybCcpIHtcbiAgICAgICAgICAgIHZhciBibG9iID0gbmV3IEJsb2IoW3ZhbHVlXSwgeyB0eXBlOiBcInZpZGVvL1wiICsgdGhpcy5tb2RlbC5nZXQoJ2Zvcm1hdCcpIH0pO1xuICAgICAgICAgICAgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHVybCA9IChuZXcgVGV4dERlY29kZXIoJ3V0Zi04JykpLmRlY29kZSh2YWx1ZS5idWZmZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENsZWFuIHVwIHRoZSBvbGQgb2JqZWN0VVJMXG4gICAgICAgIHZhciBvbGR1cmwgPSB0aGlzLmVsLnNyYztcbiAgICAgICAgdGhpcy5lbC5zcmMgPSB1cmw7XG4gICAgICAgIGlmIChvbGR1cmwgJiYgdHlwZW9mIG9sZHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwob2xkdXJsKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIZWlnaHQgYW5kIHdpZHRoXG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMubW9kZWwuZ2V0KCd3aWR0aCcpO1xuICAgICAgICBpZiAod2lkdGggIT09IHVuZGVmaW5lZCAmJiB3aWR0aC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZSgnd2lkdGgnKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5tb2RlbC5nZXQoJ2hlaWdodCcpO1xuICAgICAgICBpZiAoaGVpZ2h0ICE9PSB1bmRlZmluZWQgJiYgaGVpZ2h0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBoZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoJ2hlaWdodCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFZpZGVvIGF0dHJpYnV0ZXNcbiAgICAgICAgdGhpcy5lbC5sb29wID0gdGhpcy5tb2RlbC5nZXQoJ2xvb3AnKTtcbiAgICAgICAgdGhpcy5lbC5hdXRvcGxheSA9IHRoaXMubW9kZWwuZ2V0KCdhdXRvcGxheScpO1xuICAgICAgICB0aGlzLmVsLmNvbnRyb2xzID0gdGhpcy5tb2RlbC5nZXQoJ2NvbnRyb2xzJyk7XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgVmlkZW9WaWV3LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsLnNyYykge1xuICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLmVsLnNyYyk7XG4gICAgICAgIH1cbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW1vdmUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWaWRlb1ZpZXcucHJvdG90eXBlLCBcInRhZ05hbWVcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRlZmF1bHQgdGFnIG5hbWUuXG4gICAgICAgICAqXG4gICAgICAgICAqICMjIyMgTm90ZXNcbiAgICAgICAgICogVGhpcyBpcyBhIHJlYWQtb25seSBhdHRyaWJ1dGUuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFdlIGNhbid0IG1ha2UgdGhpcyBhbiBhdHRyaWJ1dGUgd2l0aCBhIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgICAgIC8vIHNpbmNlIGl0IHdvdWxkIGJlIHNldCBhZnRlciBpdCBpcyBuZWVkZWQgaW4gdGhlXG4gICAgICAgICAgICAvLyBjb25zdHJ1Y3Rvci5cbiAgICAgICAgICAgIHJldHVybiAndmlkZW8nO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gVmlkZW9WaWV3O1xufShET01XaWRnZXRWaWV3KSk7XG5leHBvcnQgeyBWaWRlb1ZpZXcgfTtcbiIsIi8vIENvcHlyaWdodCAoYykgSnVweXRlciBEZXZlbG9wbWVudCBUZWFtLlxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNb2RpZmllZCBCU0QgTGljZW5zZS5cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IENvcmVEZXNjcmlwdGlvbk1vZGVsLCB9IGZyb20gJy4vd2lkZ2V0X2NvcmUnO1xuaW1wb3J0IHsgRGVzY3JpcHRpb25WaWV3LCBEZXNjcmlwdGlvblN0eWxlTW9kZWwgfSBmcm9tICcuL3dpZGdldF9kZXNjcmlwdGlvbic7XG5pbXBvcnQgeyB1dWlkIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xudmFyIFNlbGVjdGlvbk1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTZWxlY3Rpb25Nb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTZWxlY3Rpb25Nb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBTZWxlY3Rpb25Nb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7IF9tb2RlbF9uYW1lOiAnU2VsZWN0aW9uTW9kZWwnLCBpbmRleDogJycsIF9vcHRpb25zX2xhYmVsczogW10sIGRpc2FibGVkOiBmYWxzZSB9KTtcbiAgICB9O1xuICAgIHJldHVybiBTZWxlY3Rpb25Nb2RlbDtcbn0oQ29yZURlc2NyaXB0aW9uTW9kZWwpKTtcbmV4cG9ydCB7IFNlbGVjdGlvbk1vZGVsIH07XG52YXIgRHJvcGRvd25Nb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRHJvcGRvd25Nb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEcm9wZG93bk1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIERyb3Bkb3duTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwgeyBfbW9kZWxfbmFtZTogJ0Ryb3Bkb3duTW9kZWwnLCBfdmlld19uYW1lOiAnRHJvcGRvd25WaWV3JywgYnV0dG9uX3N0eWxlOiAnJyB9KTtcbiAgICB9O1xuICAgIHJldHVybiBEcm9wZG93bk1vZGVsO1xufShTZWxlY3Rpb25Nb2RlbCkpO1xuZXhwb3J0IHsgRHJvcGRvd25Nb2RlbCB9O1xuLy8gVE9ETzogTWFrZSBhIHBob3NwaG9yIGRyb3Bkb3duIGNvbnRyb2wsIHdyYXBwZWQgaW4gRHJvcGRvd25WaWV3LiBBbHNvLCBmaXhcbi8vIGJ1Z3MgaW4ga2V5Ym9hcmQgaGFuZGxpbmcuIFNlZVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2p1cHl0ZXItd2lkZ2V0cy9pcHl3aWRnZXRzL2lzc3Vlcy8xMDU1IGFuZFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2p1cHl0ZXItd2lkZ2V0cy9pcHl3aWRnZXRzL2lzc3Vlcy8xMDQ5XG4vLyBGb3Igbm93LCB3ZSBzdWJjbGFzcyBTZWxlY3RWaWV3IHRvIHByb3ZpZGUgRHJvcGRvd25WaWV3XG4vLyBGb3IgdGhlIG9sZCBjb2RlLCBzZWUgY29tbWl0IGY2OGJmYmM1NjZmM2E3OGE4ZjMzNTBiNDM4ZGI4ZWQ1MjNjZTM2NDJcbnZhciBEcm9wZG93blZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERyb3Bkb3duVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEcm9wZG93blZpZXcoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHVibGljIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIERyb3Bkb3duVmlldy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChwYXJhbWV0ZXJzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIHBhcmFtZXRlcnMpO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6X29wdGlvbnNfbGFiZWxzJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX3VwZGF0ZU9wdGlvbnMoKTsgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB2aWV3IGlzIHJlbmRlcmVkLlxuICAgICAqL1xuICAgIERyb3Bkb3duVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItd2lkZ2V0cycpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1pbmxpbmUtaGJveCcpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1kcm9wZG93bicpO1xuICAgICAgICB0aGlzLmxpc3Rib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgdGhpcy5saXN0Ym94LmlkID0gdGhpcy5sYWJlbC5odG1sRm9yID0gdXVpZCgpO1xuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMubGlzdGJveCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU9wdGlvbnMoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY29udGVudHMgb2YgdGhpcyB2aWV3XG4gICAgICovXG4gICAgRHJvcGRvd25WaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIERpc2FibGUgbGlzdGJveCBpZiBuZWVkZWRcbiAgICAgICAgdGhpcy5saXN0Ym94LmRpc2FibGVkID0gdGhpcy5tb2RlbC5nZXQoJ2Rpc2FibGVkJyk7XG4gICAgICAgIC8vIFNlbGVjdCB0aGUgY29ycmVjdCBlbGVtZW50XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMubW9kZWwuZ2V0KCdpbmRleCcpO1xuICAgICAgICB0aGlzLmxpc3Rib3guc2VsZWN0ZWRJbmRleCA9IGluZGV4ID09PSBudWxsID8gLTEgOiBpbmRleDtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBEcm9wZG93blZpZXcucHJvdG90eXBlLl91cGRhdGVPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmxpc3Rib3gudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5tb2RlbC5nZXQoJ19vcHRpb25zX2xhYmVscycpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gaXRlbS5yZXBsYWNlKC8gL2csICdcXHhhMCcpOyAvLyBzcGFjZSAtPiAmbmJzcDtcbiAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLCBlbmNvZGVVUklDb21wb25lbnQoaXRlbSkpO1xuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gaXRlbTtcbiAgICAgICAgICAgIHRoaXMubGlzdGJveC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEcm9wZG93blZpZXcucHJvdG90eXBlLmV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdjaGFuZ2Ugc2VsZWN0JzogJ19oYW5kbGVfY2hhbmdlJ1xuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlIHdoZW4gYSBuZXcgdmFsdWUgaXMgc2VsZWN0ZWQuXG4gICAgICovXG4gICAgRHJvcGRvd25WaWV3LnByb3RvdHlwZS5faGFuZGxlX2NoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ2luZGV4JywgdGhpcy5saXN0Ym94LnNlbGVjdGVkSW5kZXggPT09IC0xID8gbnVsbCA6IHRoaXMubGlzdGJveC5zZWxlY3RlZEluZGV4KTtcbiAgICAgICAgdGhpcy50b3VjaCgpO1xuICAgIH07XG4gICAgcmV0dXJuIERyb3Bkb3duVmlldztcbn0oRGVzY3JpcHRpb25WaWV3KSk7XG5leHBvcnQgeyBEcm9wZG93blZpZXcgfTtcbnZhciBTZWxlY3RNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2VsZWN0TW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2VsZWN0TW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgU2VsZWN0TW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwgeyBfbW9kZWxfbmFtZTogJ1NlbGVjdE1vZGVsJywgX3ZpZXdfbmFtZTogJ1NlbGVjdFZpZXcnLCByb3dzOiA1IH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFNlbGVjdE1vZGVsO1xufShTZWxlY3Rpb25Nb2RlbCkpO1xuZXhwb3J0IHsgU2VsZWN0TW9kZWwgfTtcbnZhciBTZWxlY3RWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTZWxlY3RWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNlbGVjdFZpZXcoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHVibGljIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIFNlbGVjdFZpZXcucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAocGFyYW1ldGVycykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmluaXRpYWxpemUuY2FsbCh0aGlzLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOl9vcHRpb25zX2xhYmVscycsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl91cGRhdGVPcHRpb25zKCk7IH0pO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6aW5kZXgnLCBmdW5jdGlvbiAobW9kZWwsIHZhbHVlLCBvcHRpb25zKSB7IHJldHVybiBfdGhpcy51cGRhdGVTZWxlY3Rpb24ob3B0aW9ucyk7IH0pO1xuICAgICAgICAvLyBDcmVhdGUgbGlzdGJveCBoZXJlIHNvIHRoYXQgc3ViY2xhc3NlcyBjYW4gbW9kaWZ5IGl0IGJlZm9yZSBpdCBpcyBwb3B1bGF0ZWQgaW4gcmVuZGVyKClcbiAgICAgICAgdGhpcy5saXN0Ym94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB2aWV3IGlzIHJlbmRlcmVkLlxuICAgICAqL1xuICAgIFNlbGVjdFZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLXdpZGdldHMnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtaW5saW5lLWhib3gnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtc2VsZWN0Jyk7XG4gICAgICAgIHRoaXMubGlzdGJveC5pZCA9IHRoaXMubGFiZWwuaHRtbEZvciA9IHV1aWQoKTtcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmxpc3Rib3gpO1xuICAgICAgICB0aGlzLl91cGRhdGVPcHRpb25zKCk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGNvbnRlbnRzIG9mIHRoaXMgdmlld1xuICAgICAqL1xuICAgIFNlbGVjdFZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5saXN0Ym94LmRpc2FibGVkID0gdGhpcy5tb2RlbC5nZXQoJ2Rpc2FibGVkJyk7XG4gICAgICAgIHZhciByb3dzID0gdGhpcy5tb2RlbC5nZXQoJ3Jvd3MnKTtcbiAgICAgICAgaWYgKHJvd3MgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJvd3MgPSAnJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpc3Rib3guc2V0QXR0cmlidXRlKCdzaXplJywgcm93cyk7XG4gICAgfTtcbiAgICBTZWxlY3RWaWV3LnByb3RvdHlwZS51cGRhdGVTZWxlY3Rpb24gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICBpZiAob3B0aW9ucy51cGRhdGVkX3ZpZXcgPT09IHRoaXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLm1vZGVsLmdldCgnaW5kZXgnKTtcbiAgICAgICAgdGhpcy5saXN0Ym94LnNlbGVjdGVkSW5kZXggPSBpbmRleCA9PT0gbnVsbCA/IC0xIDogaW5kZXg7XG4gICAgfTtcbiAgICBTZWxlY3RWaWV3LnByb3RvdHlwZS5fdXBkYXRlT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5saXN0Ym94LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMubW9kZWwuZ2V0KCdfb3B0aW9uc19sYWJlbHMnKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0ucmVwbGFjZSgvIC9nLCAnXFx4YTAnKTsgLy8gc3BhY2UgLT4gJm5ic3A7XG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgZW5jb2RlVVJJQ29tcG9uZW50KGl0ZW0pKTtcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGl0ZW07XG4gICAgICAgICAgICB0aGlzLmxpc3Rib3guYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2VsZWN0Vmlldy5wcm90b3R5cGUuZXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ2NoYW5nZSBzZWxlY3QnOiAnX2hhbmRsZV9jaGFuZ2UnXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGUgd2hlbiBhIG5ldyB2YWx1ZSBpcyBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBTZWxlY3RWaWV3LnByb3RvdHlwZS5faGFuZGxlX2NoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ2luZGV4JywgdGhpcy5saXN0Ym94LnNlbGVjdGVkSW5kZXgsIHsgdXBkYXRlZF92aWV3OiB0aGlzIH0pO1xuICAgICAgICB0aGlzLnRvdWNoKCk7XG4gICAgfTtcbiAgICByZXR1cm4gU2VsZWN0Vmlldztcbn0oRGVzY3JpcHRpb25WaWV3KSk7XG5leHBvcnQgeyBTZWxlY3RWaWV3IH07XG52YXIgUmFkaW9CdXR0b25zTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFJhZGlvQnV0dG9uc01vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJhZGlvQnV0dG9uc01vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFJhZGlvQnV0dG9uc01vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKHt9LCBfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHsgX21vZGVsX25hbWU6ICdSYWRpb0J1dHRvbnNNb2RlbCcsIF92aWV3X25hbWU6ICdSYWRpb0J1dHRvbnNWaWV3JywgdG9vbHRpcHM6IFtdLCBpY29uczogW10sIGJ1dHRvbl9zdHlsZTogJycgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gUmFkaW9CdXR0b25zTW9kZWw7XG59KFNlbGVjdGlvbk1vZGVsKSk7XG5leHBvcnQgeyBSYWRpb0J1dHRvbnNNb2RlbCB9O1xudmFyIFJhZGlvQnV0dG9uc1ZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFJhZGlvQnV0dG9uc1ZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUmFkaW9CdXR0b25zVmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB2aWV3IGlzIHJlbmRlcmVkLlxuICAgICAqL1xuICAgIFJhZGlvQnV0dG9uc1ZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLXdpZGdldHMnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtaW5saW5lLWhib3gnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtcmFkaW8nKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1yYWRpby1ib3gnKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY29udGVudHMgb2YgdGhpcyB2aWV3XG4gICAgICpcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgbW9kZWwgaXMgY2hhbmdlZC4gIFRoZSBtb2RlbCBtYXkgaGF2ZSBiZWVuXG4gICAgICogY2hhbmdlZCBieSBhbm90aGVyIHZpZXcgb3IgYnkgYSBzdGF0ZSB1cGRhdGUgZnJvbSB0aGUgYmFjay1lbmQuXG4gICAgICovXG4gICAgUmFkaW9CdXR0b25zVmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHZpZXcgPSB0aGlzO1xuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLm1vZGVsLmdldCgnX29wdGlvbnNfbGFiZWxzJyk7XG4gICAgICAgIHZhciByYWRpb3MgPSBfLnBsdWNrKHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpLCAndmFsdWUnKTtcbiAgICAgICAgdmFyIHN0YWxlID0gaXRlbXMubGVuZ3RoICE9IHJhZGlvcy5sZW5ndGg7XG4gICAgICAgIGlmICghc3RhbGUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBpdGVtcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgICAgIGlmIChyYWRpb3NbaV0gIT09IGl0ZW1zW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YWxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFsZSAmJiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMudXBkYXRlZF92aWV3ICE9PSB0aGlzKSkge1xuICAgICAgICAgICAgLy8gQWRkIGl0ZW1zIHRvIHRoZSBET00uXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgICAgICAgICAgICB2aWV3LmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICAgICAgICAgICAgICByYWRpby52YWx1ZSA9IGluZGV4LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgZW5jb2RlVVJJQ29tcG9uZW50KGl0ZW0pKTtcbiAgICAgICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChyYWRpbyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGl0ZW1fcXVlcnkgPSAnaW5wdXRbZGF0YS12YWx1ZT1cIicgK1xuICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChpdGVtKSArICdcIl0nO1xuICAgICAgICAgICAgdmFyIHJhZGlvID0gdmlldy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChpdGVtX3F1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyYWRpby5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJhZGlvX2VsID0gcmFkaW9bMF07XG4gICAgICAgICAgICAgICAgcmFkaW9fZWwuY2hlY2tlZCA9IHZpZXcubW9kZWwuZ2V0KCdpbmRleCcpID09PSBpbmRleDtcbiAgICAgICAgICAgICAgICByYWRpb19lbC5kaXNhYmxlZCA9IHZpZXcubW9kZWwuZ2V0KCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gU2NoZWR1bGUgYWRqdXN0UGFkZGluZyBhc3luY2hyb25vdXNseSB0b1xuICAgICAgICAvLyBhbGxvdyBkb20gZWxlbWVudHMgdG8gYmUgY3JlYXRlZCBwcm9wZXJseVxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuYWRqdXN0UGFkZGluZywgMCwgdGhpcyk7XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRqdXN0IFBhZGRpbmcgdG8gTXVsdGlwbGUgb2YgTGluZSBIZWlnaHRcbiAgICAgKlxuICAgICAqIEFkanVzdCBtYXJnaW5zIHNvIHRoYXQgdGhlIG92ZXJhbGwgaGVpZ2h0XG4gICAgICogaXMgYSBtdWx0aXBsZSBvZiBhIHNpbmdsZSBsaW5lIGhlaWdodC5cbiAgICAgKlxuICAgICAqIFRoaXMgd2lkZ2V0IG5lZWRzIGl0IGJlY2F1c2UgcmFkaW8gb3B0aW9uc1xuICAgICAqIGFyZSBzcGFjZWQgdGlnaHRlciB0aGFuIGluZGl2aWR1YWwgd2lkZ2V0c1xuICAgICAqIHlldCB3ZSB3b3VsZCBsaWtlIHRoZSBmdWxsIHdpZGdldCBsaW5lIHVwIHByb3Blcmx5XG4gICAgICogd2hlbiBkaXNwbGF5ZWQgc2lkZS1ieS1zaWRlIHdpdGggb3RoZXIgd2lkZ2V0cy5cbiAgICAgKi9cbiAgICBSYWRpb0J1dHRvbnNWaWV3LnByb3RvdHlwZS5hZGp1c3RQYWRkaW5nID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gVmVydGljYWwgbWFyZ2lucyBvbiBhIHdpZGdldFxuICAgICAgICB2YXIgZWxTdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlLmVsKTtcbiAgICAgICAgdmFyIG1hcmdpbnMgPSBwYXJzZUludChlbFN0eWxlcy5tYXJnaW5Ub3AsIDEwKSArIHBhcnNlSW50KGVsU3R5bGVzLm1hcmdpbkJvdHRvbSwgMTApO1xuICAgICAgICAvLyBUb3RhbCBzcGFjZXMgdGFrZW4gYnkgYSBzaW5nbGUtbGluZSB3aWRnZXRcbiAgICAgICAgdmFyIGxpbmVIZWlnaHQgPSBlLmxhYmVsLm9mZnNldEhlaWdodCArIG1hcmdpbnM7XG4gICAgICAgIC8vIEN1cnJlbnQgYWRqdXN0bWVudCB2YWx1ZSBvbiB0aGlzIHdpZGdldFxuICAgICAgICB2YXIgY1N0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUuY29udGFpbmVyKTtcbiAgICAgICAgdmFyIGNvbnRhaW5lck1hcmdpbiA9IHBhcnNlSW50KGNTdHlsZXMubWFyZ2luQm90dG9tKTtcbiAgICAgICAgLy8gSG93IGZhciB3ZSBhcmUgb2ZmIGZyb20gYSBtdWx0aXBsZSBvZiBzaW5nbGUgd2luZGdldCBsaW5lc1xuICAgICAgICB2YXIgZGlmZiA9IChlLmVsLm9mZnNldEhlaWdodCArIG1hcmdpbnMgLSBjb250YWluZXJNYXJnaW4pICUgbGluZUhlaWdodDtcbiAgICAgICAgLy8gQXBwbHkgdGhlIG5ldyBhZGp1c3RtZW50XG4gICAgICAgIHZhciBleHRyYU1hcmdpbiA9IGRpZmYgPT0gMCA/IDAgOiAobGluZUhlaWdodCAtIGRpZmYpO1xuICAgICAgICBlLmNvbnRhaW5lci5zdHlsZS5tYXJnaW5Cb3R0b20gPSBleHRyYU1hcmdpbiArICdweCc7XG4gICAgfTtcbiAgICBSYWRpb0J1dHRvbnNWaWV3LnByb3RvdHlwZS5ldmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnY2xpY2sgaW5wdXRbdHlwZT1cInJhZGlvXCJdJzogJ19oYW5kbGVfY2xpY2snXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGUgd2hlbiBhIHZhbHVlIGlzIGNsaWNrZWQuXG4gICAgICpcbiAgICAgKiBDYWxsaW5nIG1vZGVsLnNldCB3aWxsIHRyaWdnZXIgYWxsIG9mIHRoZSBvdGhlciB2aWV3cyBvZiB0aGVcbiAgICAgKiBtb2RlbCB0byB1cGRhdGUuXG4gICAgICovXG4gICAgUmFkaW9CdXR0b25zVmlldy5wcm90b3R5cGUuX2hhbmRsZV9jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICB0aGlzLm1vZGVsLnNldCgnaW5kZXgnLCBwYXJzZUludCh0YXJnZXQudmFsdWUpLCB7IHVwZGF0ZWRfdmlldzogdGhpcyB9KTtcbiAgICAgICAgdGhpcy50b3VjaCgpO1xuICAgIH07XG4gICAgcmV0dXJuIFJhZGlvQnV0dG9uc1ZpZXc7XG59KERlc2NyaXB0aW9uVmlldykpO1xuZXhwb3J0IHsgUmFkaW9CdXR0b25zVmlldyB9O1xudmFyIFRvZ2dsZUJ1dHRvbnNTdHlsZU1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUb2dnbGVCdXR0b25zU3R5bGVNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUb2dnbGVCdXR0b25zU3R5bGVNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBUb2dnbGVCdXR0b25zU3R5bGVNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnVG9nZ2xlQnV0dG9uc1N0eWxlTW9kZWwnLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFRvZ2dsZUJ1dHRvbnNTdHlsZU1vZGVsLnN0eWxlUHJvcGVydGllcyA9IF9fYXNzaWduKHt9LCBEZXNjcmlwdGlvblN0eWxlTW9kZWwuc3R5bGVQcm9wZXJ0aWVzLCB7IGJ1dHRvbl93aWR0aDoge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcud2lkZ2V0LXRvZ2dsZS1idXR0b24nLFxuICAgICAgICAgICAgYXR0cmlidXRlOiAnd2lkdGgnLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9LCBmb250X3dlaWdodDoge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcud2lkZ2V0LXRvZ2dsZS1idXR0b24nLFxuICAgICAgICAgICAgYXR0cmlidXRlOiAnZm9udC13ZWlnaHQnLFxuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfSB9KTtcbiAgICByZXR1cm4gVG9nZ2xlQnV0dG9uc1N0eWxlTW9kZWw7XG59KERlc2NyaXB0aW9uU3R5bGVNb2RlbCkpO1xuZXhwb3J0IHsgVG9nZ2xlQnV0dG9uc1N0eWxlTW9kZWwgfTtcbnZhciBUb2dnbGVCdXR0b25zTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRvZ2dsZUJ1dHRvbnNNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUb2dnbGVCdXR0b25zTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgVG9nZ2xlQnV0dG9uc01vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKHt9LCBfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHsgX21vZGVsX25hbWU6ICdUb2dnbGVCdXR0b25zTW9kZWwnLCBfdmlld19uYW1lOiAnVG9nZ2xlQnV0dG9uc1ZpZXcnIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFRvZ2dsZUJ1dHRvbnNNb2RlbDtcbn0oU2VsZWN0aW9uTW9kZWwpKTtcbmV4cG9ydCB7IFRvZ2dsZUJ1dHRvbnNNb2RlbCB9O1xudmFyIFRvZ2dsZUJ1dHRvbnNWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUb2dnbGVCdXR0b25zVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUb2dnbGVCdXR0b25zVmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBUb2dnbGVCdXR0b25zVmlldy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX2Nzc19zdGF0ZSA9IHt9O1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmluaXRpYWxpemUuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOmJ1dHRvbl9zdHlsZScsIHRoaXMudXBkYXRlX2J1dHRvbl9zdHlsZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB2aWV3IGlzIHJlbmRlcmVkLlxuICAgICAqL1xuICAgIFRvZ2dsZUJ1dHRvbnNWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnanVweXRlci13aWRnZXRzJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LXRvZ2dsZS1idXR0b25zJyk7XG4gICAgICAgIHRoaXMuYnV0dG9uZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbmdyb3VwKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5zZXRfYnV0dG9uX3N0eWxlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGNvbnRlbnRzIG9mIHRoaXMgdmlld1xuICAgICAqXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIG1vZGVsIGlzIGNoYW5nZWQuICBUaGUgbW9kZWwgbWF5IGhhdmUgYmVlblxuICAgICAqIGNoYW5nZWQgYnkgYW5vdGhlciB2aWV3IG9yIGJ5IGEgc3RhdGUgdXBkYXRlIGZyb20gdGhlIGJhY2stZW5kLlxuICAgICAqL1xuICAgIFRvZ2dsZUJ1dHRvbnNWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgdmlldyA9IHRoaXM7XG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMubW9kZWwuZ2V0KCdfb3B0aW9uc19sYWJlbHMnKTtcbiAgICAgICAgdmFyIGljb25zID0gdGhpcy5tb2RlbC5nZXQoJ2ljb25zJykgfHwgW107XG4gICAgICAgIHZhciBwcmV2aW91c19pY29ucyA9IHRoaXMubW9kZWwucHJldmlvdXMoJ2ljb25zJykgfHwgW107XG4gICAgICAgIHZhciBwcmV2aW91c19ic3R5bGUgPSBUb2dnbGVCdXR0b25zVmlldy5jbGFzc01hcFt0aGlzLm1vZGVsLnByZXZpb3VzKCdidXR0b25fc3R5bGUnKV0gfHwgJyc7XG4gICAgICAgIHZhciB0b29sdGlwcyA9IHZpZXcubW9kZWwuZ2V0KCd0b29sdGlwcycpIHx8IFtdO1xuICAgICAgICB2YXIgZGlzYWJsZWQgPSB0aGlzLm1vZGVsLmdldCgnZGlzYWJsZWQnKTtcbiAgICAgICAgdmFyIGJ1dHRvbnMgPSB0aGlzLmJ1dHRvbmdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuICAgICAgICB2YXIgdmFsdWVzID0gXy5wbHVjayhidXR0b25zLCAndmFsdWUnKTtcbiAgICAgICAgdmFyIHN0YWxlID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBpdGVtcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlc1tpXSAhPT0gaXRlbXNbaV0gfHwgaWNvbnNbaV0gIT09IHByZXZpb3VzX2ljb25zW2ldKSB7XG4gICAgICAgICAgICAgICAgc3RhbGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFsZSAmJiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMudXBkYXRlZF92aWV3ICE9PSB0aGlzKSkge1xuICAgICAgICAgICAgLy8gQWRkIGl0ZW1zIHRvIHRoZSBET00uXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbmdyb3VwLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtX2h0bWw7XG4gICAgICAgICAgICAgICAgdmFyIGVtcHR5ID0gaXRlbS50cmltKCkubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICAgICAgICAgICghaWNvbnNbaW5kZXhdIHx8IGljb25zW2luZGV4XS50cmltKCkubGVuZ3RoID09PSAwKTtcbiAgICAgICAgICAgICAgICBpZiAoZW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbV9odG1sID0gJyZuYnNwOyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtX2h0bWwgPSB1dGlscy5lc2NhcGVfaHRtbChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICAgICAgICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGlmIChpY29uc1tpbmRleF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5jbGFzc05hbWUgPSAnZmEgZmEtJyArIGljb25zW2luZGV4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gJ3dpZGdldC10b2dnbGUtYnV0dG9uIGp1cHl0ZXItYnV0dG9uJztcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNfYnN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHByZXZpb3VzX2JzdHlsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBpdGVtX2h0bWw7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScsIGVuY29kZVVSSUNvbXBvbmVudChpdGVtKSk7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpbmRleC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICAgICAgICAgICAgaWYgKHRvb2x0aXBzW2luZGV4XSkge1xuICAgICAgICAgICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0aXRsZScsIHRvb2x0aXBzW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZpZXcudXBkYXRlX3N0eWxlX3RyYWl0cyhidXR0b24pO1xuICAgICAgICAgICAgICAgIHZpZXcuYnV0dG9uZ3JvdXAuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNlbGVjdCBhY3RpdmUgYnV0dG9uLlxuICAgICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGl0ZW1fcXVlcnkgPSAnW2RhdGEtdmFsdWU9XCInICsgZW5jb2RlVVJJQ29tcG9uZW50KGl0ZW0pICsgJ1wiXSc7XG4gICAgICAgICAgICB2YXIgYnV0dG9uID0gdmlldy5idXR0b25ncm91cC5xdWVyeVNlbGVjdG9yKGl0ZW1fcXVlcnkpO1xuICAgICAgICAgICAgaWYgKHZpZXcubW9kZWwuZ2V0KCdpbmRleCcpID09PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtb2QtYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbW9kLWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdHlsZVByb21pc2UudGhlbihmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgICAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICAgICAgICAgIHN0eWxlLnN0eWxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIFRvZ2dsZUJ1dHRvbnNWaWV3LnByb3RvdHlwZS51cGRhdGVfc3R5bGVfdHJhaXRzID0gZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgICAgICBmb3IgKHZhciBuYW1lXzEgaW4gdGhpcy5fY3NzX3N0YXRlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY3NzX3N0YXRlLmhhc093blByb3BlcnR5KG5hbWVfMSkpIHtcbiAgICAgICAgICAgICAgICBpZiAobmFtZV8xID09PSAnbWFyZ2luJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbmdyb3VwLnN0eWxlW25hbWVfMV0gPSB0aGlzLl9jc3Nfc3RhdGVbbmFtZV8xXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmFtZV8xICE9PSAnd2lkdGgnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5zdHlsZVtuYW1lXzFdID0gdGhpcy5fY3NzX3N0YXRlW25hbWVfMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYnV0dG9ucyA9IHRoaXMuYnV0dG9uZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnV0dG9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYnV0dG9uc1swXSkuc3R5bGVbbmFtZV8xXSA9IHRoaXMuX2Nzc19zdGF0ZVtuYW1lXzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2dnbGVCdXR0b25zVmlldy5wcm90b3R5cGUudXBkYXRlX2J1dHRvbl9zdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJ1dHRvbnMgPSB0aGlzLmJ1dHRvbmdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlX21hcHBlZF9jbGFzc2VzKFRvZ2dsZUJ1dHRvbnNWaWV3LmNsYXNzTWFwLCAnYnV0dG9uX3N0eWxlJywgYnV0dG9uc1tpXSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRvZ2dsZUJ1dHRvbnNWaWV3LnByb3RvdHlwZS5zZXRfYnV0dG9uX3N0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYnV0dG9ucyA9IHRoaXMuYnV0dG9uZ3JvdXAucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zZXRfbWFwcGVkX2NsYXNzZXMoVG9nZ2xlQnV0dG9uc1ZpZXcuY2xhc3NNYXAsICdidXR0b25fc3R5bGUnLCBidXR0b25zW2ldKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9nZ2xlQnV0dG9uc1ZpZXcucHJvdG90eXBlLmV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdjbGljayBidXR0b24nOiAnX2hhbmRsZV9jbGljaydcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZSB3aGVuIGEgdmFsdWUgaXMgY2xpY2tlZC5cbiAgICAgKlxuICAgICAqIENhbGxpbmcgbW9kZWwuc2V0IHdpbGwgdHJpZ2dlciBhbGwgb2YgdGhlIG90aGVyIHZpZXdzIG9mIHRoZVxuICAgICAqIG1vZGVsIHRvIHVwZGF0ZS5cbiAgICAgKi9cbiAgICBUb2dnbGVCdXR0b25zVmlldy5wcm90b3R5cGUuX2hhbmRsZV9jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICB0aGlzLm1vZGVsLnNldCgnaW5kZXgnLCBwYXJzZUludCh0YXJnZXQudmFsdWUsIDEwKSwgeyB1cGRhdGVkX3ZpZXc6IHRoaXMgfSk7XG4gICAgICAgIHRoaXMudG91Y2goKTtcbiAgICAgICAgLy8gV2UgYWxzbyBzZW5kIGEgY2xpY2tlZCBldmVudCwgc2luY2UgdGhlIHZhbHVlIGlzIG9ubHkgc2V0IGlmIGl0IGNoYW5nZWQuXG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vanVweXRlci13aWRnZXRzL2lweXdpZGdldHMvaXNzdWVzLzc2M1xuICAgICAgICB0aGlzLnNlbmQoeyBldmVudDogJ2NsaWNrJyB9KTtcbiAgICB9O1xuICAgIHJldHVybiBUb2dnbGVCdXR0b25zVmlldztcbn0oRGVzY3JpcHRpb25WaWV3KSk7XG5leHBvcnQgeyBUb2dnbGVCdXR0b25zVmlldyB9O1xuKGZ1bmN0aW9uIChUb2dnbGVCdXR0b25zVmlldykge1xuICAgIFRvZ2dsZUJ1dHRvbnNWaWV3LmNsYXNzTWFwID0ge1xuICAgICAgICBwcmltYXJ5OiBbJ21vZC1wcmltYXJ5J10sXG4gICAgICAgIHN1Y2Nlc3M6IFsnbW9kLXN1Y2Nlc3MnXSxcbiAgICAgICAgaW5mbzogWydtb2QtaW5mbyddLFxuICAgICAgICB3YXJuaW5nOiBbJ21vZC13YXJuaW5nJ10sXG4gICAgICAgIGRhbmdlcjogWydtb2QtZGFuZ2VyJ11cbiAgICB9O1xufSkoVG9nZ2xlQnV0dG9uc1ZpZXcgfHwgKFRvZ2dsZUJ1dHRvbnNWaWV3ID0ge30pKTtcbnZhciBTZWxlY3Rpb25TbGlkZXJNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2VsZWN0aW9uU2xpZGVyTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2VsZWN0aW9uU2xpZGVyTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgU2VsZWN0aW9uU2xpZGVyTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwgeyBfbW9kZWxfbmFtZTogJ1NlbGVjdGlvblNsaWRlck1vZGVsJywgX3ZpZXdfbmFtZTogJ1NlbGVjdGlvblNsaWRlclZpZXcnLCBvcmllbnRhdGlvbjogJ2hvcml6b250YWwnLCByZWFkb3V0OiB0cnVlLCBjb250aW51b3VzX3VwZGF0ZTogdHJ1ZSB9KTtcbiAgICB9O1xuICAgIHJldHVybiBTZWxlY3Rpb25TbGlkZXJNb2RlbDtcbn0oU2VsZWN0aW9uTW9kZWwpKTtcbmV4cG9ydCB7IFNlbGVjdGlvblNsaWRlck1vZGVsIH07XG52YXIgU2VsZWN0aW9uU2xpZGVyVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2VsZWN0aW9uU2xpZGVyVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTZWxlY3Rpb25TbGlkZXJWaWV3KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHZpZXcgaXMgcmVuZGVyZWQuXG4gICAgICovXG4gICAgU2VsZWN0aW9uU2xpZGVyVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItd2lkZ2V0cycpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1pbmxpbmUtaGJveCcpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1oc2xpZGVyJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LXNsaWRlcicpO1xuICAgICAgICAodGhpcy4kc2xpZGVyID0gJCgnPGRpdiAvPicpKVxuICAgICAgICAgICAgLnNsaWRlcih7XG4gICAgICAgICAgICBzbGlkZTogdGhpcy5oYW5kbGVTbGlkZXJDaGFuZ2UuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHN0b3A6IHRoaXMuaGFuZGxlU2xpZGVyQ2hhbmdlZC5iaW5kKHRoaXMpXG4gICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWRlcicpO1xuICAgICAgICAvLyBQdXQgdGhlIHNsaWRlciBpbiBhIGNvbnRhaW5lclxuICAgICAgICB0aGlzLnNsaWRlcl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5zbGlkZXJfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlci1jb250YWluZXInKTtcbiAgICAgICAgdGhpcy5zbGlkZXJfY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuJHNsaWRlclswXSk7XG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5zbGlkZXJfY29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5yZWFkb3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5yZWFkb3V0KTtcbiAgICAgICAgdGhpcy5yZWFkb3V0LmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1yZWFkb3V0Jyk7XG4gICAgICAgIHRoaXMucmVhZG91dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6c2xpZGVyX2NvbG9yJywgZnVuY3Rpb24gKHNlbmRlciwgdmFsdWUpIHtcbiAgICAgICAgICAgIF90aGlzLiRzbGlkZXIuZmluZCgnYScpLmNzcygnYmFja2dyb3VuZCcsIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJHNsaWRlci5maW5kKCdhJykuY3NzKCdiYWNrZ3JvdW5kJywgdGhpcy5tb2RlbC5nZXQoJ3NsaWRlcl9jb2xvcicpKTtcbiAgICAgICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcbiAgICAgKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBtb2RlbCBpcyBjaGFuZ2VkLiAgVGhlIG1vZGVsIG1heSBoYXZlIGJlZW5cbiAgICAgKiBjaGFuZ2VkIGJ5IGFub3RoZXIgdmlldyBvciBieSBhIHN0YXRlIHVwZGF0ZSBmcm9tIHRoZSBiYWNrLWVuZC5cbiAgICAgKi9cbiAgICBTZWxlY3Rpb25TbGlkZXJWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMudXBkYXRlZF92aWV3ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICB2YXIgbGFiZWxzID0gdGhpcy5tb2RlbC5nZXQoJ19vcHRpb25zX2xhYmVscycpO1xuICAgICAgICAgICAgdmFyIG1heCA9IGxhYmVscy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgdmFyIG1pbiA9IDA7XG4gICAgICAgICAgICB0aGlzLiRzbGlkZXIuc2xpZGVyKCdvcHRpb24nLCAnc3RlcCcsIDEpO1xuICAgICAgICAgICAgdGhpcy4kc2xpZGVyLnNsaWRlcignb3B0aW9uJywgJ21heCcsIG1heCk7XG4gICAgICAgICAgICB0aGlzLiRzbGlkZXIuc2xpZGVyKCdvcHRpb24nLCAnbWluJywgbWluKTtcbiAgICAgICAgICAgIC8vIFdPUktBUk9VTkQgRk9SIEpRVUVSWSBTTElERVIgQlVHLlxuICAgICAgICAgICAgLy8gVGhlIGhvcml6b250YWwgcG9zaXRpb24gb2YgdGhlIHNsaWRlciBoYW5kbGVcbiAgICAgICAgICAgIC8vIGRlcGVuZHMgb24gdGhlIHZhbHVlIG9mIHRoZSBzbGlkZXIgYXQgdGhlIHRpbWVcbiAgICAgICAgICAgIC8vIG9mIG9yaWVudGF0aW9uIGNoYW5nZS4gIEJlZm9yZSBhcHBseWluZyB0aGUgbmV3XG4gICAgICAgICAgICAvLyB3b3JrYXJvdW5kLCB3ZSBzZXQgdGhlIHZhbHVlIHRvIHRoZSBtaW5pbXVtIHRvXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCB0aGUgaG9yaXpvbnRhbCBwbGFjZW1lbnQgb2YgdGhlXG4gICAgICAgICAgICAvLyBoYW5kbGUgaW4gdGhlIHZlcnRpY2FsIHNsaWRlciBpcyBhbHdheXNcbiAgICAgICAgICAgIC8vIGNvbnNpc3RlbnQuXG4gICAgICAgICAgICB2YXIgb3JpZW50YXRpb25fMSA9IHRoaXMubW9kZWwuZ2V0KCdvcmllbnRhdGlvbicpO1xuICAgICAgICAgICAgdGhpcy4kc2xpZGVyLnNsaWRlcignb3B0aW9uJywgJ3ZhbHVlJywgbWluKTtcbiAgICAgICAgICAgIHRoaXMuJHNsaWRlci5zbGlkZXIoJ29wdGlvbicsICdvcmllbnRhdGlvbicsIG9yaWVudGF0aW9uXzEpO1xuICAgICAgICAgICAgdmFyIGRpc2FibGVkID0gdGhpcy5tb2RlbC5nZXQoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICB0aGlzLiRzbGlkZXIuc2xpZGVyKCdvcHRpb24nLCAnZGlzYWJsZWQnLCBkaXNhYmxlZCk7XG4gICAgICAgICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRvdXQuY29udGVudEVkaXRhYmxlID0gJ2ZhbHNlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZG91dC5jb250ZW50RWRpdGFibGUgPSAndHJ1ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVc2UgdGhlIHJpZ2h0IENTUyBjbGFzc2VzIGZvciB2ZXJ0aWNhbCAmIGhvcml6b250YWwgc2xpZGVyc1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uXzEgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3dpZGdldC1oc2xpZGVyJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd3aWRnZXQtaW5saW5lLWhib3gnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC12c2xpZGVyJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtaW5saW5lLXZib3gnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnd2lkZ2V0LXZzbGlkZXInKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3dpZGdldC1pbmxpbmUtdmJveCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWhzbGlkZXInKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1pbmxpbmUtaGJveCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlYWRvdXQgPSB0aGlzLm1vZGVsLmdldCgncmVhZG91dCcpO1xuICAgICAgICAgICAgaWYgKHJlYWRvdXQpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLiRyZWFkb3V0LnNob3coKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRvdXQuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy4kcmVhZG91dC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkb3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgU2VsZWN0aW9uU2xpZGVyVmlldy5wcm90b3R5cGUuZXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3NsaWRlJzogJ2hhbmRsZVNsaWRlckNoYW5nZScsXG4gICAgICAgICAgICAnc2xpZGVzdG9wJzogJ2hhbmRsZVNsaWRlckNoYW5nZWQnXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBTZWxlY3Rpb25TbGlkZXJWaWV3LnByb3RvdHlwZS51cGRhdGVTZWxlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMubW9kZWwuZ2V0KCdpbmRleCcpO1xuICAgICAgICB0aGlzLiRzbGlkZXIuc2xpZGVyKCdvcHRpb24nLCAndmFsdWUnLCBpbmRleCk7XG4gICAgICAgIHRoaXMudXBkYXRlUmVhZG91dChpbmRleCk7XG4gICAgfTtcbiAgICBTZWxlY3Rpb25TbGlkZXJWaWV3LnByb3RvdHlwZS51cGRhdGVSZWFkb3V0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMubW9kZWwuZ2V0KCdfb3B0aW9uc19sYWJlbHMnKVtpbmRleF07XG4gICAgICAgIHRoaXMucmVhZG91dC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIHNsaWRlciB2YWx1ZSBpcyBjaGFuZ2luZy5cbiAgICAgKi9cbiAgICBTZWxlY3Rpb25TbGlkZXJWaWV3LnByb3RvdHlwZS5oYW5kbGVTbGlkZXJDaGFuZ2UgPSBmdW5jdGlvbiAoZSwgdWkpIHtcbiAgICAgICAgdGhpcy51cGRhdGVSZWFkb3V0KHVpLnZhbHVlKTtcbiAgICAgICAgLy8gT25seSBwZXJzaXN0IHRoZSB2YWx1ZSB3aGlsZSBzbGlkaW5nIGlmIHRoZSBjb250aW51b3VzX3VwZGF0ZVxuICAgICAgICAvLyB0cmFpdCBpcyBzZXQgdG8gdHJ1ZS5cbiAgICAgICAgaWYgKHRoaXMubW9kZWwuZ2V0KCdjb250aW51b3VzX3VwZGF0ZScpKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNsaWRlckNoYW5nZWQoZSwgdWkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgc2xpZGVyIHZhbHVlIGhhcyBjaGFuZ2VkLlxuICAgICAqXG4gICAgICogQ2FsbGluZyBtb2RlbC5zZXQgd2lsbCB0cmlnZ2VyIGFsbCBvZiB0aGUgb3RoZXIgdmlld3Mgb2YgdGhlXG4gICAgICogbW9kZWwgdG8gdXBkYXRlLlxuICAgICAqL1xuICAgIFNlbGVjdGlvblNsaWRlclZpZXcucHJvdG90eXBlLmhhbmRsZVNsaWRlckNoYW5nZWQgPSBmdW5jdGlvbiAoZSwgdWkpIHtcbiAgICAgICAgdGhpcy51cGRhdGVSZWFkb3V0KHVpLnZhbHVlKTtcbiAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ2luZGV4JywgdWkudmFsdWUsIHsgdXBkYXRlZF92aWV3OiB0aGlzIH0pO1xuICAgICAgICB0aGlzLnRvdWNoKCk7XG4gICAgfTtcbiAgICByZXR1cm4gU2VsZWN0aW9uU2xpZGVyVmlldztcbn0oRGVzY3JpcHRpb25WaWV3KSk7XG5leHBvcnQgeyBTZWxlY3Rpb25TbGlkZXJWaWV3IH07XG52YXIgTXVsdGlwbGVTZWxlY3Rpb25Nb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTXVsdGlwbGVTZWxlY3Rpb25Nb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNdWx0aXBsZVNlbGVjdGlvbk1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE11bHRpcGxlU2VsZWN0aW9uTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwgeyBfbW9kZWxfbmFtZTogJ011bHRpcGxlU2VsZWN0aW9uTW9kZWwnIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIE11bHRpcGxlU2VsZWN0aW9uTW9kZWw7XG59KFNlbGVjdGlvbk1vZGVsKSk7XG5leHBvcnQgeyBNdWx0aXBsZVNlbGVjdGlvbk1vZGVsIH07XG52YXIgU2VsZWN0TXVsdGlwbGVNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2VsZWN0TXVsdGlwbGVNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTZWxlY3RNdWx0aXBsZU1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFNlbGVjdE11bHRpcGxlTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwgeyBfbW9kZWxfbmFtZTogJ1NlbGVjdE11bHRpcGxlTW9kZWwnLCBfdmlld19uYW1lOiAnU2VsZWN0TXVsdGlwbGVWaWV3Jywgcm93czogbnVsbCB9KTtcbiAgICB9O1xuICAgIHJldHVybiBTZWxlY3RNdWx0aXBsZU1vZGVsO1xufShNdWx0aXBsZVNlbGVjdGlvbk1vZGVsKSk7XG5leHBvcnQgeyBTZWxlY3RNdWx0aXBsZU1vZGVsIH07XG52YXIgU2VsZWN0TXVsdGlwbGVWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTZWxlY3RNdWx0aXBsZVZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2VsZWN0TXVsdGlwbGVWaWV3KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICBTZWxlY3RNdWx0aXBsZVZpZXcucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAocGFyYW1ldGVycykge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmluaXRpYWxpemUuY2FsbCh0aGlzLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgdGhpcy5saXN0Ym94Lm11bHRpcGxlID0gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHZpZXcgaXMgcmVuZGVyZWQuXG4gICAgICovXG4gICAgU2VsZWN0TXVsdGlwbGVWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LXNlbGVjdC1tdWx0aXBsZScpO1xuICAgIH07XG4gICAgU2VsZWN0TXVsdGlwbGVWaWV3LnByb3RvdHlwZS51cGRhdGVTZWxlY3Rpb24gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICBpZiAob3B0aW9ucy51cGRhdGVkX3ZpZXcgPT09IHRoaXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsZWN0ZWQgPSB0aGlzLm1vZGVsLmdldCgnaW5kZXgnKSB8fCBbXTtcbiAgICAgICAgdmFyIGxpc3Rib3hPcHRpb25zID0gdGhpcy5saXN0Ym94Lm9wdGlvbnM7XG4gICAgICAgIC8vIENsZWFyIHRoZSBzZWxlY3Rpb25cbiAgICAgICAgdGhpcy5saXN0Ym94LnNlbGVjdGVkSW5kZXggPSAtMTtcbiAgICAgICAgLy8gU2VsZWN0IHRoZSBhcHByb3ByaWF0ZSBvcHRpb25zXG4gICAgICAgIHNlbGVjdGVkLmZvckVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIGxpc3Rib3hPcHRpb25zW2ldLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGUgd2hlbiBhIG5ldyB2YWx1ZSBpcyBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBTZWxlY3RNdWx0aXBsZVZpZXcucHJvdG90eXBlLl9oYW5kbGVfY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5kZXggPSBBcnJheS5wcm90b3R5cGUubWFwXG4gICAgICAgICAgICAuY2FsbCh0aGlzLmxpc3Rib3guc2VsZWN0ZWRPcHRpb25zIHx8IFtdLCBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLmluZGV4O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ2luZGV4JywgaW5kZXgsIHsgdXBkYXRlZF92aWV3OiB0aGlzIH0pO1xuICAgICAgICB0aGlzLnRvdWNoKCk7XG4gICAgfTtcbiAgICByZXR1cm4gU2VsZWN0TXVsdGlwbGVWaWV3O1xufShTZWxlY3RWaWV3KSk7XG5leHBvcnQgeyBTZWxlY3RNdWx0aXBsZVZpZXcgfTtcbnZhciBTZWxlY3Rpb25SYW5nZVNsaWRlck1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTZWxlY3Rpb25SYW5nZVNsaWRlck1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNlbGVjdGlvblJhbmdlU2xpZGVyTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgU2VsZWN0aW9uUmFuZ2VTbGlkZXJNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7IF9tb2RlbF9uYW1lOiAnU2VsZWN0aW9uU2xpZGVyTW9kZWwnLCBfdmlld19uYW1lOiAnU2VsZWN0aW9uU2xpZGVyVmlldycsIG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcsIHJlYWRvdXQ6IHRydWUsIGNvbnRpbnVvdXNfdXBkYXRlOiB0cnVlIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFNlbGVjdGlvblJhbmdlU2xpZGVyTW9kZWw7XG59KE11bHRpcGxlU2VsZWN0aW9uTW9kZWwpKTtcbmV4cG9ydCB7IFNlbGVjdGlvblJhbmdlU2xpZGVyTW9kZWwgfTtcbnZhciBTZWxlY3Rpb25SYW5nZVNsaWRlclZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNlbGVjdGlvblJhbmdlU2xpZGVyVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTZWxlY3Rpb25SYW5nZVNsaWRlclZpZXcoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gdmlldyBpcyByZW5kZXJlZC5cbiAgICAgKi9cbiAgICBTZWxlY3Rpb25SYW5nZVNsaWRlclZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy4kc2xpZGVyLnNsaWRlcignb3B0aW9uJywgJ3JhbmdlJywgdHJ1ZSk7XG4gICAgfTtcbiAgICBTZWxlY3Rpb25SYW5nZVNsaWRlclZpZXcucHJvdG90eXBlLnVwZGF0ZVNlbGVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5tb2RlbC5nZXQoJ2luZGV4Jyk7XG4gICAgICAgIHRoaXMuJHNsaWRlci5zbGlkZXIoJ29wdGlvbicsICd2YWx1ZXMnLCBpbmRleC5zbGljZSgpKTtcbiAgICAgICAgdGhpcy51cGRhdGVSZWFkb3V0KGluZGV4KTtcbiAgICB9O1xuICAgIFNlbGVjdGlvblJhbmdlU2xpZGVyVmlldy5wcm90b3R5cGUudXBkYXRlUmVhZG91dCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgbGFiZWxzID0gdGhpcy5tb2RlbC5nZXQoJ19vcHRpb25zX2xhYmVscycpO1xuICAgICAgICB2YXIgbWluVmFsdWUgPSBsYWJlbHNbaW5kZXhbMF1dO1xuICAgICAgICB2YXIgbWF4VmFsdWUgPSBsYWJlbHNbaW5kZXhbMV1dO1xuICAgICAgICB0aGlzLnJlYWRvdXQudGV4dENvbnRlbnQgPSBtaW5WYWx1ZSArIFwiLVwiICsgbWF4VmFsdWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgc2xpZGVyIHZhbHVlIGlzIGNoYW5naW5nLlxuICAgICAqL1xuICAgIFNlbGVjdGlvblJhbmdlU2xpZGVyVmlldy5wcm90b3R5cGUuaGFuZGxlU2xpZGVyQ2hhbmdlID0gZnVuY3Rpb24gKGUsIHVpKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUmVhZG91dCh1aS52YWx1ZXMpO1xuICAgICAgICAvLyBPbmx5IHBlcnNpc3QgdGhlIHZhbHVlIHdoaWxlIHNsaWRpbmcgaWYgdGhlIGNvbnRpbnVvdXNfdXBkYXRlXG4gICAgICAgIC8vIHRyYWl0IGlzIHNldCB0byB0cnVlLlxuICAgICAgICBpZiAodGhpcy5tb2RlbC5nZXQoJ2NvbnRpbnVvdXNfdXBkYXRlJykpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU2xpZGVyQ2hhbmdlZChlLCB1aSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBzbGlkZXIgdmFsdWUgaGFzIGNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBDYWxsaW5nIG1vZGVsLnNldCB3aWxsIHRyaWdnZXIgYWxsIG9mIHRoZSBvdGhlciB2aWV3cyBvZiB0aGVcbiAgICAgKiBtb2RlbCB0byB1cGRhdGUuXG4gICAgICovXG4gICAgU2VsZWN0aW9uUmFuZ2VTbGlkZXJWaWV3LnByb3RvdHlwZS5oYW5kbGVTbGlkZXJDaGFuZ2VkID0gZnVuY3Rpb24gKGUsIHVpKSB7XG4gICAgICAgIC8vIFRoZSBqcXVlcnl1aSBkb2N1bWVudGF0aW9uIGluZGljYXRlcyB1aS52YWx1ZXMgZG9lc24ndCBleGlzdCBvbiB0aGUgc2xpZGVzdG9wIGV2ZW50LFxuICAgICAgICAvLyBidXQgaXQgYXBwZWFycyB0aGF0IGl0IGFjdHVhbGx5IGRvZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5LXVpL2Jsb2IvYWUzMWYyYjNiNDc4OTc1ZjcwNTI2YmRmMzI5OTQ2NGI5YWZhOGJiMS91aS93aWRnZXRzL3NsaWRlci5qcyNMMzEzXG4gICAgICAgIHRoaXMudXBkYXRlUmVhZG91dCh1aS52YWx1ZXMpO1xuICAgICAgICB0aGlzLm1vZGVsLnNldCgnaW5kZXgnLCB1aS52YWx1ZXMuc2xpY2UoKSwgeyB1cGRhdGVkX3ZpZXc6IHRoaXMgfSk7XG4gICAgICAgIHRoaXMudG91Y2goKTtcbiAgICB9O1xuICAgIHJldHVybiBTZWxlY3Rpb25SYW5nZVNsaWRlclZpZXc7XG59KFNlbGVjdGlvblNsaWRlclZpZXcpKTtcbmV4cG9ydCB7IFNlbGVjdGlvblJhbmdlU2xpZGVyVmlldyB9O1xuIiwiLyogVGhpcyBmaWxlIGhhcyBjb2RlIGRlcml2ZWQgZnJvbSBQaG9zcGhvckpTLiBUaGUgbGljZW5zZSBmb3IgdGhpcyBQaG9zcGhvckpTIGNvZGUgaXM6XG5cbkNvcHlyaWdodCAoYykgMjAxNC0yMDE3LCBQaG9zcGhvckpTIENvbnRyaWJ1dG9yc1xuQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG5tb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcblxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG5cbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uXG4gIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIGNvcHlyaWdodCBob2xkZXIgbm9yIHRoZSBuYW1lcyBvZiBpdHNcbiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbiAgdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cblxuVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbkFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbklNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRVxuRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRVxuRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUxcbkRBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SXG5TRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUlxuQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSxcbk9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG5PRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG4qL1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBNZXNzYWdlTG9vcCB9IGZyb20gJ0BwaG9zcGhvci9tZXNzYWdpbmcnO1xuaW1wb3J0IHsgU2lnbmFsIH0gZnJvbSAnQHBob3NwaG9yL3NpZ25hbGluZyc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0BwaG9zcGhvci9kb211dGlscyc7XG5pbXBvcnQgeyBQYW5lbCwgUGFuZWxMYXlvdXQsIFRhYkJhciwgV2lkZ2V0IH0gZnJvbSAnQHBob3NwaG9yL3dpZGdldHMnO1xuLyoqXG4gKiBBIHBhbmVsIHdoZXJlIHZpc2libGUgd2lkZ2V0cyBhcmUgc3RhY2tlZCBhdG9wIG9uZSBhbm90aGVyLlxuICpcbiAqICMjIyMgTm90ZXNcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgYSBjb252ZW5pZW5jZSB3cmFwcGVyIGFyb3VuZCBhIFtbUGFuZWxMYXlvdXRdXS5cbiAqL1xudmFyIEV2ZW50ZWRQYW5lbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRXZlbnRlZFBhbmVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEV2ZW50ZWRQYW5lbCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl93aWRnZXRSZW1vdmVkID0gbmV3IFNpZ25hbChfdGhpcyk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50ZWRQYW5lbC5wcm90b3R5cGUsIFwid2lkZ2V0UmVtb3ZlZFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHNpZ25hbCBlbWl0dGVkIHdoZW4gYSB3aWRnZXQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBwYW5lbC5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dpZGdldFJlbW92ZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEEgbWVzc2FnZSBoYW5kbGVyIGludm9rZWQgb24gYSBgJ2NoaWxkLXJlbW92ZWQnYCBtZXNzYWdlLlxuICAgICAqL1xuICAgIEV2ZW50ZWRQYW5lbC5wcm90b3R5cGUub25DaGlsZFJlbW92ZWQgPSBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgIHRoaXMuX3dpZGdldFJlbW92ZWQuZW1pdChtc2cuY2hpbGQpO1xuICAgIH07XG4gICAgcmV0dXJuIEV2ZW50ZWRQYW5lbDtcbn0oUGFuZWwpKTtcbmV4cG9ydCB7IEV2ZW50ZWRQYW5lbCB9O1xuLyoqXG4gKiBBIHdpZGdldCB3aGljaCBjb21iaW5lcyBhIGBUYWJCYXJgIGFuZCBhIGBFdmVudGVkUGFuZWxgLlxuICpcbiAqICMjIyMgTm90ZXNcbiAqIFRoaXMgaXMgYSBzaW1wbGUgcGFuZWwgd2hpY2ggaGFuZGxlcyB0aGUgY29tbW9uIGNhc2Ugb2YgYSB0YWIgYmFyXG4gKiBwbGFjZWQgbmV4dCB0byBhIGNvbnRlbnQgYXJlYS4gVGhlIHNlbGVjdGVkIHRhYiBjb250cm9scyB0aGUgd2lkZ2V0XG4gKiB3aGljaCBpcyBzaG93biBpbiB0aGUgY29udGVudCBhcmVhLlxuICpcbiAqIEZvciB1c2UgY2FzZXMgd2hpY2ggcmVxdWlyZSBtb3JlIGNvbnRyb2wgdGhhbiBpcyBwcm92aWRlZCBieSB0aGlzXG4gKiBwYW5lbCwgdGhlIGBUYWJCYXJgIHdpZGdldCBtYXkgYmUgdXNlZCBpbmRlcGVuZGVudGx5LlxuICpcbiAqIFRPRE86IFN1cHBvcnQgc2V0dGluZyB0aGUgZGlyZWN0aW9uPz9cbiAqL1xudmFyIFRhYlBhbmVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUYWJQYW5lbCwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgYSBuZXcgdGFiIHBhbmVsLlxuICAgICAqXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3B0aW9ucyBmb3IgaW5pdGlhbGl6aW5nIHRoZSB0YWIgcGFuZWwuXG4gICAgICovXG4gICAgZnVuY3Rpb24gVGFiUGFuZWwob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fY3VycmVudENoYW5nZWQgPSBuZXcgU2lnbmFsKF90aGlzKTtcbiAgICAgICAgX3RoaXMuYWRkQ2xhc3MoJ3AtVGFiUGFuZWwnKTtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSB0YWIgYmFyIGFuZCBjb250ZW50cyBwYW5lbC5cbiAgICAgICAgX3RoaXMudGFiQmFyID0gbmV3IFRhYkJhcihvcHRpb25zKTtcbiAgICAgICAgX3RoaXMudGFiQmFyLmFkZENsYXNzKCdwLVRhYlBhbmVsLXRhYkJhcicpO1xuICAgICAgICBfdGhpcy50YWJDb250ZW50cyA9IG5ldyBFdmVudGVkUGFuZWwoKTtcbiAgICAgICAgX3RoaXMudGFiQ29udGVudHMuYWRkQ2xhc3MoJ3AtVGFiUGFuZWwtdGFiQ29udGVudHMnKTtcbiAgICAgICAgLy8gQ29ubmVjdCB0aGUgdGFiIGJhciBzaWduYWwgaGFuZGxlcnMuXG4gICAgICAgIF90aGlzLnRhYkJhci50YWJNb3ZlZC5jb25uZWN0KF90aGlzLl9vblRhYk1vdmVkLCBfdGhpcyk7XG4gICAgICAgIF90aGlzLnRhYkJhci5jdXJyZW50Q2hhbmdlZC5jb25uZWN0KF90aGlzLl9vbkN1cnJlbnRDaGFuZ2VkLCBfdGhpcyk7XG4gICAgICAgIF90aGlzLnRhYkJhci50YWJDbG9zZVJlcXVlc3RlZC5jb25uZWN0KF90aGlzLl9vblRhYkNsb3NlUmVxdWVzdGVkLCBfdGhpcyk7XG4gICAgICAgIF90aGlzLnRhYkJhci50YWJBY3RpdmF0ZVJlcXVlc3RlZC5jb25uZWN0KF90aGlzLl9vblRhYkFjdGl2YXRlUmVxdWVzdGVkLCBfdGhpcyk7XG4gICAgICAgIC8vIENvbm5lY3QgdGhlIGV2ZW50ZWQgcGFuZWwgc2lnbmFsIGhhbmRsZXJzLlxuICAgICAgICBfdGhpcy50YWJDb250ZW50cy53aWRnZXRSZW1vdmVkLmNvbm5lY3QoX3RoaXMuX29uV2lkZ2V0UmVtb3ZlZCwgX3RoaXMpO1xuICAgICAgICAvLyBDcmVhdGUgdGhlIGxheW91dC5cbiAgICAgICAgdmFyIGxheW91dCA9IG5ldyBQYW5lbExheW91dCgpO1xuICAgICAgICAvLyBBZGQgdGhlIGNoaWxkIHdpZGdldHMgdG8gdGhlIGxheW91dC5cbiAgICAgICAgbGF5b3V0LmFkZFdpZGdldChfdGhpcy50YWJCYXIpO1xuICAgICAgICBsYXlvdXQuYWRkV2lkZ2V0KF90aGlzLnRhYkNvbnRlbnRzKTtcbiAgICAgICAgLy8gSW5zdGFsbCB0aGUgbGF5b3V0IG9uIHRoZSB0YWIgcGFuZWwuXG4gICAgICAgIF90aGlzLmxheW91dCA9IGxheW91dDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFiUGFuZWwucHJvdG90eXBlLCBcImN1cnJlbnRDaGFuZ2VkXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgc2lnbmFsIGVtaXR0ZWQgd2hlbiB0aGUgY3VycmVudCB0YWIgaXMgY2hhbmdlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogIyMjIyBOb3Rlc1xuICAgICAgICAgKiBUaGlzIHNpZ25hbCBpcyBlbWl0dGVkIHdoZW4gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB0YWIgaXMgY2hhbmdlZFxuICAgICAgICAgKiBlaXRoZXIgdGhyb3VnaCB1c2VyIG9yIHByb2dyYW1tYXRpYyBpbnRlcmFjdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogTm90YWJseSwgdGhpcyBzaWduYWwgaXMgbm90IGVtaXR0ZWQgd2hlbiB0aGUgaW5kZXggb2YgdGhlIGN1cnJlbnRcbiAgICAgICAgICogdGFiIGNoYW5nZXMgZHVlIHRvIHRhYnMgYmVpbmcgaW5zZXJ0ZWQsIHJlbW92ZWQsIG9yIG1vdmVkLiBJdCBpc1xuICAgICAgICAgKiBvbmx5IGVtaXR0ZWQgd2hlbiB0aGUgYWN0dWFsIGN1cnJlbnQgdGFiIG5vZGUgaXMgY2hhbmdlZC5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRDaGFuZ2VkO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFiUGFuZWwucHJvdG90eXBlLCBcImN1cnJlbnRJbmRleFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdGFiLlxuICAgICAgICAgKlxuICAgICAgICAgKiAjIyMjIE5vdGVzXG4gICAgICAgICAqIFRoaXMgd2lsbCBiZSBgbnVsbGAgaWYgbm8gdGFiIGlzIHNlbGVjdGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gdGhpcy50YWJCYXIuY3VycmVudEluZGV4O1xuICAgICAgICAgICAgLy8gUGhvc3Bob3IgdGFiIGJhcnMgaGF2ZSBhbiBpbmRleCBvZiAtMSBpZiBubyB0YWIgaXMgc2VsZWN0ZWRcbiAgICAgICAgICAgIHJldHVybiAoY3VycmVudEluZGV4ID09PSAtMSA/IG51bGwgOiBjdXJyZW50SW5kZXgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSBpbmRleCBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRhYi5cbiAgICAgICAgICpcbiAgICAgICAgICogIyMjIyBOb3Rlc1xuICAgICAgICAgKiBJZiB0aGUgaW5kZXggaXMgb3V0IG9mIHJhbmdlLCBpdCB3aWxsIGJlIHNldCB0byBgbnVsbGAuXG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy50YWJCYXIuY3VycmVudEluZGV4ID0gKHZhbHVlID09PSBudWxsID8gLTEgOiB2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUYWJQYW5lbC5wcm90b3R5cGUsIFwiY3VycmVudFdpZGdldFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB3aWRnZXQuXG4gICAgICAgICAqXG4gICAgICAgICAqICMjIyMgTm90ZXNcbiAgICAgICAgICogVGhpcyB3aWxsIGJlIGBudWxsYCBpZiB0aGVyZSBpcyBubyBzZWxlY3RlZCB0YWIuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IHRoaXMudGFiQmFyLmN1cnJlbnRUaXRsZTtcbiAgICAgICAgICAgIHJldHVybiB0aXRsZSA/IHRpdGxlLm93bmVyIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHdpZGdldC5cbiAgICAgICAgICpcbiAgICAgICAgICogIyMjIyBOb3Rlc1xuICAgICAgICAgKiBJZiB0aGUgd2lkZ2V0IGlzIG5vdCBpbiB0aGUgcGFuZWwsIGl0IHdpbGwgYmUgc2V0IHRvIGBudWxsYC5cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnRhYkJhci5jdXJyZW50VGl0bGUgPSB2YWx1ZSA/IHZhbHVlLnRpdGxlIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRhYlBhbmVsLnByb3RvdHlwZSwgXCJ0YWJzTW92YWJsZVwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIHdoZXRoZXIgdGhlIHRhYnMgYXJlIG1vdmFibGUgYnkgdGhlIHVzZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqICMjIyMgTm90ZXNcbiAgICAgICAgICogVGFicyBjYW4gYWx3YXlzIGJlIG1vdmVkIHByb2dyYW1tYXRpY2FsbHkuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhYkJhci50YWJzTW92YWJsZTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGUgd2hldGhlciB0aGUgdGFicyBhcmUgbW92YWJsZSBieSB0aGUgdXNlci5cbiAgICAgICAgICpcbiAgICAgICAgICogIyMjIyBOb3Rlc1xuICAgICAgICAgKiBUYWJzIGNhbiBhbHdheXMgYmUgbW92ZWQgcHJvZ3JhbW1hdGljYWxseS5cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnRhYkJhci50YWJzTW92YWJsZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFiUGFuZWwucHJvdG90eXBlLCBcIndpZGdldHNcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQSByZWFkLW9ubHkgYXJyYXkgb2YgdGhlIHdpZGdldHMgaW4gdGhlIHBhbmVsLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YWJDb250ZW50cy53aWRnZXRzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBBZGQgYSB3aWRnZXQgdG8gdGhlIGVuZCBvZiB0aGUgdGFiIHBhbmVsLlxuICAgICAqXG4gICAgICogQHBhcmFtIHdpZGdldCAtIFRoZSB3aWRnZXQgdG8gYWRkIHRvIHRoZSB0YWIgcGFuZWwuXG4gICAgICpcbiAgICAgKiAjIyMjIE5vdGVzXG4gICAgICogSWYgdGhlIHdpZGdldCBpcyBhbHJlYWR5IGNvbnRhaW5lZCBpbiB0aGUgcGFuZWwsIGl0IHdpbGwgYmUgbW92ZWQuXG4gICAgICpcbiAgICAgKiBUaGUgd2lkZ2V0J3MgYHRpdGxlYCBpcyB1c2VkIHRvIHBvcHVsYXRlIHRoZSB0YWIuXG4gICAgICovXG4gICAgVGFiUGFuZWwucHJvdG90eXBlLmFkZFdpZGdldCA9IGZ1bmN0aW9uICh3aWRnZXQpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRXaWRnZXQodGhpcy53aWRnZXRzLmxlbmd0aCwgd2lkZ2V0KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEluc2VydCBhIHdpZGdldCBpbnRvIHRoZSB0YWIgcGFuZWwgYXQgYSBzcGVjaWZpZWQgaW5kZXguXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaW5kZXggLSBUaGUgaW5kZXggYXQgd2hpY2ggdG8gaW5zZXJ0IHRoZSB3aWRnZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gd2lkZ2V0IC0gVGhlIHdpZGdldCB0byBpbnNlcnQgaW50byB0byB0aGUgdGFiIHBhbmVsLlxuICAgICAqXG4gICAgICogIyMjIyBOb3Rlc1xuICAgICAqIElmIHRoZSB3aWRnZXQgaXMgYWxyZWFkeSBjb250YWluZWQgaW4gdGhlIHBhbmVsLCBpdCB3aWxsIGJlIG1vdmVkLlxuICAgICAqXG4gICAgICogVGhlIHdpZGdldCdzIGB0aXRsZWAgaXMgdXNlZCB0byBwb3B1bGF0ZSB0aGUgdGFiLlxuICAgICAqL1xuICAgIFRhYlBhbmVsLnByb3RvdHlwZS5pbnNlcnRXaWRnZXQgPSBmdW5jdGlvbiAoaW5kZXgsIHdpZGdldCkge1xuICAgICAgICBpZiAod2lkZ2V0ICE9PSB0aGlzLmN1cnJlbnRXaWRnZXQpIHtcbiAgICAgICAgICAgIHdpZGdldC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50YWJDb250ZW50cy5pbnNlcnRXaWRnZXQoaW5kZXgsIHdpZGdldCk7XG4gICAgICAgIHRoaXMudGFiQmFyLmluc2VydFRhYihpbmRleCwgd2lkZ2V0LnRpdGxlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZSB0aGUgYGN1cnJlbnRDaGFuZ2VkYCBzaWduYWwgZnJvbSB0aGUgdGFiIGJhci5cbiAgICAgKi9cbiAgICBUYWJQYW5lbC5wcm90b3R5cGUuX29uQ3VycmVudENoYW5nZWQgPSBmdW5jdGlvbiAoc2VuZGVyLCBhcmdzKSB7XG4gICAgICAgIC8vIEV4dHJhY3QgdGhlIHByZXZpb3VzIGFuZCBjdXJyZW50IHRpdGxlIGZyb20gdGhlIGFyZ3MuXG4gICAgICAgIHZhciBwcmV2aW91c0luZGV4ID0gYXJncy5wcmV2aW91c0luZGV4LCBwcmV2aW91c1RpdGxlID0gYXJncy5wcmV2aW91c1RpdGxlLCBjdXJyZW50SW5kZXggPSBhcmdzLmN1cnJlbnRJbmRleCwgY3VycmVudFRpdGxlID0gYXJncy5jdXJyZW50VGl0bGU7XG4gICAgICAgIC8vIEV4dHJhY3QgdGhlIHdpZGdldHMgZnJvbSB0aGUgdGl0bGVzLlxuICAgICAgICB2YXIgcHJldmlvdXNXaWRnZXQgPSBwcmV2aW91c1RpdGxlID8gcHJldmlvdXNUaXRsZS5vd25lciA6IG51bGw7XG4gICAgICAgIHZhciBjdXJyZW50V2lkZ2V0ID0gY3VycmVudFRpdGxlID8gY3VycmVudFRpdGxlLm93bmVyIDogbnVsbDtcbiAgICAgICAgLy8gSGlkZSB0aGUgcHJldmlvdXMgd2lkZ2V0LlxuICAgICAgICBpZiAocHJldmlvdXNXaWRnZXQpIHtcbiAgICAgICAgICAgIHByZXZpb3VzV2lkZ2V0LmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTaG93IHRoZSBjdXJyZW50IHdpZGdldC5cbiAgICAgICAgaWYgKGN1cnJlbnRXaWRnZXQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRXaWRnZXQuc2hvdygpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVtaXQgdGhlIGBjdXJyZW50Q2hhbmdlZGAgc2lnbmFsIGZvciB0aGUgdGFiIHBhbmVsLlxuICAgICAgICB0aGlzLl9jdXJyZW50Q2hhbmdlZC5lbWl0KHtcbiAgICAgICAgICAgIHByZXZpb3VzSW5kZXg6IHByZXZpb3VzSW5kZXgsIHByZXZpb3VzV2lkZ2V0OiBwcmV2aW91c1dpZGdldCwgY3VycmVudEluZGV4OiBjdXJyZW50SW5kZXgsIGN1cnJlbnRXaWRnZXQ6IGN1cnJlbnRXaWRnZXRcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEZsdXNoIHRoZSBtZXNzYWdlIGxvb3Agb24gSUUgYW5kIEVkZ2UgdG8gcHJldmVudCBmbGlja2VyLlxuICAgICAgICBpZiAoUGxhdGZvcm0uSVNfRURHRSB8fCBQbGF0Zm9ybS5JU19JRSkge1xuICAgICAgICAgICAgTWVzc2FnZUxvb3AuZmx1c2goKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBgdGFiQWN0aXZhdGVSZXF1ZXN0ZWRgIHNpZ25hbCBmcm9tIHRoZSB0YWIgYmFyLlxuICAgICAqL1xuICAgIFRhYlBhbmVsLnByb3RvdHlwZS5fb25UYWJBY3RpdmF0ZVJlcXVlc3RlZCA9IGZ1bmN0aW9uIChzZW5kZXIsIGFyZ3MpIHtcbiAgICAgICAgYXJncy50aXRsZS5vd25lci5hY3RpdmF0ZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBgdGFiQ2xvc2VSZXF1ZXN0ZWRgIHNpZ25hbCBmcm9tIHRoZSB0YWIgYmFyLlxuICAgICAqL1xuICAgIFRhYlBhbmVsLnByb3RvdHlwZS5fb25UYWJDbG9zZVJlcXVlc3RlZCA9IGZ1bmN0aW9uIChzZW5kZXIsIGFyZ3MpIHtcbiAgICAgICAgYXJncy50aXRsZS5vd25lci5jbG9zZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBgdGFiTW92ZWRgIHNpZ25hbCBmcm9tIHRoZSB0YWIgYmFyLlxuICAgICAqL1xuICAgIFRhYlBhbmVsLnByb3RvdHlwZS5fb25UYWJNb3ZlZCA9IGZ1bmN0aW9uIChzZW5kZXIsIGFyZ3MpIHtcbiAgICAgICAgdGhpcy50YWJDb250ZW50cy5pbnNlcnRXaWRnZXQoYXJncy50b0luZGV4LCBhcmdzLnRpdGxlLm93bmVyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZSB0aGUgYHdpZGdldFJlbW92ZWRgIHNpZ25hbCBmcm9tIHRoZSBzdGFja2VkIHBhbmVsLlxuICAgICAqL1xuICAgIFRhYlBhbmVsLnByb3RvdHlwZS5fb25XaWRnZXRSZW1vdmVkID0gZnVuY3Rpb24gKHNlbmRlciwgd2lkZ2V0KSB7XG4gICAgICAgIHRoaXMudGFiQmFyLnJlbW92ZVRhYih3aWRnZXQudGl0bGUpO1xuICAgIH07XG4gICAgcmV0dXJuIFRhYlBhbmVsO1xufShXaWRnZXQpKTtcbmV4cG9ydCB7IFRhYlBhbmVsIH07XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEp1cHl0ZXIgRGV2ZWxvcG1lbnQgVGVhbS5cbi8vIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTW9kaWZpZWQgQlNEIExpY2Vuc2UuXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBET01XaWRnZXRWaWV3IH0gZnJvbSAnQGp1cHl0ZXItd2lkZ2V0cy9iYXNlJztcbmltcG9ydCB7IENvcmVET01XaWRnZXRNb2RlbCB9IGZyb20gJy4vd2lkZ2V0X2NvcmUnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbnZhciBBdWRpb01vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBdWRpb01vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEF1ZGlvTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQXVkaW9Nb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnQXVkaW9Nb2RlbCcsXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnQXVkaW9WaWV3JyxcbiAgICAgICAgICAgIGZvcm1hdDogJ21wMycsXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICBjb250cm9sczogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiBuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDApKVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEF1ZGlvTW9kZWwuc2VyaWFsaXplcnMgPSBfX2Fzc2lnbih7fSwgQ29yZURPTVdpZGdldE1vZGVsLnNlcmlhbGl6ZXJzLCB7IHZhbHVlOiB7IHNlcmlhbGl6ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRhVmlldyh2YWx1ZS5idWZmZXIuc2xpY2UoMCkpO1xuICAgICAgICAgICAgfSB9IH0pO1xuICAgIHJldHVybiBBdWRpb01vZGVsO1xufShDb3JlRE9NV2lkZ2V0TW9kZWwpKTtcbmV4cG9ydCB7IEF1ZGlvTW9kZWwgfTtcbnZhciBBdWRpb1ZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEF1ZGlvVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBdWRpb1ZpZXcoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQXVkaW9WaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgd2hlbiB2aWV3IGlzIHJlbmRlcmVkLlxuICAgICAgICAgKi9cbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5wV2lkZ2V0LmFkZENsYXNzKCdqdXB5dGVyLXdpZGdldHMnKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTsgLy8gU2V0IGRlZmF1bHRzLlxuICAgIH07XG4gICAgQXVkaW9WaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGUgdGhlIGNvbnRlbnRzIG9mIHRoaXMgdmlld1xuICAgICAgICAgKlxuICAgICAgICAgKiBDYWxsZWQgd2hlbiB0aGUgbW9kZWwgaXMgY2hhbmdlZC4gIFRoZSBtb2RlbCBtYXkgaGF2ZSBiZWVuXG4gICAgICAgICAqIGNoYW5nZWQgYnkgYW5vdGhlciB2aWV3IG9yIGJ5IGEgc3RhdGUgdXBkYXRlIGZyb20gdGhlIGJhY2stZW5kLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIHVybDtcbiAgICAgICAgdmFyIGZvcm1hdCA9IHRoaXMubW9kZWwuZ2V0KCdmb3JtYXQnKTtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJyk7XG4gICAgICAgIGlmIChmb3JtYXQgIT09ICd1cmwnKSB7XG4gICAgICAgICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFt2YWx1ZV0sIHsgdHlwZTogXCJhdWRpby9cIiArIHRoaXMubW9kZWwuZ2V0KCdmb3JtYXQnKSB9KTtcbiAgICAgICAgICAgIHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB1cmwgPSAobmV3IFRleHREZWNvZGVyKCd1dGYtOCcpKS5kZWNvZGUodmFsdWUuYnVmZmVyKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDbGVhbiB1cCB0aGUgb2xkIG9iamVjdFVSTFxuICAgICAgICB2YXIgb2xkdXJsID0gdGhpcy5lbC5zcmM7XG4gICAgICAgIHRoaXMuZWwuc3JjID0gdXJsO1xuICAgICAgICBpZiAob2xkdXJsICYmIHR5cGVvZiBvbGR1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXVkaW8gYXR0cmlidXRlc1xuICAgICAgICB0aGlzLmVsLmxvb3AgPSB0aGlzLm1vZGVsLmdldCgnbG9vcCcpO1xuICAgICAgICB0aGlzLmVsLmF1dG9wbGF5ID0gdGhpcy5tb2RlbC5nZXQoJ2F1dG9wbGF5Jyk7XG4gICAgICAgIHRoaXMuZWwuY29udHJvbHMgPSB0aGlzLm1vZGVsLmdldCgnY29udHJvbHMnKTtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBBdWRpb1ZpZXcucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWwuc3JjKSB7XG4gICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuZWwuc3JjKTtcbiAgICAgICAgfVxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbW92ZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEF1ZGlvVmlldy5wcm90b3R5cGUsIFwidGFnTmFtZVwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZGVmYXVsdCB0YWcgbmFtZS5cbiAgICAgICAgICpcbiAgICAgICAgICogIyMjIyBOb3Rlc1xuICAgICAgICAgKiBUaGlzIGlzIGEgcmVhZC1vbmx5IGF0dHJpYnV0ZS5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gV2UgY2FuJ3QgbWFrZSB0aGlzIGFuIGF0dHJpYnV0ZSB3aXRoIGEgZGVmYXVsdCB2YWx1ZVxuICAgICAgICAgICAgLy8gc2luY2UgaXQgd291bGQgYmUgc2V0IGFmdGVyIGl0IGlzIG5lZWRlZCBpbiB0aGVcbiAgICAgICAgICAgIC8vIGNvbnN0cnVjdG9yLlxuICAgICAgICAgICAgcmV0dXJuICdhdWRpbyc7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBBdWRpb1ZpZXc7XG59KERPTVdpZGdldFZpZXcpKTtcbmV4cG9ydCB7IEF1ZGlvVmlldyB9O1xuIiwiLyohXG4gKiBqUXVlcnkgVUkgTW91c2UgMS4xMi4xXG4gKiBodHRwOi8vanF1ZXJ5dWkuY29tXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqL1xuXG4vLz4+bGFiZWw6IE1vdXNlXG4vLz4+Z3JvdXA6IFdpZGdldHNcbi8vPj5kZXNjcmlwdGlvbjogQWJzdHJhY3RzIG1vdXNlLWJhc2VkIGludGVyYWN0aW9ucyB0byBhc3Npc3QgaW4gY3JlYXRpbmcgY2VydGFpbiB3aWRnZXRzLlxuLy8+PmRvY3M6IGh0dHA6Ly9hcGkuanF1ZXJ5dWkuY29tL21vdXNlL1xuXG4oIGZ1bmN0aW9uKCBmYWN0b3J5ICkge1xuXHRpZiAoIHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kICkge1xuXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZSggW1xuXHRcdFx0XCJqcXVlcnlcIixcblx0XHRcdFwiLi4vaWVcIixcblx0XHRcdFwiLi4vdmVyc2lvblwiLFxuXHRcdFx0XCIuLi93aWRnZXRcIlxuXHRcdF0sIGZhY3RvcnkgKTtcblx0fSBlbHNlIHtcblxuXHRcdC8vIEJyb3dzZXIgZ2xvYmFsc1xuXHRcdGZhY3RvcnkoIGpRdWVyeSApO1xuXHR9XG59KCBmdW5jdGlvbiggJCApIHtcblxudmFyIG1vdXNlSGFuZGxlZCA9IGZhbHNlO1xuJCggZG9jdW1lbnQgKS5vbiggXCJtb3VzZXVwXCIsIGZ1bmN0aW9uKCkge1xuXHRtb3VzZUhhbmRsZWQgPSBmYWxzZTtcbn0gKTtcblxucmV0dXJuICQud2lkZ2V0KCBcInVpLm1vdXNlXCIsIHtcblx0dmVyc2lvbjogXCIxLjEyLjFcIixcblx0b3B0aW9uczoge1xuXHRcdGNhbmNlbDogXCJpbnB1dCwgdGV4dGFyZWEsIGJ1dHRvbiwgc2VsZWN0LCBvcHRpb25cIixcblx0XHRkaXN0YW5jZTogMSxcblx0XHRkZWxheTogMFxuXHR9LFxuXHRfbW91c2VJbml0OiBmdW5jdGlvbigpIHtcblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cblx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdC5vbiggXCJtb3VzZWRvd24uXCIgKyB0aGlzLndpZGdldE5hbWUsIGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0cmV0dXJuIHRoYXQuX21vdXNlRG93biggZXZlbnQgKTtcblx0XHRcdH0gKVxuXHRcdFx0Lm9uKCBcImNsaWNrLlwiICsgdGhpcy53aWRnZXROYW1lLCBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRcdGlmICggdHJ1ZSA9PT0gJC5kYXRhKCBldmVudC50YXJnZXQsIHRoYXQud2lkZ2V0TmFtZSArIFwiLnByZXZlbnRDbGlja0V2ZW50XCIgKSApIHtcblx0XHRcdFx0XHQkLnJlbW92ZURhdGEoIGV2ZW50LnRhcmdldCwgdGhhdC53aWRnZXROYW1lICsgXCIucHJldmVudENsaWNrRXZlbnRcIiApO1xuXHRcdFx0XHRcdGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0dGhpcy5zdGFydGVkID0gZmFsc2U7XG5cdH0sXG5cblx0Ly8gVE9ETzogbWFrZSBzdXJlIGRlc3Ryb3lpbmcgb25lIGluc3RhbmNlIG9mIG1vdXNlIGRvZXNuJ3QgbWVzcyB3aXRoXG5cdC8vIG90aGVyIGluc3RhbmNlcyBvZiBtb3VzZVxuXHRfbW91c2VEZXN0cm95OiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmVsZW1lbnQub2ZmKCBcIi5cIiArIHRoaXMud2lkZ2V0TmFtZSApO1xuXHRcdGlmICggdGhpcy5fbW91c2VNb3ZlRGVsZWdhdGUgKSB7XG5cdFx0XHR0aGlzLmRvY3VtZW50XG5cdFx0XHRcdC5vZmYoIFwibW91c2Vtb3ZlLlwiICsgdGhpcy53aWRnZXROYW1lLCB0aGlzLl9tb3VzZU1vdmVEZWxlZ2F0ZSApXG5cdFx0XHRcdC5vZmYoIFwibW91c2V1cC5cIiArIHRoaXMud2lkZ2V0TmFtZSwgdGhpcy5fbW91c2VVcERlbGVnYXRlICk7XG5cdFx0fVxuXHR9LFxuXG5cdF9tb3VzZURvd246IGZ1bmN0aW9uKCBldmVudCApIHtcblxuXHRcdC8vIGRvbid0IGxldCBtb3JlIHRoYW4gb25lIHdpZGdldCBoYW5kbGUgbW91c2VTdGFydFxuXHRcdGlmICggbW91c2VIYW5kbGVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX21vdXNlTW92ZWQgPSBmYWxzZTtcblxuXHRcdC8vIFdlIG1heSBoYXZlIG1pc3NlZCBtb3VzZXVwIChvdXQgb2Ygd2luZG93KVxuXHRcdCggdGhpcy5fbW91c2VTdGFydGVkICYmIHRoaXMuX21vdXNlVXAoIGV2ZW50ICkgKTtcblxuXHRcdHRoaXMuX21vdXNlRG93bkV2ZW50ID0gZXZlbnQ7XG5cblx0XHR2YXIgdGhhdCA9IHRoaXMsXG5cdFx0XHRidG5Jc0xlZnQgPSAoIGV2ZW50LndoaWNoID09PSAxICksXG5cblx0XHRcdC8vIGV2ZW50LnRhcmdldC5ub2RlTmFtZSB3b3JrcyBhcm91bmQgYSBidWcgaW4gSUUgOCB3aXRoXG5cdFx0XHQvLyBkaXNhYmxlZCBpbnB1dHMgKCM3NjIwKVxuXHRcdFx0ZWxJc0NhbmNlbCA9ICggdHlwZW9mIHRoaXMub3B0aW9ucy5jYW5jZWwgPT09IFwic3RyaW5nXCIgJiYgZXZlbnQudGFyZ2V0Lm5vZGVOYW1lID9cblx0XHRcdFx0JCggZXZlbnQudGFyZ2V0ICkuY2xvc2VzdCggdGhpcy5vcHRpb25zLmNhbmNlbCApLmxlbmd0aCA6IGZhbHNlICk7XG5cdFx0aWYgKCAhYnRuSXNMZWZ0IHx8IGVsSXNDYW5jZWwgfHwgIXRoaXMuX21vdXNlQ2FwdHVyZSggZXZlbnQgKSApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHRoaXMubW91c2VEZWxheU1ldCA9ICF0aGlzLm9wdGlvbnMuZGVsYXk7XG5cdFx0aWYgKCAhdGhpcy5tb3VzZURlbGF5TWV0ICkge1xuXHRcdFx0dGhpcy5fbW91c2VEZWxheVRpbWVyID0gc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRoYXQubW91c2VEZWxheU1ldCA9IHRydWU7XG5cdFx0XHR9LCB0aGlzLm9wdGlvbnMuZGVsYXkgKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuX21vdXNlRGlzdGFuY2VNZXQoIGV2ZW50ICkgJiYgdGhpcy5fbW91c2VEZWxheU1ldCggZXZlbnQgKSApIHtcblx0XHRcdHRoaXMuX21vdXNlU3RhcnRlZCA9ICggdGhpcy5fbW91c2VTdGFydCggZXZlbnQgKSAhPT0gZmFsc2UgKTtcblx0XHRcdGlmICggIXRoaXMuX21vdXNlU3RhcnRlZCApIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ2xpY2sgZXZlbnQgbWF5IG5ldmVyIGhhdmUgZmlyZWQgKEdlY2tvICYgT3BlcmEpXG5cdFx0aWYgKCB0cnVlID09PSAkLmRhdGEoIGV2ZW50LnRhcmdldCwgdGhpcy53aWRnZXROYW1lICsgXCIucHJldmVudENsaWNrRXZlbnRcIiApICkge1xuXHRcdFx0JC5yZW1vdmVEYXRhKCBldmVudC50YXJnZXQsIHRoaXMud2lkZ2V0TmFtZSArIFwiLnByZXZlbnRDbGlja0V2ZW50XCIgKTtcblx0XHR9XG5cblx0XHQvLyBUaGVzZSBkZWxlZ2F0ZXMgYXJlIHJlcXVpcmVkIHRvIGtlZXAgY29udGV4dFxuXHRcdHRoaXMuX21vdXNlTW92ZURlbGVnYXRlID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0cmV0dXJuIHRoYXQuX21vdXNlTW92ZSggZXZlbnQgKTtcblx0XHR9O1xuXHRcdHRoaXMuX21vdXNlVXBEZWxlZ2F0ZSA9IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdHJldHVybiB0aGF0Ll9tb3VzZVVwKCBldmVudCApO1xuXHRcdH07XG5cblx0XHR0aGlzLmRvY3VtZW50XG5cdFx0XHQub24oIFwibW91c2Vtb3ZlLlwiICsgdGhpcy53aWRnZXROYW1lLCB0aGlzLl9tb3VzZU1vdmVEZWxlZ2F0ZSApXG5cdFx0XHQub24oIFwibW91c2V1cC5cIiArIHRoaXMud2lkZ2V0TmFtZSwgdGhpcy5fbW91c2VVcERlbGVnYXRlICk7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0bW91c2VIYW5kbGVkID0gdHJ1ZTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHRfbW91c2VNb3ZlOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cblx0XHQvLyBPbmx5IGNoZWNrIGZvciBtb3VzZXVwcyBvdXRzaWRlIHRoZSBkb2N1bWVudCBpZiB5b3UndmUgbW92ZWQgaW5zaWRlIHRoZSBkb2N1bWVudFxuXHRcdC8vIGF0IGxlYXN0IG9uY2UuIFRoaXMgcHJldmVudHMgdGhlIGZpcmluZyBvZiBtb3VzZXVwIGluIHRoZSBjYXNlIG9mIElFPDksIHdoaWNoIHdpbGxcblx0XHQvLyBmaXJlIGEgbW91c2Vtb3ZlIGV2ZW50IGlmIGNvbnRlbnQgaXMgcGxhY2VkIHVuZGVyIHRoZSBjdXJzb3IuIFNlZSAjNzc3OFxuXHRcdC8vIFN1cHBvcnQ6IElFIDw5XG5cdFx0aWYgKCB0aGlzLl9tb3VzZU1vdmVkICkge1xuXG5cdFx0XHQvLyBJRSBtb3VzZXVwIGNoZWNrIC0gbW91c2V1cCBoYXBwZW5lZCB3aGVuIG1vdXNlIHdhcyBvdXQgb2Ygd2luZG93XG5cdFx0XHRpZiAoICQudWkuaWUgJiYgKCAhZG9jdW1lbnQuZG9jdW1lbnRNb2RlIHx8IGRvY3VtZW50LmRvY3VtZW50TW9kZSA8IDkgKSAmJlxuXHRcdFx0XHRcdCFldmVudC5idXR0b24gKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9tb3VzZVVwKCBldmVudCApO1xuXG5cdFx0XHQvLyBJZnJhbWUgbW91c2V1cCBjaGVjayAtIG1vdXNldXAgb2NjdXJyZWQgaW4gYW5vdGhlciBkb2N1bWVudFxuXHRcdFx0fSBlbHNlIGlmICggIWV2ZW50LndoaWNoICkge1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IFNhZmFyaSA8PTggLSA5XG5cdFx0XHRcdC8vIFNhZmFyaSBzZXRzIHdoaWNoIHRvIDAgaWYgeW91IHByZXNzIGFueSBvZiB0aGUgZm9sbG93aW5nIGtleXNcblx0XHRcdFx0Ly8gZHVyaW5nIGEgZHJhZyAoIzE0NDYxKVxuXHRcdFx0XHRpZiAoIGV2ZW50Lm9yaWdpbmFsRXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm9yaWdpbmFsRXZlbnQuY3RybEtleSB8fFxuXHRcdFx0XHRcdFx0ZXZlbnQub3JpZ2luYWxFdmVudC5tZXRhS2V5IHx8IGV2ZW50Lm9yaWdpbmFsRXZlbnQuc2hpZnRLZXkgKSB7XG5cdFx0XHRcdFx0dGhpcy5pZ25vcmVNaXNzaW5nV2hpY2ggPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCAhdGhpcy5pZ25vcmVNaXNzaW5nV2hpY2ggKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX21vdXNlVXAoIGV2ZW50ICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIGV2ZW50LndoaWNoIHx8IGV2ZW50LmJ1dHRvbiApIHtcblx0XHRcdHRoaXMuX21vdXNlTW92ZWQgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5fbW91c2VTdGFydGVkICkge1xuXHRcdFx0dGhpcy5fbW91c2VEcmFnKCBldmVudCApO1xuXHRcdFx0cmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLl9tb3VzZURpc3RhbmNlTWV0KCBldmVudCApICYmIHRoaXMuX21vdXNlRGVsYXlNZXQoIGV2ZW50ICkgKSB7XG5cdFx0XHR0aGlzLl9tb3VzZVN0YXJ0ZWQgPVxuXHRcdFx0XHQoIHRoaXMuX21vdXNlU3RhcnQoIHRoaXMuX21vdXNlRG93bkV2ZW50LCBldmVudCApICE9PSBmYWxzZSApO1xuXHRcdFx0KCB0aGlzLl9tb3VzZVN0YXJ0ZWQgPyB0aGlzLl9tb3VzZURyYWcoIGV2ZW50ICkgOiB0aGlzLl9tb3VzZVVwKCBldmVudCApICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICF0aGlzLl9tb3VzZVN0YXJ0ZWQ7XG5cdH0sXG5cblx0X21vdXNlVXA6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHR0aGlzLmRvY3VtZW50XG5cdFx0XHQub2ZmKCBcIm1vdXNlbW92ZS5cIiArIHRoaXMud2lkZ2V0TmFtZSwgdGhpcy5fbW91c2VNb3ZlRGVsZWdhdGUgKVxuXHRcdFx0Lm9mZiggXCJtb3VzZXVwLlwiICsgdGhpcy53aWRnZXROYW1lLCB0aGlzLl9tb3VzZVVwRGVsZWdhdGUgKTtcblxuXHRcdGlmICggdGhpcy5fbW91c2VTdGFydGVkICkge1xuXHRcdFx0dGhpcy5fbW91c2VTdGFydGVkID0gZmFsc2U7XG5cblx0XHRcdGlmICggZXZlbnQudGFyZ2V0ID09PSB0aGlzLl9tb3VzZURvd25FdmVudC50YXJnZXQgKSB7XG5cdFx0XHRcdCQuZGF0YSggZXZlbnQudGFyZ2V0LCB0aGlzLndpZGdldE5hbWUgKyBcIi5wcmV2ZW50Q2xpY2tFdmVudFwiLCB0cnVlICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX21vdXNlU3RvcCggZXZlbnQgKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuX21vdXNlRGVsYXlUaW1lciApIHtcblx0XHRcdGNsZWFyVGltZW91dCggdGhpcy5fbW91c2VEZWxheVRpbWVyICk7XG5cdFx0XHRkZWxldGUgdGhpcy5fbW91c2VEZWxheVRpbWVyO1xuXHRcdH1cblxuXHRcdHRoaXMuaWdub3JlTWlzc2luZ1doaWNoID0gZmFsc2U7XG5cdFx0bW91c2VIYW5kbGVkID0gZmFsc2U7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0fSxcblxuXHRfbW91c2VEaXN0YW5jZU1ldDogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdHJldHVybiAoIE1hdGgubWF4KFxuXHRcdFx0XHRNYXRoLmFicyggdGhpcy5fbW91c2VEb3duRXZlbnQucGFnZVggLSBldmVudC5wYWdlWCApLFxuXHRcdFx0XHRNYXRoLmFicyggdGhpcy5fbW91c2VEb3duRXZlbnQucGFnZVkgLSBldmVudC5wYWdlWSApXG5cdFx0XHQpID49IHRoaXMub3B0aW9ucy5kaXN0YW5jZVxuXHRcdCk7XG5cdH0sXG5cblx0X21vdXNlRGVsYXlNZXQ6IGZ1bmN0aW9uKCAvKiBldmVudCAqLyApIHtcblx0XHRyZXR1cm4gdGhpcy5tb3VzZURlbGF5TWV0O1xuXHR9LFxuXG5cdC8vIFRoZXNlIGFyZSBwbGFjZWhvbGRlciBtZXRob2RzLCB0byBiZSBvdmVycmlkZW4gYnkgZXh0ZW5kaW5nIHBsdWdpblxuXHRfbW91c2VTdGFydDogZnVuY3Rpb24oIC8qIGV2ZW50ICovICkge30sXG5cdF9tb3VzZURyYWc6IGZ1bmN0aW9uKCAvKiBldmVudCAqLyApIHt9LFxuXHRfbW91c2VTdG9wOiBmdW5jdGlvbiggLyogZXZlbnQgKi8gKSB7fSxcblx0X21vdXNlQ2FwdHVyZTogZnVuY3Rpb24oIC8qIGV2ZW50ICovICkgeyByZXR1cm4gdHJ1ZTsgfVxufSApO1xuXG59ICkgKTtcbiIsIi8vIENvcHlyaWdodCAoYykgSnVweXRlciBEZXZlbG9wbWVudCBUZWFtLlxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNb2RpZmllZCBCU0QgTGljZW5zZS5cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IERPTVdpZGdldFZpZXcsIHVucGFja19tb2RlbHMsIFZpZXdMaXN0LCBKdXB5dGVyUGhvc3Bob3JQYW5lbFdpZGdldCB9IGZyb20gJ0BqdXB5dGVyLXdpZGdldHMvYmFzZSc7XG5pbXBvcnQgeyBDb3JlRE9NV2lkZ2V0TW9kZWwgfSBmcm9tICcuL3dpZGdldF9jb3JlJztcbmltcG9ydCB7IHJlamVjdCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgQXJyYXlFeHQgfSBmcm9tICdAcGhvc3Bob3IvYWxnb3JpdGhtJztcbmltcG9ydCB7IE1lc3NhZ2VMb29wIH0gZnJvbSAnQHBob3NwaG9yL21lc3NhZ2luZyc7XG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tICdAcGhvc3Bob3Ivd2lkZ2V0cyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbnZhciBCb3hNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQm94TW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQm94TW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQm94TW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBfdmlld19uYW1lOiAnQm94VmlldycsXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0JveE1vZGVsJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgICAgIGJveF9zdHlsZTogJydcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBCb3hNb2RlbC5zZXJpYWxpemVycyA9IF9fYXNzaWduKHt9LCBDb3JlRE9NV2lkZ2V0TW9kZWwuc2VyaWFsaXplcnMsIHsgY2hpbGRyZW46IHsgZGVzZXJpYWxpemU6IHVucGFja19tb2RlbHMgfSB9KTtcbiAgICByZXR1cm4gQm94TW9kZWw7XG59KENvcmVET01XaWRnZXRNb2RlbCkpO1xuZXhwb3J0IHsgQm94TW9kZWwgfTtcbnZhciBIQm94TW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEhCb3hNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBIQm94TW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgSEJveE1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ0hCb3hWaWV3JyxcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnSEJveE1vZGVsJyxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gSEJveE1vZGVsO1xufShCb3hNb2RlbCkpO1xuZXhwb3J0IHsgSEJveE1vZGVsIH07XG52YXIgVkJveE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhWQm94TW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVkJveE1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFZCb3hNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdWQm94VmlldycsXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ1ZCb3hNb2RlbCcsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFZCb3hNb2RlbDtcbn0oQm94TW9kZWwpKTtcbmV4cG9ydCB7IFZCb3hNb2RlbCB9O1xudmFyIEJveFZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJveFZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQm94VmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBCb3hWaWV3LnByb3RvdHlwZS5fY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0YWdOYW1lKSB7XG4gICAgICAgIHRoaXMucFdpZGdldCA9IG5ldyBKdXB5dGVyUGhvc3Bob3JQYW5lbFdpZGdldCh7IHZpZXc6IHRoaXMgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLnBXaWRnZXQubm9kZTtcbiAgICB9O1xuICAgIEJveFZpZXcucHJvdG90eXBlLl9zZXRFbGVtZW50ID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGlmICh0aGlzLmVsIHx8IGVsICE9PSB0aGlzLnBXaWRnZXQubm9kZSkge1xuICAgICAgICAgICAgLy8gQm94ZXMgZG9uJ3QgYWxsb3cgc2V0dGluZyB0aGUgZWxlbWVudCBiZXlvbmQgdGhlIGluaXRpYWwgY3JlYXRpb24uXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCByZXNldCB0aGUgRE9NIGVsZW1lbnQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbCA9IHRoaXMucFdpZGdldC5ub2RlO1xuICAgICAgICB0aGlzLiRlbCA9ICQodGhpcy5wV2lkZ2V0Lm5vZGUpO1xuICAgIH07XG4gICAgQm94Vmlldy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChwYXJhbWV0ZXJzKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIHBhcmFtZXRlcnMpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuX3ZpZXdzID0gbmV3IFZpZXdMaXN0KHRoaXMuYWRkX2NoaWxkX21vZGVsLCBudWxsLCB0aGlzKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOmNoaWxkcmVuJywgdGhpcy51cGRhdGVfY2hpbGRyZW4pO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6Ym94X3N0eWxlJywgdGhpcy51cGRhdGVfYm94X3N0eWxlKTtcbiAgICAgICAgdGhpcy5wV2lkZ2V0LmFkZENsYXNzKCdqdXB5dGVyLXdpZGdldHMnKTtcbiAgICAgICAgdGhpcy5wV2lkZ2V0LmFkZENsYXNzKCd3aWRnZXQtY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMucFdpZGdldC5hZGRDbGFzcygnd2lkZ2V0LWJveCcpO1xuICAgIH07XG4gICAgQm94Vmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZV9jaGlsZHJlbigpO1xuICAgICAgICB0aGlzLnNldF9ib3hfc3R5bGUoKTtcbiAgICB9O1xuICAgIEJveFZpZXcucHJvdG90eXBlLnVwZGF0ZV9jaGlsZHJlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbl92aWV3cy51cGRhdGUodGhpcy5tb2RlbC5nZXQoJ2NoaWxkcmVuJykpLnRoZW4oZnVuY3Rpb24gKHZpZXdzKSB7XG4gICAgICAgICAgICAvLyBOb3RpZnkgYWxsIGNoaWxkcmVuIHRoYXQgdGhlaXIgc2l6ZXMgbWF5IGhhdmUgY2hhbmdlZC5cbiAgICAgICAgICAgIHZpZXdzLmZvckVhY2goZnVuY3Rpb24gKHZpZXcpIHtcbiAgICAgICAgICAgICAgICBNZXNzYWdlTG9vcC5wb3N0TWVzc2FnZSh2aWV3LnBXaWRnZXQsIFdpZGdldC5SZXNpemVNZXNzYWdlLlVua25vd25TaXplKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEJveFZpZXcucHJvdG90eXBlLnVwZGF0ZV9ib3hfc3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlX21hcHBlZF9jbGFzc2VzKEJveFZpZXcuY2xhc3NfbWFwLCAnYm94X3N0eWxlJyk7XG4gICAgfTtcbiAgICBCb3hWaWV3LnByb3RvdHlwZS5zZXRfYm94X3N0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNldF9tYXBwZWRfY2xhc3NlcyhCb3hWaWV3LmNsYXNzX21hcCwgJ2JveF9zdHlsZScpO1xuICAgIH07XG4gICAgQm94Vmlldy5wcm90b3R5cGUuYWRkX2NoaWxkX21vZGVsID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIHdlIGluc2VydCBhIGR1bW15IGVsZW1lbnQgc28gdGhlIG9yZGVyIGlzIHByZXNlcnZlZCB3aGVuIHdlIGFkZFxuICAgICAgICAvLyB0aGUgcmVuZGVyZWQgY29udGVudCBsYXRlci5cbiAgICAgICAgdmFyIGR1bW15ID0gbmV3IFdpZGdldCgpO1xuICAgICAgICB0aGlzLnBXaWRnZXQuYWRkV2lkZ2V0KGR1bW15KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlX2NoaWxkX3ZpZXcobW9kZWwpLnRoZW4oZnVuY3Rpb24gKHZpZXcpIHtcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgdGhlIGR1bW15IHdpZGdldCB3aXRoIHRoZSBuZXcgb25lLlxuICAgICAgICAgICAgdmFyIGkgPSBBcnJheUV4dC5maXJzdEluZGV4T2YoX3RoaXMucFdpZGdldC53aWRnZXRzLCBkdW1teSk7XG4gICAgICAgICAgICBfdGhpcy5wV2lkZ2V0Lmluc2VydFdpZGdldChpLCB2aWV3LnBXaWRnZXQpO1xuICAgICAgICAgICAgZHVtbXkuZGlzcG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHZpZXc7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCgnQ291bGQgbm90IGFkZCBjaGlsZCB2aWV3IHRvIGJveCcsIHRydWUpKTtcbiAgICB9O1xuICAgIEJveFZpZXcucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbl92aWV3cyA9IG51bGw7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVtb3ZlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBCb3hWaWV3LmNsYXNzX21hcCA9IHtcbiAgICAgICAgc3VjY2VzczogWydhbGVydCcsICdhbGVydC1zdWNjZXNzJ10sXG4gICAgICAgIGluZm86IFsnYWxlcnQnLCAnYWxlcnQtaW5mbyddLFxuICAgICAgICB3YXJuaW5nOiBbJ2FsZXJ0JywgJ2FsZXJ0LXdhcm5pbmcnXSxcbiAgICAgICAgZGFuZ2VyOiBbJ2FsZXJ0JywgJ2FsZXJ0LWRhbmdlciddXG4gICAgfTtcbiAgICByZXR1cm4gQm94Vmlldztcbn0oRE9NV2lkZ2V0VmlldykpO1xuZXhwb3J0IHsgQm94VmlldyB9O1xudmFyIEhCb3hWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhIQm94VmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBIQm94VmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBIQm94Vmlldy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChwYXJhbWV0ZXJzKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIHBhcmFtZXRlcnMpO1xuICAgICAgICB0aGlzLnBXaWRnZXQuYWRkQ2xhc3MoJ3dpZGdldC1oYm94Jyk7XG4gICAgfTtcbiAgICByZXR1cm4gSEJveFZpZXc7XG59KEJveFZpZXcpKTtcbmV4cG9ydCB7IEhCb3hWaWV3IH07XG52YXIgVkJveFZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFZCb3hWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFZCb3hWaWV3KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIFZCb3hWaWV3LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKHBhcmFtZXRlcnMpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcywgcGFyYW1ldGVycyk7XG4gICAgICAgIHRoaXMucFdpZGdldC5hZGRDbGFzcygnd2lkZ2V0LXZib3gnKTtcbiAgICB9O1xuICAgIHJldHVybiBWQm94Vmlldztcbn0oQm94VmlldykpO1xuZXhwb3J0IHsgVkJveFZpZXcgfTtcbnZhciBHcmlkQm94VmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoR3JpZEJveFZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gR3JpZEJveFZpZXcoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHVibGljIGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgR3JpZEJveFZpZXcucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAocGFyYW1ldGVycykge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmluaXRpYWxpemUuY2FsbCh0aGlzLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgdGhpcy5wV2lkZ2V0LmFkZENsYXNzKCd3aWRnZXQtZ3JpZGJveCcpO1xuICAgICAgICAvLyBkaXNwbGF5IG5lZWRuJ3QgYmUgc2V0IHRvIGZsZXggYW5kIGdyaWQgXG4gICAgICAgIHRoaXMucFdpZGdldC5yZW1vdmVDbGFzcygnd2lkZ2V0LWJveCcpO1xuICAgIH07XG4gICAgcmV0dXJuIEdyaWRCb3hWaWV3O1xufShCb3hWaWV3KSk7XG5leHBvcnQgeyBHcmlkQm94VmlldyB9O1xudmFyIEdyaWRCb3hNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoR3JpZEJveE1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEdyaWRCb3hNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBHcmlkQm94TW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBfdmlld19uYW1lOiAnR3JpZEJveFZpZXcnLFxuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdHcmlkQm94TW9kZWwnLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBHcmlkQm94TW9kZWw7XG59KEJveE1vZGVsKSk7XG5leHBvcnQgeyBHcmlkQm94TW9kZWwgfTtcbiIsIi8vIFRyaW1zIGluc2lnbmlmaWNhbnQgemVyb3MsIGUuZy4sIHJlcGxhY2VzIDEuMjAwMGsgd2l0aCAxLjJrLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocykge1xuICBvdXQ6IGZvciAodmFyIG4gPSBzLmxlbmd0aCwgaSA9IDEsIGkwID0gLTEsIGkxOyBpIDwgbjsgKytpKSB7XG4gICAgc3dpdGNoIChzW2ldKSB7XG4gICAgICBjYXNlIFwiLlwiOiBpMCA9IGkxID0gaTsgYnJlYWs7XG4gICAgICBjYXNlIFwiMFwiOiBpZiAoaTAgPT09IDApIGkwID0gaTsgaTEgPSBpOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IGlmICghK3NbaV0pIGJyZWFrIG91dDsgaWYgKGkwID4gMCkgaTAgPSAwOyBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGkwID4gMCA/IHMuc2xpY2UoMCwgaTApICsgcy5zbGljZShpMSArIDEpIDogcztcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgSnVweXRlciBEZXZlbG9wbWVudCBUZWFtLlxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNb2RpZmllZCBCU0QgTGljZW5zZS5cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IHsgQ29yZURlc2NyaXB0aW9uTW9kZWwgfSBmcm9tICcuL3dpZGdldF9jb3JlJztcbmltcG9ydCB7IERlc2NyaXB0aW9uVmlldyB9IGZyb20gJy4vd2lkZ2V0X2Rlc2NyaXB0aW9uJztcbmltcG9ydCB7IHV1aWQgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG52YXIgQ29sb3JQaWNrZXJNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ29sb3JQaWNrZXJNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb2xvclBpY2tlck1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIENvbG9yUGlja2VyTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICB2YWx1ZTogJ2JsYWNrJyxcbiAgICAgICAgICAgIGNvbmNpc2U6IGZhbHNlLFxuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdDb2xvclBpY2tlck1vZGVsJyxcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdDb2xvclBpY2tlclZpZXcnXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIENvbG9yUGlja2VyTW9kZWw7XG59KENvcmVEZXNjcmlwdGlvbk1vZGVsKSk7XG5leHBvcnQgeyBDb2xvclBpY2tlck1vZGVsIH07XG52YXIgQ29sb3JQaWNrZXJWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb2xvclBpY2tlclZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29sb3JQaWNrZXJWaWV3KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIENvbG9yUGlja2VyVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItd2lkZ2V0cycpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1pbmxpbmUtaGJveCcpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1jb2xvcnBpY2tlcicpO1xuICAgICAgICB0aGlzLl9jb2xvcl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5fY29sb3JfY29udGFpbmVyLmNsYXNzTmFtZSA9ICd3aWRnZXQtaW5saW5lLWhib3ggd2lkZ2V0LWNvbG9ycGlja2VyLWlucHV0JztcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLl9jb2xvcl9jb250YWluZXIpO1xuICAgICAgICB0aGlzLl90ZXh0Ym94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGhpcy5fdGV4dGJveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICB0aGlzLl90ZXh0Ym94LmlkID0gdGhpcy5sYWJlbC5odG1sRm9yID0gdXVpZCgpO1xuICAgICAgICB0aGlzLl9jb2xvcl9jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5fdGV4dGJveCk7XG4gICAgICAgIHRoaXMuX3RleHRib3gudmFsdWUgPSB0aGlzLm1vZGVsLmdldCgndmFsdWUnKTtcbiAgICAgICAgdGhpcy5fY29sb3JwaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aGlzLl9jb2xvcnBpY2tlci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY29sb3InKTtcbiAgICAgICAgdGhpcy5fY29sb3JfY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuX2NvbG9ycGlja2VyKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOnZhbHVlJywgdGhpcy5fdXBkYXRlX3ZhbHVlKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOmNvbmNpc2UnLCB0aGlzLl91cGRhdGVfY29uY2lzZSk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZV9jb25jaXNlKCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZV92YWx1ZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcbiAgICAgKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBtb2RlbCBpcyBjaGFuZ2VkLiBUaGUgbW9kZWwgbWF5IGhhdmUgYmVlblxuICAgICAqIGNoYW5nZWQgYnkgYW5vdGhlciB2aWV3IG9yIGJ5IGEgc3RhdGUgdXBkYXRlIGZyb20gdGhlIGJhY2stZW5kLlxuICAgICAqL1xuICAgIENvbG9yUGlja2VyVmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnVwZGF0ZWRfdmlldyAhPSB0aGlzKSB7XG4gICAgICAgICAgICB2YXIgZGlzYWJsZWQgPSB0aGlzLm1vZGVsLmdldCgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIHRoaXMuX3RleHRib3guZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgICAgICAgIHRoaXMuX2NvbG9ycGlja2VyLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBDb2xvclBpY2tlclZpZXcucHJvdG90eXBlLmV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVHlwZXNjcmlwdCBkb2Vzbid0IHVuZGVyc3RhbmQgdGhhdCB0aGVzZSBmdW5jdGlvbnMgYXJlIGNhbGxlZCwgc28gd2VcbiAgICAgICAgLy8gc3BlY2lmaWNhbGx5IHVzZSB0aGVtIGhlcmUgc28gaXQga25vd3MgdGhleSBhcmUgYmVpbmcgdXNlZC5cbiAgICAgICAgdm9pZCB0aGlzLl9waWNrZXJfY2hhbmdlO1xuICAgICAgICB2b2lkIHRoaXMuX3RleHRfY2hhbmdlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ2NoYW5nZSBbdHlwZT1cImNvbG9yXCJdJzogJ19waWNrZXJfY2hhbmdlJyxcbiAgICAgICAgICAgICdjaGFuZ2UgW3R5cGU9XCJ0ZXh0XCJdJzogJ190ZXh0X2NoYW5nZSdcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIENvbG9yUGlja2VyVmlldy5wcm90b3R5cGUuX3VwZGF0ZV92YWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJyk7XG4gICAgICAgIHRoaXMuX2NvbG9ycGlja2VyLnZhbHVlID0gY29sb3IyaGV4KHZhbHVlKTtcbiAgICAgICAgdGhpcy5fdGV4dGJveC52YWx1ZSA9IHZhbHVlO1xuICAgIH07XG4gICAgQ29sb3JQaWNrZXJWaWV3LnByb3RvdHlwZS5fdXBkYXRlX2NvbmNpc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb25jaXNlID0gdGhpcy5tb2RlbC5nZXQoJ2NvbmNpc2UnKTtcbiAgICAgICAgaWYgKGNvbmNpc2UpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnY29uY2lzZScpO1xuICAgICAgICAgICAgdGhpcy5fdGV4dGJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdjb25jaXNlJyk7XG4gICAgICAgICAgICB0aGlzLl90ZXh0Ym94LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29sb3JQaWNrZXJWaWV3LnByb3RvdHlwZS5fcGlja2VyX2NoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ3ZhbHVlJywgdGhpcy5fY29sb3JwaWNrZXIudmFsdWUpO1xuICAgICAgICB0aGlzLnRvdWNoKCk7XG4gICAgfTtcbiAgICBDb2xvclBpY2tlclZpZXcucHJvdG90eXBlLl90ZXh0X2NoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5fdmFsaWRhdGVfY29sb3IodGhpcy5fdGV4dGJveC52YWx1ZSwgdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJykpO1xuICAgICAgICB0aGlzLm1vZGVsLnNldCgndmFsdWUnLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMudG91Y2goKTtcbiAgICB9O1xuICAgIENvbG9yUGlja2VyVmlldy5wcm90b3R5cGUuX3ZhbGlkYXRlX2NvbG9yID0gZnVuY3Rpb24gKGNvbG9yLCBmYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gY29sb3IubWF0Y2goLyNbYS1mQS1GMC05XXszfSg/OlthLWZBLUYwLTldezN9KT8kLykgfHxcbiAgICAgICAgICAgIG5hbWVkX2NvbG9yc1tjb2xvci50b0xvd2VyQ2FzZSgpXSA/IGNvbG9yIDogZmFsbGJhY2s7XG4gICAgfTtcbiAgICByZXR1cm4gQ29sb3JQaWNrZXJWaWV3O1xufShEZXNjcmlwdGlvblZpZXcpKTtcbmV4cG9ydCB7IENvbG9yUGlja2VyVmlldyB9O1xudmFyIG5hbWVkX2NvbG9ycyA9IHsgYWxpY2VibHVlOiAnI2YwZjhmZicsIGFudGlxdWV3aGl0ZTogJyNmYWViZDcnLCBhcXVhOiAnIzAwZmZmZicsIGFxdWFtYXJpbmU6ICcjN2ZmZmQ0JywgYXp1cmU6ICcjZjBmZmZmJywgYmVpZ2U6ICcjZjVmNWRjJywgYmlzcXVlOiAnI2ZmZTRjNCcsIGJsYWNrOiAnIzAwMDAwMCcsIGJsYW5jaGVkYWxtb25kOiAnI2ZmZWJjZCcsIGJsdWU6ICcjMDAwMGZmJywgYmx1ZXZpb2xldDogJyM4YTJiZTInLCBicm93bjogJyNhNTJhMmEnLCBidXJseXdvb2Q6ICcjZGViODg3JywgY2FkZXRibHVlOiAnIzVmOWVhMCcsIGNoYXJ0cmV1c2U6ICcjN2ZmZjAwJywgY2hvY29sYXRlOiAnI2QyNjkxZScsIGNvcmFsOiAnI2ZmN2Y1MCcsIGNvcm5mbG93ZXJibHVlOiAnIzY0OTVlZCcsIGNvcm5zaWxrOiAnI2ZmZjhkYycsIGNyaW1zb246ICcjZGMxNDNjJywgY3lhbjogJyMwMGZmZmYnLCBkYXJrYmx1ZTogJyMwMDAwOGInLCBkYXJrY3lhbjogJyMwMDhiOGInLCBkYXJrZ29sZGVucm9kOiAnI2I4ODYwYicsIGRhcmtncmF5OiAnI2E5YTlhOScsIGRhcmtncmV5OiAnI2E5YTlhOScsIGRhcmtncmVlbjogJyMwMDY0MDAnLCBkYXJra2hha2k6ICcjYmRiNzZiJywgZGFya21hZ2VudGE6ICcjOGIwMDhiJywgZGFya29saXZlZ3JlZW46ICcjNTU2YjJmJywgZGFya29yYW5nZTogJyNmZjhjMDAnLCBkYXJrb3JjaGlkOiAnIzk5MzJjYycsIGRhcmtyZWQ6ICcjOGIwMDAwJywgZGFya3NhbG1vbjogJyNlOTk2N2EnLCBkYXJrc2VhZ3JlZW46ICcjOGZiYzhmJywgZGFya3NsYXRlYmx1ZTogJyM0ODNkOGInLCBkYXJrc2xhdGVncmF5OiAnIzJmNGY0ZicsIGRhcmtzbGF0ZWdyZXk6ICcjMmY0ZjRmJywgZGFya3R1cnF1b2lzZTogJyMwMGNlZDEnLCBkYXJrdmlvbGV0OiAnIzk0MDBkMycsIGRlZXBwaW5rOiAnI2ZmMTQ5MycsIGRlZXBza3libHVlOiAnIzAwYmZmZicsIGRpbWdyYXk6ICcjNjk2OTY5JywgZGltZ3JleTogJyM2OTY5NjknLCBkb2RnZXJibHVlOiAnIzFlOTBmZicsIGZpcmVicmljazogJyNiMjIyMjInLCBmbG9yYWx3aGl0ZTogJyNmZmZhZjAnLCBmb3Jlc3RncmVlbjogJyMyMjhiMjInLCBmdWNoc2lhOiAnI2ZmMDBmZicsIGdhaW5zYm9ybzogJyNkY2RjZGMnLCBnaG9zdHdoaXRlOiAnI2Y4ZjhmZicsIGdvbGQ6ICcjZmZkNzAwJywgZ29sZGVucm9kOiAnI2RhYTUyMCcsIGdyYXk6ICcjODA4MDgwJywgZ3JleTogJyM4MDgwODAnLCBncmVlbjogJyMwMDgwMDAnLCBncmVlbnllbGxvdzogJyNhZGZmMmYnLCBob25leWRldzogJyNmMGZmZjAnLCBob3RwaW5rOiAnI2ZmNjliNCcsIGluZGlhbnJlZDogJyNjZDVjNWMnLCBpbmRpZ286ICcjNGIwMDgyJywgaXZvcnk6ICcjZmZmZmYwJywga2hha2k6ICcjZjBlNjhjJywgbGF2ZW5kZXI6ICcjZTZlNmZhJywgbGF2ZW5kZXJibHVzaDogJyNmZmYwZjUnLCBsYXduZ3JlZW46ICcjN2NmYzAwJywgbGVtb25jaGlmZm9uOiAnI2ZmZmFjZCcsIGxpZ2h0Ymx1ZTogJyNhZGQ4ZTYnLCBsaWdodGNvcmFsOiAnI2YwODA4MCcsIGxpZ2h0Y3lhbjogJyNlMGZmZmYnLCBsaWdodGdvbGRlbnJvZHllbGxvdzogJyNmYWZhZDInLCBsaWdodGdyZWVuOiAnIzkwZWU5MCcsIGxpZ2h0Z3JheTogJyNkM2QzZDMnLCBsaWdodGdyZXk6ICcjZDNkM2QzJywgbGlnaHRwaW5rOiAnI2ZmYjZjMScsIGxpZ2h0c2FsbW9uOiAnI2ZmYTA3YScsIGxpZ2h0c2VhZ3JlZW46ICcjMjBiMmFhJywgbGlnaHRza3libHVlOiAnIzg3Y2VmYScsIGxpZ2h0c2xhdGVncmF5OiAnIzc3ODg5OScsIGxpZ2h0c2xhdGVncmV5OiAnIzc3ODg5OScsIGxpZ2h0c3RlZWxibHVlOiAnI2IwYzRkZScsIGxpZ2h0eWVsbG93OiAnI2ZmZmZlMCcsIGxpbWU6ICcjMDBmZjAwJywgbGltZWdyZWVuOiAnIzMyY2QzMicsIGxpbmVuOiAnI2ZhZjBlNicsIG1hZ2VudGE6ICcjZmYwMGZmJywgbWFyb29uOiAnIzgwMDAwMCcsIG1lZGl1bWFxdWFtYXJpbmU6ICcjNjZjZGFhJywgbWVkaXVtYmx1ZTogJyMwMDAwY2QnLCBtZWRpdW1vcmNoaWQ6ICcjYmE1NWQzJywgbWVkaXVtcHVycGxlOiAnIzkzNzBkYicsIG1lZGl1bXNlYWdyZWVuOiAnIzNjYjM3MScsIG1lZGl1bXNsYXRlYmx1ZTogJyM3YjY4ZWUnLCBtZWRpdW1zcHJpbmdncmVlbjogJyMwMGZhOWEnLCBtZWRpdW10dXJxdW9pc2U6ICcjNDhkMWNjJywgbWVkaXVtdmlvbGV0cmVkOiAnI2M3MTU4NScsIG1pZG5pZ2h0Ymx1ZTogJyMxOTE5NzAnLCBtaW50Y3JlYW06ICcjZjVmZmZhJywgbWlzdHlyb3NlOiAnI2ZmZTRlMScsIG1vY2Nhc2luOiAnI2ZmZTRiNScsIG5hdmFqb3doaXRlOiAnI2ZmZGVhZCcsIG5hdnk6ICcjMDAwMDgwJywgb2xkbGFjZTogJyNmZGY1ZTYnLCBvbGl2ZTogJyM4MDgwMDAnLCBvbGl2ZWRyYWI6ICcjNmI4ZTIzJywgb3JhbmdlOiAnI2ZmYTUwMCcsIG9yYW5nZXJlZDogJyNmZjQ1MDAnLCBvcmNoaWQ6ICcjZGE3MGQ2JywgcGFsZWdvbGRlbnJvZDogJyNlZWU4YWEnLCBwYWxlZ3JlZW46ICcjOThmYjk4JywgcGFsZXR1cnF1b2lzZTogJyNhZmVlZWUnLCBwYWxldmlvbGV0cmVkOiAnI2RiNzA5MycsIHBhcGF5YXdoaXA6ICcjZmZlZmQ1JywgcGVhY2hwdWZmOiAnI2ZmZGFiOScsIHBlcnU6ICcjY2Q4NTNmJywgcGluazogJyNmZmMwY2InLCBwbHVtOiAnI2RkYTBkZCcsIHBvd2RlcmJsdWU6ICcjYjBlMGU2JywgcHVycGxlOiAnIzgwMDA4MCcsIHJlZDogJyNmZjAwMDAnLCByb3N5YnJvd246ICcjYmM4ZjhmJywgcm95YWxibHVlOiAnIzQxNjllMScsIHNhZGRsZWJyb3duOiAnIzhiNDUxMycsIHNhbG1vbjogJyNmYTgwNzInLCBzYW5keWJyb3duOiAnI2Y0YTQ2MCcsIHNlYWdyZWVuOiAnIzJlOGI1NycsIHNlYXNoZWxsOiAnI2ZmZjVlZScsIHNpZW5uYTogJyNhMDUyMmQnLCBzaWx2ZXI6ICcjYzBjMGMwJywgc2t5Ymx1ZTogJyM4N2NlZWInLCBzbGF0ZWJsdWU6ICcjNmE1YWNkJywgc2xhdGVncmF5OiAnIzcwODA5MCcsIHNsYXRlZ3JleTogJyM3MDgwOTAnLCBzbm93OiAnI2ZmZmFmYScsIHNwcmluZ2dyZWVuOiAnIzAwZmY3ZicsIHN0ZWVsYmx1ZTogJyM0NjgyYjQnLCB0YW46ICcjZDJiNDhjJywgdGVhbDogJyMwMDgwODAnLCB0aGlzdGxlOiAnI2Q4YmZkOCcsIHRvbWF0bzogJyNmZjYzNDcnLCB0dXJxdW9pc2U6ICcjNDBlMGQwJywgdmlvbGV0OiAnI2VlODJlZScsIHdoZWF0OiAnI2Y1ZGViMycsIHdoaXRlOiAnI2ZmZmZmZicsIHdoaXRlc21va2U6ICcjZjVmNWY1JywgeWVsbG93OiAnI2ZmZmYwMCcsIHllbGxvd2dyZWVuOiAnIzlhY2QzMicsIH07XG4vKlxuICogRnJvbSBhIHZhbGlkIGh0bWwgY29sb3IgKG5hbWVkIGNvbG9yLCA2LWRpZ2l0cyBvciAzLWRpZ2l0cyBoZXggZm9ybWF0KVxuICogcmV0dXJuIGEgNi1kaWdpdHMgaGV4YWRlY2ltYWwgY29sb3IgI3JyZ2diYi5cbiAqL1xuZnVuY3Rpb24gY29sb3IyaGV4KGNvbG9yKSB7XG4gICAgcmV0dXJuIG5hbWVkX2NvbG9yc1tjb2xvci50b0xvd2VyQ2FzZSgpXSB8fCByZ2IzX3RvX3JnYjYoY29sb3IpO1xufVxuZnVuY3Rpb24gcmdiM190b19yZ2I2KHJnYikge1xuICAgIGlmIChyZ2IubGVuZ3RoID09PSA3KSB7XG4gICAgICAgIHJldHVybiByZ2I7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gJyMnICsgcmdiLmNoYXJBdCgxKSArIHJnYi5jaGFyQXQoMSkgK1xuICAgICAgICAgICAgcmdiLmNoYXJBdCgyKSArIHJnYi5jaGFyQXQoMikgK1xuICAgICAgICAgICAgcmdiLmNoYXJBdCgzKSArIHJnYi5jaGFyQXQoMyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZ3JvdXBpbmcsIHRob3VzYW5kcykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUsIHdpZHRoKSB7XG4gICAgdmFyIGkgPSB2YWx1ZS5sZW5ndGgsXG4gICAgICAgIHQgPSBbXSxcbiAgICAgICAgaiA9IDAsXG4gICAgICAgIGcgPSBncm91cGluZ1swXSxcbiAgICAgICAgbGVuZ3RoID0gMDtcblxuICAgIHdoaWxlIChpID4gMCAmJiBnID4gMCkge1xuICAgICAgaWYgKGxlbmd0aCArIGcgKyAxID4gd2lkdGgpIGcgPSBNYXRoLm1heCgxLCB3aWR0aCAtIGxlbmd0aCk7XG4gICAgICB0LnB1c2godmFsdWUuc3Vic3RyaW5nKGkgLT0gZywgaSArIGcpKTtcbiAgICAgIGlmICgobGVuZ3RoICs9IGcgKyAxKSA+IHdpZHRoKSBicmVhaztcbiAgICAgIGcgPSBncm91cGluZ1tqID0gKGogKyAxKSAlIGdyb3VwaW5nLmxlbmd0aF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHQucmV2ZXJzZSgpLmpvaW4odGhvdXNhbmRzKTtcbiAgfTtcbn1cbiIsImltcG9ydCBmb3JtYXREZWNpbWFsIGZyb20gXCIuL2Zvcm1hdERlY2ltYWwuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4geCA9IGZvcm1hdERlY2ltYWwoTWF0aC5hYnMoeCkpLCB4ID8geFsxXSA6IE5hTjtcbn1cbiIsIi8vIENvbXB1dGVzIHRoZSBkZWNpbWFsIGNvZWZmaWNpZW50IGFuZCBleHBvbmVudCBvZiB0aGUgc3BlY2lmaWVkIG51bWJlciB4IHdpdGhcbi8vIHNpZ25pZmljYW50IGRpZ2l0cyBwLCB3aGVyZSB4IGlzIHBvc2l0aXZlIGFuZCBwIGlzIGluIFsxLCAyMV0gb3IgdW5kZWZpbmVkLlxuLy8gRm9yIGV4YW1wbGUsIGZvcm1hdERlY2ltYWwoMS4yMykgcmV0dXJucyBbXCIxMjNcIiwgMF0uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4LCBwKSB7XG4gIGlmICgoaSA9ICh4ID0gcCA/IHgudG9FeHBvbmVudGlhbChwIC0gMSkgOiB4LnRvRXhwb25lbnRpYWwoKSkuaW5kZXhPZihcImVcIikpIDwgMCkgcmV0dXJuIG51bGw7IC8vIE5hTiwgwrFJbmZpbml0eVxuICB2YXIgaSwgY29lZmZpY2llbnQgPSB4LnNsaWNlKDAsIGkpO1xuXG4gIC8vIFRoZSBzdHJpbmcgcmV0dXJuZWQgYnkgdG9FeHBvbmVudGlhbCBlaXRoZXIgaGFzIHRoZSBmb3JtIFxcZFxcLlxcZCtlWy0rXVxcZCtcbiAgLy8gKGUuZy4sIDEuMmUrMykgb3IgdGhlIGZvcm0gXFxkZVstK11cXGQrIChlLmcuLCAxZSszKS5cbiAgcmV0dXJuIFtcbiAgICBjb2VmZmljaWVudC5sZW5ndGggPiAxID8gY29lZmZpY2llbnRbMF0gKyBjb2VmZmljaWVudC5zbGljZSgyKSA6IGNvZWZmaWNpZW50LFxuICAgICt4LnNsaWNlKGkgKyAxKVxuICBdO1xufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBKdXB5dGVyIERldmVsb3BtZW50IFRlYW0uXG4vLyBEaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1vZGlmaWVkIEJTRCBMaWNlbnNlLlxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBET01XaWRnZXRWaWV3LCBWaWV3TGlzdCB9IGZyb20gJ0BqdXB5dGVyLXdpZGdldHMvYmFzZSc7XG5pbXBvcnQgeyBCb3hNb2RlbCB9IGZyb20gJy4vd2lkZ2V0X2JveCc7XG5pbXBvcnQgeyBUYWJQYW5lbCB9IGZyb20gJy4vcGhvc3Bob3IvdGFicGFuZWwnO1xuaW1wb3J0IHsgQWNjb3JkaW9uIH0gZnJvbSAnLi9waG9zcGhvci9hY2NvcmRpb24nO1xuaW1wb3J0IHsgV2lkZ2V0IH0gZnJvbSAnQHBob3NwaG9yL3dpZGdldHMnO1xuaW1wb3J0IHsgZWFjaCwgQXJyYXlFeHQgfSBmcm9tICdAcGhvc3Bob3IvYWxnb3JpdGhtJztcbmltcG9ydCB7IE1lc3NhZ2VMb29wIH0gZnJvbSAnQHBob3NwaG9yL21lc3NhZ2luZyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xudmFyIFNlbGVjdGlvbkNvbnRhaW5lck1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTZWxlY3Rpb25Db250YWluZXJNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTZWxlY3Rpb25Db250YWluZXJNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBTZWxlY3Rpb25Db250YWluZXJNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnU2VsZWN0aW9uQ29udGFpbmVyTW9kZWwnLFxuICAgICAgICAgICAgc2VsZWN0ZWRfaW5kZXg6IDAsXG4gICAgICAgICAgICBfdGl0bGVzOiB7fVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBTZWxlY3Rpb25Db250YWluZXJNb2RlbDtcbn0oQm94TW9kZWwpKTtcbmV4cG9ydCB7IFNlbGVjdGlvbkNvbnRhaW5lck1vZGVsIH07XG52YXIgQWNjb3JkaW9uTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFjY29yZGlvbk1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFjY29yZGlvbk1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEFjY29yZGlvbk1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdBY2NvcmRpb25Nb2RlbCcsXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnQWNjb3JkaW9uVmlldydcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQWNjb3JkaW9uTW9kZWw7XG59KFNlbGVjdGlvbkNvbnRhaW5lck1vZGVsKSk7XG5leHBvcnQgeyBBY2NvcmRpb25Nb2RlbCB9O1xuLy8gV2UgaW1wbGVtZW50IG91ciBvd24gdGFiIHdpZGdldCBzaW5jZSBQaG9zaHBvcidzIFRhYlBhbmVsIHVzZXMgYW4gYWJzb2x1dGVcbi8vIHBvc2l0aW9uaW5nIEJveExheW91dCwgYnV0IHdlIHdhbnQgYSBtb3JlIGFuIGh0bWwvY3NzLWJhc2VkIFBhbmVsIGxheW91dC5cbnZhciBKdXB5dGVyUGhvc3Bob3JBY2NvcmRpb25XaWRnZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEp1cHl0ZXJQaG9zcGhvckFjY29yZGlvbldpZGdldCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKdXB5dGVyUGhvc3Bob3JBY2NvcmRpb25XaWRnZXQob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgdmlldyA9IG9wdGlvbnMudmlldztcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMudmlldztcbiAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fdmlldyA9IHZpZXc7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvY2VzcyB0aGUgcGhvc3Bob3IgbWVzc2FnZS5cbiAgICAgKlxuICAgICAqIEFueSBjdXN0b20gcGhvc3Bob3Igd2lkZ2V0IHVzZWQgaW5zaWRlIGEgSnVweXRlciB3aWRnZXQgc2hvdWxkIG92ZXJyaWRlXG4gICAgICogdGhlIHByb2Nlc3NNZXNzYWdlIGZ1bmN0aW9uIGxpa2UgdGhpcy5cbiAgICAgKi9cbiAgICBKdXB5dGVyUGhvc3Bob3JBY2NvcmRpb25XaWRnZXQucHJvdG90eXBlLnByb2Nlc3NNZXNzYWdlID0gZnVuY3Rpb24gKG1zZykge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnByb2Nlc3NNZXNzYWdlLmNhbGwodGhpcywgbXNnKTtcbiAgICAgICAgdGhpcy5fdmlldy5wcm9jZXNzUGhvc3Bob3JNZXNzYWdlKG1zZyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEaXNwb3NlIHRoZSB3aWRnZXQuXG4gICAgICpcbiAgICAgKiBUaGlzIGNhdXNlcyB0aGUgdmlldyB0byBiZSBkZXN0cm95ZWQgYXMgd2VsbCB3aXRoICdyZW1vdmUnXG4gICAgICovXG4gICAgSnVweXRlclBob3NwaG9yQWNjb3JkaW9uV2lkZ2V0LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kaXNwb3NlLmNhbGwodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLl92aWV3KSB7XG4gICAgICAgICAgICB0aGlzLl92aWV3LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ZpZXcgPSBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIEp1cHl0ZXJQaG9zcGhvckFjY29yZGlvbldpZGdldDtcbn0oQWNjb3JkaW9uKSk7XG5leHBvcnQgeyBKdXB5dGVyUGhvc3Bob3JBY2NvcmRpb25XaWRnZXQgfTtcbnZhciBBY2NvcmRpb25WaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBY2NvcmRpb25WaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFjY29yZGlvblZpZXcoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQWNjb3JkaW9uVmlldy5wcm90b3R5cGUuX2NyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFnTmFtZSkge1xuICAgICAgICB0aGlzLnBXaWRnZXQgPSBuZXcgSnVweXRlclBob3NwaG9yQWNjb3JkaW9uV2lkZ2V0KHsgdmlldzogdGhpcyB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMucFdpZGdldC5ub2RlO1xuICAgIH07XG4gICAgQWNjb3JkaW9uVmlldy5wcm90b3R5cGUuX3NldEVsZW1lbnQgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgaWYgKHRoaXMuZWwgfHwgZWwgIT09IHRoaXMucFdpZGdldC5ub2RlKSB7XG4gICAgICAgICAgICAvLyBBY2NvcmRpb25zIGRvbid0IGFsbG93IHNldHRpbmcgdGhlIGVsZW1lbnQgYmV5b25kIHRoZSBpbml0aWFsIGNyZWF0aW9uLlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVzZXQgdGhlIERPTSBlbGVtZW50LicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWwgPSB0aGlzLnBXaWRnZXQubm9kZTtcbiAgICAgICAgdGhpcy4kZWwgPSAkKHRoaXMucFdpZGdldC5ub2RlKTtcbiAgICB9O1xuICAgIEFjY29yZGlvblZpZXcucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAocGFyYW1ldGVycykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmluaXRpYWxpemUuY2FsbCh0aGlzLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbl92aWV3cyA9IG5ldyBWaWV3TGlzdCh0aGlzLmFkZF9jaGlsZF92aWV3LCB0aGlzLnJlbW92ZV9jaGlsZF92aWV3LCB0aGlzKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOmNoaWxkcmVuJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMudXBkYXRlQ2hpbGRyZW4oKTsgfSk7XG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpzZWxlY3RlZF9pbmRleCcsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnVwZGF0ZV9zZWxlY3RlZF9pbmRleCgpOyB9KTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOl90aXRsZXMnLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy51cGRhdGVfdGl0bGVzKCk7IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gdmlldyBpcyByZW5kZXJlZC5cbiAgICAgKi9cbiAgICBBY2NvcmRpb25WaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHZhciBhY2NvcmRpb24gPSB0aGlzLnBXaWRnZXQ7XG4gICAgICAgIGFjY29yZGlvbi5hZGRDbGFzcygnanVweXRlci13aWRnZXRzJyk7XG4gICAgICAgIGFjY29yZGlvbi5hZGRDbGFzcygnd2lkZ2V0LWFjY29yZGlvbicpO1xuICAgICAgICBhY2NvcmRpb24uYWRkQ2xhc3MoJ3dpZGdldC1jb250YWluZXInKTtcbiAgICAgICAgYWNjb3JkaW9uLnNlbGVjdGlvbi5zZWxlY3Rpb25DaGFuZ2VkLmNvbm5lY3QoZnVuY3Rpb24gKHNlbmRlcikge1xuICAgICAgICAgICAgaWYgKCFfdGhpcy51cGRhdGluZ0NoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMubW9kZWwuc2V0KCdzZWxlY3RlZF9pbmRleCcsIGFjY29yZGlvbi5zZWxlY3Rpb24uaW5kZXgpO1xuICAgICAgICAgICAgICAgIF90aGlzLnRvdWNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoaWxkcmVuX3ZpZXdzLnVwZGF0ZSh0aGlzLm1vZGVsLmdldCgnY2hpbGRyZW4nKSk7XG4gICAgICAgIHRoaXMudXBkYXRlX3RpdGxlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZV9zZWxlY3RlZF9pbmRleCgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlIGNoaWxkcmVuXG4gICAgICovXG4gICAgQWNjb3JkaW9uVmlldy5wcm90b3R5cGUudXBkYXRlQ2hpbGRyZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFdoaWxlIHdlIGFyZSB1cGRhdGluZywgdGhlIGluZGV4IG1heSBub3QgYmUgdmFsaWQsIHNvIGRlc2VsZWN0IHRoZVxuICAgICAgICAvLyB0YWJzIGJlZm9yZSB1cGRhdGluZyBzbyB3ZSBkb24ndCBnZXQgc3B1cmlvdXMgY2hhbmdlcyBpbiB0aGUgaW5kZXgsXG4gICAgICAgIC8vIHdoaWNoIHdvdWxkIHRoZW4gc2V0IG9mZiBhbm90aGVyIHN5bmMgY3ljbGUuXG4gICAgICAgIHRoaXMudXBkYXRpbmdDaGlsZHJlbiA9IHRydWU7XG4gICAgICAgIHRoaXMucFdpZGdldC5zZWxlY3Rpb24uaW5kZXggPSBudWxsO1xuICAgICAgICB0aGlzLmNoaWxkcmVuX3ZpZXdzLnVwZGF0ZSh0aGlzLm1vZGVsLmdldCgnY2hpbGRyZW4nKSk7XG4gICAgICAgIHRoaXMudXBkYXRlX3NlbGVjdGVkX2luZGV4KCk7XG4gICAgICAgIHRoaXMudXBkYXRpbmdDaGlsZHJlbiA9IGZhbHNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0IGhlYWRlciB0aXRsZXNcbiAgICAgKi9cbiAgICBBY2NvcmRpb25WaWV3LnByb3RvdHlwZS51cGRhdGVfdGl0bGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29sbGFwc2VkID0gdGhpcy5wV2lkZ2V0LmNvbGxhcHNlV2lkZ2V0cztcbiAgICAgICAgdmFyIHRpdGxlcyA9IHRoaXMubW9kZWwuZ2V0KCdfdGl0bGVzJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sbGFwc2VkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGl0bGVzW2ldICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWRbaV0ud2lkZ2V0LnRpdGxlLmxhYmVsID0gdGl0bGVzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNYWtlIHRoZSByZW5kZXJpbmcgYW5kIHNlbGVjdGVkIGluZGV4IGNvbnNpc3RlbnQuXG4gICAgICovXG4gICAgQWNjb3JkaW9uVmlldy5wcm90b3R5cGUudXBkYXRlX3NlbGVjdGVkX2luZGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBXaWRnZXQuc2VsZWN0aW9uLmluZGV4ID0gdGhpcy5tb2RlbC5nZXQoJ3NlbGVjdGVkX2luZGV4Jyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBhIGNoaWxkIGlzIHJlbW92ZWQgZnJvbSBjaGlsZHJlbiBsaXN0LlxuICAgICAqL1xuICAgIEFjY29yZGlvblZpZXcucHJvdG90eXBlLnJlbW92ZV9jaGlsZF92aWV3ID0gZnVuY3Rpb24gKHZpZXcpIHtcbiAgICAgICAgdGhpcy5wV2lkZ2V0LnJlbW92ZVdpZGdldCh2aWV3LnBXaWRnZXQpO1xuICAgICAgICB2aWV3LnJlbW92ZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gYSBjaGlsZCBpcyBhZGRlZCB0byBjaGlsZHJlbiBsaXN0LlxuICAgICAqL1xuICAgIEFjY29yZGlvblZpZXcucHJvdG90eXBlLmFkZF9jaGlsZF92aWV3ID0gZnVuY3Rpb24gKG1vZGVsLCBpbmRleCkge1xuICAgICAgICAvLyBQbGFjZWhvbGRlciB3aWRnZXQgdG8ga2VlcCBvdXIgcG9zaXRpb24gaW4gdGhlIHRhYiBwYW5lbCB3aGlsZSB3ZSBjcmVhdGUgdGhlIHZpZXcuXG4gICAgICAgIHZhciBhY2NvcmRpb24gPSB0aGlzLnBXaWRnZXQ7XG4gICAgICAgIHZhciBwbGFjZWhvbGRlciA9IG5ldyBXaWRnZXQoKTtcbiAgICAgICAgcGxhY2Vob2xkZXIudGl0bGUubGFiZWwgPSB0aGlzLm1vZGVsLmdldCgnX3RpdGxlcycpW2luZGV4XSB8fCAnJztcbiAgICAgICAgYWNjb3JkaW9uLmFkZFdpZGdldChwbGFjZWhvbGRlcik7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZV9jaGlsZF92aWV3KG1vZGVsKS50aGVuKGZ1bmN0aW9uICh2aWV3KSB7XG4gICAgICAgICAgICB2YXIgd2lkZ2V0ID0gdmlldy5wV2lkZ2V0O1xuICAgICAgICAgICAgd2lkZ2V0LnRpdGxlLmxhYmVsID0gcGxhY2Vob2xkZXIudGl0bGUubGFiZWw7XG4gICAgICAgICAgICB2YXIgY29sbGFwc2UgPSBhY2NvcmRpb24uY29sbGFwc2VXaWRnZXRzW2FjY29yZGlvbi5pbmRleE9mKHBsYWNlaG9sZGVyKV07XG4gICAgICAgICAgICBjb2xsYXBzZS53aWRnZXQgPSB3aWRnZXQ7XG4gICAgICAgICAgICBwbGFjZWhvbGRlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICByZXR1cm4gdmlldztcbiAgICAgICAgfSkuY2F0Y2godXRpbHMucmVqZWN0KCdDb3VsZCBub3QgYWRkIGNoaWxkIHZpZXcgdG8gYm94JywgdHJ1ZSkpO1xuICAgIH07XG4gICAgQWNjb3JkaW9uVmlldy5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuX3ZpZXdzID0gbnVsbDtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW1vdmUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIHJldHVybiBBY2NvcmRpb25WaWV3O1xufShET01XaWRnZXRWaWV3KSk7XG5leHBvcnQgeyBBY2NvcmRpb25WaWV3IH07XG52YXIgVGFiTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRhYk1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRhYk1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFRhYk1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdUYWJNb2RlbCcsXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnVGFiVmlldydcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gVGFiTW9kZWw7XG59KFNlbGVjdGlvbkNvbnRhaW5lck1vZGVsKSk7XG5leHBvcnQgeyBUYWJNb2RlbCB9O1xuLy8gV2UgaW1wbGVtZW50IG91ciBvd24gdGFiIHdpZGdldCBzaW5jZSBQaG9zaHBvcidzIFRhYlBhbmVsIHVzZXMgYW4gYWJzb2x1dGVcbi8vIHBvc2l0aW9uaW5nIEJveExheW91dCwgYnV0IHdlIHdhbnQgYSBtb3JlIGFuIGh0bWwvY3NzLWJhc2VkIFBhbmVsIGxheW91dC5cbnZhciBKdXB5dGVyUGhvc3Bob3JUYWJQYW5lbFdpZGdldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSnVweXRlclBob3NwaG9yVGFiUGFuZWxXaWRnZXQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSnVweXRlclBob3NwaG9yVGFiUGFuZWxXaWRnZXQob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgdmlldyA9IG9wdGlvbnMudmlldztcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMudmlldztcbiAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fdmlldyA9IHZpZXc7XG4gICAgICAgIC8vIFdlIHdhbnQgdGhlIHZpZXcncyBtZXNzYWdlcyB0byBiZSB0aGUgbWVzc2FnZXMgdGhlIHRhYkNvbnRlbnRzIHBhbmVsXG4gICAgICAgIC8vIGdldHMuXG4gICAgICAgIE1lc3NhZ2VMb29wLmluc3RhbGxNZXNzYWdlSG9vayhfdGhpcy50YWJDb250ZW50cywgZnVuY3Rpb24gKGhhbmRsZXIsIG1zZykge1xuICAgICAgICAgICAgLy8gVGhlcmUgbWF5IGJlIHRpbWVzIHdoZW4gd2Ugd2FudCB0aGUgdmlldydzIGhhbmRsZXIgdG8gYmUgY2FsbGVkXG4gICAgICAgICAgICAvLyAqYWZ0ZXIqIHRoZSBtZXNzYWdlIGhhcyBiZWVuIHByb2Nlc3NlZCBieSB0aGUgd2lkZ2V0LCBpbiB3aGljaFxuICAgICAgICAgICAgLy8gY2FzZSB3ZSdsbCBuZWVkIHRvIHJldmlzaXQgdXNpbmcgYSBtZXNzYWdlIGhvb2suXG4gICAgICAgICAgICBfdGhpcy5fdmlldy5wcm9jZXNzUGhvc3Bob3JNZXNzYWdlKG1zZyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzcG9zZSB0aGUgd2lkZ2V0LlxuICAgICAqXG4gICAgICogVGhpcyBjYXVzZXMgdGhlIHZpZXcgdG8gYmUgZGVzdHJveWVkIGFzIHdlbGwgd2l0aCAncmVtb3ZlJ1xuICAgICAqL1xuICAgIEp1cHl0ZXJQaG9zcGhvclRhYlBhbmVsV2lkZ2V0LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kaXNwb3NlLmNhbGwodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLl92aWV3KSB7XG4gICAgICAgICAgICB0aGlzLl92aWV3LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ZpZXcgPSBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIEp1cHl0ZXJQaG9zcGhvclRhYlBhbmVsV2lkZ2V0O1xufShUYWJQYW5lbCkpO1xuZXhwb3J0IHsgSnVweXRlclBob3NwaG9yVGFiUGFuZWxXaWRnZXQgfTtcbnZhciBUYWJWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUYWJWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRhYlZpZXcoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy51cGRhdGluZ1RhYnMgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBUYWJWaWV3LnByb3RvdHlwZS5fY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0YWdOYW1lKSB7XG4gICAgICAgIHRoaXMucFdpZGdldCA9IG5ldyBKdXB5dGVyUGhvc3Bob3JUYWJQYW5lbFdpZGdldCh7XG4gICAgICAgICAgICB2aWV3OiB0aGlzLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMucFdpZGdldC5ub2RlO1xuICAgIH07XG4gICAgVGFiVmlldy5wcm90b3R5cGUuX3NldEVsZW1lbnQgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgaWYgKHRoaXMuZWwgfHwgZWwgIT09IHRoaXMucFdpZGdldC5ub2RlKSB7XG4gICAgICAgICAgICAvLyBUYWJWaWV3cyBkb24ndCBhbGxvdyBzZXR0aW5nIHRoZSBlbGVtZW50IGJleW9uZCB0aGUgaW5pdGlhbCBjcmVhdGlvbi5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHJlc2V0IHRoZSBET00gZWxlbWVudC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsID0gdGhpcy5wV2lkZ2V0Lm5vZGU7XG4gICAgICAgIHRoaXMuJGVsID0gJCh0aGlzLnBXaWRnZXQubm9kZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQdWJsaWMgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgVGFiVmlldy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChwYXJhbWV0ZXJzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIHBhcmFtZXRlcnMpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuVmlld3MgPSBuZXcgVmlld0xpc3QodGhpcy5hZGRDaGlsZFZpZXcsIGZ1bmN0aW9uICh2aWV3KSB7IHZpZXcucmVtb3ZlKCk7IH0sIHRoaXMpO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6Y2hpbGRyZW4nLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy51cGRhdGVUYWJzKCk7IH0pO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6X3RpdGxlcycsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnVwZGF0ZVRpdGxlcygpOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHZpZXcgaXMgcmVuZGVyZWQuXG4gICAgICovXG4gICAgVGFiVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICB2YXIgdGFicyA9IHRoaXMucFdpZGdldDtcbiAgICAgICAgdGFicy5hZGRDbGFzcygnanVweXRlci13aWRnZXRzJyk7XG4gICAgICAgIHRhYnMuYWRkQ2xhc3MoJ3dpZGdldC1jb250YWluZXInKTtcbiAgICAgICAgdGFicy5hZGRDbGFzcygnd2lkZ2V0LXRhYicpO1xuICAgICAgICB0YWJzLnRhYnNNb3ZhYmxlID0gdHJ1ZTtcbiAgICAgICAgdGFicy50YWJCYXIuaW5zZXJ0QmVoYXZpb3IgPSAnbm9uZSc7IC8vIG5lZWRlZCBmb3IgaW5zZXJ0IGJlaGF2aW9yLCBzZWUgYmVsb3cuXG4gICAgICAgIHRhYnMudGFiQmFyLmN1cnJlbnRDaGFuZ2VkLmNvbm5lY3QodGhpcy5fb25UYWJDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgdGFicy50YWJCYXIudGFiTW92ZWQuY29ubmVjdCh0aGlzLl9vblRhYk1vdmVkLCB0aGlzKTtcbiAgICAgICAgdGFicy50YWJCYXIuYWRkQ2xhc3MoJ3dpZGdldC10YWItYmFyJyk7XG4gICAgICAgIHRhYnMudGFiQ29udGVudHMuYWRkQ2xhc3MoJ3dpZGdldC10YWItY29udGVudHMnKTtcbiAgICAgICAgLy8gVE9ETzogZXhwb3NlIHRoaXMgb3B0aW9uIGluIHB5dGhvblxuICAgICAgICB0YWJzLnRhYkJhci50YWJzTW92YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVwZGF0ZVRhYnMoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbmRlciB0YWIgdmlld3MgYmFzZWQgb24gdGhlIGN1cnJlbnQgbW9kZWwncyBjaGlsZHJlbi5cbiAgICAgKi9cbiAgICBUYWJWaWV3LnByb3RvdHlwZS51cGRhdGVUYWJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBXaGlsZSB3ZSBhcmUgdXBkYXRpbmcsIHRoZSBpbmRleCBtYXkgbm90IGJlIHZhbGlkLCBzbyBkZXNlbGVjdCB0aGVcbiAgICAgICAgLy8gdGFicyBiZWZvcmUgdXBkYXRpbmcgc28gd2UgZG9uJ3QgZ2V0IHNwdXJpb3VzIGNoYW5nZXMgaW4gdGhlIGluZGV4LFxuICAgICAgICAvLyB3aGljaCB3b3VsZCB0aGVuIHNldCBvZmYgYW5vdGhlciBzeW5jIGN5Y2xlLlxuICAgICAgICB0aGlzLnVwZGF0aW5nVGFicyA9IHRydWU7XG4gICAgICAgIHRoaXMucFdpZGdldC5jdXJyZW50SW5kZXggPSBudWxsO1xuICAgICAgICB0aGlzLmNoaWxkcmVuVmlld3MudXBkYXRlKHRoaXMubW9kZWwuZ2V0KCdjaGlsZHJlbicpKTtcbiAgICAgICAgdGhpcy5wV2lkZ2V0LmN1cnJlbnRJbmRleCA9IHRoaXMubW9kZWwuZ2V0KCdzZWxlY3RlZF9pbmRleCcpO1xuICAgICAgICB0aGlzLnVwZGF0aW5nVGFicyA9IGZhbHNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gYSBjaGlsZCBpcyBhZGRlZCB0byBjaGlsZHJlbiBsaXN0LlxuICAgICAqL1xuICAgIFRhYlZpZXcucHJvdG90eXBlLmFkZENoaWxkVmlldyA9IGZ1bmN0aW9uIChtb2RlbCwgaW5kZXgpIHtcbiAgICAgICAgLy8gUGxhY2Vob2xkZXIgd2lkZ2V0IHRvIGtlZXAgb3VyIHBvc2l0aW9uIGluIHRoZSB0YWIgcGFuZWwgd2hpbGUgd2UgY3JlYXRlIHRoZSB2aWV3LlxuICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLm1vZGVsLmdldCgnX3RpdGxlcycpW2luZGV4XSB8fCAnJztcbiAgICAgICAgdmFyIHRhYnMgPSB0aGlzLnBXaWRnZXQ7XG4gICAgICAgIHZhciBwbGFjZWhvbGRlciA9IG5ldyBXaWRnZXQoKTtcbiAgICAgICAgcGxhY2Vob2xkZXIudGl0bGUubGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGFicy5hZGRXaWRnZXQocGxhY2Vob2xkZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVfY2hpbGRfdmlldyhtb2RlbCkudGhlbihmdW5jdGlvbiAodmlldykge1xuICAgICAgICAgICAgdmFyIHdpZGdldCA9IHZpZXcucFdpZGdldDtcbiAgICAgICAgICAgIHdpZGdldC50aXRsZS5sYWJlbCA9IHBsYWNlaG9sZGVyLnRpdGxlLmxhYmVsO1xuICAgICAgICAgICAgd2lkZ2V0LnRpdGxlLmNsb3NhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgaSA9IEFycmF5RXh0LmZpcnN0SW5kZXhPZih0YWJzLndpZGdldHMsIHBsYWNlaG9sZGVyKTtcbiAgICAgICAgICAgIC8vIGluc2VydCBhZnRlciBwbGFjZWhvbGRlciBzbyB0aGF0IGlmIHBsYWNob2xkZXIgaXMgc2VsZWN0ZWQsIHRoZVxuICAgICAgICAgICAgLy8gcmVhbCB3aWRnZXQgd2lsbCBiZSBzZWxlY3RlZCBub3cgKHRoaXMgZGVwZW5kcyBvbiB0aGUgdGFiIGJhclxuICAgICAgICAgICAgLy8gaW5zZXJ0IGJlaGF2aW9yKVxuICAgICAgICAgICAgdGFicy5pbnNlcnRXaWRnZXQoaSArIDEsIHdpZGdldCk7XG4gICAgICAgICAgICBwbGFjZWhvbGRlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICByZXR1cm4gdmlldztcbiAgICAgICAgfSkuY2F0Y2godXRpbHMucmVqZWN0KCdDb3VsZCBub3QgYWRkIGNoaWxkIHZpZXcgdG8gYm94JywgdHJ1ZSkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcbiAgICAgKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBtb2RlbCBpcyBjaGFuZ2VkLiAgVGhlIG1vZGVsIG1heSBoYXZlIGJlZW5cbiAgICAgKiBjaGFuZ2VkIGJ5IGFub3RoZXIgdmlldyBvciBieSBhIHN0YXRlIHVwZGF0ZSBmcm9tIHRoZSBiYWNrLWVuZC5cbiAgICAgKi9cbiAgICBUYWJWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgc2VsZWN0ZWQgaW5kZXggaW4gdGhlIG92ZXJhbGwgdXBkYXRlIG1ldGhvZCBiZWNhdXNlIGl0XG4gICAgICAgIC8vIHNob3VsZCBiZSBydW4gYWZ0ZXIgdGhlIHRhYnMgaGF2ZSBiZWVuIHVwZGF0ZWQuIE90aGVyd2lzZSB0aGVcbiAgICAgICAgLy8gc2VsZWN0ZWQgaW5kZXggbWF5IG5vdCBiZSBhIHZhbGlkIHRhYiBpbiB0aGUgdGFiIGJhci5cbiAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZEluZGV4KCk7XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgdGFiIHBhZ2UgdGl0bGVzLlxuICAgICAqL1xuICAgIFRhYlZpZXcucHJvdG90eXBlLnVwZGF0ZVRpdGxlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRpdGxlcyA9IHRoaXMubW9kZWwuZ2V0KCdfdGl0bGVzJykgfHwge307XG4gICAgICAgIGVhY2godGhpcy5wV2lkZ2V0LndpZGdldHMsIGZ1bmN0aW9uICh3aWRnZXQsIGkpIHtcbiAgICAgICAgICAgIHdpZGdldC50aXRsZS5sYWJlbCA9IHRpdGxlc1tpXSB8fCAnJztcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBzZWxlY3RlZCBpbmRleC5cbiAgICAgKi9cbiAgICBUYWJWaWV3LnByb3RvdHlwZS51cGRhdGVTZWxlY3RlZEluZGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBXaWRnZXQuY3VycmVudEluZGV4ID0gdGhpcy5tb2RlbC5nZXQoJ3NlbGVjdGVkX2luZGV4Jyk7XG4gICAgfTtcbiAgICBUYWJWaWV3LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW5WaWV3cyA9IG51bGw7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVtb3ZlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBUYWJWaWV3LnByb3RvdHlwZS5fb25UYWJDaGFuZ2VkID0gZnVuY3Rpb24gKHNlbmRlciwgYXJncykge1xuICAgICAgICBpZiAoIXRoaXMudXBkYXRpbmdUYWJzKSB7XG4gICAgICAgICAgICB2YXIgaSA9IGFyZ3MuY3VycmVudEluZGV4O1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ3NlbGVjdGVkX2luZGV4JywgaSA9PT0gLTEgPyBudWxsIDogaSk7XG4gICAgICAgICAgICB0aGlzLnRvdWNoKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZSB0aGUgYHRhYk1vdmVkYCBzaWduYWwgZnJvbSB0aGUgdGFiIGJhci5cbiAgICAgKi9cbiAgICBUYWJWaWV3LnByb3RvdHlwZS5fb25UYWJNb3ZlZCA9IGZ1bmN0aW9uIChzZW5kZXIsIGFyZ3MpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5tb2RlbC5nZXQoJ2NoaWxkcmVuJykuc2xpY2UoKTtcbiAgICAgICAgQXJyYXlFeHQubW92ZShjaGlsZHJlbiwgYXJncy5mcm9tSW5kZXgsIGFyZ3MudG9JbmRleCk7XG4gICAgICAgIHRoaXMubW9kZWwuc2V0KCdjaGlsZHJlbicsIGNoaWxkcmVuKTtcbiAgICAgICAgdGhpcy50b3VjaCgpO1xuICAgIH07XG4gICAgcmV0dXJuIFRhYlZpZXc7XG59KERPTVdpZGdldFZpZXcpKTtcbmV4cG9ydCB7IFRhYlZpZXcgfTtcbiIsImV4cG9ydCB7ZGVmYXVsdCBhcyBmb3JtYXREZWZhdWx0TG9jYWxlLCBmb3JtYXQsIGZvcm1hdFByZWZpeH0gZnJvbSBcIi4vZGVmYXVsdExvY2FsZS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGZvcm1hdExvY2FsZX0gZnJvbSBcIi4vbG9jYWxlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZm9ybWF0U3BlY2lmaWVyLCBGb3JtYXRTcGVjaWZpZXJ9IGZyb20gXCIuL2Zvcm1hdFNwZWNpZmllci5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHByZWNpc2lvbkZpeGVkfSBmcm9tIFwiLi9wcmVjaXNpb25GaXhlZC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHByZWNpc2lvblByZWZpeH0gZnJvbSBcIi4vcHJlY2lzaW9uUHJlZml4LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcHJlY2lzaW9uUm91bmR9IGZyb20gXCIuL3ByZWNpc2lvblJvdW5kLmpzXCI7XG4iLCJpbXBvcnQgZXhwb25lbnQgZnJvbSBcIi4vZXhwb25lbnQuanNcIjtcbmltcG9ydCBmb3JtYXRHcm91cCBmcm9tIFwiLi9mb3JtYXRHcm91cC5qc1wiO1xuaW1wb3J0IGZvcm1hdE51bWVyYWxzIGZyb20gXCIuL2Zvcm1hdE51bWVyYWxzLmpzXCI7XG5pbXBvcnQgZm9ybWF0U3BlY2lmaWVyIGZyb20gXCIuL2Zvcm1hdFNwZWNpZmllci5qc1wiO1xuaW1wb3J0IGZvcm1hdFRyaW0gZnJvbSBcIi4vZm9ybWF0VHJpbS5qc1wiO1xuaW1wb3J0IGZvcm1hdFR5cGVzIGZyb20gXCIuL2Zvcm1hdFR5cGVzLmpzXCI7XG5pbXBvcnQge3ByZWZpeEV4cG9uZW50fSBmcm9tIFwiLi9mb3JtYXRQcmVmaXhBdXRvLmpzXCI7XG5pbXBvcnQgaWRlbnRpdHkgZnJvbSBcIi4vaWRlbnRpdHkuanNcIjtcblxudmFyIG1hcCA9IEFycmF5LnByb3RvdHlwZS5tYXAsXG4gICAgcHJlZml4ZXMgPSBbXCJ5XCIsXCJ6XCIsXCJhXCIsXCJmXCIsXCJwXCIsXCJuXCIsXCLCtVwiLFwibVwiLFwiXCIsXCJrXCIsXCJNXCIsXCJHXCIsXCJUXCIsXCJQXCIsXCJFXCIsXCJaXCIsXCJZXCJdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihsb2NhbGUpIHtcbiAgdmFyIGdyb3VwID0gbG9jYWxlLmdyb3VwaW5nID09PSB1bmRlZmluZWQgfHwgbG9jYWxlLnRob3VzYW5kcyA9PT0gdW5kZWZpbmVkID8gaWRlbnRpdHkgOiBmb3JtYXRHcm91cChtYXAuY2FsbChsb2NhbGUuZ3JvdXBpbmcsIE51bWJlciksIGxvY2FsZS50aG91c2FuZHMgKyBcIlwiKSxcbiAgICAgIGN1cnJlbmN5UHJlZml4ID0gbG9jYWxlLmN1cnJlbmN5ID09PSB1bmRlZmluZWQgPyBcIlwiIDogbG9jYWxlLmN1cnJlbmN5WzBdICsgXCJcIixcbiAgICAgIGN1cnJlbmN5U3VmZml4ID0gbG9jYWxlLmN1cnJlbmN5ID09PSB1bmRlZmluZWQgPyBcIlwiIDogbG9jYWxlLmN1cnJlbmN5WzFdICsgXCJcIixcbiAgICAgIGRlY2ltYWwgPSBsb2NhbGUuZGVjaW1hbCA9PT0gdW5kZWZpbmVkID8gXCIuXCIgOiBsb2NhbGUuZGVjaW1hbCArIFwiXCIsXG4gICAgICBudW1lcmFscyA9IGxvY2FsZS5udW1lcmFscyA9PT0gdW5kZWZpbmVkID8gaWRlbnRpdHkgOiBmb3JtYXROdW1lcmFscyhtYXAuY2FsbChsb2NhbGUubnVtZXJhbHMsIFN0cmluZykpLFxuICAgICAgcGVyY2VudCA9IGxvY2FsZS5wZXJjZW50ID09PSB1bmRlZmluZWQgPyBcIiVcIiA6IGxvY2FsZS5wZXJjZW50ICsgXCJcIixcbiAgICAgIG1pbnVzID0gbG9jYWxlLm1pbnVzID09PSB1bmRlZmluZWQgPyBcIi1cIiA6IGxvY2FsZS5taW51cyArIFwiXCIsXG4gICAgICBuYW4gPSBsb2NhbGUubmFuID09PSB1bmRlZmluZWQgPyBcIk5hTlwiIDogbG9jYWxlLm5hbiArIFwiXCI7XG5cbiAgZnVuY3Rpb24gbmV3Rm9ybWF0KHNwZWNpZmllcikge1xuICAgIHNwZWNpZmllciA9IGZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIpO1xuXG4gICAgdmFyIGZpbGwgPSBzcGVjaWZpZXIuZmlsbCxcbiAgICAgICAgYWxpZ24gPSBzcGVjaWZpZXIuYWxpZ24sXG4gICAgICAgIHNpZ24gPSBzcGVjaWZpZXIuc2lnbixcbiAgICAgICAgc3ltYm9sID0gc3BlY2lmaWVyLnN5bWJvbCxcbiAgICAgICAgemVybyA9IHNwZWNpZmllci56ZXJvLFxuICAgICAgICB3aWR0aCA9IHNwZWNpZmllci53aWR0aCxcbiAgICAgICAgY29tbWEgPSBzcGVjaWZpZXIuY29tbWEsXG4gICAgICAgIHByZWNpc2lvbiA9IHNwZWNpZmllci5wcmVjaXNpb24sXG4gICAgICAgIHRyaW0gPSBzcGVjaWZpZXIudHJpbSxcbiAgICAgICAgdHlwZSA9IHNwZWNpZmllci50eXBlO1xuXG4gICAgLy8gVGhlIFwiblwiIHR5cGUgaXMgYW4gYWxpYXMgZm9yIFwiLGdcIi5cbiAgICBpZiAodHlwZSA9PT0gXCJuXCIpIGNvbW1hID0gdHJ1ZSwgdHlwZSA9IFwiZ1wiO1xuXG4gICAgLy8gVGhlIFwiXCIgdHlwZSwgYW5kIGFueSBpbnZhbGlkIHR5cGUsIGlzIGFuIGFsaWFzIGZvciBcIi4xMn5nXCIuXG4gICAgZWxzZSBpZiAoIWZvcm1hdFR5cGVzW3R5cGVdKSBwcmVjaXNpb24gPT09IHVuZGVmaW5lZCAmJiAocHJlY2lzaW9uID0gMTIpLCB0cmltID0gdHJ1ZSwgdHlwZSA9IFwiZ1wiO1xuXG4gICAgLy8gSWYgemVybyBmaWxsIGlzIHNwZWNpZmllZCwgcGFkZGluZyBnb2VzIGFmdGVyIHNpZ24gYW5kIGJlZm9yZSBkaWdpdHMuXG4gICAgaWYgKHplcm8gfHwgKGZpbGwgPT09IFwiMFwiICYmIGFsaWduID09PSBcIj1cIikpIHplcm8gPSB0cnVlLCBmaWxsID0gXCIwXCIsIGFsaWduID0gXCI9XCI7XG5cbiAgICAvLyBDb21wdXRlIHRoZSBwcmVmaXggYW5kIHN1ZmZpeC5cbiAgICAvLyBGb3IgU0ktcHJlZml4LCB0aGUgc3VmZml4IGlzIGxhemlseSBjb21wdXRlZC5cbiAgICB2YXIgcHJlZml4ID0gc3ltYm9sID09PSBcIiRcIiA/IGN1cnJlbmN5UHJlZml4IDogc3ltYm9sID09PSBcIiNcIiAmJiAvW2JveFhdLy50ZXN0KHR5cGUpID8gXCIwXCIgKyB0eXBlLnRvTG93ZXJDYXNlKCkgOiBcIlwiLFxuICAgICAgICBzdWZmaXggPSBzeW1ib2wgPT09IFwiJFwiID8gY3VycmVuY3lTdWZmaXggOiAvWyVwXS8udGVzdCh0eXBlKSA/IHBlcmNlbnQgOiBcIlwiO1xuXG4gICAgLy8gV2hhdCBmb3JtYXQgZnVuY3Rpb24gc2hvdWxkIHdlIHVzZT9cbiAgICAvLyBJcyB0aGlzIGFuIGludGVnZXIgdHlwZT9cbiAgICAvLyBDYW4gdGhpcyB0eXBlIGdlbmVyYXRlIGV4cG9uZW50aWFsIG5vdGF0aW9uP1xuICAgIHZhciBmb3JtYXRUeXBlID0gZm9ybWF0VHlwZXNbdHlwZV0sXG4gICAgICAgIG1heWJlU3VmZml4ID0gL1tkZWZncHJzJV0vLnRlc3QodHlwZSk7XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHQgcHJlY2lzaW9uIGlmIG5vdCBzcGVjaWZpZWQsXG4gICAgLy8gb3IgY2xhbXAgdGhlIHNwZWNpZmllZCBwcmVjaXNpb24gdG8gdGhlIHN1cHBvcnRlZCByYW5nZS5cbiAgICAvLyBGb3Igc2lnbmlmaWNhbnQgcHJlY2lzaW9uLCBpdCBtdXN0IGJlIGluIFsxLCAyMV0uXG4gICAgLy8gRm9yIGZpeGVkIHByZWNpc2lvbiwgaXQgbXVzdCBiZSBpbiBbMCwgMjBdLlxuICAgIHByZWNpc2lvbiA9IHByZWNpc2lvbiA9PT0gdW5kZWZpbmVkID8gNlxuICAgICAgICA6IC9bZ3Byc10vLnRlc3QodHlwZSkgPyBNYXRoLm1heCgxLCBNYXRoLm1pbigyMSwgcHJlY2lzaW9uKSlcbiAgICAgICAgOiBNYXRoLm1heCgwLCBNYXRoLm1pbigyMCwgcHJlY2lzaW9uKSk7XG5cbiAgICBmdW5jdGlvbiBmb3JtYXQodmFsdWUpIHtcbiAgICAgIHZhciB2YWx1ZVByZWZpeCA9IHByZWZpeCxcbiAgICAgICAgICB2YWx1ZVN1ZmZpeCA9IHN1ZmZpeCxcbiAgICAgICAgICBpLCBuLCBjO1xuXG4gICAgICBpZiAodHlwZSA9PT0gXCJjXCIpIHtcbiAgICAgICAgdmFsdWVTdWZmaXggPSBmb3JtYXRUeXBlKHZhbHVlKSArIHZhbHVlU3VmZml4O1xuICAgICAgICB2YWx1ZSA9IFwiXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9ICt2YWx1ZTtcblxuICAgICAgICAvLyBQZXJmb3JtIHRoZSBpbml0aWFsIGZvcm1hdHRpbmcuXG4gICAgICAgIHZhciB2YWx1ZU5lZ2F0aXZlID0gdmFsdWUgPCAwO1xuICAgICAgICB2YWx1ZSA9IGlzTmFOKHZhbHVlKSA/IG5hbiA6IGZvcm1hdFR5cGUoTWF0aC5hYnModmFsdWUpLCBwcmVjaXNpb24pO1xuXG4gICAgICAgIC8vIFRyaW0gaW5zaWduaWZpY2FudCB6ZXJvcy5cbiAgICAgICAgaWYgKHRyaW0pIHZhbHVlID0gZm9ybWF0VHJpbSh2YWx1ZSk7XG5cbiAgICAgICAgLy8gSWYgYSBuZWdhdGl2ZSB2YWx1ZSByb3VuZHMgdG8gemVybyBkdXJpbmcgZm9ybWF0dGluZywgdHJlYXQgYXMgcG9zaXRpdmUuXG4gICAgICAgIGlmICh2YWx1ZU5lZ2F0aXZlICYmICt2YWx1ZSA9PT0gMCkgdmFsdWVOZWdhdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENvbXB1dGUgdGhlIHByZWZpeCBhbmQgc3VmZml4LlxuICAgICAgICB2YWx1ZVByZWZpeCA9ICh2YWx1ZU5lZ2F0aXZlID8gKHNpZ24gPT09IFwiKFwiID8gc2lnbiA6IG1pbnVzKSA6IHNpZ24gPT09IFwiLVwiIHx8IHNpZ24gPT09IFwiKFwiID8gXCJcIiA6IHNpZ24pICsgdmFsdWVQcmVmaXg7XG5cbiAgICAgICAgdmFsdWVTdWZmaXggPSAodHlwZSA9PT0gXCJzXCIgPyBwcmVmaXhlc1s4ICsgcHJlZml4RXhwb25lbnQgLyAzXSA6IFwiXCIpICsgdmFsdWVTdWZmaXggKyAodmFsdWVOZWdhdGl2ZSAmJiBzaWduID09PSBcIihcIiA/IFwiKVwiIDogXCJcIik7XG5cbiAgICAgICAgLy8gQnJlYWsgdGhlIGZvcm1hdHRlZCB2YWx1ZSBpbnRvIHRoZSBpbnRlZ2VyIOKAnHZhbHVl4oCdIHBhcnQgdGhhdCBjYW4gYmVcbiAgICAgICAgLy8gZ3JvdXBlZCwgYW5kIGZyYWN0aW9uYWwgb3IgZXhwb25lbnRpYWwg4oCcc3VmZml44oCdIHBhcnQgdGhhdCBpcyBub3QuXG4gICAgICAgIGlmIChtYXliZVN1ZmZpeCkge1xuICAgICAgICAgIGkgPSAtMSwgbiA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICAgICAgaWYgKGMgPSB2YWx1ZS5jaGFyQ29kZUF0KGkpLCA0OCA+IGMgfHwgYyA+IDU3KSB7XG4gICAgICAgICAgICAgIHZhbHVlU3VmZml4ID0gKGMgPT09IDQ2ID8gZGVjaW1hbCArIHZhbHVlLnNsaWNlKGkgKyAxKSA6IHZhbHVlLnNsaWNlKGkpKSArIHZhbHVlU3VmZml4O1xuICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIGkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlIGZpbGwgY2hhcmFjdGVyIGlzIG5vdCBcIjBcIiwgZ3JvdXBpbmcgaXMgYXBwbGllZCBiZWZvcmUgcGFkZGluZy5cbiAgICAgIGlmIChjb21tYSAmJiAhemVybykgdmFsdWUgPSBncm91cCh2YWx1ZSwgSW5maW5pdHkpO1xuXG4gICAgICAvLyBDb21wdXRlIHRoZSBwYWRkaW5nLlxuICAgICAgdmFyIGxlbmd0aCA9IHZhbHVlUHJlZml4Lmxlbmd0aCArIHZhbHVlLmxlbmd0aCArIHZhbHVlU3VmZml4Lmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gbGVuZ3RoIDwgd2lkdGggPyBuZXcgQXJyYXkod2lkdGggLSBsZW5ndGggKyAxKS5qb2luKGZpbGwpIDogXCJcIjtcblxuICAgICAgLy8gSWYgdGhlIGZpbGwgY2hhcmFjdGVyIGlzIFwiMFwiLCBncm91cGluZyBpcyBhcHBsaWVkIGFmdGVyIHBhZGRpbmcuXG4gICAgICBpZiAoY29tbWEgJiYgemVybykgdmFsdWUgPSBncm91cChwYWRkaW5nICsgdmFsdWUsIHBhZGRpbmcubGVuZ3RoID8gd2lkdGggLSB2YWx1ZVN1ZmZpeC5sZW5ndGggOiBJbmZpbml0eSksIHBhZGRpbmcgPSBcIlwiO1xuXG4gICAgICAvLyBSZWNvbnN0cnVjdCB0aGUgZmluYWwgb3V0cHV0IGJhc2VkIG9uIHRoZSBkZXNpcmVkIGFsaWdubWVudC5cbiAgICAgIHN3aXRjaCAoYWxpZ24pIHtcbiAgICAgICAgY2FzZSBcIjxcIjogdmFsdWUgPSB2YWx1ZVByZWZpeCArIHZhbHVlICsgdmFsdWVTdWZmaXggKyBwYWRkaW5nOyBicmVhaztcbiAgICAgICAgY2FzZSBcIj1cIjogdmFsdWUgPSB2YWx1ZVByZWZpeCArIHBhZGRpbmcgKyB2YWx1ZSArIHZhbHVlU3VmZml4OyBicmVhaztcbiAgICAgICAgY2FzZSBcIl5cIjogdmFsdWUgPSBwYWRkaW5nLnNsaWNlKDAsIGxlbmd0aCA9IHBhZGRpbmcubGVuZ3RoID4+IDEpICsgdmFsdWVQcmVmaXggKyB2YWx1ZSArIHZhbHVlU3VmZml4ICsgcGFkZGluZy5zbGljZShsZW5ndGgpOyBicmVhaztcbiAgICAgICAgZGVmYXVsdDogdmFsdWUgPSBwYWRkaW5nICsgdmFsdWVQcmVmaXggKyB2YWx1ZSArIHZhbHVlU3VmZml4OyBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bWVyYWxzKHZhbHVlKTtcbiAgICB9XG5cbiAgICBmb3JtYXQudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzcGVjaWZpZXIgKyBcIlwiO1xuICAgIH07XG5cbiAgICByZXR1cm4gZm9ybWF0O1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0UHJlZml4KHNwZWNpZmllciwgdmFsdWUpIHtcbiAgICB2YXIgZiA9IG5ld0Zvcm1hdCgoc3BlY2lmaWVyID0gZm9ybWF0U3BlY2lmaWVyKHNwZWNpZmllciksIHNwZWNpZmllci50eXBlID0gXCJmXCIsIHNwZWNpZmllcikpLFxuICAgICAgICBlID0gTWF0aC5tYXgoLTgsIE1hdGgubWluKDgsIE1hdGguZmxvb3IoZXhwb25lbnQodmFsdWUpIC8gMykpKSAqIDMsXG4gICAgICAgIGsgPSBNYXRoLnBvdygxMCwgLWUpLFxuICAgICAgICBwcmVmaXggPSBwcmVmaXhlc1s4ICsgZSAvIDNdO1xuICAgIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIGYoayAqIHZhbHVlKSArIHByZWZpeDtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmb3JtYXQ6IG5ld0Zvcm1hdCxcbiAgICBmb3JtYXRQcmVmaXg6IGZvcm1hdFByZWZpeFxuICB9O1xufVxuIiwiaW1wb3J0IGZvcm1hdFByZWZpeEF1dG8gZnJvbSBcIi4vZm9ybWF0UHJlZml4QXV0by5qc1wiO1xuaW1wb3J0IGZvcm1hdFJvdW5kZWQgZnJvbSBcIi4vZm9ybWF0Um91bmRlZC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiJVwiOiBmdW5jdGlvbih4LCBwKSB7IHJldHVybiAoeCAqIDEwMCkudG9GaXhlZChwKTsgfSxcbiAgXCJiXCI6IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIE1hdGgucm91bmQoeCkudG9TdHJpbmcoMik7IH0sXG4gIFwiY1wiOiBmdW5jdGlvbih4KSB7IHJldHVybiB4ICsgXCJcIjsgfSxcbiAgXCJkXCI6IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIE1hdGgucm91bmQoeCkudG9TdHJpbmcoMTApOyB9LFxuICBcImVcIjogZnVuY3Rpb24oeCwgcCkgeyByZXR1cm4geC50b0V4cG9uZW50aWFsKHApOyB9LFxuICBcImZcIjogZnVuY3Rpb24oeCwgcCkgeyByZXR1cm4geC50b0ZpeGVkKHApOyB9LFxuICBcImdcIjogZnVuY3Rpb24oeCwgcCkgeyByZXR1cm4geC50b1ByZWNpc2lvbihwKTsgfSxcbiAgXCJvXCI6IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIE1hdGgucm91bmQoeCkudG9TdHJpbmcoOCk7IH0sXG4gIFwicFwiOiBmdW5jdGlvbih4LCBwKSB7IHJldHVybiBmb3JtYXRSb3VuZGVkKHggKiAxMDAsIHApOyB9LFxuICBcInJcIjogZm9ybWF0Um91bmRlZCxcbiAgXCJzXCI6IGZvcm1hdFByZWZpeEF1dG8sXG4gIFwiWFwiOiBmdW5jdGlvbih4KSB7IHJldHVybiBNYXRoLnJvdW5kKHgpLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpOyB9LFxuICBcInhcIjogZnVuY3Rpb24oeCkgeyByZXR1cm4gTWF0aC5yb3VuZCh4KS50b1N0cmluZygxNik7IH1cbn07XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEp1cHl0ZXIgRGV2ZWxvcG1lbnQgVGVhbS5cbi8vIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTW9kaWZpZWQgQlNEIExpY2Vuc2UuXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBET01XaWRnZXRWaWV3IH0gZnJvbSAnQGp1cHl0ZXItd2lkZ2V0cy9iYXNlJztcbmltcG9ydCB7IENvcmVET01XaWRnZXRNb2RlbCB9IGZyb20gJy4vd2lkZ2V0X2NvcmUnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbnZhciBJbWFnZU1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhJbWFnZU1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEltYWdlTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgSW1hZ2VNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnSW1hZ2VNb2RlbCcsXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnSW1hZ2VWaWV3JyxcbiAgICAgICAgICAgIGZvcm1hdDogJ3BuZycsXG4gICAgICAgICAgICB3aWR0aDogJycsXG4gICAgICAgICAgICBoZWlnaHQ6ICcnLFxuICAgICAgICAgICAgdmFsdWU6IG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMCkpXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgSW1hZ2VNb2RlbC5zZXJpYWxpemVycyA9IF9fYXNzaWduKHt9LCBDb3JlRE9NV2lkZ2V0TW9kZWwuc2VyaWFsaXplcnMsIHsgdmFsdWU6IHsgc2VyaWFsaXplOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGFWaWV3KHZhbHVlLmJ1ZmZlci5zbGljZSgwKSk7XG4gICAgICAgICAgICB9IH0gfSk7XG4gICAgcmV0dXJuIEltYWdlTW9kZWw7XG59KENvcmVET01XaWRnZXRNb2RlbCkpO1xuZXhwb3J0IHsgSW1hZ2VNb2RlbCB9O1xudmFyIEltYWdlVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSW1hZ2VWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEltYWdlVmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBJbWFnZVZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCB3aGVuIHZpZXcgaXMgcmVuZGVyZWQuXG4gICAgICAgICAqL1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLnBXaWRnZXQuYWRkQ2xhc3MoJ2p1cHl0ZXItd2lkZ2V0cycpO1xuICAgICAgICB0aGlzLnBXaWRnZXQuYWRkQ2xhc3MoJ3dpZGdldC1pbWFnZScpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpOyAvLyBTZXQgZGVmYXVsdHMuXG4gICAgfTtcbiAgICBJbWFnZVZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVwZGF0ZSB0aGUgY29udGVudHMgb2YgdGhpcyB2aWV3XG4gICAgICAgICAqXG4gICAgICAgICAqIENhbGxlZCB3aGVuIHRoZSBtb2RlbCBpcyBjaGFuZ2VkLiAgVGhlIG1vZGVsIG1heSBoYXZlIGJlZW5cbiAgICAgICAgICogY2hhbmdlZCBieSBhbm90aGVyIHZpZXcgb3IgYnkgYSBzdGF0ZSB1cGRhdGUgZnJvbSB0aGUgYmFjay1lbmQuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgdXJsO1xuICAgICAgICB2YXIgZm9ybWF0ID0gdGhpcy5tb2RlbC5nZXQoJ2Zvcm1hdCcpO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLm1vZGVsLmdldCgndmFsdWUnKTtcbiAgICAgICAgaWYgKGZvcm1hdCAhPT0gJ3VybCcpIHtcbiAgICAgICAgICAgIHZhciBibG9iID0gbmV3IEJsb2IoW3ZhbHVlXSwgeyB0eXBlOiBcImltYWdlL1wiICsgdGhpcy5tb2RlbC5nZXQoJ2Zvcm1hdCcpIH0pO1xuICAgICAgICAgICAgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHVybCA9IChuZXcgVGV4dERlY29kZXIoJ3V0Zi04JykpLmRlY29kZSh2YWx1ZS5idWZmZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENsZWFuIHVwIHRoZSBvbGQgb2JqZWN0VVJMXG4gICAgICAgIHZhciBvbGR1cmwgPSB0aGlzLmVsLnNyYztcbiAgICAgICAgdGhpcy5lbC5zcmMgPSB1cmw7XG4gICAgICAgIGlmIChvbGR1cmwgJiYgdHlwZW9mIG9sZHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwob2xkdXJsKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgd2lkdGggPSB0aGlzLm1vZGVsLmdldCgnd2lkdGgnKTtcbiAgICAgICAgaWYgKHdpZHRoICE9PSB1bmRlZmluZWQgJiYgd2lkdGgubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoJ3dpZHRoJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMubW9kZWwuZ2V0KCdoZWlnaHQnKTtcbiAgICAgICAgaWYgKGhlaWdodCAhPT0gdW5kZWZpbmVkICYmIGhlaWdodC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKCdoZWlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIEltYWdlVmlldy5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5lbC5zcmMpIHtcbiAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5lbC5zcmMpO1xuICAgICAgICB9XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVtb3ZlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSW1hZ2VWaWV3LnByb3RvdHlwZSwgXCJ0YWdOYW1lXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkZWZhdWx0IHRhZyBuYW1lLlxuICAgICAgICAgKlxuICAgICAgICAgKiAjIyMjIE5vdGVzXG4gICAgICAgICAqIFRoaXMgaXMgYSByZWFkLW9ubHkgYXR0cmlidXRlLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBXZSBjYW4ndCBtYWtlIHRoaXMgYW4gYXR0cmlidXRlIHdpdGggYSBkZWZhdWx0IHZhbHVlXG4gICAgICAgICAgICAvLyBzaW5jZSBpdCB3b3VsZCBiZSBzZXQgYWZ0ZXIgaXQgaXMgbmVlZGVkIGluIHRoZVxuICAgICAgICAgICAgLy8gY29uc3RydWN0b3IuXG4gICAgICAgICAgICByZXR1cm4gJ2ltZyc7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBJbWFnZVZpZXc7XG59KERPTVdpZGdldFZpZXcpKTtcbmV4cG9ydCB7IEltYWdlVmlldyB9O1xuIiwiLyohXG4gKiBqUXVlcnkgVUkgS2V5Y29kZSAxLjEyLjFcbiAqIGh0dHA6Ly9qcXVlcnl1aS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICovXG5cbi8vPj5sYWJlbDogS2V5Y29kZVxuLy8+Pmdyb3VwOiBDb3JlXG4vLz4+ZGVzY3JpcHRpb246IFByb3ZpZGUga2V5Y29kZXMgYXMga2V5bmFtZXNcbi8vPj5kb2NzOiBodHRwOi8vYXBpLmpxdWVyeXVpLmNvbS9qUXVlcnkudWkua2V5Q29kZS9cblxuKCBmdW5jdGlvbiggZmFjdG9yeSApIHtcblx0aWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcblxuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoIFsgXCJqcXVlcnlcIiwgXCIuL3ZlcnNpb25cIiBdLCBmYWN0b3J5ICk7XG5cdH0gZWxzZSB7XG5cblx0XHQvLyBCcm93c2VyIGdsb2JhbHNcblx0XHRmYWN0b3J5KCBqUXVlcnkgKTtcblx0fVxufSAoIGZ1bmN0aW9uKCAkICkge1xucmV0dXJuICQudWkua2V5Q29kZSA9IHtcblx0QkFDS1NQQUNFOiA4LFxuXHRDT01NQTogMTg4LFxuXHRERUxFVEU6IDQ2LFxuXHRET1dOOiA0MCxcblx0RU5EOiAzNSxcblx0RU5URVI6IDEzLFxuXHRFU0NBUEU6IDI3LFxuXHRIT01FOiAzNixcblx0TEVGVDogMzcsXG5cdFBBR0VfRE9XTjogMzQsXG5cdFBBR0VfVVA6IDMzLFxuXHRQRVJJT0Q6IDE5MCxcblx0UklHSFQ6IDM5LFxuXHRTUEFDRTogMzIsXG5cdFRBQjogOSxcblx0VVA6IDM4XG59O1xuXG59ICkgKTtcbiIsIi8vIENvcHlyaWdodCAoYykgSnVweXRlciBEZXZlbG9wbWVudCBUZWFtLlxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNb2RpZmllZCBCU0QgTGljZW5zZS5cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IHsgQ29yZURlc2NyaXB0aW9uTW9kZWwgfSBmcm9tICcuL3dpZGdldF9jb3JlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQgeyBJbnRTbGlkZXJWaWV3LCBJbnRSYW5nZVNsaWRlclZpZXcsIEludFRleHRWaWV3LCBCYXNlSW50U2xpZGVyVmlldyB9IGZyb20gJy4vd2lkZ2V0X2ludCc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkMy1mb3JtYXQnO1xudmFyIEZsb2F0TW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZsb2F0TW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmxvYXRNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBGbG9hdE1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdGbG9hdE1vZGVsJyxcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBGbG9hdE1vZGVsO1xufShDb3JlRGVzY3JpcHRpb25Nb2RlbCkpO1xuZXhwb3J0IHsgRmxvYXRNb2RlbCB9O1xudmFyIEJvdW5kZWRGbG9hdE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCb3VuZGVkRmxvYXRNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCb3VuZGVkRmxvYXRNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBCb3VuZGVkRmxvYXRNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnQm91bmRlZEZsb2F0TW9kZWwnLFxuICAgICAgICAgICAgbWF4OiAxMDAuMCxcbiAgICAgICAgICAgIG1pbjogMC4wXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEJvdW5kZWRGbG9hdE1vZGVsO1xufShGbG9hdE1vZGVsKSk7XG5leHBvcnQgeyBCb3VuZGVkRmxvYXRNb2RlbCB9O1xudmFyIEZsb2F0U2xpZGVyTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZsb2F0U2xpZGVyTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmxvYXRTbGlkZXJNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBGbG9hdFNsaWRlck1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdGbG9hdFNsaWRlck1vZGVsJyxcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdGbG9hdFNsaWRlclZpZXcnLFxuICAgICAgICAgICAgc3RlcDogMS4wLFxuICAgICAgICAgICAgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyxcbiAgICAgICAgICAgIF9yYW5nZTogZmFsc2UsXG4gICAgICAgICAgICByZWFkb3V0OiB0cnVlLFxuICAgICAgICAgICAgcmVhZG91dF9mb3JtYXQ6ICcuMmYnLFxuICAgICAgICAgICAgc2xpZGVyX2NvbG9yOiBudWxsLFxuICAgICAgICAgICAgY29udGludW91c191cGRhdGU6IHRydWUsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRmxvYXRTbGlkZXJNb2RlbC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChhdHRyaWJ1dGVzLCBvcHRpb25zKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIGF0dHJpYnV0ZXMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLm9uKCdjaGFuZ2U6cmVhZG91dF9mb3JtYXQnLCB0aGlzLnVwZGF0ZV9yZWFkb3V0X2Zvcm1hdCwgdGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlX3JlYWRvdXRfZm9ybWF0KCk7XG4gICAgfTtcbiAgICBGbG9hdFNsaWRlck1vZGVsLnByb3RvdHlwZS51cGRhdGVfcmVhZG91dF9mb3JtYXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVhZG91dF9mb3JtYXR0ZXIgPSBmb3JtYXQodGhpcy5nZXQoJ3JlYWRvdXRfZm9ybWF0JykpO1xuICAgIH07XG4gICAgcmV0dXJuIEZsb2F0U2xpZGVyTW9kZWw7XG59KEJvdW5kZWRGbG9hdE1vZGVsKSk7XG5leHBvcnQgeyBGbG9hdFNsaWRlck1vZGVsIH07XG52YXIgRmxvYXRMb2dTbGlkZXJNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRmxvYXRMb2dTbGlkZXJNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGbG9hdExvZ1NsaWRlck1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEZsb2F0TG9nU2xpZGVyTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0Zsb2F0TG9nU2xpZGVyTW9kZWwnLFxuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ0Zsb2F0TG9nU2xpZGVyVmlldycsXG4gICAgICAgICAgICBzdGVwOiAwLjEsXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgICAgICAgX3JhbmdlOiBmYWxzZSxcbiAgICAgICAgICAgIHJlYWRvdXQ6IHRydWUsXG4gICAgICAgICAgICByZWFkb3V0X2Zvcm1hdDogJy4zZycsXG4gICAgICAgICAgICBzbGlkZXJfY29sb3I6IG51bGwsXG4gICAgICAgICAgICBjb250aW51b3VzX3VwZGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGJhc2U6IDEwLixcbiAgICAgICAgICAgIHZhbHVlOiAxLjAsXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDRcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBGbG9hdExvZ1NsaWRlck1vZGVsLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKGF0dHJpYnV0ZXMsIG9wdGlvbnMpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcywgYXR0cmlidXRlcywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMub24oJ2NoYW5nZTpyZWFkb3V0X2Zvcm1hdCcsIHRoaXMudXBkYXRlX3JlYWRvdXRfZm9ybWF0LCB0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVfcmVhZG91dF9mb3JtYXQoKTtcbiAgICB9O1xuICAgIEZsb2F0TG9nU2xpZGVyTW9kZWwucHJvdG90eXBlLnVwZGF0ZV9yZWFkb3V0X2Zvcm1hdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZWFkb3V0X2Zvcm1hdHRlciA9IGZvcm1hdCh0aGlzLmdldCgncmVhZG91dF9mb3JtYXQnKSk7XG4gICAgfTtcbiAgICByZXR1cm4gRmxvYXRMb2dTbGlkZXJNb2RlbDtcbn0oQm91bmRlZEZsb2F0TW9kZWwpKTtcbmV4cG9ydCB7IEZsb2F0TG9nU2xpZGVyTW9kZWwgfTtcbnZhciBGbG9hdFJhbmdlU2xpZGVyTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZsb2F0UmFuZ2VTbGlkZXJNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGbG9hdFJhbmdlU2xpZGVyTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEZsb2F0UmFuZ2VTbGlkZXJNb2RlbDtcbn0oRmxvYXRTbGlkZXJNb2RlbCkpO1xuZXhwb3J0IHsgRmxvYXRSYW5nZVNsaWRlck1vZGVsIH07XG52YXIgRmxvYXRTbGlkZXJWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGbG9hdFNsaWRlclZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmxvYXRTbGlkZXJWaWV3KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3BhcnNlX3ZhbHVlID0gcGFyc2VGbG9hdDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSB0aGUgdmFsdWUgb2YgdGhlIHNsaWRlciBiZWZvcmUgc2VuZGluZyBpdCB0byB0aGUgYmFjay1lbmRcbiAgICAgKiBhbmQgYXBwbHlpbmcgaXQgdG8gdGhlIG90aGVyIHZpZXdzIG9uIHRoZSBwYWdlLlxuICAgICAqL1xuICAgIEZsb2F0U2xpZGVyVmlldy5wcm90b3R5cGUuX3ZhbGlkYXRlX3NsaWRlX3ZhbHVlID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfTtcbiAgICByZXR1cm4gRmxvYXRTbGlkZXJWaWV3O1xufShJbnRTbGlkZXJWaWV3KSk7XG5leHBvcnQgeyBGbG9hdFNsaWRlclZpZXcgfTtcbnZhciBGbG9hdExvZ1NsaWRlclZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZsb2F0TG9nU2xpZGVyVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGbG9hdExvZ1NsaWRlclZpZXcoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fcGFyc2VfdmFsdWUgPSBwYXJzZUZsb2F0O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEZsb2F0TG9nU2xpZGVyVmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgdmFyIG1pbiA9IHRoaXMubW9kZWwuZ2V0KCdtaW4nKTtcbiAgICAgICAgdmFyIG1heCA9IHRoaXMubW9kZWwuZ2V0KCdtYXgnKTtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJyk7XG4gICAgICAgIHZhciBiYXNlID0gdGhpcy5tb2RlbC5nZXQoJ2Jhc2UnKTtcbiAgICAgICAgdmFyIGxvZ192YWx1ZSA9IE1hdGgubG9nKHZhbHVlKSAvIE1hdGgubG9nKGJhc2UpO1xuICAgICAgICBpZiAobG9nX3ZhbHVlID4gbWF4KSB7XG4gICAgICAgICAgICBsb2dfdmFsdWUgPSBtYXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobG9nX3ZhbHVlIDwgbWluKSB7XG4gICAgICAgICAgICBsb2dfdmFsdWUgPSBtaW47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kc2xpZGVyLnNsaWRlcignb3B0aW9uJywgJ3ZhbHVlJywgbG9nX3ZhbHVlKTtcbiAgICAgICAgdGhpcy5yZWFkb3V0LnRleHRDb250ZW50ID0gdGhpcy52YWx1ZVRvU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ3ZhbHVlJywgdmFsdWUsIHsgdXBkYXRlZF92aWV3OiB0aGlzIH0pO1xuICAgICAgICAgICAgdGhpcy50b3VjaCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBXcml0ZSB2YWx1ZSB0byBhIHN0cmluZ1xuICAgICAqL1xuICAgIEZsb2F0TG9nU2xpZGVyVmlldy5wcm90b3R5cGUudmFsdWVUb1N0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgZm9ybWF0ID0gdGhpcy5tb2RlbC5yZWFkb3V0X2Zvcm1hdHRlcjtcbiAgICAgICAgcmV0dXJuIGZvcm1hdCh2YWx1ZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQYXJzZSB2YWx1ZSBmcm9tIGEgc3RyaW5nXG4gICAgICovXG4gICAgRmxvYXRMb2dTbGlkZXJWaWV3LnByb3RvdHlwZS5zdHJpbmdUb1ZhbHVlID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcnNlX3ZhbHVlKHRleHQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogdGhpcyBoYW5kbGVzIHRoZSBlbnRyeSBvZiB0ZXh0IGludG8gdGhlIGNvbnRlbnRFZGl0YWJsZSBsYWJlbCBmaXJzdCwgdGhlXG4gICAgICogdmFsdWUgaXMgY2hlY2tlZCBpZiBpdCBjb250YWlucyBhIHBhcnNlYWJsZSB2YWx1ZSB0aGVuIGl0IGlzIGNsYW1wZWRcbiAgICAgKiB3aXRoaW4gdGhlIG1pbi1tYXggcmFuZ2Ugb2YgdGhlIHNsaWRlciBmaW5hbGx5LCB0aGUgbW9kZWwgaXMgdXBkYXRlZCBpZlxuICAgICAqIHRoZSB2YWx1ZSBpcyB0byBiZSBjaGFuZ2VkXG4gICAgICpcbiAgICAgKiBpZiBhbnkgb2YgdGhlc2UgY29uZGl0aW9ucyBhcmUgbm90IG1ldCwgdGhlIHRleHQgaXMgcmVzZXRcbiAgICAgKi9cbiAgICBGbG9hdExvZ1NsaWRlclZpZXcucHJvdG90eXBlLmhhbmRsZVRleHRDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuc3RyaW5nVG9WYWx1ZSh0aGlzLnJlYWRvdXQudGV4dENvbnRlbnQpO1xuICAgICAgICB2YXIgdm1pbiA9IHRoaXMubW9kZWwuZ2V0KCdtaW4nKTtcbiAgICAgICAgdmFyIHZtYXggPSB0aGlzLm1vZGVsLmdldCgnbWF4Jyk7XG4gICAgICAgIHZhciBiYXNlID0gdGhpcy5tb2RlbC5nZXQoJ2Jhc2UnKTtcbiAgICAgICAgaWYgKGlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5yZWFkb3V0LnRleHRDb250ZW50ID0gdGhpcy52YWx1ZVRvU3RyaW5nKHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5tYXgoTWF0aC5taW4odmFsdWUsIE1hdGgucG93KGJhc2UsIHZtYXgpKSwgTWF0aC5wb3coYmFzZSwgdm1pbikpO1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLm1vZGVsLmdldCgndmFsdWUnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZG91dC50ZXh0Q29udGVudCA9IHRoaXMudmFsdWVUb1N0cmluZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ3ZhbHVlJywgdmFsdWUsIHsgdXBkYXRlZF92aWV3OiB0aGlzIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMudG91Y2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZG91dC50ZXh0Q29udGVudCA9IHRoaXMudmFsdWVUb1N0cmluZyh0aGlzLm1vZGVsLmdldCgndmFsdWUnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBzbGlkZXIgdmFsdWUgaXMgY2hhbmdpbmcuXG4gICAgICovXG4gICAgRmxvYXRMb2dTbGlkZXJWaWV3LnByb3RvdHlwZS5oYW5kbGVTbGlkZXJDaGFuZ2UgPSBmdW5jdGlvbiAoZSwgdWkpIHtcbiAgICAgICAgdmFyIGJhc2UgPSB0aGlzLm1vZGVsLmdldCgnYmFzZScpO1xuICAgICAgICB2YXIgYWN0dWFsX3ZhbHVlID0gTWF0aC5wb3coYmFzZSwgdGhpcy5fdmFsaWRhdGVfc2xpZGVfdmFsdWUodWkudmFsdWUpKTtcbiAgICAgICAgdGhpcy5yZWFkb3V0LnRleHRDb250ZW50ID0gdGhpcy52YWx1ZVRvU3RyaW5nKGFjdHVhbF92YWx1ZSk7XG4gICAgICAgIC8vIE9ubHkgcGVyc2lzdCB0aGUgdmFsdWUgd2hpbGUgc2xpZGluZyBpZiB0aGUgY29udGludW91c191cGRhdGVcbiAgICAgICAgLy8gdHJhaXQgaXMgc2V0IHRvIHRydWUuXG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgnY29udGludW91c191cGRhdGUnKSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVTbGlkZXJDaGFuZ2VkKGUsIHVpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIHNsaWRlciB2YWx1ZSBoYXMgY2hhbmdlZC5cbiAgICAgKlxuICAgICAqIENhbGxpbmcgbW9kZWwuc2V0IHdpbGwgdHJpZ2dlciBhbGwgb2YgdGhlIG90aGVyIHZpZXdzIG9mIHRoZVxuICAgICAqIG1vZGVsIHRvIHVwZGF0ZS5cbiAgICAgKi9cbiAgICBGbG9hdExvZ1NsaWRlclZpZXcucHJvdG90eXBlLmhhbmRsZVNsaWRlckNoYW5nZWQgPSBmdW5jdGlvbiAoZSwgdWkpIHtcbiAgICAgICAgdmFyIGJhc2UgPSB0aGlzLm1vZGVsLmdldCgnYmFzZScpO1xuICAgICAgICB2YXIgYWN0dWFsX3ZhbHVlID0gTWF0aC5wb3coYmFzZSwgdGhpcy5fdmFsaWRhdGVfc2xpZGVfdmFsdWUodWkudmFsdWUpKTtcbiAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ3ZhbHVlJywgYWN0dWFsX3ZhbHVlLCB7IHVwZGF0ZWRfdmlldzogdGhpcyB9KTtcbiAgICAgICAgdGhpcy50b3VjaCgpO1xuICAgIH07XG4gICAgRmxvYXRMb2dTbGlkZXJWaWV3LnByb3RvdHlwZS5fdmFsaWRhdGVfc2xpZGVfdmFsdWUgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geDtcbiAgICB9O1xuICAgIHJldHVybiBGbG9hdExvZ1NsaWRlclZpZXc7XG59KEJhc2VJbnRTbGlkZXJWaWV3KSk7XG5leHBvcnQgeyBGbG9hdExvZ1NsaWRlclZpZXcgfTtcbnZhciBGbG9hdFJhbmdlU2xpZGVyVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRmxvYXRSYW5nZVNsaWRlclZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmxvYXRSYW5nZVNsaWRlclZpZXcoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fcGFyc2VfdmFsdWUgPSBwYXJzZUZsb2F0O1xuICAgICAgICAvLyBtYXRjaGVzOiB3aGl0ZXNwYWNlPywgZmxvYXQsIHdoaXRlc3BhY2U/LCAoaHlwaGVuLCBjb2xvbiwgb3IgZW4tZGFzaCksIHdoaXRlc3BhY2U/LCBmbG9hdFxuICAgICAgICBfdGhpcy5fcmFuZ2VfcmVnZXggPSAvXlxccyooWystXT8oPzpcXGQqXFwuP1xcZCt8XFxkK1xcLikoPzpbZUVdWy06XT9cXGQrKT8pXFxzKlstOuKAk11cXHMqKFsrLV0/KD86XFxkKlxcLj9cXGQrfFxcZCtcXC4pKD86W2VFXVsrLV0/XFxkKyk/KS87XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgdGhlIHZhbHVlIG9mIHRoZSBzbGlkZXIgYmVmb3JlIHNlbmRpbmcgaXQgdG8gdGhlIGJhY2stZW5kXG4gICAgICogYW5kIGFwcGx5aW5nIGl0IHRvIHRoZSBvdGhlciB2aWV3cyBvbiB0aGUgcGFnZS5cbiAgICAgKi9cbiAgICBGbG9hdFJhbmdlU2xpZGVyVmlldy5wcm90b3R5cGUuX3ZhbGlkYXRlX3NsaWRlX3ZhbHVlID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfTtcbiAgICByZXR1cm4gRmxvYXRSYW5nZVNsaWRlclZpZXc7XG59KEludFJhbmdlU2xpZGVyVmlldykpO1xuZXhwb3J0IHsgRmxvYXRSYW5nZVNsaWRlclZpZXcgfTtcbnZhciBGbG9hdFRleHRNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRmxvYXRUZXh0TW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmxvYXRUZXh0TW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgRmxvYXRUZXh0TW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0Zsb2F0VGV4dE1vZGVsJyxcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdGbG9hdFRleHRWaWV3JyxcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbnRpbnVvdXNfdXBkYXRlOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gRmxvYXRUZXh0TW9kZWw7XG59KEZsb2F0TW9kZWwpKTtcbmV4cG9ydCB7IEZsb2F0VGV4dE1vZGVsIH07XG52YXIgQm91bmRlZEZsb2F0VGV4dE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCb3VuZGVkRmxvYXRUZXh0TW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQm91bmRlZEZsb2F0VGV4dE1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEJvdW5kZWRGbG9hdFRleHRNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnQm91bmRlZEZsb2F0VGV4dE1vZGVsJyxcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdGbG9hdFRleHRWaWV3JyxcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbnRpbnVvdXNfdXBkYXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHN0ZXA6IDAuMVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBCb3VuZGVkRmxvYXRUZXh0TW9kZWw7XG59KEJvdW5kZWRGbG9hdE1vZGVsKSk7XG5leHBvcnQgeyBCb3VuZGVkRmxvYXRUZXh0TW9kZWwgfTtcbnZhciBGbG9hdFRleHRWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGbG9hdFRleHRWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZsb2F0VGV4dFZpZXcoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fcGFyc2VfdmFsdWUgPSBwYXJzZUZsb2F0O1xuICAgICAgICBfdGhpcy5fZGVmYXVsdF9zdGVwID0gJ2FueSc7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogSGFuZGxlIGtleSBwcmVzc1xuICAgICAqL1xuICAgIEZsb2F0VGV4dFZpZXcucHJvdG90eXBlLmhhbmRsZUtleXByZXNzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gT3ZlcndyaXRlIEludFRleHRWaWV3J3MgaGFuZGxlS2V5cHJlc3NcbiAgICAgICAgLy8gd2hpY2ggcHJldmVudHMgZGVjaW1hbCBwb2ludHMuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGUga2V5IHVwXG4gICAgICovXG4gICAgRmxvYXRUZXh0Vmlldy5wcm90b3R5cGUuaGFuZGxlS2V5VXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBPdmVyd3JpdGUgSW50VGV4dFZpZXcncyBoYW5kbGVLZXlVcFxuICAgICAgICAvLyB3aGljaCBwcmV2ZW50cyBkZWNpbWFsIHBvaW50cy5cbiAgICB9O1xuICAgIHJldHVybiBGbG9hdFRleHRWaWV3O1xufShJbnRUZXh0VmlldykpO1xuZXhwb3J0IHsgRmxvYXRUZXh0VmlldyB9O1xudmFyIEZsb2F0UHJvZ3Jlc3NNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRmxvYXRQcm9ncmVzc01vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZsb2F0UHJvZ3Jlc3NNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBGbG9hdFByb2dyZXNzTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0Zsb2F0UHJvZ3Jlc3NNb2RlbCcsXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnUHJvZ3Jlc3NWaWV3JyxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgICAgICBiYXJfc3R5bGU6ICcnLFxuICAgICAgICAgICAgc3R5bGU6IG51bGxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gRmxvYXRQcm9ncmVzc01vZGVsO1xufShCb3VuZGVkRmxvYXRNb2RlbCkpO1xuZXhwb3J0IHsgRmxvYXRQcm9ncmVzc01vZGVsIH07XG4iLCJpbXBvcnQgZm9ybWF0RGVjaW1hbCBmcm9tIFwiLi9mb3JtYXREZWNpbWFsLmpzXCI7XG5cbmV4cG9ydCB2YXIgcHJlZml4RXhwb25lbnQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgsIHApIHtcbiAgdmFyIGQgPSBmb3JtYXREZWNpbWFsKHgsIHApO1xuICBpZiAoIWQpIHJldHVybiB4ICsgXCJcIjtcbiAgdmFyIGNvZWZmaWNpZW50ID0gZFswXSxcbiAgICAgIGV4cG9uZW50ID0gZFsxXSxcbiAgICAgIGkgPSBleHBvbmVudCAtIChwcmVmaXhFeHBvbmVudCA9IE1hdGgubWF4KC04LCBNYXRoLm1pbig4LCBNYXRoLmZsb29yKGV4cG9uZW50IC8gMykpKSAqIDMpICsgMSxcbiAgICAgIG4gPSBjb2VmZmljaWVudC5sZW5ndGg7XG4gIHJldHVybiBpID09PSBuID8gY29lZmZpY2llbnRcbiAgICAgIDogaSA+IG4gPyBjb2VmZmljaWVudCArIG5ldyBBcnJheShpIC0gbiArIDEpLmpvaW4oXCIwXCIpXG4gICAgICA6IGkgPiAwID8gY29lZmZpY2llbnQuc2xpY2UoMCwgaSkgKyBcIi5cIiArIGNvZWZmaWNpZW50LnNsaWNlKGkpXG4gICAgICA6IFwiMC5cIiArIG5ldyBBcnJheSgxIC0gaSkuam9pbihcIjBcIikgKyBmb3JtYXREZWNpbWFsKHgsIE1hdGgubWF4KDAsIHAgKyBpIC0gMSkpWzBdOyAvLyBsZXNzIHRoYW4gMXkhXG59XG4iXSwic291cmNlUm9vdCI6IiJ9