'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M369.27 146H142.74C81.54 146 32 191.458 32 255.418 32 319.418 81.54 366 142.74 366h226.528C430.49 366 480 319.42 480 255.418 480 191.458 430.49 146 369.27 146zM200 266.697c0 2.698-2.42 5.303-5.238 5.303H160v35.14c0 2.83-3.104 4.86-5.803 4.86H132.77c-2.628 0-4.77-1.918-4.77-4.533V272H92.86c-2.83 0-4.86-3.104-4.86-5.803V244.77c0-2.628 1.918-4.77 4.533-4.77H128v-34.823c0-2.806 1.854-5.178 4.553-5.178h22.145c2.698 0 5.303 2.42 5.303 5.237V240h34.823c2.806 0 5.178 1.854 5.178 4.553v22.144zm119.766 8.79c-10.736 0-19.45-8.588-19.45-19.154 0-10.565 8.714-19.168 19.45-19.168 10.783 0 19.498 8.603 19.498 19.168 0 10.566-8.715 19.153-19.498 19.153zm42.548 41.814c-10.736 0-19.45-8.528-19.45-19.083 0-10.64 8.714-19.153 19.45-19.153 10.783 0 19.498 8.515 19.498 19.153 0 10.554-8.714 19.084-19.498 19.084zm0-83.685c-10.736 0-19.45-8.58-19.45-19.146 0-10.568 8.714-19.17 19.45-19.17 10.783 0 19.498 8.602 19.498 19.17 0 10.566-8.714 19.145-19.498 19.145zm42.548 41.87c-10.73 0-19.442-8.586-19.442-19.152 0-10.565 8.714-19.168 19.442-19.168 10.737 0 19.452 8.603 19.452 19.168 0 10.566-8.714 19.153-19.452 19.153z' })
      )
    )
  );
};

exports.default = Icon;