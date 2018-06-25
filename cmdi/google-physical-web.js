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
      _react2.default.createElement('path', { d: 'M12 1.5c5 0 9 4 9 9 0 2.6-1.1 5-2.9 6.6L17 16c1.6-1.3 2.5-3.3 2.5-5.5C19.5 6.4 16.1 3 12 3s-7.5 3.4-7.5 7.5c0 2.2.9 4.2 2.5 5.5l-1.1 1.1c-1.8-1.6-2.9-4-2.9-6.6 0-5 4-9 9-9zm0 3c3.3 0 6 2.7 6 6 0 1.8-.8 3.4-2 4.5l-1.1-1.1c1-.8 1.6-2 1.6-3.4C16.5 8 14.5 6 12 6s-4.5 2-4.5 4.5c0 1.4.6 2.6 1.6 3.4L8 15c-1.2-1.1-2-2.7-2-4.5 0-3.3 2.7-6 6-6zM8.1 17.6l3.2-3.1c.4-.4 1-.4 1.4 0l3.2 3.1c.4.4.4 1.1 0 1.5l-3.2 3.1c-.4.4-1 .4-1.4 0l-3.2-3.1c-.4-.4-.4-1.1 0-1.5z' })
    )
  );
};

exports.default = Icon;