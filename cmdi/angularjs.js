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
      _react2.default.createElement('path', { d: 'M12 2.5l8.8 3.2-1.3 11.6-7.5 4.2-7.5-4.2L3.2 5.7 12 2.5zm0 2L5 7l1.1 9.2 5.9 3.3 5.9-3.3L19 7l-7-2.5zm0 1.2L16.6 16h-1.7l-1-2.3H10L9.1 16H7.4L12 5.7zm1.3 6.6L12 9.1l-1.3 3.2h2.6z' })
    )
  );
};

exports.default = Icon;