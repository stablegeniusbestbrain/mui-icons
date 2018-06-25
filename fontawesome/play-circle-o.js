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
      _react2.default.createElement('path', { d: 'M17.6 12q0 .5-.5.7L9.9 17q-.2.1-.5.1-.2 0-.4-.1-.4-.2-.4-.7V7.7q0-.5.4-.7.4-.3.9 0l7.2 4.3q.5.2.5.7zm1.7 0q0-2-1-3.7t-2.6-2.6-3.7-1-3.7 1-2.6 2.6-1 3.7 1 3.7 2.6 2.6 3.7 1 3.7-1 2.6-2.6 1-3.7zm3 0q0 2.8-1.4 5.2t-3.7 3.7-5.2 1.4-5.2-1.4-3.7-3.7T1.7 12t1.4-5.2 3.7-3.7T12 1.7t5.2 1.4 3.7 3.7 1.4 5.2z' })
    )
  );
};

exports.default = Icon;