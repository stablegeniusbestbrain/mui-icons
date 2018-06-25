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
      _react2.default.createElement('path', { d: 'M0 20h24v4H0z' }),
      _react2.default.createElement('path', { d: 'M11 3L5.5 17h2.3l1.1-3h6.2l1.1 3h2.3L13 3h-2zm-1.4 9L12 5.7l2.4 6.3H9.6z' })
    )
  );
};

exports.default = Icon;