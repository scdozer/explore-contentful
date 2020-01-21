<!DOCTYPE html>
<html>
  <head>
    <title>JSON Form Editor Widget</title>
    <script src="https://unpkg.com/contentful-ui-extensions-sdk@3/dist/cf-extension-api.js"></script>
    <script src="https://unpkg.com/json-editor@0.7.28/dist/jsoneditor.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/contentful-ui-extensions-sdk@3/dist/cf-extension.css" />
  </head>
  <body>
    <script>
     JSONEditor.defaults.themes.contentful = (function (JSONEditor) {

         var PARENT = JSONEditor.AbstractTheme;

         var definition = {
             getFormControl: 'cf-form-field',
             getIndentedPanel: function () {
                 // No need for _super's .style attributes.
                 return document.createElement('div');
             },
             getFormInputField: 'cf-form-input',
             getFormInputDescription: 'cf-form-hint',
             getFormInputLabel: 'jfe-label',
             afterInputReady: function (input) {
                 input.cfFormField = input.cfFormField || this.closest(input, '.cf-form-field');
             },
             getButton: el(function (el, text, icon, title) {
                 el.className = text.innerText.match(/save/i) ? 'cf-btn-primary' : 'cf-btn-secondary';
             }),
             getHeader: el(function (el, text) {
                 if (!(text instanceof HTMLElement)) {
                     var label = document.createElement('span');
                     label.appendChild(document.createTextNode(text));
                     el.innerHTML = '';
                     el.appendChild(label);
                     text = label;
                 }
                 text.className = 'jfe-label jfe-header-label';
                 var el2 = document.createElement('div');
                 el2.innerHTML = el.innerHTML;
                 return el2;
             }),
             getHeaderButtonHolder: 'jfe-button-holder',
             getSelectInput: 'cf-form-input',
             getTextareaInput: 'cf-form-input',
             getSwitcher: function (options) {
                 var el = this.getSelectInput(options);
                 el.className += ' jfe-switcher';
                 return el;
             },
             getErrorMessage: function (text) {
                 var el = document.createElement('div');
                 el.appendChild(document.createTextNode(text));
                 el.className = 'cf-field-error';
                 return el;
             },
             addInputError: function (input, text) {
                 if (!input.cfFormField) {
                     return;
                 }
                 if (!input.cfFieldError) {
                     input.cfFieldError = document.createElement('div');
                     input.cfFieldError.className = 'cf-field-error';
                     input.cfFormField.appendChild(input.cfFieldError);
                 }
                 input.cfFieldError.textContent = text;
                 input.className += ' cf-has-error'
             },
             removeInputError: function (input) {
                 if (!input.cfFieldError) {
                     return;
                 }
                 input.cfFormField.removeChild(input.cfFieldError);
                 delete input.cfFieldError;
                 input.cfFormField.className = input.cfFormField.className.replace(/\s?cf-field-error/g, '');
                 input.className = input.className.replace(/\s?cf-has-error/g, '');
             }
         };

         // Replace strings in definition with functions which call _super() and add the
         // string as a class name.
         for (var name in definition) {
             var value = definition[name];
             if (typeof value === 'string') {
                 definition[name] = elCssClass(value);
             }
         }
         // Make all getters in the definition add a class name to the returned HTMLElement.
         // E.g. class="jfe-get-error-message" for element returned by getErrorMessage().
         for (var name in PARENT.prototype) {
             if (name.substr(0, 3) === 'get') {
                 var cssClass = name
                     .replace(/^get/, 'jfe')
                     .replace(/([A-Z])/g, '-$1')
                     .toLowerCase();
                 var superFn = typeof definition[name] === 'function' ? definition[name] : false;
                 definition[name] = elCssClass(cssClass, superFn);
             }
         }
         return PARENT.extend(definition);

         function elCssClass (value, _super) {
             return el(function (el) {
                 if (el instanceof HTMLElement) {
                     el.className += (el.className ? ' ' : '' ) + value;
                 }
             }, _super);
         }

         function el (fn, _super) {
             return function (el) {
                 var el = (_super || this._super).apply(this, arguments);
                 if(!_super) {
                     // Reset all class names coming from default theme.
                     el.className = '';
                 }
                 var callbackArgs = [el].concat(Array.prototype.slice.call(arguments));
                 return fn.apply(this, callbackArgs) || el;
             };
         }

     }(JSONEditor));



     // https://github.com/jdorn/json-editor/blob/master/examples/advanced.html
     // TODO: Make this configurable on Data Type level.
     /*eslint quotes: [2, "double"]*/
     window.CONTENTFUL_FORM_EDITOR_SCHEMA = {
         "title": "Shipping Info",
         "oneOf": [
             {
                 "$ref": "#/definitions/hasBox",
                 "title": "Has Box"
             },
             {
                 "$ref": "#/definitions/noBox",
                 "title": "No Box"
             }
         ],
         "definitions": {
             "hasBox": {
                 "title": "Shipping Info",
                 "type": "object",
                 "id": "shippingInfo",
                 "properties": {
                     "width": {
                         "type": "integer",
                         "description": "First and Last name",
                         "minLength": 4,
                         "propertyOrder": 10
                     },
                     "height": {
                         "type": "integer",
                         "default": 21,
                         "minimum": 18,
                         "maximum": 99,
                         "propertyOrder": 20
                     },
                     "length": {
                         "type": "integer",
                         "enum": [
                             "male",
                             "female"
                         ],
                         "propertyOrder": 30
                     },
                     "weight": {
                         "type": "integer",
                         "format": "color",
                         "title": "favorite color",
                         "default": "#19CD91",
                         "propertyOrder": 40
                     }
                 }
             },
             "noBox": {
                "title": "Shipping Info",
                "type": "object",
                "id": "shippingInfo",
                 "$ref": "#/definitions/noBox",
                 "properties": {
                    "width": {
                        "type": "integer",
                        "description": "First and Last name",
                        "minLength": 4,
                        "propertyOrder": 10
                    },
                    "height": {
                        "type": "integer",
                        "default": 21,
                        "minimum": 18,
                        "maximum": 99,
                        "propertyOrder": 20
                    },
                    "length": {
                        "type": "integer",
                        "enum": [
                            "male",
                            "female"
                        ],
                        "propertyOrder": 30
                    },
                    "weight": {
                        "type": "integer",
                        "format": "color",
                        "title": "favorite color",
                        "default": "#19CD91",
                        "propertyOrder": 40
                    }
                }
             }
         }
     };


     var cfExt = window.contentfulExtension || window.contentfulWidget;

     cfExt.init(initContentfulJsonFormEditor);

     function initContentfulJsonFormEditor (cfApi) {
         cfApi.window.startAutoResizer();

         var editorElem = createElement('div', {className: 'jfe-editor-root'});
         var editor = new JSONEditor(editorElem, {
             theme: 'contentful',
             schema: window.CONTENTFUL_FORM_EDITOR_SCHEMA,
             no_additional_properties: true,
             required_by_default: true,
             startval: cfApi.field.getValue(),
             disable_collapse: true,
             disable_properties: true,
             show_errors: 'always'
         });
         
         var watcherCallback = function(path) {
             cfApi.window.updateHeight();
             validateAndSave();
         };
  
         for (var key in editor.editors) {
             if (editor.editors.hasOwnProperty(key) && key !== 'root') {
                 editor.watch(key, watcherCallback.bind(editor, key));
             }
         }

         var validateAndSave = debounce(function () {
             var errors = editor.validate();

             if (errors.length === 0) {
                 var currentJSON = editor.getValue();
                 cfApi.field.setValue(currentJSON);
             }
         }, 150);
     }

     function createElement (elem, opts, parent) {
         var e = document.createElement(elem);
         var prop;

         for (prop in opts) {
             e[prop] = opts[prop];
         }
         parent = parent || document.body;
         parent.appendChild(e);
         return e;
     }

     // http://davidwalsh.name/javascript-debounce-function
     function debounce (func, wait) {
         var timeout;
         return function () {
             var context = this, args = arguments;
             var later = function () {
                 timeout = null;
                 func.apply(context, args);
             };
             clearTimeout(timeout);
             timeout = setTimeout(later, wait);
             if (!timeout) func.apply(context, args);
         };
     }


    </script>


  </body>
</html>
