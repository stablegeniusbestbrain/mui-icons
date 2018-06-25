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
      _react2.default.createElement('path', { d: 'M13.4 19.3l3.2 3.2 1.4-1.4-3.2-3.2m.7-6.4L12 15.1l-3.5-3.6C7.6 10.6 7 9.4 7 8c0-2.8 2.2-5 5-5s5 2.2 5 5c0 1.4-.6 2.6-1.5 3.5zm1.4 1.5c1.3-1.3 2.1-3 2.1-5 0-3.9-3.1-7-7-7S5 4.1 5 8c0 2 .8 3.7 2.1 5l3.5 3.5L6 21.1l1.4 1.4 9.5-9.5z' })
    )
  );
};

exports.default = Icon;