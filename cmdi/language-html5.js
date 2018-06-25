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
      _react2.default.createElement('path', { d: 'M12 17.6l4.1-1.2.5-6.1H9.4l-.2-2h7.6l.2-2H7l.6 6h6.8l-.2 2.6-2.2.6-2.2-.6-.2-1.7h-2l.3 3.2 4.1 1.2zM4.1 3h15.8l-1.4 16.2L12 21l-6.5-1.8L4.1 3z' })
    )
  );
};

exports.default = Icon;