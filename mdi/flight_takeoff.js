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
      _react2.default.createElement('path', { d: 'M2.5 19h19v2h-19zm19.6-9.4c-.2-.8-1.1-1.2-1.9-1L14.9 10 8 3.6l-1.9.5 4.1 7.2-4.9 1.3-2-1.6-1.5.4 1.9 3.2.7 1.3 1.6-.4 5.3-1.4 4.4-1.2 5.3-1.4c.8-.2 1.3-1.1 1.1-1.9z' })
    )
  );
};

exports.default = Icon;