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
      _react2.default.createElement('path', { d: 'M17.6 3c1.5 2.3 2.4 5.5 2.4 9 0 3.4-.9 6.7-2.4 9L16 20c1.3-1.9 2-4.9 2-8 0-3.1-.7-6.1-2-8l1.6-1zM6.4 3L8 4c-1.3 1.9-2 4.9-2 8 0 3.1.7 6.1 2 8l-1.6 1C4.9 18.7 4 15.4 4 12c0-3.4.9-6.7 2.4-9z' })
    )
  );
};

exports.default = Icon;