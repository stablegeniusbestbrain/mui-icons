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
      _react2.default.createElement('path', { d: 'M7 15h2v3h2v-3h2v3h2v-3h2v3h2V9h-4V6H9v3H5v9h2v-3zM4.4 3h15.2C20.9 3 22 4.1 22 5.4v14.2c0 1.3-1.1 2.4-2.4 2.4H4.4C3.1 22 2 20.9 2 19.6V5.4C2 4.1 3.1 3 4.4 3z' })
    )
  );
};

exports.default = Icon;