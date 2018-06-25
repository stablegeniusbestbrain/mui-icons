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
      _react2.default.createElement('path', { d: 'M13 14.1l2 2-2 2zm0-8.2l2 2-2 2zm-1.8 16.4l6.2-6.2-4.1-4.1 4.1-4.1-6.2-6.2v8.2L7.8 6.5 6.6 7.7l4.2 4.3-4.2 4.3 1.2 1.2 3.4-3.4v8.2zM20.9 12q0 2.8-.5 4.9t-1.1 3.4-1.9 2.2-2.5 1.2-2.9.3-2.9-.3-2.5-1.2-1.9-2.2-1.1-3.4-.5-4.9.5-4.9 1.1-3.4 1.9-2.2T9.1.3 12 0t2.9.3 2.5 1.2 1.9 2.2 1.1 3.4.5 4.9z' })
    )
  );
};

exports.default = Icon;