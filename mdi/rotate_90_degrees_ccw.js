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
      _react2.default.createElement('path', { d: 'M7.3 6.4L.9 12.9l6.5 6.5 6.4-6.5-6.5-6.5zm-3.6 6.5l3.6-3.7 3.7 3.7-3.7 3.7-3.6-3.7zm15.7-6.3C17.6 4.9 15.3 4 13 4V.8L8.8 5 13 9.2V6c1.8 0 3.6.7 4.9 2.1 2.8 2.7 2.8 7.1 0 9.9-1.3 1.3-3.1 2-4.9 2-1 0-1.9-.2-2.8-.6l-1.5 1.5c1.3.7 2.8 1.1 4.3 1.1 2.3 0 4.6-.9 6.4-2.6 3.5-3.6 3.5-9.3 0-12.8z' })
    )
  );
};

exports.default = Icon;