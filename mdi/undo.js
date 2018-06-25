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
      _react2.default.createElement('path', { d: 'M12.5 8c-2.7 0-5 1-6.9 2.6L2 7v9h9l-3.6-3.6c1.4-1.2 3.1-1.9 5.1-1.9 3.5 0 6.6 2.3 7.6 5.5l2.4-.8C21.1 11 17.1 8 12.5 8z' })
    )
  );
};

exports.default = Icon;