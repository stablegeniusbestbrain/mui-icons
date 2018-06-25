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
      _react2.default.createElement('path', { d: 'M17.8 4.1L15.2 6l.9 3.1-2.6-1.8-2.6 1.8.9-3.1-2.6-1.9 3.2-.1 1.1-3 1.1 3 3.2.1zm3.5 6.9l-1.7 1.3.6 1.9-1.7-1.1-1.7 1.1.6-1.9-1.6-1.3 2-.1.7-1.9.7 1.9 2.1.1zM19 15.9c.8 0 1.7 1.1 1.2 1.9-.4.4-.7.9-1.1 1.3-3.9 3.9-10.3 3.9-14.2 0C1 15.2 1 8.8 4.9 4.9c.4-.4.9-.7 1.3-1.1.8-.5 1.9.4 1.9 1.2-.3 2.9.7 5.9 2.8 8.1 2.2 2.2 5.2 3.1 8.1 2.8zM17.3 18c-2.8-.2-5.6-1.4-7.8-3.5-2.1-2.2-3.3-5-3.5-7.8-2.8 3.1-2.7 7.9.4 11 3 3 7.8 3.1 10.9.3z' })
    )
  );
};

exports.default = Icon;