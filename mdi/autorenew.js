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
      _react2.default.createElement('path', { d: 'M12 6v3l4-4-4-4v3c-4.4 0-8 3.6-8 8 0 1.6.5 3 1.2 4.3l1.5-1.5C6.3 14 6 13 6 12c0-3.3 2.7-6 6-6zm6.8 1.7l-1.5 1.5c.4.8.7 1.8.7 2.8 0 3.3-2.7 6-6 6v-3l-4 4 4 4v-3c4.4 0 8-3.6 8-8 0-1.6-.5-3-1.2-4.3z' })
    )
  );
};

exports.default = Icon;