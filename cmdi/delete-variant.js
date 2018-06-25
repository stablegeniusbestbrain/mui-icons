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
      _react2.default.createElement('path', { d: 'M21 3l-3 17.3c-.2 1-1 1.7-2 1.7H8c-1 0-1.8-.7-2-1.7L3 3h18zM5.4 5L8 20h8l2.6-15H5.4zM9 18v-4h4v4H9zm4-4.8L9.8 10 13 6.8l3.2 3.2-3.2 3.2z' })
    )
  );
};

exports.default = Icon;