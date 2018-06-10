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
      _react2.default.createElement('path', { d: 'M12 5c-3.9 0-7 3.1-7 7h2c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.9-3.1-7-7-7zm1 9.3c.9-.4 1.5-1.3 1.5-2.3 0-1.4-1.1-2.5-2.5-2.5S9.5 10.6 9.5 12c0 1 .6 1.9 1.5 2.3v3.3L7.6 21 9 22.4l3-3 3 3 1.4-1.4-3.4-3.4v-3.3zM12 1C5.9 1 1 5.9 1 12h2c0-5 4-9 9-9s9 4 9 9h2c0-6.1-4.9-11-11-11z' })
    )
  );
};

exports.default = Icon;