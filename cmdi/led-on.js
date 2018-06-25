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
      _react2.default.createElement('path', { d: 'M11 0v4h2V0h-2zm7.3 2.3l-3.1 3 1.4 1.4 3.1-3-1.4-1.4zm-12.6 0L4.3 3.7l3 3 1.4-1.4-3-3zM12 6c-2.2 0-4 1.8-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6c0-2.2-1.8-4-4-4zM2 9v2h4V9H2zm16 0v2h4V9h-4z' })
    )
  );
};

exports.default = Icon;