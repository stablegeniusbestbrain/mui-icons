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
      _react2.default.createElement('path', { d: 'M2.3 3L1 4.3l1.5 1.4c-.5.3-.9.6-1.3.9L3 9c.5-.4 1.1-.8 1.7-1.1l2.2 2.3c-.7.3-1.5.7-2.1 1.2l1.8 2.4c.8-.6 1.7-1 2.6-1.3l2.6 2.5c-1.3.1-2.5.5-3.4 1.2L12 21l2.5-3.3 3.2 3.3 1.3-1.3M12 3c-2.1 0-4.2.4-6.1 1.1l2.4 2.4C9.5 6.2 10.7 6 12 6c3.4 0 6.5 1.1 9 3l1.8-2.4C19.8 4.3 16.1 3 12 3zm0 6c-.4 0-.8 0-1.1.1l3.2 3.1c1.2.3 2.3.9 3.3 1.6l1.8-2.4C17.2 9.9 14.7 9 12 9z' })
    )
  );
};

exports.default = Icon;