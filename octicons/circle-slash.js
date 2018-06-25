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
      _react2.default.createElement('path', { d: 'M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5zm0 2c1.9 0 3.8.6 5.2 1.7l-12 12A8.6 8.6 0 0 1 3.4 12c0-4.7 3.9-8.6 8.6-8.6zm0 17.1c-1.9 0-3.7-.7-5.2-1.8l12-12c1.1 1.5 1.8 3.3 1.8 5.2 0 4.7-3.9 8.6-8.6 8.6z' })
    )
  );
};

exports.default = Icon;