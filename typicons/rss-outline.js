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
      _react2.default.createElement('path', { d: 'M8 5C6.3 5 5 6.3 5 8v9c0 2.2 1.8 4 4 4h9c1.7 0 3-1.3 3-3 0-7.2-5.8-13-13-13zm1 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm4.5 0c-.8 0-1.5-.7-1.5-1.5 0-1.9-1.6-3.5-3.5-3.5-.8 0-1.5-.7-1.5-1.5S7.7 11 8.5 11c3.6 0 6.5 2.9 6.5 6.5 0 .8-.7 1.5-1.5 1.5zm4 0c-.8 0-1.5-.7-1.5-1.5 0-4.1-3.4-7.5-7.5-7.5C7.7 10 7 9.3 7 8.5S7.7 7 8.5 7C14.3 7 19 11.7 19 17.5c0 .8-.7 1.5-1.5 1.5z' })
    )
  );
};

exports.default = Icon;