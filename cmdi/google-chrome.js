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
      _react2.default.createElement('path', { d: 'M12 20l3.5-6h-.1c.4-.6.6-1.3.6-2 0-1.2-.5-2.3-1.4-3h4.8c.4.9.6 1.9.6 3 0 4.4-3.6 8-8 8zm-8-8c0-1.5.4-2.8 1.1-4l3.4 6h.1c.6 1.2 1.9 2 3.4 2 .5 0 .9-.1 1.3-.2l-2.4 4.1C7 19.4 4 16 4 12zm11 0c0 1.7-1.3 3-3 3s-3-1.3-3-3 1.3-3 3-3 3 1.3 3 3zm-3-8c3 0 5.5 1.6 6.9 4H12c-1.9 0-3.6 1.4-3.9 3.2L5.7 7.1C7.2 5.2 9.4 4 12 4zm0-2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z' })
    )
  );
};

exports.default = Icon;