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
      _react2.default.createElement('path', { d: 'M22.7 9.8s-4-4.1-6-6.2c-.4-.4-1-.6-1.6-.6C14 3 13 3.9 13 5H5c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-6c1.4-1.5 2.7-2.8 2.7-2.8.4-.4.4-1 0-1.4zm-7.4 6.1l-.2.1H15v-4h-1c-1.8 0-3.3.7-4.8 2 .5-2.3 1.6-5 4.8-5h1V5H15.3c1.4 1.6 4 4.2 5.3 5.5-.3.3-4.3 4.4-5.3 5.4zM6 19V7h8v1c-4.7 0-6 4.9-6 8.5v.5c1.7-2.6 3.6-4 6-4v3c0 .6.5 1 1.1 1 .4 0 .7-.2.9-.4l2-2V19H6z' })
    )
  );
};

exports.default = Icon;