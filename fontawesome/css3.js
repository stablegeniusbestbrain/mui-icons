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
      _react2.default.createElement('path', { d: 'M3.7 1.7h20.1l-3.5 17.9-10.8 3.5-9.3-3.5.9-4.8h4l-.4 2 5.7 2.1 6.5-2.1.9-4.6H1.6l.8-3.9h16.2l.5-2.6H2.9z' })
    )
  );
};

exports.default = Icon;