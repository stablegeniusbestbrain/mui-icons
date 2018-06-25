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
      _react2.default.createElement('path', { d: 'M12 3c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9zM5.9 8.5c-1.9 3.3-.7 7.6 2.6 9.6 3.4 1.9 10.4-10.2 7-12.2-3.3-1.9-7.6-.7-9.6 2.6z' })
    )
  );
};

exports.default = Icon;