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
      _react2.default.createElement('circle', { cx: '15.5', cy: '9.5', r: '1.5' }),
      _react2.default.createElement('circle', { cx: '8.5', cy: '9.5', r: '1.5' }),
      _react2.default.createElement('path', { d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm0-4c-1.5 0-2.7-.8-3.4-2H6.9c.8 2.1 2.8 3.5 5.1 3.5s4.3-1.4 5.1-3.5h-1.6c-.7 1.2-2 2-3.5 2z' })
    )
  );
};

exports.default = Icon;